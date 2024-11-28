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