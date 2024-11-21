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