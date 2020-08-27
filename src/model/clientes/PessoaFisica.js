export class PessoaFisica {
  constructor({ nome, email, cpf }) {
    this.nome = nome;
    this.email = email;
    this.cpf = cpf;
  }

  getDados() {
    return `${this.nome} \t CPF: ${this.cpf} \t E-MAIL: ${this.email}`;
  }
}
