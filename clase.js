


class Usuario_prestamo{
  constructor(nombre,apellido,edad,telefono,email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.telefono = telefono;
    this.email = email;
  }
}
alert(" Complete los datos solicitados para su prerstamos");

let lista_usuario =[];

for( let i = 0; i < 1 ; i++){
  let nombre =prompt("ingrese su nombre");
  let apellido = prompt(" ingrese su apellido");
  let edad = prompt("ingrese su edad");
  let telefono=prompt("ingrese telefono :");
  let email =prompt("ingre email de contacto :")

  let nuevo_usuario = new Usuario_prestamo (nombre ,apellido ,edad,telefono,email); // creo nuevo_usuario para capturar los datos de la class Usuario_prestamo

  lista_usuario.push(nuevo_usuario); // ahora envio con un push los datos al arreglo Lista_usuario []; que se cargo en nuevo_usuario

}
console.log(lista_usuario); // y muestro por consola el arreglo: lista_usuario 

 
function calcular_prestamo (monto_1,cuotas_1){
  if( cuotas_1 == 3){
    return monto_1 * 1.25
  }
  else if(cuotas_1 == 6){
    return monto_1 * 1.40 
  }
  else if(cuotas_1 == 12){
    return monto_1 * 1.60
  }
  else if(cuotas_1 == 18){
    return monto_1 * 1.90
  }
  else{
    console.log("ingrese una cuota entre : 3 , 6 , 12 y 18 ")
  }
}

class Prestamo{
  constructor(monto_1,cuotas_1){
    this.monto_1 = monto_1;
    this.cuotas_1 = cuotas_1;
  }
}
let lista_prestamo =[];


alert(" Ahora ingrese los datos solicitados para Simular su prerstamos");

for  ( let i= 0; i < 1 ; i++){

  let monto_1 = parseFloat(prompt("Simulador de Prestamo----Ingrese Monto a Solicitar"))
  let cuotas_1 = parseFloat(prompt("ingrese la cantidad de cuotas : 3 - 6 - 12 -18 "));
  
  calcular_prestamo (monto_1,cuotas_1)
  
  
  let total_prestamo = calcular_prestamo (monto_1,cuotas_1)/cuotas_1;
  console.log("usted va a pagar por cuotas :",total_prestamo ) 
  alert("usted va a pagar :"+" "+cuotas_1+" "+"cuotas de :"+total_prestamo);

  let nuevo_prestamo = new Prestamo(monto_1,cuotas_1);// creo nuevo_prestamo  para capturar los datos de la class :Prestamo
  lista_prestamo.push(nuevo_prestamo); // ahora envio con un push los datos al arreglo Lista_prestamo []; que se cargo en ;nuevo_prestamo

} 
console.log(lista_prestamo); // y muestro por consola el arreglo:  Lista_prestamo [];


 