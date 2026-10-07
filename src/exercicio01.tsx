export class ContaBancaria {
    private valorTotal: number;
    private valorSacado: number;
    private valorDepositado: number;
    private valorAtual: number;
    private usuario: string;

    constructor(usuario: string, valorTotal: number) {
    this.usuario = usuario;
    this.valorTotal = valorTotal;
    this.valorAtual = valorTotal;
    this.valorSacado = 0;
    this.valorDepositado = 0;
}

    public getValorTotal(): number{
        return this.valorTotal
    }

    public setValorTotal(valorTotal: number): void{
        this.valorTotal = valorTotal;
    }
    public getValorSacado(): number{
        return this.valorSacado
    }

    public setValorSacado(valorSacado: number): void{
        this.valorSacado = valorSacado;
    }
    public getValorDepositado(): number{
        return this.valorDepositado;
    }

    public setValorDepositado(valorDepositado: number): void{
        this.valorDepositado = valorDepositado;
    }
      public getValorAtual(): number{
        return this.valorAtual;
    }

    public setValorAtual(valorAtual: number): void{
        this.valorAtual = valorAtual;
    }
     public getUsuario(): string{
        return this.usuario;
    }

    public setUsuario(usuario: string): void{
        this.usuario = usuario;
    }

    public saque (): void{
        if (this.valorSacado <=0){
            console.log("Impossível fazer o saque")
        }
        else if(this.valorSacado > this.valorAtual){
            console.log("Impossivel fazer o saque, saldo insuficiente na conta.")
        }
        else{
            console.log("Saque feito com sucesso.")
         this.valorAtual -= this.valorSacado
        }
    }

    public depositar(): void {
        if (this.valorDepositado <=0){
            console.log("Impossivel realizar o deposito")
        }
        else {
            console.log("Deposito realizado com sucesso")
        }
        this.valorAtual = this.valorTotal + this.valorDepositado
    }

    public exibirValor(): void {
        console.log(`O saldo de ${this.usuario} é ${this.valorAtual}`)
    }

}
