document.addEventListener("DOMContentLoaded", function() {
    const quantidadeEstoque = document.getElementById("quantidadeEstoque");
    const valorUnitario = document.getElementById("valorUnitario");
    const adicionarProdutoBtn = document.getElementById("adicionarProdutoBtn");

    if (quantidadeEstoque && valorUnitario) {
        quantidadeEstoque.addEventListener("input", calcularValorTotal);
        valorUnitario.addEventListener("input", calcularValorTotal);
    }

    // Calcula quantidade x valor unitário
    function calcularValorTotal() {
        const quantidade = quantidadeEstoque.value;
        const valorUnitario = document.getElementById("valorUnitario").value;
        const valorTotal = quantidade * valorUnitario;
        document.getElementById("valorTotal").value = valorTotal;
    }

    // Adiciona produto à tabela
    window.adicionarProduto = function() {
        const descricao = document.getElementById("descricao").value;
        const unidadeMedida = document.getElementById("unidadeMedida").value;
        const quantidadeEstoque = document.getElementById("quantidadeEstoque").value;
        const valorUnitario = document.getElementById("valorUnitario").value;
        const valorTotal = document.getElementById("valorTotal").value;

        if (!descricao || !unidadeMedida || !quantidadeEstoque || !valorUnitario || !valorTotal) {
            alert("Todos os campos são obrigatórios!");
            return;
        }

        const tabela = document.getElementById("tabelaProdutos").getElementsByTagName("tbody")[0];
        const novaLinha = tabela.insertRow();

        // Cria a linha com os dados na tabela
        novaLinha.insertCell(0).innerText = descricao;
        novaLinha.insertCell(1).innerText = unidadeMedida;
        novaLinha.insertCell(2).innerText = quantidadeEstoque;
        novaLinha.insertCell(3).innerText = valorUnitario;
        novaLinha.insertCell(4).innerText = valorTotal;

        // Limpa os dados depois do envio
        document.getElementById("descricao").value = "";
        document.getElementById("unidadeMedida").value = "";
        document.getElementById("quantidadeEstoque").value = "";
        document.getElementById("valorUnitario").value = "";
        document.getElementById("valorTotal").value = "";
    };

    // Adiciona evento de escuta ao botão para adicionar produto
    if (adicionarProdutoBtn) {
        adicionarProdutoBtn.addEventListener("click", adicionarProduto);
    }
});

//imprimir json
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('formCadastroFornecedor');
    
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Previne o envio do formulário para fins de teste

            const fornecedor = {
                razaoSocial: document.getElementById('razaoSocial').value,
                nomeFantasia: document.getElementById('nomeFantasia').value,
                cnpj: document.getElementById('cnpj').value,
                inscricaoEstadual: document.getElementById('inscricaoEstadual').value,
                inscricaoMunicipal: document.getElementById('inscricaoMunicipal').value,
                contato: document.getElementById('contato').value,
                telefone: document.getElementById('telefone').value,
                email: document.getElementById('email').value,
                cep: document.getElementById('cep').value,
                endereco: document.getElementById('endereco').value,
                bairro: document.getElementById('bairro').value,
                municipio: document.getElementById('municipio').value,
                estado: document.getElementById('estado').value,
                numero: document.getElementById('numero').value
            };
        
            console.log(JSON.stringify(fornecedor, null, 2));
        });
    }
});

//adicionar anexos
document.addEventListener("DOMContentLoaded", function() {
    // Função para adicionar anexo à tabela
    window.addAnexo = function() {
        const inputArquivo = document.getElementById("anexoArquivo");
        const arquivo = inputArquivo.files[0];

        if (!arquivo) {
            alert("Por favor, selecione um arquivo.");
            return;
        }

        const tabela = document.getElementById("anexosTable").getElementsByTagName("tbody")[0];
        const novaLinha = tabela.insertRow();

        // Cria a célula com o nome do arquivo
        const celulaNome = novaLinha.insertCell(0);
        celulaNome.innerText = arquivo.name;

        // Cria a célula com as ações (download e excluir)
        const celulaAcoes = novaLinha.insertCell(1);
        const linkDownload = document.createElement("a");
        linkDownload.href = URL.createObjectURL(arquivo);
        linkDownload.download = arquivo.name;
        linkDownload.innerHTML = '<img src="eye-icon.png" alt="Download" />';
        celulaAcoes.appendChild(linkDownload);

        const botaoExcluir = document.createElement("button");
        botaoExcluir.innerText = "Excluir";
        botaoExcluir.onclick = function() {
            deleteRow(this);
        };
        celulaAcoes.appendChild(botaoExcluir);

        // Limpa o campo de arquivo após adicionar
        inputArquivo.value = "";
    };

    // Função para excluir uma linha da tabela
    window.deleteRow = function(button) {
        const row = button.parentNode.parentNode;
        row.parentNode.removeChild(row);
    };
});
