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

    //NHIF Calculator based on basic salary
    var NHIF;
    if (basicSalary > 99999){
        NHIF = 1700;
    }else if (basicSalary > 89999){
        NHIF = 1600;
    }else if (basicSalary > 79999){
        NHIF = 1500;
    }else if (basicSalary > 69999){
        NHIF = 1400;
    }else if (basicSalary > 59999){
        NHIF = 1300;
    }else if (basicSalary > 49999){
        NHIF = 1200;
    }else if (basicSalary > 44999){
        NHIF = 1100;
    }else if (basicSalary > 39999){
        NHIF = 1000;
    }else if (basicSalary > 34999){
        NHIF = 950;
    }else if (basicSalary > 29999){
        NHIF = 900;
    }else if (basicSalary > 24999){
        NHIF = 850;
    }else if (basicSalary > 19999){
        NHIF = 750;
    }else if (basicSalary > 14999){
        NHIF = 600;
    }else if (basicSalary > 11999){
        NHIF = 500;
    }else if (basicSalary > 7999){
        NHIF = 400;
    }else if (basicSalary > 5999){
        NHIF = 300;
    }else {
        NHIF = 150;
    }

    //Housing Levy Calculator based on basic salary
    var housingLevy;
    housingLevy = 0.015 * basicSalary;

    //calculate deductions
    var deductions;
    deductions = PAYE + housingLevy + NHIF;

    //calculate Net Salary
    var netSalary;
    netSalary = basicSalary - deductions;

    //Display the net Salary
    console.log(`Your Net Salary is ${netSalary}`)
 }
 //Call the function
 netSalaryCalculator();