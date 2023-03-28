
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

# 13th March 2023
====================
Number Types
- What are the values reffered as numbers?
- How to parse ?
- How to check the type?
- Math

onload
onclick

Ex:
emi.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EMI Calculator</title>
    <link rel="stylesheet" href="../node_modules/bootstrap/dist/css/bootstrap.css">
    <style>
        .box {
            background-color: white;
            box-shadow: 6px 6px 3px gray;
            padding: 20px;
        }
    </style>
    <script src="../src/scripts/emi.js" type="text/javascript"></script>
</head>
<body class="container-fluid">
    <h1>Personal Loan EMI Calculator</h1>
    <div class="box">
        <div class="row">
            <div class="col">
                Amount you need &#8377; <input type="text" onchange="AmountTextBoxChanged()" id="txtAmount" size="10">
            </div>
            <div class="col">
                for <input type="text" size="2" id="txtYears" onchange="YearTextBoxChanged()"> years
            </div>
            <div class="col">
                interest rate <input type="text" id="txtRate" size="4" onchange="RateTextBoxChanged()"> %
            </div>
        </div>
        <div class="row mt-4">
            <div class="col">
                <div class="d-flex">
                    <span>&#8377; 50,000 </span>
                    <input type="range" onchange="AmountChange()" id="rangeAmount" style="width:150px" class="form-range" value="50000" min="50000" max="1000000">
                     <span>&#8377; 10,00,000</span>
                </div>
            </div>
            <div class="col">
                <div class="d-flex">
                    <span> 1 </span>
                    <input type="range" onchange="YearsChange()" id="rangeYears" style="width:150px" class="form-range" value="1" min="1" max="5">
                     <span>5</span>
                </div>
            </div>
            <div class="col">
                <div class="d-flex">
                    <span> 10.25% </span>
                    <input type="range" id="rangeRate" onchange="RateChange()" style="width:150px" class="form-range" value="10.25" step="0.01" min="10.25" max="18.45">
                     <span>18.45%</span>
                </div>
            </div>
        </div>
        <div class="row mt-4">
            <div class="col text-center">
                <button onclick="CalculateClick()" class="btn btn-primary">Calculate</button>
            </div>
        </div>
    </div>
    <p style="font-size:30px" class="mt-3 text-center" id="result"></p>
</body>
</html>


emi.js

function AmountChange(){
    document.getElementById("txtAmount").value = document.getElementById("rangeAmount").value;  
}
function YearsChange(){
    document.getElementById("txtYears").value = document.getElementById("rangeYears").value;
}
function RateChange(){
    document.getElementById("txtRate").value = document.getElementById("rangeRate").value;
}
function CalculateClick(){
    var p = parseInt(document.getElementById("txtAmount").value);
    var n = parseInt(document.getElementById("txtYears").value) * 12;
    var r = parseFloat(document.getElementById("txtRate").value)/12/100;

    var emi = p * r * Math.pow(1 + r, n) / Math.pow(1 + r, n) - 1;

    document.getElementById("result").innerHTML = "Your monthy installment amount is <b> <span class='text-primary'> &#8377;" + Math.round(emi) + "</span></b> for " + p + " in " + (n/12) + " years.";
}
function AmountTextBoxChanged(){
    document.getElementById("rangeAmount").value = document.getElementById("txtAmount").value;
}
function YearTextBoxChanged(){
    document.getElementById("rangeYears").value = document.getElementById("txtYears").value;
}
function RateTextBoxChanged(){
    document.getElementById("rangeRate").value = document.getElementById("txtRate").value;
}

Task : BMI Calculator

Ex:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BMI</title>
    <link rel="stylesheet" href="../node_modules/bootstrap/dist/css/bootstrap.css">
    <link rel="stylesheet" href="../node_modules/bootstrap-icons/font/bootstrap-icons.css">
    <script>
       function bodyload(){
        var yourWeight = parseInt(prompt("Enter Weight"));
            var yourStatus = document.getElementById("yourStatus");
            if(yourWeight<53) {
                yourStatus.style.marginLeft = "200px";
            } else if(yourWeight>54 && yourWeight<70) {
                yourStatus.style.marginLeft = "600px";
            }
       }
    </script>
