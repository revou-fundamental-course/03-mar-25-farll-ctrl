// ini file JavaScript

// Kode untuk memasukkan dan menampilkan nama pengunjung
document.addEventListener("DOMContentLoaded", function() {
    let nama = prompt("Masukkan Nama Anda:");
    document.querySelector(".username").textContent = nama;

    document.getElementById("form-pesan").addEventListener("submit", function(event) {
        event.preventDefault();

        let nama = document.getElementById("nama").value;
        let jenkel = document.querySelector('input[name="gender"]:checked')?.value || "Tidak dipilih";
        let email = document.getElementById("email").value;
        let nohp = document.getElementById("no_hp").value;
        let tujuan = document.getElementById("tujuan").value;
        let tanggal = document.getElementById("tanggal").value;
        let pesan = document.getElementById("pesan").value;

        document.querySelector(".pesanan").innerHTML = `
            <h1>Pesanan Anda:</h1>
            <p><strong>Nama: </strong> ${nama}</p>
            <p><strong>Jenis Kelamin: </strong> ${jenkel}</p>
            <p><strong>Email: </strong> ${email}</p>
            <p><strong>No. HP: </strong> ${nohp}</p>
            <p><strong>Tujuan: </strong> ${tujuan}</p>
            <p><strong>Tanggal: </strong> ${tanggal}</p>
            <p><strong>Pesan: </strong> ${pesan}</p>
        `;
    });
});



let bannerIndex = 0;
showBanner();

// Function to change banner
function nextBanner() {
    bannerIndex += 1;
    showBanner();
}

// Function to show banner
function showBanner() {
    // Get all banner elements
    const banners = document.getElementsByClassName('banner-img');

    if (bannerIndex >= banners.length) {
        bannerIndex = 0;
    }

    // Loop through all banner elements
    for (let i = 0; i < banners.length; i++) {
        banners[i].style.display = 'none';
    }

    // Show first banner
    banners[bannerIndex].style.display = 'block';
}

// Set interval to change banner
setInterval(nextBanner, 3000);