//Net Salary Calculator Function
  function netSalaryCalculator(){
    // Prompt the user to enter basic salary and preserve decimal numbers if any
  var basicSalary = prompt("Please Enter your basic salary: ");
  var marks = parseFloat(basicSalary);

  //NSSF Calcultor based on basic salary so as to get taxable pay
    var NSSF;
    if (basicSalary >= 18000){
        NSSF = 1080;
    }else if (basicSalary >= 14000){
        NSSF = 840;
    }else if (basicSalary >= 10000){
        NSSF = 600;
    }else if (basicSalary >= 6000){
        NSSF = 360;
    }else if (basicSalary >= 4500){
        NSSF = 270;
    }else if (basicSalary >= 3000){
        NSSF = 180;
    }else {
        NSSF = 0;
    }
    //Calculate Taxable Pay
    var taxablePay;
    taxablePay = basicSalary - NSSF;

    //PAYE Calculator
    if (taxablePay > 800000){
        PAYE = 0.35 * taxablePay
    }else if (taxablePay > 500000){
        PAYE = 0.325 * taxablePay
    }else if (taxablePay > 32333){
        PAYE = 0.3 * taxablePay
    }else if (taxablePay > 24000){
        PAYE = 0.25 * taxablePay
    }else {
        PAYE = 0
    }

    //calculate Net Salary
    var netSalary;
    netSalary = basicSalary - PAYE;

    //Display the net Salary
    console.log(`Your Net Salary is ${netSalary}`)
 }
 //Call the function
 netSalaryCalculator();