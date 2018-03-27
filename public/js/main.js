'use strict';

//Variable
const submitButton = document.querySelector('button'),
	  form = document.querySelector('form'),
	  nameInput = document.querySelector('#name'),
	  emailInput = document.querySelector('#mail'),

	  creditCardDiv = document.querySelector('#credit-card'),
	  creditCardInput = document.querySelector('#cc-num'),

	  zipInput = document.querySelector('#zip'),

	  cvvIinput = document.querySelector('#cvv'),
	  input = document.querySelector('#otherJob'),
	  designButton = document.querySelector('#design'),
	  tshritSelect = document.createElement('select'),
	  tshritOption = document.createElement('option'),
	  colorDiv = document.querySelector('#colors-js-puns'),
	  activities = document.querySelector('.activities'),
	  totalH2 = document.createElement('h4'),
	  payment = document.querySelector('#payment'),
	  paypal = document.querySelector('p'),
	  tShirtWarning = document.createElement('p'),
	  activitiesWarning = document.createElement('p');

let optionValue = document.querySelector('#title'),
	colorSelect = document.querySelector('#color'),
	optionSelect = document.querySelector('#design'),
	total = 0;



//On page load, the cursor appears in the "Name" field, ready for a user to type.
nameInput.focus();

//Hide the Other job role
input.style.display = 'none';

//Converts the first letter of each word of a string in upper case
function uppercase(str) {
  var array1 = str.split(' ');
  var newarray1 = [];
    
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}


if( optionSelect.selectedIndex === 0 ) {
	//Add `please select a t-shirt theme option to the begin of the selection
	colorSelect.add( tshritOption, colorSelect[0] );
	tshritOption.text = '<-- Please select a T-shrit theme';
	tshritOption.selected = "selected";

	//Hide the rest of the shirt option if 'Please select a T-shrit theme' is selected 
	for (var i = 1; i < colorSelect.options.length; i++ ) {
		colorSelect.options[i].style.display = 'none';
	}
}

optionSelect.addEventListener('click', ()=> {
	//Hide the rest of the shirt option if 'Please select a T-shrit theme' is selected 
	if( optionSelect.selectedIndex === 0 ) {
		colorSelect.options[1].removeAttribute("selected");
		colorSelect.options[4].removeAttribute("selected");
		tshritOption.selected = "selected";
		colorSelect.options[0].style.display = 'block';
		for( let i =1; i < 7; i++ ) {
			colorSelect.options[i].style.display = 'none';
		}
	}

	//If 'Theme - JS Puns' is selected the first option is removed and next three is shown for the shirt color option 
	if( optionSelect.selectedIndex === 1 ) {
		colorSelect.options[0].removeAttribute("selected");
		colorSelect.options[4].removeAttribute("selected");
	 	colorSelect.options[0].style.display = 'none';
	 	colorSelect.options[1].selected = "selected";
		for ( let i = 0; i < 7; i++ ) {
			if( i <= 3 && i >= 1) {
				colorSelect.options[i].style.display = 'block'; 
			} else {
				colorSelect.options[i].style.display = 'none';
			}
		}
	}

	//If 'Theme - JS Puns' is selected the first option is removed and last three is shown for the shirt color option 
	if( optionSelect.selectedIndex === 2 ) {
		for ( let i = 6; i > -1; i-- ) {
			if( i >= 4 ) {
				colorSelect.options[4].selected = "selected";
				colorSelect.options[0].removeAttribute("selected");
				colorSelect.options[1].removeAttribute("selected");
				colorSelect.options[i].style.display = 'block';
			} else {
				colorSelect.options[i].style.display = 'none';
			}
			
		}
	}
});

