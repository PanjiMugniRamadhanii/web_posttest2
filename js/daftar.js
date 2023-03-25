const daftar = document.getElementById("daftar");
daftar.onclick = regis;

function regis(e){
    e.preventDefault();
    const nama = document.getElementById("daf_nama").value;
    const email = document.getElementById("daf_email").value;
    const password = document.getElementById("daf_password").value;
    // let user = []
    // user.push ({
    //     Nama:nama.value,
    //     Email:email.value,
    //     Password:password.value,
    // })
    // let ubah = JSON.stringify(user)
    // localStorage.setItem("user", ubah);

    localStorage.setItem("Nama", nama);
    localStorage.setItem("Email", email);
    localStorage.setItem("Password", password);

//    const regis = {nama, email, password};
//    localStorage.setItem("regis", JSON.stringify(regis));


    alert("Berhasil Daftar");
    window.location.href = "login.html";
}
