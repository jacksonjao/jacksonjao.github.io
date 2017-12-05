var config = {
    apiKey: "AIzaSyBObjH5OtJvSPuZ-ifiXqnPnEVUjlMG2xQ",
    authDomain: "mesa-interactiva.firebaseapp.com",
    databaseURL: "https://mesa-interactiva.firebaseio.com",
    projectId: "mesa-interactiva",
    storageBucket: "",
    messagingSenderId: "570561955135"
};
firebase.initializeApp(config);

var estadoConexion;

//var newPostKey = firebase.database().ref().child('mesas/'+"0").push().key;



  var contadorPosts=0;
    var leadsRef = firebase.database().ref('mesas/0/artistas');
leadsRef.on('value', function(snapshot) {
     console.log(snapshot.numChildren())
    contadorPosts=snapshot.numChildren()
    snapshot.forEach(function(childSnapshot) {
      var childData = childSnapshot.val();
        
    });
})






  // This is called with the results from from FB.getLoginStatus().
  function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
      estadoConexion=response.status;
    if (response.status === 'connected') {
      // Logged into your app and Facebook.
      testAPI();
    } else {
      // The person is not logged into your app or we are unable to tell.
      document.getElementById('status').innerHTML = 'Presiona el botón de facebook e inicia sesión ' +
        'para conocer tus gustos musicales.';
    }
  }

  // This function is called when someone finishes with the Login
  // Button.  See the onlogin handler attached to it in the sample
  // code below.
  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
        
        FB.login(function (response) {
        if (response.status === 'connected') {
            uid = response.authResponse.userID;
            console.log(uid);
            console.log(1);

            FB.api(
                "/" + uid + "/music?pretty=0&limit=100",
                function (response) {
                    if (response && !response.error) {
                        /* handle the result */
                        for (var i = 0; i < response.data.length; i++) {
                            console.log(response.data[i].name);
                            
                            writeUserData("0", response.data[i].name,contadorPosts);
                            
                        }
                        
                        
                            firebase.database().ref('usuarios/').child(uid);
                        
                       

                          function writeUserData(id_usuario) {
                            firebase.database().ref('usuarios/'+id_usuario).child(id_usuario);
                        }

                        function writeUserData(id_mesa, artista,index) {
                            firebase.database().ref('mesas/').child(id_mesa).child("artistas").child(index).set({
                                artista: artista
                            });
                        }
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
    })
        
        
    });
      
      
      
      
      
      
      
      
  }

  window.fbAsyncInit = function() {
  FB.init({
    appId      : '509917229384323',
    cookie     : true,  // enable cookies to allow the server to access 
                        // the session
    xfbml      : true,  // parse social plugins on this page
    version    : 'v2.8' // use graph api version 2.8
  });

  // Now that we've initialized the JavaScript SDK, we call 
  // FB.getLoginStatus().  This function gets the state of the
  // person visiting this page and can return one of three states to
  // the callback you provide.  They can be:
  //
  // 1. Logged into your app ('connected')
  // 2. Logged into Facebook, but not your app ('not_authorized')
  // 3. Not logged into Facebook and can't tell if they are logged into
  //    your app or not.
  //
  // These three cases are handled in the callback function.

  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });

  };

  // Load the SDK asynchronously
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

  // Here we run a very simple test of the Graph API after login is
  // successful.  See statusChangeCallback() for when this call is made.
  function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {
      console.log('Gracias por : ' + response.name);
      document.getElementById('status').innerHTML =
        'Gracias por iniciar sesión ' + response.name +', ahora conoceremos la música que te gusta :D';
    });
  }



