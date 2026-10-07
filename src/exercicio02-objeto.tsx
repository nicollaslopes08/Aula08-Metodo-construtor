import promptSync from "prompt-sync";
import { Produto } from "./exercicio02";

const prompt = promptSync();

function executar(){
    console.log("----Produto----");

    const nomeProduto: string = prompt("Digite o nome do produto: ");
    const precoProduto: number = Number(prompt("Digite o preço do produto em reais: "));

    const produto = new Produto();
    produto.setNome(nomeProduto);
    produto.setPreco(precoProduto);

    console.log("----Informações do produto----")
    produto.exibirInformacoes();
}
executar();