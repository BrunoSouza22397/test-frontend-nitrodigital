<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Consulta Encomendas</title>
    <link rel="stylesheet" href="styles/css/main.css">
</head>
<body>
    <img class="logo" src="./assets/logo.png">
    <p class="searchLeg">Consulte sua encomenda:</p>
    <div class="searchBar">
        <div>
            <input type="text" placeholder="Digite o número do pedido"/>
            <img src="./assets/lupa.png">
        </div>
    </div>

    <div class="content">
        <div class="row">
            <div class="column clientName">
                <p class="data">1 - Nome do Cliente</p>
                <p class="leg">Número de ordem e nome do cliente</p>
            </div>
            <div class="column price">
                <p class="data">R$ 42,00</p>
                <p class="leg">Valor do pedido</p>
            </div>
        </div>
        <div class="row">
            <div class="column date">
                <p class="data">25/09/2018</p>
                <p class="leg">Data do pedido</p>
            </div>
            <div class="column status">
                <p class="data">Entregue | Entregar</p>
                <p class="leg">Situação da encomenda</p>
            </div>
        </div>
    </div>

    <div class="notFound">
        <p>Encomenda<br>não encontrada!</p>
        <p>Procure Novamente</p>
    </div>
    
</body>
</html>