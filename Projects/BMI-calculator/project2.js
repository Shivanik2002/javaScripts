const form = document.querySelector('form')
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = "Please give a valid height"

    }else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = "Please give a valid weight"
    }else{
        // calculate
        const bmi = (weight / ((height*height)/1000)).toFixed(2)

        // Determine BMI category
        let bmiCategory;
        if (bmi < 18.6) {
            bmiCategory = "Underweight";
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            bmiCategory = "Normal weight";
        } else {
            bmiCategory = "Overweight";
        }
        // show the result
        results.innerHTML = `<span>Your BMI is ${bmi}</span><br><span>You are considered: ${bmiCategory}</span>`;
    }

});