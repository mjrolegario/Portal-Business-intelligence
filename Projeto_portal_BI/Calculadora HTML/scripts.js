// Obtém a referência para a div de data atual
const dataAtualDiv = document.getElementById("data_atual");

// Função para atualizar a data atual
function atualizarDataAtual() {
  const data = new Date();
  const dia = data.getDate();
  const mes = data.getMonth() + 1;
  const ano = data.getFullYear();

  // Atualiza o conteúdo da div com a data atual
  dataAtualDiv.querySelector("p").textContent = `${dia}/${mes}/${ano}`;
}

// Chama a função para atualizar a data inicialmente
atualizarDataAtual();

// Define um intervalo para atualizar a data a cada segundo
setInterval(atualizarDataAtual, 1000);

// Carregar o arquivo JSON
fetch('precos.json')
  .then(response => response.json())
  .then(data => {
    var select = document.getElementById('selectDados');
    var codigoTextBox = document.getElementById('codigoTextBox');

    // Iterar pelos dados do JSON
    data.forEach(item => {
      // Criar uma nova opção
      var option = document.createElement('option');
      option.value = item["Cód. Produto"]; // Definir o valor da opção
      option.textContent = item["Descrição"]; // Definir o texto da opção

      // Adicionar a opção ao elemento <select>
      select.appendChild(option);
    });

    // Evento de alteração do <select>
    select.addEventListener('change', function () {
      var selecionado = select.options[select.selectedIndex];
      codigoTextBox.value = selecionado.value;
    });
  });


//busca de produto conforme o código
//campo pesquisar produto
var dados; //variável que armazeza os dados do json
fetch("precos.json") //selecionando o local do arquivo json
  .then(response => response.json())
  .then(data => {
    dados = data;
  })
  .catch(error => {
    console.error(error);
  });

// função que busca o valor do select para pesquisar produto - busca pelo código
// atualiza a coluna produto e a coluna Preço Zero
function buscarValor(selectElement) {
  var valorSelecionado = selectElement.value;
  var valorProduto = ""; // Valor inicial vazio
  var valorPreco = ""; // Valor inicial vazio

  if (valorSelecionado) {
    var produtoEncontrado = dados.find(function (item) {
      return item["Cód. Produto"] === valorSelecionado;
    });

    if (produtoEncontrado) {
      valorProduto = produtoEncontrado["Descrição"];
      valorPreco = produtoEncontrado["Preço Zero"];
    } else {
      valorProduto = "Produto não encontrado";
      valorPreco = "Preço não encontrado";
    }
  }

  atualizarColuna(selectElement.parentNode.parentNode, valorProduto, valorPreco);
}
// essa função insere o preço zero na tabela
function atualizarColuna(rowElement, valorProduto, valorPreco) {
  var colunaProdutoElement = rowElement.querySelector("td:nth-child(2)");
  colunaProdutoElement.textContent = valorProduto;

  var colunaPrecoElement = rowElement.querySelector("td:nth-child(6)");
  colunaPrecoElement.textContent = valorPreco;
}

// Adicionar evento de escuta ao campo "valor_orcado1"
var valorOrcado1Input = document.getElementById("valor_orcado1");
var resultado1Cell = document.getElementById("resultado1");

valorOrcado1Input.addEventListener("input", function () {
  var valorOrcado = parseFloat(valorOrcado1Input.value);
  var quantidade = parseFloat(document.getElementById("quantidade1").value);

  if (!isNaN(valorOrcado) && !isNaN(quantidade)) {
    var resultado = valorOrcado * quantidade;
    resultado1Cell.textContent = resultado.toFixed(2);
  } else {
    resultado1Cell.textContent = "";
  }
});

// Adicionar evento de escuta ao campo "valor_orcado2"
var valorOrcado2Input = document.getElementById("valor_orcado2");
var resultado2Cell = document.getElementById("resultado2");

valorOrcado2Input.addEventListener("input", function () {
  var valorOrcado2 = parseFloat(valorOrcado2Input.value);
  var quantidade2 = parseFloat(document.getElementById("quantidade2").value);

  if (!isNaN(valorOrcado2) && !isNaN(quantidade2)) {
    var resultado2 = valorOrcado2 * quantidade2;
    resultado2Cell.textContent = resultado2.toFixed(2);
  } else {
    resultado2Cell.textContent = "";
  }
});

$(document).ready(function() {
  // Executar a função select2 em todos os elementos com a classe select2
  $('.select2').select2();
});

$('.select2').select2();







//essa função insere dados no select da "planilha" linha1
fetch('precos.json')
  .then(response => response.json())
  .then(data => {
    const select = document.getElementById('selectElement');

    data.forEach(item => {
      const option = document.createElement('option');
      //option.value = item["Cód. Produto"];
      option.text = item["Cód. Produto"];
      select.appendChild(option);
    });
  });

  //essa função insere dados no select da "planilha" linha2
fetch('precos.json')
.then(response => response.json())
.then(data => {
  const select = document.getElementById('selectElement2');

  data.forEach(item => {
    const option = document.createElement('option');
    //option.value = item["Cód. Produto"];
    option.text = item["Cód. Produto"];
    select.appendChild(option);
  });
});

// Código JavaScript para o cliente
var selectElementCliente = document.getElementById("nome_do_cliente_select");

fetch("clientes.json")
  .then(response => response.json())
  .then(data => {
    for (var codigoCliente in data) {
      if (data.hasOwnProperty(codigoCliente)) {
        var razaoSocial = data[codigoCliente]["Razão Social"];

        // Cria um elemento <option> para cada cliente e adiciona ao <select>
        var optionElement = document.createElement("option");
        optionElement.value = codigoCliente;
        optionElement.text = razaoSocial;
        selectElementCliente.appendChild(optionElement);
      }
    }
  })
  .catch(error => {
    console.error("Ocorreu um erro ao ler o arquivo JSON:", error);
  });



// Código JavaScript para o vendedor
var selectElementVendedor = document.getElementById("nome_do_vendedor_select");

fetch("vendedores.json")
  .then(response => response.json())
  .then(data => {
    for (var codigoVendedor in data) {
      if (data.hasOwnProperty(codigoVendedor)) {
        var vendedor = data[codigoVendedor].Vendedor;

        // Cria um elemento <option> para cada vendedor e adiciona ao <select>
        var optionElement = document.createElement("option");
        optionElement.value = codigoVendedor;
        optionElement.text = vendedor;
        selectElementVendedor.appendChild(optionElement);
      }
    }
  })
  .catch(error => {
    console.error("Ocorreu um erro ao ler o arquivo JSON:", error);
  });

// Código JavaScript para a empresa
var selectElementEmpresa = document.getElementById("nome_da_empresa_select");

fetch("cnpjMundial.json")
  .then(response => response.json())
  .then(data => {
    for (var codigoEmpresa in data) {
      if (data.hasOwnProperty(codigoEmpresa)) {
        var empresaCnpj = data[codigoEmpresa].Empresa_CNPJ;

        // Cria um elemento <option> para cada empresa e CNPJ e adiciona ao <select>
        var optionElement = document.createElement("option");
        optionElement.value = codigoEmpresa;
        optionElement.text = empresaCnpj;
        selectElementEmpresa.appendChild(optionElement);
      }
    }
  })
  .catch(error => {
    console.error("Ocorreu um erro ao ler o arquivo JSON:", error);
  });

  

  