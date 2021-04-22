const loadForm = (user) => {
    let nameForm = document.querySelector('.new-player-form')
    let existingNameForm = document.querySelector('.existing-player')
    let errorElement = document.getElementById('error')

    nameForm.addEventListener('submit', (e) => {
        e.preventDefault()
        let messages = []
        let newName = e.target.name.value
        if (newName === '' || newName == null) {
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
           console.log(user)
            let gameButton = document.getElementById('game-button')
            gameButton.addEventListener('click', () => {
                body.innerHTML = ''
                body.innerHTML = `<div id='counter'>30s</div>
                 <div class='row' id="game">
                <canvas id='canvas'  width="200" height="100" ></canvas>
                </div>`
                playGame(user)
                // playGame defined on falling.js
            })
            
            renderPlayerCard(user)
        })//create function that verifies if user is already in game or not
    })
   
    existingNameForm.addEventListener('submit', (e) => {
        e.preventDefault()
        let messages = []
        let newName = e.target.name.value
        if (newName === '' || newName == null) {
            messages.push('Name is required')
        }
        if (messages.length > 0) {
            errorElement.innerText = messages.join(', ')
        }
        let gameButton = document.getElementById('game-button')
        gameButton.addEventListener('click', () => {
            body.innerHTML = ''
            body.innerHTML = `<div id='counter'>30s</div>
                <div class='row' id="game">
            <canvas id='canvas'  width="200" height="100" ></canvas>
            </div>`
            playGame(user)
        })
        allUsers(newName)
        // allUsers defined below
    })
    
    const renderPlayerCard = (user) => {
        let scores = []
        user.baskets.forEach(basket => scores.push(basket.score))
        console.log(scores)

        let div = document.querySelector('.column')
        let container = document.querySelector('.container')
        container.innerHTML = '' 
        let playerHeader = document.createElement('h2')
        playerHeader.innerHTML = user.name
        let editNameBtn = document.createElement('button')
        editNameBtn.innerText = 'Edit Name'
        editNameBtn.addEventListener('click', () => {
            editForm = document.createElement('form')
            editForm.innerHTML = `<input type="text"></input>
            <button class = 'button' >Change Name</button>`
            container.append(editForm)
            editForm.addEventListener('submit', (e) =>{
                e.preventDefault()
                editedName = e.target[0].value
                fetch(`http://localhost:3000/users/${user.id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type':'application/json',
                        'Accept':'application/json'
                    },
                    body: JSON.stringify({
                        name: editedName
                    })
                })
                .then(res => res.json())
                .then(newPlayerData => renderPlayerCard(newPlayerData))
            })
        })
        let playerScore = document.createElement('p')
        playerScore.innerText = `High Score: ${Math.max(...scores)}`
        container.append(playerHeader, playerScore, editNameBtn)
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

                renderPlayerCard(user) 
            } 

        })
    }
}
