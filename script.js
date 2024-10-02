
const ejeY = document.getElementById("x")
const ejex = document.getElementById("y")
const contraseñaInput = document.getElementById("keyPass")
const keyDown = document.getElementById("key")
const keyClean = document.getElementById("keyClean")



document.addEventListener("mousemove",function(e){
    ejeY.textContent = e.clientY
    ejex.textContent = e.clientX
})




let password = ""

contraseñaInput.addEventListener("keydown",function(e){
    console.log(password)
    
    if(e.key === "Backspace"){
        password = password.slice(0,-1)
    }else{
        if (e.key.length ===1){
            password += e.key
        }
    }
    
    console.log(password)


})
