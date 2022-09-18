//  name field only contains alphabet characteres and character spaces
function validateName() {
    var name = document.getElementById("fname").value
    name.trim()
    var regexp = /^[A-za-z]+$/
    if(regexp.test(name)){
        return true
    }
    else{
        alert("The name field can only alphabetical characters or blankspace.")
        return false
    }

}

/*
The email field contains a user name part follows by “@” and a
domain name part. The user name contains word characters
including hyphen (“-”) and period (“.”). The domain name contains
two to four address extensions. Each extension is string of word
characters and separated from the others by a period (“.”). The last
extension must have two to three characters.

*/
function validateEmail(){
    var email = document.getElementById("email").value;
    email.trim();
    var regexp = /^([\w\.-])+@([\w]+\.){1,3}([A-z]){2,3}$/;
    if(regexp.test(email)){
        return true;
    }
    else{
        alert("Email entered in wrong format");
        return false;
    }
    
}

function validateDate(){
    var date = new Date(document.getElementById("startdate").value);
    var currentDate = new Date();
    if(date.getFullYear() > currentDate.getFullYear()) {
		return true;
	}
	else if(date.getFullYear() == currentDate.getFullYear()){
		if(date.getMonth() > currentDate.getMonth()){
			return true;
		}
		else if(date.getMonth() == currentDate.getMonth()){
			if(date.getDate() > currentDate.getDate()){
				return true;
			}
		}
	}
	alert("Date must be after today");
	return false;
}