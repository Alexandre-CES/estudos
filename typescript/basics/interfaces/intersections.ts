export{};

interface DadosBancarios{
    conta: number;
    agencia: number;
    banco: string;
}

interface Cliente{
    nome: string;
}

interface DadosPessoaFisica{
    cpf: number;

}

interface DadosPessoaJuridica{
    cnpj: number;
}

//dados, cliente, cpf ou cnpj
type DadosCliente = DadosBancarios & Cliente & (DadosPessoaFisica | DadosPessoaJuridica);

const dadosCliente: DadosCliente = {
    nome: 'Alexandre',
    cpf: 123456789,
    conta: 123456789,
    agencia: 123456789,
    banco: 'Banco do Brasil'
}

console.log(dadosCliente)