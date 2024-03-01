//after every blank lines a new concept starts

console.log("Hello World");

let a="I am";
let b="Sree Dharma"
console.log(a+ " "+b);

const x="Change";
console.log(x);

//boolean
let bool=true;

//undefined var
let undefined_var;
console.log(undefined_var);

//if_else
let p=1;
let q=2;
if(p>q){
    console.log("p is greater");
} else if(q>p){
    console.log("q is greater");
}else{
    console.log("Both are equal");
}

if(q || p == 1){
    console.log(true)
}else{
    console.log(false);
}

//scope of variables
let var1="var1";
var var2="var2";
if(true){
    let var3="var3";
    var var4="var4";
    console.log(var3);
    console.log(var4);
}
console.log(var4);
//var and let, both acts similar but have some difference in their functionalities.  var can be used out of their boundaries and let cannot.

//arrays
let arr=['pen','pencil','eraser','sharpner','scale'];
console.log(arr);
console.log(arr[2]);
console.log("I have "+ arr.length+" stationaries" );
console.log(`I have ${arr.length} stationaires`);

//functions
// 1) adding of two num
function add(num1,num2){
    console.log(num1+num2);
}
add(4,6);
// 2) saying bye
function saybye(name){
    console.log(`Bye ${name}. See you again!`);
}
saybye("Sree Ram");

//forEach function (only for number of items in an array)
//let's take a list fromabove mentioned
arr.forEach(function (thing,place){
    console.log(`${place+1}. ${thing}`);
});

//for loop
for(i=0;i<5;i++){
    i=i+i;
    console.log(i);
}
for(i=0;i<arr.length;i++){
    console.log(arr[i]);
}

//generating a random number
//Math.floor= to print value before decimal point
//Math.ceil= to print value after decimal point
console.log(Math.floor(Math.random()*(5+1)+40)); //to print random number ranging 40 to 45

//default parameters
function greet(name='there'){
    console.log('Hi',name);
}
greet('Ram');
greet();

//sum of array elements
let arr1=[1,3,5,6,9];
let sum=0;
for(i=0;i<arr1.length;i++){
    sum+=arr1[i];
};
console.log(sum);

//arrow function
var arrow_fun= name => `Hi ${name}`;
console.log(arrow_fun("Sree Ram"));

//this keyword
let obj={
    name: "Ram",
    dept: "ece",
    clg: "Sec",
    aa(){
    console.log(this.name);
    }
}
obj.aa();

//eventSelector
//document.querySelector('button').addEventListener('click', ()=>{
//    console.log('Button is clicked');
//})

//object
let object={
    name: "sree",
    interest: "web3, trading",
    goal:"technopreneur",
    country:"india",

    changename: function (newname){
        this.name=newname;
    }
};
object.changename("Sree Dharma");
console.log(object.name);

//email and pass checking (activity)
let email="sreedharma@gmail.com";
let pass="sreedharma";
function mailcheck(word){
    if(email.includes("@")){
        return true;
    }
    else{
        return false;
    }
}
function passcheck(pass){
    if(pass.length>=6){
        return true;
    }
    else{
        return false;
    };
}
console.log(mailcheck(email));
console.log(passcheck(pass));

//searching function
let myTodos=[];
myTodos.push("Wake at 5");
myTodos.push("go to gym");
myTodos.push("eat fruits");
myTodos.push("do Jogging");
myTodos.push("do trading");
myTodos.push("Create posts");
//console.log(myTodos.indexOf("go to gym"));
//let tofind=myTodos.findIndex(function (task){
//    return task=='Wake at 5';
//})
//console.log(tofind);
let toFind=function (todolist,search){
    let result=todolist.find(function (todos){
        return todos.toLowerCase()==search.toLowerCase();
    })
    return result;
}
console.log(toFind(myTodos,"do jogging"));

//filter in arrays
array = [{
    myname: "Sree dharma",
    college_done: false,
},{
    myname: "Kishore",
    college_done: true,
},{
    myname: "Sam",
    college_done: false,
}];
let findTrue=array.filter ((check)=>{
    return check.college_done=== true;
})
console.log(findTrue);



//selecting elements
let element_select=document.querySelector('h1');
console.log(element_select);
let element_select1=document.querySelector('title');
element_select.textContent='Text Changed';
console.log(element_select1);
let p_select=document.querySelectorAll('p');
p_select.forEach((element) => element.textContent='sample text changed');

//adding elements in html via js
let newPtag=document.createElement('p');
newPtag.textContent='New P tag added';
document.querySelector('body').appendChild(newPtag);

//input tracking
document.querySelector("#search").addEventListener('input',(event)=>{
    console.log(event.target.value);
})

//Changing css in js
function search(){
let chg_bg=document.querySelector('body');
chg_bg.style.background='red';
}
function revert(){
    let ul=document.querySelector('ul');
    let vi= document.createElement('li');
    vi.textContent='3';
    ul.appendChild(vi);
}

//Classes
class SayHi{
    constructor(name){
        this.name1=name;
    }
    sayHi(){
        let name1="Sree";
        console.log("Hi "+this.name1);
    }
    sayHi2(){
        console.log("SayHi2");
    }
}

let SayHiName = new SayHi("Dharma");
let SayHiName2= new SayHi();
SayHiName.sayHi();
SayHiName2.sayHi();

//Inheritance in JS
class User{
    constructor(firstname,lastname){
        this.firstname=firstname;
        this.lastname=lastname;
    }
    getUserName(){
        return `username is ${this.firstname} ${this.lastname}`;
    }
    setusername(name){
        this.firstname=name;
    }
}
class Teacher extends User{
    getUserName(){
        return "ram";
    }
}

let user1= new User("sree", "dharma");
user1.setusername("Sree");
user=user1.getUserName();
console.log(user);
