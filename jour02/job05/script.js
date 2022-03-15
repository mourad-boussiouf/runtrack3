document.addEventListener('DOMContentLoaded', (event) => {

    const [red, green, blue] = [255, 255, 255]
    const footer = document.querySelector('footer')

    window.addEventListener('scroll', () => {
        let y = 1 + (window.scrollY || window.pageYOffset) / 255
        y = y < 1 ? 1 : y
        const [r, g, b] = [red/y, green/y, blue/y].map(Math.round)
        footer.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    })

}