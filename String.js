// Series of Characters are called Strings!
// let s1="Shalini";
// let s2='Shalini';
// let greeting=`Hi, ${s2}`;
// console.log(greeting);

// let s1="JavaScript";
// let s2="JAVA";
// console.log(s1==s2);
// let s3="java";
// console.log(s2==s3);

// let s4="JavaScript";
// let s5="JavaScript";
// console.log(s4==s5);


//Strings are immutable
// let s4="JavaScript";
// let s5="JavaScript";
// let s6=new String("JavaScript");
// console.log(s4===s6);
// console.log(typeof s4);
// console.log(typeof s5);
// console.log(typeof s6);
// console.log(s4[2]);

//Immutable Strings-Concatenation using operator called "+""
// let s1="Java";
// let s2="Script";
// let s3=s1+s2
// console.log(s3);

// let s1="Java";
// let s2="Script";
// let s3="Java"+"Script"
// console.log(s3);

//Immutable Strings-Concatenation using mehtod called concat()
// let s1="Java";
// let s2="Script";
// let s3=s1.concat(s2);
// let s4="Java".concat(s2);
// let s5=S.concat("Script");
// console.log(s3);

// let s1="cat";
// console.log(s1[0]);
// console.log(s1.charAt[0]);
// s1[0]="b";
// console.log(s1);

//How can a String be modified using concatenation??
let s1="cat";
s1="b"+s1.slice(1);
console.log(s1);