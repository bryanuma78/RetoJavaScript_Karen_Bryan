function calcularPorcentaje() {
  const porcentaje = document.getElementById('porcentaje').value;
  const numero = document.getElementById('numero').value;
  const resultado = (porcentaje / 100) * numero;
  document.getElementById('resultado').innerText = resultado;
}

document.getElementById('calcularBtn').addEventListener('click', calcularPorcentaje);