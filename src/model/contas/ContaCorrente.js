export class ContaCorrente {
  constructor({ id, movimentacoes, locale = 'pt-BR' }) {
    this.id = id;
    this.movimentacoes = movimentacoes;
    this.saldo = 0;
    this.locale = locale;
  }

  getSaldo() {
    let saldo = 0.0;
    for (const movimentacao of this.movimentacoes) {
      const { action, custo } = movimentacao;
      saldo = action === 'add' ? saldo + custo : saldo - custo;
    }

    return Number(saldo).toFixed(2);
  }

  getDadosMovimentacoes() {
    let historicoMovimentacoes = '\n';

    for (const movimentacao of this.movimentacoes) {
      let tipoOperacao = '';
      let sinal = '';

      if (movimentacao.action === 'add') {
        tipoOperacao = '[CREDITO]';
        sinal = '+';
      } else {
        tipoOperacao = '[DEBITO]';
        sinal = '-';
      }

      historicoMovimentacoes += `\t\t${tipoOperacao} ${movimentacao.operacao}_______________________________${sinal}${movimentacao.custo}\n`;
    }

    return historicoMovimentacoes;
  }
}
