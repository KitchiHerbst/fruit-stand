let user = undefined
document.addEventListener('DOMContentLoaded', () => {
    fruitCatchHomeScreen()
    // load(user)  
})

const load = (user) => {let body = document.getElementById('body')
// let head = document.getElementById('head')
    body.className = 'bodyyyy'
    body.innerHTML =`
    <div id='dashboard'>   
        <div class='column' id='left'>
            <h3> Players Info </h3>
                <div id='error'></div>
        <div class='container'>
            <form class='new-player-form'>
                <h3>Enter New Name</h3>
                <input
                type='text'
                name='name'
                value=''
                placeholder='Enter Name Here'
                class='input-text'
                />
                <br />
                <input
                type='submit'
                name='submit'
                value='Les Gooo'
                class='submit button'
                />
            </form>
            <br>
            <form class='existing-player'>
                <h3>Existing Player</h3>
                <input
                type='text'
                name='name'
                value=''
                placeholder='Enter Name Here'
                class='input-text'
                />
                <br />
                <input
                type='submit'
                name='submit'
                value='Les Gooo'
                class='submit button'
                />
            </form>
        </div>
        </div>
        <div class = 'column' id='center'>
        <body>
            <h2>
            <span>F</span>
            <span>R</span>
            <span>U</span>
            <span>I</span>
            <span>T</span>
            <span> </span>
            <span>C</span>
            <span>A</span>
            <span>T</span>
            <span>C</span>
            <span>H</span>
            </h2>
        </body>
            <br>
            <br>
            <p id='instructions'>How To Play:<br>
            Enter name to play.<br>
            Use arrow keys, left and right, to catch fruit
            and avoid the roaches.</p>
            <button class='button' id='game-button'>Play Game</button>
        </div>
        <div class = 'column' id='right'>
            <h3>High Scores</h3>
        </div>  
    </div>
    `
    renderBaskets()
    loadForm()
    // loadForm defined on index.js
}

const fruitCatchHomeScreen = () => {
    body.className = 'bodyyyy'
    body.innerHTML = `
    </br></br></br></br></br></br></br></br></br></br></br>
    <button class='button' id='enter-game'>Enter Game</button>
    <body>
        <h1>
            <span>F</span>
            <span>R</span>
            <span>U</span>
            <span>I</span>
            <span>T</span>
            <span> </span>
            <span>C</span>
            <span>A</span>
            <span>T</span>
            <span>C</span>
            <span>H</span>
        </h1>
    </body>`
    enterGameBtn = document.getElementById('enter-game')
    enterGameBtn.addEventListener('click', () => {
        // console.log('click')
        load(user)
    })
}

const showScorePage = (basket, user, count) => {
    if(count<0){
        body.innerHTML = ''
        body.innerHTML = `<h1 id='score-count'>Your Score is ${count}, hope you like roaches!</h1>
        <button id='return-home' class='button'>Return</button>`
    }else {
    body.innerHTML = ''
    body.innerHTML = `<h1 id='score-count'>Your Score is ${count}</h1>
    <button id='return-home' class='button'>Return</button>`
    }

    button = document.getElementById('return-home')
    button.addEventListener('click', () => {
        load(user)
    })
    fetch(`http://localhost:3000/baskets/${basket.id}`,{
        method: 'PATCH',
        headers: {
            'Content-Type':'application/json',
            'Accept':'application/json'
        },
        body: JSON.stringify({score: count})
    })
}

const renderBaskets = () => {
    fetch('http://localhost:3000/baskets')
    .then(res => res.json())
    .then(basketsData => displayHighScores(basketsData))
}

const displayHighScores = (basketsData) => {
    let scoreTable = document.getElementById('right')
    let tenScores = []
    basketsData.forEach(basket => {
        tenScores.push(basket)
        tenScores.sort(function(a, b){return b.score-a.score})
    })
    for(let i = 0; i<5; i++){
        fetch(`http://localhost:3000/users/${tenScores[i].user_id}`)
        .then(res => res.json())
        .then(user =>  {
            let p = document.createElement('p')
            p.innerText = user.name + '' + "  " +tenScores[i].score
            scoreTable.append(p)
        })
    }
}
