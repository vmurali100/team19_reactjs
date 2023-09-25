//alert("welcome to js")
//shift alt down arrow to get duplicate
//shift ctrl j to get console
console.log("welcome to js");
console.log(1234);
console.log(13.5);
console.log(true);
console.log([23,45,68,90]);
console.log({fname:'lucky', age:25});
console.table({fname:'lucky', age:25});
console.error('Custom sample error');
console.warn('Custom sample error');
console.clear();
console.time('timer');
for(i=0; i<1000; i++)
{
    console.log(i);
}
console.timeEnd('timer');
var a=25;
var b=15;
console.log(a+b);


//var is a global scope where it can be accessed in and out
//but let and const is not a global scope where is can be accessed only inside
if(true)
{
    //var msg='welcome to js';
    //let msg='lucky';
    const msg='lucky';
    console.log(msg);
}
//console.log(msg);

//variable redeclaration
    /*var a=25;
    console.log(a);

    var a=45;
    console.log(a);*/
//in var we can declare same value more than 1 time

let p=25;
console.log(p);

// let a=45;
// console.log(a);
//in let and const we cant redeclare same value...we can use the value only for 1 time

//value assigment
var a=24;
console.log(a);
a=10;
console.log(a);


let n=34;
console.log(n);
n=54;
console.log(n);


/*const m=23;
console.log(m);
m=0;
console.log(m);*/
//value can be reassigned in var and let but value cannot be reassigned in const

const student={sname:'lucky', age:12};
console.table(student); 
student.name='cj';
console.table(student);
//but value can be reassigned by const in object

//js is dynamic programming language
//single line comment
//multiline comment
//1byte=8bits
//datatypes
//string, number, boolean, null, undefined, symbols E6...................primitive dataypes
var a=24;
console.log(typeof a);
var fname='lucky';
console.log(typeof fname);
var phone=null;
console.log(typeof phone);
var ismarried=true;
console.log(typeof ismarried);
let l;
console.log(typeof l);

/*const s1=Symbol(s) //dlkybjigbj
console.log(s1);

const s2=symbol(s)
console.log(s2);

console.log(s1==s2);*/

var courses=['c', 'c++', 'java']
console.log(typeof courses);

var d=new Date();
console.log(d);
console.log(typeof d);

//type conversion
//to string
a=23;
console.log(a,typeof a);
a=String(a);
console.log(a,typeof a);

a=true;
console.log(a,typeof a);
a=String(a);
console.log(a,typeof a);

a=new Date();
console.log(a,typeof a);
a=String(a);
console.log(a,typeof a);

a=[1,2,3,4];
console.log(a,typeof a);
a=String(a);
console.log(a,typeof a);

a=true;
console.log(a,typeof a);
a=a.toString();
console.log(a,typeof a);

//string to number
a='124';
console.log(a,typeof a);
a=Number(a);
console.log(a,typeof a);

//boolean to number
a=true;
console.log(a,typeof a);
a=Number(a);
console.log(a,typeof a);

//string and array to number
a=[1,2,3,4];
console.log(a,typeof a);
a=Number(a);
console.log(a,typeof a);

a="lucky";
console.log(a,typeof a);
a=Number(a);
console.log(a,typeof a);

a="23.3";
console.log(a,typeof a);
a=parseInt(a);
console.log(a,typeof a);

a='23.5';
console.log(a,typeof a);
a=parseFloat(a);
console.log(a,typeof a);

//type coercion
a='25';
b=10;
console.log(a+b);

a=Number(a);
b=10;
console.log(a+b);

//arithmetic operation
let f=10;
g=10;
h=f+g;
h=f-g;
h=f*g;
h=f**g;
h=f/g;
h=f%g;
j=2**3;
h=++g;
h=--f;
console.log(j);
console.log(h);

//assignment operators
a=5;
//a=a+4;
a+=4;
a*=4;
//a/=4;
console.log(a);

