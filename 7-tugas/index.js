let siswa = {
    nama: "Izzamuddin Royhul Firdaus",
    nilai: [
        {
            mapel: "Matematika",
            nilai: 90
        },
        {
            mapel: "Bahasa Indonesia",
            nilai: 80
        }
        ,
        {
            mapel: "Bahasa Inggris",
            nilai: 70
        }
    ]
}

// sekarang tampilkan nama dan cari rata rata nilainya
let jumlah_data = 0;
let total_nilai = 0;

for(let i = 0; i < siswa.nilai.length; i++) {
    jumlah_data++;
    total_nilai += siswa.nilai[i].nilai;
}
let rata_rata = total_nilai/jumlah_data;


// gunakan dollar sign untuk menampilkan nilai variabel
console.log(`Nama Siswa: ${siswa.nama}`);
console.log(`Rata-rata Nilai: ${rata_rata}`);

// tambahkan ke dalam array Siswa
siswa.rata_rata = rata_rata;
console.log(siswa);