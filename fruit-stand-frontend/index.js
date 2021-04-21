// document.addEventListener("DOMContentLoaded", () => {
//     // movingBasket()
//     // loadForm()
// })

const loadForm = (user) => {
    let nameForm = document.querySelector('.new-player-form')
    let errorElement = document.getElementById('error')
    nameForm.addEventListener('submit', (e) => {
        e.preventDefault()
        let messages = []
        let newName = e.target.name.value
        if (newName.value === '' || newName.value == null) {
            messages.push('Name is required')
        }
        if (messages.length > 0) {
            e.preventDefault()
            errorElement.innerText = messages.join(', ')
        }
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
        .then(newPlayer => {
            user = newPlayer
            let gameButton = document.getElementById('game-button')
gameButton.addEventListener('click', () => {
    body.innerHTML = ''
    body.innerHTML = `<div id='counter'>30s</div>
    <div class='row' id="game">
    <canvas id='canvas'  width="200" height="100" ></canvas>
</div>`
    
    playGame(user)
})
        })
        
        
        //create function that verifies if user is already in game or not
    })
    
}


// 2 forms log in and sign up 
// sign up creates user and signs in
// log in needs to be matched to database names (interpolate with name given to match object in db)
// make play