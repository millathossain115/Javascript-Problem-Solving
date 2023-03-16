// Problem 3: Is Less or Greater than seven

// তোমাকে একটা function দেওয়া হবে called “isLGSeven()”. এটা ইনপুট হিসেবে একটা number নিবে।

// এখন তোমার task: তোমাকে ইনপুট ভ্যালু এবং ৭ এর মধ্যে পার্থক্য বের করতে হবে। যদি এই পার্থক্য ৭ এর চেয়ে ছোট হয়, তখন তোমাকে return করতে হবে সেই বিয়োগফল। নাহলে তোমাকে return করতে হবে double of the input। মানে যে সংখ্যা ইনপুট হিসেবে নিয়েছো সেটির দ্বিগুণ।
// Input: 6
// Output: -1
// Input: -15
// Output: -22
// Input: 15
// Output: 30


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