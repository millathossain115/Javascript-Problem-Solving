// Problem 1: Let’s play a mind game

function mindGame(num) {

    if ((num >= 0) && (typeof (num) === "number")) {
        return result = ((((num * 3) + 10) / 2) - 5);
    }
    else {
        return "Invalid Output-Enter a Positive Number";
    }
}

mindGame(50);

// The function works as having some calculations( arithmetic operations) along with the given input and ensures input validations

// ===========================================================================

// Problem 2: Finding even or odd

function evenOdd(str) {
    let stringLength = str.length;
    if (typeof (str) !== "string") {
        return "Invalid Output";
    }
    else if ((stringLength % 2) === 0) {
        return "even";
    }
    else return "odd";
}
evenOdd("chatgpt");

//In this fucntion it returns a string value such  as "even" or "odd" according to the character count of given string input and in case of input validation it provides a message.

//============================================================================

// Problem 3: Is Less or Greater than seven

function isLGSeven(num) {

    if (typeof num === "number") {
        let diff = num - 7;
        if (diff < 7) {
            return diff;
        } else return num * 2;
    }
    else return "Invalid Input - Enter a number"
}

isLGSeven(6);

// In this function, it calculates the difference between given input and 7,when the diffrence is less then 7 it provides the difference value otherwise it provides the double value of input.It also make sures the input is valid.

//===========================================================================

// Problem 4: Finding Bad data

function findingBadData(array) {
    if (Array.isArray(array) === true) {
        let badDataArray = [];
        for (let i = 0; i < array.length; i++) {

            const element = array[i];
            if (element < 0) {
                let badData = element;
                badDataArray.push(badData);
            }
        }
        return badDataArray.length;
    }
    else return "Invalid Input - not an Array"

}

let arr = [2, -5, -7, -13];
findingBadData(arr);

//This function provided s a number that includes the amount of nagetive number of the given input as array.If the input is not an array it provides invalid input message.

//============================================================================

// Problem 5: Convert your gems into diamond

function gemsToDiamond(fnd1Gem, fnd2Gem, fnd3Gem) {
    if ((typeof fnd1Gem == "number") && (typeof fnd2Gem == "number") && (typeof fnd3Gem == "number")) {
        const firstFriendDiamond = fnd1Gem * 21;
        const secondFriendDiamond = fnd2Gem * 32;
        const thirdFriendDiamond = fnd3Gem * 43;
        const totalDiamond = firstFriendDiamond + secondFriendDiamond + thirdFriendDiamond;
        if (totalDiamond > (1000 * 2)) {
            const restDiamond = totalDiamond - 2000;
            return restDiamond;
        }
        else return totalDiamond;
    }
    else {
        return "Invalid Input";
    }
}
gemsToDiamond(1, 1, 1);

//This function works to calculate the total amount of diamond of three friends that are actually converted from their gems.Every friends gem have their indivisual conversion power.If the total amount of diamond id more the double of 1000 then it subtract 2000 from the total diamond and provide that subtract value.This function validates input only if the given input is number
