/**
 * Altera elementos no dom
 * @param {string} id 
 * @param {string} value 
 */
export const setValue = (id, value) => {
    document.getElementById(id).innerHTML = value
}