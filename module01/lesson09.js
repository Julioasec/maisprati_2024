/* 
1. Soma os elementos do array

let somarArray = array => {
    let acumulador = 0
    
    for (let i = 0; i < array.length; i++) {
        acumulador += array[i]
        
    }

    console.log("A soma dos elementos é igual a: " + acumulador);
}


somarArray([1,2,3,4,5]) */

//2. Encontrar o maior número em um Array

/* let maiorNumero = array => {
    let maior = 0


    for(let i = 0; i < array.length ; i++){
        if(array[i] > maior){
            maior = array[i]
           
        }

    }

    console.log("O maior número é: " +  maior);
}

maiorNumero([10, 5, 22, 41, 12]) */

// 3. Reverter um array

/* let reverterArray = array =>{
    let aux 
    let novoArray = Array()
    let contador = array.length -1
    for(let i = 0; i < array.length; i++){
        novoArray[contador] = array[i]
        contador--
    }

    console.log(novoArray);
}

console.log([1,2,3,4,5]);
reverterArray([1,2,3,4,5]) */

// 4. Criar um array contendo apenas número pares

/* let arrayPares = array => {
let arrayPares = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            arrayPares.push(array[i])
        }
        
        
    }

    console.log(arrayPares);
}

arrayPares([1,2,3,4,5,6,7,8,9,10]) */

//5. Contar ocorrências de um valor

/* let ocorrencias = (array, pesquisa) =>{
    let contador = 0

    for (let i = 0; i < array.length; i++) {
        if (array[i] === pesquisa) {
            contador ++
        }
        
    }

    let ocorrencia = contador > 0 ? `O número ${pesquisa} repete ${contador} vezes` : `${pesquisa} não encontrada`
    console.log(ocorrencia);
}

ocorrencias([1,2,3,5,5,6,7,7,7,8,8,8,8,9,9,10,11,11,12], 42) */

let thingsList = Array();
thingsList["Hardware"] = Array();

thingsList["Hardware"][0] = "notebook";

console.table(thingsList);
