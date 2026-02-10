/**
 * VELO AI - E-Commerce Agency
 * JavaScript Core File
 */

// --- AYARLAR ---
const WHATSAPP_NUMBER = "994515817772"; 

/**
 * WhatsApp Sifariş Funksiyası (Planlar üçün)
 */
function order(packageName) {
    const message = `Velo AI E-Commerce Agency: Salam, mən [${packageName}] paketi ilə maraqlanıram. Zəhmət olmasa lazımi məlumatları göndərin.`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

/**
 * Cabinet (Şəxsi Kabinet) Funksiyası
 * Yeni pəncərədə qeydiyyat/giriş səhifəsini açır.
 */
function openCabinet() {
    // Bu səhifəni (cabinet.html) yaratmağı unutma
    window.location.href = "cabinet.html";
}

/**
 * Naviqasiya Paneli Skrol Efekti
 */
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = "15px 0";
        navbar.style.boxShadow = "0 10px 30px rgba(10, 25, 47, 0.08)";
        navbar.style.background = "rgba(255, 255, 240, 0.95)"; 
    } else {
        navbar.style.padding = "25px 0";
        navbar.style.boxShadow = "none";
        navbar.style.background = "rgba(255, 255, 240, 0.9)";
    }
});

console.log("VELO AI System Ready.");
