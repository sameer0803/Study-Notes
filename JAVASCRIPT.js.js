Java Script :-) 

extension --> .js
ECMA script(1994) :- ES6----> 6th Version aaya tha tab JS(1997)

//****************************
//Variables :- 
//****************************
var a = 45;
let b = "Sameer";
var c = null;
var d = undefined;

const e ="Arsalan";
console.log(b);
{
  b = "fhgfjfjf";
  console.log(b);
  console.log(e);
}
console.log(e);
------------------------------------------------------
****************************
Types of datatypes:- 
****************************

Primitive Data type :- 
Null,Number,Symbol ,String boolean , bigInt,undefined

Non primitive :- 
ObjectS

Example:- 
//Primitive data types 

var a = 45;
let b = "Sameer";
var c = null;
var d = undefined;
var e =BigInt("567777777777");
let f =Symbol("$");
let g =  true;


console.log(a,b,c,d,e,f,g);
console.log(typeof d);


//Non-Primitive data types 
object={x:y} //Object

const item = {
  "Sameer": true,
  "Shubh": false,
  "Lovish": 67,
  "Rohan": undefined
  }
console.log(item["Rohan"]);

---------------------------------------------------------
****************************
Expressions and Variables :- 
****************************


Arithmetic Operators :-
+ --> Addition
- --> Substartion
* --> Multiplication
** --> Exponential
/ --> Divide


Assignment Operators :-
=
+=
-=
/=
%=
**=

Comparison Operator :- 
==   -
!=
===
!==
<
>
<=
>=
? ---> ternary operator  ---> if else 

condition?<statement1>:<statement2>

Logical Operator :-

&& 
||
!


---------------------------------------------------------------------------
*************************
Conditional Expressions : -
*************************

if 
else
if else 
else if 
*************************
Loops : -
*************************
For and 
while

---------------------------------------------------------------------------
*************************
Functions:- 
*************************

Syntax:- 

function functionKaName (parameter if any)
{
	return //logic
}


For avoiding repeatitive code :-

function onePlusAvg(x,y) {

  console.log("Done");
  return Math.round(1 + (x + y) / 2);
  
}

let a = 1;
let b = 2;
let c = 3;

console.log("One plus average of a and b", onePlusAvg(a,b)) ;//2.5
console.log("One plus average of b and c", onePlusAvg(b,c));//3.5
console.log("One plus average of a and c", onePlusAvg(c,a));//3

*************************
//Arrow Function
*************************
   onePlusAvg =(x,y)=>{
  return  Math.round(1 + (x + y) / 2)
}

*************************
Types of functions :- 
*************************

1) take value in parameter and return value

   onePlusAvg =(x,y)=>{
  return  Math.round(1 + (x + y) / 2)
}

console.log("One plus average of a and c", onePlusAvg(8,10));

2) No  value in parameter  and return  no value

const hello=()=>{
  console.log("Hey how are you. I am fine yaar Thanks");
}
hello();

3) returning but not taking 


const hello=()=>{
  console.log("Hey how are you. I am fine yaar Thanks");
  return hii;
}
let v =hello();

cosole.log(v);

4) taking parameter but not returning 


const hello=(a,b)=>{
  console.log("Hey how are you. I am fine yaar Thanks");
}
let v =hello();

cosole.log(v);

---------------------------------------------------------------------------

*************************
Strings and its types :- 
*************************

let name1 ="Sameer";
let name2 ='Arsalan';
// let num=name.length;

console.log(name2); //Arsalan
console.log(name2[0]); //A

//TEMPLATE lITERALS

let boy1="Sameer";
let boy2="Arsalan";
let sentence=`${boy1} is a friend of ${boy2}`;
console.log(sentence);

//Escape Sequence characters :-
\
/n
/t
//Escape Sequence characters :-
let fruit = 'Bana\tna'
console.log(fruit) //Bana	na
console.log(fruit.length); //7

****************************
Methods of String :- 
****************************
1)Uppercase
2)Lowercase
3)Length
4)slice
5)replace
6)concat
7)trim

name = "Sameer"
name1="Sameer1"
console.log(name.toUpperCase()); //SAMEER
console.log(name.toLowerCase());//sameer
console.log(name.length());//6
console.log(name.slice(3,5));//ee
console.log(name.slice(3));//eer
console.log(name.replace("ee","aa"));
console.log(name.concat(" is a ulta pulta name of ",name1," Ok"));
console.log(name2.trim().length);//faltu ka space hta dega //Whitespace
console.log(name1.trim());

//String is immutable ---> We cannot change only we can apply functions on it 

-------------------------------------------------------------------------------
****************************
Xtra:- 
**************************** 
1)
.includes () ---> it will give (true or false )
example :- sentence.includes(word);
2)
Number.parseInt(string); //change datatype to number 
-------------------------------------------------------------------------------
**************************** 
Arrays:-
**************************** 
Storing many values in a single element is called Arrays .
let name =[12,45,169,45,"Not present"]
Agr usko direct print kr lain to kya output dega ??//yes

let arr1 = [2,3,4,4,4,]
console.log(arr1)

//Output
 // Array(5)
 //   0: 2
 //   1: 3
 //   2: 4
 //   3: 4
 //   4: 4
 // length: 5[[Prototype]]: Array(0)

name[0];---> //12
name.length---> //5
Same like String but is a mutable in nature ---> value can be change, also its type is of object .

 //Changing value 
 name[4]=45
 //Adding new value 
 name[5]=4545;
 
type -->object 
typeof name ---> //object

**************************** 
Arrays And its methods  :-
**************************** 

1)Arrys to string convert --->//It change to string 
2) Join Array --->// It  change to string 

------Actual Array me se ------
3)pop --> remove last element from actual array --> last wale ko kha jaayega 
4)push --> add element in the last --->last me seat lekr aa jaayega 
5) shift ---> remove first element from actual array ---> pehle ko hata kr khud baith jaayega
6) unshift --> add element at first position ---> and then give new array length ---> khiskega fir ye
//apni seat lekr aayega or add kr lega

7)delete --> ye element remove krega pr uski space khali nhi krega ,us jagah ko occupy rkhega ,to length utni hee rhegi. ---par ye method nahi hai ...ye operator kehlata hai .
8)concat  --> 
9)sort --> alphabetically krta hai ----> one ,two three ko  string consider krke pura sort kr dega.

lekin agar number wise hee krna hai to hame compare function use krna padega 
//Ascending order me krne ke liye 

let compare(a,b)
{
retun a-b
}

num.sort(compare);

10)reverse --> Just ulta kr deta hai 
11)splice---> it delete and add at the same time by giving the particular number.
12)slice --> same to same as that of string .

original array me hee change krne wale log :-Same Array ko hee badal dete hain
pop
push
shift
unshift
delete
sort
reverse

new array create krne wale log:- 

toString
join
concat
slice
splice

**************************** 
Examples:
**************************** 

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(num); //let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(typeof num); //object
let b = num.toString(); 
console.log(b); //1,2,3,4,5,6,7,8,9,10
console.log(typeof b);//string

