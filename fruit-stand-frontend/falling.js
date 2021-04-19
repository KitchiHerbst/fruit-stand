let canvas = document.getElementById('canvas')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    
let context = canvas.getContext('2d')
let img = document.createElement('img')
img.src = '5a0214fe18e87004f1ca4383.png'

let numOfFruit = 30
let fruits = []
    
function Fruit(x,y) {
    this.x = x
    this.y = y

    this.fall = function(){
        this.y = this.y+1
        if(this.y > canvas.height){
            this.y = 0
        }
    }
    
    this.show = function(){
        context.drawImage(img, this.x, this.y, 20, 20)
    }
}


for (let i=0;i < numOfFruit; i++){
    let x = Math.floor(Math.random()*canvas.width)
    let y = Math.floor(Math.random()*canvas.height)
    fruits[i] = new Fruit(x,y)
}


const draw = () => {
    context.fillStyle = 'black'
    context.fillRect(0, 0, canvas.width, canvas.height)
    for(let i=0;i < numOfFruit; i++){
        fruits[i].show()
        fruits[i].fall()
    }
}

const update = () => {
    draw()
    window.requestAnimationFrame(update)
}
document.addEventListener('DOMContentLoaded', () => {
    update()

})