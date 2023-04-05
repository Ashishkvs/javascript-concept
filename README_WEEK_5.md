# 1st April 2023
=====================
Ex:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        var data = [
            {Category:"Electronics", Products:["Televisions","Mobiles"]},
            {Category:"Footwear", Products:["Casuals", "Boots"]}
        ];

        function bodyload(){
            for(var item of data) {
                var li = document.createElement("li");
                li.innerHTML = item.Category;

                var optgroup = document.createElement("optgroup");
                optgroup.label = item.Category;

                for(var product of item.Products){
                    var ul = document.createElement("ul");
                    var ulLi = document.createElement("li");
                    ulLi.innerHTML = product;
                    ul.appendChild(ulLi);
                    li.appendChild(ul);

                    var option = document.createElement("option");
                    option.text = product;
                    option.value = product;
                    optgroup.appendChild(option);
                }
                document.querySelector("ol").appendChild(li);
                document.querySelector("select").appendChild(optgroup);
            }
        }
    </script>
</head>
<body onload="bodyload()">
    <ol>

    </ol>
    <select>
       
    </select>
</body>
</html>


Ex: Details and Summary

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        var data = [
            {Category:"Electronics", Products:["Televisions","Mobiles"]},
            {Category:"Footwear", Products:["Casuals", "Boots"]}
        ];

        function bodyload(){
            for(var item of data) {
                var details = document.createElement("details");
                var summary = document.createElement("summary");
                summary.innerHTML = item.Category;
                details.appendChild(summary);
                for(var product of item.Products){
                    var div = document.createElement("div");
                    div.innerHTML = product;
                    div.style.marginBottom = "20px";
                    div.style.marginLeft = "30px";
                    details.appendChild(div);
                }
                document.getElementById("menu").appendChild(details);
            }
        }
    </script>
</head>
<body onload="bodyload()">
    <div id="menu">

    </div>
</body>
</html>

Ex:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        var data = [
            {Topic: "JavaScript", Description: "JavaScript is a language."},
            {Topic: "HTML", Description: "It is a markup language."}
        ]
        function bodyload(){
            for(var item of data){
                var dt = document.createElement("dt");
                var dd = document.createElement("dd");
                dt.innerHTML = item.Topic;
                dd.innerHTML = item.Description;

                document.querySelector("dl").appendChild(dt);
                document.querySelector("dl").appendChild(dd);
            }
        }
    </script>
</head>
<body onload="bodyload()">
    <dl>

    </dl>
</body>
</html>

Array
Object
Array of Objects
Embedded Object

FAQ: How to get the list of all properties or keys in an object?
Ans : for..in operator

FAQ: How to get the list of both properties and their type?
Ans:  typeof operator

