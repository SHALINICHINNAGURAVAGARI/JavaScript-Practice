let userInput=" Alice Johnson   |   ALICE@exmp.COM  |   JavaScript developer and COffee Enthusiast.I Love JavaScript!   "

let parts=userInput.split("|");
// console.log(parts);

name=parts[0].trim();
// console.log(name);
// console.log(parts[0]);

// let name=parts[0].trim();
let email=parts[1].trim();
let bio=parts[2].trim();
// console.log(name);
// console.log(email);
// console.log(bio);

name=name.toUpperCase();
email=email.toLowerCase();
// console.log(name);
// console.log(email);

let likesJS=bio.includes("JavaScript");
// console.log(likesJS);

// console.log(bio.indexOf("JavaScript"));
// console.log(bio.lastIndexOf("JavaScript"));

bio = bio.replaceAll("JavaScript","JS");
console.log(bio);

let Profession=bio.slice(0,bio.indexOf("and")).trim();
console.log(bio.length);

let validEmail=email.includes("@")&&email.endsWith(".com");
console.log(validEmail);

let seperator="-".repeat(30);

let finalProfile=`
User Profile:
${seperator}
Name        : ${name.trim()}
Email       : ${email.trim()} 
LikesJS     : ${likesJS}
Profession  : ${Profession}
${seperator}
`;
console.log(finalProfile);