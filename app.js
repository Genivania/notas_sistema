/*****************************************************************************
 * Objetivo: Desenvolver um sistema para notas dos alunos
 * Data: 10/02/2023
 * Autor: Genivania Macedo
 * Versão: 1.0
 ******************************************************************************/

var matematica = require('./modulo/sistema.js');
//Import da biblioteca para a entrada de dados
var readline = require('readline');

//Criar um objeto para receber os dados via teclado
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Entrada de dados do aluno e do professor:
entradaDados.question('Nome do Aluno: \n', function (aluno) {
    let nomeAluno = aluno
    if (aluno == ' ') {
        console.log('ERRO: Digite seu nome!')
        entradaDados.close()
    } else {
        entradaDados.question('Genero do aluno: [FEMININO | MASCULINO] \n', function (sexoAluno) {
            let sexoAluno1 = sexoAluno
            if (sexoAluno == '') {
                console.log('ERRO: Digite o genero do aluno [FEMININO | MASCULINO]')
                entradaDados.close()
            } else {
                entradaDados.question('Nome do Professor: \n', function (professor) {
                    let nomeProfessor = professor
                    if (professor == '') {
                        console.log('ERRO: Não é possível continuar com entrada vazia')
                        entradaDados.close()
                    } else {
                        entradaDados.question('Genero do Professor: [FEMININO | MASCULINO] \n', function (sexoProfessor1) {
                            let sexoProfessor = sexoProfessor1.toUpperCase()
                            if (sexoProfessor1 == ' ') {
                                console.log('ERRO: Não é possível continuar com entrada vazia')
                                entradaDados.close()
                            } else if (
                                sexoProfessor != 'FEMININO' && sexoProfessor != 'MASCULINO') {
                                console.log('Erro: Por favor escolha entre [MASCULINO | FEMININO ]')
                                entradaDados.close()
                            } else {
                                entradaDados.question('Curso: \n', function (curso) {
                                    let nomeCurso = curso.toUpperCase()
                                    if (curso == '') {
                                        console.log('ERRO: Digite seu curso!')
                                        entradaDados.close()
                                    } else {
                                        entradaDados.question('Disciplina: \n', function (disciplina) {
                                            let nomeDisciplina = disciplina.toUpperCase()
                                            if (disciplina == '') {
                                                console.log('ERRO: Não é possível continuar com entrada vazia')
                                                entradaDados.close()
                                            }

                                            // Entarda de dados do valor1
                                            entradaDados.question('Primeira nota: \n', function (nota1) {

                                                let valor1 = nota1.replace(',', '.');

                                                //Entrada de dados valor2
                                                entradaDados.question('Segunda nota: \n', function (nota2) {

                                                    let valor2 = nota2.replace(',', '.');

                                                    //Entrada de dados valor3
                                                    entradaDados.question('Terceira nota: \n', function (nota3) {

                                                        let valor3 = nota3.replace(',', '.');

                                                        //Entrada de dados valor4
                                                        entradaDados.question('Quarta nota: \n', function (nota4) {

                                                            let valor4 = nota4.replace(',', '.');

                                                            // Validação de entrada de dados vazios
                                                            if (valor1 == '' || valor2 == '' || valor3 == '' || valor4 == '') {
                                                                console.log('ERRO: Não é possível calcular sem preencher todos os dados!')
                                                                entradaDados.close(); //Fecha o objeto de entrada de dados (emcerra o programa)

                                                                //Validação de enrada de dados não numéricos 
                                                            } else if (isNaN(valor1) || isNaN(valor2) || isNaN(valor3) || isNaN(valor4)) {
                                                                console.log('ERRO: Não é possível calcular sem a entrada de valores numericos!')
                                                                entradaDados.close(); //Fecha o objeto de entrada de dados (emcerra o programa)

                                                            } else if (valor1 < 0 || valor2 < 0 || valor3 < 0 || valor4 < 0) {
                                                                console.log('Erro: Nota não pode ser menor que 0')
                                                                entradaDados.close();

                                                            } else if (valor1 > 100 || valor2 > 100 || valor3 > 100 || valor4 > 100) {
                                                                console.log('Erro: Nota não pode ser maior que 100')
                                                                entradaDados.close();

                                                            } else {
                                                                let resultado = matematica.calcular(valor1, valor2, valor3, valor4)
                                                            }
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });
    }
})   