Ex:
<script>
    fetch("http://fakestoreapi.com/products/1&quot;)
    .then(function(response){
        return response.json();
    })
    .then(function(product){
        for(var property in product){
            document.write(`${property} [${typeof product[property]}] => ${product[property]}  <br>`);
        }
    })
</script>


FAQ: How to check for any property in object?
Ans:  by using "in" operator

        "propertyName"  in  objectName   => true / false

EX:
<script>
    fetch("http://fakestoreapi.com/products/1&quot;)
    .then(function(response){
        return response.json();
    })
    .then(function(product){
        for(var property in product){
            document.write(`${property} [${typeof product[property]}] => ${product[property]}  <br>`);
        }
        document.write(`Is Stock property available in Product : ${"Stock" in product}`);
    })
</script>

FAQ: How to remove any property from object?
Ans:  by using "delete" operator

Ex:
<script>
    fetch("http://fakestoreapi.com/products/1&quot;)
    .then(function(response){
        return response.json();
    })
    .then(function(product){
        delete product.category;
        delete product.rating;
        for(var property in product){
            document.write(`${property} [${typeof product[property]}] => ${product[property]}  <br>`);
        }
    })
</script>


FAQ: What are the issues with Object type data?
Ans: All manipulations are done explicitly
        It is slow.
        You need lot of explicit techniques to handle object manipulaions.
       [delete property, find property, get all properties etc...]

                                        "Map"

# 3rd April 2023
=====================
What are the issues with Object type?
1. All keys are string type.
2. There is not size of keys. You can't get the count of keys by using any implicit technique.
3. You need various explicit iterators for reading properties and values.
4. You need explicit operators and methods to check the availablility of any key and delete a key.
5. It is slow in access.

                                        Map Type
- It is a key - value collection same like object.
- Key's can be any type.
- It provides implicit iterators and methods for reading and manipulation.
- It is faster in access.
- It is schema less. [Structure less]


Note: If you are dealing with structured data then use object, if it is schema less then use map type.

Syntax:
        var  refName = new Map();

- Map provides following methods for manipulation

        set()            It is used to assign a new key with value.
        get()            It is used to access a value with reference of key.
        keys()            It returns all keys
        values()        It returns all values
        entries()        It returns all keys and values
        delete()        It remove a key and value.
        has()            It checks the availablility of any key.
        size            It returns the total count of keys.
        clear()            It removes all keys


Ex:
<script>
    var data = new Map();
    data.set(1, "Samsung TV");
    data.set("HTML", "Iti s a markup language");
    document.write(data.get("HTML"));
</script>


Ex:
<script>
    var data = new Map();
    data.set(1, "Samsung TV");
    data.set("HTML", "It is a markup language");
    data.delete(1);
    if(data.has(1)) {
        document.write(data.get(1))
    } else {
        document.write(`There no key by name 1 <br>`);
    }
    document.write(`Total Number of Keys : ${data.size}<br>`);
    for(var item of data.entries()){
        document.write(item + "<br>");
    }
</script>

                                      Date Type
- Date type is defined by using JavaScript "Date()" constructor.
- It allocates memory for storing date type value.
- Date type is stored in "Year-Month-Day" format.
- It can handle both date and time values.

Syntax:
        var  mfd = new Date();                => loads the current system date and time

        var mdf = new Date("YYYY-MM-DD  Hrs:Min:Sec.MilliSeconds");
        var mdf = new Date("YYYY-MM-DD");
       
- JavaScript date object provides various date and time methods.


        getHours()                It returns hour number 0 to 23
        getMinutes()                It returns minutes number 0 to 59
        getSeconds()                It returns seconds number 0 to 59
        getMilliSeconds()        It returns milli seconds number 0 to 99
        getDay()                    It returns weekday number  0=Sunday
        getDate()                    It returns date number 1 to 28,29,30,31
        getMonth()                It returns month number 0=January
        getFullYear()                It returns full year [4 chars]
        getYear() [obsolete]        It returns year number as per Y2K
        toLocaleDateString()
        toLocaleTimeString()
        toString()

        setHours()
        setMinutes()
        setSeconds()
        setMilliSeconds()
        setDate()
        setMonth()
        setYear()

EX:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../node_modules/bootstrap/dist/css/bootstrap.css">
    <link rel="stylesheet" href="../node_modules/bootstrap-icons/font/bootstrap-icons.css">
    <script>
        function GetTime(){
            var now = new Date();
            document.getElementById("time").innerHTML = now.toLocaleTimeString();
        }
        function bodyload(){
            var weekdays = ["Sunday", "Monday", "Tuesday", "Wed","Thr","Friday","Saturday"];
            var months = ["Jan", "Feb", "Mar", "April", "May", "June"];

            var msg = document.getElementById("msg");
            var now = new Date();
            if(now.getHours()>=0 &&  now.getHours()<=12){
                msg.innerHTML = "Good Morning";
            } else if (now.getHours()>12 && now.getHours()<=17) {
                msg.innerHTML = "Good Afternoon";
            } else {
                msg.innerHTML = "Good Evening";
            }
            now.setMonth(2);
            document.getElementById("cal").innerHTML = `${weekdays[now.getDay()]} ${now.getDate()} ${months[now.getMonth()]}, ${now.getFullYear()}`;
            setInterval(GetTime, 1000);
        }
    </script>
</head>
<body class="container-fluid" onload="bodyload()">
    <div class="btn-toolbar bg-danger justify-content-between">
        <div class="btn-group">
            <button class="btn btn-danger">Home</button>
            <button class="btn btn-danger">About</button>
            <button class="btn btn-danger">Contact</button>
        </div>
        <div class="btn-group">
            <button class="btn btn-danger">
                <span id="msg"> </span>
            </button>
        </div>
        <div class="btn-group">
            <button class="btn btn-danger">
                <span class="bi bi-calendar" id="cal"></span>
            </button>
            <button class="btn btn-danger">
                <span class="bi bi-clock" id="time"></span>
            </button>
        </div>
       
    </div>
</body>
</html>
       


Ex:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        function DateChange(){
            var weekdays = ["Sunday", "Monday", "Tuesday", "Wed","Thr","Friday","Saturday"];
            var months = ["Jan", "Feb", "Mar", "April", "May", "June"];

            var now= new Date(document.getElementById("date").value);
            document.querySelector("p").innerHTML =`${weekdays[now.getDay()]}`;
        }
    </script>
</head>
<body>
    Departure : <input type="datetime-local" onchange="DateChange()" id="date">
    <p></p>
</body>
</html>


                                JavaScript Operators

# 4th April 2023
===================
Variables
Data Types
Primitive Types
    - number
    - string
    - boolean
    - null
    - undefined
    - symbol
Non Primitive Types
    - array
    - object
    - map
Date Type


                                    JavaScript Operators
- Operator is a object in computer programming that evaluates are value based on the operands.
- Operators are classified into various types based on the number of operands they can handle.
                                a + b        =>  a, b are operands

- Operand usually stores the data.
- Operators based on number of operands are classified into
        a) Unary Operator
        b) Binary Operator
        c) Ternary Operator

