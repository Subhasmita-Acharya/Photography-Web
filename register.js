function formValidation() {
    var uid = document.registration.userid;
    var passid = document.registration.passid;
    var uname = document.registration.username;
    var uadd = document.registration.address;
    var ucountry = document.registration.country;
    var uzip = document.registration.zip;
    var uemail = document.registration.email;
    var umsex = document.registration.msex;
    var ufsex = document.registration.fsex;
    if(userid_validation(uid,5,30)) {
        if(passid_validation(passid,7,20)) {
            if(allLetter(uname)) {
                if(alphanumeric(uadd)) {
                    if(countryselect(ucountry)) {
                        if(allnumeric(uzip)) {
                            if(ValidateEmail(uemail)) {
                                if(validsex(umsex,ufsex)) {
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return false;
}
function userid_validation(uid,mx,my) {
    var uid_len = uid.value.length;
    if (uid_len == 0 || uid_len >= my || uid_len < mx) {
        alert("User Id should not be empty / length be between "+mx+" to "+my);
        uid.focus();
        return false;
    }
    return true;
}
function passid_validation(passid,mx,my) {
    var passid_len = passid.value.length;
    if (passid_len == 0 ||passid_len >= my || passid_len < mx) {
        alert("Password should not be empty / length be between "+mx+" to "+my);
        passid.focus();
        return false;
    }
    return true;
}
function alphanumeric(uadd) {
    var letters = /^[0-9a-zA-Z]+$/;
    if(uadd.value.match(letters)) {
        return true;
    }
    else {
        alert('User address must have alphanumeric characters only');
        uadd.focus();
        return false;
    }
}
function countryselect(ucountry) {
    if(ucountry.value == "Default") {
        alert('Select your country from the list');
        ucountry.focus();
        return false;
    }
    else {
        return true;
    }
}
function allnumeric(uzip) { 
    var numbers = /^[0-9]+$/;
    if(uzip.value.match(numbers)) {
        return true;
    }
    else {
        alert('ZIP code must have numeric characters only');
        uzip.focus();
        return false;
    }
}
function ValidateEmail(uemail) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(uemail.value.match(mailformat)) {
        return true;
    }
    else {
        alert("You have entered an invalid email address!");
        uemail.focus();
        return false;
    }
}
function validsex(umsex,ufsex) {
    x=0;
    if(umsex.checked) {
        x++;
    }
    if(ufsex.checked) {
        x++;
    }
    if(x==0) {
        alert('Select Male/Female');
        umsex.focus();
        return false;
    }
    else {
        alert('Form Successfully Submitted');
        window.location.reload();
        return true;
    }
}
function logIn() {
    var zWindowWidth = document.documentElement.clientWidth;
    var zWindowHeight = document.documentElement.clientHeight;
    var zPopupWidth = (zWindowWidth * 0.6);
    var zPopupHeight = (zWindowHeight * 0.95);
    document.getElementById('content').style.position = 'absolute';
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