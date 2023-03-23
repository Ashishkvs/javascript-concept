
6 March
====================================================================================================================
Summary
- Introduction to JavaScript
- Integrating JavaScript into HTML page [Client Side]
    a) Inline
    b) Embedded
    c) External Files
    d) Minification
- Strict Mode
- Legacy Browsers
- MIME Type
- JavaScript HTML reference methods
    a) DOM hierarchy
    b) By using Name
    c) By using ID
    d) By query selector

                        JavaScript output techniques
- It is the process of presenting data dynamically in browser.
- JavaScript provides various techniques

    alert()
    confirm()
    document.write()
    console methods
    innerHTML
    outerHTML    
    innerText

                                        alert()
- It is used to display output in a message box.
- Message box pops-up in browser window.
- It comprises of only "OK", you can't cancel.
- Using "esc" key you can cancel.

Syntax:
            alert("message");            // single line
            alert("message\n line2");    // multiple lines

Ex:
index.js

function DeleteClick()
{
    alert("Delete\nRecord will be deleted");
}

index.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script type="text/javascript" src="src/scripts/index.js"></script>
</head>
<body>
   <button onclick="DeleteClick()">Delete</button>
</body>
</html>

                                    confirm()
- It is similar to alert but allows to cancel.
- It is boolean method that returns
            true        = OK
            false        = Cancel

Syntax:
    confirm("Message\nLine2");        // true or false

Ex:
index.js

function DeleteClick()
{
   flag = confirm("Delete\nRecord will be deleted");
   if(flag==true){
      alert("Record Deleted..");
   } else {
      alert("You canceled..");
   }
}

index.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script type="text/javascript" src="src/scripts/index.js"></script>
</head>
<body>
   <button onclick="DeleteClick()">Delete</button>
</body>
</html>    

                                document.write()
- It is an output method, which can display output on a new screen.
  [It is on same page but a new screen]

Syntax:
        document.write("message");        \\ no  "\n" for line break
        document.write(<markup>);        \\ <br>

Note: Markup is not allowed for alert() and confirm().

Ex:
index.js

function DeleteClick()
{
   flag = confirm("Delete\nRecord will be deleted");
   if(flag==true){
      document.write("<b><i><font color=red>Record Deleted..</font></b>");
   } else {
      alert("You canceled..");
   }
}

index.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script type="text/javascript" src="src/scripts/index.js"></script>
</head>
<body>
   <button onclick="DeleteClick()">Delete</button>
</body>
</html>

                                   innerText
- It can display output in any container of HTML page, which can show text.
- It will not allow formats for text.
- It is only for plain text content.
- Markup not allowed for output.

Syntax:
        document.querySelector("reference").innerText = "message";

Ex:
index.js

function DeleteClick()
{
   flag = confirm("Delete\nRecord will be deleted");
   if(flag==true){
      document.querySelector("h2").innerText = "Delete Confirmed";
      document.querySelector("p").innerText = "Record Deleted Successfully..";
   } else {
      alert("You canceled..");
   }
}

index.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script type="text/javascript" src="src/scripts/index.js"></script>
</head>
<body>
   <button onclick="DeleteClick()">Delete</button>
   <h2></h2>
   <p></p>
</body>
</html>
                                innerHTML
- It is similar to innerText but allows formats with markup or functions.

Syntax:
     document.querySelector("reference").innerHTML = "markup/message";

index.js

function DeleteClick()
{
   flag = confirm("Delete\nRecord will be deleted");
   if(flag==true){
      document.querySelector("h2").innerHTML = "<font color=red>Delete Confirmed</font>";
      document.querySelector("p").innerHTML = "<i><font color=red>Record Deleted Successfully..</font></i>";
   } else {
      alert("You canceled..");
   }
}

index.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script type="text/javascript" src="src/scripts/index.js"></script>
</head>
<body>
   <button onclick="DeleteClick()">Delete</button>
   <h2></h2>
   <p></p>
</body>
</html>

Ex:
index.js

function DeleteClick()
{
   flag = confirm("Delete\nRecord will be deleted");
   if(flag==true){
      document.querySelector("input[type=text]").value = "Delete Confirmed";
   } else {
      alert("You canceled..");
   }
}