- Unary operator handles only one operand.

        x++,  --y

- Binary operator handle two operands.

        x + y

- Ternary operator handles 3 operands

        (condition)?true:false

        one?two:three

- JavaScript operators are again classified into various groups based on the type of value they return

1. Arithematic Operators
2. Comparision Operators
3. Assignment Operators
4. Logical Operators
5. Bitwise Operators
6. Special Operators

                                Arithematic Operators
+                Addition
-                Subtraction
*                Multiplication
/                Division
%                Modulus Division
**                 Exponent [Math.pow()]  New in ES5+    2**3 = 8 => Math.pow(2,3)
++                Increment
--                Decrement

Increment
- Post
- Pre
        var  x = 10;
        var  y = x++;            Post Increment        x = x + 1
                                x = 11, y=10

        Post increment specifies that increment by 1 is done after assigning.

        var x  = 10;
        var y = ++x;            Pre Increment        x = x + 1
                                x = 11, y=11

        Pre increment specifies that first increment is done and later it is assigned.

Ex:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../node_modules/bootstrap/dist/css/bootstrap.css">
    <script>
        var count=0;
        function ShowStatus(){
            count++;
            if(count==100){
                location.href="shopper-template.html";
            } else {
                document.getElementById("status").innerHTML = count +  " % ";
            }
        }
        function LoadClick(){
            document.getElementById("loading").style.display="block";
            document.querySelector("button").style.display = "none";
            setInterval(ShowStatus,200);
        }
    </script>
</head>
<body class="container-fluid">
    <div class="d-flex justify-content-center align-items-center" style="height: 400px;">
         <div>
            <button onclick="LoadClick()" class="btn btn-primary">Load Template</button>
            <div class="text-center" id="loading" style="display: none;">
                <span class="spinner-border"></span>
                <p id="status"></p>
                <div>Loading</div>
            </div>
         </div>
    </div>
</body>
</html>

Ex:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../node_modules/bootstrap/dist/css/bootstrap.css">
    <script>
        var count=0;
        function ShowStatus(){
            count++;
            document.getElementById("progress").value = count;
            if(count==100){
                location.href="shopper-template.html";
            } else {
                document.getElementById("status").innerHTML = count +  " % ";
            }
        }
        function LoadClick(){
            document.getElementById("loading").style.display="block";
            document.querySelector("button").style.display = "none";
            setInterval(ShowStatus,200);
        }
    </script>
