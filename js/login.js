const form = document.getElementById("form");
const nama = document.getElementById("nama");
const password = document.getElementById("password");

form.addEventListener("submit", function(e){
    e.preventDefault();
    
    const loc_nama = localStorage.getItem("Nama");
    const loc_password = localStorage.getItem("Password");

    if(nama.value ==loc_nama && password.value == loc_password){
        alert("Berhasil masuk");
        window.location.href = "home.html";
    } else {
        alert("Nama dan Password Salah");
    }
});