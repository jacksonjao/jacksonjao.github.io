
export function openWhatsapp(input) {
    const number = removeNoNumbers(input.value);
    const url = `https://wa.me/${number}`;
    window.open(url)
}

export function inputValidator(inputElementRef, sendButtonElementRef,  errorMessageElementRef){
    const number = removeNoNumbers(inputElementRef.value);
    !!number?  sendButtonElementRef.removeAttribute('disabled'): sendButtonElementRef.setAttribute('disabled', '');
    !!number? errorMessageElementRef.classList.remove('jao-ws__error-message--show') : errorMessageElementRef.classList.add('jao-ws__error-message--show')
}


export function removeNoNumbers(text) {
    return text.replace(/\D/g, '');
}

export function paste(inputElementRef, sendButtonElementRef, errorMessageElementRef){
    navigator.clipboard.readText().then((clipText) => {
        inputElementRef.value = clipText
        inputValidator(inputElementRef, sendButtonElementRef, errorMessageElementRef)
    });
}

export function main( ) {
    heightScreenFixer()
}


export function heightScreenFixer() {
    const appHeight = () => {
        const doc = document.documentElement
        doc.style.setProperty('—app-height', `${window.innerHeight}px`)
    }
    window.addEventListener('resize', appHeight)
    appHeight()
}

