const colorPicker = document.getElementById('color-picker')
const schemeOptionsBox = document.getElementsByTagName('select')
const submitBtn = document.getElementById('submit-btn')
let hexCode = 'f55a5a';

submitBtn.addEventListener('click', (event) => {
    event.preventDefault()
    console.log(hexCode, getSchemeOption())
    fetch(`https://www.thecolorapi.com/scheme?hex=${hexCode}&mode=${getSchemeOption()}&count=6`)
    .then(response => response.json())
    .then(data => {
    const schemeArray = data.colors.slice(1)

        document.querySelector('.color1').style.background = schemeArray[0].hex.value
        document.querySelector('.color2').style.background = schemeArray[1].hex.value
        document.querySelector('.color3').style.background = schemeArray[2].hex.value
        document.querySelector('.color4').style.background = schemeArray[3].hex.value
        document.querySelector('.color5').style.background = schemeArray[4].hex.value
        
        document.getElementById('color1').innerText = schemeArray[0].hex.value
        document.getElementById('color2').innerText = schemeArray[1].hex.value
        document.getElementById('color3').innerText = schemeArray[2].hex.value
        document.getElementById('color4').innerText = schemeArray[3].hex.value
        document.getElementById('color5').innerText = schemeArray[4].hex.value

    })
})

function getSchemeOption() {
    for (let schemeOption of schemeOptionsBox) {
        return schemeOption.value
    }
}

colorPicker.addEventListener('input', () => {
   hexCode = colorPicker.value
   hexCode = hexCode.toString().slice(1)
   return hexCode
})  