</head>
<body class="container-fluid" onload="bodyload()">
    <h2>BMI Status</h2>
    <div class="progress">
        <div class="progress-bar bg-dark me-1" style="width:400px">
             Underweight below 53 kg
        </div>
        <div class="progress-bar bg-success me-1" style="width:400px">
           Normal Weight 54 to 70kg
       </div>
       <div class="progress-bar bg-warning me-1" style="width:400px">
         Overweight  70 to  86 kg
        </div>
        <div class="progress-bar bg-danger" style="width:400px">
            Obese above 86 kg
       </div>
    </div>
    <div>
      <div id="yourStatus">
        <span class="bi bi-caret-down-fill"></span>
        <div>You</div>
      </div>
    </div>
</body>
</html>

# 14 th MArch 2023
========================
JavaScript String
- String is a literal with group of characters enclosed in
        a) Double Quotes    "     "
        b) Single Quotes        '    '
        c)  Backticks            `    `

- Double and Single quotes are used for inner and outer strings.

     var link = "<a href='home.html'> Home </a>";
     var link  = '<a href="home.html"> Home </a>';

- String with single and double quote requires lot of contact technique with dynamic value. [   string + dynamic  + string ]

Syntax:
            "string" + var  + "string" + (expression) + "string";

- ES5+ versions can use "backtick" for string.
- Backtick allows a string which can embed expression
- ES5+ versions introduced data binding expression  "${ }"

Syntax:
            `string ${var} string ${expression} string`

Ex:
<script>
    var username = prompt("Enter Name");
    var age = parseInt(prompt("Enter Age"));
    var msg1 = "Hello !" + " " + username + " " + "you will be" + " " + (age+1) + " " + "next year.<br>";
    var msg2 = `Hello ! ${username} you will be ${age+1} next year.<br>`;
    var msg3 = 'Hello ! ${username} you will be ${age+1} next year.';
    document.write(msg1);
    document.write(msg2);
    document.write(msg3);
</script>


Ex:
<script>
    var title = prompt("Enter Title");
    var loginName = prompt("Enter Login Name", "UserName, Email, Date");
    var loginType = prompt("Enter Login Type", "Text|Email|Date");
    var login = `
       <form>
        <h2>${title}</h2>
        <dl>
             <dt>${loginName}</dt>
             <dd><input type=${loginType}></dd>
        </dl>
        <button>Login</button>
       </form>
    `;
    document.write(login);
</script>

Note: Single and double quotes will not allow binding expressions.

Syntax: without binding expression

"Your monthy installment amount is <b> <span class='text-primary'> &#8377;" + Math.round(emi) + "</span></b> for " + p + " in " + (n/12) + " years.";

Syntax: with binding expression

`Your monthy installment amount is <b> <span class='text-primary'> &#8377; ${Math.round(emi)} </span> </b> for ${p} in ${(n/12)} years`.


- Several chars in a string are non-printable chars.
- You can print the non-printable chars by using "\"
                \char
                \\        => \
- These are reffered as escape sequence chars.
                \n        new line in console, alerts, confirm
                \v        vertical space
                \t        tab space

Syntax:
            var path = "D:\images\movie.jpg";
            document.write(path);
   
             D:imagesmovie.jpg

Syntax:
            var path = "D:\\images\\movie.jpg";
           
            D:\images\movie.jpg

- JavaScript provides various string methods for formatting and manipulations.

- String Formatting methods
        bold()
        italics()
        fontcolor()
        fontsize()
        sup()
        sub()
        toUpperCase()
        toLowerCase() etc..

- These string formatting functions must be used on "non-RC" type.

Ex:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>String</title>
    <script type="text/javascript">
        function RegisterClick(){
            var username = document.getElementById("UserName").value;
            var userError = document.getElementById("UserError");
            if(username=="")
            {
                userError.innerHTML = "User Name Required".fontcolor('red').fontsize(2).bold().italics();
            } else {
                document.write("Registered..");
            }
        }
        function ChangeCase(){
            var ifsc = document.getElementById("ifsc").value;
            document.getElementById("ifsc").value = ifsc.toUpperCase();
        }
    </script>
