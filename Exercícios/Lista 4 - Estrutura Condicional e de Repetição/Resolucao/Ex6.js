var altura, sexo, imcIdeal;

sexo = "Masculino";
altura = 1.62;

if(sexo == "Masculino") {
    imcIdeal = 72.7 * altura - 58;
}
else if(sexo == "Feminino"){
    imcIdeal = 62.1 * altura - 44.7;
}

console.log(imcIdeal)