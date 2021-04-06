const visorPrincipal = document.getElementById("visor-principal");
const visorSecundario = document.getElementById("visor-secundario");

const historyContainer = document.getElementById("history");

const historyBtn = document.getElementById("history-btn");
historyBtn.disabled = true;

const history = [];

console.log(visorPrincipal.value);
function addValue(numberValue) {
  visorPrincipal.value += numberValue;
  return visorPrincipal.value;
}
function clearVisor() {
  visorPrincipal.value = "";
  console.log("clear");
  if (history.length <= 0) {
    historyBtn.disabled = true;
  }
}
function calc() {
  const result = eval(visorPrincipal.value);
  if (
    visorPrincipal.value != "" &&
    visorSecundario.value != visorPrincipal.value
  ) {
    visorSecundario.value = visorPrincipal.value;
    history.push(`${visorPrincipal.value} = ${result}`);
    visorPrincipal.value = result;
  }
  historyBtn.disabled = false;
  console.log("calc");
}
function historyShow() {
  historyContainer.innerHTML = "";
  historyContainer.style.display = "block";
  console.log(history);
  historyContainer.innerHTML += `<h3>Histórico</h3>`;
  history.map((e) => {
    historyContainer.innerHTML += `<p>${e}</p>`;
  });
}
