/** Busca encomenda digitada */
function getData() {
    let code = document.getElementById('codeInput').value.trim()

    if (code) {
        let req = new XMLHttpRequest()
        req.onreadystatechange = () => {
            if (req.readyState == 4 && req.status == 200) {
                let obj = req.responseText
                obj = JSON.parse(obj)

                let order = obj.encomendas.filter( (item) => {
                    return item.numero == code
                })

                if (order.length > 0) {
                    document.getElementById('notFound').style.display = 'none'
                    document.getElementById('content').style.display = 'flex'
                    document.getElementById('codeInput').value = ''
                    
                    // Altera valores no DOM
                    this.setValue('clientName', order[0].numero + " - " + order[0].cliente.nome)
                    this.setValue('price', Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(order[0].valor) )
                    this.setValue('date', this.dateFormat(order[0].data))
                    if (order[0].entregue) {
                        this.setValue('status', 'Entregue')
                    }else {
                        this.setValue('status', 'Entregar')
                    }
                } else {
                    document.getElementById('notFound').style.display = 'block'
                    document.getElementById('content').style.display = 'none'
                }
            }
        }
        req.open("GET", "../data/dados.json", true)
        req.send()
    } else {
        document.getElementById('notFound').style.display = 'block'
        document.getElementById('content').style.display = 'none'
    }
}

/**
 * Altera elementos no dom
 * @param {string} id 
 * @param {string} value 
 */
function setValue(id, value) {
    document.getElementById(id).innerHTML = value
}

/**
 * Formata data para "DD/MM/YYYY"
 * @param {Date} v 
 */
function dateFormat(v) {
    let date  = new Date(v)
    let formattedDate = date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear()
    return formattedDate
}