let botonCarritos = document.querySelectorAll("#añadirCarrito")
console.log(botonCarritos)

let informacionDiv = document.querySelectorAll(".info-carta")

let modalPop = document.querySelector(".modalPop")

for(let i= 0; i<botonCarritos.length;i++){
    botonCarritos[i].addEventListener("click", ()=>{
        let botonAtributo = botonCarritos[i].getAttribute("id-carrito")
        console.log()

        for(let j=0; j<informacionDiv.length;j++){
            let info=informacionDiv[j].getAttribute("id")

            if(info==botonAtributo){

                let innerHtml=informacionDiv[j].innerHTML
                console.log(innerHtml)

                let article=document.createElement("article")
                article.innerHTML=innerHtml
                article.classList.add("cartaPopup")

                let imagen=article.querySelector("img")
                imagen.style.height="70px"
                imagen.style.width="80px"
                imagen.classList.add("imgPopUp")

                let hCinco=article.querySelector("h5")
                hCinco.classList.add("h5")

                let section = document.createElement(("section"))
                modalPop.appendChild(section)
                section.classList.add("cartasDiseño")
                section.appendChild(article)
            }
        }
    })
} 
