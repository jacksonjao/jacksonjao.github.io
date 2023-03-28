import { openWhatsapp, inputValidator, removeNoNumbers, paste, main } from '/assets/js/logic.js';



const inputElementRef =  document.getElementById('jao-ws__input')
const sendButtonElementRef =  document.getElementById('jao-ws__send-button')
const sendButtonWrapperElementRef =  document.getElementById('jao-ws__send-button-wrapper')
const errorMessageElementRef =  document.getElementById('jao-ws__error-message')
const pasteButtonElementRef =  document.getElementById('jao-ws__paste-button')

sendButtonWrapperElementRef.addEventListener('touchstart', () => {
    inputValidator(inputElementRef, sendButtonElementRef, errorMessageElementRef)
}, { passive: true });


sendButtonWrapperElementRef.addEventListener('mouseenter', () => {
    inputValidator(inputElementRef, sendButtonElementRef, errorMessageElementRef)
}, { passive: true });


sendButtonElementRef.addEventListener('click', () => {
    openWhatsapp(inputElementRef)
}, { passive: true });

inputElementRef.addEventListener('input', () => {
    inputValidator(inputElementRef, sendButtonElementRef, errorMessageElementRef)
})

pasteButtonElementRef.addEventListener('click', () => {
    paste(inputElementRef, sendButtonElementRef, errorMessageElementRef)
})

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
        navigator.serviceWorker
            .register("/serviceWorker.js")
            .then(res => console.log("service worker registered"))
            .catch(err => console.log("service worker not registered", err))
    })
}