let c = num.join("_");
console.log(c);//1_2_3_4_5_6_7_8_9_10
console.log("type of c", typeof c);//string
console.log(typeof num); //object


//pop 
g= num.pop(); --> //last element ko hata deta hai 
console.log(g); //10
console.log(num) //[1, 2, 3, 4, 5, 6, 7, 8, 9]

// push 
num.push(56);
l = num.push(83);
console.log("Num print ", num);//[1, 2, 3, 4, 5, 6, 7, 8, 9,10,56]
console.log("r print ",l); //return type is number of length

//Shift ---> delete maan lo first element --> or sari jagah khiska dega ---> sare ke sare jama lekr {aage} chale

d= num.shift();
console.log("Num print ", num);//[2, 3, 4, 5, 6, 7, 8, 9]
console.log("d print ", d);//1


//delete ---> delete hoga and uski jagah empty aa jaaygi 
let r =delete num[0];
console.log("Num print ",num);//Num print  [ <1 empty item>, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
console.log("r print ",r);//r print  true

//Concat
let num2 = [2, 3, 4]
let newArray = num.concat(num2);
console.log("New Array ", newArray);//New Array  [1, 2, 3,  4, 5, 6,7, 8, 9, 10, 2, 3,4]

//Splice ---> 
num=[1, 2, 3, 4, 5, 6, 7, 8, 9,10]
num.splice(2,3,1024,1025,8989,45454);
console.log(num);//[2,3,1024,1025, 8989, 45454,6,7,8,9,10]

array.splice(start, deleteCount, item1, item2, ...);
It will delete 3 elements 
start index is 2 -->
index starts from 0

so 2 index is 3 and it will delete 3 items i.e 3,4,5
and it will insert 1024,1025,8989,45454
baki ke as it is 


//it return deleted values of arrays ---> which we have deleted ---> It starts deleting from index 2 and 3 number will be deleted and 4 number will be added i.e. 1024,1025,8989,45454


//Slice
r = num.slice(2, 5) ---> Starts from 2nd position and will not take 5th position
s=num.slice(2);

console.log(r);[ 3, 4, 5 ]
console.log(s);[3, 4, 5,  6,7, 8, 9, 10]
 
-------------------------------------------------------------------------------

****************************************
 New Loops :-(old,for each,for in,for off) 
***************************************

 for loops ko use krna hai arrays ke sath :-
 
1) Old -----> for loop
 for (let i=0; i<num.length;i++){
 console.log(num[i]);
 
 }
 
 2)For Each loop :-(Array par lagta hai)
 
 num.forEach((element)=>{
 
 console.log(element*element);
 }); 
**************************** 
 Array from:-
 **************************** 
 
 It is used to convert ---> from any other object to array -->html wala example
 String se Array 
 ya fir HTML se array 
 inshort kisi bhi object se array. 
 
 let name ="Sameer"
 let namearray= Array.from(name);
 
3)For of loop ---> it is a shortcut of (OLd for loop) ----> values print krta hai .....

for(let item of num)
{
console.log(num[i]);

}

4) For in loop ---> It prints key .index of arrays /object 
for(let item in num)
{
console.log(num[i]);
}
-------------------------------------------------------------------------------
 **************************** 
 Map,Filter,Reduce:-
 **************************** 
 Higher order array methods 
 
 Map  --->It will return new array ---> we can work on key,value,array 
 filter --->all operations can be perform on key ,value and array ---> It will return new array---> make new array  
 Operations like comapre operators  generally performed here
 reduce ---> It does not make array ---> it takes previous value of array and then perform operations on it.
**************************** 
Xtra 2 :- 
**************************** 
Difference between Map and foreach loop
 foreach---> it will not return new array ,only operations can be performed on it .
 map ---> all operations can be perform on key ,value and array ---> It will return new array---> make new array  
 for above both(value,index,array)
 
The Difference between map and filter method
is that – ⁣map transforms each element of an array based on a transformation function and returns a new array of the same length,
While, filter creates a new array with only the elements that satisfy a specified condition.
Both methods return a new array and do not modify the original array.
**************************** 
Example:-
**************************** 
 //Map and for each:- 
 let num = [1, 2, 3, 4];
// num.map((num_) => {
//   console.log(num_ * num_);
// })
// console.log(newArray)
let num1 = [1, 2, 3, 4];
let newArray = num1.map((num,key,array) => {
  return delete array[2];
})
 console.log("Printing NewArray",newArray)
// num.forEach((value, key, array) => {
//   console.log("done");
//    return console.log(key, value * value, r=(arrays)=>{arrays.push(2)});
//   // return console.log("Printimg r ",r);
**************************** 
Filter:- 
**************************** 
// let r= num1.filter((a)=>{
// return a>2;
  
// });
// console.log(r);
reduce:- 
let r = num1.reduce((a,b)=>{
  return a*b;
});
 
console.log(r);
-------------------------------------------------------------------------------
Javascript have been initially created to make the page alive .
Browser have the embedded engine called the JS engine or the Javascript runtime .
JS ability in the browser is very limited to protect users safety.-->Js cannot read downloaded files or run antivirus .
**************************** 
JS Tags:-
**************************** 
Two types of JS :-
1) ouside file ---> can be used with src
2) inside the same file inside script tags.

1)ouside file
Inside the body :- 
<script src ="fileName "></script>
We can use multiple JS file together in the Same HTML file.
It will work fine for same DOM .

2) inside the same file
<script>

</script>

--------------------------------------------------------------------------------
**************************** 
console Objects:- 
**************************** 
Example:-

console.log(console);

console
logs()
warn()
clear()
error ()  
assert()
info()
table()
time() ---> We can check time starts  ---> Example for for loop time for execution and while loop execution
timeEnd()---> 
--------------------------------------------------------------------------------
**************************** 
Alert ,confirm and Prompt 
**************************** 
Example:- 

alert("hello");
//Prompt
let a = prompt("Enter value of a "); ---> It will take value from prompt and store it in the variable a .
//Confirm

let b= confirm("Do you want to write it to the page"); ---> It will save value in the b variable 
if(b){
  document.write(a);
}
else{
  document.write("Please allow me to write");
}

//Disadvantage :- 

Main execution ko block kr dete hain .
Zyada Use nahi hota ---> qki sahi nahi lagta ---> to ham apna prompt banate hain.
admin panel jo khud ke liye bana rhe hain usme use kr lo ---. Testing purpose ke liye .

Modal Use kr sakte hain ---> Bootstrap me se.
--------------------------------------------------------------------------------
**************************** 
DOM and BOM overview:- 
**************************** 

Window objects :- 
1) DOM 
2) BOM 
3) Javascript Core 


Example :- 
console.log(window); ---> Saari chize window object me aati hain ---> DOM ,BOM and Javascript core.
sahi tariqa hota hai 
window.alert()---> Par shortcut me ---> alert likh dete hain ....

