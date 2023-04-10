function copyText() {
  const copy_text = document.getElementById("copy_text");
  copy_text.innerHTML = `Copied !`;
  const text = "Dopigo20"; // Kopyalanacak metni burada belirleyin
  navigator.clipboard
    .writeText(text)
    .then(() => {
      console.log("Metin panoya kopyalandı");
    })
    .catch((err) => {
      console.error("Metin kopyalanırken hata oluştu: ", err);
    });
}
