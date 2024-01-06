const elementosDuvida = document.querySelectorAll(".duvida")

elementosDuvida.forEach(function(duvida) {
    duvida.addEventListener("click", function () {
        duvida.classList.toggle('ativa')
    })
})

var whatsappHelp = document.getElementById('whatsapp')

whatsappHelp.addEventListener('mouseover', crescerBorda)

whatsappHelp.addEventListener('mouseout', removeBorda)


function crescerBorda() {
    var icone = document.getElementById('whatsapp')
    icone.style.outline = `10px solid #ff9a6c`;
    icone.style.transition= '0.5s ease-in-out'
}

function removeBorda() {
    var icone = document.getElementById('whatsapp')

    icone.style.outline = '0px solid #ff9a6c';

    

}

