# techdegree-project-3
Build an Interactive Form
By: Omari Bennett 03/03/18

Requirements:
	Focus on the first field:
		On page load, the cursor appears in the "Name" field, ready for a user to type.
	Job Role Section:
		Your job role" text field appears when user selects "Other" from the Job Role menu
	T-Shirt Section: 
		No color options appear in the “Color” menu until the user chooses a T-Shirt theme. The “Color” menu reads “Please select a T-shirt theme” until a theme is selected from the “Design” menu. T-shirt color options are revealed based on the design selected.
	Activity Registration:
		User cannot select two activities that are at the same time Total cost of selected activities is calculated and displayed below the list of activities
	Displaying payment sections:
		When a user chooses a payment option, the chosen payment section is revealed and the other payment sections are hidden
	Form Validation:
		Form cannot be submitted (the page does not refresh when the submit button is clicked) until the following requirements have been met:
		Name field isn’t blank
		Email field contains validly formatted e-mail address: (doesn’t have to check that it's a real e-mail address, just that it's formatted like one: dave@example.com, for example)
		At least one checkbox under "Register for Activities" section must be selected.
		If "Credit Card" is the selected payment option, the three fields accept only numbers: a 13 to 16-digit credit card number, a 5-digit zip code, and 3-number CVV value
	Form Validation Messages:
		On submission, the form provides an error indication or message for each field that requires validation: name field, email field, “Register for Activities” checkboxes, credit card number, zip code, and CVV
	Form Works Without JavaScript:
		When JavaScript is disabled, all form fields and payment information is displayed, including the "Other" field in the "Job Role" menu

Exceeds Expectations:
	I'm shooting for the "Exceeds Expectations" grade by:
		T-Shirt Section -
			“Color” drop down menu is hidden until a T-Shirt design is selected.
		Form Validation -
			Form provides at least one error message that changes depending on the error. For example, the email field displays a different error message when the email field is empty than it does when the email address is formatted incorrectly. This is accomplished without the use of HTML5's built-in field validation.
		Form Validation Messages -
			Form provides at least one error message in real time, before the form is submitted. For example, the error message appears near the email field when the user begins to type, and disappears as soon as the user has entered a complete and correctly formatted email address
	Note: N/A
	Bugs: N/A