//teste julia

// Método para validar o nome
validarNome(nome) {
    // Verifica se o tipo do parâmetro "nome" é uma string e se contém apenas letras e espaços
    if (typeof nome === "string" && /^[a-zA-Z ]+$/.test(nome)) {
        return nome; // Retorna o nome se todas as condições forem satisfeitas
                     // E se atende ao padrão que permite apenas letras (a-z, A-Z) e espaços.
    }
    return "Validação não válida"; // Retorna uma mensagem indicando que o nome não passou na validação
}
const luluzinha = new Aluno("Grupo 1", "Maria de Lourdes", "Luluzinha");
const seiLaQuem = new Aluno(1, "Rei2", "Sei lá quem");
const juju = new Aluno("Ju91", "@juju", "juca");
const gabi = new Aluno("Grupo 3", "Gabriela Souza", "Gabi");
const bruna = new Aluno("Grupo 2", "Bruna123", "Bruna");
const carlos = new Aluno("Grupo 4", "Carlos Silva", "Carl");

console.log(luluzinha.validarNome(" Maria de Lourdes "));
console.log(seiLaQuem.validarNome("Rei2"));
console.log(juju.validarNome("Rei2"));
console.log(gabi.validarNome("Gabriela Souza"));
console.log(bruna.validarNome("Bruna123"));
console.log(carlos.validarNome("Carlos Silva"));
//validando nome

