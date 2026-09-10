var num = [5, 8, 2]
num[3] = 6 // Adiciona o valor 6 na chave 3
num.sort() // Coloca em ordem crescente 
num.push(7) // Adiciona o valor 7 no final

console.log(num)
console.log(`O vetor tem ${num.length} posições.`) // Quantidade de posições
console.log(`O primeiro valor do vetor é ${num[0]}`)
console.log(num)
let pos = num.indexOf(num[3])
console.log(`O valor ${num[3]} está na posição ${pos}`)