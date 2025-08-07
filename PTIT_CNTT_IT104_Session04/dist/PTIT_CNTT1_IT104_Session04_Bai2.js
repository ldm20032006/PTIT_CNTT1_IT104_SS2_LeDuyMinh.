"use strict";
const score = [8.5, 7.2, 9.0, 6.8, 7.5, 8.0, 6.9, 9.2, 7.8, 8.3];
let sum = 0;
score.forEach((scores) => {
    sum += scores;
});
const result = sum / score.length;
console.log(result);