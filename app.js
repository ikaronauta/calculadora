
let operacionActual = '';
let resultadoParcial = 0;
let numeros = [];


document.querySelectorAll('.numero').forEach(function (element) {
	element.addEventListener('click', function () {

		if (operacionActual === 'igual') {

			document.getElementById('pantalla').innerText = '';
			operacionActual = '';
		}

		document.getElementById('pantalla').innerText += this.innerText;
	});
});

document.getElementById('borrar').addEventListener('click', function () {

	operacionActual = '';
	numeros = [];

	document.getElementById('pantalla').innerText = '';
});

document.getElementById('suma').addEventListener('click', function () {

	if(document.getElementById('pantalla').innerText == '') return;

	if (operacionActual == 'igual') {
		operacionActual = 'suma';
		document.getElementById('pantalla').innerText = '';
		return;
	}

	let numeroActual = parseInt(document.getElementById('pantalla').innerText);
	numeros.push(numeroActual);

	if (operacionActual == 'resta') {
		if (numeros.length > 1) {

			resultadoParcial = numeros[0] - numeros[1];
			numeros = [];
			numeros.push(resultadoParcial);

			document.getElementById('pantalla').innerText = resultadoParcial.toExponential(3);
		}
	}

	if (operacionActual == 'multi') {
		if (numeros.length > 1) {

			resultadoParcial = numeros[0] * numeros[1];
			numeros = [];
			numeros.push(resultadoParcial);

			document.getElementById('pantalla').innerText = resultadoParcial.toExponential(3);
		}
	}

	if (operacionActual == 'div') {
		if (numeros.length > 1) {

			resultadoParcial = numeros[0] / numeros[1];
			numeros = [];
			numeros.push(resultadoParcial);

			document.getElementById('pantalla').innerText = resultadoParcial.toExponential(3);
		}
	}
	
	operacionActual = 'suma';

	if (numeros.length > 1) {

		resultadoParcial = numeros[0] + numeros[1];
		numeros = [];
		numeros.push(resultadoParcial);

		document.getElementById('pantalla').innerText = resultadoParcial.toExponential(3);
	}

	document.getElementById('pantalla').innerText = '';

});

document.getElementById('resta').addEventListener('click', function () {
	
	if(document.getElementById('pantalla').innerText == '') return;

	if (operacionActual == 'igual') {
		operacionActual = 'resta';
		document.getElementById('pantalla').innerText = '';
		return;
	}

	let numeroActual = parseInt(document.getElementById('pantalla').innerText);
	numeros.push(numeroActual);

	if (operacionActual == 'suma') {
		if (numeros.length > 1) {

			resultadoParcial = numeros[0] + numeros[1];
			numeros = [];
			numeros.push(resultadoParcial);

			document.getElementById('pantalla').innerText = resultadoParcial.toExponential(3);
		}
	}

	if (operacionActual == 'multi') {
		if (numeros.length > 1) {

			resultadoParcial = numeros[0] * numeros[1];
			numeros = [];
			numeros.push(resultadoParcial);

			document.getElementById('pantalla').innerText = resultadoParcial.toExponential(3);
		}
	}

	if (operacionActual == 'div') {
		if (numeros.length > 1) {

			resultadoParcial = numeros[0] / numeros[1];
			numeros = [];
			numeros.push(resultadoParcial);

			document.getElementById('pantalla').innerText = resultadoParcial.toExponential(3);
		}
	}

	operacionActual = 'resta';

	if (numeros.length > 1) {

		resultadoParcial = numeros[0] - numeros[1];
		numeros = [];
		numeros.push(resultadoParcial);

		document.getElementById('pantalla').innerText = resultadoParcial.toExponential(3);
	}

	document.getElementById('pantalla').innerText = '';

});

