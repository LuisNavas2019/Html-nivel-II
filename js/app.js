let datos=[{titulo:"variables<span>/Descripción</span>",
desc:"Imaginemos una caja donde podamos guardar <b>Letras, números y/o</b> valores <b>verdadero/faso</b>",
desc2:"Esa caja representa la memoria RAM de tu dispositivo, por ello debemos de cuidar no tener variables sin uso",
link:"Tipos de variables",
imagen:"imagenes/variables.png"
},
{titulo:"variables<span>/Tipos</span>",
desc:"<b>String</b> Son todos los caracteres y están entre <br/> <b>Númericas</b> Son todos lon números",
desc2:"<b>Booleanas</b> Tienen valores verdaderos o falsos ",
link:"Declaración de variables",
imagen:"imagenes/tipos.png"
}];
window.onload=()=>{
	let titulo = document.getElementById('titulo').innerHTML=datos[1].titulo;
	let desc = document.getElementById('desc').innerHTML=datos[1].desc;
	let desc2 =document.getElementById('desc2').innerHTML=datos[1].desc2;
	let link = document.getElementById('link').innerHTML=datos[1].link;
	let imagen = document.getElementById('imagen').src=datos[1].imagen;
}