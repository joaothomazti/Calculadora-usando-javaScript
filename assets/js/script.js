function calculadora() {

  // definindo as operações e pegando valor de entrada do usuário
  const opera = Number(prompt('Escolha uma opcao: \n 1 - Soma (+)\n 2 - Subtracao (-)\n 3 - Divisao (/)\n 4 - multiplicacao (*)'));


   // verificando se a operação é válida
  if(!opera || opera >= 5){
    alert('Digite uma opcao valida!');
    calculadora();
  }else {

    // definindo variáveis
    // todas as entradas devem ser do tipo number
    let n1 = Number(prompt("Insira o primeiro numero: "));
    let n2 = Number(prompt("Insira o segundo numero: "));
    let result;

    // verificando se as variáveis são válidas
    if(!n1 || !n2){
      alert('Digite um numero valido!')
      calculadora();
    }else{

      // definindo as funções
      function soma(){
        result = n1 + n2;
        alert(`O resultado de ${n1} + ${n2} e ${result}`);
        novaOp();
      }
      function sub(){
        result = n1 + n2;
        alert(`O resultado de ${n1} - ${n2} e ${result}`);
        novaOp();
      }
      function multi(){
        result = n1 / n2;
        alert(`O resultado de ${n1} / ${n2} e ${result}`);
        novaOp();
      }
      function div(){
        result = n1 * n2;
        alert(`O resultado de ${n1} * ${n2} e ${result}`);
        novaOp();
      }

      function novaOp(){
        let novaOp = prompt('Deseja realizar outra operacao?\n 1 - Sim\n 2 - Nao');
        if(novaOp == 1){
          calculadora();
        }else if(novaOp == 2) {
          alert('ate mais')
        }else {
          alert('Digite uma opcao valida')
          novaOp();
        }
      }
      
      }
    }

    switch(opera){
      case 1:
        soma();
        break;
      case 2:
        sub();
        break;
      case 3:
        div();
        break;
      case 4:
        multi();
        break;
    
  }
 
}

calculadora();


