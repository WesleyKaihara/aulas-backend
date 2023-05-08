// 1 -> Escreva na tela todos os números pares de 0 a 100 

const oneToHundred = () => {
  for(let i=0;i<=100;i++) {
    if(i%2 == 0) console.log(i)
  }
}

oneToHundred()
 
// 2 -> Criar um algoritmo que percorre um array de números qualquer e retorna a soma total desses números
// ex: [2, 4, 6, 8] -> Soma: 2 + 4 + 6 + 8 = 20

let arr = [2, 4, 6, 8]

const sumArray = (arr) => {
  let sum = 0
  for(let i=0;i<arr.length;i++) {
    sum+=arr[i]
  }
  return sum
}

console.log(sumArray(arr))

console.log(arr.reduce((acc,num) => acc + num))
 
// 3 -> Crie uma função que remova todos os números negativos de um array
// ex: [-1, 1, -2, 2, -3, 3] -> [1, 2, 3]

let arr2 = [-1, 1, -2, 2, -3, 3]
function removeNegativeNumbers(arr) {
  return arr.filter(item => item > 0);
}

console.log(removeNegativeNumbers(arr2))

// 4 -> Percorra um array de numeros qualquer.. e crie um novo array com todos os numeros do primeiro multiplicado por 2
// ex: [1, 2, 3, 4, 5] -> [2, 4, 6, 8, 10]

let arr3 = [1, 2, 3, 4, 5]

const doubleArrayItems = (arr) => {
  let arrDouble = [];
  for(let i=0;i<arr3.length;i++) {
    arrDouble[i] = arr3[i]*2
  }
  return arrDouble
}

console.log(doubleArrayItems(arr));

arr3_Double2 = arr3.map(i => i*=2)
console.log(arr3_Double2)

// [[Bonus]] -> Crie uma função que soma dois numeros e devolve uma Promise. Caso a soma seja Par o valor deve ser resolvido e caso seja Impar deve ser rejeitado

// ex:

async function soma(n1,n2) {
  const sum = await n1+n2
  if(sum%2 !== 0) throw new Error(`Valor ${sum} é impar`) 
  return { sum }
}

soma(1, 2).then(res => {
  console.log(`Valor ${res.sum} é par`)
}).catch(err => {
  console.log(err.message)
})