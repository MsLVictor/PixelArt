function generateColor() {
    //cria cor aleatória
    const letters = '0123456789ABCDEF'

    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }

    return color;

}

document.getElementById('btn-action').addEventListener('click', () => {

    for(let i = 0; i < 5; i++) {
        let color = generateColor()
        let div_color = document.getElementById(`color-${i}`)
        div_color.style.backgroundColor = color
        let txt_color = document.getElementById(`txt-color-${i}`)
        txt_color.textContent = `${color}`
    }

})

function getRandomCoolColor() {
    // Define uma cor fria aleatória com tons de azul e verde
    var red = 0;
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    
    // Converte os valores das componentes RGB em um valor hexadecimal
    var hexRed = red.toString(16).padStart(2, '0');
    var hexGreen = green.toString(16).padStart(2, '0');
    var hexBlue = blue.toString(16).padStart(2, '0');
    
    // Retorna a cor em formato hexadecimal
    return "#" + hexRed + hexGreen + hexBlue;
  }

  document.getElementById('btn-cfrio').addEventListener('click', () => {
    for(let i = 0; i < 5; i++) {
        let color = getRandomCoolColor()
        let div_color = document.getElementById(`color-${i}`)
        div_color.style.backgroundColor = getRandomCoolColor()
    }
  })