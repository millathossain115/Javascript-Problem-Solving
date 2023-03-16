// Problem 4: Finding Bad data

// 1.তোমাকে একটা function দেওয়া হবে called findingBadData().এটা ইনপুট হিসেবে একটা array নিবে।

//  2.array তে যেকোনো সংখ্যক কতগুলো number থাকবে। number গুলো negative number(less than zero) ও হতে পারে, আবার positive number(greater than or equal to zero) ও হতে পারে।

//  3.কোনও number যদি negative হয় সেটাকে আমরা বলব “Bad Data”. কোনও number যদি positive হয় সেটাকে আমরা বলব “Good Data”.

// এখন তোমার task: array তে কতগুলো Bad data আছে সেটা খুঁজে বের করতে হবে এবং সেই নাম্বার টা return করতে হবে।

// Sample Input & Output: -
// Input: [1, 2, 5]
// Output: 0

// Input: [2, -5, -7, -13]
// Output: 3

// Input: [-4, -9, -5, -33, -55]
// Output: 5


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
