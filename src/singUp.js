
var firebase = require("firebase");
require("firebase/functions");

const config = {
	apiKey: "AIzaSyCU2vvjBOh1hhR2QKxLJSVQmR2_g3BH0fQ",
	authDomain: "unemployed-9cb6f.firebaseapp.com",
	databaseURL: "https://unemployed-9cb6f.firebaseio.com",
	projectId: "unemployed-9cb6f",
	storageBucket: "unemployed-9cb6f.appspot.com",
	messagingSenderId: "594836743076",
	appId: "1:594836743076:web:9d84af0d971e4f1d"
};

firebase.initializeApp(config);

export default function onSignUp(email, password) {

	/*var addMessage = firebase.functions().httpsCallable('deleteMe');
	addMessage({ type: "lep"}).then(function (result) {
	});*/

	firebase.auth().createUserWithEmailAndPassword(email, password)
		.then(
			(res) => {
				//alert('Usuario Creado');
				console.log(res.user.uid);
			},
			(error) => {
				/*var errorCode = error.code;
				if (errorCode === 'auth/email-already-in-use') {
					alert('Ya existe un usuario con el mismo correo.');
				}
				if (errorCode === 'auth/invalid-email') {
					alert('Correo invalido.');
				}
				if (errorCode === 'auth/weak-password') {
					alert('Constraseña demasiado débil.');
				}*/
			})
}