window ek global object hai .
**************************** 
DOM
**************************** 
Javascript is the brain of website.

DOM :- pure HTML page ka ek javascript object bana diya gaya hai ---> uska naam de diya gaya hai DOM .

console.log(window);
console.log(window.document); ---> shortcut --->console.log(document) ---> iske andar HTML ki sari chize aa jaayngi.
document.body.style.background ---> Dynamically change krna hai jab hame . User ke kisi action par ham change krna ho.
console.log(window.document.body.style.background="pink");
**************************** 
BOM :- Browser object model
**************************** 
additional object provided by browser. (Host environment)
redirect krna ---->
Alert ,confirm ,prompt  .

location.href ---> It will work directly 
--------------------------------------------------------------------------------
Practise 

const canDrive = (age) =>{
  return age>=18?true:false
}
let runAgain = true;
while(runAgain){
  let age = prompt("Enter your age");
  age = Number.parseInt(age);
  
  if (canDrive(age)) {
    alert("You can drive");
  }
  else {
    alert("You can't drive");
  }
  runAgain = confirm("Do you want to play again?")
}
--------------------------------------------------------------------------------
****************************
Walking the DOM :-
****************************

DOM ---> Tree 

DOM tree refers to HTML page ---->
three main types of nodes in DOM tree.
1)text nodes  ==> last node hota hai...._> Jisme data fill up hota hai,,,,
2)element nodes ---> Example --->h1,body ,tbody ,span,etc ---> Jo <braket> me ata hain tags  ---><head>


element Nodes -----> title ,h1,body,tbody,span.
3)Comment nodes ---> Comment dena 
HTML page ---> <html>--->root
				<head>,<body> --->Children.
				text node ----> leaf
Example :- 
//Bootstrap website pr jakar console me jakar ise type krenege ...
document.getElementsByClassName("cursor-pointer")[3].style.color = "red";
'red'

Auto-correction bhi krta hai tags ko if we forget to close .
like :- table me ham tbody hona chahiye---> if we forget --It will add automatically.


Baad me JS sliye rkhte hain qki null aa jaaega -->
document.body(); -->agar phle lga diya to



document.documentElement; -----> Full HTML (body and head )
document.head; ----->full head
document.body; ----->full body
document.title;----> title milta hai 

isko console.log () me likhne ki zrurt nahi .......
aise hee aa jaati hai.

yahi se edit bhi kr skte hain 
document.title= 'this is a '


***********Type OF *****
typeof document.documentElement; object 
typeof document.head; ----->object
typeof document.body; ----->object
typeof document.title;---->string


--------------------------------------------------------------------------------
****************************
Accesing Children
****************************

First Child --> Kisi bhi trah ka node ho sakta hai ..text node,comment Node ya element node 

console.log("First Child",document.body.firstChild);
console.log("Last Child",document.body.lastChild);
console.log("Child Nodes",document.body.childNodes); ---> Sare nodes mil jaayenge 


document.body.childNodes[0]===document.body.firstChild
document.body.childNodes[document.body.childNodes-1]===document.body.lastChild


Child Nodes aisa lagta hai ke array list hai par hai nahi ---> Node list hai 

//To convert into Array 

let arr = Array.from(document.body.childNodes)
console.log(arr)


//Ek dikkat hai ke space bhi count kr leta hai ---or text node de deta hai ...Ya to space htao ya for usi hisab se manipulate kro

--------------------------------------------------------------------------------

****************************
Parents and Siblings
****************************
DOM collection bolte hain ...Read Only 

$0 ---> jisko select kr le agar mouse se
$1 ---> previous jisko select kr le agar mouse se

$0.childNodes
for of loop krke iterate kr skre hain

Siblings:- jaise head or body siblings ---> Parent uska html hua 
tree like structure yaad rkho..
head ka right sibling hai body
or left sibling body ka hai head. 

Parent :- 
1)parentNode
2)parentElement

Example :- 

a= document.body.firstChild;---> ye space nhatao and then lo tab element de dega 

console.log(a.parentNode) ---> ye koi bhi node de skta hai ---> element bhi ,comment bhi ,text node bhi .
console.log(a.parentElement) ---> Ye hamesha elements dega ---> Agr elements nahi hai to ye null print kr dega

//Space wala locha ho rha hai...bar bar space hatana pad rha hai sliye ab Element only Navigation market me aaya.

--------------------------------------------------------------------------------
****************************
Element only Navigation   ---> Elements select kr lenge isse --> only element we will get 
****************************
//Space wala locha ho rha hai...bar bar space hatana pad rha hai sliye ab Element only Navigation market me aaya.

b= document.body

//First Child :- Previous Chapter me pdha tha 

console.log(b.firstChild);--> Kisi bhi trah ka node ho sakta hai ..text node,comment Node ya element node 
Empty space ko bhi text node dikhata hai ..

Disadvantage :- 
Isme text node ,Empty space sab aa jaayega...to sorting me dikkat aajayegi..

Jo Problem Space ki wajha se ho rahi thi wo yahan sort ho jaayegi .....

***Important*****

//First Element Child :-  
console.log(b.firstElementChild); ---> Isme element hee milta hai ......

previousElementSibling
nextElementSibling
firstElementChild
lastElementChild

to jab hame navbar me koi function lagana ho or usme spaces ho to ye function use krlo ...


const ChangeBgRed = () =>{
 document.body.firstElementChild.style.background= "red";
}


ChangeBgRed();

--------------------------------------------------------------------------------
****************************
Table Navigation 
****************************


make table from bootstrap table 
div ---> container ---> code from bootstrap website .---> links bhi copy krna padega .

from html
body---> container---table
t= document.body.firstElementChild.firstElementChild ----> body ke first elemnt child se first element child nikaal liya hai .

t---> t ke andar table aa  jaayega

table se ab hame rows ,Caption,thead,tfoot sab nikal jaayega

t.rows;
t.caption;
t.tHead;
t.tFoot;
t.tHead.firstElementChild;  ---> tr mil jaayega 
t.tBodies;
t.rows[0].rowsIndex)

--------------------------------------------------------------------------------
****************************
Seaching the DOM 
****************************


1)document.getElementById(""); ---> we will get only 1 element from Id .
2)document.getElementsByClassName("card-title") -->we will get all elements from that class
3)document.getElementsByClassName("card-title").[0] ---we will get first Element from that class.
css selector:- class --> . id---># 
4)document.querySelectorAll(.card-titles) --->All the class from css selector.
5)document.querySelectorAll(.card-titles)[0] --->Only one class from query selector.
6)document.getElementsByTagName("a"); --->sare tags mil gye pure html dom me 
7)document.querySelector(".card-selector").getElementsByTagName("a"); ---> sare tags mil jaayenge card-selector class me.


--------------------------------------------------------------------------------

****************************
Matches closet and contain 
****************************
Matches:- match krta hai ......

