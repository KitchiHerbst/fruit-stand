document.addEventListener("DOMContentLoaded", () => {
    loadForm()
})

const loadForm = (e) => {
    let nameForm = document.querySelector('.new-player-form')
    nameForm.addEventListener('submit', (e) =>{
        e.preventDefault()
        let newName = e.target.name.value
        fetch('')

    })
}