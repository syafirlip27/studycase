const readline = require('readline');

function formatRupiah(angka) {
    let rupiah = angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return 'Rp' + rupiah;
}

function hitungHargaTotal(jumlahBuku) {
    const hargaPerBuku = 50000;
    const eksemplarPerBuku = 10; // Setiap buku memiliki 10 eksemplar
    const hargaPerEksemplar = hargaPerBuku / eksemplarPerBuku;

    let totalHarga = 0;
    const jumlahEksemplar = jumlahBuku * eksemplarPerBuku;

    if (jumlahEksemplar <= 100) {
        // Tidak ada diskon
        totalHarga = jumlahEksemplar * hargaPerEksemplar;
    } else if (jumlahEksemplar > 100 && jumlahEksemplar <= 200) {
        // 10 buku pertama (100 eksemplar) diskon 5%, sisanya diskon 15%
        totalHarga = (100 * hargaPerEksemplar * 0.95) + ((jumlahEksemplar - 100) * hargaPerEksemplar * 0.85);
    } else if (jumlahEksemplar > 200) {
        // 10 buku pertama (100 eksemplar) diskon 7%, 10 buku kedua (100 eksemplar) diskon 17%, sisanya diskon 27%
        totalHarga = (100 * hargaPerEksemplar * 0.93) + (100 * hargaPerEksemplar * 0.83) + ((jumlahEksemplar - 200) * hargaPerEksemplar * 0.73);
    }

    return totalHarga;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Masukkan jumlah buku yang dibeli: ', (input) => {
    const jumlahBukuDibeli = parseInt(input, 10);
    if (isNaN(jumlahBukuDibeli) || jumlahBukuDibeli < 0) {
        console.log('Input tidak valid. Harap masukkan angka yang valid.');
    } else {
        const totalYangHarusDibayar = hitungHargaTotal(jumlahBukuDibeli);
        console.log("Total harga yang harus dibayar: " + formatRupiah(totalYangHarusDibayar));
    }
    rl.close();
});