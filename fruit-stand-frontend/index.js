const loadForm = (user) => {
    let nameForm = document.querySelector('.new-player-form')
    let existingNameForm = document.querySelector('.existing-player')
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
        })//create function that verifies if user is already in game or not
    })
   
        existingNameForm.addEventListener('submit', (e) => {
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
            // need to get array of all users
            // need to check that input name matches name in db
            //if name matches clear sign up log in and show user credentials (in same box)
            //else not an existing user message and clear input to retype name



        
            allUsers(newName)
            })
        }
    
    



const renderPlayerCard = (newPlayer) => {
    let div = document.querySelector('.column')
    // div.className = 'card p-2 m-2'
    let container = document.querySelector('.container')
    container.innerHTML = ''
    
    let playerHeader = document.createElement('h2')
    playerHeader.innerHTML = newPlayer.name

    let playerScore = document.createElement('p')
    playerScore.innerHTML = newPlayer.score
    // debugger
    container.append(playerHeader, playerScore)

    // console.log(newPlayer)
}

const allUsers = (newName) => {
        fetch('http://localhost:3000/users')
            .then(res => res.json())
            .then(userData => renderUsers(userData, newName))
}

const renderUsers = (users, newName) => {
    users.forEach(player => {
        if (player.name === newName){
            user = player
            console.log(user)
            
        } 
    })
}

