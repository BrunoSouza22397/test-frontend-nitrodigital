/**
 * Formata data para "DD/MM/YYYY"
 * @param {Date} v 
 */
export const dateFormat = (v) => {
    let date  = new Date(v)
    let formattedDate = date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear()
    return formattedDate
}