//Net Salary Calculator Function
  function netSalaryCalculator(){
   // Prompt the user to enter basic salary and preserve decimal numbers if any
   var salary = prompt("Please Enter your basic salary: ");
   var basicSalary = parseFloat(salary);

   // Prompt the user to enter total amount of allowances and preserve decimal numbers if any
   var allowance = prompt("Enter total amount of allowances: ");
   var totalAllowances = parseFloat(allowance);

   // Prompt the user to enter total amount of retirement benefits excluding NSSF
   // and preserve decimal numbers if any
   var benefit = prompt("Enter total amount of retirement/pension contributions excluding NSSF: ");
   var contributionBenefit = parseFloat(benefit);

    //Calculate Gross Salary
    var grossSalary;
    grossSalary = basicSalary + totalAllowances;

  //NSSF Calculator based on gross salary so as to get taxable pay
    var NSSF;
    if (grossSalary >= 18000){
        NSSF = 1080;
    }else if (grossSalary >= 14000){
        NSSF = 840;
    }else if (grossSalary >= 10000){
        NSSF = 600;
    }else if (grossSalary >= 6000){
        NSSF = 360;
    }else if (grossSalary >= 4500){
        NSSF = 270;
    }else if (grossSalary >= 3000){
        NSSF = 180;
    }else {
        NSSF = 0;
    }
    
    //Calculate Taxable Pay
    var taxablePay;
    taxablePay = grossSalary - (NSSF + contributionBenefit);

    //PAYE Calculator
    if (taxablePay <= 24000){
        PAYE = 0;
    }else if (taxablePay > 24000 && taxablePay <= 32333){
        PAYE = (0.1*24000) + (0.25 * (taxablePay-24000));
    }else if (taxablePay > 32333 && taxablePay <= 500000){
        PAYE = (0.1*24000) + (0.25*8333) + (0.3*(taxablePay-32333));
    }else if (taxablePay > 500000 && taxablePay <= 800000){
        PAYE = (0.1*24000) + (0.25*8333) + (0.3*467667) + (0.325*(taxablePay-500000));
    }else {
        PAYE = (0.1*24000) + (0.25*8333) + (0.3*467667) + (0.325*800000) + (0.35*(taxablePay-800000));
    }

    //NHIF Calculator based on gross salary
    var NHIF;
    if (grossSalary > 99999){
        NHIF = 1700;
    }else if (grossSalary > 89999){
        NHIF = 1600;
    }else if (grossSalary > 79999){
        NHIF = 1500;
    }else if (grossSalary > 69999){
        NHIF = 1400;
    }else if (grossSalary > 59999){
        NHIF = 1300;
    }else if (grossSalary > 49999){
        NHIF = 1200;
    }else if (grossSalary > 44999){
        NHIF = 1100;
    }else if (grossSalary > 39999){
        NHIF = 1000;
    }else if (grossSalary > 34999){
        NHIF = 950;
    }else if (grossSalary > 29999){
        NHIF = 900;
    }else if (grossSalary > 24999){
        NHIF = 850;
    }else if (grossSalary > 19999){
        NHIF = 750;
    }else if (grossSalary > 14999){
        NHIF = 600;
    }else if (grossSalary > 11999){
        NHIF = 500;
    }else if (grossSalary > 7999){
        NHIF = 400;
    }else if (grossSalary > 5999){
        NHIF = 300;
    }else {
        NHIF = 150;
    }
    //calculate relief on NHIF
    var relief;
    relief = 0.15 * NHIF;

    //PAYE to be deducted after reliefs
    const personalRelief = 2400;
    var newPAYE;
    newPAYE = PAYE - (personalRelief + relief)
    
    //Housing Levy Calculator based on gross salary
    var housingLevy;
    housingLevy = 0.015 * grossSalary;

    //calculate deductions
    var deductions;
    deductions = newPAYE + housingLevy + NHIF;

    //calculate Net Salary
    var netSalary;
    netSalary = taxablePay - deductions;

    //Display the net Salary
    console.log(`\n
    Your Gross Salary is ${grossSalary}\n
    Deductions: \n
    PAYE = ${newPAYE}\n
    NHIF = ${NHIF}\n
    NSSF = ${NSSF}\n
    Housing Levy = ${housingLevy}\n
    Pension Contribution = ${contributionBenefit}\n
    The Net Salary is ${netSalary}`)
 }
 //Call the function
 netSalaryCalculator();