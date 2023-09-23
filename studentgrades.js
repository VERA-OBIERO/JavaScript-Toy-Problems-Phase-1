// Student Grade Generator Function
function calculateStudentGrade() {
  
  // Prompt the user for student marks and preserve decimal numbers if any
  var studentMarks = prompt("Enter student marks (between 0 and 100): ");
  var marks = parseFloat(studentMarks);

  // Check if the input is a number between 0 and 100
  if ( marks >= 0 && marks <= 100) {
    
    // Determine the grade based on the marks
    var grade;
    if (marks > 79) {
      grade = "A";
    } else if (marks >= 60) {
      grade = "B";
    } else if (marks >= 50) {
      grade = "C";
    } else if (marks >= 40) {
      grade = "D";
    } else {
      grade = "E";
    }
  
    // Display the grade to the user
    console.log (`The student's grade is ${grade}`);
   } else {
    
    // if input is invalid dislay the following
    console.log(`Please enter a number between 0 and 100.`);
  }
}

// Call the function 
calculateStudentGrade();