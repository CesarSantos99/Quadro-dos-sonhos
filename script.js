const paineis = document.querySelectorAll(".painel")

paineis.forEach(painel => {
    painel.addEventListener('click', () => {
        removeActive()
        painel.classList.add('active')
    })
})

function removeActive() {
    paineis.forEach(painel => {
        painel.classList.remove('active')
    })
}