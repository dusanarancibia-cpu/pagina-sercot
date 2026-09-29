# Conexión de consultas al panel

## Lo que ya entrega la interfaz

El visitante elige una necesidad general o llega a un servicio por enlace directo. Marca una o varias situaciones, agrega un comentario opcional y revisa el resumen. Después solicita contacto e ingresa nombre, teléfono y correo. El canal debe recibir ese contexto completo sin pedir que lo repita.

## Punto concreto de conexión

Archivo `web/assets/app.js`: `showContact()` valida y guarda los datos; `showRequest()` muestra la solicitud final y actualmente ofrece copiar. Incorporar en esa pantalla un botón explícito «Enviar solicitud» conectado al backend de Fabián. No enviar al seleccionar una situación ni al preparar el resumen. Conservar editar y los datos ante fallos.

Variables actuales en el mismo ámbito: `choice.value` (identificador), `selectedName()` (nombre), `situation` (array), `draft` (comentario), `contactName`, `contactPhone`, `contactEmail`. `consultationText()` prepara la presentación legible; enviar también los campos separados al panel.

## Contrato propuesto, por acordar con Fabián

No hay endpoint implementado. Un posible POST de solicitudes debería recibir:

```json
{
  "serviceId": "contabilidad-medicos",
  "serviceName": "Contabilidad para médicos",
  "situations": ["Mi actividad independiente", "Mi sociedad médica"],
  "message": "Comentario opcional",
  "contact": {"name": "Ejemplo", "phone": "+56912345678", "email": "ejemplo@example.com"},
  "contactRequested": true,
  "source": {"page": "/contacto.html", "campaign": null}
}
```

Los identificadores generales nuevos son `tema-tributario`, `crear-organizar` y `orientacion`; no todos representan un servicio ya contratado. El origen de campaña todavía no se captura: si se requieren UTM, conservarlas desde la página de aterrizaje y pasarlas como campos acotados, sin incluir datos personales en la URL.

El servidor debe validar campos y límites, crear el caso de forma durable, asignar identificador y evitar duplicados por reintento. La interfaz debe desactivar envíos repetidos mientras espera. Las credenciales del panel pertenecen al servidor, nunca a los archivos públicos. Aplicar controles de abuso y acceso al panel según la implementación elegida.

Solo después de confirmar que el caso fue registrado, mostrar «Gracias por contactar a Sercot. Hemos recibido tu consulta. Nuestro equipo revisará los antecedentes que compartiste y se pondrá en contacto contigo por teléfono o correo electrónico para conversar sobre tu caso y orientarte en los siguientes pasos». No se ha acordado un plazo de respuesta. Si falla o queda incierto, conservar la solicitud y ofrecer reintentar sin afirmar recepción.

## Decisiones del panel

Acordar endpoint y autenticación entre servidores, responsable inicial, estados (por ejemplo nuevo/en gestión/cerrado), notificaciones, permisos, retención de datos y plazo de respuesta que Sercot puede comprometer. La solicitud autoriza contacto sobre ese caso; no implica suscripción publicitaria.

## Criterios de aceptación

- Datos y todas las situaciones llegan al caso correcto, también desde campaña de médicos y reciclaje.
- Edición conserva contexto; otra necesidad no arrastra selecciones incompatibles.
- Rechazo de validación, fallo de red y reintento no pierden texto ni duplican casos.
- Confirmación aparece únicamente tras recepción real.
- Nombre, teléfono y correo se validan en cliente y servidor.
- Prueba móvil y navegación con teclado; panel accesible solo a usuarios autorizados.