//Listen for a change activity checkbox & total cost of selected activities is calculated and displayed below the list of activities
for( let i = 0; i < activities.children.length; i++ ) {
	activities.children[i].addEventListener('change', (e)=> {
		if( e.target.checked === true && e.target.name === 'all') {
			//Main Conference
			activities.children[i].style.color = 'gray';

			total += 200;				
		} else if( e.target.checked === false && e.target.name === 'all') {
			activities.children[i].style.color = 'black';
			
			total -= 200;
		} else if( e.target.checked === true && e.target.name === 'js-frameworks') {
			//JavaScript Frameworks Workshop
			activities.children[i].style.color = 'gray';

			//Disable Express Workshop
			e.target.parentElement.nextElementSibling.nextElementSibling.firstChild.disabled = true;
			e.target.parentElement.nextElementSibling.nextElementSibling.style.color = 'gray';

			total += 100;	
		} else if( e.target.checked === false && e.target.name === 'js-frameworks') {
			activities.children[i].style.color = 'black';
			
			//Enable Express Workshop
			e.target.parentElement.nextElementSibling.nextElementSibling.firstChild.disabled = false;
			e.target.parentElement.nextElementSibling.nextElementSibling.style.color = 'black';

			total -= 100;
		} else if( e.target.checked === true && e.target.name === 'js-libs') {
			//JavaScript Libraries Workshop
			activities.children[i].style.color = 'gray';

			total += 100;
		} else if( e.target.checked === false && e.target.name === 'js-libs') {
			activities.children[i].style.color = 'black';

			total -= 100;
		} else if( e.target.checked === true && e.target.name === 'express') {
			//Express Workshop
			activities.children[i].style.color = 'gray';

			e.target.parentElement.previousElementSibling.previousElementSibling.firstChild.disabled = true;
			e.target.parentElement.previousElementSibling.previousElementSibling.style.color = 'gray';
			total += 100;				
		} else if( e.target.checked === false && e.target.name === 'express' ) {
			e.disabled = false;
			activities.children[i].style.color = 'black';

			////Disable JavaScript Frameworks Workshop
			e.target.parentElement.previousElementSibling.previousElementSibling.firstChild.disabled = false;
			e.target.parentElement.previousElementSibling.previousElementSibling.style.color = 'black';
			
			total -= 100;
		} else if( e.target.checked === true && e.target.name === 'node') {
			//Node.js Workshop
			activities.children[i].style.color = 'gray';

			//Disable npm Workshop
			e.target.parentElement.nextElementSibling.nextElementSibling.firstChild.disabled = true;
			e.target.parentElement.nextElementSibling.nextElementSibling.style.color = 'gray';

			total += 100;	
		} else if( e.target.checked === false && e.target.name === 'node') {
			activities.children[i].style.color = 'black';
			
			//Enable npm Workshop
			e.target.parentElement.nextElementSibling.nextElementSibling.firstChild.disabled = false;
			e.target.parentElement.nextElementSibling.nextElementSibling.style.color = 'black';

			total -= 100;
		} else if( e.target.checked === true && e.target.name === 'build-tools') {
			//Build tools Workshop 
			activities.children[i].style.color = 'gray';

			total += 100;
		} else if( e.target.checked === false && e.target.name === 'build-tools') {
			activities.children[i].style.color = 'black';

			total -= 100;
		} else if( e.target.checked === true && e.target.name === 'npm' ) {
			//npm Workshop 
			activities.children[i].style.color = 'gray';

			// Disable Node Workshop
			e.target.parentElement.previousElementSibling.previousElementSibling.firstChild.disabled = true;
			e.target.parentElement.previousElementSibling.previousElementSibling.style.color = 'gray';
			total += 100;				
		} else if( e.target.checked === false && e.target.name === 'npm' ) {
			e.disabled = false;
			activities.children[i].style.color = 'black';

			//Enable Node Workshop
			e.target.parentElement.previousElementSibling.previousElementSibling.firstChild.disabled = false;
			e.target.parentElement.previousElementSibling.previousElementSibling.style.color = 'black';
			
			total -= 100;
		}

		//Display the total amount below the activity list
		if( total >= 100 ) {
			totalH2.innerHTML = `Total: $${total}`;
			totalH2.style.display = 'block';
			activities.append(totalH2);
			
		} else {
			totalH2.style.display = 'none';
		}
	});
}


//chosen payment section is revealed and the other payment sections are hidden
if( payment.selectedIndex === 0 ) {
	creditCardDiv.style.display = 'none';
	creditCardDiv.nextElementSibling.style.display = 'none';
	creditCardDiv.nextElementSibling.nextElementSibling.style.display = 'none';
}

