//================ FUNCIONES DE ORDEN SUPERIOR ================//


function mayorQueUnNumero(numero) {
    return (numeroAComparar) => numeroAComparar > numero
  }
  
  let mayorQueDiez = mayorQueUnNumero(10)
  
  console.log( mayorQueDiez(20) )
  console.log( mayorQueDiez(5) )
  
  let mayorQueVeinte = mayorQueUnNumero(20)
  console.log( mayorQueVeinte(22) )
  console.log( mayorQueVeinte(10) )
  
  //Recibir una función//
  
  const numeros = [1, 2, 3, 4];
  
  function porCadaUno(arreglo, funcionAEjecutar) {
    for (const elemento of arreglo) {
      funcionAEjecutar(elemento);
    }
  }
  
  function imprimirValor(valor){
    alert(valor)
  }
  
  porCadaUno(numeros, imprimirValor);
  
  let total = 0;
  function acumular(num) {
    total += num;
  }
  
  porCadaUno(numeros, acumular);
  alert("El total es:" + total);
  
  
  //================ FOR EACH ================//
  //REALIZAR UNA ACCIÓN POR CADA ELEMENTO DEL ARRAY
  
  //================ OBJETO MATH ================//
  
  //Colección de métodos y propiedades para hacer operaciones
  //matemáticas complejas
  
  //Constante de euler
  console.log(Math.E);
  
  //Constante de PI
  console.log(Math.PI);
  
  //Obtener el número mayor de una lista de números
  console.log(Math.max(55, 13, 0, -25, 93, 4));
  
  //Obtener el número menor de una lista de números
  console.log(Math.min(55, 13, 0, -25, 93, 4));
  
  const pi = Math.PI; // 3.141592653589793
  
  //================ REDONDEAR ================//
  
  // CEIL: devuelve el entero mayor o igual más próximo
  console.log(Math.ceil(pi)); // 4
  
  // FLOOR: devuelve el entero más cercano redondeado hacia abajo
  console.log(Math.floor(pi)); // 3
  
  // ROUND: retorna el valor de un número redondeado al entero más cercano
  console.log(Math.round(pi)); // 3
  
  //================ RAÍZ CUADRADA ================//
  
  Math.sqrt(9); // 3
  Math.sqrt(2); // 1.414213562373095
  Math.sqrt(1); // 1
  Math.sqrt(-1); // NaN
  
  //================ ALEATORIO ================//
  
  console.log(Math.random());
  
  // números entre 0 y 10
  console.log(Math.random() * 10);
  // números entre 0 y 50
  console.log(Math.random() * 50);
  // números entre 20 y 50
  console.log(Math.random() * 30 + 20);
  
  
  //================ DATE DE FECHAS ================//
  
  const fechaActual = new Date();
  const milisegundosPorDia = 86400000;
  
  let dia = parseInt(prompt("Ingresa tu día de nacimiento"));
  let mes = parseInt(prompt("Ingresa tu mes de nacimiento"));
  let anio = parseInt(prompt("Ingresa tu año de nacimiento"));
  
  const cumpleanios = new Date(anio, mes - 1, dia);
  const diferenciaDias = (fechaActual - cumpleanios) / milisegundosPorDia;
  const diferenciaAnios = diferenciaDias / 365;
  
  alert(`Naciste hace ${diferenciaAnios} años`);
  alert(`Naciste hace ${Math.floor(diferenciaAnios)} años`);
  alert(`Naciste hace ${Math.ceil(diferenciaAnios)} años`);