
// Form validation
document.getElementById('sign-up').addEventListener('submit', function(e){
	e.preventDefault();
	getFormData();
});

// function to grab data
function getFormData() {
    // get form field values
    var firstNameValue = document.getElementById('first-name').value,
        lastNameValue = document.getElementById('last-name').value,
        emailValue = document.getElementById('email').value,
        phoneNumberValue = document.getElementById('phone-number').value,
        postalCodeValue = document.getElementById('postal-code').value.toUpperCase(),

        firstName = document.getElementById('first-name'),
        lastName = document.getElementById('last-name'),
        email = document.getElementById('email'),
        phoneNumber = document.getElementById('phone-number'),
        postalCode = document.getElementById('postal-code'),

        firstNameLabel = document.querySelector('label[for=first-name]'),
        lastNameLabel = document.querySelector('label[for=last-name]'),
        emailLabel = document.querySelector('label[for=email]'),
        phoneNumberLabel = document.querySelector('label[for=phone-number]'),
        postalCodeLabel = document.querySelector('label[for=postal-code]'),

        errorsBlock = document.getElementById('errors'),
        thankYou = document.getElementById('thank-you'),

        submitButton = document.getElementById('submit-form')

    //disable button to refrain from double submission
	submitButton.disabled = true;

	//check
    function postalFilter(postalCode) {
        if (!postalCode) {
            return null;
        }
        postalCode = postalCode.toString().trim();

        var ca = new RegExp(/([A-Z]\d)([A-Z]\d){2}/i);

        if (ca.test(postalCode.toString().replace(/\W+/g, ''))) {
            return postalCode;
        }
        return null;
    }

    var validate = 0;
    errorsBlock.innerHTML = '';

    if (postalCodeValue === '') {
    	postalCode.focus();
    	postalCodeLabel.className = 'error';
    	errorsBlock.innerHTML = '<span>Please enter your postal code.</span>' + errorsBlock.innerHTML;
    }
    else if (postalFilter(postalCodeValue) === null) {
        postalCode.focus();
        postalCodeLabel.className = 'error';
        errorsBlock.innerHTML = '<span>Please enter a valid Canadian postal code. (ex. M6K 1X8)</span>' + errorsBlock.innerHTML;
    }
    else {
    	postalCodeLabel.classList.remove('error');
    	validate++
    }

    if (phoneNumberValue === '') {
        phoneNumber.focus();
        phoneNumberLabel.className = 'error';
        errorsBlock.innerHTML = '<span>Please enter your phone number.</span>' + errorsBlock.innerHTML;
    }
    else if(!/^\(?([0-9]{3})\)?[-]?([0-9]{3})[-]?([0-9]{4})$/.test(phoneNumberValue)){
    	phoneNumber.focus();
        phoneNumberLabel.className = 'error';
        errorsBlock.innerHTML = '<span>Please enter a 10-digit phone number.</span>' + errorsBlock.innerHTML;
    }
    else {
    	phoneNumberLabel.classList.remove('error');
    	phoneNumberValue = phoneNumberValue.replace(/\D/g,'');
    	validate++
    }

    if (emailValue === '') {
    	email.focus();
    	emailLabel.className = 'error';
    	errorsBlock.innerHTML = '<span>Please enter your email.</span>' + errorsBlock.innerHTML;
    }
    else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailValue)) {
        email.focus();
        emailLabel.className = 'error';
        errorsBlock.innerHTML = '<span>Please enter a valid email.</span>' + errorsBlock.innerHTML;
    }
    else {
    	emailLabel.classList.remove('error');
    	validate++
    }

    // if (lastNameValue === '') {
    //     lastName.focus();
    //     lastNameLabel.className = 'error';
    //     errorsBlock.innerHTML = '<span>is required.</span>' + errorsBlock.innerHTML;
    // }
    // else {
    //	lastNameLabel.classList.remove('error');
    //	validate++
    // }

    if (firstNameValue === '') {
        firstName.focus();
        firstNameLabel.className = 'error';
        errorsBlock.innerHTML = '<span>Please enter your first name</span>' + errorsBlock.innerHTML;
    }
    else {
    	firstNameLabel.classList.remove('error');
    	validate++
    }

    if (validate === 4) {
        // if successful, store form data in objects
        var data = {
            'First Name': firstNameValue,
            'Last Name': lastNameValue,
            'Email': emailValue,
            'Phone Number': phoneNumberValue,
            'Postal Code': postalCodeValue
        };
        
        firstNameLabel.classList.remove('error');
        lastNameLabel.classList.remove('error');
        emailLabel.classList.remove('error');
        phoneNumberLabel.classList.remove('error');
        postalCodeLabel.classList.remove('error');

        errorsBlock.classList.remove('show');
        thankYou.classList.add('show');

        console.log(data);

        //reset form to refrain from duplicate submission
        document.getElementById('sign-up').reset();

        //enable button to re submit with new data
        submitButton.disabled = false;

        return true;
    }
    else {
    	submitButton.disabled = false;
    	thankYou.classList.remove('show');
    	errorsBlock.classList.add('show');
    }

};

// Styling stuff
window.onscroll = function changeClass(e){
	var header = document.getElementById('header');

	if(window.pageYOffset === 0) {
		header.classList.remove('fixed');
	} else {
		header.classList.add('fixed');
	}
}

//Copyright 
var d = new Date;
var year = d.getFullYear()
document.getElementById('copyright').innerHTML = '<span>© ' + year + ' Lorem Ipsum Inc.</span>'