closet :-  peeche peeche dekhta hai ...---> Jaise previous parents ko ---> then uske previous parent ko --> then uske parent ko (agar nahi milta to) ---> peeche jata chala jata hai ....
 
contain :- check krne ko ke parent ke andar child hai ke nahi .

Example :- 

<body id ="hello">
  <div class="box" id="id1">This is an element 1 <span id ="span1"> Spannnnnnnn </span>  </div>
  <div class="box" id="id2">This is an element 2 </div>
  
  
let id1=document.getElementById("id1");
let span1=document.getElementById("span1");
let hello=document.getElementById("hello");
// console.log(id1);
// console.log(id1.matches("css"));
// console.log(span1.closest(".box"));
// console.log(span1.closest("#hello"));
console.log(id1.contains(span1));
console.log("print",hello.contains(id1));
// let id2=document.getElementById("id2");
// console.log(id2);

--------------------------------------------------------------------------------
****************************
inner HTML and outer HTML
***************************

innerHTML ---> 
outerHTML ---> 

Code :-


let a = document.getElementsByTagName('div')[0];
// console.log(a);
// a.innerHTML = a.innerHTML + '<h1> Hello World</h1>';
// console.log("inner HTML", a);

let div = document.createElement('div');
div.innerHTML = '<h1> Hello World</h1>';
// a.after(div);
a.replaceWith(div);

console.log("after append", a);


--------------------------------------------------------------------------------
HTML attribute types :-

alt
disabled
href
title
style
src
id
class


data-

--------------------------------------------------------------------------------
***************************
Attribute and its method ---> 

***************************
 
let first = document.getElementById("first");
let a = first.getAttribute("class");

console.log(a);

console.log(first.hasAttribute("class"));
console.log(first.hasAttribute("style"));

//first.setAttribute("hidden", "true");
first.setAttribute("class", "containerrrrrrrrrrrr second");

let b = first.getAttribute("class");

console.log(b);

 first.removeAttribute("class");


let c = first.getAttribute("class");
console.log(c);
// first.attributes
--------------------------------------------------------------------------------
***************************
HTML insertion methods:- 
***************************


node.append(e); ---> append at the end of the node.
node.prepend(e) ---> append at the beginninng of the node.
node.before()----> Insert before node 
node.after() ---> Insert after node
node.replaceWith() ---> replace node with the given node




--------------------------------------------------------------------------------
***************************
insert adjacent HTML/Text/Element,
***************************

1)The insertAdjacentHTML()----> method inserts HTML code into a specified position.


2)innerAdjacentElement

beforebegin:-
afterbegin:-
beforeend:-
afterend:-
remove:-


3)innerAdjacentText----> method inserts only text code into a specified position.




// first.insertAdjacentHTML('beforebegin','<div id="test"> beforeBegin Testing </div>')
// first.insertAdjacentHTML('beforeend','<div id="test"> beforeEnd Testing </div>')

// first.insertAdjacentHTML('afterbegin','<div id="test"> afterBegin Testing </div>')
// first.insertAdjacentHTML('afterend','<div id="test"> afterEnd Testing </div>')

// first.remove();
--------------------------------------------------------------------------------
***************************
class name and class list.
***************************

className:-

first.className= "dark yellow red"
classList:-

classList
add
remove
togglecontains

first.className= "dark yellow red"

first.classList.remove("red");
first.classList.add("yellow");
first.classList.remove("yellow");
first.classList.add("red");
first.classList.toggle("red");
first.classList.contains("red");
--------------------------------------------------------------------------------
***************************
set timeout & set time Interval,
***************************

Syntax:-

Variable SetTimeoutName( functionkaName(){
//function logic
},3000)



//For Delay functions
let a = setTimeout(function(){
alert("I am inside of setTimeOut function");
  
},);5000
let b =prompt( "Do you want to run the setTimeOut function?");

if("n"==b){
clearTimeout(a);
}
console.log(a);



--------------------------------------------------------------------------------
Browser Events: DOM events========>>>FOUR TYPES<<<========

Mouse Events :- onclick,contextMenu(right click),onmouseover/mouse-out, mousedown,mouseup,mousemove
Keyboard Events:- keydown and key up.
Form element Events :- Submit,focus
Document Events :- DOM content loaded.
Handling Events :-

addEventListener:-
------------------------------------------------------------------


<!DOCTYPE html>
<html>
<body>

<h1>The Document Object</h1>
<h2>The addEventListener() Method</h2>

<p>How to pass parameter values with the 
addEventListener() method.</p>

<p>Click anywhere in the document to perform a calculation.</p>

<p id="demo"></p>

<script>
let p1 = 5;
let p2 = 7;

document.addEventListener("click", function() {
  myFunction(p1, p2);
});

function myFunction(a, b) {
  let result = a * b;
  document.getElementById("demo").innerHTML = result;
}
</script>

</body>
------------------------------------------------------------------



removeEventListener

<!DOCTYPE html>
<html>
<body>

<h1>The Document Object</h1>
<h2>The removeEventListener() Method</h2>

<p>A mousemove event handler displays a random number every time you move your mouse in this document.</p>

<p>Click "Remove" to remove the event handler.</p>

<button onclick="removeHandler()">Remove</button>

<p id="demo"></p>

<script>
document.addEventListener("mousemove", myFunction);

function myFunction() {
  document.getElementById("demo").innerHTML = Math.random();
}

function removeHandler() {
  document.removeEventListener("mousemove", myFunction);
}
</script>

</body>
</html>


target :-



--------------------------------------------------------------------------------
********************************************
call backs, call back hell,Pyramid of doom 
********************************************

A callback is a function passed as an argument to another function.

function to make asynchronous ---> So we pass function inside the setTime out and make it as asynchronous

Make it wrap in the function
setTimeOut(function()
{
	
	console.log("Hello");
},5000)

Example :- (Shopping website) ---> We wants to add items in the cart --> then call payment gateway ---> then show order history ---> then 

Passing function over other function paramter called callback function 
Example (Easy) :- 
const cart = ["Shoes", "kurta","pants"]
api.createOrder(cart ,api.proceedToPayment()}) ---> passing function proceedtoPaymrnt in api.create function is called call back .


Example(Complex) :-

 const cart = ["Shoes", "kurta","pants"]
api.createOrder(cart ,function() {
	
	api.proceedToPayment(function() {
	
		api.ShowOrderSummary(function() {
	
				api.UpdateWallet()) 
})) 
})) 
} 
---------------------------------------------------------------

<!DOCTYPE html>
<html>
<body style="text-align: right">

<h1>JavaScript Functions</h1>
<h2>Callback Functions</h2>
<p id="demo"></p>

<script>
// Create an Array
const myNumbers = [4, 1, -20, -7, 5, 9, -6];

// Call removeNeg with a Callback
const posNumbers = removeNeg(myNumbers, (x) => x >= 0);

// Display Result
document.getElementById("demo").innerHTML = posNumbers;

// Remove negative numbers
function removeNeg(numbers, callback) {
  const myArray = [];
  for (const x of numbers) {
    if (callback(x)) {
      myArray.push(x);
    }
  }
  return myArray;
}
</script>

