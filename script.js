
const ejeY = document.getElementById("x")
const ejex = document.getElementById("y")
const contraseñaInput = document.getElementById("keyPass")
const keyDown = document.getElementById("key")
const keyClean = document.getElementById("keyClean")

let password = ""



document.addEventListener("mousemove",function(e){
    ejeY.textContent = e.clientY
    ejex.textContent = e.clientX
})



contraseñaInput.focus()


contraseñaInput.addEventListener("keydown",function(e){
    e.preventDefault()
    console.log(e.key)

    if (e.key === "Backspace"){
        console.log("entrando")
        let passwordClean = password.slice(0,-1)
        let passwordClean2 = String(passwordClean2)
        console.log(passwordClean2)
    }
    password = passwordClean
    


    keyDown.textContent = password
    keyClean.textContent = passwordClean

})      
