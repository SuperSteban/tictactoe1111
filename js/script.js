let stado = false
const turno = (boton) => {
    boton.disabled = true
    if (!stado) {
        boton.value = "X"

    } else {
        boton.value = "O"
    }
    stado = !stado
    check()

}

const check = () => {
    const botones = document.querySelectorAll("input[type='button']")
    let stilo = document.createElement("style")

    if (botones[0].value == botones[1].value && botones[1].value == botones[2].value && botones[0].value != "") {
        stilo.textContent = `tr:nth-child(1)::after {
        content: "";
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 0;
        right: 0;
        height: 15px;
        background-color: blueviolet;
        z-index: 1;
        pointer-events: none;

        }`

        alert(`gana jugador ${botones[0].value}`)
    }
    if (botones[3].value == botones[4].value && botones[4].value == botones[5].value && botones[3].value != "") {
        stilo.textContent = `tr:nth-child(2)::after {
        content: "";
        position: absolute;
        transform: translateY(-50%);
        top: 50%;
        left: 0;
        right: 0;
        height: 15px;
        background-color: blueviolet;
        z-index: 1;
        pointer-events: none;

        }`
        alert(`gana jugador ${botones[3].value}`)
    }
    if (botones[6].value == botones[7].value && botones[7].value == botones[8].value && botones[6].value != "") {
        stilo.textContent = `tr:nth-child(3)::after {
        content: "";
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 0;
        right: 0;
        height: 15px;
        background-color: blueviolet;
        z-index: 1;
        pointer-events: none;

        }`
        alert(`gana jugador ${botones[6].value}`)

    }

    // VERTICALES
    if (botones[0].value == botones[3].value && botones[3].value == botones[6].value && botones[0].value != "") {
        stilo.textContent = `td:nth-child(1)::after {
    content: "";
    position: absolute;
    top: -1px;
    bottom: -1px;
    left: 50%;
    width: 15px;
    transform: translateX(-50%);
    background-color: blueviolet;
    z-index: 1;
    pointer-events: none;


        }`
        alert(`gana jugador ${botones[0].value}`)

    }
    if (botones[1].value == botones[4].value && botones[4].value == botones[7].value && botones[1].value != "") {
        stilo.textContent = `td:nth-child(2)::after {
    content: "";
    position: absolute;
    top: -1px;
    bottom: -1px;
    left: 50%;
    transform: translateX(-50%);
    width: 15px;
    background-color: blueviolet;
    z-index: 1;
    pointer-events: none;


        }`
        alert(`gana jugador ${botones[1].value}`)

    }
    if (botones[2].value == botones[5].value && botones[5].value == botones[8].value && botones[2].value != "") {
        stilo.textContent = `td:nth-child(2)::after {
    content: "";
    position: absolute;
    top: -1px;
    bottom: -1px;
    left: 50%;
    transform: translateX(-50%);
    width: 15px;
    background-color: blueviolet;
    z-index: 1;
    pointer-events: none;


        }`
        alert(`gana jugador ${botones[2].value}`)

    }

    //Diags
    if (botones[0].value == botones[4].value && botones[4].value == botones[8].value && botones[0].value != "") {
        stilo.textContent = `table::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100%*1.414);
    height: calc(100%*1.414);
    border-top: 15px solid blueviolet;
    transform: rotate(45deg);
    transform-origin: top left;
    z-index: 1;
    pointer-events: none;


}`
        alert(`gana jugador ${botones[0].value}`)

    }
    if (botones[2].value == botones[4].value && botones[4].value == botones[6].value && botones[2].value != "") {
        stilo.textContent = `table::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: calc(100%*1.414);
    height: calc(100%*1.414);
    border-top: 15px solid blueviolet;
    transform: rotate(-45deg);
    transform-origin: top right;
    z-index: 1;
    pointer-events: none;


}`
        alert(`gana jugador ${botones[2].value}`)

    }
    document.head.appendChild(stilo);
}