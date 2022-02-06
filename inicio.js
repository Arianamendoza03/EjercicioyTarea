console.log("Primer programa funcional....");

const numeros = [7, 10, 20, 30, 40, 50, 60, 70, 1, 9, 11,15];

//programacion imperativa
console.log("Programacion imperativa...");
for(var i=0; i<numeros.length; i++)
{
    console.log(numeros[i]);
}
//programacion funcional
numeros.forEach(data => {
    console.log("Elemento : ", data);
});

numeros.forEach(function(item){
    console.log("Elemento => ", item)
});

//listar los elementos pares del vector numeros
//utilice la funcion filter
const pares =numeros.filter(data => {
    return data%2==0;
});
const paresv2 = numeros.filter(data => data%2==0);
console.log("Elementos pares del vector: ", pares);

const arreglo=[1,2,3,4,5,6,7,8,9];
//elementos impares del vector numeros
const impares=function getImpares(array){
    return array.filter(data =>{
        return (data%2==1);
    });
}
console.log("impares del vector numeros: ", impares(numeros));
console.log("impares del vector arreglo: ", impares(arreglo));

//se tiene un vector de cuidades. Se pide imprimir cada ciudad
const ciudades =["Esmeraldas", "Quito", "Guayaquil", "Portoviejo", "Manta"];
ciudades.forEach(data =>{
    console.log(data);
});

//Se tiene un  parrafo, y cada palabra esta separada por un espacio
//en blanco. Se pide, utilixando la funcion splt, imprimir cada
//palabra del parrafo:
//Bienbenidos a la PUCE Sede Esmeraldas
//Bienvenido
//a
//la
//PUCE
//Sede
//Esmeraldas
const parrafo = "Bienvenido a la Puce Sede Esmeraldas";


function getPalabras(str){
    str.split(" ").forEach(data => {
        console.log(data);
    })
}

getPalabras(parrafo);


