//conditional types
export{};

type DataNascimento = string;
type Idade = number;

type InformacaoPessoa<T> = T extends number? number : string;

const dataNascimento: InformacaoPessoa<DataNascimento> = '24/10/1998'; 
console.log(dataNascimento);

const idade: InformacaoPessoa<Idade> = 20;
console.log(idade);

//exemplo 2
type Pessoa = {
    nome: string;
    idade: number;
    endereco: string;
};

type Empresa = {
    nome: string;
    cnpj: number;
};

type EnderecoPessoa ={
    enderecoSecundario: string;
    cidade: string;
    pais: string;
};

type EnderecoEmpresa = {
    localizacao: 'rua' | 'avenida' | 'praca';
};

type EnderecoFinal<T> = T extends {endereco: string}? EnderecoPessoa : EnderecoEmpresa;

const enderecoPessoa: EnderecoFinal<Pessoa> = {
    enderecoSecundario: 'rua',
    cidade: 'cidade',
    pais: 'pais'
};

const enderecoEmpresa: EnderecoFinal<Empresa> = {
    localizacao: 'rua'
};

console.log(enderecoPessoa);
console.log(enderecoEmpresa);

//exemplo3
type FormatoArquivos = 'png' | 'jpg' | 'gif' | 'svg' | 'mp4' | 'mp3';

type FiltrarArquivoAudio<T> = T extends 'mp4' | 'mp3' ? T : never;

type ArquivoAudio = FiltrarArquivoAudio<FormatoArquivos>;

const arquivoAudio: ArquivoAudio = 'mp4';

console.log(arquivoAudio);