# Exercícios: Map, Filter e Reduce

### Não se esqueça de utilizar let e/ou const e arrow function quando houver
necessidade!

1 - Dado um array de 6 posições

| 10 | 14 | 20 | 9 | 16 | 22 |
| --- | --- | --- | --- | --- | --- |

Utilizando o filter, imprima no console um segundo array com valores maiores que 15:

2 - Dado um array V de 10 posições:

| 1 | 4 | 7 | 1 | 2 | 1 | 4 | 25 | 3 | 7 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Utilizando Reduce, imprima no console o resultado da média dos valores de V:

3 - Dado um array A de 5 posições:

| 3 | 4 | 8 | 9 | 15 |
| --- | --- | --- | --- | --- |

Utilizando map, imprima no console um array gerado a partir de A, onde seus valores são o
cubo dos valores de A:

4 - Dado um vetor de objetos:

<aside>
💡 
var filmes= [
{
"id": 1,
"title": "Die Hard",
"valor": 12.00,
"rating": 5.0
},
{
"id": 2,
"title": "Homem aranha 1",
"valor":8.00,
"rating": 4.0
},
{
"id": 3,
"title": "Homem de ferro",
"valor": 7.00,
"rating": 3.0
},
{
"id": 4,
"title": "Die Hard",
"valor": 13.00,
"rating": 5.0
}
];

</aside>

A. Com map, apresente os valores com 10% de desconto.
B. Com filter, apresente os valores maiores que 10,00.

5 - Com base no mesmo array do exercício anterior (Ex 4), utilizando map e
reduce, apresente a média dos valores menores que 10,00:

6 - Com base no mesmo array do exercício anterior (Ex 4), utilize filter e map, para
retornar uma lista dos ids dos filmes com nota (rating) 5.0:

7 - Com base no mesmo array do Ex. 4, utilize a função filter para retornar
apenas os filmes cujo id seja um número par:

8 - Dado o array:

<aside>
💡 
const empresas = [
{ nome:'Samsung',valorDeMercado: 50, CEO: 'Kim Hyun Suk',
anoDeCriacao: 1938},
{ nome: 'Microsoft',valorDeMercado: 415, CEO: 'Satya
Nadella', anoDeCriacao: 1975 },
{ nome: 'Intel',valorDeMercado: 117, CEO:'Brian Krzanich',
anoDeCriacao: 1968},
{ nome: 'Facebook',valorDeMercado: 383, CEO:'Mark
Zuckerberg', anoDeCriacao: 2004},
{ nome: 'Spotify',valorDeMercado: 30, CEO:'Daniel Ek',
anoDeCriacao: 2006 },
{nome: 'Apple', valorDeMercado: 845, CEO: 'Tim Cook',
anoDeCriacao: 1976}
];

</aside>

Exiba no console as seguintes informações:
A. Empresas criadas depois dos anos 2000.
B. O nome de cada empresa e de seu CEO.
C. O valor de todas as empresas somadas.