</body>
</html>
-----------------------

Function ke andar functions aaye jaa rha hain ---> Pyramid of Doom. ---> Ise hee call back hell bolte hain 

Problem Issues :- 
Callback Hell(Pyramid of DOM )
Inversion of control (we lose control over our main function when we pass over parameter of first function ---> Totally dependency )
Agar create Order me hee bug aaya or bar bar payment method ko call krne laga to ...main methods ko itn badi responsibilty dedi .
--------------------------------------------------------------------------------
***************************
Promise
***************************
Promise is a object which is place holder which filled with a time.
or 
It is a container for future value,
or 
It is an object representing eventually completion or failure of async operation.


Promises is used to handle async operations in Javascript.
---------------
Before Promises:-
----------------
 
We Use callbacks:-   It can cause callback hell and IOC 
const cart = ["Shoes", "kurta","pants"]
api.createOrder(cart ,function() {
	
	api.proceedToPayment(function() {
	
		api.ShowOrderSummary(function() {
	
				api.UpdateWallet()) 
})) 
})) 
} 

Promise give surity that it will execute code  only  when first promise is resolved. 
---------------
After Promises:-
----------------
//Promise function 
const promise1 = new Promise((resolve,reject) => {	
	
}

promise1.then(function() {
	
	api.proceedToPayment(orderID)
}



In call backs we are passing function to another function as parameter 
where as in Promises we are attaching function to promise functrion.It will run only when previous function is completed.

let promise1 = new Promise ((resolve,reject)=>{
  console.log("Promise is pending");
  setTimeout(() => {console.log("I am promise and I am resolved.");
  resolve(56);},"2000");  
});


let promise2 = new Promise ((resolve,reject)=>{
  console.log("Promise is pending");
  setTimeout(() => {
  reject(new Error("I am error"));
}, "2000");  
});


promise1.then((value) =>{
console.log(value);
});

promise2.catch((error)=>{
console.log("Error aa gya Bhaiyya")
});


fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(function(response) {
    // The response is a Response instance.
    // You parse the data into a useable format using `.json()`
    return response.json();
  }).then(function(data) {
    // `data` is the parsed version of the JSON returned from the above endpoint.
    console.log(data);  // { "userId": 1, "id": 1, "title": "...", "body": "..." }
  });
  
  
  Promise objects are immutable ---> So we use attach handlers concept in it.
  
  Jo problem call back me thi ...callback hell wali ek ke baad code wali ---> Wo promise chaining me sort ho gayi .
  
***************************
Promise Chaining
***************************
  //Promise chaining 
--------------- 
Normal Function:- 
---------------

createOrder(cart)
.then(function (orderId){
return proceedToPayment(orderId)
}).then(function(paymentinfo){
return ShowOrderSummary(paymentinfo)
}).then(function (paymentinfo){
return	updateWalletbalance(paymentinfo)
})
---------------
Arrow Function:- 
---------------
createOrder(cart)
.then((orderId)=>proceedToPayment(orderId))
.then((paymentinfo)=>ShowOrderSummary(paymentinfo))
.then((paymentinfo)=>updateWalletbalance(paymentinfo))



***************************
methods of promises  :-
***************************

 


***************************
ascynch await  :-
***************************




***************************
attaching handlers :-
***************************




----------------------------------------------------------------
***************************
Promise API :-
***************************
Total 6:-
promise.all  ---> jab sab complete ho jaayengi tab use krenge . Par error aaya to 
promise.allsettled---> jab sab complete ho jaayengi tab use krenge . Par error aaya to

promise.race
promise.any
promise.resolve
promise.reject


let promise = Promise[p1,p2,p3]

----------------------------------------------------------------
********************
Error Handling:-
*******************
try ,catch and finally

let a = new Promise((resolve, reject) => {
  
  console.log("promise is running");
  try{

    console.log(hello)
  }
  catch(error)
  {
    console.log("name", error.name)

    console.log("message",error.message)

    console.log("Stack",error.stack)
  }
  finally{

    console.log("promise is completed");
  }
})
----------------------------------------------------------------
*******************
Fetch API
*******************
fetch :- 
let p = fetch (url,options)
options ---> get ,put,post
our understanding :-
let p = fetch("https://goweather.herokuapp.com/weather/Curitiba");
p.then((value) => {
  return value.json();

}).then((value) => {
  console.log(value);
})
********************************************************************
let p = fetch("https://goweather.herokuapp.com/weather/Curitiba");
p.then((response) => {
  return response.json();
}).then((response) => {
  console.log(response);
})
----------------------------------------------------------------
Javascript can be used to send and retreieve information from tyhe network when neeeded :-

AJAX:-Asyncronous Javascript And XML
This term is used when we retrieve netwoek information  from XML 
Now json is used :- So,We keep using Umbrella term as AJAX.

response.text();
response.json();
response.formData();
response.blob();
response.arrayBuffer();


We can use one at a TIME .
Now Json has two objects :-

Status ---> 200
and ok   ---> true
headers --->

Request headers ---> data dete hain  ham ---> Jaise authentication
Response headers ---> data ham lete hain ---> kuch lete hain ham .

let res = fetch (url ,{
	headers :{
	Authentication:'secret'
	}
})
____________________________________________________________________________
options ---> get ,put,post,delete
*****************************
Post Request With Fetch API
**************************** 
Post Request ---> data send krna hota hai server par 
Object ko server par bhej sakte hain .
let response =  await fetch (url ,{
	method :'POST'
	headers :{
	'Content type' : 'application/json'
	}
	body :{
	{"a":"Sameer"}
	});
})

let result = await response.json();

*****************************
Get Request With Fetch API

**************************** 

____________________________________________________________________________

***************************** 
cookies:-
*****************************

Ye har request ke sath data send krta hai.  
It is a small strings of data stored directly in the browser.
It is a key value pair saperated by dash.
When we send request on Web server ---> Response me data send krta hai + also  cookies daal sakta hai browser me Set cookie ke dwara
---> Next time jab request bhejenge to browser ko [pata chal jaayega ke kon client hai]
client ko identify krne ke liye ko kon hame request bhej rha hai .

 1)To see all cookies ---->
document.cookie
 2)To add  cookies ---->
document.cookie =sameer=uddin
3)To update cookie 
document.cookie = "username=John Doe";

sameer key up-date ho jaayegi uddin1 value se.

here sameer is key and uddin is value 
For semilcon key or value we use encodeURIComponent

let key = prompt("Enter your key")
let value = prompt("Enter your value")
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
console.log(document.cookie);
document.cookie = ""

Browser---> inspect ---> application ----> Cookies
Extension bhi add kr sakte hain google chrome me .Edit cookie se .
Multiple options :- 
'user=sameerrr;path=/a;expires=Tue,29March2041 05 GMT' ---> Ek hee cookie set ho rha hai with multiple options .
path :- /a ---> Isse /a pr milega ye cookie na ki kahin bhi mil jaayega.
4KB se zyada nahi ho skta 
total no of cookies per domain is  ----> 20 + (depend on browser)
___________________________________________________________________________

