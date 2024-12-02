//Strings_Properties_Methods_TemplateLiterals.

let name = "Sayan";
let greeting = "Good morning";
console.log(name + ' ' + greeting);

let html = "<h1> this is Heading </h1> "
            + "<p> this is Para </p>";
html = html.concat(" lol","omg");
console.log(html);
console.log(html.length);
console.log(html.toLowerCase());
console.log(html.toUpperCase());
console.log(html[0]);
console.log(html.indexOf('<'));
console.log(html.lastIndexOf('<'));
console.log(html.charAt(45));
console.log(html.endsWith('omg'));
console.log(html.includes('lol'));
console.log(html.substring(4,9));
console.log(html.slice(-4));
console.log(html.slice(0,6));
console.log(html.split('<'));
console.log(html.replace("this","it"));// This will replace the first this

// Templete Literals
let fruit1 = "Apple";
let fruit2 = "Orange";
let myhtml = `Hello ${name}
<h1>This is heading</h1>
<p>I like ${fruit1} and ${fruit2}</p>`;
document.body.innerHTML = myhtml;