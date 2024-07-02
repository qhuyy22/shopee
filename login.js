function login(e) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var user = localStorage.getItem("doanhquan123ha");
    var data = JSON.parse(user);
    if(user == null) {
        alert("Vui lòng đăng nhập");
    }
    else if (
        username == data.username && 
        data.email && 
        password == data.password
    ){
        alert("Đăng nhập thành công");
        window.location.href = "shop.html"
    }
    else {
        alert("Tài khoản hoặc mật khẩu không đúng, vui lòng đăng nhập lại");
    }
}