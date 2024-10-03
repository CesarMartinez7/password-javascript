
const ejeY = document.getElementById("x")
const ejex = document.getElementById("y")
const contraseñaInput = document.getElementById("keyPass")
const keyDown = document.getElementById("key")
const keyClean = document.getElementById("keyClean")
const totalPasword = document.getElementById("contraClean")
const email = document.getElementById("email")

const arrayInput = [contraseñaInput,email]



email.placeholder = "Correo Electronico"

document.addEventListener("mousemove",function(e){
    ejeY.textContent = e.clientY
    ejex.textContent = e.clientX
})



contraseñaInput.placeholder = "Contraseña"

let password = ""

function obtenerPassword(){
    contraseñaInput.addEventListener("keydown",function(e){
        console.log(password)
        
        if(e.key === "Backspace"){
            password = password.slice(0,-1)
        }else{
            if (e.key.length === 1){
                password += e.key
            }
        }
        
        console.log(password)
        totalPasword.textContent = `Tu contraseña es:  ${password}`
    
    })
    
}

obtenerPassword()
