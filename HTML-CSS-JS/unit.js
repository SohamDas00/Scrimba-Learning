const button = document.querySelector(".button")

const para1=document.querySelector(".sub-para-1")
const  para2=document.querySelector(".sub-para-2")
const para3=document.querySelector(".sub-para-3")


button.addEventListener("click", () => {
    const input = document.querySelector(".input")
    const input_value = input.value;
    
    const convMetertoFeet=(input_value*3.28084).toFixed(3);
    const convFeettoMeter=(input_value*0.3048).toFixed(3);
    const convLitertoGalon=(input_value*0.264172).toFixed(3);
    const convGalontoLiter=(input_value*3.78541).toFixed(3);
    const convKilotoPound=(input_value*2.2).toFixed(3);
    const convPoundtoKilo=(input_value*0.45359237).toFixed(3);

    para1.innerHTML=`${input_value} Meters = ${convMetertoFeet} Feet | ${input_value} Feet = ${convFeettoMeter} Meters`
    para2.innerHTML=`${input_value} Liters = ${convLitertoGalon} Gallons | ${input_value} Gallons = ${convGalontoLiter} Liters`
    para3.innerHTML=`${input_value} kilos = ${convKilotoPound} pounds | ${input_value} pounds = ${convPoundtoKilo} kilos`
})