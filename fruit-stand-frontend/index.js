// document.addEventListener("DOMContentLoaded", () => {
//     // movingBasket()
//     // loadForm()
// })

const loadForm = () => {
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
        .then(newPlayer => renderPlayerCard(newPlayer))
        //     //create function that verifies if user is already in game or not
        // })
    })
    const loadNewPlayer = () =>{
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
            // console.log(newName)
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
            .then(newPlayer => renderPlayerCard(newPlayer.id))
            //create function that verifies if user is already in game or not
            })
        }
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


//create header for player name 
//create area for high score
//append all these attributes to container card to be displayed


// 2 forms log in and sign up 
// sign up creates user and signs in
// log in needs to be matched to database names (interpolate with name given to match object in db)