const temas = {
    claro: {
        corBackground: "#FFF",
        corPrimeiroPlano: "#FFF",
        corTextoPrimario: "#262626",
        corTextoSecundario: "#ACACAC"
    },
    escuro: {
        corBackground: "#000",
        corPrimeiroPlano: "#363636",
        corTextoPrimario: "#EEE",
        corTextoSecundario: "#A7A6A6"
    }
};

function setaTema(novoTema){
    const corTemas = temas[novoTema]
    Object.keys(corTemas).map(function(key) {
        html.style.setProperty(`--${key}`, corTemas[key])
    })
}

const mudaModo = document.querySelector("#switch")
console.log("OPA")