index.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script type="text/javascript" src="src/scripts/index.js"></script>
</head>
<body>
   <button onclick="DeleteClick()">Delete</button>
   <input type="text">
 
</body>
</html>
                                outerHTML
 - It can replace the target markup with the specified.

Syntax:
    document.querySelector("targetElement").outerHTML = "<newElement>";

Ex:
index.js

function DeleteClick()
{
   flag = confirm("Delete\nRecord will be deleted");
   if(flag==true){
      document.querySelector("p").outerHTML = "<h2>Delete Confirmed</h2>";
   } else {
      alert("You canceled..");
   }
}

index.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script type="text/javascript" src="src/scripts/index.js"></script>
</head>
<body>
   <button onclick="DeleteClick()">Delete</button>
   <p></p>
 
</body>
</html>

                                  console
- It is a developer tool.
- Developer can test all his logic in console.
- Developer can log information in console with various contextual messages
                warning
                success
                error
                debug
                info

Note: Make sure that console methods are not in production.


                    Value is not provided        : NullException
                     Please provide a value, Name is required

Syntax:
    console.log(), debug(), info(), error(), warn() ...
                   
Ex:
index.js

function DeleteClick()
{
    console.log("Delete Button Clicked");
   flag = confirm("Delete\nRecord will be deleted");
   if(flag==true){
      console.warn("OK Button Clicked - Record will delete");
      document.querySelector("p").outerHTML = "<h2>Delete Confirmed</h2>";
   } else {
      alert("You canceled..");
      console.error("Cancel Clicked");
   }
}

7 March
====================================================================================================================
Output Techniques
- alert()                    : undefined
- confirm()                : true/false
- document.write()        : new screen
- innerText                : text without formats
- innerHTML                : text with markup
- outerHTML                : replacing the element
- console methods        : developer tools

                            JavaScript Input Methods
- Input is the process of taking value from client and handle the value in browser memory or to manage DOM.

- JavaScript can take input from
        a) Query String
        b) Prompt()
        c) Form Input Elements


                                    Query String

- It is a reference value created and appended into browser as URL.
- It is present in browser address bar.
- User can input a value into page from query string.
- Query string is appended into URL using "?"

                page.html ? uname=john
                page.html ? uname=john&age=23

- Querystring is accessed and used in page by using Browser Object [BOM] "location".

                location.search   => return the query string

Ex:
index.js

function bodyload(){
   string = location.search;
   username = string.substring(string.indexOf("=")+1);
   document.querySelector("span").innerHTML = username;
}

index.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script type="text/javascript" src="src/scripts/index.js"></script>
</head>
<body onload="bodyload()">
   Your Name: <span></span>
</body>
</html>

                                    prompt()
- It is an input box provided by browser to accept input from user.

Syntax :
                    prompt("Message", "default_value");
                    prompt("Message");

- Prompt returns

                Empty String  [ "  " ]        : On OK without value
                  String     [value entered]    : On OK with value = string
                null                        : On Cancel with or without value

Ex:
index.js

function bodyload(){
    username = prompt("Enter User Name");
    age = prompt("Enter Age");
    if(username=="") {
       alert("Name can't be empty");
    } else if(username==null) {
       alert("You Canceled");
    } else {
        document.querySelector("span").innerHTML = username + "<br>" + "Your Age :" + age;
    }
}

index.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script type="text/javascript" src="src/scripts/index.js"></script>
</head>
<body onload="bodyload()">
   Your Name: <span></span>
</body>
</html>

                           Form Input Elements
- You can accept input  from user by using various form elements like
    textbox
    password
    checkbox
    dropdown
    listbox
    number, range, radio, etc..

Ex:
index.js

function CreateClick(){
    folderTextBox = document.getElementById("FolderName");
    error = document.getElementById("Error");

    if(folderTextBox.value=="") {
       error.innerHTML = "Folder Name Required";  
    } else {
    document.querySelector("p").innerHTML += folderTextBox.value + "<br>";
    folderTextBox.value = "";
    error.innerHTML = "";
    }
}

index.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script type="text/javascript" src="src/scripts/index.js"></script>
</head>
<body>
    <input type="text" id="FolderName" placeholder="Folder Name"> <button onclick="CreateClick()">Create Folder</button>
    <div id="Error" style="color:red"></div>
   <p></p>