</head>
<body>
    <dl>
        <dt>User Name</dt>
        <dd><input type="text" id="UserName"></dd>
        <dd id="UserError"></dd>
        <dt>IFSC Code</dt>
        <dd><input type="text" onkeyup="ChangeCase()" size="6" id="ifsc"></dd>
    </dl>
    <button onclick="RegisterClick()">Register</button>
</body>
</html>

- JavaScript allows to format a string using "style" and "class".

        string.style.attributeName = "value";    

  Note: style attributes are written in camel case.

        background-color            backgroundColor
        text-align                        textAlign
        margin-left                    marginLeft

           styles are not directly applied to string, they are defined to element
        that handles string.

Ex:
       if(username=="")
            {
                userError.innerHTML = "User Name Required";
                userError.style.color = "red";
                userError.style.fontWeight = "bold";

            } else {
                document.write("Registered..");
            }
        }

- JavaScript allows to configure formats for elements using "css class"
- CSS class is applied by using "className" property.


Ex:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>String</title>
    <style>
        .error-style {
            color:red;
            font-weight: bold;
            font-style: italic;
        }
    </style>
    <script type="text/javascript">
        function RegisterClick(){
            var username = document.getElementById("UserName").value;
            var userError = document.getElementById("UserError");
            if(username=="")
            {
                userError.innerHTML = "User Name Required";
                userError.className = "error-style";

            } else {
                document.write("Registered..");
            }
        }
        function ChangeCase(){
            var ifsc = document.getElementById("ifsc").value;
            document.getElementById("ifsc").value = ifsc.toUpperCase();
        }
    </script>
</head>
<body>
    <dl>
        <dt>User Name</dt>
        <dd><input type="text" id="UserName"></dd>
        <dd id="UserError"></dd>
        <dt>IFSC Code</dt>
        <dd><input type="text" onkeyup="ChangeCase()" size="6" id="ifsc"></dd>
    </dl>
    <button onclick="RegisterClick()">Register</button>
</body>
</html>

# 15th March 2023
===================
Ex: Apply Format to Element dynamically.

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>String Format</title>
    <link rel="stylesheet" href="../node_modules/bootstrap/dist/css/bootstrap.css">
    <link rel="stylesheet" href="../node_modules/bootstrap-icons/font/bootstrap-icons.css">
    <style>
        .dark-theme {
            padding: 10px;
            background-color: black;
            color:white;
        }
    </style>
    <script>
        function ThemeChange(){
            var ThemeCheckbox = document.getElementById("ThemeCheckbox");
            var frmLogin = document.getElementById("frmLogin");
            var loginButton = document.querySelector("button");

            if(ThemeCheckbox.checked) {
                frmLogin.className = "dark-theme";
                loginButton.className = "btn btn-light w-100";
            } else {
                frmLogin.className = "p-3";
                loginButton.className = "btn btn-dark w-100";
            }
        }
    </script>
</head>
<body class="container-fluid">
    <div class="d-flex justify-content-center align-items-center" style="height:400px">
        <form id="frmLogin">
            <div class="form-switch">
                <input type="checkbox" onchange="ThemeChange()" id="ThemeCheckbox" class="form-check-input"> Dark Theme
            </div>
            <h2><span class="bi bi-personal-fill"></span> User Login</h2>
            <dl>
                <dt>User Name</dt>
                <dd><input type="text" class="form-control"></dd>
                <dt>Password</dt>
                <dd><input type="password" class="form-control"></dd>
            </dl>
            <button class="btn btn-dark w-100">Login</button>
        </form>
    </div>
</body>
</html>

                    String Manipulation Methods and Properties

1. length            : It returns the total number of chars in a string.
                      String empty is verified by using empty quotes " ".

