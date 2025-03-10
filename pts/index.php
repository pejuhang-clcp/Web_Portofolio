<?php

require 'backend.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);
  
    // Menyimpan data ke database
    $sql = "INSERT INTO messages (name, email, message) VALUES ('$name', '$email', '$message')";
  
    if ($conn->query($sql) === TRUE) {
        echo "<script>alert('Pesan berhasil dikirim!'); window.location='web_porto_fatah.html';</script>";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
  
    $conn->close();
  
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
        </style>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Profiol Fatahillah</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<body>
<div id="header">
    <div class="contaner">
        <nav>
            <img src="Modern_Brand_Name_Initials_Typography_Logo__1_-removebg-preview.png" alt="" class="logo">
           <ul>
            <li><a href="#header">Beranda</a></li>
            <li><a href="#about">Tentang Saya</a></li>
            <li><a href="#portofolio">Desain Ilustrasi</a></li>
            <li><a href="#contact">Kontak</a></li>
           </ul>
        </nav>
    </div>
</div>
<section class="home">
    <div class="home-info">
        <h1>Halo, Aku <span>Fatah</span></h1>
        <h2>Aku seorang <span>Frontend Developer</span></h2>
        <p>Namaku Fatahillah Panji Darma Sena dari kelas X PPLG 2</p>
    </div>

    <div class="home-img">
        <div class="img-box">
            <div class="img-item">
                <img src="WhatsApp Image 2025-03-08 at 14.07.22_7dc0ced9.jpg" alt="">
            </div>
        </div>
    </div>
</section>
<div id="about">
    <div class="container">
        <div class="row">
            <div class="about-col-1">
                <img src="WhatsApp Image 2025-03-06 at 21.02.48_fedfcb51.jpg" alt="">
            </div>
            <div class="about-col-2">
                <h1 class="sub-title">Tentang Saya</h1>
                <p>Hi!, namaku Fatahillah Panji Darma Sena tapi kalian bisa panggil aku fatah,
                    aku lahir tanggal 27 april 2009 di Cilacap jawa tengah. Aku sendiri memiliki kemampuan
                    di bidabg UI/UX desain dan juga desain grafis kini aku sedang sekolah di SMK Telkom 
                    Purwokerto dan duduk di Kelas X PPLG 2.</p>
                    
                    <div class="tab-titles">
                        <p class="tab-links active-link" onclick="opentab('pendidikan')">Pendidikan</p>
                        <p class="tab-links"onclick="opentab('projek')">Projek</p>
                        <p class="tab-links"onclick="opentab('skill')">Skill</p>
                    </div>
                    <div class="tab-contents active-tab" id="pendidikan">
                        <ul>
                            <li><span>SD</span><br>SD Sidanegara 09</li>
                            <li><span>SMP</span><br>SMP Islam Al Irsyad Cilacap</li>
                            <li><span>SMK</span><br>SMK Telkom Purwokerto</li>
                        </ul>
                    </div>
                    <div class="tab-contents" id="projek">
                        <ul>
                            <li><span>Web Sederhana</span><br>Membuat Website Bernama Tech Center United</li>
                            <li><span>Rancangan Web</span><br>Membuata rancanga website di Figma dan Odoo</li>
                            <li><span>Ilustrasi</span><br>Menggambar ilustari menggunakan Adobe Ilustrator dan Figma</li>
                            <li><span>Membuat logo</span><br>Membuat desain dari logo websaite dan juga banyak lagi</li>
                        </ul>
                    </div>
                    <div class="tab-contents" id="skill">
                        <ul>
                            <li><span>HTML/CSS/JS</span><br>Mampu menguasai HTML, CSS, dan sedikit Java Script</li>
                            <li><span>UI/UX</span><br>Mampu membuat rancangan UI/UX menggunakan Figma dan Adobe</li>
                            <li><span>Figma</span><br>Dapat membuat desain web dan ilustrasi menggunakan figma</li>
                            <li><span>Adobe Ilustrator</span><br>Mampu membuat ilustarsi dan desain logo menggunakan Adobe Ilustrator</li>
                        </ul>
                    </div>
            </div>
        </div>
    </div>
</div>
<div id="portofolio">
    <div class="container">
        <h1 class="sun-title">Desain Ilustrasi</h1>
        <div class="work-list">
            <div class="work">
                <img src="burnice white wp.jpg">
            </div>
            <div class="work">
                <img src="hanaca-bg.jpg">
            </div>
            <div class="work">
                <img src="anby demara wp.jpg">
            </div>
        </div>
    </div>
</div>
<div id="contact">
    <div class="container">
        <div class="row">
            <div class="contact-left">
                <h1 class="sun-title">Kontak aku</h1>
                <p><i class="fa-solid fa-arrow-up-right-from-square"></i>fatahillah.pds.2021@gmail.com</p>
                <p><i class="fa-solid fa-phone"></i>+62 821-3639-2453</p>
                <div class="medsos">
                    <a href=""><i class="fa-brands fa-instagram"></i></a>
                    <a href=""><i class="fa-brands fa-whatsapp"></i></a>
                    <a href=""><i class="fa-brands fa-github"></i></a>
                </div>
                <a href="images/Maaf saat ini belum dapat mendownload file nya" download class="btn">Download</a>
            </div>
            <div class="contact-rigth">
                <form action="" method="post">
                    <label for="name">Nama:</label>
                    <input type="text" id="name" name="name" placeholder="Nama mu" required>
        
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Email mu"required>
        
                    <label for="message">Pesan:</label>
                    <textarea id="message" name="message" rows="4" placeholder="Taro pesan di sini" required></textarea>
        
                    <button class="btn btn2" type="submit">Kirim</button>
                </form>
                </form>
            </div>
        </div>
    </div>
</div>

<script>
    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");
    function opentab(tabname){
        for(tablink of tablinks){
            tablink.classList.remove("active-link");
        }
        for(tabcontent of tabcontents){
           tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab")
    }
</script>
   
</body>
</html>
