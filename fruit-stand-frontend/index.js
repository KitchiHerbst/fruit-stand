document.addEventListener("DOMContentLoaded", () => {
    movingBasket()
    loadForm()
})

const loadForm = (e) => {
    let nameForm = document.querySelector('.new-player-form')
    nameForm.addEventListener('submit', (e) => {
        e.preventDefault()
        let newName = e.target.name.value
        console.log(newName)
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
                'Accept':'application/json'
            },
            body: JSON.stringify({
                name: newName
            })
        })
        .then(res => res.json())
        .then(newPlayer => console.log(newPlayer))
    })
}