Ex:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>String</title>
    <script>
        function SubmitClick(){
            var UserName = document.getElementById("UserName").value;
            var UserError = document.getElementById("UserError");
            if(UserName==""){
                UserError.innerHTML = "User Name Required".fontcolor('red');
            } else {
                document.write("Registered..");
            }
        }
        function VerifyName(){
            var UserName = document.getElementById("UserName").value;
            var UserError = document.getElementById("UserError");
            if(UserName.length<4) {
                UserError.innerHTML = "Name too short min 4 chars".fontcolor('red');
            } else {
                UserError.innerHTML = "";
            }
            if(UserName.length>10) {
                UserError.innerHTML  = "Name too long max 10 chars".fontcolor('red');
            }
            if(UserName=="") {
                UserError.innerHTML = "User Name Required".fontcolor('red');
            }
        }
    </script>
</head>
<body>
    <dl>
        <dt>User Name</dt>
        <dd><input type="text" onkeyup="VerifyName()" id="UserName"></dd>
        <dd id="UserError"></dd>
    </dl>
    <button onclick="SubmitClick()">Submit</button>
</body>
</html>

2. charAt()        : It returns the character present at specified index.

                      var str = "Welcome";
                      str.charAt(1);            // e
                      str.charAt(15);            // void - no return type

3. charCodeAt()    : It returns the ASCII code character present at sepcified    
                      index.

                       var str = "Ajay";
                       str.charCodeAt(0);        // 65


Ex:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        function VerifyUser(){
            var UserName = document.getElementById("UserName").value;
            var UserError = document.getElementById("UserError");
            if(UserName.charCodeAt(0)>=65 && UserName.charCodeAt(0)<=90) {
                UserError.innerHTML = "";
            } else {
                UserError.innerHTML = "Name must start with uppercase letter".fontcolor('red');
            }
        }
    </script>
</head>
<body>
    User Name: <input type="text" onblur="VerifyUser()" id="UserName"> <span id="UserError"></span>
</body>
</html>

4. indexOf()            : It returns the index number of character present at
                          specified index.

                        var str = "Welcome";
                        str.indexOf("e");            // 1    only first occurance
                        str.indexOf("b");            //  -1

Ex:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        function VerifyEmail(){
            var Email = document.getElementById("Email").value;
            var EmailError = document.getElementById("EmailError");
            if(Email.indexOf("@")==-1) {
                EmailError.innerHTML = "Invalid Email - Please include @ in Email".fontcolor('red');
            } else {
                EmailError.innerHTML = "";
            }
        }
    </script>
</head>
<body>
    Email : <input type="email" onblur="VerifyEmail()" id="Email"> <span id="EmailError"></span>
</body>
</html>

5. lastIndexOf()            : It gets the last occurance index number of a char.
           
                            var str = "Welcome";
                            str.indexOf("e");            // 1
                            str.lastIndexOf("e");        // 6
                            str.lastIndexOf("b");        // -1


# 16th March 2023
==========================
String Manipulations
- length
- charAt()
- charCodeAt()
- indexOf()
- lastIndexOf()
- startsWith()                : It returns boolean true if string starts with specified
                              chars.
- endsWith()                : It returns true if string ends with specified chars


Syntax:
            var str = "Welcome";
            str.startsWith("w");        // false
            str.startsWith("W");        // true
            str.endsWith("e");        // true
Ex:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        function VerifyEmail(){
            var email = document.getElementById("Email").value;
            var emailError = document.getElementById("EmailError");

            if(email.endsWith("outlook.com")) {
                emailError.innerHTML = "";
            } else {
                emailError.innerHTML = "Please provide a valid Skype Account".fontcolor('red');
            }
        }
        function VerifyCard(){
            var card = document.getElementById("Card").value;
            var pic = document.getElementById("pic");
            if(card.startsWith("44")){
                pic.src="../public/images/visa.png";
            } else if (card.startsWith("55")){
                pic.src="../public/images/master.png";
            } else {
                pic.src = "";
                pic.alt = "N/A";
            }
        }
    </script>
