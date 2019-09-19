if(localStorage.getItem("usuario")=="admin" ){
	if(localStorage.getItem("password")=="1234" ){
		window.location="index.html";
}

document.querySelector('#enviar').addEventListener('click', function() { 

	user = document.querySelector("#username").value;
	pass = document.querySelector("#password").value;
	console.log(user);

	if("admin" == user) {
		if("1234" == pass) {
			console.log(true);
			localStorage.setItem("usuario",user);
			localStorage.setItem("password",pass);
			window.location="index.html";
		}
	}
	document.querySelector("#alerta").innerHTML = "Usuario no encontrado";

});