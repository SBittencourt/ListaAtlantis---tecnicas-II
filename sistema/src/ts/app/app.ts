import Processo from "../abstracoes/processo";
import Principal from "../processos/submenus/principal";

console.clear();
console.log(` `);
console.log(`Bem-vindo(a) ao melhor sistema de gestão de clubes, hotéis e resorts do mundo, o Atlantis! :)`);

let processo: Processo;
let execucao: boolean = true;

while (execucao) {
    processo = new Principal();
    processo.processar();
    execucao = processo.Execucao;
}

console.log(` `);
console.log('Tchau, tchau! Volte sempre! :)');
