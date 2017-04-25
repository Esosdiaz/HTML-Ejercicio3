
function convertirCelsius(element){
var celsius = document.getElementById("celsius").value;
var fahreinheit = ((celsius*9)/5)+32;
document.getElementById("fahreinheit").value = fahreinheit;
}