</head>
<body class="container-fluid">
    <div class="d-flex justify-content-center align-items-center" style="height: 400px;">
         <div>
            <button onclick="LoadClick()" class="btn btn-primary">Load Template</button>
            <div class="text-center" id="loading" style="display: none;">
                <progress id="progress" min="1" max="100" value="1"></progress>
                <p id="status"></p>
                <div>Loading</div>
            </div>
         </div>
    </div>
</body>
</html>


Ex:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../node_modules/bootstrap/dist/css/bootstrap.css">
    <link rel="stylesheet" href="../node_modules/bootstrap-icons/font/bootstrap-icons.css">
    <script>
        var id = 1;
        function LoadProduct(){
            id++;
            fetch(`http://fakestoreapi.com/products/${id}`)
            .then(function(res){
                return res.json();
            })
            .then(function(product){
                document.getElementById("title").innerHTML = product.title;
                document.getElementById("poster").src = product.image;
                document.getElementById("price").innerHTML = `&#8377; ${product.price}`;
            })
        }
        function bodyload(){
            LoadProduct();
        }
        function NextClick(){
            id++;
            LoadProduct();
        }
        function PrevClick(){
            id--;
            LoadProduct();
        }
        var timerMemory;
        function PlayClick(){
            timerMemory = setInterval(LoadProduct,5000);
            document.getElementById("status").innerHTML = "(Slide Show - Started)";
        }
        function PauseClick(){
            clearInterval(timerMemory);
            document.getElementById("status").innerHTML = "(Slide Show - Paused)";
        }
    </script>
    <style>
        #price {
            width: 120px;
            height: 80px;
            border: 1px solid black;
            border-radius: 100px;
            background-color: green;
            color:white;
            position: absolute;
            top: 100px;
            right: 150px;
            padding: 20px;
            text-align: center;
            font-size: 20px;
        }
    </style>
</head>
<body class="container-fluid" onload="bodyload()">
    <div id="price">

    </div>
    <div class="d-flex justify-content-center align-items-center" style="height: 500px;">
        <div class="card w-50 p-2">
            <div class="card-header text-center">
                <p id="title"></p>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-2 d-flex flex-column align-items-center">
                        <button class="btn btn-primary" onclick="PrevClick()">
                            <span class="bi bi-chevron-left"></span>
                        </button>
                    </div>
                    <div class="col-8 text-center">
                        <img id="poster" width="100%" height="300">
                        <h4 id="status"></h4>
                    </div>
                    <div class="col-2">
                        <button class="btn btn-primary" onclick="NextClick()">
                            <span class="bi bi-chevron-right"></span>
                        </button>
                    </div>
                </div>
            </div>
            <div class="card-footer text-center">
                <button class="btn btn-success" onclick="PlayClick()">
                    <span class="bi bi-play"></span>
                </button>
                <button class="btn btn-danger" onclick="PauseClick()">
                    <span class="bi bi-pause"></span>
                </button>
            </div>
        </div>
    </div>
</body>
</html>

                                 Comparision Operators
>                greater than
>=                greater than or equal
<                less than
<=                less than or equal
==                equal
===            identical equal
!=                not equal
!==                not identical

Note: All comparion operators return boolean

            var x = "10";
            var y = 10;
            x = y;                => assign
            x == y;                => true    [converts and compares]
            x === y;            => false  [true only when values are same type]

Ex:
<script>
    var x = 10;
    var y = "10";
    document.write(`x(${typeof x})==y(${typeof y}) ? ` + (x==y) + "<br>");
    document.write(`x(${typeof x})===y(${typeof y}) ? ` + (x===y) + "<br>");

</script>

# 5th April 2023
==============================
Arithematic Operators
    string + string        ? string
    string + number        ? string
    string + boolean        ? string
   
    number+number        ? number
    number+boolean    ? number        => 1 + true => 2
    number+string        ? string

    boolean+boolean    ? number        => true + true = 2

    string - string            ? NaN
    string * string            ? NaN
    string / string            ? NaN
 



                                        Logical Operators
