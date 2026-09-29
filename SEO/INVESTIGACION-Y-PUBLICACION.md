# SEO Sercot — base de trabajo, 23 septiembre 2026

Dominio previsto: https://sercot.cl, sujeto a confirmación. No se cambió ninguna web pública ni se habilitó indexación en la maqueta.

## Qué se investigó

Muestra pública de búsquedas sobre médicos, reciclaje/inventarios, devoluciones de IVA y servicios contables generales en Chile. Es una exploración cualitativa mediante buscador web, no una medición de posiciones en Google Chile ni de volumen. No se ha accedido a las cuentas de Search Console o Google Ads.

- Médicos: la página de MediTax https://meditax.cl/medico presenta honorarios, sociedad médica y patrimonio. Esto respalda investigar necesidades específicas, pero no prueba cuántas personas las buscan ni implica copiar promesas comerciales. Mantener una página médica diferenciada.
- Servicios generales: https://www.dpyme.cl/ y https://mauria.cl/servicios-contables/ distinguen contabilidad, renta y remuneraciones. Son ejemplos de oferta visible, no una clasificación competitiva exhaustiva.
- IVA: el SII separa devolución IVA exportador y cambio de sujeto en https://www.sii.cl/servicios_online/1042-3640.html . Conservar páginas separadas, sin presentar ambos procedimientos como sinónimos.
- Inventarios de reciclaje: la muestra no permitió identificar con certeza el trámite concreto al que se refiere Sercot. Confirmar nombre/formulario, alcance y destinatario antes de desarrollar requisitos o calendarios. No interpretar la falta de resultados como ausencia de demanda.

El CSV asigna a cada página una intención y variantes candidatas, además de títulos/descripciones actuales. No contiene volúmenes inventados ni prioridades basadas en tráfico supuesto. Las páginas ya están separadas; falta ampliar contenido útil aprobado para cada servicio.

## Investigación con datos propios

1. Search Console: solicitar al propietario acceso de lectura o exportación de Rendimiento para sercot.cl y sercotspa.cl, si están verificados. Usar el máximo histórico disponible hasta 16 meses, segmentando Chile y revisando consultas, páginas, clics, impresiones, CTR y posición. Separar búsquedas de marca de servicios. Si no hay propiedad o datos, registrar esa limitación, sin sustituirla con cifras supuestas.
2. Planificador de palabras clave de Google Ads: introducir grupos del CSV, segmentar Chile/español, anotar fecha, ubicación y periodo; exportar estimaciones y variantes. La competencia publicitaria no equivale a dificultad SEO. No activar campañas ni gastar presupuesto para esta investigación.
3. Revisar resultados por intención: páginas de servicios frente a guías, lenguaje de consulta y cobertura territorial. No crear páginas por comuna sin servicio real y contenido propio.
4. Priorizar combinando relevancia para Sercot, capacidad de atención, consultas reales e intención de contratación. Mantener todos los servicios; no convertir automáticamente devoluciones en protagonista de portada.

Documentación: Search Console https://support.google.com/webmasters/answer/7576553?hl=es ; Planificador https://support.google.com/google-ads/answer/7337243?hl=es .

## Preparación antes de publicar

- Confirmar dominio, https y variante con/sin www. CSV conserva rutas actuales .html para evitar cambios gratuitos; adaptar solo con mapa de redirecciones acordado.
- Inventariar URLs existentes de ambos dominios desde sitemap, rastreo y Search Console. No se ha hecho aún una auditoría de migración completa. Mapear cada URL antigua hacia su equivalente, sin redirigir indiscriminadamente todo a portada.
- Definir una URL canónica por página y generar sitemap con las URLs públicas finales. No usar direcciones localhost ni archivos del computador. No generar todavía un sitemap público con un dominio no confirmado.
- Conservar títulos/descripciones distintos y encabezados que expliquen el servicio; ampliar alcance, proceso y preguntas reales aprobadas. No añadir acreditaciones, oficinas, reseñas o resultados no demostrados.
- Reciclaje permanece fuera de la primera elección. Tiene un enlace relacionado desde cambio de sujeto; revisar que ese enlace siga siendo pertinente y rastreable. No es necesario mezclarlo con médicos para enlazarlo.
- Mantener noindex en pruebas. Al publicar la versión aprobada, retirar noindex/nofollow y comprobar también encabezados HTTP y robots.txt. Enviar sitemap y revisar URLs en Search Console; no hay garantía de indexación o posición.
- Revisar móvil, rendimiento, recursos y códigos HTTP reales en hosting. Configurar medición de consultas confirmadas con Fabián: el botón copiar no representa una consulta recibida.
- Comparar resultados posteriores con la línea base anterior y revisar errores tras el lanzamiento; acordar responsable y seguimiento.

Referencias técnicas: https://developers.google.com/search/docs/crawling-indexing/links-crawlable ; https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap ; https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls .

## Pendientes necesarios

Acceso o exportaciones de Search Console; datos del Planificador si existe cuenta; confirmación final de dominio; alcance territorial; detalle de declaración de inventarios. Se puede seguir afinando contenido mientras llegan esos datos. La preparación técnica de producción depende del hosting y la integración de Fabián.
