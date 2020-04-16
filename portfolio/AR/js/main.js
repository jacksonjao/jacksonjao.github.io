new AnimationPng('assets/woman/bird/', 'birds','birds-animation' , 15);
new AnimationPng('assets/woman/woman/', 'girl','woman-animation' , 14);

function range(self, targe, axis) {
    const element = document.getElementById(targe);
    element.getAttribute('position')[axis] =self.value
}
