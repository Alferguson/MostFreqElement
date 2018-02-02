`use strict`

// write a func that fins the most feq element in an arr

function mostFreqFunc(arr) {
    let firstCounter = 1;
    let realNumber = "none";
    // let compareNumber;
    for (let i = 0; i < arr.length; i++) {
        let counter = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) counter++;
        }
        if (counter > firstCounter) {
            firstCounter = counter;
            realNumber = arr[i];
        }
        else if (counter === firstCounter && counter !== 1 && realNumber !== arr[i]) {
            realNumber = "none, there are many freq numbers";
        }
    }
    console.log(`The most freq number is ${realNumber}`);
    console.log(`---------------------`);
};

const arr1 = [1,2,1,1,1,1,0];
const arr2 = [1,2,3];
const arr3 = [3,2,1111,3,2,3];
const arr4 = [3,3,3,1,1,1];
const arr5 = [3,2,3,2,5];
const arr6 = [3,3,3,2,2,2,4,4,4,4];

mostFreqFunc(arr1);
mostFreqFunc(arr2);
mostFreqFunc(arr3);
mostFreqFunc(arr4);
mostFreqFunc(arr5);
mostFreqFunc(arr6);


