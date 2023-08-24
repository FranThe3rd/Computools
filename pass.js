let string = "abcdefghijklmnopqrstuvwxyz123467890&^%$#!_ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let length = 10
pass1 = document.getElementById("p1")
pass2 = document.getElementById("p2")


function generateOne() {
    let pass = ''

    for (let i = 0; i < 13; i++) {
        randomIndex = Math.floor(Math.random() * string.length);
        pass += string[randomIndex]
    }

    pass1.innerText = pass
    generateTwo();
}

function generateTwo() {
    let pass = ''
    for (let i = 0; i < 13; i++) {
        randomIndex = Math.floor(Math.random() * string.length);
        pass += string[randomIndex]
    }
    pass2.innerText = pass

}

