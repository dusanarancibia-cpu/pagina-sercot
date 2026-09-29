# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Contexto

Sitio web de **Sercot SPA**, empresa de servicios contables y tributarios en Chile. Dominios: `sercot.cl` (principal) y `sercotspa.cl` (redirige a `sercot.cl`), ambos en cPanel. Esto es una **maqueta estática** de la nueva web; aún no está publicada. El nombre legal es **Sercot SPA** (ya corregido desde "Ltda" en `build.py` y `app.js`).

Idioma del sitio y de la documentación: español de Chile (`lang="es-CL"`).

## Comandos

Ejecutar desde la raíz del repositorio (requiere Python 3; el sitio publicado es solo HTML/CSS/JS estático):

```sh
python web/build.py      # regenera TODAS las páginas HTML
python web/verify.py     # valida enlaces locales, anclas, H1 único, títulos/descripciones únicos, noindex
python -m http.server 8765 --bind 127.0.0.1 --directory web   # vista local en http://127.0.0.1:8765/
```

No hay linter, framework de tests ni gestor de paquetes. Ejecutar `build.py` y luego `verify.py` tras cualquier cambio.

## Arquitectura

- **Los `.html` de `web/` son generados. No editarlos a mano**: `web/build.py` los sobrescribe. Todo el contenido vive en `build.py`: la lista `services` (10 servicios), la plantilla `shell()` (cabecera, pie, meta), las categorías de `servicios/index.html` y los mapas de servicios relacionados.
- Preguntas frecuentes por servicio: `web/service-faqs.json`, indexado por la posición del servicio en `services` (2 por servicio). Cambiar el orden de `services` desincroniza el JSON y los índices de `categories`, `related_indices` y `cards(indices=...)`.
- `web/assets/app.js` implementa el recorrido de consulta de `contacto.html` (necesidad → situaciones → resumen → datos de contacto → solicitud). Los textos de ayuda por servicio (`hints`, `welcomes`) están duplicados en JS, no en `build.py`. El servicio llega por `?servicio=<slug>` desde las páginas de servicio.
- `web/assets/style.css` contiene todos los estilos. El cache-buster `?v=15` está fijo en `shell()`; súbelo al cambiar CSS/JS.
- `build.py` copia dos fotos desde `../Fotos reales/` (carpeta privada, no incluida) hacia `web/assets/`. Si no existe, usa las copias ya presentes en `assets/`.
- Los identificadores de necesidad `tema-tributario`, `crear-organizar` y `orientacion` no son servicios reales; solo existen en el selector de contacto.

## Estado y decisiones pendientes

- Versión final lista para publicar: sin `noindex`, sin barra de vista previa, con canonical por página (`shell(..., path)`), `robots.txt` y `sitemap.xml` generados por `build.py`. `verify.py` falla si una página tiene `noindex`.
- **El formulario no envía a un backend**: el paso final abre WhatsApp (+56 9 7308 2614) con la solicitud escrita. Hay además un botón flotante de WhatsApp en todas las páginas (`shell()` + final de `style.css`). El panel de Fabián sigue pendiente; `INTEGRACION.md` define el punto de conexión (`showContact()` / `showRequest()` en `app.js`) y el contrato propuesto.
- Publicación manual: `sercot-sitio.zip` (solo archivos publicables, sin `build.py`, `verify.py` ni `service-faqs.json`) se sube y extrae desde el Administrador de archivos de cPanel en `public_html`. Ambos dominios usan `/public_html`. El hosting no tiene Git Version Control y la cuenta de GitHub tiene un problema de facturación que impide GitHub Actions (`.github/workflows/deploy.yml` queda sin uso). Repo: `dusanarancibia-cpu/pagina-sercot`.
- Alcance: solo pequeños arreglos y mejoras puntuales; no rediseñar ni reescribir estructura, diseño o contenido. Falta confirmar qué URLs antiguas requieren redirecciones 301 (`.htaccess`), y hacer respaldo del WordPress actual antes de reemplazar.
- Las afirmaciones tributarias no están confirmadas (p. ej., qué es exactamente la "declaración de inventarios" de reciclaje). No agregar requisitos o plazos tributarios no aprobados.

## Documentación existente

- `LEEME.md`: recorridos de revisión y edición. `INTEGRACION.md`: contrato con el panel. `VALIDACION.md`: qué se probó y qué no.
- `SEO/`: investigación cualitativa, `mapa-servicios.csv` (consulta principal, título y descripción por página) y guías de preguntas para búsquedas con IA. No contiene volúmenes de búsqueda medidos.
