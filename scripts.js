// Sayfa yüklendiğinde iletişim formu için örnek gönderim işlemi
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(e) {
      e.preventDefault(); // Formun varsayılan gönderimini engeller
      alert('Mesajınız gönderildi!');
      form.reset();
    });
  });
  