payment.addEventListener('change', ()=> {
	if( payment.selectedIndex === 0 ) {
		creditCardDiv.style.display = 'none';
		creditCardDiv.nextElementSibling.style.display = 'none';
		creditCardDiv.nextElementSibling.nextElementSibling.style.display = 'none';
	} else if( payment.selectedIndex === 1 ) {
		creditCardDiv.style.display = 'block';
		creditCardDiv.nextElementSibling.style.display = 'none';
		creditCardDiv.nextElementSibling.nextElementSibling.style.display = 'none';

	} else if( payment.selectedIndex === 2 ) {
		creditCardDiv.style.display = 'none';
		creditCardDiv.nextElementSibling.style.display = 'block';
		creditCardDiv.nextElementSibling.nextElementSibling.style.display = 'none';

	} else if( payment.selectedIndex === 3 ) {
		creditCardDiv.style.display = 'none';
		creditCardDiv.nextElementSibling.style.display = 'none';
		creditCardDiv.nextElementSibling.nextElementSibling.style.display = 'block';

	}
});


//"Your job role" text field appears when user selects "Other" from the Job Role menu
optionValue.addEventListener('input', ()=> {
	if( optionValue.selectedIndex === 5 ) {
		//Display 'Other' input jod role field 
		input.style.display = 'inline-block';

	} else if( optionValue.selectedIndex < 4 ) {
		//Hide 'Other' input jod role field 
		input.style.display = 'none';
	}	
});

//Validate the form field before submission
submitButton.addEventListener('click', (e)=> {
	// Stop form submision
	e.preventDefault();

	//User input
	const name = uppercase( nameInput.value ),
		  email = emailInput,
		  creditCardNum = creditCardInput.value,
		  zip = zipInput.value,
		  cvvNum = cvvIinput.value;

		//Check if all the field is filled out
			let nameTitle = nameInput.previousElementSibling,
				emailTitle = emailInput.previousElementSibling,
				tShirtTitle = designButton.parentElement.previousElementSibling.previousElementSibling,
				activitieTitle = activities.children[0].firstChild,
				paymentTitle = payment.previousElementSibling.previousElementSibling;

	var emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	var test = emailInput.value.length === 0 && emailRegExp.test(emailInput.value);

	//Form Validation
	if( name.length === 0 ){
		console.log('invalid name');
		nameTitle.style.color = 'red';
		nameTitle.innerHTML = 'Name: (please provide your name)';
		return
	} else {
		if( email.value.length === 0 ) {
			console.log('NO Email address');
			emailTitle.style.color = 'red';
			emailTitle.innerHTML = 'Email: (please provide your email address)';
		} else if ( emailInput.value.length > 0 && emailRegExp.test(emailInput.value) ) {
			// console.log('valid email');
			if( optionSelect.selectedIndex === 0 ) {
				console.log('invalid shirt input');
				tShirtWarning.style.color = 'red';
				tShirtWarning.innerHTML = `Don't forget to pick a T-Shirt`;
				tShirtTitle.append( tShirtWarning );
			} else {
				if( total === 0 ) {
					console.log('invalid Activit!');
					activitiesWarning.style.color = 'red';
					activitiesWarning.innerHTML = `Please select an Activity`;
					activities.children[0].append( activitiesWarning );

				} else {
					if( payment.selectedIndex === 0 ) {
						alert('Please select a payment option!');
						return;
					} else if( payment.selectedIndex === 1) {
						if( creditCardNum.length <= 12 || creditCardNum.length >= 17 ) {
							console.log('invalid credit-card #');
							creditCardInput.previousElementSibling.style.color = 'red';
							creditCardInput.previousElementSibling.innerHTML = 'Card Number: invalid credit-card number!';
						} else if ( zip.length !== 5 ) {
							console.log('invalid zip');
							zipInput.previousElementSibling.style.color = 'red';
							zipInput.previousElementSibling.innerHTML = 'Zip Code: invalid!';

						} else if ( cvvNum.length !== 3 ) {
							console.log('invalid cvv #');
							cvvIinput.previousElementSibling.style.color = 'red';
							cvvIinput.previousElementSibling.innerHTML = 'CVV: invalid!';
						} else {
							console.log('Validate form!');
							location.reload(true);
						}	
					} else if( payment.selectedIndex === 2 ||  payment.selectedIndex === 3 ) {
					console.log('Validate form!');
					location.reload(true);
					}
				}
			}
		} else {
			console.log('invalid Email');
			emailTitle.style.color = 'red';
			// emailTitle.innerHTML = 'Email: (please provide your email address)';
			emailTitle.innerHTML = 'Email: (email address is formatted incorrectly!)';
			return
		}
	}
});