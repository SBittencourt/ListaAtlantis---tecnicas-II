import Menu from "../interfaces/menu";

export default class MenuTipoAtualizarCliente implements Menu {
    mostrar(): void {
        console.clear()
        console.log(` `)   
        console.log(`----------------------`)
        console.log(` `)   
        console.log(`| Qual o tipo do cliente para atualizar? `)
        console.log(` `)   
        console.log(`| 1 - Titular`)
        console.log(`| 2 - Dependente`)
        console.log(` `)   
        console.log(`----------------------`)
    }
}