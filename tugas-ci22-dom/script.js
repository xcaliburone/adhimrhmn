// saat tombol login (entrar) ditekan, kalau ada salah satu field yang kosong ( nama/password ) munculkun alert ke browser
// document.getElementById('button-login').addEventListener('click', function () {
//     // Ambil nilai dari input field nama dan password
//     var username = document.getElementById('username').value;
//     var password = document.getElementById('password').value;

//     // Periksa apakah salah satu dari field kosong
//     if (username.trim() === '' && password.trim() === '') {
//         alert('Nama dan Password harus diisi sebelum login.');
//     } else if (username.trim() === '') {
//         alert('Nama harus diisi sebelum login.');
//     } else if (password.trim() === '') {
//         alert('Password harus diisi sebelum login.');
//     } else {
//         // Jika tidak ada field yang kosong, Anda bisa menambahkan kode untuk melakukan proses login disini
//         alert('Berhasil login!');
//     }
// });

// kalau nama harus diisi ( kalau nama ) atau password harus diisi ( kalau password )
// bebas pesannya bagaimana asal beda nama dan password

// kalau sukses, munculkan alert kek login berhasil bebas + harus ada dimunculkan nama ( atau emailkah apalah itu yg diminta di input ) dari user
// misal : login berhasil, selamat datang adhim]
// document.getElementById('button-login').addEventListener('click', function () {
//     // Ambil nilai dari input field nama atau email dan password
//     var username = document.getElementById('username').value;
//     var password = document.getElementById('password').value;

//     // Periksa apakah salah satu dari field kosong
//     if (username.trim() === '' || password.trim() === '') {
//         alert('Nama / Email dan Password harus diisi sebelum login.');
//     } else {
//         // Jika tidak ada field yang kosong, tampilkan pesan login berhasil dan sambut pengguna dengan nama / email
//         alert('Login berhasil. Selamat datang ' + username + '!');
//     }
// });

// challanges:
// validasi passwordnya, pass harus minimal 8 karakter, mengandung huruf besar, huruf kecil, dan angka
document.getElementById('button-login').addEventListener('click', function () {
    // Ambil nilai dari input field nama atau email dan password
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Periksa apakah salah satu dari field kosong
    if (username.trim() === '' || password.trim() === '') {
        alert('Nama / Email dan Password harus diisi sebelum login.');
    } else if (password.length < 8) {
        alert('Password harus terdiri dari minimal 8 karakter.');
    } else if (!/[A-Z]/.test(password)) {
        alert('Password harus mengandung setidaknya satu huruf besar (uppercase).');
    } else if (!/[a-z]/.test(password)) {
        alert('Password harus mengandung setidaknya satu huruf kecil (lowercase).');
    } else if (!/\d/.test(password)) {
        alert('Password harus mengandung setidaknya satu angka (digit).');
    } else {
        // Jika password memenuhi kriteria, tampilkan pesan login berhasil dan sambut pengguna dengan nama / email
        alert('Login berhasil. Selamat datang ' + username + '!');
    }
});