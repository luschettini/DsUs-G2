class Aluno {
    constructor(grupo, nome, apelido) {
    this.grupo = grupo;
    this.nome = nome;
    this.apelido = apelido;
}

validarNome(nome) {
    if (typeof nome === "string" && /^[a-zA-Z ]+$/.test(nome.trim())) {
        return true;
    }
    return false;
}
}

