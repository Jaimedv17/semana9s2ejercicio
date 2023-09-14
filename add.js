

//....................ARRAYS...................................

// 1.Que son los arrays , definicion ejemplo de cada tipo de dato (incluyendo indices)
// Es la forma de agrupar diferentes tipos de datos y objetos literales y de esa manera poder manipularlos mediante 

const nombres = ["jaime", "emanuel", "isaac", "josue"];

const numeros = [10, 20, 30, 40, 120];

const mix = ["jaime", 100, true, null];

console.log (nombres);
console.log (numeros);
console.log (mix);

//...................TIPOS DE DATOS PARA EL ARRAYS...............................................

// 2.Que tipos de datos podemos agregar en los arrays(con ejemplos)
// Podemos agregar bumeros, strings, buleanos, null, objetos literales.

// const mix = ["jaime", 100, true, null];

// console.log (mix);


//...................METODOS..........................................................

// 3.Explicar los metodos o metodo enseniado en clase para los arreglos(definicion y ejemplo)
//Hay dos formas para, atraves de los indices y elementos.

// const namber = ["josue", "nehemias", "michael", "david"]


// //INDICE
// console.log (namber[0])
// console.log (namber[2])

// //ELEMENTOS
// console.log (namber.length)
// console.log (namber[3].length)


//.....................COMO ACCEDER A CADA ELEMENTOS DEL ARRAYS............................................

// 4.Como acceder a cada elemento del arreglo(definicion y ejemplo)
//Sirven para poder acceder a cada dato o valor por separado y poder trabajar con ello, y se les puede llamar por medio de los indices.

// const namber = ["josue", "nehemias", "michael", "david"]

// console.log (namber[0])
// console.log (namber[1])
// console.log (namber[2])
// console.log (namber[3])

//...................ARREGLOS BIDIMENSIONALES........................................................

// 5.Que son los arreglos bidimensionales( definicion y ejemplo)
//Es una forma de crear arreglos dentro de otro arreglo y extraer cada dato de cada arreglo creado mediante corchetes(indices).

// const namber = ["josue", "nehemias", "michael", "david",["pedro", "bryan", "jean"]];

// console.log (namber[0]);
// console.log (namber[4][0]);

// const nombres = [

//   { id: 1, name: "jose" },

//   { id: 2, name: "paco" },

//   { id: 3, name: "isaac" },

//   { id: 4, name: "maria" },

// ];

// console.log(nombres.length)

// console.log(nombres[2].id)


//....................COMO ITERAR Y DIFERENCIAS ENTRE "MAP","ForEach".............................................................................

// // 6.Como iterar los arreglos , de manera imperativa(for) y de manera declarativa (map y forEach)
// // Sirve para recorrer arreglos por medio de for y se divide en 3 partes "inicio, hasta donde va a llegar, y como va a recorrer".

// const dias = ["lunes", "martes", "miercoes", "jueves", "viernes", "sabado", "domingo"]

// // console.log (dias.length)

// // //                     IMPERATIVO
// // for ( i = 0; i < dias.length; i++ ){
// //     console.log (dias[i])
// // }


// // //                     DECLARATIVO
// // // forEACH: NO NOS permite iterar en una variable

// dias.forEach ( (day,index) => {
//     // console.log (day)
//     // console.log (index)
//     console.log (`${day} - dia`)
// })

// // // MAP: nos permite iterar en una variable

// const formaMap = dias.map ((day) =>{
//     return `${day} - dia`
// })
// console.log (formaMap)


//.............................EJERCICIO.................................................
// 8.Crear un array de numeros(minimo de 5 elementos) y devolver el promedio.

// const nambers = [1, 2, 3, 4, 5, 6];

// // for (i = 0; i < nambers.length; i++ ){
// //     console.log (i)
// // }

// let suma = 0;
// for (let i = 0; i<nambers.length; i++){
//     suma += nambers
// }

// // const promedio = suma / nambers.length;
// console.log (suma);

//............................................................................................
// 1.Agregar elementos a un arreglo (mutable e inmutable)

// // MUTABLE
// const nombres = ["Jaime", "Maria", "Marilis"];
// const nombres2 = ["Erick", "Jean"];

// nombres.push = nombres2;
// console.log (nombres)

// //INMUTABLE
// const nombress = ["Jaime", "Maria", "Marilis"];
// const nombress2 = ["Erick", "Jean"];

// const copia =  [...nombress, nombress2];
// console.log (copia)


// 2.Eliminar elementos de un arreglo (mutable)

// const nombres = ["Jaime", "Maria", "Marilis"];

// nombres.pop ();
// nombres.pop ();
// console.log (nombres)


// 3.Que es la mutabilidad e inmutabilildad(leer enlace enviado)
//Mutabilidad es la manera de aumentar un valor u objeto a un arrays.
//Inmutabilidad es casi lo mismo que mutable pero con la diferencia de que no se esta mutando el valor originar, lo que se realiza es crear una copia y se guarda en un nuevo variable.


// 4.Destructuracion de arreglos (definicion y ejemplo)
//Sirve para sacar valores por ceparado de un arreglo.

// const personas = ["Jaime", "Emanuel", "Josue"];

// const [elemento1, , elemento3] = personas

// console.log (elemento1)
// console.log (elemento3)











