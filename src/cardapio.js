const cardapio = [
    {
        codigo: "cafe",
        descricao: "Café",
        valor: 3,
    },
    {
        codigo: "chantily",
        descricao: "Chantily (extra do Café)",
        valor: 1.5,
        extra: true,
        extraDo: "cafe",
    },
    {
        codigo: "suco",
        descricao: "Suco Natural",
        valor: 6.2,
    },
    {
        codigo: "sanduiche",
        descricao: "Sanduíche",
        valor: 6.5,
    },
    {
        codigo: "queijo",
        descricao: "Queijo (extra do Sanduíche)",
        valor: 2,
        extra: true,
        extraDo: "sanduiche"
    },
    {
        codigo: "salgado",
        descricao: "Salgado",
        valor: 7.25,
    },
    {
        codigo: "combo1",
        descricao: "1 Suco e 1 Sanduíche",
        valor: 9.50,
    },
    {
        codigo: "combo2",
        descricao: "1 Café e 1 Sanduíche",
        valor: 7.50,
    },
]


export default cardapio;
