
//creating the canvas element so we can have moving objects on it
// const game = document.getElementById('game')
// const playBtn = document.createElement('button')
// playBtn.innerText='Start Game'
const playGame = (user) => {
console.log(user)

let canvas = document.getElementById('canvas')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight - 30
    canvas.style.background = 'strawberry.png'
    // game.append(canvas, playBtn)

//setting the context to be 2d
let context = canvas.getContext('2d')
let basketImg = document.createElement('img')
basketImg.src = '5a0214fe18e87004f1ca4383.png'

//creating the images for the fruits
let bananaImg = document.createElement('img')
bananaImg.src = 'banana.png'
let blueberryImg = document.createElement('img')
blueberryImg.src = 'blueberry.png'
let strawberryImg = document.createElement('img')
strawberryImg.src = 'strawberry.png'
let stupidRoachImg = document.createElement('img')
stupidRoachImg.src = 'Squashed-Roach.png'

let numOfObjects = 10
let objects = []
// let numOfFruit = 30
// let fruits = []
//creating an array so that i can select a random fruit image when creating a new fruit
let imgArray = [bananaImg,blueberryImg,strawberryImg]
// creating the Fruit class so i can call on it later to create any number of fruits that i need
function Fruit(x,y) {
    this.x = x
    this.y = y
    this.w = 50
    this.h = 50
    this.name = 'fruit'
    this.collisionOccured = false

    this.fall = function(){
        let dir = Math.floor(Math.random()*3)

        if(dir == 0){
            this.x = this.x
        }
        if(dir == 1){
            this.x = this.x + 2
        }
        if(dir == 2){ 
            this.x = this.x - 2 
        }

        let randFall = Math.floor(Math.random()*10)
        this.y = this.y+randFall
            if(this.y > canvas.height - 100){
                this.y = 0
                this.x = Math.floor(Math.random()*canvas.width)
                this.collisionOccured = false
                // objects.filter(fruit => fruit !== this)
                // numOfObjects = numOfObjects + 1
            }
    }

    //should get me a random number between 0 - 2
    let randomNumber = Math.floor(Math.random()*imgArray.length)
    // need to change img to be a random image between the 3 fruits
    this.show = function(){
        context.drawImage(imgArray[randomNumber], this.x, this.y, 50, 50)
    }
}
//creating the image for the bug
let bugImg = document.createElement('img')
bugImg.src = 'bug1.png'

function Bug(x,y) {
    this.x = x
    this.y = y
    this.w = 100
    this.h = 100
    this.name = 'bug'
    this.collisionOccured = false

    this.fall = function(){
        let dir = Math.floor(Math.random()*3)

        if(dir == 0){
            this.x = this.x
        } else if (dir == 1){
            this.x = this.x + 2
        }else{
            this.x = this.x - 2
        }
        let randFall = Math.floor(Math.random()*15)
        this.y = this.y+randFall
            if(this.y > canvas.height-100){
                this.y = 0
                this.x = Math.floor(Math.random()*canvas.width)
                this.collisionOccured = false
                // objects.filter(bug => bug !== this)
            }
    }
    this.show = function(){
        context.drawImage(bugImg, this.x, this.y, 100, 100)
    }
}

function Basket() {
    this.x = canvas.width / 2
    this.y = canvas.height - 80
    this.w = 150
    this.h = 100

    this.show = function(){
        context.drawImage(basketImg,this.x,this.y,150,100)
    }
   this.left = function(){
       this.x = this.x-35
   }
   this.right = function(){
       this.x = this.x+35
    }
    // fetch('http://localhost:3000/baskets')
}
let basket = new Basket()


for (let i=0;i < numOfObjects; i++){
    let x = Math.floor(Math.random()*canvas.width)
    let y = Math.floor(Math.random()*canvas.height/2)
    let randNum = Math.floor(Math.random()*4)
    if(randNum == 1){
        objects[i] = new Bug(x,y)
    }else{
        objects[i] = new Fruit(x,y)
    }
}

let newBasketObject = undefined

const newBasket = () => {
    basketObject = {
        user_id: user.id
    }

    fetch('http://localhost:3000/baskets', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json',
            'Accept':'application/json'
        },
        body: JSON.stringify(basketObject)
    })
    .then(res => res.json())
    .then(data => newBasketObject = data)
}

const draw = () => {
    context.fillStyle = 'black'
    // context.drawImage(bugImg,0,0)
    context.fillRect(0, 0, canvas.width, canvas.height)
    for(let i=0;i < numOfObjects; i++){
        objects[i].show()
        objects[i].fall()
    }
    basket.show()
}
const update = () => {
    draw()
    objectTouch()
    
    window.requestAnimationFrame(update)
}

newBasket()
update()
countdown()
window.addEventListener("keydown", function(e) {
    // console.log(basket.x);
    // console.log(basket)
    if (e.key == "ArrowLeft") {
        if (basket.x > 0){
            basket.left()
        }
    }
    else if (e.key == "ArrowRight"){
        if (basket.x < canvas.width){
            basket.right()
        }
    }
})


function countdown() {
    var seconds = 15;
    function tick() {
        var counter = document.getElementById("counter");
        seconds--;
        counter.innerHTML = `${seconds}s`;
        if( seconds > 0 ) {
            setTimeout(tick, 1000);
            // draw();
            //    update();
        } else {
            alert("Game over");
            // clearInterval(runGame);
            // send to another page where they see their result
            load()
        }
    }
    tick();
}


function objectTouch() {
    objects.forEach(obj => {
    // console.log(obj)
    let objRight = obj.x + obj.w
    let objBottom = obj.y + obj.h
    let basketRight = basket.x + basket.w
    let basketBottom = basket.y + basket.h

    if(objRight > basket.x && basketRight > obj.x && objBottom > basket.y && basketBottom > obj.y){ 
        
    let newIngredientName = obj.name
    let newIngredientBasketId = newBasketObject.id
  
    let newIngredient = {
        name: newIngredientName,
        basket_id: newIngredientBasketId
    }
    confObj = {
        method: 'POST',
        headers: {
          "Content-Type":"application/json",
          "Accept":"application/json"
          },
          body: JSON.stringify(newIngredient)}
    
      fetch('http://localhost:3000/ingredients', confObj)
        //   .then(res => res.json())
        }
    
    // else return false;
    // console.log(basket.x)
    })
}






}
