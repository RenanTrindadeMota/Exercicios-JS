//exercio 1
const array1 = [ 1, 2, 3, 4 ];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// Expeted output: 10c
{
  //exercio 2
const num = [ 5,6,9,10,1,8,8 ];
let menorNumero = Math.min(...num);

console.log(menorNumero);
}
{
  let vetor = [ 1,2,3,4,5,6,7 ]
  let contagem = vetor.length

  console.log(contagem)
}

{
  //exercio 4
let vetor = [ 1,2,5,6,7,8 ];

let newVetor = vetor.map(function(element){
  return element * 2

  
});
console.log(newVetor);
}