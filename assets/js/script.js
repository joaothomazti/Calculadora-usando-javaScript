function calculadora() {

  // definindo as operações e pegando valor de entrada do usuário
  const operacao = Number(prompt('Escolha uma opcao: \n 1 - Soma (+)\n 2 - Subtracao (-)\n 3 - Divisao (/)\n 4 - multiplicacao (*)'));


   // verificando se a operação é válida
  if(!operacao || operacao >= 5){
    alert('Digite uma opcao valida!');
    calculadora();
  }else {

    // definindo variáveis
    // todas as entradas devem ser do tipo number
    let n1 = Number(prompt("Insira o primeiro numero: "));
    let n2 = Number(prompt("Insira o segundo numero: "));
    let resultado;

    // verificando se as variáveis são válidas
    if(!n1 || !n2){
      alert('Digite um numero valido!')
      calculadora();
    }else{

      // definindo as funções
      function soma(){
       resultado = n1 + n2;
        alert(`O resultado de ${n1} + ${n2} e ${resultado}`);
        novaOperacao();
      }
      function subtracao(){
        resultado = n1 - n2;
        alert(`O resultado de ${n1} - ${n2} e ${resultado}`);
        novaOperacao();
      }
      function divisao(){
        resultado = n1 / n2;
        alert(`O resultado de ${n1} / ${n2} e ${resultado}`);
        novaOperacao();
      }
      function multiplicacao(){
        resultado = n1 * n2;
        alert(`O resultado de ${n1} * ${n2} e ${resultado}`);
        novaOperacao();
      }

      function novaOperacao(){
        let novaOperacao = prompt('Deseja realizar outra operacao?\n 1 - Sim\n 2 - Nao');
        if(novaOperacao == 1){
          calculadora();
        }else if(novaOperacao == 2) {
          alert('ate mais')
        }else {
          alert('Digite uma opcao valida')
          novaOperacao();
        }
      }
      
      }
    }

    switch(operacao){
      case 1:
        soma();
        break;
      case 2:
        subtracao();
        break;
      case 3:
        divisao();
        break;
      case 4:
        multiplicacao();
        break;
    
  }
 
}

calculadora();


