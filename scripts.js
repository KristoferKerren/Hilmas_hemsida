window.onload = (event) => {
  const färgLista = [
    "linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(255,154,0,1) 10%, rgba(208,222,33,1) 20%, rgba(79,220,74,1) 30%, rgba(63,218,216,1) 40%, rgba(47,201,226,1) 50%, rgba(28,127,238,1) 60%, rgba(95,21,242,1) 70%, rgba(186,12,248,1) 80%, rgba(251,7,217,1) 90%, rgba(255,0,0,1) 100%)",
    "rgba(253, 253, 30, 0.93)",
    "rgb(27, 235, 27)",
    "rgb(15, 195, 254)",
    "rgb(249, 121, 142)",
  ];

  let färgSiffra = 0;
  document.body.style.background = färgLista[0];
  const bytFärgKnapp = document.getElementById("byt-bakgrundsfärg-knapp");
  bytFärgKnapp.addEventListener("click", () => {
    färgSiffra = färgSiffra + 1;
    if (färgSiffra > färgLista.length - 1) {
      färgSiffra = 0;
    }
    document.body.style.background = färgLista[färgSiffra];
  });
};
