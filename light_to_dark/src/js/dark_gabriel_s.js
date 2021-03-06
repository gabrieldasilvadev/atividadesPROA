const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")

const getStyle = (element, style) => {
    window
        .getComputedStyle(element)
        .getPropertyValue(style)

}

const initialColors = {
    bg: getStyle(html, "--bg"),
    colorText: getStyle(html, "--color-text"),
    bgQuote: getStyle(html, "--bg-quote"),
    textQuote: getStyle(html, "--text-quote"),
}

const darkMode = {
    bg: "#1e1e1e",
    colorText: "#FFFFFF",
    bgQuote: "#1e1e1e",
    textQuote: "#FFFFFF",
}

const transformKey = key => 
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()


const changeColors = (colors) => {
    Object.keys(colors).map(key => 
        html.style.setProperty(transformKey(key), colors[key]) 
    )
}


checkbox.addEventListener("change", ({target}) => {
    target.checked ? changeColors(darkMode) : changeColors(initialColors)
})