document.getElementById('multi').addEventListener('click', function () {
	
	if(document.getElementById('pantalla').innerText == '') return;

	if (operacionActual == 'igual') {
		operacionActual = 'multi';
		document.getElementById('pantalla').innerText = '';
		return;
	}

	let numeroActual = parseInt(document.getElementById('pantalla').innerText);
	numeros.push(numeroActual);

	if (operacionActual == 'suma') {
		if (numeros.length > 1) {

			resultadoParcial = numeros[0] + numeros[1];
			numeros = [];
			numeros.push(resultadoParcial);

			document.getElementById('pantalla').innerText = resultadoParcial.toExponential(3);
		}
	}

	if (operacionActual == 'resta') {
		if (numeros.length > 1) {

			resultadoParcial = numeros[0] - numeros[1];
			numeros = [];
			numeros.push(resultadoParcial);

			document.getElementById('pantalla').innerText = resultadoParcial.toExponential(3);
		}
	}

	if (operacionActual == 'div') {
		if (numeros.length > 1) {

			resultadoParcial = numeros[0] / numeros[1];
			numeros = [];
			numeros.push(resultadoParcial);

			document.getElementById('pantalla').innerText = resultadoParcial.toExponential(3);
		}
	}
	
	operacionActual = 'multi';

	if (numeros.length > 1) {

		resultadoParcial = numeros[0] * numeros[1];
		numeros = [];
		numeros.push(resultadoParcial);

		document.getElementById('pantalla').innerText = resultadoParcial.toExponential(3);
	}

	document.getElementById('pantalla').innerText = '';

});

document.getElementById('div').addEventListener('click', function () {

	if(document.getElementById('pantalla').innerText == '') return;

	if (operacionActual == 'igual') {
		operacionActual = 'div';
		document.getElementById('pantalla').innerText = '';
		return;
	}

	let numeroActual = parseInt(document.getElementById('pantalla').innerText);
	numeros.push(numeroActual);

	if (operacionActual == 'suma') {
		if (numeros.length > 1) {

			resultadoParcial = numeros[0] + numeros[1];
			numeros = [];
			numeros.push(resultadoParcial);

			document.getElementById('pantalla').innerText = resultadoParcial.toExponential(3);
		}
	}

	if (operacionActual == 'resta') {
		if (numeros.length > 1) {

			resultadoParcial = numeros[0] - numeros[1];
			numeros = [];
			numeros.push(resultadoParcial);

			document.getElementById('pantalla').innerText = resultadoParcial.toExponential(3);
		}
	}

	if (operacionActual == 'multi') {
		if (numeros.length > 1) {

			resultadoParcial = numeros[0] * numeros[1];
			numeros = [];
			numeros.push(resultadoParcial);

			document.getElementById('pantalla').innerText = resultadoParcial.toExponential(3);
		}
	}
	
	operacionActual = 'div';

	if (numeros.length > 1) {

		resultadoParcial = numeros[0] / numeros[1];
		numeros = [];
		numeros.push(resultadoParcial);

		document.getElementById('pantalla').innerText = resultadoParcial.toExponential(3);
	}

	document.getElementById('pantalla').innerText = '';

});

document.getElementById('igual').addEventListener('click', function () {

	if(document.getElementById('pantalla').innerText == '') return;

	let numeroActual = parseInt(document.getElementById('pantalla').innerText);
	numeros.push(numeroActual);

	if (operacionActual == 'suma') {
		if (numeros.length > 1) {

			resultadoParcial = numeros[0] + numeros[1];
			numeros = [];
			numeros.push(resultadoParcial);

			document.getElementById('pantalla').innerText = resultadoParcial.toExponential(3);
		}
	}

	if (operacionActual == 'resta') {
		if (numeros.length > 1) {

			resultadoParcial = numeros[0] - numeros[1];
			numeros = [];
			numeros.push(resultadoParcial);

			document.getElementById('pantalla').innerText = resultadoParcial.toExponential(3);
		}
	}

	if (operacionActual == 'multi') {
		if (numeros.length > 1) {

			resultadoParcial = numeros[0] * numeros[1];
			numeros = [];
			numeros.push(resultadoParcial);

			document.getElementById('pantalla').innerText = resultadoParcial.toExponential(3);
		}
	}

	if (operacionActual == 'div') {
		if (numeros.length > 1) {

			resultadoParcial = numeros[0] / numeros[1];
			numeros = [];
			numeros.push(resultadoParcial);

			document.getElementById('pantalla').innerText = resultadoParcial.toExponential(3);
		}
	}

	operacionActual = 'igual';
});