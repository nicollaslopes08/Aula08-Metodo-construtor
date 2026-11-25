export class Estudante {
    private nome: string = "";
    private nota1: number = 0;
    private nota2: number = 0;

    constructor(nome: string = "", nota1: number = 0, nota2: number = 0) {
        this.setNome(nome);
        this.setNota1(nota1);
        this.setNota2(nota2);
    }

    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        if (nome === "") {
            console.log("Nome inválido, o nome não pode ficar vazio.");
            this.nome = "Sem nome";
        } else {
            this.nome = nome;
        }
    }

    public getNota1(): number {
        return this.nota1;
    }

    public setNota1(nota1: number): void {
        if (nota1 < 0 || nota1 > 10) {
            console.log("Nota 1 inválida! A nota deve ser entre 0 e 10.");
            this.nota1 = 0;
        } else {
            this.nota1 = nota1;
        }
    }

    public getNota2(): number {
        return this.nota2;
    }

    public setNota2(nota2: number): void {
        if (nota2 < 0 || nota2 > 10) {
            console.log("Nota 2 inválida! A nota deve ser entre 0 e 10.");
            this.nota2 = 0;
        } else {
            this.nota2 = nota2;
        }
    }

    public calcularMedia(): number {
        return (this.nota1 + this.nota2) / 2;
    }

    public verificarSituacao(): string {
        const media = this.calcularMedia();
        if (media >= 6) {
            return "Aprovado";
        } else {
            return "Reprovado";
        }
    }

    public exibirInformacoes(): void {
        
        console.log(`Nome do estudante: ${this.nome}`);
        console.log(`Nota 1: ${this.nota1}`);
        console.log(`Nota 2: ${this.nota2}`);
        console.log(`Média: ${this.calcularMedia()}`);
        console.log(`Situação: ${this.verificarSituacao()}`);
    }
}
