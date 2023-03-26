const input =  document.getElementById('jao-ws__input')



function openWhatsapp() {
    const number = removeNoNumbers(input.value);
    console.log(number)
    const url = `https://wa.me/${number}`;
    window.open(url)
}


function removeNoNumbers(text) {
    return text.replace(/\D/g, '');
}
