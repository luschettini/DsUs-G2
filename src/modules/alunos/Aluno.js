// Definição de uma classe chamada "Aluno"
class Aluno {
    #senha; // Declaração de um atributo privado chamado "senha". Somente acessível dentro da classe.
    
    // Construtor que inicializa as propriedades do objeto "Aluno"
    constructor(grupo, nome, apelido, senha) {
        // Atribui o valor recebido para a propriedade "grupo", "nome" e "apelido" do objeto
        this.grupo = grupo;
        this.nome = nome;
        this.apelido = apelido;
        this.#senha = senha; // Define o valor do atributo privado "#senha" a partir do parâmetro 
        recebido.
        this.validarGrupo(grupo); // Garante que o grupo esteja entre 1 e 6
        this.validarApelidoNaoNulo(apelido); // Garante que o apelido não seja nulo ou vazio
	    this.estaVivo = true;  // Inicializa o atributo público "estaVivo" com o valor padrão "true".
	    this.localAtual = "Portaria do SENAI"; // Inicializa o atributo público "localAtual" com o valor padrão "Portaria do SENAI".
        this.tempoDesocupado = null ; //O tempo em que o usuario esta desocupado inicia como null
    }

    // Método para validar o nome 
    validarNome(nome) {
        // Verifica se o tipo do parâmetro "nome" é uma string e se contém apenas letras e espaços
        if (typeof nome === "string" && /^[a-zA-Z ]+$/.test(nome.trim())) {
            // Verifica se a variável "nome" é do tipo string
            // E se atende ao padrão que permite apenas letras (a-z, A-Z) e espaços.
            // ".trim()" remove espaços extras no início e no final antes da verificação.
            return nome; // Retorna o nome se todas as condições forem satisfeitas.
        }
        return "Validação não válida"; 
        // Retorna uma mensagem indicando que o nome não passou na validação.
        
    }
    getSenha() {  //Metodo para retornar a senha do aluno
        return this.#senha; 
    }

    setTempoDesocupado(tempo) { //Metodo para setar o tempo em que o usuario esta desocupado
        tempo = 10;
        this.tempoDesocupado = tempo;
    }
// Método para validar a senha
validarSenha(senha) {
    // Verifica se o tipo do parâmetro "senha" é uma string e se contém letras e números
    if (typeof senha === "string" && /^[a-zA-Z0-9]+$/.test(senha)) {
        return true; // Retorna true se a senha for válida
    }
    return false; // Retorna false se a senha não for válida
}

// Método para atualizar os campos do aluno
atualizarCampos({ grupo, nome, apelido, senha }) {
    if (grupo) this.grupo = grupo;
    if (nome) this.nome = this.validarNome(nome) !== "Validação não válida" ? nome : this.nome;
    if (apelido) this.apelido = apelido;
    if (senha && this.validarSenha(senha)) this.#senha = senha;
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