for(let i = 1; i <= 10;i++){ // 1 - Criar um loop que conte de 1 até 10 usando FOR
    console.log(i)
}

var i = 10
while(i>0){ // 2 - Criar um loop que conte de 10 até 1 usando WHILE
    console.log(i)
    i--
}
    
for(let i = 0; i <= 100;i++){ // 3 - Criar um loop que conte todos os números ímpares de 1 até 100
    if(i%2 !== 0){
        console.log(`${i} é impar`)
    }    
}
    
for(let i = 0; i <= 100;i++){ // 4- Criar um loop que conte todos os números pares de 0 a 100
    if(i%2 === 0){
        console.log(`${i} é par`)
    }    
}
