//creating the canvas element so we can have moving objects on it
let canvas = document.getElementById('canvas')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

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

let numOfObjects = 30
let objects = []
// let numOfFruit = 30
// let fruits = []

//creating an array so that i can select a random fruit image when creating a new fruit
let imgArray = [bananaImg,blueberryImg,strawberryImg]
// creating the Fruit class so i can call on it later to create any number of fruits that i need
function Fruit(x,y) {
    this.x = x
    this.y = y

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

        this.y = this.y+1
            if(this.y > canvas.height){
                this.y = 0
                // objects.filter(fruit => fruit !== this)
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

    this.fall = function(){
        let dir = Math.floor(Math.random()*3)

        if(dir == 0){
            this.x = this.x
        } else if (dir == 1){
            this.x = this.x + 2
        }else{
            this.x = this.x - 2
        }

        this.y = this.y+1
            if(this.y > canvas.height){
                this.y = 0
                // objects.filter(bug => bug !== this)
            }
    }
    
    
    this.show = function(){
        context.drawImage(bugImg, this.x, this.y, 100, 100)
    }
}

function Basket(x,y) {
    this.x = x
    this.y = y

    this.show = function(){
        context.drawImage(basketImg,this.x,this.y,150,100)
    }
}

let basket = new Basket(700,800)


for (let i=0;i < numOfObjects; i++){
    let x = Math.floor(Math.random()*canvas.width)
    let y = Math.floor(Math.random()*canvas.height)
    let randNum = Math.floor(Math.random()*4)
    if(randNum == 1){
        objects[i] = new Bug(x,y)
    }else{
        objects[i] = new Fruit(x,y)
    }
}

// let background = document.createElement('img')

const draw = () => {
    context.fillStyle = 'black'
    // context.drawImage(bugImg,0,0)
    context.fillRect(0, 0, canvas.width, canvas.height)
    basket.show()


    for(let i=0;i < numOfObjects; i++){
        objects[i].show()
        objects[i].fall()
    }
}

const update = () => {
    draw()
    window.requestAnimationFrame(update)
}

document.addEventListener('DOMContentLoaded', () => {
    update()
    console.log(basket)
})