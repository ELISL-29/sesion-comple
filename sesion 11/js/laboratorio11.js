// ejecicio 1

/*let respuestas="";
let calificacion=prompt("ingrese la calificacion");
console.log(calificacion);
if(calificacion>=90){
    respuestas= "aprovado con honores ";
}
else if(calificacion >= 70 && calificacion < 90){
    respuestas= "aprovado ";
}

else{
    respuestas= "reprobado ";
}

document.write(respuestas, " con una de: ", calificacion);*/

// ejecicio 2
 /*let numero=prompt("ingrese un numero");
 if(numero % 2 ==0){
    document.write("el numero es par...");

 }

 else{
    document.write("el n umero es impar...");
 }*/

 //ejercicio 3

 /*let monto=prompt("ingrese el monto total de su compra");
 let resultado=0;
 if(monto>100){
    resultado=monto-(monto*0.1);
 }
 else{
    resultado=monto;
 }
 document.write(`el monto total a pagar es ${resultado}`);*/


 //ejecicio 4

 let numeroAleatorio = (Math.floor(Math.random()*10) +1);
 let numero=prompt("ingrese un valor: ");

 if(numero==numeroAleatorio){
    document.write("¡Felicidades, adivinaste el número!");

 }
 else{
    document.write(`Lo siento, el número era X ${numeroAleatorio}`);
 }


