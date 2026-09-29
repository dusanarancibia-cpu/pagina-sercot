# Entrega Sercot para Fabián

Web completa y navegable para revisar e integrar con el panel. No está publicada y no envía consultas.

## Abrir

Extraer todo el ZIP. Abrir `web/index.html` permite revisar las páginas. Para comprobar el recorrido con historial y las funciones de navegador, usar un servidor local desde esta carpeta:

```sh
python -m http.server 8765 --bind 127.0.0.1 --directory web
```

Después abrir http://127.0.0.1:8765/ . Se requiere Python 3 únicamente para este servidor y para regenerar; el sitio publicado es HTML, CSS y JavaScript estático.

## Recorridos para revisar

- Portada → categoría → servicio → situaciones → resumen → solicitar contacto → nombre, teléfono y correo → solicitud preparada.
- Conversemos → una de cinco necesidades → situaciones → mismo recorrido de contacto.
- Campaña de médicos: `web/servicios/contabilidad-medicos.html`.
- Campaña de reciclaje: `web/servicios/contabilidad-reciclaje.html`. Se conserva como página especializada fuera de las tarjetas iniciales de portada y contabilidad.
- Las selecciones permiten varias situaciones. Cambiar de necesidad reinicia las situaciones y conserva el comentario durante la navegación interna; recargar pierde el borrador.

## Estado

Nueva entrada por necesidades integrada. Declaración de inventarios incorporada en la pregunta frecuente de reciclaje. Páginas médicas y de empresas visibles. La alternativa de comparación no forma parte de esta entrega.

El botón final copia una solicitud; no existe recepción, panel, correo ni envío automático. El agradecimiento mostrado está rotulado como ejemplo posterior al envío real. Ver INTEGRACION.md.

## Editar

`web/build.py` genera el contenido HTML. `web/assets/app.js` controla el formulario y las categorías; `web/assets/style.css` contiene estilos. Ejecutar `python web/build.py` y `python web/verify.py` tras editar. Las dos imágenes necesarias se incluyen; no hacen falta las carpetas privadas originales.

Antes de publicar deben definirse dominio y hosting, integración del panel, datos de contacto oficiales y revisión final de contenidos. La maqueta tiene noindex/nofollow; retirar ese control solo en la versión pública aprobada y preparar enlaces canónicos y sitemap para el dominio definitivo.

## Preguntas frecuentes implementadas
Cada servicio incorpora dos preguntas y respuestas en HTML. Se editan en web/service-faqs.json y se regeneran con build.py. Los requisitos tributarios pendientes siguen documentados en SEO; no están incorporados como afirmaciones.
