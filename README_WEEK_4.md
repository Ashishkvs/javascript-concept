27th March
==============
What is Array?
What is purpose of Array?
How to configure Array?
How to assign and initialize memory for array?
Array Methods

1. Read array properties and elements

    toString()
    join()
    map()
    find()
    filter()
    slice()
    for..in
    for..of

                                        for..in
    - It is an iterator used to read all properties from array.

    Syntax:
            for(var property in collection)
            {
            }

                                        for..of
    - It is an iterator used to read all elements [values] from array.
   
    Syntax:
            for(var item of collection)
            {
            }

FAQ: How to read both properties and values?
Ans:  By using "for..in"

            for(var property in collection)
            {
                document.write(property + "-" + collection[property]);        collection[0]
            }

FAQ: What is difference between a loop and iterator?
Ans:  Loop comprises of initialization, condition, counter to read values from collection.
                    for(var i=0; i<collection.length; i++)
                    {
                    }
        Iterator is a design pattern that allows to read values from collection in sequential      
        order. It doesn't require initialization, condition and counter.

                    for(var item of collection)
                    {
                    }

<script>
   var sales = [35000, 57000, 24400, 67000, 21000];
   for(var property in sales){
      document.write(`[${property}]-${sales[property]}<br>`);
   }
</script>

2. Add elements into array

    push()                    It adds new element(s) as last elements. [bottom]
    unshift()                It adds new element(s) as first elements. [top]
    splice()                It adds new element(s) at any specific location.

Syntax:
    collection.push("item1", "item2", ...);
    collection.unshift("item1", "item2",..);
    collection.splice(indexNumber, deleteCount, "item1", "item2"..);

Ex:
<script>
    var categories = ["Electronics", "Footwear", "Fashion"];
    categories.unshift("All");
    categories.splice(2,0,"Kids", "Men's Clothing");
    for(var property in categories)
    {
      document.write(`[${property}] ${categories[property]}<br>`);
    }
</script>

3. Removing elements from array

    pop()            It removes and returns the last element
    shift()            It removes and returns the first element
    splice()        It removes and returns the specified element(s)

Ex:
<script>
    var categories = ["Electronics", "Footwear", "Fashion"];
    document.write(`${categories.splice(1,2)} removed.<br>`);
    for(var property in categories)
    {
      document.write(`[${property}] ${categories[property]}<br>`);
    }
</script>

4. How to Empty Array?
    - set length to "0".
    - assign "[]" to array.

Ex:
<script>
    var categories = ["Electronics", "Footwear", "Fashion"];
    categories.length = 0;
    document.write(categories);
</script>

Ex:
<script>
    var categories = ["Electronics", "Footwear", "Fashion"];
    categories = [];
    document.write(categories);
</script>

5. How to create copy of array?

Ex:
<script>
    var categories = ["Electronics", "Footwear", "Fashion"];
    var menu = categories;
    document.write(`
         Categories : ${categories} <br>
         Menu : ${menu}
    `);
</script>

Ex:  Shallow Copy
<script>
    var categories = ["Electronics", "Footwear", "Fashion", "Kids"];
    var menu = Array.from(categories);
    document.write(`
         Categories : ${categories} <br>
         Menu : ${menu}
    `);
</script>

Ex: Deep Copy

<script>
    var categories = ["Electronics", "Footwear", "Fashion", "Kids", "Men"];
    var menu = JSON.parse(JSON.stringify(categories));
    document.write(`
         Categories : ${categories} <br>
         Menu : ${menu}
    `);
</script>

6. Sorting and Reverse Array

    sort()                        Arranges array elements in ascending order
    reverse()                    Arrange is reverse order [bottom to top]

Ex:
<script>
     var cities = ["Delhi","Hyd","Mumbai", "Chennai", "Bangalore"];
     cities.sort();
     cities.reverse();
     for(var item of cities) {
      document.write(item  + "<br>");
     }
</script>

                       Dynamically Adding Elements into Page

1. Create a new HTML element dynamically.

     var ref =    document.createElement("elementName");
     var pic =    document.createElement("img");
     var tableCell =    document.createElement("td");