</body>
</html>

# 8th March 2023
============================

Various Input methods
- Query String
            ?ref=value
            location.search
- Prompt , string | null
- Form Input Elements
    text, number, check, radio, dropdown, listbox etc..    | string


Ex: HTML, CSS, Bootstrap

1. Install Bootstrap for your project

        > npm install bootstrap  --save
        > npm install bootstrap-icons --save
        > npm install jquery --save

    node_modules
        bootstrap/dist/css/bootstrap.css
        bootstrap-icons/font/bootstrap-icons.css

        jquery/dist/jquery.js
        bootstrap/dist/js/bootstrap-bundle.js
        bootstrap/dist/js/popper.js

2. Link all bootstrap file to your HTML page

Ex: Input with Modal in bootstrap

input-demo.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Input Demo</title>
    <link rel="stylesheet" href="../node_modules/bootstrap/dist/css/bootstrap.css">
    <link rel="stylesheet" href="../node_modules/bootstrap-icons/font/bootstrap-icons.css">
    <script src="../src/scripts/input-demo.js"></script>
</head>
<body class="container-fluid">
    <div id="RegisterContainer">
    <h2>JavaScript Form Input</h2>
    <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#register">Register Product</button>
    </div>

    <div class="modal fade" id="register">
        <div class="modal-dialog">
          <div class="modal-content">
             <div class="modal-header">
                <h3> <span class="bi bi-cart4"></span> Register Product</h3>
                <button class="btn-close" data-bs-dismiss="modal"></button>
             </div>
             <div class="modal-body">
                <dl>
                    <dt>Product Name</dt>
                    <dd><input class="form-control" type="text" id="Name"></dd>
                    <dt>Price</dt>
                    <dd><input class="form-control" type="number" id="Price"></dd>
                    <dt>City</dt>
                    <dd>
                        <select class="form-select" id="City">
                            <option>Delhi</option>
                            <option>Hyd</option>
                            <option>Mumbai</option>
                        </select>
                    </dd>
                    <dt>Stock</dt>
                    <dd class="form-switch">
                        <input class="form-check-input" id="Stock" type="checkbox"> Available
                    </dd>
                    <dt>Manufactured</dt>
                    <dd>
                        <input class="form-control" type="date" id="Manufactured">
                    </dd>
                </dl>
             </div>
             <div class="modal-footer">
                <button id="btnModelRegister" data-bs-dismiss="modal" onclick="RegisterClick()" class="btn btn-success">Register</button>
                <button class="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
             </div>
          </div>
        </div>
    </div>

    <div id="DetailsContainer" style="display:none">
        <h3>Product Details</h3>
        <dl class="row">
            <dt class="col-4">Name</dt>
            <dd class="col-8" id="lblName"></dd>
            <dt class="col-4">Price</dt>
            <dd class="col-8" id="lblPrice"></dd>
            <dt class="col-4">City</dt>
            <dd class="col-8" id="lblCity"></dd>
            <dt class="col-4">Stock</dt>
            <dd class="col-8" id="lblStock"></dd>
            <dt class="col-4">Manufactured</dt>
            <dd class="col-8" id="lblMfd"></dd>
        </dl>
        <button onclick="EditClick()" data-bs-toggle="modal" data-bs-target="#register" class="btn btn-warning">
            <span class="bi bi-pen"></span> Edit
        </button>
        <a href="./input-demo.html" class="btn btn-primary">
            New Product
        </a>
    </div>

    <script src="../node_modules/jquery/dist/jquery.js"></script>
    <script src="../node_modules/bootstrap/dist/js/bootstrap.bundle.js"></script>
</body>
</html>


input-demo.js

function RegisterClick(){
    document.getElementById("DetailsContainer").style.display = "block";
    document.getElementById("RegisterContainer").style.display = "none";

    document.getElementById("lblName").innerHTML = document.getElementById("Name").value;
    document.getElementById("lblPrice").innerHTML = document.getElementById("Price").value;
    document.getElementById("lblCity").innerHTML = document.getElementById("City").value;
    document.getElementById("lblMfd").innerHTML = document.getElementById("Manufactured").value;

    stockStatus = "";
    stockCheckBox = document.getElementById("Stock");
    if(stockCheckBox.checked) {
        stockStatus = "Available";
    } else {
        stockStatus = "Out of Stock";
    }
    document.getElementById("lblStock").innerHTML = stockStatus;

}

