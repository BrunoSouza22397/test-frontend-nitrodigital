import { getData } from './scripts/getData.js'
import "./styles/sass/main.scss"

let input = document.getElementById('searchInput')
let lupa = document.getElementById('searchButton')

lupa.onclick = getData

input.addEventListener("keyup", (event) => {
    if (event.keyCode === 13) {
        event.preventDefault()
        lupa.click()
    }
})