let rightNowTime = new Date();
let timeGapFormJanuary = rightNowTime.getTime();
// console.log(rightNowTime);
// console.log(timeGapFormJanuary);

let myTime = new Date('3-8-2004 23:45:34');
myTime = new Date('Nov-8-2004 ');
myTime = new Date('12/31/275759 23:59:59:999');
// console.log(myTime);

let day = myTime.getFullYear();
day = myTime.getMonth();
day = myTime.getDate();
day = myTime.getDay();
day = myTime.getHours();
day = myTime.getMinutes();
day = myTime.getSeconds();
day = myTime.getMilliseconds();
// console.log(day);

myTime.setFullYear(32);
myTime.setMonth(2);
myTime.setDate(2);
myTime.setHours(12);
myTime.setMinutes(32);
myTime.setSeconds(32);
myTime.setMilliseconds(324);
console.log(myTime);


