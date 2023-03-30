
let result = document.getElementById("calculateBtn");
result.addEventListener("click", bmi);

function bmi() {
    let weight = document.getElementById("weightInput").value;
    let height = document.getElementById("heightInput").value;    
    let bmi = weight/ height**2;
    bmi = bmi.toFixed(2);
    document.getElementById('result').innerHTML = bmi;
}

