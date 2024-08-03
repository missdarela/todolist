const item = document.getElementById("list")
const button = document.getElementById("list-butt")
const todoCont = document.getElementById("container-todo")


button.addEventListener("click", () => {
    const h3 = document.createElement("h3") 
    h3.style.fontSize = "30px"
    h3.innerHTML = item.value;
    todoCont.appendChild(h3)
    item.value = ""

    h3.addEventListener("click", () => {
        // h3.classList.add("fa-shake")
        h3.style.textDecoration ="line-through"
    })
    h3.addEventListener("dblclick", () => {
       todoCont.removeChild(h3) 
    })

})
