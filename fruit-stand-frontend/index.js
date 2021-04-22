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
        })//create function that verifies if user is already in game or not
    })
   
    existingNameForm.addEventListener('submit', (e) => {
        e.preventDefault()
        let messages = []
        let newName = e.target.name.value
        if (newName === '' || newName == null) {
            messages.push('Name is required')
            // need to check against all users array and 
            // change the message to say they are ready to play if name is valid
            // or this name already exists please try again
        }
        if (messages.length > 0) {
            // e.preventDefault()
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
                console.log(user)})

        allUsers(newName)
        showUserProfileCredentials(user)
        // allUsers defined below
    })
        
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
                // console.log(user)
                // ^^^shows correct user   
            } 
        })
    }

    const showUserProfileCredentials = (user) => {
        let userBox = document.querySelector('.container')
        userBox.innerHTML = ''
        userBox.innerHTML = `<h3>show user.name</h3>
        </br>
        <ul class = 'user-scores'>
        </br>
        <li>score1</li>
        <li>score2</li>
        <li>score3</li>
        </ul>
        </br>
        </br>
        <button>Edit</button>`
        console.log(user)
        // shows undefined
    }

}
