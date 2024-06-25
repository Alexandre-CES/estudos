//Mapped types
export{};

interface Pessoa{
    nome:string;
    idade:number;
}

type PessoaOpcional = {
    [P in keyof Pessoa]?:Pessoa[P];
}

const pessoa: Pessoa = {
    nome: 'Alexandre',
    idade: 18,
}

const pessoaOpcional: PessoaOpcional = {
    nome: 'Alexandre',
}

console.log(pessoa);
console.log(pessoaOpcional);

//exemplo 2
type Usuario ={
    nome:string;
    email:string;
    endereco:string;
    idade:number;
}

type UsuarioOpcional = {
    nome?:string;
    email?:string;
    endereco?:string;
    idade?:number;
}

type UsuarioSomenteLeitura = {
    readonly nome:string;
    readonly email:string;
    readonly endereco:string;
    readonly idade:number;
}

type UsuarioMappedType = {
    [P in keyof Usuario]?: Usuario[P]; //tirar redundância ?:
}

const usuarioMapped:UsuarioMappedType = {
    nome:'nome',
    idade: 1
}

console.log(usuarioMapped);

//exemplo 3
interface Livro{
    titulo:string;
    autor:string | null;
    preco:number;
    paginas:number;
}

type Artigo = Omit<Livro,'paginas'>;

type LivroModelo = Readonly<Livro>; //tirar redundância readonly

const livro:LivroModelo = {
    titulo: 'titulo',
    autor: 'autor',
    preco: 10,
    paginas: 10
}