//math functions
let v;
v=Math.PI;
v=Math.E;
v=Math.round(5.8);//to get round figure number 6
v=Math.round(5.3);//5
v=Math.floor(4.9);//remove decimal 4
v=Math.ceil(3.5);//increase one number 4
v=Math.sqrt(2);//1.414...
v=Math.abs(-2);//changes negative to positive
v=Math.trunc(2.58);//gets only integer value 2
v=Math.pow(2,4);//power of 2*4
v=Math.min(2,4,5,6);//2
v=Math.max(2,4,5,6);//6
v=Math.random();//gives random number
v=Math.floor(Math.random()*50+1);//gives random number below 50
v=Math.sign(23);//tells positive or negative 
v=Math.sin(24);
v=Math.tan(24);
v=Math.cos(24);
v=Math.log(24);
v=Math.log2(24);
console.log(v);

//comparison operators
let x=10;
y='10';
console.log(x==y);//checks only the data
console.log(x===y);//checks data with datatype also
console.log(x!=y);//if data is equal false if data is not equal true

//relational operators 
/*
<, >, >=, <=,
*/

let r=20;
t=30;
console.log("greater : ",r>t);
console.log("lesser : ",r<t);
console.log(r>=t);
console.log(r<=t);

//logical operators
//logical and or not

let mark=45;
console.log(mark>35 && mark<=100);//and 

let u=5;
//console.log(a==2 11 a==5); or operator

i=8;
console.log(!i);

//strict equality or identity operator

//conditional or ternary operator
const age=15;
const result=age>=18?'eligible':'not eligible'  ;
console.log(result);

//handling null values
function welcome(name){
    const result=name?name:'no name';
    console.log('welcome '+result);
}
welcome();
welcome(null);
welcome('lucky');

user={'name':'lucky', 'age':25};
console.log(user);
console.log(user.name);

const greeting=(user)=>{
    const name=user.name?user.name:'no name'
    return 'hello '+name;
}
console.log(greeting(user));


const avg=90;
const grade=age>=90? 'a grade': 'no grade';
console.log(grade);

const aveg=85;
const gradee=aveg>=90?'a grade': aveg>=80? 'b grade': 'c grade';
console.log(gradee);

//bitwise operator
//and operator if one is 0 then result also 0
//in or operator if any one condition is true then result also true
//AND
let z=24;//0001 1000
let q=12;//0000 1100
console.log(z&q);//8

/*
0001 1000            12 8 4 2 1
0000 1100
----------
0000 1000
*/

z&=q;// find the bitwise binary number of z and q and store the result in z
console.log(z);//8
//OR
a=12;
b=24;
// console.log(a or b);
//NOTk
a=25;
console.log(~a);
//bitwise xor
a=2;//10
b=3;//11
console.log(a^b);//1
//same number means 0 different means 1
/*

10
11
---
01
*/

//leftshift
a=5;
b=2;
console.log(a<<b);
a<<=b;
console.log(a);

//rightshift
a=8;
b=2;
console.log(a>>b);
a>>=b;
console.log(a);

//nullish coalescing operator
const k=null??'no value';
console.log(k);

const e=23??45;
console.log(e);

const use={'name':'lucky'};
console.log(use);
console.log(use.name);
use.city??='salem';//if use.city is there it gives city or it gives salem
console.log(use.city);
console.log(use);

//increament or decreament operator
a=5;
a++;
console.log(a);

a=5;
--a;
console.log(a);

let o=3;
const s=o++;//first s assign the value of o i.e 3 and gives result and then o gets increased and then asssigned as 0=4
console.log(o,s);//4 3

// postfix increament a++   first assign the value and then increament
//prefix increament ++a    first increament the value and then assign value

let w=3;
const m=++w;
console.log(w,m);

//if statement
 /*let agee=prompt('enter your age');
 if (agee!=null &&  agee>=18){
    console.log('you are eligible to vote');
 }
else{
    console.log('you are not eligible');
}*/

//else if
let number=0;
if(number>0){
    console.log('number is positive');
}
else if(number<0){
    console.log('number is negative');
}
else{
    console.log('number is 0')
}

//nested if statement
let english=90, maths=95, tamil=70;
let total=english+maths+tamil;
let average=total/3;
console.log(total);
console.log(average.toFixed(2));

if(english>=35 && maths>=35 && tamil>=35){
    console.log('result: pass');
    if(average>90 && average<=100)
    {
        console.log('grade: A grade');
    }
    else if(average<90 && average>=80)
    {
        console.log('grade: B grade');
    }
    else if(average<80 && average>=70)
    {
        console.log('grade: C grade');
    }
    else{
        console.log('grade: D grade')
    }
}
else{
    console.log('result: fail');
    console.log('grade: no grade');
}

