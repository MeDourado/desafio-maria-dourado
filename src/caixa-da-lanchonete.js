import cardapio from "./cardapio";
class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
        let valorTotalCompras = 0;
        let prato;
        const pedidos = [];
        let nomeItem = '';
        let quantidade = 0;
    
        function calcularCarrinho() {
            for (let pedido of pedidos) {
                valorTotalCompras += pedido.prato.valor * Number(pedido.quantidade);
            }
            if(metodoDePagamento === 'debito') {
                valorTotalCompras = valorTotalCompras;
            } else {
                valorTotalCompras = metodoDePagamento === 'dinheiro' ? valorTotalCompras - (valorTotalCompras * 0.05) : valorTotalCompras + (valorTotalCompras * 0.03);
            }
            valorTotalCompras = valorTotalCompras.toFixed(2);
        }
    
        function analisandoExtras() {
            const extras = pedidos.filter((pedido) => {
                return pedido.prato.extra !== undefined;
            });
            if (extras.length === 0) {
                calcularCarrinho();
            } else {
                const analisandoExtras = [];
                for (let extra of extras) {
                    if (pedidos.every((pedido) => pedido.prato.codigo !== extra.prato.extraDo)) {
                        if (extras.every((extra) => extra.quantidade > 1)) {
                            analisandoExtras.push(true);
                        } else {
                            analisandoExtras.push(false);
                        }
                    }
                }

                if (analisandoExtras.every((extra) => extra === true)) {
                    calcularCarrinho();
                }
            }
        }
    
        for (let item of itens) {
            const organizandoItens = item.split(',');
            nomeItem = organizandoItens[0];
            quantidade = organizandoItens[1];
            prato = cardapio.find((item) => {
                if (item.codigo === nomeItem) {
                    return item.valor;
                }
            });
            pedidos.push({
                prato,
                quantidade
            });
        }
    
        if (itens.length === 0) {
            return "Não há itens no carrinho de compra!";
        } else if (metodoDePagamento !== 'dinheiro' && metodoDePagamento !== 'debito' && metodoDePagamento !== 'credito') {
            return "Forma de pagamento inválida!";
        } else if (pedidos.find((pedido) => {
            return pedido.prato === undefined;
        })) {
            return "Item inválido!";
        } else if (pedidos.find((pedido) => {
            return pedido.quantidade < 1;
        })) {
            return "Quantidade inválida!";
        } else {
            analisandoExtras();
        }
    
        if (valorTotalCompras) {
            return `R$ ${String(valorTotalCompras.replace('.', ','))}`;
        } else {
            return "Item extra não pode ser pedido sem o principal";
        }
    }
}
export { CaixaDaLanchonete };
