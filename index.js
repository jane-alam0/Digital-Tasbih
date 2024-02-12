const allahuAkberDisply = document.getElementById("allahuakberDisply");
const allahuAkberIncrement = document.getElementById("allahuakberIncrement");
const allahuAkberDecrement = document.getElementById("allahuakberDecrement");
const alhamdulilahDisply = document.getElementById("alhamdulilahDisply");
const alhamdulilahIncrement = document.getElementById("alhamdulilahIncrement");
const alhamdulilahDcrement = document.getElementById("alhamdulilahDcrement");
const subhanAllahDisply = document.getElementById("subhanallahDisply");
const subhanAllahIncrement = document.getElementById("subhanallahIncrement");
const subhanAllahDecrement = document.getElementById("subhanallahDecrement");
const resetAllTasbih = document.getElementById("resetAllTasbih");

let alhamdulilah = 0;
let allahuAkber = 0;
let subhanAllah = 0;

alhamdulilahIncrement.addEventListener("click", function () {
  if (alhamdulilah < 33) {
    alhamdulilah += 1;
    alhamdulilahDisply.innerText = alhamdulilah;
  } else {
    alert("Alhamdulillah Complete. Please Fillup anoter one");
  }
});

alhamdulilahDcrement.addEventListener("click", function () {
  if (alhamdulilah > 0) {
    alhamdulilah -= 1;
    alhamdulilahDisply.innerText = alhamdulilah;
  } else {
    alert("You can't added nagetive value");
  }
});

subhanAllahIncrement.addEventListener("click", function () {
  if (subhanAllah < 33) {
    subhanAllah += 1;
    subhanAllahDisply.innerText = subhanAllah;
  } else {
    alert("Subhan Allah Complete. Please Fillup anoter one");
  }
});

subhanAllahDecrement.addEventListener("click", function () {
  if (subhanAllah > 0) {
    subhanAllah -= 1;
    alhamdulilahDisply.innerText = subhanAllah;
  } else {
    alert("You can't added nagetive value");
  }
});

allahuAkberIncrement.addEventListener("click", function () {
  if (allahuAkber < 34) {
    allahuAkber += 1;
    allahuAkberDisply.innerText = allahuAkber;
  } else {
    alert("Allahuakber Complete. Please Fillup anoter one");
  }
});

allahuAkberDecrement.addEventListener("click", function () {
  if (allahuAkber > 0) {
    allahuAkber -= 1;
    allahuAkberDisply.innerText = allahuAkber;
  } else {
    alert("You can't added nagetive value");
  }
});

resetAllTasbih.addEventListener("click", function () {
  alhamdulilah = 0;
  allahuAkber = 0;
  subhanAllah = 0;

  allahuAkberDisply.innerText = allahuAkber;
  alhamdulilahDisply.innerText = subhanAllah;
  subhanAllahDisply.innerText = subhanAllah;
});
