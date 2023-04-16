var loginBox = document.getElementsByClassName("form");
function login() {
    event.preventDefault();
    var user = document.getElementById("uname").value;
    var password = document.getElementById("passwrd").value;
    var mailValidate = /^\w+([\._]?\w+)*@\w+([\._]?\w+)*(\.\w{2,4})+$/;
    var passw = /^\w*\w+[@!%$*]+\w*$/;
    if(user.indexOf(' ')>=0 || !(user) ) {
        alert("User ID required.");
            return ;
    }
    else if (!(user.match(mailValidate))) {
            alert("Invalid Email ID.");
            return ;
    }
    else if (password == "") {
            alert("Password required.");
            return ;
    }
    else if(!(password.match(passw))) {
        alert("Invalid Password.");
        return ;
    }
    else {
        alert("Welcome " + user + "!");

        document.getElementsByClassName("uname").value="";
        document.getElementsByClassName("password").value="";
        return ;
    }
}
function reset() {
    document.getElementsByClassName("rbtn").reset();  
}
function register() {
    var zWindowWidth = document.documentElement.clientWidth;
    var zWindowHeight = document.documentElement.clientHeight;
    var zPopupWidth = (zWindowWidth * 0.6);
    var zPopupHeight = (zWindowHeight * 0.95);
    document.getElementById('content').style.width = zPopupWidth + 'px';
    document.getElementById('content').style.height = zPopupHeight + 'px';
    document.getElementById('content').style.top = (zWindowHeight - zPopupHeight) / 2 + 'px';
    document.getElementById('content').style.left = (zWindowWidth - zPopupWidth) / 2 + 'px';
    document.getElementById('popup').style.display = 'block';
    togglefile();
}
function togglefile() {
    var myreg = document.getElementById('content');
    var myform = document.getElementById('x');
    if (myform.style.display== "none") {
        myform.style.display = "block";
        myreg.style.display = "none";
    }
    else {
        myform.style.display = "none";
        myreg.style.display = "block";
    }
}