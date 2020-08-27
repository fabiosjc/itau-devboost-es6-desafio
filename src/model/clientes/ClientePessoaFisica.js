import { PessoaFisica } from './PessoaFisica';
import { ContaCorrente, ContaPoupanca } from '../contas/';

export class ClientePessoaFisica {
  constructor({ clienteID, pessoaFisica, contaCorrente, contaPoupanca }) {
    this.clienteID = clienteID;
    this.pessoa = new PessoaFisica({ ...pessoaFisica });
    this.contaCorrente = new ContaCorrente(contaCorrente);
    this.contaPoupanca = new ContaPoupanca(contaPoupanca);
  }

  getDados() {
    return `
      ==============================================================================================
      CLIENTE: ${this.pessoa.getDados()}
      ==============================================================================================
      SALDO CONTA CORRENTE: ${this.contaCorrente.getSaldo()}
      
      MOVIMENTAÇÕES: 
      ${this.contaCorrente.getDadosMovimentacoes()}

      SALDO CONTA POUPANÇA: ${this.contaPoupanca.getSaldo()}
    `;
  }
}