***************************** 
Local Storage:-
***************************** 

It is a web storage object which are not sent to server with each request.
which will not go on refresh or on new request .
Hmesha rhega .

localStorage.setItem("name","sameer");

Methods :- local storage.<below methods>
setItem(key,value)
getItem(key)
removeItem(key)
clear()
key(indexes) ---> get the key on the index . like 0,1,2,3,4 etc
length() ---> length of all th elocal storage present on that server 

key and value dono string me save hota hai 
____________________________________________________________________________

***************************** 
Session Storage:- Only for the Storage 
*****************************
rarely kabhi use hota hai 
property and methods exactly similiar hota hai.
Jaise hee new tab me khol lete hai gayab ho jaati hai .

SessionStorage.setItem("name","sameer");

Methods :- session storage.<below methods>
setItem(key,value)
getItem(key)
removeItem(key)
clear()
key(indexes) ---> get the key on the index . like 0,1,2,3,4 etc
length() ---> length of all th elocal storage present on that server 

____________________________________________________________________________


Langauge can be objct oriented or functional oriented
Javacript follow Object oriented principle :- But it can work on functional oriented.


***************************** 
OOPS  :- 
***************************** 

Object Oriented Programming system
Which follow 4 principle :- 

Inheritence
Polymorphism
Abstraction
Encapsulation
____________________________________________________________________________


***************************** 
Prototypes :- 
***************************** 
using diffrent objects method in first  can be possible with the help of prototype 
If same method name in both of the object ---> It wll give pririty to its Parent 
__________________
Example :- 
let a = {
  name: "Sameer",
  language: "JavaScript",
  run: ()=>{
    alert(" Self run")
  }
}
console.log("Before",a);
let p ={
  run: ()=>{
    alert("run")
  }
}
  a.__proto__=p
 console.log("After",a);
// a.name();
console.log(a.name)
a.run();

-------------------------------------------------------------------------------------------
***********************
class and object 
*********************** 
Class is an extensible java template :- 
class My class
//Methods
//

}

Example :- 
class Airticket {
  
  formfill(givename,age,gender) {
    this.name =givename; 
    this.age =age; 
     this.gender =gender; 
   
  }
  submit() {
    alert(this.name + this.age+":- your form is submitted");
  }
  cancel() {
    alert(this.name + " Your form is  cancelled");
  }

}

//First Object
let airticket1 = new Airticket();
airticket1.formfill("sameer",30,"male");
airticket1.submit();

//Second Object
let airticket2 = new Airticket();

airticket2.formfill("Arsalan" ,1,"male");
airticket2.submit();
airticket2.cancel();

-------------------------------------------------------------------------------------------

Constructor :- 

by defualt it is called .

class Airticket {

  // constructor() {
  //   alert("Constructor is called")
  // }
  constructor(givename, age, gender) {
    alert("Constructor is called")
    this.name = givename;
    this.age = age;
    this.gender = gender;
  }
  
submit() {
  alert(`${this.name} of age (${this.age}) your form is submiited `);
}
cancel() {
  alert(this.name + " Your form is  cancelled");
}
}
//First Object
let airticket1 = new Airticket("Aman", 22, "Male");
airticket1.submit();

//Second Object
let airticket2 = new Airticket("Arslan", 1, "Male");
airticket2.submit();
airticket2.cancel();

Example 2:- 

class RailwayForm {
  constructor(givenname, trainno, address) {
    console.log("CONSTRUCTOR CALLED..." + givenname + " " + trainno)
    this.name = givenname
    this.trainno = trainno
    this.address = address
  }
  preview() {
    alert(this.name + ": Your form is for train number: " + this.trainno + " and your address is " + this.address  )
  }
  submit() {
    alert(this.name + ": Your form is submitted for train number: " + this.trainno)
  }
  cancel() {
    alert(this.name + ": This form is cancelled for train number: " + this.trainno)
   this.trainno =0;
  }
}
let train1= new RailwayForm("Sameer", 13488, "12, Choola road, Bhopal - 785878")
train1.preview()
train1.submit()
train1.cancel()
train1.preview()
-------------------------------------------------------------------------------------------
Inheritence:- 
From Parent to child .

Auto matically parent ki sari property inherit kr leta hai .

-------------------------------------------------------------------------------------------
Method Overriding :-

Auto matically parent ki sari property inherit kr leta hai .
Same name ka method agar parent me ho child me banya jaaye or uske andar kuch likha jaaye to use kehte hain over ride of method 

Mtlb yahan chalti hai child ke method ki 

Lekin agar parent ke method ki chalani hai to super.parentmethod use kro 
To parent ke method ki chlaegi 

-------------------------------------------------------------------------------------------
Constructor Overriding :-

Note 1:
Acoording to specification, If a child class extends parent and it forget to make constructor in it .
Then javascript engine automatically puts parent constructor in it.

  // constructor(...args){
  //   super(...args)
  // }
  
 Note 2: If child class make its own constructor then it is necessary to put super on it 
  otherwise it will give error 
  and hence it will call parent constructor in child constructor always.
  
-------------------------------------------------------------------------------------------
  
  Static method:- 
  
  Not to make its object for class
  can be used directly as a classname.method
  
  Kyun banate hain :- taki memory save ho ,Object nahi bnaayega to heap memory me nhi jaayegaMethod use kr skte hain direct 
  Agar chaahen to ---
  
  
 Example :- 
 
  class Animal {
  constructor(name) {
    this.name = name;
  }

  walk() {
    console.log("Animal " + Animal.capitalize(this.name) + " is walking");
  }

  static capitalize(name1) {
    return name1.charAt(0).toUpperCase() + name1.substr(1, name1.length);
  }
}

let animal1 = new Animal("sheenu")
animal1.walk();


// Aise bhi use kr skte hain :- 

let animal1 = new Animal (Animal.capitalize("sheenu"));
1)Yahn directly bhi use kr skte hain --> object me use kr skte hain.
2)Inside class bhi use kr skte hain --> above example.
3) Direct constructor me bhi pass kr skte hain isse kya hoga ke hmesha capital hokr niklega.
-------------------------------------------------------------------------------------------
********************
Getters and Setters 
*******************
Note :- 1)
getter and setter wo methods hote hain jinhe ham object.methodname () aise krke call nhi krte 
object.methodname se direct call kro.
2) Aise denote krte hain 
this._name = name;
Niche diye example dekho 

Example :- 

class Animal {

  constructor(name) {
    this._name = name;
  }

