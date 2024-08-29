/* Arrays */


let livros =  Array()

livros[0] = 'Civic'

livros.push("Sherlock Holmes") //Adiciona na ultima posição do Array
console.log(livros);
livros.unshift("Neuromancer") //Adiciona na primeira posição do Array
console.log(livros);
livros.pop() //remove o ultimo elemento
console.log(livros);
livros.shift() //remove o primeiro elemento
console.log(livros);

// livros.splice() 