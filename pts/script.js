// Generate effects at intervals
setInterval(createStar, 100);

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const statusMessage = document.getElementById('statusMessage');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const formData = new FormData(form);

        fetch('process_message.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            if (data === 'success') {
                statusMessage.textContent = 'Pesan berhasil terkirim!';
                statusMessage.style.color = 'green';
                form.reset();
            } else {
                statusMessage.textContent = 'Gagal mengirim pesan. Silakan coba lagi.';
                statusMessage.style.color = 'red';
            }
        })
        .catch(error => {
            statusMessage.textContent = 'Terjadi kesalahan. Silakan coba lagi.';
            statusMessage.style.color = 'red';
        });
    });
}); 
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