  fly() {
    console.log(`${this._name} can fly`);
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

}

class Rabbit extends Animal {
  eat(){
    console.log("Eating carrot");
  }
}
class Rat  {
  eat(){
    console.log("Eating ghar");
  }
}
let a = new Rabbit("Sparrow");
let b = new Rat("Chuha");
a.fly();
a.eat();
console.log("------"+a.name);
 a.name ="Chidiya";
 console.log(a.name);

console.log(a instanceof Animal);
console.log(a instanceof Rabbit);
console.log(b instanceof Rabbit);
-------------------------------------------------------------------------------------------
  IIFE method :- Immediately Invoked Function Expression
   Async ,Await chala sakte hain bina function ke -----> IIFE ki help se  (code)()  
   Memory save krta hai .
    
   let a = ()=>{ return new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(456)
  }, 2000)
})


            }
(async () => {
  let b = await a()
   console.log(b)
  let c = await a()
   console.log(c)
  let d = await a()
  console.log(d)
}) ()
-------------------------------------------------------------------------------------------
***********************
Without Destructuring :-
***********************
let arr1 = [2,3,4,4,4,]
console.log(arr1)

//Output
 // Array(5)
 //   0: 2
 //   1: 3
 //   2: 4
 //   3: 4
 //   4: 4
 // length: 5[[Prototype]]: Array(0)
***********************
  Destructuring :- 
***********************
 Destructuring ek technique hoti hai jisse ham arrays ya objects  ko khol lete hain bina arr[0] alag alag kre 
  
  Arrays :- 
  
  Example :- 
1)  
  let arr= [2,3,4,5,6,7,8,9,9,4]
  [a,b]=arr
  console.log(a,b)
  //2,3
  
  2)
let arr= [2,3,4,5,6,7,8,9,9,4]
let [a,b,c,...rest]=arr
console.log(a,b,rest)
//Output:-
2 3 (7) [5, 6, 7, 8, 9, 9, 4]

7 total number of element is array ko btata hai 

3)
Empty value ke liye bhi 

  let arr= [2,3,4,5,6,7,8,9,9,4]
let [a,,b,...rest]=arr
//Output :- 2,4, then all values

Objects:- 

let {a,b} ={ a: 1, b: 2 };
console.log(a,b)

//Now for object 
let {name,age} ={ name: "Sameer", age: 29};
console.log(name,age)

const {name,age,city} = {
  name: 'John',
  age: 30,
  city: 'New York'
};

console.log(name)

***********************
Spread Operator Syntax:- Arrays to Object conversion:- 
***********************



let arr1 = [2,3,4,4,4,]
let obj1 = {...arr1}
console.log(obj1)

//Output :- 
Object {0: 2, 1: 3, 2: 4, 3: 4, 4: 4}

*******************************
Functions using Destructuring
*******************************

let arr1 = [2,3,4,4,4,]
 function sum (v1,v2,v3)
{
  return v1+v2+v3;
}
console.log(sum(...arr1))

let obj2 = {
  name: "John",
  age: 30,
  city: "New York"
};

console.log({...obj2, name :"Sameer"}); 
Updating its object

-------------------------------------------------------------------------------------------
Objects :- 

let obj2 = {
  name: "John",
  age: 30,
  city: "New York"
};
console.log(obj2); // Object {name: "John", age: 30, city: "New York"}
console.log(obj2.name); // Output: John

-------------------------------------------------------------------------------------------
***********************
  Scope  :- 
***********************

Three types :- 

local/Block scope --> let ,const ,var
global ---> var() 
Functional ---> var ,let ,const

-------------------------------------------------------------------------------------------
***********************
  Hoisting  :- 
***********************
Hoisting refers to the process in which the interpreter appears to move the declaration to the top of the code before execution.

//Var 
console.log(a)
var a;
a=9
console.log(a)

//let

// console.log(b)
// let b;

//cannot access b before initialisation

let c ;
console.log("C value --->",c)
c =12;
console.log("C value --->",c)

//const 
//let and const are exactly same 
//Javascript only host decleration not initialisation

//Function

//Exception:- 

hello()
function hello()
{

  console.log("hello")
}

Ye chalega qki  function or uske baad uska naam hai ....hoising ho jaayegi iski 
Function expression hoist nhi hote hain not even when we use var ,let or const 
In case of arraow functions it will not hoist even in case of var and let or const

const hello =(name) =>{

  console.log("hello" +name)
}

hello("Sameer")



var sabby =(a,b)=>
  {
    return a+b
  }

let c =sabby(4,5)
console.log(c)


-------------------------------------------------------------------------------------------
***********************
(closers
***********************




)
-------------------------------------------------------------------------------------------
***********************
arrow functions 
***********************
 Syntax 
  variable arrowfunctionName =(parameter1,parameter2)=>
 {
  //Logic 
 }
  
//typically 
 const arrowFunc= (name1 ,name2)=>
  {
    console.log("hello",name1+" and " +name2)
  }
arrowFunc("Sameer","Arslan");
 
Example of function ke
 
const arrowFunc= (name1 ,name2)=>console.log("hello",name1+" and " +name2)
arrowFunc("Sameer","Arslan");
///////////////////////////////////////////////////////
Problem :-

object ke andar function hai :- 
this ---> object ko point krega jo ki obj hua 
to mtlb obj.name kr rhe hain prde ke peeche :-

const obj = {
  name:"Sameer",
  role:"Developer",
  exp:30,
   show: function (){  
     console.log("I am " +this.name + " and  I have role name " +this.role)
     },2000)
}
}

*****Important****
Problem of functrion which is sorted by Arrow function.


Problem tab aayegi jab function ke andar koi function ho 
tab this smjh nhi paayega
qki this ab function ko point krega na ki obj ko 
qki obj --dada ji hai ---this sirf parent tak jata hai.

//Problem :- 
const obj = {
  name:"Sameer",
  role:"Developer",
  exp:30,
   show: function (){  
     setTimeout(function(){
       console.log("I am " +this.name + " and  I have role name " +this.role)
     },2000)
}
}
Solution :- 2 solution hote hain

1) Agar function se hee karna hai to :- 

this ki shakti jo ki object leta hai ....
wo kisi or variable me save krlo :-
//Pehle use ki jaati thi 

const obj = {
  name: "Sameer",
  role: "Developer",
  exp: 30,
  show: function() {
    console.log("I am -----" + this.name + " and  I have role name ----" + this.role)
    let that = this;
    setTimeout(function() {
      console.log("I am " + that.name + " and  I have role name " + that.role)
    }, 2000)
  }
}
console.log(obj.name, obj.role)
obj.show()

2)Arrow function se kro :- 

Solution Arrow function apne lexical parent se le leta hai.
dada ji se le lega.
khud ka this nhi bnata

const obj = {
  name:"Sameer",
  role:"Developer",
  exp:30,
     show: function (){  
       setTimeout(() =>{
       console.log(`I am  ${this.name} and  I have role name  ${this.name} `)
     },2000)
})
-------------------------------------------------------------------------------------------
************************
javascript on the server 
************************
Node js ---> Javascript ka run time hai .
website me ---> HTML ,CSS ,Javascript hota hai ---> Java script ko browser run krta hai ---> Pr kuch sharto ke sath ---> Security ke hisab se  

