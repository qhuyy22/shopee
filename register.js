function register(e) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    var user = {
        username: username,
        email:email, 
        password: password
    };
    var json = JSON.stringify(user)
    localStorage.setItem(username, json);
    alert("Đăng ký thành công")
}

