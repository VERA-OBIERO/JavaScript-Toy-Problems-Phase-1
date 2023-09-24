 //Net Salary Calculator Function
 function netSalaryCalculator(){
    // Prompt the user to enter basic salary and preserve decimal numbers if any
  var basicSalary = prompt("Please Enter your basic salary: ");
  var marks = parseFloat(basicSalary);

    //PAYE Calculator
    if (taxablePay > 800000){
        PAYE = 0.35 * taxablePay;
    }else if (taxablePay > 500000){
        PAYE = 0.325 * taxablePay;
    }else if (taxablePay > 32333){
        PAYE = 0.3 * taxablePay;
    }else if (taxablePay > 24000)(
        PAYE = 0.25 * taxablePay;
    )else {
        PAYE = 0;
    }
 }