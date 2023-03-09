28 Feb
====================================================================================================================
- JavaScript Language
- Plugin's
- Libraries
- Widgets
- API
                                      JavaScript
                        https://www.ecma-international.org

- JavaScript is light weight Interpretted and Just-in-Time compiled programming language.
- Light weight refers to memory occupied and how heavy the application is.
- Interpretted refers to line by line translation.
- Compiled refers to traslating entire program, all lines of program are translated simultaneously at the same time.
            a) JIT compiled
            b) AOT compiled

- JIT [Just-in-Time] is the process where JavaScript is loaded into browser and compiled in browser.

- AOT [Ahead-of-Time]  is the process where JavaScript is compiled and processed at application level.

- We can use various engines and compilers
            a) Ivy
            b) Babel
            c) Node
            d) V8

- JavaScript is a language, which is used
            a) Client Side            : with HTML
            b) Server Side            : with Node JS
            c) Database                : MongoDB
            d) Animation Tools    : Flash, 3DS Max, etc..

- JavaScript supports various programming techniques and approaches
            a) Structural Programming
            b) Functional Programming
            c) Imperative Programming
            d) Object Oriented Programming etc..

- JavaScript is not an OOP language, It supports only few features of OOP.

Evolution of JavaScript

- 1990's Tim Berners Lee introduced HTML and Web
- 1990's early browsers were Mosaic, Netscape
- These browsers used HTML as Markup language and ECMAScript as client side script.
- In early 1995 Netscape appointed "Brendan Eich" to develop a script for browser.    [MDN]
                - ECMA International
                - MDN
- First it was named as "Moca" after that renamed as "Live Script".
- Script belongs - Netscape
- Netscape  given the rights of maintaing script to a company called "Sun Micro Systems".
- Sun Micro System named the script as "Java-Script".
- 2000 Netscape stopped it services, JavaScript was given to ECMA
- 2014 JavaScript
- 2015 ECMA  Version ES5 =  ECMAScript 2015,...2022..Next
- Current Latest version of JavaScript is "ECMAScript 2022"  [ES2022]
    [ES5, ES6,ES7, ES8...ES9, 2020, 2021, 2022]

Where to implement?
- HTML Client Side
- Node JS server side
- MongoDB database
- Flash, 3DS Max animations

What is the role of JavaScript with HTML?
- DOM Manipulations
        - Adding Elements into page
        - Remove Elements from Page
        - Update Data into Elements
- Client Side Validations
- Client Side Interactions
- Handling Plugin and Extentions

What is the role of JavaScript Server Side?
- Server Side Interactions
        a) Request
        b) Response
- Server side objects
        a) Memory
        b) OS
        c) Files
- Configuring API's
- Handling communication between client and database etc..

What is the role of JavaScript in Database?
- To handle CRUD Operations
- DBA


What is the role of JavaScript in Animations?
- Transitions
- Animations
- Keyframes
- 2D and 3D Games

What is the role of JavaScript in Mobile Apps?
- Toch events
- View Design
- Apache Cordova, Ionic, Native Script - JS from mobile


Setup Environment for JS
- WebPack
- Parcel


1 Mar
-----------
- What is JavaScript?
- What are the Versions of JavaScript?
- Where JavaScript is used?
- ECMA 2022

Setup Environment for JavaScript Project

1. Install "Node JS" on your  PC

    Node JS                : Server Side Programming Library
    Node Compiler        : It is used to compile and run JavaScript programs.
    NPM                    : Node Package Manager    
                                [Yarn, Composer, NuGet, Bower etc..]
                       
     - https://nodejs.org/en/
     - Download and Install  18x version

FAQ: What is Package Manager?
Ans : It is a software tool used by developers to install, update and remove
         libraries from project.

2. Check Node JS Version

        C:\>node  -v
        C:\>npm  -v

Note: Make sure that your PC is have Node version > 14 , NPM > 6

3. Download and Install "Visual Studio Code Editor"
    - Editor provides an IDE [Integrated Development Environment]
    - Build, Debug, Test, Deploy
                        "editorconfig.org"
   
            https://code.visualstudio.com/

4. Open Visual Studio Code Editor and Install extentions

            - Install "Live Server"
            - Install "VsCode-Icons"

Setup A Project for JavaScript
------------------------------------------
1. Create a new folder on your PC for JavaScript Project

            D:\JavaScript-Project

2. Open your Project folder in Visual Studio Code


3. Add following folders into project

            a) public            : It is used to keep all static resources
                                    [html, images, text, pdf, docx, ppt, mp4,..]

            b) src                : It is used to keep all dynamic resource
                                    [js, ts, css, sass, less etc..]

4.  Open Terminal in VS Code [Terminal is command line to run commands]
     - Change Power Shell to Command Prompt
    - Run the command
               
                > npm   init   [-y]

     - It generates a file "package.json".
    - package.json is a file that contains project meta data.

5. Install  ESLint configuration, It is used to verify the code and report the issues in code. [ issues related to coding standards]

        > npm init @eslint/config

