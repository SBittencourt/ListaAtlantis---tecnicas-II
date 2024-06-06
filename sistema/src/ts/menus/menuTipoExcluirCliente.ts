import Menu from "../interfaces/menu";

export default class MenuTipoExcluirCliente implements Menu {
    mostrar(): void {
        console.clear()
        console.log(` `)   
        console.log(`----------------------`)
        console.log(` `)   
        console.log(`| Qual o tipo do cliente que deseja excluir? `)
        console.log(` `)   
        console.log(`| 1 - Titular`)
        console.log(`| 2 - Dependente`)
        console.log(` `)   
        console.log(`----------------------`)
    }
}