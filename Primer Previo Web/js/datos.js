document.querySelector('#boton').addEventListener('click', function() { 
		traerDatos()
	});


function traerDatos() {
	console.log("En la funcion traerDatos");
	

	const xhttp = new XMLHttpRequest();

	xhttp.open('GET', 'https://github.com/felipecor924/primer-parcial-web-2019-2/blob/master/Primer%20Previo%20Web/json/cartas.json');

	xhttp.send();
	xhttp.onreadystatechange = function(){
		console.log(this.readyState);
		console.log(this.status);
		if(this.readyState == 4 && this.status == 200) {
			console.log(this.responseText);
			let datos = JSON.parse(this.responseText);

			let res = document.querySelector('#res');
			res.innerHTML = '';

			for(let item of datos) {
				res.innerHTML += `<tr>
	      				<td>${item.numero}</td>
	      				<td>${item.carta}</td>
	      				<td>${item.cantidad}</td>
	    			</tr>`;
			}
		}
	}
}