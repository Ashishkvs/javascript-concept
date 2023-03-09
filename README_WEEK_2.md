
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