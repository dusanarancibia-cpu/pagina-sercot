# Preparación para búsquedas con IA

Estado: guía incorporada a la entrega, pendiente de ejecución en hosting público. La maqueta mantiene noindex. No se han cambiado DNS, robots de producción ni accesos.

## Contenido

Acompaña esta guía un borrador de 20 preguntas y respuestas para los diez servicios. Publicar solo las respuestas verificadas por Sercot. Explicar para quién es el servicio, qué hace el equipo, cómo comienza la atención y qué depende de revisar antecedentes. Añadir autor/revisor profesional y fechas de revisión cuando sean reales; no inventar credenciales. Vincular normas o formularios al SII al incorporar detalles tributarios. Mantener separados IVA exportador y cambio de sujeto.

## Acceso técnico para Fabián

En producción, confirmar HTML legible, URLs estables, enlaces internos rastreables, respuesta HTTP correcta y ausencia de bloqueos involuntarios en hosting/CDN. La página de reciclaje conserva su enlace pertinente desde cambio de sujeto; no hace falta ponerla junto a médicos. Canonical y sitemap usarán el dominio confirmado.

Para Google, las funciones de IA utilizan la base de SEO habitual: páginas indexables, contenido útil y coherencia entre texto visible y marcado. No existe un archivo ni esquema especial obligatorio para aparecer. No ofrecer llms.txt como garantía de posicionamiento. La indexación y las citas no están garantizadas.

Para otros motores, comprobar sus instrucciones vigentes antes de configurar robots y firewall. Revisar por separado las políticas de búsqueda y de entrenamiento: permitir descubrimiento no implica que se deba habilitar indiscriminadamente cualquier rastreador. Documentación oficial de OpenAI: https://developers.openai.com/api/docs/bots . No se ha aplicado ninguna autorización nueva a bots en este proyecto.

## Medición sin conclusiones falsas

Google informa el tráfico de sus funciones de IA dentro del tipo Web en Search Console; no atribuir todo cambio de tráfico a IA. Registrar visitas referidas cuando el navegador conserve la fuente y consultas realmente recibidas en el panel. Una prueba manual de una pregunta en un asistente es una observación puntual, no una medición estable de posición. No prometer presencia repetida ni volumen de leads.

Fuente principal: https://developers.google.com/search/docs/appearance/ai-features (consultada el 23 septiembre 2026).

## Siguiente paso: Search Console

Estado de la cuenta desconocido. El acceso a NIC Chile no confirma una propiedad de Search Console. Primero el propietario entra con su cuenta de Google y comprueba si aparecen sercot.cl y sercotspa.cl. No enviar contraseñas.

Si existe propiedad y hay datos: exportar consultas y páginas de Rendimiento con país Chile y periodo comparable, además del estado de indexación y sitemaps. Usarlos para ajustar el mapa de servicios y definir línea base.

Si existe sin datos suficientes: comprobar verificación, cobertura temporal e indexación antes de interpretar ausencia de demanda. Si no existe propiedad: verificarla siguiendo Google; determinar dónde se administra realmente el DNS. Tener acceso al registrador no significa que allí estén los registros DNS. No cambiar servidores de nombres para esta tarea. Después revisar los datos que Google vaya mostrando; no prometer recuperación de historial.

El análisis de cuenta queda pendiente de acceso autorizado o exportaciones. La revisión pública ya está documentada en INVESTIGACION-Y-PUBLICACION.md. Referencia: https://support.google.com/webmasters/answer/7576553?hl=es .

## Actualización de implementación
Las 20 respuestas de alcance comercial confirmado ya están integradas en las diez páginas, en HTML y desplegables nativos. Las ampliaciones tributarias de cada ficha siguen pendientes. Producción, rastreo e indexación no han sido activados.
