const sobreMim = { // Crie um objeto que receba ao menos três propriedades sobre você.
    nome: "Victor",
    idade: 24,
    gostaDeAnime: true 
}

sobreMim.filmeFavorito = "Blade Runner" // Adicione uma nova propriedade sem alterar seu objeto inicial.

delete sobreMim.idade // Remova uma propriedade desse objeto.

console.log(sobreMim) // Mostre no console todas as propriedades desse objeto.

// Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
// Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
// Na propriedade amigos, adicione ao menos 4 itens.
const cadastro = [ 
    victor = {nome: "Victor", idade: 24, telefone: "67999479113", amigos: ["Gabriela", "Carlos", "Maria", "Luis"]},
    gabriela = {nome: "Gabriela", idade: 23, telefone: "67999911133", amigos: ["Victor", "Maria","Jessica", "Deisi"]},
    carlos = {nome: "Carlos", idade: 22, telefone: "67911333149", amigos: ["Victor", "Luis", "Jhonathan", "Batistela"]},
    maria = {nome: "Maria", idade: 49, telefone: "67998136463", amigos: ["Victor", "Gabriela", "Jessica", "Darnele"]},
    luis = {nome: "Luis", idade: 24, telefone: "67999655412", amigos: ["Victor", "Carlos", "Fernando", "Thiago"]},
] 

for(usuario of cadastro){// Mostre no console o nome de um amigo de cada lista.
    console.log(usuario.amigos[3])
}
