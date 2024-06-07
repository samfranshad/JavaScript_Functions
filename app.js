console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count){
    if (count < 0){
       for (let i = -1; i >= count; i--){
            if(i%2 !== 0){
                console.log(i);
            }
        }
    }
    else{
        for(let i = 1; i <= count; i++){
            if(i%2 !== 0){
                console.log(i);
            }
        }
    }
}

printOdds(-10);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName = "user", age = 0){
    let aboveSixteen = `Congrats ${userName}, you can drive!`;
    let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;

    if(age < 16){
        console.log(belowSixteen);
    }
    else{
        console.log(aboveSixteen);
    }
}

checkAge();

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

function whichQuadrant(xCoordinate = 0, yCoordinate = 0){
    if(xCoordinate > 0 && yCoordinate > 0){
        console.log(`(${xCoordinate}, ${yCoordinate}) is in Quadrant 1`);
    }else if (xCoordinate < 0 && yCoordinate > 0){
        console.log(`(${xCoordinate}, ${yCoordinate}) is in Quadrant 2`);
    }else if (xCoordinate < 0 && yCoordinate < 0){
        console.log(`(${xCoordinate}, ${yCoordinate}) is in Quadrant 3`);
    }else if (xCoordinate > 0 && yCoordinate < 0){
        console.log(`(${xCoordinate}, ${yCoordinate}) is in Quadrant 4`);
    }else if (xCoordinate === 0 && yCoordinate === 0){
        console.log(`(${xCoordinate}, ${yCoordinate}) is the origin`);
    }else if (xCoordinate === 0){
        console.log(`(${xCoordinate}, ${yCoordinate}) is on the y axis`);
    }else if (yCoordinate === 0){
        console.log(`(${xCoordinate}, ${yCoordinate}) is on the x axis`);
    }
}

whichQuadrant();

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

function triangleType (sideOne = 0, sideTwo = 0, sideThree = 0){
    if ((sideOne + sideTwo) > sideThree || (sideOne + sideThree) > sideTwo || (sideTwo + sideThree) > sideOne){
        if(sideOne !== sideTwo && sideOne !== sideThree && sideTwo !== sideThree){
                console.log(`Sides ${sideOne}, ${sideTwo}, ${sideThree} make a scalene triangle`);
            }else if ((sideOne === sideTwo && sideOne !== sideThree) || (sideOne === sideThree && sideOne !== sideTwo) || (sideTwo === sideThree && sideTwo !== sideOne)){
                console.log(`Sides ${sideOne}, ${sideTwo}, ${sideThree} make an isosceles triangle`);
            }else if (sideOne === sideTwo && sideOne === sideThree){
                console.log(`Sides ${sideOne}, ${sideTwo}, ${sideThree} make an equilateral triangle`);
            }
    }else
    {
        console.log(`Sides ${sideOne}, ${sideTwo}, ${sideThree} do not make a triangle`);
    }

}

triangleType(2,3,4);

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

function dataStatus (planLimit = 0, day = 0, usage = 0){
    let expectedDailyUse = Math.round((planLimit / 30) * 1000)/1000 ;
    let actualDailyUse = Math.round((usage / day) * 1000)/1000;
    let expectedExcess = Math.round(((actualDailyUse * 30) - planLimit) * 1000)/1000;
    let suggestedUse = Math.round(((planLimit - usage) / (30 - day)) * 1000)/1000;
    
    if(actualDailyUse > expectedDailyUse){
        console.log(`${day} days used, ${30 - day} days remaining
Average daily use: ${expectedDailyUse} GB/day
You are EXCEEDING your average daily use (${actualDailyUse} GB/day), continuing this high usage, you'll exceed your data plan by ${expectedExcess} GB.
To stay below your data plan, use no more than ${suggestedUse} GB/day.`);
    } else {
        console.log(`${day} days used, ${30 - day} days remaining
Average daily use: ${expectedDailyUse} GB/day
You are below your average daily use (${actualDailyUse} GB/day).
To continue to stay below your data plan, use no more than ${suggestedUse} GB/day.`);
    }
}

dataStatus(100, 15, 56);
