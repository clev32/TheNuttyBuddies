$(document).ready(function() {
	// move focus to first text box
	$("#email").focus();

	// the handler for the click event of the submit button
	$("#register_form").submit(function(event) {
		var isValid = true;

		// validate the email entry with a regular expression
		var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
		var email = $("#email").val().trim();
		if (email == "") {
			$("#email").next().text("This field is required.");
			isValid = false;
		} else if (!emailPattern.test(email)) {
			$("#email").next().text("Must be a valid email address.");
			isValid = false;
		} else {
			$("#email").next().text("");
		}
		$("#email").val(email);

		// validate the password entry
		var password = $("#password").val().trim();
		if (password.length < 6) {
			$("#password").next().text("Must be 6 or more characters.");
			isValid = false;
		} else {
			$("#password").next().text("");
		}
		$("#password").val(password);

		// validate the verify entry
		var verify = $("#verify_password").val().trim();
		if (verify == "") {
			$("#verify_password").next().text("This field is required.");
			isValid = false;
		} else if (verify !== password) {
			$("#verify_password").next().text("Must equal first password entry.");
			isValid = false;
		} else {
			$("#verify_password").next().text("");
		}
		$("#verify_password").val(verify);

		// validate the company name entry

		// validate the first name entry
		var firstName = $("#first_name").val().trim();
		if (firstName == "") {
			$("#first_name").next().text("This field is required.");
			isValid = false;
		} else {
			$("#first_name").next().text("");
		}
		$("#first_name").val(firstName);

		// validate the last name entry
		var lastName = $("#last_name").val().trim();
		if (lastName == "") {
			$("#last_name").next().text("This field is required.");
			isValid = false;
		} else {
			$("#last_name").next().text("");
		}
		$("#last_name").val(lastName);

		var checked = $('#terms').is(':checked');
		if (!checked) {
			$('#terms').next().text("Terms must be accepted to register.");
			isValid = false;
		} else {
			$('#terms').next().text("");
		}

		$('#terms').val(checked);
		// prevent the submission of the form if any entries are invalid
		if (isValid == false) {
			event.preventDefault();
		} else {
			event.preventDefault();
			$(function() {
				$("#dialog-message").dialog({
					modal : true,
					buttons : {
						Ok : function() {
							$(this).dialog("close");
							$('#register_form').unbind('submit').submit()
						}
					}
				});
			});
		}
	} // end function
	);
	// end submit

});
// end ready