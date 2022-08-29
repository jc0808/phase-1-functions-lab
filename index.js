// Code your solution in this file!

function distanceFromHqInBlocks(start){
    const blocks = 42 - start;

    return Math.abs(blocks);
};

function distanceFromHqInFeet(start){
    const feet =  (42 - start)* 264;

    return Math.abs(feet);
};

function distanceTravelledInFeet(start, destination){
    const feet = (destination - start)*264;

    return Math.abs(feet);
};

function calculatesFarePrice(start, destination){
    const feet = distanceTravelledInFeet(start, destination);

    if (feet >= 400 && feet <= 2000){
        return (feet - 400) * 0.02;
    } else if (feet > 2000 && feet < 2500){
        return 25;
    } else if (feet > 2500){
        return "cannot travel that far";
    } else {
        return 0;
    }
};

