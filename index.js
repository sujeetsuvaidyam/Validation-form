function validation() {
    var user = document.getElementById("name").value;
    var pass = document.getElementById("password").value;
    var conpass = document.getElementById("conpassword").value;
    var num = document.getElementById("number").value;
    var email = document.getElementById("email").value;
    // console.log(user);

    // user

    if (user == "") {
        document.getElementById("username").innerHTML = "** Please fill the username field"
        return false;
    }

    if (!isNaN(user)) {
        document.getElementById("username").innerHTML = "** Only characters are allowed"
        return false;
    }
    if (user.length <= 2 || user.length > 20) {
        document.getElementById("username").innerHTML = "**  user length must be between 2 and 20"
        return false;
    }
    if (user != "") {
        document.getElementById("username").innerHTML = ""
        // return false;
    }


    // password

    if (pass == "") {
        document.getElementById("passwords").innerHTML = "** Please fill the password field  "
        return false;
    }
    if ((pass.length <= 5 || pass.length > 20)) {
        document.getElementById("passwords").innerHTML = "**  Password length must be between 5 and 20"
        return false;
    }

    if (pass != "") {
        document.getElementById("passwords").innerHTML = ""
        // return false;
    }
    if (conpass == "") {
        document.getElementById("conpass").innerHTML = "** Please fill the confirm password field "
        return false;
    }
    if (pass != conpass) {
        document.getElementById("conpass").innerHTML = "**  Password are not matching  "
        return false;
    }
    if (pass != "") {
        document.getElementById("conpass").innerHTML = ""
        // return false;
    }


    // mobile no

    if (num == "") {
        document.getElementById("mob").innerHTML = "** Please fill the mobile no field  "
        return false;

    }
    if (isNaN(num)) {
        document.getElementById("mob").innerHTML = "** user must write digits only but not character  "
        return false;
    }
    if (num.length != 10) {
        document.getElementById("mob").innerHTML = "** mobile no must be 10 digits only "
        return false;
    }
    // if (num.length > 10) {
    //     document.getElementById("mob").innerHTML = "** mobile no must be 10 digits only mmm "
    //     return false;
    // }
    if (num != "") {
        document.getElementById("mob").innerHTML = ""
        // return false;
    }


    // email

    if (email == "") {
        document.getElementById("emails").innerHTML = "** Please fill the email field  "
        return false;

    }

    if ((email.charAt(email.length - 4) != ".") && (email.charAt(email.length - 3) != ".")) {
        // console.log(email);
        document.getElementById("emails").innerHTML = " ** . invalid position "
        return false;
    }
    // if (email.idnexof('@') >= 0) {
    //     document.getElementById("emails").innerHTML = "** @ invalid position "
    //     return false;
    // }
    if (email != "") {
        document.getElementById("emails").innerHTML = ""
        // return false;
    }

};