function EditClick(){
    document.getElementById("btnModelRegister").innerHTML = "Save";
    document.getElementById("btnModelRegister").className = "btn btn-info";
}


Task:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inox Movies</title>
    <link rel="stylesheet" href="../node_modules/bootstrap/dist/css/bootstrap.css">
    <link rel="stylesheet" href="../node_modules/bootstrap-icons/font/bootstrap-icons.css">
</head>
<body class="container-fluid">
    <h2>Inox Movies</h2>
    <button class="btn btn-danger" data-bs-target="#movies" data-bs-toggle="modal">Book Ticket</button>
    <div class="modal" id="movies">
       <div class="modal-dialog modal-fullscreen">
            <div class="modal-content">
                <div class="modal-header">
                    <h4>Book Ticket</h4>
                    <button class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <div class="d-flex justify-content-around">
                        <div>
                            <select class="form-select">
                                <option>Select Movie</option>
                                <option>Top Gun - Maverick</option>
                                <option>Pathaan - Hindi</option>
                            </select>
                        </div>
                        <div>
                            <select class="form-select">
                                <option>Select Cinema</option>
                                <option>Inox GVK </option>
                                <option>Inox Ammerpet</option>
                            </select>
                        </div>
                        <div>
                            <select class="form-select">
                                <option>Select Date</option>
                                <option>Today 08-March </option>
                                <option>Tomorrow 09-March</option>
                            </select>
                        </div>
                        <div>
                            <select class="form-select">
                                <option>Select Time</option>
                                <option> 10:30 AM </option>
                                <option> 5:40 PM</option>
                            </select>
                        </div>
                        <div>
                            <select class="form-select">
                                <option>Select Seats</option>
                                <option>1</option>
                                <option>2</option>
                            </select>
                        </div>
                        <div>
                           <button class="btn btn-danger">Book</button>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    </div>
    <script src="../node_modules/jquery/dist/jquery.js"></script>
    <script src="../node_modules/bootstrap/dist/js/bootstrap.bundle.js"></script>
</body>
</html>
# 9th March
=================================
Summary
- JavaScript history and versions
- Features and Drawbacks
- Integrating JavaScript client side
- JavaScript reference techniques
- JavaScript Input and Output

                            JavaScript Language Basics
1. Variables
2. Data Types
3. Operators
4. Statements
5. Functions

                                  Variables
- Variables are storage locations in memory, where you can store a value and use it as a part of any expression.

- Variables have 3 phase of configuration

        a) Declaration
        b) Assignment
        c) Initialization

         var x;                    declaring
         x = 10;                assignment

         var y=10;                initialization

- JavaScript allows to use variables without declaring if it is not in strict mode

<script>
     x = 10;                                // valid
     document.write("x=" + x);
</script>

<script>
   "use strict";
    x = 10;                                //invalid  x is not defined
    document.write("x=" + x);    
</script>

- If Javascript is in strict mode, then you have to declare or initialize a variable.

- JavaScript variables can be initialized or declared by using 3 keywords

        a) var
        b) let
        c) const

Var
- It defines a function scope variable
- You can declare in any block of a function and access from any another block in the same function.
- It allows declaring, initialization and assignment.

Ex:
<script>
     "use strict";
      function f1(){
        var x;                // declaring
        x = 10;               // assignment
        if(x==10)
        {
            var y = 20;        // initialization
        }
        document.write("x=" + x + "<br>" + "y=" + y);
      }
      f1();
</script>

- Var allows shadowing. It is the process of re-declaring or re-initializing same name identifier within the function scope.

Syntax:
    <script>
        "use strict";
         var x = 10;
         var x = 20;                        // shadowing
         document.write("x=" + x);
     </script>
Ex:
<script>
     "use strict";
      function f1(){
        var x;                // declaring
        x = 10;               // assignment
        if(x==10)
        {
            x = 30;             // assigning
            x = 40;             // assigning
            var x;
            x = 15;             // shadowing
            var y = 20;        // initialization
            y = 50;            // assigning
            var y = 60;         // shadowing
        }
        document.write("x=" + x + "<br>" + "y=" + y);
      }
      f1();
