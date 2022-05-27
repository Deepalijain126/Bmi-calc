
document.getElementById("btn").addEventListener("click", result);

function result(){
    let height = parseInt(document.querySelector("#height").value);
    let weight = parseInt(document.querySelector("#weight").value);
    let result = document.querySelector("#ans");
    let  bmi = (weight / ((height * height) 
    / 10000)).toFixed(2);
    

// Dividing as per the bmi conditions
if (bmi < 18.6) result.innerHTML =
`Under Weight : <span>${bmi}</span>`;

else if (bmi >= 18.6 && bmi < 24.9) 
result.innerHTML = 
`Normal : <span>${bmi}</span>`;

else result.innerHTML =
`Over Weight : <span>${bmi}</span>`;
   
};


