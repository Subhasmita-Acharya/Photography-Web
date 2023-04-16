function displayMenu() {
    var x = document.getElementById("navBar");
    var y = document.getElementById("header");
    var z = document.getElementById("home");
    if (x.style.display === "block") {
        x.style.display = "none";
        y.style.opacity = '1';
        z.style.width = '100%';
        z.style.opacity = '1';
    }
    else {
        x.style.display = "block";
        y.style.opacity = '0.8';
        z.style.width = '82%';
        z.style.opacity = '0.8';
    }
}
function closeMenu1() {
    var x = document.getElementById("navBar");
    var y = document.getElementById("header");
    var z = document.getElementById("home");
    if (x.style.display === "block") {
        x.style.display = "none";
        y.style.opacity = '1';
        z.style.width = '100%';
        z.style.opacity = '1';
    }
}
function closeMenu2() {
    var x = document.getElementById("loginPopup");
    var y = document.getElementById("header");
    var z = document.getElementById("home");
    if (x.style.display === "block") {
        x.style.display = "none";
        y.style.opacity = '1';
        z.style.opacity = '1';
        document.getElementById("frame").src = "login.html";
    }
}
function logIn() {
    var zWindowWidth = document.documentElement.clientWidth;
    var zWindowHeight = document.documentElement.clientHeight;
    var zPopupWidth = (zWindowWidth * 0.6);
    var zPopupHeight = (zWindowHeight * 0.95);
    var x = document.getElementById("header");
    var y = document.getElementById("navBar");
    var z = document.getElementById("home");
    document.getElementById('loginContent').style.width = zPopupWidth + 'px';
    document.getElementById('loginContent').style.height = zPopupHeight + 'px';
    document.getElementById('loginContent').style.top = (zWindowHeight - zPopupHeight) / 2 + 'px';
    document.getElementById('loginContent').style.left = (zWindowWidth - zPopupWidth) / 2 + 'px';
    document.getElementById('loginPopup').style.display = 'block';
    x.style.opacity = '0.8';
    if(y.style.display === "block") {
        y.style.display = "none";
        z.style.width = '100%';
    }
    z.style.opacity = '0.8';
}
