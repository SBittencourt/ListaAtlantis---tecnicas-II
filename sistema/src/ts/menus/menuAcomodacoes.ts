import Menu from "../interfaces/menu";

export default class MenuAcomodacao implements Menu {
    mostrar(): void {
        console.clear()
        console.log(` `)   
        console.log(`----------------------`)
        console.log(` `)   
        console.log(`| Qual o tipo de acomodação? `)
        console.log(` `)   
        console.log("| 1 - Acomodação simples para solteiro(a)");
        console.log("| 2 - Acomodação simples para casal");
        console.log("| 3 - Acomodação para família com até duas crianças");
        console.log("| 4 - Acomodação para família com até cinco crianças");
        console.log("| 5 - Acomodação com garagem para solteiro(a)");
        console.log("| 6 - Acomodação para até duas famílias, casal e três crianças cada");
        console.log(` `)   
        console.log(`----------------------`)
    }
}