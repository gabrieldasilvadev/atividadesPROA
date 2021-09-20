const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")

const getStyle = (element, style) => 
    window
        .getComputedStyle(element)
        .getPropertyValue(style)


const initialColors = {
    bg: getStyle(html, "--bg"),
    bgPanelone: getStyle(html, "--bgpanel-one"),
    bgPaneltwo: getStyle(html, "--bgpanel-two"),
    bgPanelthree: getStyle(html, "--bgpanel-three"),
    bgPanelfour: getStyle(html, "--bgpanel-four"),
    colorHeadings: getStyle(html, "--color-headings"),
    colorText: getStyle(html, "--color-text"),
}

const darkMode = {
    bg: "#000000",
    bgPanelone: "#434343",
    bgPaneltwo: "#4B0052",
    bgPanelthree: "#470028",
    bgPanelfour: "#002750",
    colorHeadings: "#7B0034",
    colorText: "#FFFFFF"
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