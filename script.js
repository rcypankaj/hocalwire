const imageCard = document.getElementById("image__card--container");
const cards = document.querySelectorAll(".card__item");

imageCard.addEventListener("click", () => {
  window.location.href =
    "https://www.thehindu.com/news/national/andhra-pradesh/andhra-pradesh-kadapa-police-bust-aadhaar-enabled-payment-system-scam-two-held/article66494470.ece";
});

cards.forEach((el, index) => {
  console.log(el);
  el.addEventListener("click", () => {
    if (index == 0) {
      window.location.href =
        "https://www.thehindu.com/news/national/andhra-pradesh/andhra-pradesh-kadapa-police-bust-aadhaar-enabled-payment-system-scam-two-held/article66494470.ece";
    } else if (index == 1) {
      window.location.href =
        "https://www.thequint.com/news/webqoof/sunil-gavaskar-criticising-bcci-asia-cup-2023-viral-quote-fact-check";
    } else if (index == 3) {
      window.location.href =
        "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/aamir-khan-and-ranbir-kapoor-being-considered-for-rajkumar-hiranis-lala-amarnath-biopic-report/articleshow/103289542.cms?from=mdr";
    } else {
      window.location.href =
        "https://www.boomlive.in/fact-check/kerala-train-decoration-flowers-onam-fact-check-22894";
    }
  });
});
