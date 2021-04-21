let user = undefined
document.addEventListener('DOMContentLoaded', () => {
    load(user)  
})



const load = (user) => {let body = document.getElementById('body')
// let head = document.getElementById('head')
    body.innerHTML =` 
        <div class = 'row'>
            <div class = 'column'>
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
                                class='submit'
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
                                class='submit'
                                />
                            </form>
                        </div>
                    </div>
                
                <div class = 'column'>
                    <h3>Fruit Catch</h3>
                    <button id='game-button'>Play Game</button>
                </div>
                
                <div class = 'column'>
                    <h3>High Scores</h3>
                </div>
            </div>
        </div>
    `
    loadForm(user)
}

