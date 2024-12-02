// WebPage Crawler In JavaScript - Exercise 1

let str = "python";
let link = document.links;
let href;
let flag = 1;


Array.from(link).forEach(function (elements) {
    if (String(elements).includes(str)) {
        console.log(String(elements));       // Written by SayanBanerjee
        flag = 0;
    }

  /*  href = elements.href;
    if (href.includes(str)) {   // Written by CodeWithHarry
        console.log(href);
    }
  */
})

if (flag) {
    console.log(`No links has been found with ${str} in it.`);
}