&&        AND
||        OR
!        NOT

            (condition1)  &&  (condition2)    =>   true if all conditions true
                                                        false if any one condition is false.

            (condition1) ||   (condition2)      =>  true if any one condition is true.
                                                  =>  false if all conditions are false.

            ! Not                                  => !true  = false
                                                      !false  = true


                                    Assignment Operators
+=                Add and assign
-=                sub and assign
/=                divide and assign
*=                multiply and assign
%=                modulus and assign

Ex:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        var margin = 1;
        function MoveClick(){
           margin *= 2;
           document.getElementById("pic").style.marginLeft = margin + "px";
        }
        function ClearClick(){
           margin=1;
           document.getElementById("pic").style.marginLeft = margin + "px";
        }
    </script>
</head>
<body>
    <button onclick="MoveClick()">Move</button>
    <button onclick="ClearClick()">Clear</button>
    <div>
        <img src="images/shoe.jpg" width="100" height="100" id="pic">
    </div>
</body>
</html>




- JavaScript provides DOM methods to accessing multiple elements
           
        document.getElementsByTagName() [ ]
        document.getElementsByName() [ ]
        document.getElementsByClassName() [ ]

Ex:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        var categoryName = "";
       function SubmitClick(){
          categoryName = "";
          var categoryCheckBoxes = document.getElementsByName("Category");
          for(var checkbox of categoryCheckBoxes){
              if(checkbox.checked) {
                  categoryName += checkbox.value + "<br>";
              }
          }
          document.querySelector("p").innerHTML = categoryName;
       }
    </script>
</head>
<body>
    <h3>Categories</h3>
    <ul style="list-style: none;">
        <li><input type="checkbox" name="Category" value="Electronics"> Electronics</li>
        <li><input type="checkbox" name="Category" value="Footwear"> Footwear</li>
        <li><input type="checkbox" name="Category" value="Kids Fashion"> Kids Fashion</li>
        <li><input type="checkbox" name="Category" value="Jewelery"> Jewelery </li>
    </ul>
    <button onclick="SubmitClick()">Submit</button>
    <p></p>
</body>
</html>


Ex:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        var categoryName = "";
       function CategoryChanged(){
          categoryName = "";
          var categoryCheckBoxes = document.getElementsByName("Category");
          for(var checkbox of categoryCheckBoxes){
              if(checkbox.checked) {
                  categoryName += checkbox.value + "<br>";
              }
          }
          document.querySelector("p").innerHTML = categoryName;
       }
    </script>
</head>
<body>
    <h3>Categories</h3>
    <ul style="list-style: none;">
        <li><input type="checkbox" onchange="CategoryChanged()" name="Category" value="Electronics"> Electronics</li>
        <li><input type="checkbox" onchange="CategoryChanged()" name="Category" value="Footwear"> Footwear</li>
        <li><input type="checkbox" onchange="CategoryChanged()" name="Category" value="Kids Fashion"> Kids Fashion</li>
        <li><input type="checkbox" onchange="CategoryChanged()" name="Category" value="Jewelery"> Jewelery </li>
    </ul>
    <p></p>
</body>
</html>

Ex:
<script>
    var products = [
        {Name:"TV", Category:"Electronics"},
        {Name:"Nike Casuals", Category:"Footwear"},
        {Name:"Shirt", Category:"Fashion"},
        {Name:"Watch", Category:"Electronics"}
    ];
    var result = products.filter(function(product){
        return product.Category=="Footwear" || product.Category=="Fashion";
    })
    for(var item of result) {
        document.write(item.Name + "<br>");
    }
</script>

Ex:
<script>
    fetch("http://fakestoreapi.com/products&quot;)
    .then(function(res){
        return res.json();
    })
    .then(function(products){
        var result = products.filter(function(product){
            return product.category=="electronics" || product.category=="jewelery";
        });
        for(var item of result) {
            document.write(item.title + "-" + item.category + "<br>");
        }
    })
</script>