2 March
====================================================================================================================
Environment Setup
- Node JS
    Node Compiler, NPM
- Visual Studio Code Editor
        Live Server
        Vscode-icons
- Create a new Project
- Setup Project
        > npm  init              [package.json]
        public
        src
        > npm  init @eslint/config


                                JavaScript Client Side
                                -----------------------------
- JavaScript is used client side with HTML.
- JavaScript is used for
        a) DOM Manipulations
                - Adding Elements
                - Removing Elements
                - Updating data into elements
        b) Handling browser objects
                - Location
                - Navigator
                - History
                - Document
                - Window
        c) Client Side Validations
                - Verifying Input
                - Ensure that contradictionary and unauthorized data is not stored into
                  database.
                - Reduce burden on server

FAQ: What are the issues with JavaScript?
Ans:
 - JavaScript is not a strongly typed language.
             var  age = 23;
            age = "John";        // valid
            age = true;        // valid

 - JavaScript is not implicitly strictly typed
            x = 10;           // valid

 - JavaScript is not an OOP language
            - Extensibility Issues
            - Code Level Security Issues
            - Reusability Issues

 - JavaScript is not having features for dynamic polymorphism.

 - JavaScript can be disabled by browser.


FAQ: What is solution?
Ans : TypeScript


FAQ: How JavaScript converts Static DOM into Dynamic DOM?
Ans : By Integrating JavaScript functions into page.

FAQ: How JavaScript can be integrated into Page?
Ans:  In 3 different ways

        a) Inline
        b) Embedded
        c) External File

Inline JavaScript:

- In this technique JavaScript functions are directly written in HTML elements start tag.

            <button  onclick="window.print()"> Print </button>

- It is faster in responding.
- It is not good for reusability.

Ex:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h2>JavaScript - ES6</h2>
    <button onclick="window.print()">Print</button>
</body>
</html>

Embedded
---------------
- JavaScript functions are kept in a <script> container and can be accessed from any element.
- You can reuse the funcitons.
- The script container can be in <head> or <body>.
- You have to define functions in <script> container
   
        <script>
             function  PrintPage(){
                window.print();
             }
        </script>

        <button onclick="PrintPage()"> Print </button>

- It is slower when compared to inline.

Ex:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        function PrintPage(){
             window.print();
        }
    </script>
</head>
<body>
    <h2>JavaScript - ES6</h2>
    <button onclick="PrintPage()">Print</button>
    <button onclick="PrintPage()">Print Page</button>
</body>
</html>

FAQ: What is difference between script in head and body?
Ans: Script in head section is intended to load into browser memory and later accessed by page when ever required.
       Script in body section is intended to load into page directly, it is not in memory of
       browser.

3 March
====================================================================================================================
1. JavaScript Inline
2. JavaScript Embedded

                Ms-Excel         .xls,  .xlsx, .csv            MIME   application/msexcel
                Images        .jpg, .jpeg, .jfif            MIME      image/jpeg

FAQ: Where to embed in head or body?
FAQ: What is the MIME type of script? [Multi purpose Internet Mail Extentions]
Ans :  JavaScript is used in various methods
            a) Interpretted
            b) Compiled
        If your JavaScript is used with HTML in browser then MIME type is defined as
                "text/javascript"        - Interpretted
                "text/babel"            - JavaScript is used with babel compiler        
                "text/module"            - JavaScript module system

Syntax:
        <script  type="text/javascript">  </script>
        <script  type="text/babel"> </script>

FAQ: What is strict mode for JavaScript?
Ans:  JavaScript is not implicitly strictly typed. It will not follow programming rules and
        standards. You have to manually turn on "Strict Mode".
        If strict mode is ON then developer have to write as per standards.

        You can turn on strict mode by using "use strict";  in your code snippet.

EX:
<script>
    "use strict";
    x = 10;                                // invalid   - x is not defined   // valid if strict off
    document.write("x=" + x);
</script>

FAQ: How to target JavaScript for Legacy browsers? [Old Version Browsers]
Ans : Developer can target new JavaScript code to the legacy browser by enclosing the code in HTML comments.

Syntax
        <script type="text/javascirpt">
            <!--
                 "use strict";
                ......
                ......
            -->
        </script>

Ex:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script type="text/javascript">
         <!--
            "use strict";
            function PrintPage(){
            window.print();
            }
          -->
    </script>
</head>
<body>
    <!--this is body section-->
    <h2>JavaScript Embedded</h2>
    <button onclick="PrintPage()">Print</button>
</body>
</html>

- Issue with embedded technique is
        a) It is slow
        b) You can't re-use across pages

                                JavaScript in External File
                                -----------------------------------
- JavaScript functions are written in a separate script file with extention ".js"
   
                index.js

                <!--
                "use strict";
                function PrintPage(){
                    window.print();
                }
                -->

- You can link the script file to any HTML page by using <script> element.

        <script  type="text/javascript" src="index.js"> </script>

- Features
        Clean spearation of code and design.
        Hard to test if it is embedded , [easy]
        Hard to extend if it is embedded , [easy]

