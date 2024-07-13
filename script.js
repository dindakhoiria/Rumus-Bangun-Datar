// script.js

document.addEventListener('DOMContentLoaded', function () {
    const bangunDatarSelect = document.getElementById('bangun-datar-select');
    bangunDatarSelect.addEventListener('change', cariRumus);
});

function cariRumus() {
    const bangunDatar = document.getElementById('bangun-datar-select').value;
    const rumusContainer = document.getElementById('rumus-container');
    const hasilContainer = document.getElementById('hasil-container');
    rumusContainer.innerHTML = '';

    switch (bangunDatar) {
        case 'persegi':
            rumusContainer.innerHTML = `
                <h3>Persegi</h3>
                <p>Rumus Luas: s × s</p>
                <input type="number" id="s-persegi" placeholder="Sisi">
                <button onclick="hitungLuasPersegi()">Hitung Luas</button>
                <p id="hasil-luas-persegi"></p>
                <p>Rumus Keliling: 4 × s</p>
                <input type="number" id="s-persegi-keliling" placeholder="Sisi">
                <button onclick="hitungKelilingPersegi()">Hitung Keliling</button>
                <p id="hasil-keliling-persegi"></p>
            `;
            break;
        case 'persegi-panjang':
            rumusContainer.innerHTML = `
                <h3>Persegi Panjang</h3>
                <p>Rumus Luas: p × l</p>
                <input type="number" id="p-persegi-panjang" placeholder="Panjang">
                <input type="number" id="l-persegi-panjang" placeholder="Lebar">
                <button onclick="hitungLuasPersegiPanjang()">Hitung Luas</button>
                <p id="hasil-luas-persegi-panjang"></p>
                <p>Rumus Keliling: 2 × (p + l)</p>
                <input type="number" id="p-persegi-panjang-keliling" placeholder="Panjang">
                <input type="number" id="l-persegi-panjang-keliling" placeholder="Lebar">
                <button onclick="hitungKelilingPersegiPanjang()">Hitung Keliling</button>
                <p id="hasil-keliling-persegi-panjang"></p>
            `;
            break;
        case 'lingkaran':
            rumusContainer.innerHTML = `
                <h3>Lingkaran</h3>
                <p>Rumus Luas: π × r × r</p>
                <input type="number" id="r-lingkaran" placeholder="Jari-jari">
                <button onclick="hitungLuasLingkaran()">Hitung Luas</button>
                <p id="hasil-luas-lingkaran"></p>
                <p>Rumus Keliling: 2 × π × r</p>
                <input type="number" id="r-lingkaran-keliling" placeholder="Jari-jari">
                <button onclick="hitungKelilingLingkaran()">Hitung Keliling</button>
                <p id="hasil-keliling-lingkaran"></p>
            `;
            break;
        case 'segitiga':
            rumusContainer.innerHTML = `
                <h3>Segitiga</h3>
                <p>Rumus Luas: ½ × alas × tinggi</p>
                <input type="number" id="alas-segitiga" placeholder="Alas">
                <input type="number" id="tinggi-segitiga" placeholder="Tinggi">
                <button onclick="hitungLuasSegitiga()">Hitung Luas</button>
                <p id="hasil-luas-segitiga"></p>
                <p>Rumus Keliling: sisi1 + sisi2 + sisi3</p>
                <input type="number" id="sisi1-segitiga" placeholder="Sisi 1">
                <input type="number" id="sisi2-segitiga" placeholder="Sisi 2">
                <input type="number" id="sisi3-segitiga" placeholder="Sisi 3">
                <button onclick="hitungKelilingSegitiga()">Hitung Keliling</button>
                <p id="hasil-keliling-segitiga"></p>
            `;
            break;
        default:
            rumusContainer.innerHTML = '<p>Silakan pilih bangun datar untuk melihat rumus.</p>';
            break;
    }

    // Bersihkan hasil sebelumnya
    hasilContainer.innerHTML = '';
}

// Fungsi untuk menampilkan hasil luas
function tampilkanHasilLuas(namaBangunDatar, hasil) {
    const hasilContainer = document.getElementById('hasil-container');
    const p = document.createElement('p');
    p.innerHTML = `<span>Hasil Luas ${namaBangunDatar}: ${hasil}</span>`;
    hasilContainer.appendChild(p);
}

// Fungsi untuk menampilkan hasil keliling
function tampilkanHasilKeliling(namaBangunDatar, hasil) {
    const hasilContainer = document.getElementById('hasil-container');
    const p = document.createElement('p');
    p.innerHTML = `<span>Hasil Keliling ${namaBangunDatar}: ${hasil}</span>`;
    hasilContainer.appendChild(p);
}

// Fungsi untuk menghitung luas persegi
function hitungLuasPersegi() {
    const s = document.getElementById('s-persegi').value;
    const luas = s * s;
    tampilkanHasilLuas('Persegi', luas);
}

// Fungsi untuk menghitung keliling persegi
function hitungKelilingPersegi() {
    const s = document.getElementById('s-persegi-keliling').value;
    const keliling = 4 * s;
    tampilkanHasilKeliling('Persegi', keliling);
}

// Fungsi untuk menghitung luas persegi panjang
function hitungLuasPersegiPanjang() {
    const p = document.getElementById('p-persegi-panjang').value;
    const l = document.getElementById('l-persegi-panjang').value;
    const luas = p * l;
    tampilkanHasilLuas('Persegi Panjang', luas);
}

// Fungsi untuk menghitung keliling persegi panjang
function hitungKelilingPersegiPanjang() {
    const p = parseFloat(document.getElementById('p-persegi-panjang-keliling').value);
    const l = parseFloat(document.getElementById('l-persegi-panjang-keliling').value);
    
    // Pastikan nilai p dan l sudah terdefinisi dengan benar
    if (!isNaN(p) && !isNaN(l)) {
        // Menghitung keliling persegi panjang
        const keliling = 2 * (p + l);

        // Memanggil fungsi untuk menampilkan hasil keliling
        tampilkanHasilKeliling('Persegi Panjang', keliling);
    } else {
        alert('Mohon masukkan nilai yang valid untuk panjang dan lebar!');
    }
}

// Fungsi untuk menghitung luas lingkaran
function hitungLuasLingkaran() {
    const r = document.getElementById('r-lingkaran').value;
    const luas = Math.PI * r * r;
    tampilkanHasilLuas('Lingkaran', luas.toFixed(2));
}

// Fungsi untuk menghitung keliling lingkaran
function hitungKelilingLingkaran() {
    const r = document.getElementById('r-lingkaran-keliling').value;
    const keliling = 2 * Math.PI * r;
    tampilkanHasilKeliling('Lingkaran', keliling.toFixed(2));
}

// Fungsi untuk menghitung luas segitiga
function hitungLuasSegitiga() {
    const alas = document.getElementById('alas-segitiga').value;
    const tinggi = document.getElementById('tinggi-segitiga').value;
    const luas = 0.5 * alas * tinggi;
    tampilkanHasilLuas('Segitiga', luas);
}

// Fungsi untuk menghitung keliling segitiga
function hitungKelilingSegitiga() {
    const sisi1 = parseFloat(document.getElementById('sisi1-segitiga').value);
    const sisi2 = parseFloat(document.getElementById('sisi2-segitiga').value);
    const sisi3 = parseFloat(document.getElementById('sisi3-segitiga').value);
    const keliling = sisi1 + sisi2 + sisi3;
    tampilkanHasilKeliling('Segitiga', keliling);
}

// Tambahkan fungsi lain untuk bangun datar lainnya...
