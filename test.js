const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
const text = document.querySelector('.fancy')
const strText = text.textContent;
const splitText = strText.split("")
text.textContent = "";


canvas.width = 1800
canvas.height = 700


for (let i=0; i < splitText.length; i++){
    text.innerHTML += "<span>" + splitText[i] + "</span>"
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
    const span = text.querySelectorAll('span')[char];
    span.classList.add("fade");
    char++;

    if (char === splitText.length){
        complete();
        return;
    }
}

function complete() {
    clearInterval(timer);
    timer = null;
}

class Player1 {
    constructor(x, y, radius, color) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
    }

    draw() {
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true)
        c.fillStyle = this.color
        c.fill()
    }
}
class Player2 {
    constructor(x, y, radius, color) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
    }

    draw() {
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        c.fillStyle = this.color
        c.fill()
    }
}
class Player3 {
    constructor(x, y, radius, color) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
    }

    draw() {
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        c.fillStyle = this.color
        c.fill()
    }
}
class Player4 {
    constructor(x, y, radius, color) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
    }

    draw() {
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 1, false)
        c.fillStyle = this.color
        c.fill()
    }
}

class Projectile {
    constructor(x, y, radius, color, velocity) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.velocity = velocity
    }

    draw() {
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        c.fillStyle = this.color
        c.fill()
    }
}

addEventListener('click',(event) => {
    const player1 = new Player1 (canvas.width / 2, canvas.height / 2, 300, 'blue')
    const player2 = new Player2 (canvas.width - 750, 200, 100, 'yellow')
    const player3 = new Player3 (canvas.width - 1025, 200, 100, 'yellow')
    const player4 = new Player4 (canvas.width / 2, 400, 150, 'green')
    player1.draw()
    player2.draw()
    player3.draw()
    player4.draw()
})

//const projectile = new Projectile (event.clientX, event.clientY, 5, 'red', null)
//projectile.draw
