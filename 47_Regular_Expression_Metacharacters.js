console.log('This is tutorial 47');

let regex = /harrsdfgy/;
// Lets look into some metacharacter symbols
regex = /^harrdc/; // ^ means expression will match if string starts with
regex = /harry$/; // $ at the end of the string means "string ends with"
regex = /h.rry/; // There can be any one character at the position of '.'
regex = /h*rry/; // There can be 0 or more characters at the position of '*'
regex = /ha?rryi?t/; // '?' after character means that character is optional
regex = /h\*rry/

let str = "h*rry means codewith"; // 

let result = regex.exec(str);
console.log("The result from exec is ", result);

if(regex.test(str)){
    console.log(`The string ${str} matches the expression ${regex.source}`);
}
else{
    console.log(`The string ${str} does not match the expression ${regex.source}`);
}
