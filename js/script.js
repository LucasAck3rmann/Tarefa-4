function gerarCorAleatoria() {
  //hex
  const hex = "0123456789ABCDEF";
  let cor = "#";
  for (let i = 0; i < 6; i++) {
    cor += hex[Math.floor(Math.random() * 16)];
  }
  return cor;
}

document.getElementById("trocarCorBtn").addEventListener("click", () => {
  const novaCor = gerarCorAleatoria();
  const boxCor = document.getElementById("boxCor");
  boxCor.style.backgroundColor = novaCor;
  boxCor.textContent = novaCor;
});
while (true) {
  console.log("oi");
}