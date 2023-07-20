const form= document.getElementById('form');
const username= document.getElementById('username');
const email= document.getElementById('email');
const password= document.getElementById('password');
const confirm= document.getElementById('confirm');

function showError(input,message){
	const formControl=input.parentElement;
	formControl.className='form-control error';
	const small=formControl.querySelector('small');
	small.innerText=message;
}

function showSuccess(input){
	const formControl=input.parentElement;
	formControl.className='form-control success';
}
function isValidEmail(email){
	const re= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	return re.test(String(email).toLowerCase());
}

form.addEventListener('submit', function(e){
	e.preventDefault();
	
	if(username.value === ''){
		showError(username,'Username is required');
	}
	else{
		showSuccess(username);
	}
	
	if(emailI.value === ''){
		showError(email,'Email is required');
	}
	else if (!isValidEmail(email.value)){
		showError(email, 'Email is not valid');
	}
	else{
		showSuccess(email);
	}
	
	if(password.value === ''){
		showError(password,'Password is required');
	}
	else{
		showSuccess(password);
	}
	
	if(confirm.value === ''){
		showError(confirm,'Please confirm password');
	}
	else{
		showSuccess(confirm);
	}
})