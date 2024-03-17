class Projeto {
    nome: string;
    tecnologias : string[];
    periodo:string;
    constructor(
        nome: string,
        tecnologias: string[],
        periodo: string
        ){
        this.nome = nome;
        this.tecnologias = tecnologias;
        this.periodo = periodo;
    }

}