# 21 March 2023
======================
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
        var regExp = / /;
        function CountryChanged(){
            var countryName = document.getElementById("lstCountries").value;
            var flag = document.getElementById("flag");
            var txtMobile = document.getElementById("txtMobile");

            if(countryName=="India") {
                flag.src = "images/india.png";
                txtMobile.placeholder = "+91 and 10 digits";
                regExp = /\+91\d{10}/;

            } else if (countryName=="US") {
                flag.src = "images/us.png";
                txtMobile.placeholder = "+(1)(425) 555-0100";
                regExp = /\+\(1\)\(\d{3}\)\s\d{3}-\d{4}/;

            } else if (countryName=="UK") {
                flag.src = "images/uk.png";
                txtMobile.placeholder = "+(44)(20) 1234 5678";
                regExp = /\+\(44\)\(\d{2}\)\s\d{4}\s\d{4}/;
            }
        }
        function RegisterClick(){
            var mobile = document.getElementById("txtMobile").value;
            var mobileError = document.getElementById("mobileError");
            if(mobile.match(regExp)){
                document.write("Registered...");
            } else {
                mobileError.innerHTML = `Invalid Mobile - ${document.getElementById("txtMobile").placeholder}`;
            }
        }
    </script>
</head>
<body class="container-fluid">
    <h2>Verify Mobile</h2>
    <dl class="w-50">
        <dt>Your Country</dt>
        <dd class="input-group">
            <select id="lstCountries" class="form-select" onchange="CountryChanged()">
                <option>Select Country</option>
                <option>India</option>
                <option>US</option>
                <option>UK</option>
            </select>
            <img width="80" height="40" id="flag" border="1" class="input-group-text">
        </dd>
        <dt>Your Mobile</dt>
        <dd>
            <input type="text" class="form-control"  id="txtMobile">
        </dd>
        <dd class="text-danger" id="mobileError"></dd>
    </dl>
    <button onclick="RegisterClick()" class="btn btn-primary">Register</button>
</body>
</html>

                                   Boolean Types

- Boolean types are used in Decision Making.
- JavaScript boolean types can handle 2 values
        a) true
        b) false
- JavaScript boolean expression can handle true and false using 1 and 0.

            true = 1
            false = 0

    var x = true;
    var y = false;

    if(x==1)        // OK      x == true
    {
    }

    true + true = ?  2
    true + "A"  = ?  trueA
    true + 10  = ?  11
 
Note: Booleans are defined only with "true or false" as value.
          However you can compare booleans using 0 or 1

Ex:
<script>
    var x = true;
    if(x==1) {                                            x==true  Good
        document.write("X is true");
    } else {
        document.write("x is false");
    }
</script>

Attributes of HTML which are boolean type
- checked
- selected
- required
- readonly
- disabled
- border [0, 1]

Note: You use Ternary operator simple decision making  [ ? : ]

        (condtion) ? true : false    

            e1 e2
            e1+e2
            e1~e2
            div~p

Ex:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        function StockChanged(){
            var stockCheckBox = document.getElementById("Stock");
            var lblStock = document.getElementById("lblStock");
            lblStock.innerHTML = (stockCheckBox.checked)?"Available":"Out of Stock";
           
        }
    </script>
    <link rel="stylesheet" href="../node_modules/bootstrap-icons/font/bootstrap-icons.css">
    <script>
        function SortClick(){
            var span = document.querySelector("button span");
            span.className = (span.className=="bi bi-sort-alpha-down")? "bi bi-sort-alpha-up" : "bi bi-sort-alpha-down";
        }
    </script>
</head>
<body>
    <h2>Check Box Toggle</h2>
    <input type="checkbox" onchange="StockChanged()" id="Stock"> <span id="lblStock">Out of Stock</span>
    <h2>Button Toggle</h2>
    <button id="sort" onclick="SortClick()">
        <span class="bi bi-sort-alpha-down"></span>
    </button>
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
        function StockChanged(){
            var stockCheckBox = document.getElementById("Stock");
            var lblStock = document.getElementById("lblStock");
            lblStock.innerHTML = (stockCheckBox.checked)?"Available":"Out of Stock";
           
        }
    </script>
    <link rel="stylesheet" href="../node_modules/bootstrap-icons/font/bootstrap-icons.css">
    <script>
        function SortClick(){
            var span = document.querySelector("button span");
            span.className = (span.className=="bi bi-sort-alpha-down")? "bi bi-sort-alpha-up" : "bi bi-sort-alpha-down";
        }
        function VerifyName(){
            var txtName = document.getElementById("txtName");
            var btnRegister = document.getElementById("btnRegister");
            if(txtName.value=="") {
                btnRegister.disabled = true;
            } else {
                btnRegister.disabled = false;
            }
        }
    </script>
