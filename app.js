function copyText() {
  const copyText = document.getElementById("copyText");
  const couponText = document.getElementById("couponText");
  couponText.innerHTML = `KOPYALANDI !`;
  const text = "HOSGELDIN10"; // Kopyalanacak metni burada belirleyin
  navigator.clipboard
    .writeText(text)
    .then(() => {
      console.log("Metin panoya kopyalandı");
    })
    .catch((err) => {
      console.error("Metin kopyalanırken hata oluştu: ", err);
    });
}
