// Problem 5: Convert your gems into diamond

// তোমাকে একটা function দেওয়া হবে called gemsToDiamond().এটা ইনপুট হিসেবে তিনটা number(তোমাদের ৩ বন্ধুর gems এর সংখ্যা) নিবে।

// ১ম বন্ধুর প্রতি gems এর ক্ষমতা = 21
// ২য় বন্ধুর প্রতি gems এর ক্ষমতা = 32
// ৩য় বন্ধুর প্রতি gems এর ক্ষমতা = 43

// [gems এর ক্ষমতা বলতে একটা gems কে কয়টা diamond এ convert করা যাবে সেটা বুঝানো হচ্ছে। ]
// এখন তোমার task: সব বন্ধুর gems মিলিয়ে total কতটি diamond পাবে সেটা বের করতে হবে।
// total diamond এর সংখ্যা যদি 1000 এর দিগুন 2000 এর উপর হয়ে যায় সেক্ষেত্রে total diamond থেকে 2000 বাদ দিয়ে যতগুলো diamond অবশিষ্ট থাকবে, ততগুলো তোমরা পাবে।
// Sample Input & Output: -

// Input: 1, 1, 1
// Output: 96
// Input: 20, 200, 50
// Output: 6970
// Input: 100, 5, 1
// Output: 303

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

// console.log(gemsToDiamond(1, 1, 1));
// console.log(gemsToDiamond(20, 200, 50));
// console.log(gemsToDiamond(100, 5, 1));
// console.log(gemsToDiamond("100", "7", 1));