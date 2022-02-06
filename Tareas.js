//se pide crear una funcion que devuelva aquellas palabras que NO tiene la misma vocal.
//const entrada=[rececar],[alamgam], [olygopoly], [zoom], [cama],[enano];
//const esperado = [rececar], [olygopoly], [enano];
const entrada = ["racecar", "amalgam", "oligopoly", "zoom", "cama", "enano"];
function Vocales(array){
    var vocal = ['a', 'e', 'i', 'o', 'u', 'á', 'é', 'í', 'ó', 'ú']
    return array.split("").filter (data => {
        return vocal.indexOf(data.toLowerCase())!=-1;
    });
}
function getPalabras(array){
    const r = [];
    array.forEach(data =>{
        const v = Vocales(data);
        for (i=1;i<=v.length-2;i++){
        if(v[0] != v[i])
        r.push(data)
        }
    })
    return r;
    }
    console.log("Palabras que NO tiene las misma vocal: ", getPalabras(entrada));

    //2) Dado el siguiente vecotr array=[5,4,20,7,5,10]
//use map, para devolver cada elemento del vector multiplicado por 10
//Resultado esperado [50,40,200,70,50,100]
const array =[5,4,20,7,5,10];
function MultiplicaArrayx10 (array ){ 
    return array.map( data  => {
        return data*10;
    })
}
 function MultiplicaArrayx10v2 (array){
     return array.map( data=> data*10);
 }
 console.log(MultiplicaArrayx10(array));
 console.log(MultiplicaArrayx10v2(array));

 /*   
//3)Dada la siguiente matriz =[[1,2,3],[4,5,6],[7,8,9]]
//y usando unicamente map, devuelva cada elemento de la matriz multiplicado por 3
//resultado esperado =[[3,6,9],[12,15,18],[21,24,27]]
*/
matriz =[ [1,2,3],[4,5,6],[7,8,9] ];

function matrizMultiplicax3 (array) {
   return array.map (item=>{
       return item.map(data=>{
        return data *3;   
         })

    });
}
 console.log(matrizMultiplicax3(matriz));


//4) Dada la siguiente matriz = [[ 1, 2, 3 ],[ 4, 5 ],[ 6 ]];
//utilice reduce para encontrar el producto de sus elementos,
//resultado esperado: 720

const array1= [1, 2, 3, 4];
const x2 = array1. reduce ((ac, va) =>{
    return ac + va;
})
// 1+2+3+4
console.log(x2);
matrizRed = [[ 1, 2, 3 ],[ 4, 5 ],[ 6 ]];

//matrizred=[1,2,3,4,5,6]
function multiplicaMatriz (array) {
    return array.reduce ((ac, va) =>{
      return ac.concat(va);
    }). reduce((ac, va) => {
        return (ac* va);
    });
}

console.log ("matriz Original : ", matrizRed)
console.log (multiplicaMatriz(matrizRed));

//se tiene un vector con los siguientes elementos
// input = [30, 48, 11,5, 32]
//se pide diseñar la funcion que devuelva la siguiente cadena:
//tus numeros de la suerte son: 30,48,11,5 y 32
// use la funcion reduce

const arrayNumeros = [30, 48, 11,5, 32];
function numerosDeLaSuerte (array){
    const cad = "Tus numeros de la suerte son: ";
    return cad + array.reduce ((ac, va, index, array) =>{
        var aux = index < ( array.length -1)? " , ": ", y ";
        return (ac) + aux + (va);

    });
}

console.log (numerosDeLaSuerte(arrayNumeros)); 

// verificar si uno de los elementos del array es mayor a 10
const goodInput = [8,9,12,6,7];
function numerosMayorq10(array){
    return array.some(data => {
        return data > 10;
    })
}
console.log("¿Los numeros son mayor a 10?: ", numerosMayorq10(goodInput));

//1) Verificar si una de las cadenas de caracteres del array

//tiene más de 10 caracteres

const vectorCadenas = ["Ecuador", "Argentina", "Dinamarca","Coreal del Norte"];
function cadenaMayorq10(array){
  return array.some(item => item.length>10);
}
console.log("¿La cadena tiene mas de 10 caracteres? = ",cadenaMayorq10(vectorCadenas));
//console.log("¿Los numeros son mayor a 10?: ", palabras);

//2) Chequear si uno de los elementos de la matriz es true

const vectorBooleano = [[false, false, false],[false, false, true], [false, false, false]];
function ExisteUnVerdaderoMatriz(matriz){
  return matriz.some(element => {
    return element.some(item => {
      return item == true;
    })
  })
}
console.log("¿La cadena tiene elementos verdaderos? = ",ExisteUnVerdaderoMatriz(vectorBooleano));


//3) verificar si la palabra 'Lost' existe dentro del siguiente array:

var vectorParrafo = ["Strange is the night where black stars rise,", "And strange moons circle through the skies,",
  "But stranger Lost still is","Lost Carcosa."
  ];
function ExistePalabraLost (matriz){
  const palabra="Lost";
  return matriz.some(data => {
    return data.indexOf(palabra) != -1;
  })
}
console.log("¿La cadena tiene la palabra lost? = ",ExistePalabraLost(vectorParrafo));

//Se tiene la siguiente matriz =
// const matriz1=[['Esmeraldas', '28C'], ['Guayaquil', '26C'], ['Quito', '18C']];
//Se pide diseñar la funcion para convertir la matriz en un objeto
//Resultado esperado:
/* {
  'Esmeraldas' : '28C',
  'Guayaquil' : '26C',
  'Quito' : '18C'

}
*/
// Utilice reduce-(acomulador, valor actual, index, array), {}

const matriz1=[['Esmeraldas', '28C'], ['Guayaquil', '26C'], ['Quito', '18C']];
function objectify (array){
  return array.reduce((ac, va, index, array) => {
    ac[va[0]]=va[1];
   // console.log(va);
    return ac;
  }, {})
}
console.log("Convertir la matriz en un objeto = ");
console.log(objectify(matriz1));

//Se tiene el siguiente const Vector = ["A", "B", "C", "D", "E"];
//Se pide diseñar la funcion shiftRight-significa(Desplazamiento a la derecha)
// que permita mostrar o retornar el resultado siguiente:
//["E", "A" "B", "C", "D"]
// Utilizar map (element, index, array)
const Vector = ["A", "B", "C", "D", "E"];
function shiftRightIntento(array)
{
 return array.map((element, index, arrayv) => {
  const n=index++; 
  const vec=arrayv[4]
  const aux=arrayv[n-1];
  for(element=n-2;element>=0;element--){
   arrayv[element+1]= arrayv[element];
  }
  arrayv[-1]=aux;
  //arrayv[-2]=vec;
  //console.log(vec);
  return aux;
  
})//.reverse().join();
}
console.log("Intento del resultado con la función ShiftRight:  ",shiftRightIntento(Vector));
