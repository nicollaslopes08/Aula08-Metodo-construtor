export class Produto{
    private nome: string ="" ;
    private preco:  number = 0;

    constructor(nome: string = "", preco: number = 0) {
        this.nome = nome;
        this.setPreco(preco);
    }

    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public getPreco(): number {
        return this.preco;
    }

 public setPreco(preco: number): void {
    if (preco < 0) {
        console.log("Preço invalido, o preço não pode ser negativo.");
        this.preco = 0;
    } else {
        this.preco = preco;
    }
}
    public exibirInformacoes(): void {
        console.log("--------");
        console.log(`Nome do produto: ${this.nome}`)
        console.log(`Preco do produto: ${this.preco}`)
    }
}