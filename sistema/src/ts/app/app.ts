import Processo from "../abstracoes/processo";
import CadastroAcomodacoes from "../processos/cadastroAcomodacoes";
import Principal from "../processos/submenus/principal";

console.clear()
console.log(`Bem-vindo(a) ao melhor sistema de gestão de clubes, hotéis e resorts do mundo, o Atlantis! :)`);

let processo: Processo
let execucao: Boolean = true

while (execucao) {
    processo = new Principal()
    processo.processar()
    execucao = processo.Execucao
}