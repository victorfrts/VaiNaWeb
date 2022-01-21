function printMessage(){ // 1 - crie uma função que exiba uma mensagem no console
    console.log(`Função 'printMessage' chamada
`);
};
printMessage();

function printName(name){ // 2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console
    console.log(name);
};
printName('Victor');

function printUserInfo(name, age, musicGenre){ // 3 - crie uma função que receba seu nome, idade, e estilo musical preferido (parâmetros) e exiba no console
    console.log(`
Nome: ${name}
Idade: ${age}
Estilo Musical Preferido: ${musicGenre}`);
};
printUserInfo('Victor', 25, 'Folk');

function printUserDetail(movie, music){ // 4 - crie uma função que receba o seu filme favorito, musica favorita (parâmetros) e exiba no console
    console.log(`
Filme favorito: ${movie}
Musiva favorita: ${music}
`)
}
printUserDetail('Blade Runner','Cops (Other Lives)')

function getTriple(value){ // 5 - crie uma função que retorne o triplo do número recebido no parâmetro da função
    return value*3
}

