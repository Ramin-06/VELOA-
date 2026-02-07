// --- AYARLAR ---
const WHATSAPP_NUMBER = "905XXXXXXXXX"; // Buraya kendi numaranı yaz

const details = {
    standard: "<h3>Standard Plan</h3><ul><li>Full WED2C Integration</li><li>15 Hand-picked Products</li><li>AI-Generated Product Copy</li><li>Basic SEO optimization</li><li>Email Support</li></ul>",
    pro: "<h3>Pro Growth Plan</h3><ul><li>40 High-converting Products</li><li>Professional Meta & TikTok Ads Scripts</li><li>30-Day Content Strategy Plan</li><li>Priority WhatsApp Support</li><li>Custom Ad Creatives Strategy</li></ul>",
    business: "<h3>Elite Business Plan</h3><ul><li>Unlimited Product Sourcing</li><li>Exclusive Brand Authority E-Book</li><li>Investor-ready Pitch Deck</li><li>1-on-1 Marketing Strategy Call</li><li>Dedicated Success Manager</li></ul>"
};

// WhatsApp Sipariş Fonksiyonu
function order(packageName) {
    const message = `Velo AI E-Commerce Agency: Salam mən [${packageName}] paketdən almaq istəyirəm.Lazım olan məlumatları yazın zəhmət olmasa.`;
    const url = `https://wa.me/${+994515817772}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// Modal Açma Fonksiyonu
function openModal(type) {
    document.getElementById('modalBodyContent').innerHTML = details[type];
    document.getElementById('infoModal').style.display = 'block';
}

// Modal Kapatma Fonksiyonu
function closeModal() {
    document.getElementById('infoModal').style.display = 'none';
}

// Dışarı tıklayınca kapatma
window.onclick = function(event) {
    const modal = document.getElementById('infoModal');
    if (event.target == modal) {
        closeModal();
    }
}

// Navigasyon Çubuğu Efekti (Scroll)
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = "15px 0";
        navbar.style.boxShadow = "0 10px 30px rgba(10, 25, 47, 0.08)";
    } else {
        navbar.style.padding = "25px 0";
        navbar.style.boxShadow = "none";
    }
});
