//var nombreCompleto = prompt("Por favor ingrese el nombre completo:", "Nombres y apellidos");
var diaNacimiento = prompt("Ingrese el día de nacimiento", "Ejemplo: Si nació el 22 de enero, solamente ingresar 22");
var mesNacimiento = prompt("Ingrese el mes de nacimiento", "Ejemplo: Si nació en enero, solamente ingresar 1 porque es el mes 1");
var anioNacimiento = prompt("Ingrese el año de nacimiento", "Ejemplo: Si nació el 22 de enero de 1987, solamente ingresar 1987");

var conyuge = prompt("¿Tiene cónyuge?", "SI/NO");
//var hijos = prompt("¿Tiene hijos?", "SI/NO");
//var cantidadHijos = prompt("Ingrese la cantidad de hijos menores de 21 años:", "Por favor ingrese únicamente números");

const precioBase = 250;
comision = precioBase * 0.30;

//***********************************MI CÓDGIO**************************************************
//para saltos de línea= document.write("<br/>salto de línea");


var fecha_actual = new Date();

var dia_actual=fecha_actual.getDate();
var mes_actual=fecha_actual.getMonth()+1;
var anio_actual=fecha_actual.getFullYear();

if(((anio_actual-anioNacimiento)>18)&&((anio_actual-anioNacimiento)<66)){
   
  document.write("ERES MAYOR DE EDAD, POR LO TANTO..."); 
  
  var recargo = 0;
  
  //recargos por edad del asegurado
  if((anio_actual-anioNacimiento)<21){
    
    document.write("<br/><br/>TUS RECARGOS SON: (NO SE TE APLICARON RECARGOS POR TENER MENOS DE 21 AÑOS)");
    
  }else if(((anio_actual-anioNacimiento)>=21)&&((anio_actual-anioNacimiento)<25)){
    
    recargo = precioBase * 0.01;
    
    document.write("<br/><br/>TUS RECARGOS SON DE: Q "+ recargo);
    
  }else if(((anio_actual-anioNacimiento)>=25)&&((anio_actual-anioNacimiento)<30)){
    
    recargo = precioBase * 0.02;
    
    document.write("<br/><br/>TUS RECARGOS SON DE: Q "+ recargo);
    
  }else if(((anio_actual-anioNacimiento)>=30)&&((anio_actual-anioNacimiento)<40)){
    
    recargo = precioBase * 0.05;
    
    document.write("<br/><br/>TUS RECARGOS SON DE: Q "+ recargo);
    
  }else if(((anio_actual-anioNacimiento)>=40)&&((anio_actual-anioNacimiento)<50)){
    
    recargo = precioBase * 0.08;
    
    document.write("<br/><br/>TUS RECARGOS SON DE: Q "+ recargo);
    
  }else if(((anio_actual-anioNacimiento)>=50)&&((anio_actual-anioNacimiento)<=65)){
    
    recargo = precioBase * 0.12;
    
    document.write("<br/><br/>TUS RECARGOS SON DE: Q "+ recargo);
    
  }
  
 //recargos por cónyuge
  
 if((conyuge=="SI")||(conyuge=="si")){
   
   var edadConyuge = prompt("Ingrese la edad de su conyuge: ", "Ejemplo: si tiene 30 años, escriba: 30");
   
   if(edadConyuge<30){
     
     recargo = precioBase * 0.01;
     document.write("<br/><br/>TUS RECARGOS POR CÓNYUGE SON DE: Q " + recargo);
     
   }else if((edadConyuge>=30)&&(edadConyuge<40)){
     
     recargo = precioBase * 0.02;
     document.write("<br/><br/>TUS RECARGOS POR CÓNYUGE SON DE: Q " + recargo);
     
   }else if((edadConyuge>=40)&&(edadConyuge<50)){
     
     recargo = precioBase * 0.03;
     document.write("<br/><br/>TUS RECARGOS POR CÓNYUGE SON DE: Q " + recargo);
     
   }else if((edadConyuge>=50)&&(edadConyuge<70)){
     
     recargo = precioBase * 0.05;
     document.write("<br/><br/>TUS RECARGOS POR CÓNYUGE SON DE: Q " + recargo);
     
   }else{
     
     document.write("<br/><br/>TUS RECARGOS POR CÓNYUGE SON DE: Q 0");
     
   }
   
   
   
 }else{
   
   document.write("<br/><br/>TUS RECARGOS POR CÓNYUGE SON DE: (NO TIENES RECARGOS PORQUE NO TIENES CÓNYUGE)");
   
 }
  
  
}

if((anio_actual-anioNacimiento)>65){
  
  document.write("TIENES MÁS DE 65 AÑOS; POR LO TANTO, NO SE TE PUEDE ASEGURAR");
  
}

if((anio_actual-anioNacimiento)<=18){
  
  document.write("ERES MENOR DE EDAD, POR LO TANTO, NO SE TE PUEDE ASEGURAR.");
  
}