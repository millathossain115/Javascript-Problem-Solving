// তোমাকে একটা function দেওয়া হবে called mindGame(” যা ইনপুট হিসেবে একটা positive number নিবে।")

// এখন তোমার task : তোমাকে সেই নাম্বার এর সাথে 3 গুন করে, তারপর 10 যোগ করে, তারপর 2 দিয়ে ভাগ করে, তারপর 5 বিয়োগ করে, যা আউটপুট আসবে তা return করতে হবে
// Sample Input & Output
// Input: 5
// Output: 7.5

// Input: 50
// Output: 75

// Input: 33
// Output: 49.5


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