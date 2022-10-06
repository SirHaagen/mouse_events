
let contenedor= document.querySelector(".contenedor");

let hijo= document.querySelector(".hijo");

let contenedor2= document.querySelector(".contenedor2");

let boton= document.querySelector(".boton");


contenedor.addEventListener("click", (e)=>{
  alert("Está dando click sobre el padre");
});
contenedor.addEventListener("mouseenter", (e)=>{
  alert("Está pasando el puntero sobre el padre");
});

hijo.addEventListener("click", (e)=>{
  alert("Está dando click sobre el hijo");
  e.stopPropagation();
});
hijo.addEventListener("mouseover", (e)=>{
  alert("Está pasando el puntero sobre el hijo");
});
hijo.addEventListener("mouseout", (e)=>{
  alert("Está pasando el puntero por fuera del hijo");
});


contenedor2.addEventListener("mousemove", (e)=>{
  contenedor2.classList.toggle("verdecito");
});
contenedor2.addEventListener("mouseleave", (e)=>{
  alert("Está pasando el puntero por fuera del otro padre");
});

boton.addEventListener("mousedown", (e)=>{
  alert("Está pulsando el botón");
});
boton.addEventListener("mouseup", (e)=>{
  alert("Dejó de presionar el botón");
});

/* Si se quiere acceder a las propiedades de Event, entonces se imprime en console el
parámetro "e" y en la consola se pueden ver todas las propiedades asociadas al evento
que se dispara, x ejm:

boton.addEventListener("mouseup", (e)=>{
  console.log(e);
});

Y si x ejm quiero imprimir en consola el evento que se ejecutó, entonces:

boton.addEventListener("mouseup", (e)=>{
  console.log(e.target);
});

*/