operating system ke andar --> Browser chalta hai ---> Javascript ---> Brwser ke andar chalta hai
Abhi tak ham fronend pr js chalate hain.
ham chahe to server pr bhi chal sakti hai .
digital ocean , lenode,walter ,aws ---> ye log apne data center par chalate hain


backened pr chalane ke liye ham download krte hain node js .
By Node JS :- Server pr chalta hai .

Node js download krlo ---> Website se .
node -v ---> Command prompt pr 


Node js :- 
Backend ka code visible nahi hota 
frontend ka visbile hota hai ---> inspect se


node 
console.log("hello World")};
repl --> read evaluate print logo


randal ne banaya tha ---> Browser se bahar
JS ko c++ me daal diya tha .
JS ko directly ham operating syatem me daal sakte hain .


How to use :- 
1)vs code me jaao --> then node js chalao or use kro 
2) ya replit me node js select kro or use kro --> bina html css ke chal jata hai 
-------------------------------------------------------------------------------------------
******************
npm and packages
******************
node js ke package ko manage krne ke liye npm hota hai .
Make js file in vs code
node fileName.js   ---> file chalane ko .
package.json banane ko 
1) npm init
2)npm init -y --- isse jaldi se ban jaayega bina details daale.
 
package.json daalne se third party wali chize insatll krme me help hoti hain

Example ko Pdf creator module use kr lenge taki pdf bana sake
Search on google 
nodejs module for pdf

3)npm i pdf-creator-node

isse node_modules package ban jaaynge .
Jiske andar bhot kuch hoga 

Or iske generate krne ki jaankri --> package.json ---> dependency ke andar

sari file .js me likh do .

Never push node modules package on git---


4)npm install ---> jo package.json me dependency hogi use install kr dega .
ye node js package.json ke andar check krega or jo bhi dependency hongi wo download kr lega

It is an extension to run code from button 
code runner


-------------------------------------------------------------------------------------------
****************
//Modules 
****************
//2 types se kr skte hain :-
1)Without Es6 ---> require wala 
2) ES6 modules --->a) function ke aage hee export laga do ----> functional file me.
					b) main file me import {function1} from "./path of file/fileName.js"
					c)package.json me hame ---> type "module".

 1)Without Es6

 a) single  function ke liye :- 
 use bas export krna hoga --> module.exports (function1)
Main file me ---> const function1= require ("./path of file  or file Name") ----> function1 object hoga
 
b)  Multiple function ke liye :- 
use bas export krna hoga --> module.exports (function1,function2)
Main file me ---> const (function1_new = require ("./path of file  or file Name") --------> function1 object hoga
function1_new.function1();
function1_new.function2();

We can use destructuring here ...
use bas export krna hoga --> module.exports (function1,function2)
dusri file me ---> const (function1,function2) = require ("./path of file  or file Name") --------> destructuring kr rhe hain
function1();
function2();
Note :- 
isko krne se ham ye function kisi or file me use kr skte hain .
iski help se multiple developer kaam kr skte hain same file me alag alag module par .

Live Example :- 
Example 1 :- 
ek js file me 
const hello =()=>{
console.log("Hello")
}
const Ahello =(name)=>{
    console.log("Hello"+name)
    }
module.exports = {hello,Ahello} // ---> multiple ko export krte hain.
 //module.exports ={hello:hello,Ahello:Ahello} ---> multiple ko export krte hain.
//module.exports =hello -----> Yahan function ko export krenge.
//second js file jisme hame ye chahiye whan likhenge :-require(./filename)
const {hello,Ahello} = require("./module1")
hello();
Ahello("smeer")
2) ES6 modules --->a) function ke aage hee export laga do ----> functional file me.
					b) main file me import {function1} from "./path of file/fileName.js"
					c)package.json me hame ---> type "module".
1) Normal type 
export const hello11 = () => {
  console.log("hello11")
}
import { hello11 } from "./modules2.js"
hello11();
1) Default  type 
export const hello11 = () => {
  console.log("hello11")
}
export const hello12 = () => {
  console.log("hello12")
}

//Default wala 
default const hello123= () => {
  console.log("hello123")
}

or 

//Es6 wala hai 
const hello123= () => {
  console.log("hello123")
}

export default hello123;


import hello123,{ hello11,hello12 } from "./modules2.js"
hello11();
hello12();
hello123();
//Default wale ko bracket ke bahar likhte hain .
-------------------------------------------------------------------------------------------
*************************************
//Express JS to create backend server 
*************************************
********************

Install express:- 

1)npm install express
2) Make one .js file and mention ports details :- 

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('about')
})
=
app.get('/contact', (req, res) => {
  res.send('contact')
})

app.listen(port, () => {
  console.log(`Example app listening on port  https://localhost:${port}`)
})


Run ---> Node file.js

Extra :- (nodemon)
nodemon ---> helps to not to restart server again and again ----> .
npm i -g nodemon ---> Installing
Run ---> nodemon file.js


For HTML ---> we should define path and update .js file .
const path = require('path') 

res.sendFile(path.join(__dirname,"path and filenameof HTML"))


-------------------------------------------------------------------------------------------

PDF Merger :- (Project)

1)make one folder and then make file server.js 
2)npm init -y

3)Copy content from express website .

------------------------------
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('about')
})

app.get('/contact', (req, res) => {
  res.send('contact')
})

app.listen(port, () => {
  console.log(`Example app listening on port  https://localhost:${port}`)
})
------------------------------------
Using express.js for backend 
so install express js 

4)npm install express

start with nodemon beacause we have to change again and again .
Ek hee baar install krna padta hai system me 
 5) nodemon server.js
 
 
 Now for HTML link make folder ---> template folder
 and for public folder ---> public  folder
 
 6) index.js ---> in template folder 
 const path = require('path') 

7)For HTML ---> we should define path and update .js file .
const path = require('path') 
res.sendFile(path.join(__dirname,"path and filenameof HTML"))

8)
	A) make index.html file from bootstap ---> navbar and form for file 
	B) add multiple accept=".pdf" in input tag of HTML index.html file
	C) add enctype="multipart/form-data and method as post 
		<form action="/merge"  method="post" enctype="multipart/form-data">
 
 9) now on server.js file 
 make mthod as post .
 app.post('/', (req, res) => {

10) Install multer ---> help to get multiple files
https://expressjs.com/en/resources/middleware/multer.html
 npm i multer 
 
 In server.js file we have to write this :-
 

app.post('/merge', upload.array('pdfs', 2), function (req, res, next) {
    console.log(req.files);
    res.send({data:req.files})
    // req.body will contain the text fields, if there were any
  })

console.log(req.files); ---> to check files are uploading or not
    res.send({data:req.files})  ---> Json me file de dega

11) https://www.npmjs.com/package/pdf-merger-js
npm install --save pdf-merger-js

and copy file of node for js 


.
.
.


Install runner extension in vs code ---> Go to setting --> search runner ---> and then tick run in terminal.
