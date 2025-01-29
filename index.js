document.getElementById("subBtn").onclick = function(){

    let amount = document.getElementById("amountV").value;
    let result = document.getElementById("resultUnit").value;

    if(document.getElementById("conUsd").checked){
        result = amount * 0.012 ;
        result = result.toFixed(2);
        document.getElementById("resultUnit").value = result;
        document.getElementById("resultLBL").textContent = "USD";
    }

    else  if(document.getElementById("conCD").checked){
        result = amount * 0.017 ;        
        result = result.toFixed(2);
        document.getElementById("resultUnit").value = result;
        document.getElementById("resultLBL").textContent = "CD";
    }

    else  if(document.getElementById("conCHID").checked){
        result = amount * 0.083 ;
        result = result.toFixed(2);
        document.getElementById("resultUnit").value = result;
        document.getElementById("resultLBL").textContent = "YUAN";
    }
    else  if(document.getElementById("conJAD").checked){
        result = amount * 1.79 ;
        result = result.toFixed(2);
        document.getElementById("resultUnit").value = result;
        document.getElementById("resultLBL").textContent = "YAN";
    }
    else  if(document.getElementById("conRR").checked){
        result = amount * 1.15 ;
        result = result.toFixed(2);
        document.getElementById("resultUnit").value = result;
        document.getElementById("resultLBL").textContent = "RUBEL";
    }
    else{
        document.getElementById("resultLBL").textContent = "Plz select something";  
    }
}