function calculate(){
    let wvalue = weight.value
    let hvalue = height.value
    let BMI = wvalue / ( hvalue * hvalue )
    if(weight.value== ""  ){
        alert("Please input your measurments")
    }else if(height.value == ""){
        alert("Please input your measurments")
    }


    let segment =""
    if(BMI>18.5){
        segment = "Under Weight"
    }else if(BMI<18.6 && BMI>24.9){
        segment = "Healthy weight"
    }else if(BMI<=25 && BMI>29.9){
        segment = "Over weight"
    }else if(BMI<30)
        segment = "Obesity"
        
    result.innerHTML=`
         <span class="text-primary">Your BMI is <br> ${BMI} </span>

    `
    
    category.innerHTML=`
                        <span class="text-light"> You are in ${segment}</span>

    `
}



