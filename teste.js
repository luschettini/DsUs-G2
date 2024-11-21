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



//teste de validação luiza
class Aluno {
    constructor(grupo, apelido) {
        // Valida e inicializa os atributos grupo e apelido
        this.validarGrupo(grupo); // Garante que o grupo esteja entre 1 e 6
        this.validarApelidoNaoNulo(apelido); // Garante que o apelido não seja nulo ou vazio
        this.grupo = grupo; // Atribui o grupo ao objeto
        this.apelido = apelido; // Atribui o apelido ao objeto
    }


    validarGrupo(grupo) {
        if (typeof grupo !== 'number' || grupo < 1 || grupo > 6) {
        console.log('Grupo deve ser um número entre 1 e 6.');
        }
    }


    validarApelidoNaoNulo(apelido) {
        if (apelido == null || apelido.trim() === '') {
            console.log('Apelido não pode ser nulo ou vazio.');
        }
    }
}

const luluzinha = new Aluno(1, "Maria de Lourdes", );
    const seiLaQuem = new Aluno(2, "Rei2", "Sei lá quem");
    const juju = new Aluno("Ju91", "@juju", "juca" );
    const gabi = new Aluno("Grupo 3", "Gabriela Souza", "Gabi");
    const bruna = new Aluno(5, "Bruna123", "Bruna");
    const carlos = new Aluno("Grupo 4", "Carlos Silva", "");
    
    console.log(luluzinha.validarApelidoNaoNulo(""));
    console.log(juju.validarApelidoNaoNulo("Sei lá quem"));
    console.log(carlos.validarApelidoNaoNulo(""));
//validando apelido e numero de 1 a 6

//teste de validação caio
const luluzinha = new Aluno("Grupo 1", "Maria de Lourdes", "Luluzinha");
const seiLaQuem = new Aluno(1, "Rei2", "Sei lá quem");
const juju = new Aluno("Ju91", "@juju", "juca");
const gabi = new Aluno("Grupo 3", "Gabriela Souza", "Gabi");
const bruna = new Aluno("Grupo 2", "Bruna123", "Bruna");
const carlos = new Aluno("Grupo 4", "Carlos Silva", "Carl");

console.log(luluzinha.validarSenha(" Maria de Lourdes "));
console.log(seiLaQuem.validarSenha("Rei2"));
console.log(juju.validarSenha("Rei2"));
console.log(gabi.validarSenha("Gabriela Souza"));
console.log(bruna.validarSenha("Bruna123"));
//atualizar campos (campos)
bruna.atualizarCampos({ grupo: "Grupo 5", nome: "Bruna Silva", apelido: "Bruninha", senha: "NovaSenha123" });
console.log(bruna);
//validando senha 

//teste de validação bernardo

const bernardo = new Aluno("12345")
console.log(bernardo.getSenha());
console.log(bernardo.tempoDesocupado);
//esta retornado a senha e tempo desocupado