</head>
<body>
    <dl>
        <dt>Your Skype Account</dt>
        <dd><input type="email" onblur="VerifyEmail()" placeholder="@outlook" id="Email"></dd>
        <dd id="EmailError"></dd>
        <dt>Your Card Number</dt>
        <dd><input type="text" onkeyup="VerifyCard()" id="Card"><img width="50" align="left" height="20" id="pic"></dd>
    </dl>
</body>
</html>

- slice()            : It reads and returns the chars between specified index.
                       
Syntax:
        slice(startIndex, endIndex)        => chars between specified index
        slice(startIndex)                    => chars from start to end index
        slice(7,4)                            => It can't read, end index must be    
                                                the index after start.

- substr()            : It reads specified chars from given index.
   
Syntax:
        substr(startIndex, howMany)
        substr(7, 4);                        => from 7 it reads 4 chars
        substr(7,0);                        => will not read any chars
        substr(7);                            => read upto end

- substring()        : It reads specified chars bi-directional.

Syntax:
        substring(startIndex, endIndex)    => end Index can be any direction
        substring(7)                            => from 7 to end
        substring(7,0)                        => from 7 to 0 [start]

Ex:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        function GetDetails(){
            var email = document.getElementById("Email").value;
            var atPos = email.indexOf("@");
            var id = email.substring(atPos,0);
            var domain = email.substring(atPos + 1);
            document.getElementById("Id").innerHTML = id;
            document.getElementById("domain").innerHTML = domain;
        }
    </script>
</head>
<body>
    Your Email : <input type="email" onblur="GetDetails()" id="Email">
    <dl>
        <dt>Your ID</dt>
        <dd id="Id"></dd>
        <dt>Domain</dt>
        <dd id="domain"></dd>
    </dl>
</body>
</html>

- split()            : It splits a string at specified char and returns an array.

Syntax:
        string.split(' char ');

Ex:
<script>
    var products = "Samsung TV-46000.44, Nike Casuals-5000.44";
    var [tv, shoe] = products.split(',');
    var [name, price] = shoe.split('-');
    document.write(`<h2>Shoe Details</h2>
        Name : ${shoe.substring(shoe.indexOf("-"),0)} <br>
        Price: ${shoe.substring(shoe.indexOf("-")+1)} <br>
        <hr>
        Shoe Name: ${name} <br>
        Shoe Price: ${price}
    `);
</script>

Ex:
<script>
    var products = "Samsung TV-46000.44, Nike Casuals-5000.44";
    var [tv, shoe] = products.split(',');
    var details = shoe.split('-');
    document.write(`<h2>Shoe Details</h2>
        Name : ${shoe.substring(shoe.indexOf("-"),0)} <br>
        Price: ${shoe.substring(shoe.indexOf("-")+1)} <br>
        <hr>
        Shoe Name: ${details[0]} <br>
        Shoe Price: ${details[1]}
    `);
</script>

- trim()                : It is used to remove leading spaces in a string.
                      [space before and after string]

Syntax:
        string.trim()

Ex:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        function SubmitClick(){
            var UserId = document.getElementById("UserId").value;
            if(UserId.trim()=="john_nit") {
                document.write("Success..");
            } else {
                alert("Invalid UserId");
            }
        }
    </script>
</head>
<body>
    Your UserId:
    <input type="text" id="UserId">
    <button onclick="SubmitClick()">Submit</button>
</body>
</html>

- match()            :  It verifies your string by matching it against a regular
                       expression and return true if matched.

Syntax:
         string.match(/regularExpression/);

- Regular expression is built with meta characters and quantifiers.

Meta Characters
-----------------------
?                        zero or one occurance of a character.

Ex:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
       function SubmitClick(){
          var test = document.getElementById("test").value;
          if(test.match(/colou?r/)) {
              document.write(`Your entered : ${test}`);
          } else {
            alert("Only Color | Colour Allowed");
          }
       }
    </script>
</head>
<body>
        Your string : <input type="text" id="test"> <button onclick="SubmitClick()">Submit</button>
</body>
</html>














Text Attributes
- name
- id
- class
- value
- size
- placeholder
- autofocus
- minlength
- maxlength
- required
- list
- pattern            : It uses a regular expression to verify the format of input.
- disabled
- readonly