2. Define properties for element

        ref.id
        ref.name
        ref.className
        ref.width
        ref.height
        ref.src

 3. Add new element into page

        appendChild(newElement);

        document.querySelector("body").appendChild(ref);


Ex:
<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Document</title>
   <script>
      function AddClick(){
          var pic = document.createElement("img");
          pic.width = "200";
          pic.height = "200";
          pic.border = "2";
          pic.src = "../public/images/shoe.jpg";
          document.getElementById("container").appendChild(pic);
      }
   </script>
</head>
<body>
   <button onclick="AddClick()">Add Image</button>
   <div id="container">

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
      function AddClick(){
          var pic = document.createElement("img");
          pic.width = "200";
          pic.height = "200";
          pic.border = "2";
          pic.src = "../public/images/shoe.jpg";
          document.getElementById("container").appendChild(pic);
      }
      function AddOption(){
          var option = document.createElement("option");
          option.text = "Delhi";
          option.value = "Delhi";
          document.querySelector("select").appendChild(option);
      }
   </script>
</head>
<body>
   <button onclick="AddClick()">Add Image</button>
   <button onclick="AddOption()">Add Option</button>
   <div id="container">

   </div>
   <select>

   </select>
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
      var categories = ["All", "Electronics", "Footwear", "Fashion"];

      function AddOption(){
          document.querySelector("select").innerHTML = "";
          for(var item of categories){
               var option = document.createElement("option");
               option.text = item;
               option.value = item;
               document.querySelector("select").appendChild(option);
          }
      }
   </script>
</head>
<body>
   <button onclick="AddOption()">Add Option</button>
 
   <select>

   </select>
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
      var categories = ["All", "Electronics", "Footwear", "Fashion"];

      function AddOption(){
          document.querySelector("select").innerHTML = "";
          for(var item of categories){
               var option = document.createElement("option");
               option.text = item;
               option.value = item;
               document.querySelector("select").appendChild(option);

               var li = document.createElement("li");
               li.innerHTML = item;
               document.querySelector("ol").appendChild(li);

               var tr = document.createElement("tr");
               var td = document.createElement("td");
               td.innerHTML = item;
               tr.appendChild(td);
               document.querySelector("tbody").appendChild(tr);

          }
      }
   </script>
</head>
<body>
   <button onclick="AddOption()">Add Option</button>
 
   <select>

   </select>
   <h2>Categories</h2>
   <ol>

   </ol>
   <h2>Table</h2>
   <table border="1" width="400">
      <thead>
         <tr>
            <th>Categories</th>
         </tr>
      </thead>
      <tbody>

      </tbody>
   </table>
</body>
</html>

# 28 th March 2023
Finding an Element in Array:
   find()                     It returns the matching value using a call back function
   indexOf()                 It returns index number of specified element, if not found it
                             returns -1.
   lastIndexOf()             It returns last occurance index number.


Ex:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Array</title>
    <link rel="stylesheet" href="../node_modules/bootstrap/dist/css/bootstrap.css">
    <link rel="stylesheet" href="../node_modules/bootstrap-icons/font/bootstrap-icons.css">
    <script>
        var cities = ["Delhi", "Hyd", "Mumbai"];
        function LoadCities(){
            document.getElementById("lstCities").innerHTML = "";
            for(var city of cities){
                var option = document.createElement("option");
                option.text = city;
                option.value = city;
                document.getElementById("lstCities").appendChild(option);
            }
            document.getElementById("lblCount").innerHTML = `Total No of Cities : ${cities.length}`;
        }
        function bodyload(){
            LoadCities();
        }
        function AddClick(){
            var cityName = document.getElementById("txtCity").value;
            if(cities.indexOf(cityName)==-1) {
                cities.push(cityName);
                alert(`${cityName} added to list`);
                document.getElementById("txtCity").value = "";
                cities.sort();
                LoadCities();
            } else {
                alert(`${cityName} Exists`);
            }
        }
        function RemoveClick(){
            var selectedCityName = document.getElementById("lstCities").value;
            var selectedIndex = cities.indexOf(selectedCityName);
            var flag = confirm(`Delete ${selectedCityName}\nAre you sure want to delete?`);
            if(flag==true){
                cities.splice(selectedIndex,1);
                LoadCities();
            }
        }
        function ClearClick(){
            cities.length = 0;
            LoadCities();
        }
        function SortAsc(){
            cities.sort();
            LoadCities();
        }
        function SortDsc(){
            cities.sort();
            cities.reverse();
            LoadCities();
        }
    </script>
