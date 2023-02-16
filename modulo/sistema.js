/*****************************************************************************
 * Objetivo: Desenvolver um sistema para notas dos alunos
 * Data: 10/02/2023
 * Autor: Genivania Macedo
 * Versão: 1.0
 ******************************************************************************/

const calcular = function(nota1, nota2, nota3,nota4){
    let valor1 = Number(nota1);
    let valor2 = Number(nota2);
    let valor3 = Number(nota3);
    let valor4 = Number(nota4);

    let resultado = ((valor1 + valor2 + valor3 + valor4)/4);

    console.log(resultado);
}
 
const informacoes = function(aluno, professor,sexoAluno, sexoProfessor,curso, disciplina){
    let pessoaAluno = aluno;
    let pessoaProfessor = professor;
    let sexoAluno1 = sexoAluno;
    let sexoProfessor1 = sexoProfessor;
    let nomeCurso = curso;
    let nomeDisciplina = disciplina;

}


//Exporta uma função para ser utilizada em outro arquivo
module.exports = {
    calcular,
    informacoes
}

// calcular(5,5,5,5)