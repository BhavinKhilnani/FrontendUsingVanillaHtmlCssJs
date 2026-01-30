const cursor = document.querySelector("#cursor")
document.addEventListener("mousemove",(e)=>{
    cursor.style.top = (e.clientY-100) + "px"
    cursor.style.left = (e.clientX) + "px"
    
})

const navitems = document.querySelectorAll("li")
navitems.forEach(()=>{
    e.addEventListener("mousemove",(e)=>{
        console.log(e.style.fontSize)
    })
},e)