function display() {
	document.getElementById("nav-bar").classList.toggle("active");
}
function validateForm() {
	var name = document.forms["form"]["name"].value;
	var email = document.forms["form"]["email"].value;
	var subject = document.forms["form"]["subject"].value;
	var message = document.forms["form"]["message"].value;
	if (name == "") {
		alert("Name must be filled out");
		return false;
	} else if (email == "") {
		alert("email must be filled out");
		return false;
	} else if (subject == "") {
		alert("subject must be filled out");
		return false;
	} else if (message == "") {
		alert("message must be filled out");
		return false;
	}
}
