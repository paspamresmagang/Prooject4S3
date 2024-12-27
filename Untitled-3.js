// // Mendefinisikan objek 'universitas' dengan properti: Nama, Fakultas, Departemen
// var universitas = {
//     Nama: 'Pradika',
//     Fakultas: 'Fakultas Teknik',
//     Departemen: 'Departemen Teknik Elektro'
// }

// // Mendefinisikan fungsi 'university' untuk membuat objek universitas dengan nama, fakultas, dan departemen
// function university(name, faculty, department) {
//     var univ = {
//         name : name,
//         faculty : faculty,
//         department : department
//     }
//     return univ;
// }

// // Memanggil fungsi 'university' untuk membuat objek
// university('Budi', 'Fakultas Teknik', 'Departemen Teknik Mesin');

// Ekspresi fungsi untuk mendefinisikan konstruktor 'universitas'
// var universitas = function(name, faculty, department) {
//     this.name = 'Universitas Jakarta';
//     this.faculty = 'Faculty of Engineering';
//     this.department = 'Autobots Department';
// }

// DOM -- Document Object Model
// Mengakses elemen DOM menggunakan berbagai metode

// Dengan ID
var namaJudul = document.getElementById('kepala1');
// Dengan nama tag
var paragraf = document.getElementsByTagName('p');
// Dengan nama kelas
var className = document.getElementsByClassName('ujung');

console.log(className)

// Jackquery
// querySelector() memilih elemen pertama yang cocok dengan selektor
var qry = document.querySelector("h1");

// Mendefinisikan fungsi untuk memilih semua elemen yang cocok dengan selektor
function $$(selector) {
    return document.querySelectorAll(selector);
}
var qry2 = $$('.ujung');

// Manipulasi DOM
// Mengubah gaya elemen dengan ID 'kepala1'
namaJudul.style.backgroundColor = 'red';
namaJudul.style.color = 'white';

// Mengubah gaya elemen <p> ketiga
paragraf[2].style.backgroundColor = 'red';
paragraf[2].style.color = 'white';

// Mengubah warna latar belakang elemen yang dipilih oleh querySelector
qry.style.backgroundColor = 'navy';

// Memilih elemen <div> pertama dan mengatur atribut kelasnya
var qry2 = document.querySelector('div');
var ReservedClass = qry2.setAttribute('class', 'paragraf1');

// Mengubah inner HTML dari elemen dengan ID 'kepala1'
namaJudul.innerHTML = "Ini adalah sebuah judul";

// Menambahkan kelas ke elemen yang dipilih oleh querySelector
qry.classList.add('paragraf2');

// // Mengaktifkan/menonaktifkan kelas pada elemen dan mencatat hasilnya
// var tl = qry.classList.toggle('paragraf1');
// console.log(tl);
// console.log(qry.classList.toggle('paragraf1'));

// // Memeriksa apakah elemen memiliki kelas tertentu dan mengganti kelas dengan yang lain
// var tl2 = qry.classList.contains('paragraf3');
// var tl3 = qry.classList.replace('paragraf1', 'paragraf5');
// console.log(tl2);
// console.log(tl3);

// Membuat elemen <p> baru dan sebuah node teks, kemudian menambahkan node teks ke elemen tersebut
var newElement = document.createElement('p');
var newTextinElement = document.createTextNode(' Ini adalah elemen baru');
var jadi = newElement.appendChild(newTextinElement);

// Menambahkan elemen baru ke elemen induk dengan kelas 'ujung'
var parent = document.querySelector('.ujung');
parent.appendChild(jadi);

// Menyisipkan elemen baru sebelum elemen lain
var baru = document.querySelector('div .ujung');
qry.insertBefore(jadi, baru);

// // Menambahkan node teks ke elemen baru lagi (sudah dilakukan di atas)
// newElement.appendChild(newTextinElement);

// Event listener
// 1. Event handler untuk menyembunyikan elemen saat diklik
qry.onclick = function halo() {
    qry.style.display = 'none';
};

// Menambahkan event listener untuk event klik (salah meneruskan hasil dari 'halo' alih-alih fungsinya)
qry.addEventListener('click', halo());

// // Struktur seperti jQuery (catatan: komentar menunjukkan niat menggunakan sintaks jQuery)
// $(selector).action(script);
