let phoneInput = document.querySelector("#phonie");
let submitButton = document.querySelector("input[type='button']");
let displayImage = document.querySelector(".network-image img");
let smallIconDisplay = document.querySelector(".networkIcon");
let errorText = document.querySelector(".errorText");
let imagePath = "images/";
let result ="";
errorText.style.display = "";

let networks = {
    airtel: ["0907", "0708", "0802", "0902", "0812", "0808", "0701", "0901"],
    mtn: ["0803", "0816", "0903", "0810", "0806", "0703", "0706", "0813", "0814", "0906"],
    glo: ["0805", "0905", "0807", "0811", "0705", "0815"],
    etisalat: ["0909", "0908", "0818", "0809", "0817"],
}
//phoneInput.addEventListener("change", (e)=>{
submitButton.addEventListener("click", (e)=>{
    errorText.innerHTML = " ";
    if(phoneInput.checkValidity() === false){
        let p = setInterval(()=>{
            errorText.innerHTML = "Please enter a valid airtel number";
            displayImage.style.display = "none";
            smallIconDisplay.style.setProperty("--icon-image", `none`);           
        }, 500);
        setTimeout(()=>{
            clearInterval(p)
            errorText.innerHTML = "";
        },4000)
        return false;
    }
    let inputValue = phoneInput.value;
    let networkArray = Object.keys(networks);

    for(let i=0; i < networkArray.length; i++){
        
        let check = networks[networkArray[i]];
        
        for (let j=0; j < check.length; j++){
            if(inputValue.includes(check[j] || "234"+check[j].substring(1))){
                errorText.innerHTML = "";
                displayImage.style.display = "inline-block";
                displayImage.setAttribute("src", `${imagePath}${networkArray[i]}.png`);
                smallIconDisplay.style.setProperty("--icon-image", `url(${imagePath}${networkArray[i]}-small.png)`);
                return result = "True";
            }
            else if("+234"+check[j].substring(1) || "234"+check[j].substring(1)){
                errorText.innerHTML = "";
                displayImage.style.display = "inline-block";
                displayImage.setAttribute("src", `${imagePath}${networkArray[i]}.png`);
                smallIconDisplay.style.setProperty("--icon-image", `url(${imagePath}${networkArray[i]}-small.png)`);
                return result = "True";
            }
        }
        //return result = "True";
    }
   if(result == "True"){
        displayImage.style.display = "none";
        smallIconDisplay.style.setProperty("--icon-image", `none`);
        errorText.innerHTML = "Invalid Phone Number";
   }
})
