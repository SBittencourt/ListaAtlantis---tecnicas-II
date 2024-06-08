export enum NomeAcomodacao {
    SolteiroSimples = 'Solteiro Simples',
    CasalSimples = 'Casal Simples',
    FamiliaSimples = 'Familia Simples',
    FamiliaMais = 'Familia Mais',
    SolteiroMais = 'Solteiro Mais',
    FamiliaSuper = 'Familia Super'
}

export const DescricoesAcomodacao = {
    [NomeAcomodacao.SolteiroSimples]: 'Acomodação simples para solteiro(a)',
    [NomeAcomodacao.CasalSimples]: 'Acomodação simples para casal',
    [NomeAcomodacao.FamiliaSimples]: 'Acomodação para família com até duas crianças',
    [NomeAcomodacao.FamiliaMais]: 'Acomodação para família com até cinco crianças',
    [NomeAcomodacao.SolteiroMais]: 'Acomodação com garagem para solteiro(a)',
    [NomeAcomodacao.FamiliaSuper]: 'Acomodação para até duas famílias, casal e três crianças cada'
};