</script>

- Var allows hoisting. It is the process of declaring or initializing a variable after using.

Ex:
<script>
     "use strict";
      function f1(){
         x = 10;
         document.write("x=" + x);
         var x;         // hoisting
      }
      f1();
</script>
- Interpeter uses Lexical approach [bottom to top]

Let
- It is used to define a block scope variable.
- It is accessible within the specified block and its inner blocks.

        {
           block outer - a
           {
            block inner - a is accessible to inner
            b - is not accessible to outer
           }
        }

- It allows declaring, initialization and assignment.
- It will not allow shadowing and hoisting.

const
- It is also block scope variable.
- It allows only initialization.
- It will not allow declaring and assigning.
- It will not allow shadowing and hoisting.

Syntax:
        const x;            // invalid
        x = 10;            // invalid

        const x = 10;        // valid

# 10th March 2023
=====================================
- Global scope of variable is defined by declaring outside function and inside a module scope.

Ex:
<script>
   "use strict";
    var x = 10;
    let y = 20;
    const z = 30;
    function f1()
    {
       document.write("function 1 <br> x=" + x + "<br>y=" + y + "<br>z=" + z + "<br>");
    }
    function f2()
    {
      document.write("function 2 <br> x=" + x + "<br>y=" + y + "<br>z=" + z + "<br>");
    }
    f1();
    f2();
</script>

FAQ: Can we define a global variable inside a function?
Ans : Yes.
        a) You have to turn off strict mode and define a variable in function
            without keyword.
Ex:
<script>
    var x = 10;
    let y = 20;
    const z = 30;
    function f1()
    {
        a = 100;
       document.write("function 1 <br> x=" + x + "<br>y=" + y + "<br>z=" + z + "<br> a=" + a + "<br>");
    }
    function f2()
    {
      document.write("function 2 <br> x=" + x + "<br>y=" + y + "<br>z=" + z + "<br> a=" + a + "<br>");
    }
    f1();
    f2();
</script>


        b) You can declare a global variable in side function using
            "window" object.

Ex:
<script>
    "use strict";
    var x = 10;
    let y = 20;
    const z = 30;
    function f1()
    {
        window.a = 100;
       document.write("function 1 <br> x=" + x + "<br>y=" + y + "<br>z=" + z + "<br> a=" + a + "<br>");
    }
    function f2()
    {
      document.write("function 2 <br> x=" + x + "<br>y=" + y + "<br>z=" + z + "<br> a=" + a + "<br>");
    }
    f1();
    f2();
</script>

- Variable naming rules

    * Name must start with an alphabet or can start with _ .
    * _ is used for configures lot of constructs.
    * _  refers that variable requires further implementation.

                   var product;            // its functionality is final
                   var _product;            // its need to be implemented

    * Don't use special chars in variable
    * Name can be alpha numeric

                    var product2020;

    * Name is case sensitive.
    * Name can be max 255 chars long.
    * Avoid using single char and long variable name.
    * Avoid using keywords
                    var const;        // invalid
                    var if;            // invalid
    * Always use cameCase for name.

                    var userPassword;
                   
                        PMD, Sonar - Code Analyzer

- You can configure multiple variables with single keyword reference.

<script>
    var x, y, z;
    x = 10;
    y = 20;
    z = 30;
    document.write("x=" + x +"<br>y=" + y + "<br>z=" + z);
</script>

<script>
    var x, y=50, z;
    x = 10;
    z = 30;
    document.write("x=" + x +"<br>y=" + y + "<br>z=" + z);
</script>

<script>
    const x=10, y=50, z=30;
    document.write("x=" + x +"<br>y=" + y + "<br>z=" + z);
</script>


<script>
    const x=y=z=30;
    document.write("x=" + x +"<br>y=" + y + "<br>z=" + z);
</script>

<script>
   let y;                    // undefined
   let x=y;                // undefined
   document.write("x=" + x + "<br>y=" + y);
</script>

- ES6 introduced de-structuring of variables, which allows to define multiple variables using "[ ]" meta character.

                var [a, b, c]  = [10, 20, 30];

                [ ] is an iterator, it needs only a collection of values to read.
       
                var [a,b,c] = 10;        // invalid  10 is not iterable

