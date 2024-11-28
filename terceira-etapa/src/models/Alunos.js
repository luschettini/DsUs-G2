class Aluno {
  #senha; // Atributo privado que armazena a senha do aluno.

  // Construtor que inicializa as propriedades do objeto "Aluno"
  constructor(grupo, nome, apelido, senha) {
    // Atribui o valor recebido para a propriedade "grupo", "nome" e "apelido" do objeto
    this.grupo = this.validarGrupo(grupo);
    this.nome = this.validarNome(nome);
    this.apelido = this.validarApelidoNaoNulo(apelido);
    this.#senha = this.validarSenha(senha);
    this.estaVivo = true;
    this.localAtual = "Portaria do SENAI";
  }

  validarNome(nome) {
    // Verifica se o tipo do parâmetro "nome" é uma string e se contém apenas letras e espaços
    if (!nome || typeof nome !== "string" || nome.match(/[^a-zA-Z]/)) {
      throw new Error(
        "Campo --nome-- inválido. Ele deve ser uma string e não conter números!"
      );
    }
    return nome; // Retorna o nome se todas as condições forem satisfeitas
    // E se atende ao padrão que permite apenas letras (a-z, A-Z) e espaços.
  }

  validarGrupo(grupo) {
    // Verifica se o grupo não é um número inteiro ou se está fora do intervalo de 1 a 6
    if (!Number.isInteger(grupo) || grupo < 1 || grupo > 6) {
      // Lança um erro com uma mensagem indicando que o grupo deve ser um número de 1 a 6
      throw new Error(
        "Campo --grupo-- é obrigatório e deve ser um número de 1 a 6!"
      );
    }
    // Retorna o grupo se todas as condições forem satisfeitas
    return grupo;
  }

  validarApelidoNaoNulo(apelido) {
    // Verifica se o apelido é nulo, indefinido ou uma string vazia
    if (!apelido) {
      // Lança um erro com uma mensagem indicando que o campo apelido é obrigatório
      throw new Error("Campo --apelido-- é obrigatório!");
    }
    // Retorna o apelido se a condição for satisfeita
    return apelido;
  }

  validarSenha(senha) {
    // Verifica se a senha é nula, não é uma string ou contém caracteres inválidos
    if (!senha || typeof senha !== "string" || senha.match(/[^a-zA-Z0-9]/)) {
      // Lança um erro com uma mensagem indicando que o campo senha é obrigatório
      // e deve ser uma string contendo apenas dígitos e letras
      throw new Error(
        "Campo --senha-- é obrigatório! Ela deve ser uma string podendo ter dígitos e letras."
      );
    }
    // Retorna a senha se todas as condições forem satisfeitas
    return senha;
  }


  atualizarCampos({ grupo, nome, apelido, senha }) {
    // Verifica se o campo grupo foi fornecido
    if (grupo) {
        // Valida o grupo e atualiza o atributo grupo da instância
      this.grupo = this.validarGrupo(grupo);
    }
    // Verifica se o campo nome foi fornecido
    if (nome) {
        // Valida o nome e atualiza o atributo nome da instância
      this.nome = this.validarNome(nome);
    }
     // Verifica se o campo apelido foi fornecido
    if (apelido) {
        // Valida o apelido e atualiza o atributo apelido da instância
      this.apelido = this.validarApelidoNaoNulo(apelido);
    }
     // Verifica se o campo senha foi fornecido
    if (senha) {
        // Valida a senha e atualiza o atributo privado #senha da instância
      this.#senha = this.validarSenha(senha);
    }
  }

  pegarSenha() {
    // Retorna o valor do atributo privado #senha
    return this.#senha;
  }
}

export default Aluno;
