var config = {
    apiKey: "AIzaSyBObjH5OtJvSPuZ-ifiXqnPnEVUjlMG2xQ",
    authDomain: "mesa-interactiva.firebaseapp.com",
    databaseURL: "https://mesa-interactiva.firebaseio.com",
    projectId: "mesa-interactiva",
    storageBucket: "",
    messagingSenderId: "570561955135"
};
firebase.initializeApp(config);

//var newPostKey = firebase.database().ref().child('mesas/'+"0").push().key;


var numero_mesa = 0;

window.fbAsyncInit = function () {
    FB.init({
        appId: '509917229384323',
        autoLogAppEvents: true,
        xfbml: true,
        version: 'v2.11'
    });



    var uid
    FB.login(function (response) {
        if (response.status === 'connected') {
            uid = response.authResponse.userID;
            console.log(uid);


            FB.api(
                "/" + uid + "/music?pretty=0&limit=100",
                function (response) {
                    if (response && !response.error) {
                        /* handle the result */
                        for (var i = 0; i < response.data.length; i++) {
                            console.log(response.data[i].name);
                            writeUserData("0", response.data[i].name);
                        }



                        function writeUserData(id_mesa, artista) {
                            firebase.database().ref('mesas/').child(id_mesa).child("artistas").push({
                                artista: artista
                            });
                        }

                        alert("Ahora podemos conocer la música que te gusta :D, disfruta!");
                        
                    }
                }
            );
        } else if (response.status === 'not_authorized') {
            // the user is logged in to Facebook, 
            // but has not authenticated your app
            console.log("Not authorized")

        } else {
            // the user isn't logged in to Facebook.
            console.log("isn't logged")
        }
    }, {
        scope: 'public_profile,email,user_likes'
    });


};

(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
        return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


