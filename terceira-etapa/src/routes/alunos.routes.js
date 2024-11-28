import { Router } from "express";
const alunosRoutes = Router();
let alunos = [];

// Rota para listar todos os alunos
alunosRoutes.get("/", (req, res) => {
    if (!alunos) {
        return res.status(404).json({ message: "Nenhum aluno cadastrado!" });
    }
        return res.status(200).json(alunos);
  });


alunosRoutes.post("/", (req, res) => {
  const { nome, senha, apelido, grupo } = req.body;
  
  // Validação dos campos obrigatórios
  if (!nome || !senha || !apelido || !grupo) {
    return res.status(400).json({
      message: "Os campos nome, senha, apelido e grupo são obrigatórios",
    });
  }

  //Validação do campo senha
  function validarSenha(senha) {
    if (!senha || typeof senha !== "string" || senha.match(/[^a-zA-Z0-9]/)) {
      throw new Error(
        "Campo senha é obrigatório! Ela deve ser uma string podendo ter dígitos e letras."
      );
    }
    return senha;
  }

  validarSenha(senha);

  //Validação do campo grupo
  function validarGrupo(grupo) {
    if (!Number.isInteger(grupo) || grupo < 1 || grupo > 6) {
      throw new Error(
        "Campo grupo é obrigatório e deve ser um número de 1 a 6!"
      );
    }
    return grupo;
  }

  validarGrupo(grupo);

  //Validação do campo apelido
  function validarApelidoNaoNulo(apelido) {
    if (!apelido) {
      throw new Error("Campo apelido é obrigatório!");
    }
    return apelido;
  }

  validarApelidoNaoNulo(apelido);

  // Criação de um novo aluno
  const novoAluno = {
    id: Math.floor(Math.random() * 1000000),
    nome,
    senha,
    apelido,
    grupo,
  };
});

// Rota para buscar um aluno pelo id
alunosRoutes.get("/:id", (req, res) => {
  const { id } = req.params;

  // Busca um aluno pelo id no array de alunos
  const aluno = alunos.find((al) => al.id == id);

  // Verifica se o planeta foi encontrado
  if (!aluno) {
    return res
      .status(404)
      .json({ message: `Aluno com id ${id} não encontrado!` });
  }

  return res.status(200).json(aluno);
});

alunosRoutes.put("/atualizar", (req, res) => {
  const { id } = req.params;
  const { nome, senha, apelido, grupo } = req.body;

  // Busca um aluno pelo id no array de Alunos
  const aluno = alunos.find((p) => p.id == id);

  // Validação dos campos obrigatórios
  if (!nome || !senha || !apelido) {
    return res.status(400).json({
      message: "Os campos nome, senha e água são obrigatórios!",
    });
  }

  // Validação dos campos obrigatórios
  if (!nome || !senha || !apelido || !grupo) {
    return res.status(400).json({
      message: "Os campos nome, senha, apelido e grupo são obrigatórios",
    });
  }

  //Validação do campo senha
  function validarSenha(senha) {
    if (!senha || typeof senha !== "string" || senha.match(/[^a-zA-Z0-9]/)) {
      throw new Error(
        "Campo senha é obrigatório! Ela deve ser uma string podendo ter dígitos e letras."
      );
    }
    return senha;
  }

  validarSenha(senha);

  //Validação do campo grupo
  function validarGrupo(grupo) {
    if (!Number.isInteger(grupo) || grupo < 1 || grupo > 6) {
      throw new Error(
        "Campo grupo é obrigatório e deve ser um número de 1 a 6!"
      );
    }
    return grupo;
  }

  validarGrupo(grupo);

  //Validação do campo apelido
  function validarApelidoNaoNulo(apelido) {
    if (!apelido) {
      throw new Error("Campo apelido é obrigatório!");
    }
    return apelido;
  }

  validarApelidoNaoNulo(apelido);

  aluno.nome = nome;
  aluno.senha = senha;
  aluno.apelido = apelido;
  aluno.grupo = grupo;

  return res.status(200).json({
    message: "aluno atualizado com sucesso!",
    aluno,
  });
});

// Rota para deletar um aluno pelo nome
alunosRoutes.delete("/:nome", (req, res) => {
  const { nome } = req.params;

  // Encontrar o aluno pelo nome
  const aluno = alunos.find((al) => al.nome === nome);

  if (!aluno) {
      return res.status(404).send({ message: "Aluno não encontrado!" });
  }

  // Filtrar para remover o aluno encontrado
  alunos = alunos.filter((al) => al.nome !== nome);

  return res.status(200).send({
      message: "Aluno deletado com sucesso!",
      aluno,
  });
});


export default alunosRoutes;
