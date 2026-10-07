import promptSync from "prompt-sync";
import {ContaBancaria} from "./exercicio01";
const prompt = promptSync();

async function executar(){
    console.log("----abrindo conta----")

    const usuario: string = prompt ("Digite seu nome de usuario: ");
    const valorTotal: number = Number(prompt ("Digite o saldo inicial da conta R$: "));

    const conta = new ContaBancaria (usuario, valorTotal);

    conta.setUsuario(usuario)
    conta.setValorTotal(valorTotal)

    const opcao: string = prompt("Digite 1 para sacar, e 2 para depositar: ")

    if (opcao ==="1"){
        const saque = prompt ("Digite o valor a ser sacado: ")
        conta.setValorSacado(saque);
        conta.saque();
    }
    else if (opcao==="2"){
        const deposito = Number (prompt ("Digite o valor a ser depositado: "))
        conta.setValorDepositado(deposito);
        conta.depositar();
    }

    else{
        console.log("Opção inválida")
    }

    conta.exibirValor();


    
}

executar();