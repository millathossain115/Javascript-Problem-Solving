// Problem 2: Finding even or odd

// তোমাকে একটা function দেওয়া হবে called evenOdd().এটা ইনপুট হিসেবে একটা string নিবে।

// এখন তোমার task: String এ total কয়টা character আছে তার উপর ভিত্তি করে আউটপুট দিতে হবে। আউটপুট হবে ‘even’ অথবা ‘odd’ ।Sample Input & Output:

// Input: ‘Phero’
// Output: odd
// Input: ‘Batch7’
// Output: even

// Input: ‘chatgpt’
// Output: odd

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
