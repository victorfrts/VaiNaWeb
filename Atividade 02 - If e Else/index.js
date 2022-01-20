const idade = 25
const humana = true
const data = new Date()
const nome = 'Victor'
const sobrenome = 'Freitas'

if(idade > 18){
    console.log(`${idade} é maior que 18`)
}else{
    console.log(`${idade} não é maior que 18`)
}
    
if(idade > 18 && humana){
    console.log(`Humana e maior que 18`)
}

if(data.getMonth() === 0 || data.getMonth() === 11){
    console.log(`Estamos no mes de ${data.getMonth() === 0?`Janeiro`:`Dezembro`}`)
}

if(nome[0] === 'R'){
    console.log(`${nome} começa com R`)
}else{
    console.log(`${nome} não começa com R`)
}

if(nome[0] === 'E' || sobrenome.length > 6){
    console.log(`O nome '${nome}' começa com 'E' ou o sobrenome '${sobrenome}' tem mais de 6 letras`)
}
