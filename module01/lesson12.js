// let serie = {
//     nome: "The Boys",
//     genero: "Ação, Paródia, Heróis",
//     nrTemporadas: 4,
//     status: "Em Andamento",
//     classificacao: 18,
//     nrEpisodios: {
//         temp1: 10,
//         temp2: 10,
//         temp3: 50

//     }

// }

// let livro = {
//     título: "Neuromancer",
//     nrPaginas: "250",
//     sinopse: "Lorem ipsum",
//     autor: "Willian Gibsom",
//     genero: ["ficção", "cyberpunk"],
//     capaDura: false,
//     ano: 1998,

//     abrirCapa: function () {
//         console.log("Livro aberto");
//         },

//     fecharCapa: function () {
//         console.log("Livro fechado");
//     }

// }

// let carro = {
//     modelo: "",
//     ano: "",
//     rodas: "",
//     cor: "",
//     ano: 2015,
//     chassi: ""
// }

//     function computador(processador, gpu, ram, armazenamento) {
//         this.processador = processador
//         this.gpu = gpu
//         this.ram = ram
//         this.armazenamento = armazenamento

//     this.ligar = function () {
//         console.log(`O ${this.processador} está funcionando!`);

//     }

//     this.mostrarEspecificacoes = function () {
//         console.log(`processador: ${this.processador}
//                     gpu: ${this.gpu}
//                     ram: ${ram}
//                     armazenamento: ${armazenamento}`);

//     }

// }

//     let pc = new computador("i9", "RTX4090", "16GB", "500GB SSD")
//     pc.mostrarEspecificacoes()

// for of/in/each

let jogadores = {
  jogador1: "Pelé",
  jogador2: "CR7",
  jogador3: "Messi",
};

let jogadore = ["Pelé", "CR7", "Messi"];

// //percorre e exibe as chaves
// for(let key in jogadores){
//     console.log(key +" é "+jogadores[key]);

// }

//percorre e exibe os valores
/*     for(let key of jogadore){
        console.log(key);
        
    } */

let grades = [
  {
    name: "Jeje",
    grade: Math.floor(Math.random()*10),
  },

  {
    name: "Caspartio",
    grade: Math.floor(Math.random()*10),
  },

  {
    name: "Jerimum",
    grade: Math.floor(Math.random()*10),
  },

  {
    name: "Tangamandápio",
    grade: Math.floor(Math.random()*10),
  },
];


for(let key in grades){
    console.log(`Aluno: ${grades[key].name} | Nota:  ${grades[key].grade}`);
    if (grades[key].grade >= 6) {
        console.log("Aprovado");
        console.log();
        
        continue
    }

    console.log("Reprovado");
    console.log();
       
}