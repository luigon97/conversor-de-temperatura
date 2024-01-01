// Coleta os valores dos inputs e armazena nas variáveis
var inputCelsius = document.getElementById('celsius');
var inputFahrenheit = document.getElementById('fahrenheit');
var inputKelvin = document.getElementById('kelvin');

// É aqui que faz rodar a função sempre que altera um valor no input
inputCelsius.addEventListener('input', function () {
    // Converte de Celsius para Fahrenheit e Kelvin
    var temperaturaCelsius = parseFloat(inputCelsius.value);
    var temperaturaFahrenheit = (temperaturaCelsius * 9 / 5) + 32;
    var temperaturaKelvin = temperaturaCelsius + 273.15;

    // Atualiza o valor do campo Fahrenheit e Kelvin
    inputFahrenheit.value = temperaturaFahrenheit.toFixed(2);
    inputKelvin.value = temperaturaKelvin.toFixed(2);
});


inputFahrenheit.addEventListener('input', function () {
    // Converte de Fahrenheit para Celsius e Kelvin
    var temperaturaFahrenheit = parseFloat(inputFahrenheit.value);
    var temperaturaCelsius = (temperaturaFahrenheit - 32) * 5 / 9;
    var temperaturaKelvin = ((temperaturaFahrenheit - 32) * 5 / 9) + 273.15;

    // Atualiza o valor do campo Celsius e Kelvin
    inputCelsius.value = temperaturaCelsius.toFixed(2);
    inputKelvin.value = temperaturaKelvin.toFixed(2);
});

inputKelvin.addEventListener('input', function () {
    // Converte de Kelvin para Celsius e Fahrenheit
    var temperaturaKelvin = parseFloat(inputKelvin.value);
    var temperaturaCelsius = temperaturaKelvin - 273.15;
    var temperaturaFahrenheit = ((temperaturaKelvin - 273.15) * 5 / 9) + 32;

    // Atualiza o valor do campo Celsius e Fahrenheit
    inputCelsius.value = temperaturaCelsius.toFixed(2);
    inputFahrenheit.value = temperaturaFahrenheit.toFixed(2);
});


function limpar() {
    inputCelsius.value = "";
    inputFahrenheit.value = "";
    inputKelvin.value = "";
}