</head>
<body class="container-fluid" onload="bodyload()">
    <h2>Array Manipulations</h2>
    <div class="mt-3 mb-3 w-25">
        <div class="input-group">
            <span class="input-group-text">New City : </span>
            <input type="text" id="txtCity" class="form-control">
            <button onclick="AddClick()" class="btn btn-primary">Add</button>
        </div>
    </div>
    <div class="w-25">
        <label class="form-label">Your Cities</label>
        <div>
            <div class="mt-2 mb-2">
                <button class="btn btn-primary" onclick="SortAsc()">
                    <span class="bi bi-sort-alpha-down"></span>
                </button>
                <button class="btn btn-primary" onclick="SortDsc()">
                    <span class="bi bi-sort-alpha-up"></span>
                </button>
            </div>
            <select class="form-select" size="3" id="lstCities">

            </select>
            <label class="form-label" id="lblCount"></label>
        </div>
        <div class="mt-3">
            <button class="btn btn-danger" onclick="RemoveClick()"> <span class="bi bi-trash-fill"></span>Remove City</button>
            <button class="btn btn-danger" onclick="ClearClick()">Clear All</button>
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
         var photos = ["images/m1.jpg", "images/m2.jpg", "images/m3.jpg", "images/m4.jpg", "images/m5.jpg"];
          function bodyload(){
              for(var path of photos) {
                  var img = document.createElement("img");
                  img.src = path;
                  img.width = "200";
                  img.height = "200";
                  document.getElementById("gallery").appendChild(img);
              }
          }
    </script>
    <style>
        body {
            height: 500px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        img:hover {
            transform: scale(1.5);
            transition: 2s;
            box-shadow: 10px 10px 3px gray;
        }
        img {
            transition: 2s;
        }
        marquee {
            padding: 100px;
        }
    </style>
</head>
<body onload="bodyload()">
    <div>
        <marquee scrollamount="10" id="gallery" onmouseover="this.stop()" onmouseout="this.start()">

        </marquee>
    </div>
</body>
</html>

                                    Object Type
- Object is set of properties and functions.
- Object is to store all related data and logic together.
- "Alan Kay" introduced the concept of Object into computer programming in early 1960's.
- Joahn Olay and Nygaard developer object oriented programming in early 1967.
- It was formulated with a language "SIMULA".

Syntax:
            let  tv  =  { }

- Data and logic is stored in object in the form of "Key - Value" collection.

Syntax:
            let  tv = {
                Key : value,
                Key : value
            }

- All keys are "string" type.
- Value can any type, Primitive or Non-primitive.
- If object comprises of only data and no logic then it is reffered as "JSON".
  [JavaScript Object Notation]
- JSON is format used to represent data.     [JSON, XML]

JSON
    {
        "Name": "Samsung TV",
        "Price" : 30000.44,
        "Stock" : true
    }

XML
    <Product>
        <Name> Samsung TV </Name>
        <Price> 30000.44 </Price>
        <Stock> true </Stock>
    </Product>

- You can access any key with reference of object.

Ex:
<script>
     var tv = {
        "Name": "Samsung TV",
        "Price": 50000.33,
        "Stock": true,
        "Cities": ["Delhi", "Hyd"],
        "Rating": {"Rate":4.3, "Count": 3500}
     }
     document.write(`
          Name  : ${tv.Name} <br>
          Price : ${tv.Price} <br>
          Stock : ${tv.Stock} <br>
          Cities: ${tv.Cities.toString()} <br>
          Rating : ${tv.Rating.Rate} [${tv.Rating.Count}]
     `);
</script>