</head>
<body>
    <h2>Your Name</h2>
    <input type="text" onblur="VerifyName()" id="txtName"> <button disabled id="btnRegister">Register</button>
    <h2>Check Box Toggle</h2>
    <input type="checkbox" onchange="StockChanged()" id="Stock"> <span id="lblStock">Out of Stock</span>
    <h2>Button Toggle</h2>
    <button id="sort" onclick="SortClick()">
        <span class="bi bi-sort-alpha-down"></span>
    </button>
</body>
</html>
# 23 rd March 2023
======================
JavaScript Data Types
- Number
- String
- Boolean

FAQ: How to convert a numeric string into number?
Ans:  parseInt(), parseFloat()

FAQ: How to convert a number into string?
Ans:  toString()

            var x =  10;
            x.toString()

FAQ: How to convert a string into boolean?
Ans:  
        var x = "true";
        var y = (x=="true")?true:false;

Ex:
<script>
    var x = "true";
    var y = (x=="true")?true:false;
    document.write(`
        X is ${typeof x} <br>
        Y is ${typeof y}
    `);
</script>

                                     undefined type
                                     --------------------
- It specifies that there is no value defined in a reference.
       
            var x;
            document.write("x=" + x);            x  = undefined

- Undefined is a marker, that marks the variable to specifiy that there is no value defined.

- You can use "undefined" keyword to verify the value in any reference.

FAQ: Why JavaScript sets undefined into a variable?
Ans : As it is "Implicitly Typed", it requires a data type to determine according to
        value assigned. If value is not assigned then it is "undefined" data type.

Ex:
<script>
    var name = "Samsung TV";
    var price = 10300.33;
    if(price==undefined) {                        => not good
        document.write("Name = " + name);
    } else {
        document.write(`Name=${name}<br>Price=${price}`);
    }
</script>

FAQ: How to verify value defined?
Ans:  if(referenceName) { }

<script>
    var name = "Samsung TV";
    var price;
    if(price){                  
        document.write(`Name=${name}<br>Price=${price}`);
    } else {
        document.write(`Name=${name}`);
    }
</script>

FAQ: What is difference between undefined and not-defined?
Ans : Undefined verifies the type.
        Not-defined verifies the reference.

Ex: Price not defined
<script>
    var name = "Samsung TV";
    if(price){                  
        document.write(`Name=${name}<br>Price=${price}`);
    } else {
        document.write(`Name=${name}`);
    }
</script>

                                        null type
                                        ------------
- Undefined is configured by javascript for any reference if value is not found during compile time.
- Null is configured by javascript for any reference if value is not found during run time.
- Null is related to exception.

Ex:
<script>
    var price = prompt("Enter Price");
    if(price==null) {
        document.write(`You canceled - Please provide Price`);
    }
    else if(price=="") {
        document.write(`Price can't be empty`);
    }
    else {
        document.write(`Price=${price}`);
    }
</script>

                                        symbol type
- JavaScript introduced symbol type from ES6.
- Earlier JS uses symbol type implicitly.
- It is used to configure a unique identification key for objects.
   
                {
                  UserName: "John",
                  Age : 22
                }

- Symbol configures a hidden field in object, which is present in object but not used by iterators.
- Iterator is used to access all properties of object.

Ex: HTML Hidden Input

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form>
        <h2>Edit User Details</h2>
        <dl>
            <input type="hidden" name="UserId" value="john_nit">
            <dt>User Name</dt>
            <dd><input type="text" name="UserName"></dd>
            <dt>Age</dt>
            <dd><input type="number" name="Age"></dd>
        </dl>
        <button>Submit</button>
    </form>
</body>
</html>

