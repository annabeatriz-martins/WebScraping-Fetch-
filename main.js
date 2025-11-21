function teste(){
    fetch("https://pt.minecraft.wiki/w/Criatura").then(response =>
        {
            if(!response.ok){
                throw new Error("Chamada HTTP Falhou")
            }
            return response.text()
        }
    ).then(dados => {
        let parser = new DOMParser()
        let doc = parser.parseFromString(dados, "text/html")
        raspar(doc)
    }).catch(erro => alert(erro))
}

function raspar(doc){
    let a = doc.querySelectorAll(".mcw-mainpage-icon>a")
    let ul = document.createElement("ul")
    a.forEach(element => {
        let li = document.createElement("li")
        li.innerHTML = element.innerHTML
        ul.appendChild(li)
    });
    document.body.appendChild(ul)
}

function popularEvento(){
    document.querySelector("#btn").addEventListener("click", evt => {
        teste()
    })
}

window.onload = popularEvento