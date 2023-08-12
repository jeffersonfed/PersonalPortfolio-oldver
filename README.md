### Comments
```javascript
  // this is a comment 
  /* or this is a comment */
```
### Variables
#### - Variable Creation
```javascript
  let school = "School";
  let fullPackage = "School Pro";
  let projects = 4;
  let awesome = true;
```
#### - Variable Operations
```javascript
  let x = 2;
  let y = 3;
  let z = x + y; // 5

  let city = "Lisbon";
  let country = "Portugal";
  let place = city + " " + country; //Lisbon Portugal
```
#### - Variable Data Types
```javascript
  let age = 23; // Number
  let name = "Julie"; // String
  let canCode = true; // Boolean, could also be false
```
#### - Structure structure types
```javascript
  let students = ["Kate", "Julie", "Mariana"]; // Array

  let kate = {
    firstName: "Kate",
    lastName: "Johnson",
    age: 23,
    canCode: true,
  }; // Object
```
### Alerts & Prompts
#### - Alert
```javascript
  alert("Hi");

  let name = "Jefferson";
  alert(name);
```
#### - Prompt
```javascript
  let firstName = prompt("What is your first name");
  let lastName = prompt("What is your last name");
  let fullName = firstName + " " + lastName;
  alert(fullName);
```
### If else
#### - if statement
```javascript
  let country = prompt("What country are you from?");

  if (country === "Indonesia") {
    alert("You are cool");
  }

  if (country !== "Indonesia") {
    alert("Too bad for you");
  }
```
#### - if else statement
```javascript
  let age = prompt("How old are you?");

  if (age < 18) {
    alert("You cannot apply");
  } else {
    alert("You can apply");
  }
```
#### - Nested if else statements
```javascript
  if (age < 18) {
    alert("you can't apply");
  } else {
    if (age > 120) {
      alert("you can't apply");
    } else {
      alert("you can apply");
    }
  }
```
#### - Logical Or
```javascript
  if (age < 18 || gender === "female") {
    alert("You can't join 👩‍💻");
  }
```
#### - Logical And
```javascript
  if (continent === "Asia" && language === "Indonesian") {
    alert("You are from Indonesia");
  } else {
    alert("You are not from Indonesia");
  }
```
#### - Comparison and Logical Operators
```javascript
  2 > 3 // false 
  2 < 3 // true 
  2 <= 2 // true
  3 >= 2 // true
  2 === 5 // false  
  2 !== 3 // true 
  1 + 2 === 4 // false
```
### Strings
#### - Creating a string
```javascript
  let name = "Jefferson"; // "Jefferson"
```
#### - String concatenation
```javascript
  let firstName = "Jefferson";
  let lastName = "Jefferson";
  let fullName = firstName + " " + lastName; // "Julie Johnson"

  //or
  let fullName = `${firstName} ${lastName}`;
```
#### - Trim
```javascript
  let city = " Jakarta  ";
  city.trim(); // "Jakarta"
```
#### - Replace
```javascript
  let city = "Bekasi";
  city = city.replace("e", "é"); // "Békasi"
```
#### - toLowerCase
```javascript
  let city = "Jakarta";
  city = city.toLowerCase(); // "jakarta"

```
#### - toUpperCase
```javascript
  let city = "Jakarta";
  city = city.toUpperCase(); // "JAKARTA"
```
#### - Template literals
```javascript
  let city = "Denver";
  let sentence = `Kate is from ${city}`; // Kate is from Denver
```
### Arrays
#### - Array Declaration
```javascript
  let myList = [];
  let fruits = ["apples", "oranges", "bananas"];
  myList = ['banana', 3, go, ['John', 'Doe'], {'firstName': 'John', 'lastName': 'Smith'}]
```
#### - Access an Array
```javascript
  fruits
  fruits[0]
  fruits[1]
  fruits[2]
  fruits[3]
```
#### - Update an Array item
```javascript
  fruits[1] = "Mango";
  fruits[1] = 3;
```
#### - While Loop
```javascript
  let times = 0;
  while (times < 10) {
    console.log(times);
    times = times + 1;
  }
```
#### - forEach Loop
```javascript
  let fruits = ['apples', 'oranges', 'bananas'];
  fruits.forEach(function(fruit) {
    alert("I have " + fruit + " in my shopping bag");
  });
```
#### - do while loop
```javascript
  let times = 0;
  do {
    console.log(times);
    times = times + 1;
  } while(times < 10)
```
#### - for loop
```javascript
  for (let i = 0; i < 10; i++) {
    console.log("i is " + i);
  }

  for (let i = 0; i < myList.length; i++) {
    alert("I have " + myList[i] + " in my shopping bag");
  }
```
#### - Remove first item
```javascript
  fruits.shift()
```
### Dates
#### - Get current time
```javascript
  let now = new Date();
```
#### - Create a date
```javascript
  let date = Date.parse("01 Jan 2025 00:00:00 GMT");
```
#### - Get date data
```javascript
  let now = new Date();
  now.getMinutes(); // 0,1,2, 12
  now.getHours(); //1, 2, 3, 4
  now.getDate(); //1, 2, 3, 4
  now.getDay(); // 0, 1, 2
  now.getMonth(); // 0, 1, 2
  now.getFullYear(); // 2021
```
### Numbers
#### - Round
```javascript
  Math.round(4.7) // 5
```
#### - Floor
```javascript
  Math.floor(4.7) // 4
```
#### - Ceil
```javascript
  Math.ceil(4.7) // 5
```
#### - Min
```javascript
  Math.min(2, 5, 1) // 1
```
#### - Max
```javascript
  Math.max(2, 5, 1); // 5
```
#### - Random
```javascript
  Math.random(); // 0.47231881595639025
```
### Objects
#### - Creating a new object
```javascript

```
```javascript

```