const menu=document.querySelector('.menu-toggle');
const nav=document.querySelector('#navigation');
menu?.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')==='true';menu.setAttribute('aria-expanded',String(!open));nav.classList.toggle('open',!open)});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav?.classList.contains('open')){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.focus()}});
const choice=document.querySelector('#service-choice');
if(choice){
  const guide=document.querySelector('.guide');
  const intro=guide.querySelector('h2');
  const label=guide.querySelector('label');
  const next=document.querySelector('#guide-next');
  const result=document.querySelector('#guide-result');
  result.removeAttribute('role'); result.removeAttribute('aria-live');
  const steps=document.createElement('p');steps.className='journey-steps';guide.prepend(steps);
  const hints={
 'tema-tributario':'Puedes indicar qué impuesto o gestión necesitas revisar.',
 'crear-organizar':'Puedes contarnos en qué etapa se encuentra tu actividad.',
    'contabilidad-empresas':'Cuéntanos a qué se dedica tu empresa y qué necesitas ordenar de su contabilidad.',
    'remuneraciones':'Indica cuántas personas trabajan en tu empresa y qué apoyo laboral necesitas.',
    'operacion-renta':'Indica el año que necesitas revisar y si la consulta es para una empresa, socios o ambos.',
    'contabilidad-medicos':'Cuéntanos cómo ejerces tu actividad médica y qué te gustaría revisar.',
    'devolucion-iva-cambio-sujeto':'Describe tu actividad, el período que necesitas revisar y en qué etapa está tu solicitud, si ya la iniciaste.',
    'devolucion-iva-exportador':'Describe qué exporta tu empresa, el período que quieres revisar y si ya existe una solicitud.',
    'organizacion-societaria':'Cuéntanos qué necesitas ordenar en tus sociedades o planificar para el futuro.',
    'creacion-empresas':'Describe la actividad que quieres iniciar y qué trámites has realizado, si corresponde.',
    'asesoria-tributaria':'Cuéntanos qué decisión necesitas tomar o qué duda quieres revisar con el equipo.',
    'contabilidad-reciclaje':'Describe la actividad de reciclaje de tu empresa y qué apoyo contable o tributario necesitas.',
    'orientacion':'Cuéntanos con tus palabras qué necesitas resolver. No es necesario que sepas el nombre del servicio.'
  };
  const welcomes={
 'tema-tributario':['Entendamos qué necesitas resolver con tus impuestos.','Puede que tengas una declaración pendiente, una duda o una devolución por revisar. Partamos por tu necesidad para identificar el apoyo adecuado.',['Preparar o revisar una declaración','Consultar por una devolución de IVA','Entender mi situación tributaria']],
 'crear-organizar':['Tu actividad puede necesitar un nuevo comienzo o una nueva estructura.','Cuéntanos en qué etapa estás para conversar sobre cómo organizar tu actividad y los próximos pasos.',['Crear una empresa','Reorganizar una empresa existente','Evaluar qué estructura necesito']],
    'contabilidad-empresas':['Que tus números te ayuden a entender tu negocio.','Quizás necesitas ordenar tu contabilidad, cambiar de contador o comprender mejor la información que recibes. En Sercot podemos acompañarte desde ese punto.',['Ordenar mi contabilidad','Cambiar de contador','Entender mis resultados']],
    'remuneraciones':['El trabajo de tu equipo también necesita una gestión ordenada.','Si estás contratando, preparando liquidaciones o buscando apoyo con la documentación laboral, podemos ayudarte a organizar esas tareas.',['Gestionar remuneraciones','Preparar contratos','Revisar documentación laboral']],
    'operacion-renta':['El cierre del año empieza por saber qué tienes y qué falta.','Puede que necesites preparar tu declaración o que todavía tengas antecedentes por ordenar. Revisemos desde dónde comenzar.',['Preparar mi renta','Ordenar antecedentes','Revisar la renta de empresa y socios']],
    'contabilidad-medicos':['Tu práctica médica tiene necesidades contables propias.','Ya sea que trabajes de forma independiente o mediante una sociedad, podemos ayudarte a revisar tu organización y comprender tus obligaciones tributarias.',['Mi actividad independiente','Mi sociedad médica','Si me conviene otra estructura']],
    'devolucion-iva-cambio-sujeto':['Una devolución requiere conocer bien el caso y sus antecedentes.','En Sercot trabajamos con solicitudes por cambio de sujeto. Si quieres evaluar una devolución o necesitas apoyo con una gestión iniciada, podemos revisar tu situación.',['Evaluar si corresponde solicitarla','Preparar los antecedentes','Revisar una solicitud iniciada']],
    'devolucion-iva-exportador':['Tu actividad exportadora, con acompañamiento especializado.','Puede que estés evaluando tu primera solicitud o que ya hayas iniciado el proceso. En Sercot acompañamos estas gestiones y podemos orientarte sobre el siguiente paso.',['Evaluar una posible devolución','Preparar una solicitud','Revisar una solicitud iniciada']],
    'organizacion-societaria':['Cuando tu actividad cambia, vale la pena revisar cómo está organizada.','Si tienes varias sociedades o estás pensando en la continuidad de tu patrimonio, podemos conversar sobre tu estructura actual y los aspectos contables y tributarios que necesitas evaluar.',['Ordenar varias empresas','Revisar mi estructura actual','Planificar la continuidad patrimonial']],
    'creacion-empresas':['No necesitas llegar con todos los trámites resueltos.','Si tienes una actividad en mente, podemos ayudarte a evaluar cómo organizarla y acompañarte en su puesta en marcha, hasta la primera factura.',['Tengo una idea y necesito orientación','Quiero constituir mi empresa','Ya inicié algunos trámites']],
    'asesoria-tributaria':['Puedes empezar con una pregunta.','Si tienes una decisión pendiente o has recibido opiniones distintas, una asesoría puede ayudarte a ordenar tus antecedentes y entender qué alternativas evaluar.',['Una decisión sobre mi actividad','Opiniones o alternativas distintas','Una duda tributaria concreta']],
    'contabilidad-reciclaje':['Conocer tu rubro ayuda a comprender tus números.','En Sercot tenemos experiencia contable y tributaria con empresas de reciclaje. Podemos conversar sobre tu operación y el apoyo que necesitas para organizarla.',['La contabilidad de mi operación','Una consulta tributaria del rubro','Una posible devolución de IVA']],
    'orientacion':['No necesitas saber el nombre del servicio para comenzar.','Podemos partir por lo que hoy te preocupa y ayudarte a identificar qué apoyo necesitas.',['Quiero ordenar mi negocio','Tengo una duda sobre impuestos','Quiero iniciar una actividad']]
  };
  let draft='', situation=[], situationService='', contactName='', contactPhone='', contactEmail='';
  const consultationText=()=>[situation.length?'Situaciones: '+situation.join('; '):'',draft].filter(Boolean).join('\n\n');
  const el=(tag,text,cls)=>{const n=document.createElement(tag);if(text)n.textContent=text;if(cls)n.className=cls;return n};
  const selectedName=()=>choice.value==='orientacion'?'Orientación inicial':choice.selectedOptions[0].text;
  const focusHeading=()=>{intro.tabIndex=-1;intro.focus({preventScroll:true});intro.scrollIntoView({block:'start',behavior:'auto'})};
  function showChoice(){
    steps.textContent='Tu necesidad → Tu situación → Resumen → Contacto';
    intro.textContent='¿En qué podemos ayudarte?';label.hidden=choice.hidden=next.hidden=true;result.replaceChildren();
    result.append(el('p','No necesitas conocer el nombre del servicio. Elige lo que hoy necesitas resolver.','welcome-copy'));
    const options=el('div',null,'need-options');
    [['contabilidad-empresas','Llevar mi contabilidad','Ordenar mis números o buscar acompañamiento.'],['tema-tributario','Resolver un tema tributario','Declaraciones, impuestos o devoluciones.'],['remuneraciones','Gestionar remuneraciones','Apoyo con pagos y documentación de mi equipo.'],['crear-organizar','Crear o reorganizar una empresa','Dar el primer paso o revisar mi estructura.'],['orientacion','Necesito orientación','Conversar para entender por dónde empezar.']].forEach(([value,title,detail])=>{const button=el('button');button.type='button';const copy=el('span',title);copy.append(el('small',detail));button.append(copy,el('span','→'));button.onclick=()=>{choice.value=value;showForm()};options.append(button)});
    result.append(options);
    history.replaceState(null,'',location.pathname);
  }
  function showForm(focus=true){
    if(!choice.value){result.textContent='Selecciona una opción para continuar.';choice.focus();return}
    steps.textContent='1 · Tu situación   /   2 · Resumen   /   3 · Contacto';
    const welcome=welcomes[choice.value]||welcomes.orientacion;
    intro.textContent=welcome[0];label.hidden=choice.hidden=next.hidden=true;result.replaceChildren();
    if(situationService!==choice.value){situation=[];situationService=choice.value}
    history.replaceState(null,'',location.pathname+'?servicio='+encodeURIComponent(choice.value));
    const context=el('div',null,'chosen-service');context.append(el('small','TU CONSULTA ES SOBRE'),el('strong',selectedName()));
    const change=el('button','Cambiar necesidad','secondary-action');change.type='button';change.onclick=()=>{showChoice();focusHeading()};context.append(change);
    const greeting=el('p',welcome[1],'welcome-copy');
    const form=el('form');const fieldset=el('fieldset',null,'situation-options');fieldset.append(el('legend','¿Qué situaciones se aplican a ti? Puedes marcar varias.'));
    const guidance=el('p',null,'situation-guidance');guidance.setAttribute('role','status');
    const fieldLabel=el('label','¿Quieres agregar algo? (opcional)');fieldLabel.htmlFor='consultation';
    const help=el('p',hints[choice.value]||hints.orientacion,'field-help');help.id='consultation-help';
    const field=el('textarea');field.id='consultation';field.rows=3;field.maxLength=2000;field.value=draft;field.setAttribute('aria-describedby','consultation-help');field.placeholder='Puedes añadir un detalle que te parezca importante…';field.oninput=()=>{draft=field.value;field.setCustomValidity('')};
    function updateGuidance(){const other=situation.includes('Mi situación es otra');field.required=other;field.minLength=other?10:0;fieldLabel.textContent=other?'Cuéntanos tu situación':'¿Quieres agregar algo? (opcional)';guidance.textContent=other?'Está bien si tu caso no encaja en estas opciones. Cuéntanos lo que necesitas y lo revisamos contigo.':situation.length?'Revisaremos contigo: '+situation.join(', ')+'. '+hints[choice.value]+' Puedes añadir un detalle ahora o continuar con estas opciones.':'';}
    [...welcome[2],'Mi situación es otra'].forEach((option,index)=>{const row=el('label',null,'situation-option');const radio=el('input');radio.type='checkbox';radio.name='situation';radio.value=option;radio.checked=situation.includes(option);radio.onchange=()=>{situation=Array.from(fieldset.querySelectorAll('input:checked')).map(input=>input.value);updateGuidance()};row.append(radio,el('span',option),el('span','→','option-arrow'));fieldset.append(row)});updateGuidance();
    const submit=el('button','Preparar resumen →','button');submit.type='submit';
    form.append(fieldset,guidance,fieldLabel,help,field,submit);form.onsubmit=e=>{e.preventDefault();if(!situation.length){guidance.textContent='Marca al menos una situación para continuar.';fieldset.querySelector('input').focus();return}if(situation.includes('Mi situación es otra')&&field.value.trim().length<10){field.setCustomValidity('Cuéntanos un poco más: escribe al menos 10 caracteres.');field.reportValidity();return}draft=field.value;showSummary()};
    result.append(greeting,context,form);if(focus)focusHeading();
  }
  function showSummary(){
    steps.textContent='✓ Tu situación / Resumen / Contacto';intro.textContent='Tu consulta está preparada';result.replaceChildren();
    const text='Consulta para Sercot SPA\nServicio: '+selectedName()+'\n\n'+consultationText();
    const summary=el('div',null,'consultation-summary');summary.append(el('small','SERVICIO'),el('h3',selectedName()),el('p',consultationText()));
    const notice=el('p','¿Quieres conversar con Sercot sobre esta consulta? En el siguiente paso puedes dejar tu nombre, teléfono y correo.','delivery-note');
    const request=el('button','Quiero que me contacten →','button');request.type='button';request.onclick=showContact;
    const edit=el('button','Editar mi consulta','secondary-action');edit.type='button';edit.onclick=()=>showForm();
    result.append(summary,notice,request,edit);focusHeading();
  }
  function showContact(){
    steps.textContent='✓ Consulta   /   ✓ Resumen   /   3 · Contacto';intro.textContent='¿Cómo te contactamos?';result.replaceChildren();
    const context=el('div',null,'chosen-service');context.append(el('small','CONVERSAREMOS SOBRE'),el('strong',selectedName()),el('p',consultationText()));
    const form=el('form');
    const nameLabel=el('label','Tu nombre');nameLabel.htmlFor='contact-name';
    const name=el('input');name.id='contact-name';name.type='text';name.autocomplete='name';name.required=true;name.maxLength=100;name.value=contactName;
    name.oninput=()=>{contactName=name.value;name.setCustomValidity('')};
    const phoneLabel=el('label','Teléfono de contacto');phoneLabel.htmlFor='contact-phone';
    const phone=el('input');phone.id='contact-phone';phone.type='tel';phone.autocomplete='tel';phone.required=true;phone.maxLength=25;phone.placeholder='Ej.: +56 9 1234 5678';phone.value=contactPhone;
    phone.oninput=()=>{contactPhone=phone.value;phone.setCustomValidity('')};
    const emailLabel=el('label','Correo electrónico');emailLabel.htmlFor='contact-email';
    const email=el('input');email.id='contact-email';email.type='email';email.autocomplete='email';email.required=true;email.maxLength=254;email.value=contactEmail;email.oninput=()=>{contactEmail=email.value};
    const purpose=el('p','Al solicitar contacto, pides que Sercot te contacte para conversar sobre la consulta que acabas de preparar.','field-help');
    const note=el('p','Tus datos solo se usan para armar tu solicitud. Podrás revisarla antes de enviarla por WhatsApp.','delivery-note');
    const submit=el('button','Preparar mi solicitud de contacto →','button');submit.type='submit';
    const back=el('button','Volver al resumen','secondary-action');back.type='button';back.onclick=showSummary;
    form.append(nameLabel,name,phoneLabel,phone,emailLabel,email,purpose,note,submit,back);
    form.onsubmit=e=>{e.preventDefault();if(name.value.trim().length<2){name.setCustomValidity('Escribe tu nombre.');name.reportValidity();return}const digits=phone.value.replace(/\D/g,'');if(!/^[+\d\s().-]+$/.test(phone.value)||digits.length<7||digits.length>15){phone.setCustomValidity('Escribe un teléfono válido, incluyendo el código de país si corresponde.');phone.reportValidity();return}contactName=name.value.trim();contactPhone=phone.value.trim();contactEmail=email.value.trim();showRequest()};
    result.append(context,form);focusHeading();
  }
  function showRequest(){
    steps.textContent='✓ Consulta   /   ✓ Resumen   /   ✓ Datos de contacto';intro.textContent='Tu solicitud está lista para enviar';result.replaceChildren();
    const text='Solicitud de contacto para Sercot SPA\nNombre: '+contactName+'\nTeléfono: '+contactPhone+'\nCorreo: '+contactEmail+'\nServicio: '+selectedName()+'\n\n'+consultationText()+'\n\nSolicito que Sercot me contacte para conversar sobre esta consulta.';
    const summary=el('div',null,'consultation-summary');summary.append(el('h3','Quiero que Sercot me contacte'),el('p',text));
    const notice=el('p','Aún no se ha enviado. Al pulsar el botón se abrirá WhatsApp con tu solicitud escrita; envíala desde ahí para que llegue a Sercot.','delivery-note');
    const send=el('a','Enviar por WhatsApp','button');send.href='https://wa.me/56973082614?text='+encodeURIComponent(text);send.target='_blank';send.rel='noopener';
    const copy=el('button','Copiar mi solicitud de contacto','secondary-action');copy.type='button';
    const status=el('p',null,'copy-status');status.setAttribute('role','status');
    copy.onclick=async()=>{try{await navigator.clipboard.writeText(text);status.textContent='Solicitud copiada. Puedes pegarla en un mensaje o correo a Sercot.'}catch{status.textContent='Selecciona y copia el texto de la solicitud que aparece arriba.'}};
    const edit=el('button','Editar mis datos de contacto','secondary-action');edit.type='button';edit.onclick=showContact;
    const editQuery=el('button','Editar mi consulta','secondary-action');editQuery.type='button';editQuery.onclick=()=>showForm();
    result.append(summary,notice,send,copy,edit,editQuery,status);focusHeading();
  }
  const requested=new URLSearchParams(location.search).get('servicio');
  if(requested&&[...choice.options].some(o=>o.value===requested)){choice.value=requested;showForm(false)}else showChoice();
  next.addEventListener('click',()=>showForm());
}

// Keep category navigation in place while switching service panels.
const categoryNav=document.querySelector('.category-links');
if(categoryNav){
  const links=Array.from(categoryNav.querySelectorAll('a'));
  const panels=Array.from(document.querySelectorAll('.category-section'));
  const chooseCategory=(id)=>{
    const selected=panels.some(panel=>panel.id===id)?id:panels[0].id;
    panels.forEach(panel=>{panel.hidden=panel.id!==selected});
    links.forEach(link=>{if(link.hash==='#'+selected)link.setAttribute('aria-current','true');else link.removeAttribute('aria-current')});
  };
  links.forEach(link=>link.addEventListener('click',event=>{
    event.preventDefault();
    const previousScroll=window.scrollY;
    history.pushState(null,'',link.hash);
    chooseCategory(link.hash.slice(1));
    window.scrollTo({top:previousScroll,behavior:'instant'});
  }));
  const restore=()=>{chooseCategory(location.hash.slice(1));if(location.hash)requestAnimationFrame(()=>window.scrollTo({top:Math.max(0,categoryNav.getBoundingClientRect().top+window.scrollY-120),behavior:'instant'}))};
  window.addEventListener('popstate',restore);
  restore();
}
