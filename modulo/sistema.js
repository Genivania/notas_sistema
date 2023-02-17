/*****************************************************************************
 * Objetivo: Desenvolver um sistema para notas dos alunos
 * Data: 10/02/2023
 * Autor: Genivania Macedo
 * Versão: 1.0
 ******************************************************************************/

const calcular = function (nota1, nota2, nota3, nota4) {
    let valor1 = Number(nota1);
    let valor2 = Number(nota2);
    let valor3 = Number(nota3);
    let valor4 = Number(nota4);

    let resultado = ((valor1 + valor2 + valor3 + valor4) / 4);

    console.log(resultado);
}



function exame(mediaAluno, notaExame) {
    let resultado = mediaAluno
    let calcular = notaExame

    let resultadoExame = (Number(resultado) + Number(calcular)) / 2

    return resultadoExame
}



function validarNotaExame(resultadototal, sexoAluno) {
    let sexoAluno1 = sexoAluno;
    let resultadoFinal = resultadototal;

    if (resultadoFinal >= 60) {
        if (sexoAluno1 == 'MASCULINO') {
            return 'APROVADO'
        } else {
            return 'APROVADA'
        }
    } else {
        if (sexoAluno1 == 'MASCULINO') {
            return 'REPROVADO'
        } else {
            return 'REPROVADA'
        }
    }
}


function validarNota(resultado, sexoAluno) {
    let resultadoFinal = resultado;
    let sexoAluno1 = sexoAluno;

    if (resultadoFinal >= 70) {
        if (sexoAluno1 == 'MASCULINO') {
            return 'APROVADO'
        } else {
            return 'APROVADA'
        }
    } else if (resultadoFinal < 50) {
        if (sexoAluno1 == 'MASCULINO') {
            return 'REPROVADO'
        } else {
            return 'REPROVADA'
        }
    } else {
        return false
    }
}




//Exporta uma função para ser utilizada em outro arquivo
module.exports = {
    calcular,
    validarNotaExame,
    validarNota,
    exame
}