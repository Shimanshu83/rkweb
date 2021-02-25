let menu = document.getElementById("menu1");
menu.addEventListener("click", () => {
    let options = document.getElementById("menuActivated");

    if (options.style.display == "flex") {
        options.style.display = "none";

    }
    else {
        options.style.display = "flex";

    }



})

// creating a closed specification button 

// object {
//     jai  : "jai ho mai kisi ka baap toa nhi hu na " , 

// }


let readButton = document.getElementById("read-more");

readButton.addEventListener("click", () => {
    // readButton.style.color = "green" ; 
    var tableBody = document.getElementById("tbody");

    if (readButton.innerText == "Show More") {
        tableBody.innerHTML = `
        <tr>
                                
        <td>   Minimum Order Quantity</td>
        <td>1 Unit</td>
    </tr>
    <tr>
        
        <td>Capacity</td>
        <td>1,80,000 sheets / 8 hour (approx)</td>
    </tr>
    <tr>
        
        <td>Machine Type</td>
        <td>FULLY AUTOMATIC TISSUE PAPER MAKING MACHINE</td>
    </tr>
    <tr>
        
        <td>Voltage</td>
        <td>420</td>
    </tr>
    <tr>
       
        <td> Napkin Type</td>
        <td>Four Fold</td>
    </tr>
    <tr>
       
        <td>Driven Type</td>
        <td>Electric</td>
    </tr>
    <tr>
       
        <td>Brand</td>
        <td> R.K. Engineering Works </td>
    </tr>


    

    <tr>
        <td> Power Consumtion </td>
        <td> 3.75kW </td>
    </tr>
    <tr>
        <td> Parent Roll Diameter </td>
        <td> 1000 MM </td>
    </tr><tr>
        <td> Phase </td>
        <td> 3 Phase </td>
    </tr><tr>
        <td> Automation Grade </td>
        <td> Automatic </td>
    </tr><tr>
        <td> Cutting Range  </td>
        <td> 22 to 30 CM </td>
    </tr><tr>
        <td> Embodding Design </td>
        <td> AS PER CLINT REQUIREMENT </td>
    </tr><tr>
        <td> Folding Size  </td>
        <td> 30X30 </td>
    </tr><tr>
        <td> Frequency </td>
        <td>  50 Hz </td>
    </tr><tr>
        <td> Material </td>
        <td> Tissue JumboRoll</td>
    </tr><tr>
        <td> Motor Power </td>
        <td> 4 Hp </td>
    </tr><tr>
        <td> Napik Thickness </td>
        <td> 15 GSM </td>
    </tr><tr>
        <td> Power Source</td>
        <td> Electric </td>
    </tr><tr>
        <td> Warranty  </td>
        <td>  1 Year </td>
    </tr><tr>
        <td> I Deal In  </td>
        <td> New Only </td>
    </tr><tr>
        <td> Size of Napkin </td>
        <td> 22cm x 22cm,25cmx 25 cm,24x24 cm and other any size machine </td>
    </tr><tr>
        <td> Drive </td>
        <td> All Belt Drive </td>
    </tr><tr>
        <td> Tension Control </td>
        <td> Automatic tension control with motor </td>
    </tr><tr>
        <td> Band Saw </td>
        <td> Attached In Machine </td>
    </tr>
    `;

        readButton.innerText = "Show Less"
    }

    else {

        tableBody.innerHTML = `
        <tr>
                                
        <td>   Minimum Order Quantity</td>
        <td>1 Unit</td>
    </tr>
    <tr>
        
        <td>Capacity</td>
        <td>1,80,000 sheets / 8 hour (approx)</td>
    </tr>
    <tr>
        
        <td>Machine Type</td>
        <td>FULLY AUTOMATIC TISSUE PAPER MAKING MACHINE</td>
    </tr>
    <tr>
        
        <td>Voltage</td>
        <td>420</td>
    </tr>
    <tr>
       
        <td> Napkin Type</td>
        <td>Four Fold</td>
    </tr>
    <tr>
       
        <td>Driven Type</td>
        <td>Electric</td>
    </tr>
    <tr>
       
        <td>Brand</td>
        <td> R.K. Engineering Works </td>
    </tr>
`;

        readButton.innerText = "Show More"
    }


})


// quotation buttom kala kandi
// var quotation = document.getElementById("quotation"); 
// var counter = 0 ; 
// var quotationFunc = function(){
//     var obj = document.getElementById("quotation");
//     if (counter == 0){
//         obj.style.transform = "scale(1.2) ease" ;
//         counter = 1 ; 

//     }
//     else{
//         counter = 0
//         obj.style.tranform = "scale(0.8) ease" ; 
//     }
// }

// setInterval(quotationFunc,3000);




    

    
    


