import { dateFormat } from './dateFormat.js'
import { setValue } from './setValue.js'

/** Busca encomenda digitada */
export const getData = () => {
    let code = document.getElementById('searchInput').value.trim()

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
                    document.getElementById('searchInput').value = ''
                    
                    // Altera valores no DOM
                    setValue('clientName', order[0].numero + " - " + order[0].cliente.nome)
                    setValue('price', Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(order[0].valor) )
                    setValue('date', dateFormat(order[0].data))
                    if (order[0].entregue) {
                        setValue('status', 'Entregue')
                    }else {
                        setValue('status', 'Entregar')
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