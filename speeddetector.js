//Speed Detector Function
function speedDetector(){
      // Prompt the user to enter the speed of the car and preserve decimal numbers if any
    var carSpeed = prompt("Enter the speed of the car: ");
    var speed = parseFloat(carSpeed);
    //Check if the speed is below or above speed limit
    const speedLimit = 70;
    if (speed <= speedLimit){
        console.log(`Ok.`);
    //Assign points if speed is above speed limit
    }else {
        var points;
        var demeritPoints;
        points = (speed - 70) / 5;
        // Check if demerit points are more than 12 to display appropriate message.
        demeritPoints = Math.floor(points)
            if (demeritPoints > 12) {
            console.log(`License suspended`)
            } else {
            console.log(`Points: ${demeritPoints}`)
            }
    }
}
//Call the function
speedDetector();

