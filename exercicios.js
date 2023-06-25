// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  return num1 + num2
}
console.log(soma(10, 15));

 // implemente sua lógica aqui.
  // Essa função ela soma os números. Ela pega o num1 e o num2, junta os dois e manda de volta o resultado da soma. ex: somar 3 + 5 vai mandar o 8 de volta. É uma função básica, podendo também expandir, só usar a criatividade.

// EXERCÍCIO 0B
function imprimeMensagem() {
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

 // implemente sua lógica aqui:
  // Essa função "ImprimeMensagem()", ela pede que o usuário digite uma mensagem, quando o fizer, ela pega a mensagem e exibe no console, o console no browser é uma área onde as informações podem ser mostradas enquanto colocamos os códigos.  

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(base, altura) {
  const area = base * altura;
  return area;
}

const peso = 3;
const largura = 5;

const areaRetangulo = calculaAreaRetangulo(largura, altura);
console.log(areaRetangulo);

// EXERCÍCIO 02
function imprimeIdade(anoAtual, anoNascimento) {

  const idade = anoAtual - anoNascimento;

}

const anoAtual1 = 2020;
const anoNascimento1 = 1990;
imprimeIdade(anoAtual, anoNascimento1);
console.log(idade);
  // implemente sua lógica aqui:
  //Temos a função 'imprimiIdade' e temos duas informações o ano que estamos e o ano que a pessoa nasceu subtrai o ano de nascimento do ano atual. É uma forma de se descobrir a idade de alguém usando javascript.

// EXERCÍCIO 03
function calculaIMC(peso, altura) {

  const imc = peso / (altura * altura);
  return imc;
}
constpeso = 85;
const altura = 1.8;

const resultado1 = calculaIMC(peso, altura);
console.log(resultado);

  // implemente sua lógica aqui
  //Temos a função calculaIMC, que tem peso e altura, dentro da função fazemos o cálculo do IMC dividindo o peso pela altura ao quadrado, o peso como 85 e altura como 1.8, depoi chama a função calclaIMC, passando os valores como argumentos, o resultado se armazena na variável 'resultado'.


// EXERCÍCIO 04
function imprimeInformacoesUsuario() {

  const usuario = [
    { nome: "Alice", idade: 28, email: "alice@gmail.com" },
  ];

  for (let i = 0; i < usuarios.length; i++) {
    const usuario = usuario[i];
    const frase = "Meu nome é " + usuario.nome + ", tenho " + usuario.idade + " anos, e o meu email é " + usuario.email + ".";
    console.log(frase);
  }
}

imprimiInformacoesUsuario();

 // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL." 
  // Criei um array chamado usuario que contém objetos com as informações do usuário, 1 objeto representa Alice e possui propriedades - nome, idade e email. Usei um loopfor para percorrer o usuário no array mas parece que esse não seria a forma correta de fazer o exercicio. 


// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {

  const cor1 = "Azul"; 
  const cor2 = "Amarelo"; 
  const cor3 = "Vermelho"; 

  const coresFavoritas = [cor1, cor2, cor3]; 
  console.log(coresFavoritas); 

}

imprimiTresCoresFavoritas();

  // implemente sua lógica aqui
  // Dei variaveis para as 3 cores, criei um array : "coresFavoritas", imprimi o array no console exibindo as 3 cores no console. 


// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {

  const stringMaiuscula = string.toUpperCase();
  return stringMaiuscula;
}

const minhaString = "oi";
const stringEmMaiuscula = retornaStringEmMaiscula(minhaString);
console.log(stringEmMaiuscula);

 // implemente sua lógica aqui
  // A retornaStringEmMaiuscula recebe uma string, usei "toUpperCase()" para mudar a string em maiúcula e armazenar o resultado na variável 'stringMaiuscula em seguida, a função retorna a string maiuscula, a string de entrada é "oi" quando chamo a funação "retornaStringEmMaiuscula com essa string, temos "OI" em maisculo. 

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  
  const quantidadeIngressos = custo / valorIngresso;
  return quantidadeIngressos;

}

const custoEspetaculo = 3000;
const valorIngresso = 100;
const quantidadeIngressos = calculaIngressosEspetaculo(custoEspetaculo, valorIngresso);
console.log(quantidadeIngressos);

// implemente sua lógica aqui
  // A função 'calculaIngressosEspetaculo' recebe o custo total de um espetáculo e o valor de cada ingresso como entrada. Dentro da função, a quantidade de ingressos necessários é calculada dividindo o custo total pelo valor de cada ingresso, o resultado é armazenado em uma variável "quantiadeIngressos" e é retornado pela função. O resultado é a quantidade de ingressos necessarios para cobrir o custo total do espetáculo, sendo 30.

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {

  return string1.length === string2.length; 
}

