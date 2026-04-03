// 1. DATA BIODATA (Pastikan ID ini ada di HTML nanti)
const biodata = {
  nama: "Eric",
  status: "Mahasiswa | Sistem Informasi",
  NPM: "2531069",
  kampus: "Universitas Internasional Batam",
  domisili: "Batam",
  email: "25.01.eric@uib.edu"
};

// Fungsi isi data (Hanya jalan jika ID ditemukan)
function isiData() {
    const elNama = document.getElementById("nama");
    if(elNama) elNama.innerText = ": " + biodata.nama;
    // ... tambahkan yang lain jika kamu buat ID-nya di HTML
}

// 2. DARK MODE
function toggleDarkMode() {
  const body = document.body;
  const btn = document.querySelector('.toggle-btn');
  body.classList.toggle('dark');
  if (btn) {
    btn.innerText = body.classList.contains('dark') ? "Mode Terang" : "Mode Gelap";
  }
}

// 3. CAROUSEL LOGIC (Fokus Utama Kamu)
let currentIndex = 0;

function updateCarousel() {
    const slides = document.querySelectorAll('.slide');
    if (slides.length === 0) return;

    slides.forEach((slide, index) => {
        // Reset semua status
        slide.classList.remove('active', 'prev-slide', 'next-slide');
        slide.style.opacity = "0"; 
        slide.style.zIndex = "1";

        if (index === currentIndex) {
            // TENGAH
            slide.classList.add('active');
            slide.style.opacity = "1";
            slide.style.zIndex = "10";
        } 
        else if (index === (currentIndex - 1 + slides.length) % slides.length) {
            // KIRI (NGINTIP)
            slide.classList.add('prev-slide');
            slide.style.opacity = "0.7";
            slide.style.zIndex = "5";
        } 
        else if (index === (currentIndex + 1) % slides.length) {
            // KANAN (NGINTIP)
            slide.classList.add('next-slide');
            slide.style.opacity = "0.7";
            slide.style.zIndex = "5";
        }
    });
}

function moveSlide(direction) {
    currentIndex = (currentIndex + direction + document.querySelectorAll('.slide').length) % document.querySelectorAll('.slide').length;
    updateCarousel();
}

// 4. DOWNLOAD SERTIFIKAT
function downloadAchievement(filePath) {
    const link = document.createElement("a");
    link.href = filePath;
    link.download = "achievement.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// 5. INISIALISASI SAAT START
document.addEventListener('DOMContentLoaded', () => {
    isiData();
    updateCarousel();
    
    // Animasi Progress Bar
    const fills = document.querySelectorAll(".fill");
    fills.forEach(fill => {
        const width = fill.style.width; // Ambil dari inline style HTML
        fill.style.width = "0"; // Reset dulu
        setTimeout(() => {
            fill.style.width = width; // Jalankan animasi
        }, 500);
    });
});