new AnimationPng('assets/woman/bird/', 'birds','birds-animation' , 15);
new AnimationPng('assets/woman/woman/', 'girl','woman-animation' , 14);

function range(self, target, attribute, key) {
    const element = document.getElementById(target);
    if(key) {
        element.getAttribute(attribute)[key] = self.value
        console.log(attribute + ' ' + key + ': '+element.getAttribute(attribute)[key])

    } else {
        element.setAttribute(attribute, self.value);
        console.log(attribute + ': '+element.getAttribute(attribute))
    }
}
