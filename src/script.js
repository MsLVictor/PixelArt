function generateColor() {

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