//switch statement

let num=3;
switch(num)
{
    case 1:
        console.log('one');
        break;
    case 2:
        console.log('two');
        break;   
    case 3:
        console.log('three');
        break;   
    default:
        console.log('invalid input') ;
        break;
}

//combining cases statement
let letter='p';
switch(letter)
{
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
    case 'A':
    case 'E':
    case 'I':
    case 'O':
    case 'U':
        console.log('letter is a vowel');
        break;
     default:
        console.log('letter is a not vowel');  
        break;  
}
b=new Date();
console.log(b);
//looping statement
//while loop


let ik=1;
while(ik<=10){
    console.log(ik);
    ik++;
}

let names =['ram','sam','lucky','cj'];
console.log(names[0]);

//do-while
/* 
do{
    code to be executed if the condition is true
}
while(condition);
*/

let table=2; limit=5; i=1;
do{
    console.log(table+'x'+i+'='+(table*i));
    i++;
}while(i<=limit);

//forloop
/*
for(initialize variable; condition; statement){
    code to be executed
}
*/
for(i=1; i<=10; i++)
{
    console.log(i);
}

//in variable we can store only one value
//in arrays we can store musltiple values

let arr=[];
for(i=0; i<=100; i+=2)
{
    arr.push(i);
}
console.log(arr);
console.log(arr[49]);

//nested for loop
/*let nums=[];
for(i=1;i<=4;i++)
{
    num.push([]);   
    for(j=1;j<=4;j++)
    {
        nums[i].push(j);
    }
}
console.log(nums);
console.table(nums);*/

//for of loop
let namees=['ram','sam','lucky','cj']
for(i=0;i<namees.length;i++)
{
    console.log(namees[i]);
}
console.log('for of loop');
for(let name of namees){
    console.log(name);
}

//for in
let usename={
    name: 'lucky',
    age: 23,
    city: 'salem'
}
for(let prop in usename)
{
    console.log(prop, usename[prop]);
}

//looping over objects by converting into an array
let arr_keys=Object.keys(usename);
console.log(arr_keys);

let arr_values=Object.values(usename);
console.log(arr_values);


//by using forloop
for(i=0; i<arr_keys.length; i++)
{
    console.log(arr_keys[i]+':'+arr_values[i]);
    console.log(usename[arr_keys[i]]);  
}

//break 
for(i=1;i<=10;i++)
{
    console.log(i);
    if(i==4)
    {
        break;
    }
}

//continue

for(i=1;i<=10;i++)
{
    if(i==4)
    {
        continue;
    }
    console.log(i);
}


for(i=1;i<=10;i++)
{
    if(i%2==0)
    {
        continue;
    }
    console.log(i);
}

//label block in js
let groups=[
    ['ram','sam','ramya'],
    ['kumar','lucky','sundar'],
    ['sara','ravi','rahul'],
]
for(let group of groups)
{
    inner:
   for(let member of group)
   {
        if(member.startsWith('r')){
            console.log(member);
            break inner;
        }
   }
}

//string methods
//concatination
let first_name='lucky';
let last_name='cj';
let c=first_name+last_name;
console.log(first_name+last_name);

//concat
c=first_name.concat(' ',last_name);
console.log(c);

//append
c='lucky';
c+=' cj';
console.log(c);

//escaping
c='she can\'t run';
console.log(c);

//length
c=first_name.length;
console.log(c);

//uppercase
c=first_name.toUpperCase();
console.log(c);

//lowercase
c=first_name.toLowerCase();
console.log(c);

//index
c=first_name.indexOf('u');
console.log(c);

//lastindexof
c=first_name.lastIndexOf('c');
console.log(c);

//char at
c=first_name.charAt(2);
console.log(c);

//charcodeat
c=first_name.charCodeAt(2);
console.log(c);

//substr
c=first_name.substr(2,5);
console.log(c);

//substring
let text='01234567890';
c=text.substring(0,4);
console.log(c);

c=text.substring(4);
console.log(c);

c=text.substring(4,0);//it will interchange the values
console.log(c);

//slice
c=text.slice(2,4);//2 is index 4 is element
console.log(c);//23

c=text.slice(4,2);//substring can interchange the values but slice cannot
console.log(c);//it gives empty 

c=text.slice(-3);
console.log(c);//890

//we cannot give negative value to substring as it gives total data