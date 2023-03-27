const inputElementRef =  document.getElementById('jao-ws__input')
const sendButtonElementRef =  document.getElementById('jao-ws__send-button')
const errorMessageElementRef =  document.getElementById('jao-ws__error-message')




function openWhatsapp(input) {
    const number = removeNoNumbers(input.value);
    const url = `https://wa.me/${number}`;
    window.open(url)
}

function inputValidator($event, sendButton, errorMessageElementRef){
    console.log('hola')
    const number = removeNoNumbers($event.value);
    console.log(!!number)
    !!number?  sendButton.removeAttribute('disabled'): sendButton.setAttribute('disabled', '');
    !!number? errorMessageElementRef.classList.remove('jao-ws__error-message--show') : errorMessageElementRef.classList.add('jao-ws__error-message--show')
}


function removeNoNumbers(text) {
    return text.replace(/\D/g, '');
}

function paste(inputElementRef){
    navigator.clipboard.readText().then((clipText) => {
        inputElementRef.value = clipText
    });
}

const appHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty('—app-height', `${window.innerHeight}px`)
}
window.addEventListener('resize', appHeight)
appHeight()
