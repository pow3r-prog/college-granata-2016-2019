let Uan = document.querySelector('#uah-write');
let Eur = document.querySelector('#eur-write');
let Usd = document.querySelector('#usd-write');
const Submit = document.querySelector('#convert');
let ResultEur = document.querySelector('#result-eur');
let ResultUsd = document.querySelector('#result-usd');

let result;

Submit.addEventListener('click', function(){
	
	result = Math.round(Uan.value / Eur.value, 1);

	if(Uan.value == '' || Eur.value == ''){
		ResultEur.innerHTML = 'Введійть кількість і курс валюти!';
	}
	else{
		ResultEur.innerHTML = result;
	}

})

Submit.addEventListener('click', function(){
	
	result = Math.round(Uan.value / Usd.value, 1);

	if(Uan.value == '' || Usd.value == ''){
		ResultUsd.innerHTML = 'Введійть кількість і курс валюти!';
	}
	else{
		ResultUsd.innerHTML = result;
	}

})