FAQ: How to create a collection of constants? [Enum]
Ex:
<script>
   const [x,y,z] = [10, 50, 20];
   document.write("x=" + x + "<br>y=" + y + "<br>z=" + z);
</script>

- Variable allows object de-structuring, object comprises properties, values are stored under the reference of a property.

        var {property1,  property2} = {property1:value, property2:value}

Ex:
<script>
   const {rate, count} = {rate:4.3, count:2000};
   document.write("Product Rating : " + rate + "<br> Count : " + count);
</script>


            [    ]            Iterator    collection of values
            {    }            object        set of properties and value


                                JavaScript Data Types
- JavaScript is not a strongly typed language.
- All JavaScript variables are implicitly typed.
- The data type of variables is decided according to value initialized or assigned.
- There is no restriction for type.
- Data Type defines "Data Structure". [DS]
- Data Structure defines data rules. [type, size]

            var x = 10;            // x is number
            x = "A";                // x is string
            x = true;                // x is boolean

- JavaScript allows various types of data, which is classified into 2 groups

        1. Primitive Types
        2. Non-Primitive Types

Primitive Types
- They are Immutable types.
- Their structure can't be changed
- They have fixed range for values.
- They use a stack. [LIFO]

    1. Number
    2. String
    3. Boolean
    4. Null
    5. Undefined
    6. Symbol [ES6]


# 11th March
=============================
- Not Strongly Typed = Weakly typed
- Implicitly Typed        = Dyamic Types
        var x;        undefined
        x = 10;    number
        x = true;    boolean

1. Primitive Types
- They are immutable
- Fixed range for values
- Stored in memory stack [LIFO]
- JavaScript Primitive Types

    a) Number
    b) String
    c) Boolean
    d) Null
    e) Undefined
    f) Symbol
    g) Bigint

                                    Number Type
- It represents a numeric value.
- A numeric value can be
        Signed Integer                -5
        Unsigned Integer            5
        Floating Point                34.30
        Double                        420.40
        Decimal                        4560.44 [29 places]
        Exponent                        2e3  [2 x 10(3) = 2000]
        Hexa                            0f0033  [0 to f]
        Octa                            0o748
        Binary                            0b1010
        Bigint                            2n [binary object] [bmp]

    var x = 10;
    var x = 2e3;
    var x = 0o76;
    var x = 0b1010;

- JavaScript is not strongly typed, so we have to explicitly verify the number type by using "isNaN()".

- It is a boolean function that returns true if value is not a number.

Ex:
<script>
   var age = prompt("Enter Age");
   if(isNaN(age)){
      document.write("Age must be number");
   } else {
      document.write("Your Age : " + age);
   }
</script>

- JavaScript provides parsing methods to convert a numeric string into number.
- A numeric string starts with number and can contain chars.
                        "10"        can be converted
                        "10A"        can be converted
                        "A10"        invalid
                        "10A20"    can be converted
- Parsing method
            parseInt()
            parseFloat()

<script>
     var age = parseInt(prompt("Enter Age"));
     document.write("Your Age : " + age + "<br>");
     document.write("Next Your you will be : " + (age+1));
</script>

<script>
     var rate = parseFloat(prompt("Interest Rate", "In %"));
     var interest = rate / 12 / 100;
     document.write("Interest = " + interest);
</script>

- JavaScript provides various operators to handle numeric expressions.
            +    Add
            -     Sub
            *    Mul
            /    Division
            %    Modulus
            **   Power            2**3 = 8
            ++
            --

- JavaScript provides "Math" object to handle numeric expressions and mathematical operations.
- A developer can convert a mathematical or scientific equation into JavaScript expression by using Math object

            Math.PI
            Math.sqrt
            Math.min
            Math.max
            Math.avg
            Math.cos
            Math.sin
            Math.pow etc..

var emi = P * r * Math.pow(1 + r, n) / Math.pow(1+r,n) - 1

- You can use "typeof" operator to check the data type of any reference value.
                var  x = 10;
                document.write(typeof  x);

Ex:
<script>
    var age = parseInt(prompt("Enter Age"));
    if((typeof age)=="number") {
        document.write("You will be " + (parseInt(age)+1));
    } else {
        document.write("Please enter a number");
    }
</script>

# 12th March 2023
====================
