import { Router } from "express";

const alunosRoutes = Router();

alunosRoutes.post("/adicionar", (req, res) => {
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

alunosRoutes.get("/listar", (req, res) => {});

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

alunosRoutes.delete("/remover", (req, res) => {});

export default alunosRoutes;
