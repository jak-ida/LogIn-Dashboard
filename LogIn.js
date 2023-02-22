/*function Login(){
    alert("Log In Clicked");
}*/
function Login(){
    var value = document.getElementById("user").value;
    if (value == "Pamela"){
        var pword = document.getElementById("password").value
        if (pword == "Password"){
        window.location.href = "VirtualDashboard.html";
        } else {
        alert("Password is incorrect");
        }
    } else {
        alert("Username is incorrect");
    }
}

function Register(){
    alert("register Clicked");
}