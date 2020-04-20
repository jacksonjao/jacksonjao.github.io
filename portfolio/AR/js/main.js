new AnimationPng('assets/woman/bird/', 'birds','birds-animation' , 15);
new AnimationPng('assets/woman/woman/', 'girl','woman-animation' , 14);

function range(self, target, attribute, key) {
    const element = document.getElementById(target);


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


window.ondevicemotion = function(event) {
    document.getElementById('motion').innerText=event.toString()
    console.log(event);
}

function handleMotionEvent(event) {


    var x = event.accelerationIncludingGravity.x;
    var y = event.accelerationIncludingGravity.y;
    var z = event.accelerationIncludingGravity.z;
    document.getElementById('device_motion_X').innerText="X: "+ x;
    document.getElementById('device_motion_Y').innerText="Y: "+ y;
    document.getElementById('device_motion_Z').innerText="Z: "+ z;


    // Do something awesome.
}


window.addEventListener("devicemotion", handleMotionEvent, true);


setInterval(()=> {
    console.log(document.getElementById('camera').getAttribute('camera'))
},1000)
