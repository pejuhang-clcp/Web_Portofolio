<?php
$host = "localhost"; // atau sesuaikan dengan server database Anda
$user = "root"; // username database
$pass = ""; // password database (kosong jika localhost)
$dbname = "porto-de-javanicus";

// Membuat koneksi
$conn = new mysqli($host, $user, $pass, $dbname);

// Cek koneksi
if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}
?>