- Issue
        Using a external file for HTML page will increase the number of requests.
        If number of requests are increased for page, then page load time will increase.
   
Ex:  src/scripts
index.js    
<!--
"use strict";
function PrintPage(){
window.print();
}
-->

index.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script type="text/javascript" src="src/scripts/index.js">
    </script>
</head>
<body>
    <!--this is body section-->
    <h2>JavaScript External File</h2>
    <button onclick="PrintPage()">Print</button>
</body>
</html>

                                         Minification
- It is coding technique used by developers to reduce the size of file. [Compress]
- Minified files are used in Production
- Unminified files are use is Development

Ex:
1. Visit any minification site   "https://www.toptal.com/developers/javascript-minifier&quot;

2. Paste your actual JS code

3. Minify

4. Copy minified code

5. Create a new file

        index.min.js

6. paste the minified code

7. link the minified file to page.

                                        Bundling
                                    [WebPack, Parcel]

4 March
======================================================================================================================
FAQ: How JavaScript takes control over HTML elements?

1. JavaScript can access HTML elements in page by using DOM hierarchy.
        window => document => images[], forms[]

    - It is faster in accessing elements.
    - It is the native method for JS.
    - If any element changes its position in page, then you have to update the index
      everytime.

Ex:
    index.js

  function bodyload(){
    window.document.images[0].src = "public/images/shoe.jpg";
    window.document.images[0].width = 200;
    window.document.forms[0].elements[0].value = "Register";
    window.document.forms[1].elements[1].value  = "Login";
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
    <img width="100" height="100" border="1">
    <div>
        <form>
            <h2>Reigster</h2>
            Your Email <input type="button"> <input type="email">
        </form>
    </div>
    <div>
        <form>
            <h2>Login</h2>
            Your Mobile : <input type="text"> <input type="button">
        </form>
    </div>
</body>
</html>

2. JavaScript can refer elements by using "name".

- Every element can be defined with a name.
- JavaScript can access element by using name.
- You can't access any child element directly.
- Everytime to access a child you have to refer its parent.
- HTML can have same name for multiple elements.

Ex:
 index.js

function bodyload(){
    pic.src = "public/images/shoe.jpg";
    pic.width = 200;
    frmRegister.btnRegister.value = "Register";
    frmLogin.btnLogin.value = "Login";
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
    <img name="pic" width="100" height="100" border="1">
    <div>
        <form name="frmRegister">
            <h2>Reigster</h2>
            Your Email  <input type="email"> <input type="button" name="btnRegister">
        </form>
    </div>
    <div>
        <form name="frmLogin">
            <h2>Login</h2>
            Your Mobile : <input type="text"> <input name="btnLogin" type="button">
        </form>
    </div>
</body>
</html>

3. JavaScript can refer HTML elements by using ID

    - JS provides a method  "document.getElementById()"
    - You can access any element from any level of hierarchy.
    - ID reference have a confilct with CSS ID.
    - In CSS same ID can be defined for multiple elements.

Ex:
  index.js
function bodyload(){
     document.getElementById("pic").src = "public/images/shoe.jpg";
     document.getElementById("btnRegister").value = "Register";
     document.getElementById("btnLogin").value = "Login";
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
    <img name="pic" id="pic" width="100" height="100" border="1">
    <div>
        <form name="frmRegister">
            <h2>Reigster</h2>
            Your Email  <input type="email"> <input id="btnRegister" type="button" name="btnRegister">
        </form>
    </div>
    <div>
        <form name="frmLogin">
            <h2>Login</h2>
            Your Mobile : <input type="text"> <input id="btnLogin" name="btnLogin" type="button">
        </form>
    </div>
</body>
</html>

4. JavaScript can access HTML elements by using CSS selectors.
        Primary Selectors
            type, id, class
        Rational Selectors
            child, adjacent, siblings
        Attriubte Selectors
        Dynamic Pseudo classes
        Structural Pseudo classes
        Element state pseudo classes
        Validation state pseudo classes

 - JavaScript uses the method  "document.querySelector()"

Ex:
    index.js

function bodyload(){
    document.querySelector("img").src = "public/images/shoe.jpg";
    document.querySelector("#btnRegister").value = "Register";
    document.querySelector(".btn-login").value = "Login";
    document.querySelector("nav div img").src = "public/images/shoe.jpg";
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
    <img name="pic" id="pic" width="100" height="100" border="1">
    <nav>
        <div>
             <img width="300" height="200">
        </div>
    </nav>
    <div>
        <form name="frmRegister">
            <h2>Reigster</h2>
            Your Email  <input type="email"> <input id="btnRegister" type="button" name="btnRegister">
        </form>
    </div>
    <div>
        <form name="frmLogin">
            <h2>Login</h2>
            Your Mobile : <input type="text"> <input id="btnLogin" class="btn btn-login" name="btnLogin" type="button">
        </form>
    </div>
</body>
</html>

5. JavaScript provides various techniques to access multiple elements
   
        document.getElementsByTagName()
        document.getElementsByClassName()
        document.getElementsByName()

                             Input and Output