const string1 = "Ola"; 
const string2 = "abc";
const resultadoFinal = checaStringsMesmoTamanho(string1, string2);
console.log(resultado);

 // implemente sua lógica aqui
  //A função 'checaStringsMesmoTamanho' que recebe duas srings como entrada, dentro da função compara o tamanho das duas strings usando a propriedade 'length' se o tamanho de 'string1' for igual ao tamanho de 'string2', retornamos 'true', dizendo que as strings têm o mesmo tamanho, caso não, retorna 'false'. Em resumo a faunção é usada para verificar se duas strings tem o mesmo tamanho.

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array [0];

}

const array1 = ["ola", "abc"];
const primeiroElemento = retornaPrimeiroElemento(array);
console.log(primeiroElemento);

  // implemente sua lógica aqui
  // A função "retornaPrimeiroElemento" rece um parâmetro - "array" e retorna o primeiro elemento desse array utilizando a notação de colchetes "[0]" criei um array com os valores "ola" e "abc" e chamei a função 'retornaPrimeiroElemento' passando esse array como argumento, o resultado retornado pela função é o primeiro elemento do array,  que no caso é "ola" dai imprimo esse valor no console.log(primeiroElemento) o código busca e retorna o primeiro elemento de um array. 

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
 return array[array.length - 1];

}

const array = ["ola", "abc"];
const ultimoElemento = retornaUltimoElemento(array);
console.log(ultimoElemento);

// implemente sua lógica aqui
//Em resumo ele faz a mesma função que aparece no exercício 9, porém, ao invés de retornar o primeiro elemento ele retorna o último elemento de um array.

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
 if (array.length >= 2) {
  const primeiro = array[0];
  const ultimo = array [array.length - 1];
  array[0] = ultimo;
  array[array.length - 1] = primeiro;
 }
  return array;
}

const array2 = ["ola", "abc"];
const array2Trocado = trocaPrimeiroEUltimo(array);
console.log(arrayTrocado);

 // implemente sua lógica aqui
// É a troca correta entre o primeiro e o último elemento do array, quando o array possui pelo menos dois elementos. Em caso de não ter, oarray é retornado sem nenhuma alteração.

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string3, string4) {
  const loewercaseString3 = string3.toLowerCase();
  const loewercaseString4 = string4.toLowerCase();
  
  return loewercaseString1 === loewercaseString2;

}

const string3 = "Ola"; 
const string4 = "ola";
const resultadoFinal1 = checaIgualdadeDesconsiderandoCase(string3, string4);
console.log(resultado); 

// implemente sua lógica aqui
// A funão verifica se duas strings são iguais, indepdendnetemente de estarem em maiúsculas ou minúsculas.

// EXERCÍCIO 13
function checaRenovacaoRG(anoAtual, anoNascimento, anoEmissaoRG) {
  const idade = anoAtual - anoNascimento;
  const periodoRenovacao = 10;  
  const precisaRenovar = (anoAtual - anoEmissaoRG) > periodoRenovacao;
  const maiorDeIdade = idade >= 20;
  
  return precisaRenovar && maiorDeIdade;
}

const anoAtual = 2020;
const anoNascimento = 2000;
const anoEmissaoRG = 2015;

const precisaRenovarRG = checaRenovacaoRG(anoAtual, anoNascimento, anoEmissaoRG);
console.log(precisaRenovarRG);

// implemente sua lógica aqui
// Resumindo o código verifica se o RG de uma pessoa precisa ser renovado com base em sua idade e no período de renovação estabelecido. 
// A função "checaRenovacaoRG" calcula a idade da pessoa e verifica se a diferneça entre o ano atual e o ano de meissão do RG é maior que um período de renovação pré-definido. Se a condição for atendida e apessoa tiver mais de 20 anos, o código retorna 'true' indicando que o RG precisa ser renovado. Caso contrário, retorna 'false', indicando que a renovação não é necessária.

// EXERCÍCIO 14
function checaAnoBissexto(ano) {

  if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

const ano = 2000;
const resultadoano = checaAnoBissexto(ano);
console.log(resultadoano);

// implemente sua lógica aqui
//O código verifica se o ano 2000 atende a duas condições para ser considerado um ano bissexto. Primeiro, ele verifica se o ano é divisível por 4, o que é possível no caso de 2000. depois, ele verifica se o ano não é divisível por 100, o que também é verdadeiro para o ano 2000. Como ambas as condições são atendidas, o código retorna o valor true, indicando que o ano 2000 é um ano bissexto. O código verifica se um ano é bissexto aplicando essas duas condições. No caso específico do ano 2000, ele mostra que é considerado um ano bissexto.

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu(maiorDe18, ensinoMedioCompleto, disponibilidadeHorarios) {
  
  if (maiorDe18 === "sim" && ensinoMedioCompleto === "sim" && disponibilidadeHorarios === "sim") {
    return true;
  } else {
    return false; 
  }
}

const resultado = checaValidadeInscricaoLabenu("sim", "sim", "sim");
console.log(resultado);

// implemente sua lógica aqui
// Dentro da função, verificamos se todas as respostas são "sim" usando condicionais. Se todas as respostas forem "sim", significa que a inscrição é válida, então retornamos true. Caso não sejam válidas, retornamos false.
// Todas as respostas são "sim". Portanto, a função retorna true, indicando que a inscrição é válida.