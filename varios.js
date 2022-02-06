const vector =[10,20,30,40,50];

vector.forEach((data, indice, array) =>{
    console.log(data, indice, array[0]);
})

//Se tiene un array de nombres de personas.
// se pide devolver el array que incluye unicamente los
//nombres que tiene una sola palabra 
const nombres = [ " Juan","Pedro","Maria","Hector Perez","Jose de la Cuadra"];
//resultado esperado["Jaun", "Pedro", "Maria"]

function getNombresDeUnaPalabras(array){
    return array.filter ( data  =>{
        
        return data.indexOf(' ')!=-1;
    })
}

const nom= getNombresDeUnaPalabras(nombres);
console.log(nom);

//Una funcion recibe una cadena de caracteres.
//se pide que la funcion devuelva la palabra ingresada sin consonates.
//por ejemplo : Universidad
//Resutado esperado: Uieia
//ayuda: indexOf, split

function soloVocales(array){
    var vocales = ['a','e','i','o','u'];


    return array.split("").filter ( data => {
        return vocales.indexOf(data.toLowerCase()) !=-1;
       
    }).join(' ');
         
}
    
    const p1=soloVocales("Universidad");
    console.log(p1);
    console.log(soloVocales("Ariana"));

     //Una funcion recibe un array de palabras
//Se pide que la funcion devuelva las palabras que tienen la misma vocal
//Entrada: ["amalgam","zoom","casa,"jinete","iglesia"]
//Salida: ["amalgan","zoom","casa"]

entrada = [ "amalgam","zoom","casa","jinete","iglesia" ];
function palabrasMismaVocal(array){
    return array.filter( data => {
        const strVocales = soloVocales(data);
       // console.log(strVocales);
        return strVocales.split("").every( (item, index, array) => { 
           //console.log(item);
            return item==array[0];
        }) 
    })   
}

const x1=palabrasMismaVocal(entrada);
console.log(x1);