Ex:
<script>
     var UserId = Symbol();

     var userDetails = {
        [UserId] : "john_nit",
        UserName : "John",
        Age: 22
     }
     for(var property in userDetails){
        document.write(`${property} : ${userDetails[property]} <br>`);
     }
     document.write("User Id : " + userDetails[UserId] + "<br>");
</script>






FAQ: How to configure a field which can display value on screen but will not submit?
Ans :
   - If name is not defined for any field in a form then it can't submit.
   - If field is not in form then it can't submit
   - If field is disabled then it can't submit.

  <input type="text" name="UserId"  value="john_nit" disabled>

  # 24th March 2023
  ======================
  JavaScript Non Primitive Types
- They are mutable types.
- They don't have fixed range for values.
- Value range varies according to memory available.
- They are store in memory heap.
- Heap allows to access in any order.
- JavaScript non-primitive types are
        a) Array
        b) Object
        c) Map

                                   Array
- Arrays are used in computer programming to reduce overhead and complexity.
- Array reduces overhead by storing values in sequential order.
- Array can reduce complexity by storing multiple values under one name.
- JavaScript array can store any type of value, which is not possible for several programming languages.
- Array can change its size dynamically in JavaScript.
- Array refers to a formation where items are in order but can be accessed random.

Configuring Array
------------------------
Array configuration comprises of 2 phases

    1. Declaring Array
    2. Initializing memory or assigning memory for array

Syntax: Declaring

        var  products;
        let   products;
        const products;    // it requires initializaiton

Syntax: Initialize memory or assign memory by using  "[ ]" or  "Array()"

        var products = [ ];
        var products = new Array();
   
                    (or)

        var products;
         products = [ ];
         products = new Array();

FAQ: What is difference between array  [ ]  and  "Array()" ?
Ans:  Array() refers to discreet memory. Disconnected
        [  ]  refers to connected architecture. Contineous memory

        Array() uses single call mechanism.
        [ ] uses single ton mechanism.

Storing data into Array:
1. You can initialize data into array.
2. You can assign data into array.

Syntax: Initialization

    var products = ["A", 10, true];
    var products = new Array("A", 10, true);

Syntax: Assignment by using array property

    var values = [ ];
    values[1]    = 10;                [1] - string
    values["2"] = 20;                [2] - string

Ex:
<script>
    var values = [10, "john", true];
    values["3"] = "david";
    for(var property in values)
    {
        document.write(`[${property}]-${typeof property} : ${values[property]}-${typeof values[property]}<br>`);
    }
    document.write(values[2]);
</script>

- Array can store any type of data
    a) Primitive
    b) Non Primitive
    c) Function

Ex:
<script>
    var values = [10, "TV", true, ["Delhi", "Hyd"], function(){document.write("Hello !")}];
    document.write(values[3][1] + "<br>");
    values[4]();
</script>

- Array supports de-structuring.

<script>
    var values = [10, "TV", true, ["Delhi", "Hyd"], function(){document.write("Hello !")}];
    var [id, name, stock, cities, hello] = values;
    document.write(cities[1] + "<br>");
    hello();
</script>

                            Array Manipulations
- JavaScript array object provides a set of properites and methods to control array.

1. length                :  returns total count of elements in array.

2. Methods for reading values

    a) toString()                separated with ","
    b) join()                    separated with custom delimeter
    c) slice()                    from specified index
    d) find()                    it returns the first occurance that match condition
    e) filter()                    it returns all occurance that match condition
    f) map()                    it returns all using an iterator.

Ex:
<script>
    var categories = ["Electronics", "Footwear", "Fashion"];
    document.write(categories.toString() + "<br>");
    document.write(categories.join("==>") + "<br>");
    document.write(categories.slice(1,2) + "<br>");
    categories.map(function(category){
        document.write(`<button>${category}</button><br>`);
    })
</script>

Ex:
<script>
   var sales = [35000, 57000, 24400, 67000, 21000];
   var result = sales.find(function(value){
        return value>50000;
   })
   document.write(result);
</script>

Ex:
<script>
   var sales = [35000, 57000, 24400, 67000, 21000];
   var result = sales.filter(function(value){
        return value>50000;
   })
   document.write(result);
</script>