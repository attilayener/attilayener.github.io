// Klavyeden tuşa basıldığında çağrılacak fonksiyon
document.addEventListener('keydown', function(event) {
    // Eğer 61 (klavyedeki nümerik tuşlardan 9'a basarsak)
    if (event.key === '9') {
        // Google'a yönlendir
        window.location.href = 'https://www.google.com/';
    }
  });
  