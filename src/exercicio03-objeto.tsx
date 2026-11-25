import promptSync from "prompt-sync";
import { Estudante } from "./exercicio03";

const prompt = promptSync();

function executar() {
    console.log("----Estudante----");

    const nomeEstudante: string = prompt("Digite o nome do estudante: ");
    const nota1: number = Number(prompt("Digite a primeira nota (0 a 10): "));
    const nota2: number = Number(prompt("Digite a segunda nota (0 a 10): "));

    const estudante = new Estudante();
    estudante.setNome(nomeEstudante);
    estudante.setNota1(nota1);
    estudante.setNota2(nota2);

    console.log("----Informações do estudante----");
    estudante.exibirInformacoes();
}

executar();
