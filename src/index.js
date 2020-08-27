import { clientes as dataClientes } from './desafio';
import { PessoaFisica, ClientePessoaFisica } from './model/clientes';
import { ContaCorrente } from './model/contas';

let clientes = [];

dataClientes.map((item) => {
  const {
    clienteID,
    clienteNome: nome,
    clienteEmail: email,
    clienteCPF: cpf,
    contaPoupanca,
  } = item;

  const pessoaFisica = new PessoaFisica({ nome, email, cpf });
  const locale = 'pt-BR';
  const { id, movimentacao: movimentacoes } = item.contaCorrente;
  const contaCorrente = new ContaCorrente({ id, movimentacoes, locale });

  const cliente = new ClientePessoaFisica({
    clienteID,
    pessoaFisica,
    contaCorrente,
    contaPoupanca,
  });
  clientes.push(cliente);
});

for (const cliente of clientes) {
  console.log(cliente.getDados());
}
