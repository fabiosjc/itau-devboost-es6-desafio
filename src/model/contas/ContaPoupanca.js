export class ContaPoupanca {
  constructor(valor = 0.0) {
    this.valor = valor;
  }

  getSaldo() {
    return this.valor;
  }
}
