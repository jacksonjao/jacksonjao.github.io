new AnimationPng('assets/sprites/art1/bird/', 'birds','birds-animation' , 150);
new AnimationPng('assets/sprites/art1/woman/', 'girl','woman-animation' , 14);

/*
let elementSelected ="birds";
function initSliders() {
const inputs = document.getElementsByTagName("input");
const labels = document.getElementsByTagName('label');
    for (let i =0; i< inputs.length; i++) {
        const input = inputs[i];

      //  const targetElement = document.getElementById(tP.id);
        const outerHtml =input.outerHTML.split('(')[1].split([')'])[0].split(',');
        try {
            input.id = outerHtml[1].split("'")[1]+"_"+outerHtml[2].split("'")[1]+"_"+outerHtml[3].split("'")[1];
        } catch (e) {
            input.id = outerHtml[1].split("'")[1]+"_"+outerHtml[2].split("'")[1];

        }
        const tP = {
            id: input.id.split('_')[0],
            attribute: input.id.split('_')[1],
            property: input.id.split('_')[2]?input.id.split('_')[2]:''
        }
       // input.value = targetElement.getAttribute(tP.attribute)[tP.property];
        labels[i].htmlFor = input.id;
        labels[i].innerHTML = `${tP.attribute} ${tP.property}: ${input.value} `
    }

    const elements = document.getElementsByClassName('item');

    for (let i =0; i< elements.length; i++) {
        const node = document.createElement("li");
        const textnode = document.createTextNode(elements[i].id);
        node.onclick = function(){
            elementSelected = elements[i].id;
            document.getElementById('titleSelected').innerText = elementSelected;
        };
        node.appendChild(textnode);
        document.getElementById("elementList").appendChild(node);
    }

}

setTimeout(()=>{
    initSliders();

},3000);

function range(self, target, attribute, key) {
    let element;
    if (target === 'select'){
       element = document.getElementById(elementSelected);

    } else {
       element = document.getElementById(target);

    }

    if(key) {
        element.getAttribute(attribute)[key] = self.value;
        getLableFromInput(self).innerHTML = `${attribute} ${key}: ${self.value} `;
        console.log(attribute + ' ' + key + ': '+element.getAttribute(attribute)[key])

    } else {
        element.setAttribute(attribute, self.value);
        getLableFromInput(self).innerHTML = `${attribute}: ${self.value} `;
        console.log(attribute + ': '+element.getAttribute(attribute))
    }
}


function getLableFromInput(input) {

    var labels = document.getElementsByTagName('label');
    for (var i = 0; i < labels.length; i++) {
        if(labels[i].htmlFor === input.id){
            return labels[i];
        }
    }
}

let menu = false;
function openMenu() {
    menu = !menu;
    const element = document.getElementById('menu');
    if(menu){
        element.classList.add("open");
    } else {
        element.classList.remove("open");
    }
}

*/

