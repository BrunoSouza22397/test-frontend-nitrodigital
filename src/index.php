<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Consulta Encomendas</title>
    <link rel="stylesheet" href="styles/css/main.css">
    <script type="text/javascript" src="./scripts/main.js"></script>
</head>
<body>
    <img class="logo" src="./assets/logo.png">
    <p class="searchLabel">Consulte sua encomenda:</p>
    <div class="searchBar">
        <div>
            <input id="codeInput" type="text" placeholder="Digite o número do pedido"/>
            <img src="./assets/lupa.png" onclick="getData()">
        </div>
    </div>

    <div id="content">
        <div class="row">
            <div class="column">
                <p class="data" id="clientName">1 - Nome do Cliente</p>
                <p class="label">Número de ordem e nome do cliente</p>
            </div>
            <div class="column priceColumn">
                <p class="data" id="price">R$ 42,00</p>
                <p class="label">Valor do pedido</p>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <p class="data" id="date">25/09/2018</p>
                <p class="label">Data do pedido</p>
            </div>
            <div class="column">
                <p class="data" id="status">Entregue | Entregar</p>
                <p class="label">Situação da encomenda</p>
            </div>
        </div>
    </div>

    <div id="notFound">
        <p>Encomenda<br>não encontrada!</p>
        <p>Procure Novamente</p>
    </div>
    
</body>
</html>