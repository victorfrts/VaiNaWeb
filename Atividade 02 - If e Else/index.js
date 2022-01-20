//Inicialização das variáveis
const idade = 25
const humana = true
const data = new Date()
const nome = 'Victor'
const sobrenome = 'Freitas'

if(idade > 18){ // 1 - Crie uma condição que exiba uma mensagem no console se a idade for maior que 18
    console.log(`${idade} é maior que 18`)
}else{
    console.log(`${idade} não é maior que 18`)
}
    
if(idade > 18 && humana){ // 2 - Crie uma condição que exiba uma mensagem no console se você for maior de idade E a condição humana seja true
    console.log(`Humana e maior que 18`)
}

if(data.getMonth() === 0 || data.getMonth() === 11){ // 3 - Criar uma condição que exiba uma mensagem no console se você fizer aniversário em Janeiro OU Dezembro
    console.log(`Estamos no mes de ${data.getMonth() === 0?`Janeiro`:`Dezembro`}`)
}

if(nome[0] === 'R'){ // 4 - Criar uma condição que exiba uma mensagem no console se seu nome começar com a letra R 
    console.log(`${nome} começa com R`)
}else{
    console.log(`${nome} não começa com R`)
}

if(nome[0] === 'E' || sobrenome.length > 6){ // 5 - Criar uma condição que exiba uma mensagem no console se seu sobrenome tenha mais de 6 letras OU seu nome começar com a letra E
    console.log(`O nome '${nome}' começa com 'E' ou o sobrenome '${sobrenome}' tem mais de 6 letras`)
}
