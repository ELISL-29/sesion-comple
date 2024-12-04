let num1=10;
let num2=15;
let num3=9;

let resultado="";
if(num1>num2 && num1>num3){
    resultado="el numero 1 es el mayor";
}
if(num2>num1 && num2>num3){
    resultado="el numero 2 es el mayor";
}
if(num3>num1 && num3>num2)
    resultado="el numero 3 es el mayor";

console.log(resultado);

// segunda solucion

console.log("segunda solucion");
if(num1>num2 && num1>num3){
    resultado="el numero 1  mayor";
}
     
    else{
        if(num2>num3){
            resultado="numero 2 mayor";
        }
        else{
            resultado="numero 3 mayor";
        }
    }

    console.log("resultado");

    // tercera solucion

    console.log("segunda solucion");
if(num1>num2 && num1>num3){
    resultado="el numero 1  mayor";
}
     
    else if(num2>num3){
        resultado="numero 2 mayor";
        }

    else{resultado="numero 3 mayor";
        
    }

    console.log("resultado");
