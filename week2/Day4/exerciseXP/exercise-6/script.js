function hotelCost() {
    while (true) {
        let nights = parseInt(prompt("How many nights do you want to stay in the hotel?"));
        if (!isNaN(nights)) {
            return nights * 140;
        } else {
            alert("Please enter a valid number.");
        }
    }
}

function planeRideCost() {
    while (true) {
        let destination = prompt("Enter your destination:");
        if (destination.toLowerCase() === "london") {
            return 183;
        } else if (destination.toLowerCase() === "paris") {
            return 220;
        } else {
            return 300;
        }
    }
}

function rentalCarCost() {
    while (true) {
        let days = parseInt(prompt("How many days do you want to rent a car?"));
        if (!isNaN(days)) {
            let costPerDay = 40;
            let totalCost = days * costPerDay;
            if (days > 10) {
                totalCost *= 0.95; 
            }
            return totalCost;
        } else {
            alert("Please enter a valid number.");
        }
    }
}

function totalVacationCost() {
    let hotelCostResult = hotelCost();
    let planeCostResult = planeRideCost();
    let carCostResult = rentalCarCost();

    let totalCost = hotelCostResult + planeCostResult + carCostResult;

    alert(`The hotel cost: $${hotelCostResult}, the plane tickets cost: $${planeCostResult}, the car rental cost: $${carCostResult}.`);
    alert(`Total vacation cost: $${totalCost}`);
}


totalVacationCost();
