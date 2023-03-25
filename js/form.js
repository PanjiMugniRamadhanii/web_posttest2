function saveForm() {
  const nama = document.getElementById("nama_lengkap").value;
  const umur = document.getElementById("umur").value;
  const email = document.getElementById("email").value;
  const jenis_kelamin = document.getElementById("jenis_kelamin").value;
  const MakanDiTempatatauBawaPulang = document.querySelector('input[name="MakanDiTempat/BawaPulang"]:checked').value;
  const alamat = document.getElementById("alamat").value;
  let pesanan = [];
  let ingin = document.getElementsByName("pesanan");
    for (let z = 0; z < ingin.length; z++) {
      if (ingin[z].checked == true) {
        pesanan.push(ingin[z].value);
      }
    }

let user = [];
user.push({ pesanan: pesanan  });

  const form = { nama, umur, email, jenis_kelamin, pesanan, MakanDiTempatatauBawaPulang, alamat };
    
  sessionStorage.setItem("form", JSON.stringify(form));

  alert("Berhasil Melakukan Pemesanan");
    tampilkanData();
}

function tampilkanData() {
	const data = JSON.parse(sessionStorage.getItem("form"));

	const hasil = document.getElementById("hasil");
	hasil.innerHTML = "<h2>Hasil Form Pemesanan:</h2>";
	hasil.innerHTML += "<p>Nama: " + data.nama + "</p>";
  hasil.innerHTML += "<p>Umur: " + data.umur + "</p>";
	hasil.innerHTML += "<p>Email: " + data.email + "</p>";
	hasil.innerHTML += "<p>Jenis Kelamin: " + data.jenis_kelamin + "</p>";
  hasil.innerHTML += "<p>Pesanan: " + data.pesanan + "</p>";
  hasil.innerHTML += "<p>Makan Di Tempat/Bawa Pulang: " + data.MakanDiTempatatauBawaPulang + "</p>";
  hasil.innerHTML += "<p>Alamat: " + data.alamat + "</p>";

  
}