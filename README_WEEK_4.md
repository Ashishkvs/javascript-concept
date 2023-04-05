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

# 29th MArch 2023
======================================
What is an Object in JavaScript?
- Key and Value collection
- It is used to keep all related data and logic together.
- If object maps only to data then it is known as JSON.
  [JavaScript Object Notation]
- Every key is "string" type.
- Every value can be any type, primitive or non-primitive
- If you want to maintain data in a separate location then you can create "JSON" file.
                                file.json
Syntax:
        var product = {
            "Name": "Samsung TV",
            "Price" : 45000.44,
            "Stock": true,    
            "Cities": ["Delhi", "Hyd"],
            "Rating": {"Rate":4.4, "Count":4500}            
         }

- Object can contain both data and logic

Syntax:
        var product =  {
            "Name":    "TV",
            "Price": 45000.44,
            "Qty": 3,
            "Total": function() {
             },
            "Print": function() {
            }
        }

- You can access the properties and functions with in object by using "this" keyword.

            "Total": function() {
                 return this.Qty * this.Price;
              }

- You can access the properties and functions outside object by using object reference.

             product.Qty
             product.Total()
             product.Print()

- Data is stored in property and logic is defined in function.

Ex:
<script>
     var tv = {
        "Name": "Samsung TV",
        "Price": 0,
        "Qty": 2,
        "Total": function(){
           return this.Qty * this.Price;
        },
        "Print": function(){
           document.write(`Name=${this.Name}<br>Price=${this.Price}<br>Qty=${this.Qty}<br>Total=${this.Total()}`);
        }
     }
    tv.Price = parseFloat(prompt("Enter Price"));
    tv.Print();
</script>

Note: Often JavaScript object is called as "Pseudo Class".

                                    Array of Objects

Data Source: Table

        ProductId            Name                Price
        ----------------------------------------------------
        1                    TV                    35000.44
        2                    Mobile                12000.33

Middleware : API [Application Programming Interface]
                 To make the data reachable to every device and OS services.

Data Format: JSON
         var products =
            [
                {"ProductId":1, "Name": "TV", "Price": 35000.44},        => 0
                {"ProductId":2, "Name": "Mobile", "Price": 12000.33}    => 1
            ]

        Mobile Price :  products[1].Price

- To access data from JSON file or API URL  browser needs "XMLHttpRequest" object.
- JavaScript provides a promise called "fetch()" which uses XMLHttpRequest.
- Promise is a function that returns accurate status of any task performed.
            Promise Fullfilled
            Promise Rejected
            Promise Failed

Syntax:
                fetch("url | path")
                .then(function(){
                    on success
                })        
                .catch(function(){
                    on failure
                })
                .finally(function(){
                    always..
                })



Ex:
1. add a new folder into project
        "data"

2. add a new file into data folder

        "flipkart.json"
{
    "title": "vivo T1 44W (Midnight Galaxy, 128 GB)  (4 GB RAM)",
    "price": 14499,
    "actualPrice":17999,
    "offers": [
         "Bank Offer10% off on Bank of Baroda Credit Card EMI Transactions, up to ₹1,000 on orders of ₹5,000 and aboveT&C",
         "Bank Offer10% off on IDFC FIRST Bank Credit Card EMI Transactions, up to ₹1,000 on orders of ₹5,000 and aboveT&C",
         "Bank Offer10% off on IndusInd Bank Credit Card EMI Transactions, up to ₹1,000 on orders of ₹7,500 and aboveT&C",
         "Buy this Product and Get Extra ₹500 Off on Bikes & ScootersT&C"
    ],
    "rating": {"rate":4.5, "ratings":96490, "reviews": 5600},
    "photo": "../public/images/m1.jpg"
}

3. Add a new HTML page

        flipkart.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flipkart</title>
    <link rel="stylesheet" href="../node_modules/bootstrap/dist/css/bootstrap.css">
    <link rel="stylesheet" href="../node_modules/bootstrap-icons/font/bootstrap-icons.css">
    <script>
        function bodyload(){
            fetch("../data/flipkart.json")
            .then(function(response){
                return response.json();  
            })
            .then(function(product){
                document.getElementById("productImage").src= product.photo;
                document.getElementById("productTitle").innerHTML = product.title;
                document.getElementById("productRating").innerHTML = product.rating.rate;
                document.getElementById("productReviews").innerHTML = `${product.rating.ratings} Ratings & ${product.rating.reviews} Reviews`.fontcolor('gray').bold();
                document.getElementById("productPrice").innerHTML = `&#8377; ${product.price} <font size='5' color='gray'><strike> &#8377; ${product.actualPrice}</strike></font>`;
                for(var offer of product.offers){
                    var li = document.createElement("li");
                    li.innerHTML = `<span class="bi bi-tag-fill text-success"></span> ${offer}`;
                    li.className = "mb-2 mt-2";
                    document.querySelector("ul").appendChild(li);
                }
            })
        }
    </script>
</head>
<body class="container-fluid" onload="bodyload()">
    <section class="row mt-4">
        <div class="col-3">
            <img width="300" height="400" id="productImage">
        </div>
        <div class="col-9">
            <h3 id="productTitle"></h3>
            <div class="d-flex">
                <div class="bg-success text-white p-1 rounded" style="width:60px">
                    <span id="productRating"></span> <span class="bi bi-star-fill"></span>
                 </div>
                 <div class="ms-3">
                     <span id="productReviews"></span>
                 </div>
            </div>
            <div class="mt-4">
                <h1 id="productPrice"></h1>
            </div>
            <div>
                <h3>Offers</h3>
                <ul>
                   
                </ul>
            </div>
        </div>
    </section>
</body>
</html>


# 31st March 2023
=========================
Nasa API

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../node_modules/bootstrap/dist/css/bootstrap.css">
    <script>
        function bodyload(){
            fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=6ffzhNjjV1XA2HkP9u2ghEmZVMK8Rb2M2ZG4n6Fl&quot;)
            .then(function(res){
                return res.json();
            })
            .then(function(marsObject){
                console.log(marsObject);
                for(var item of marsObject.photos)
                {
                    var div = document.createElement("div");
                    div.className = "card p-2 m-2";
                    div.style.width = "200px";
                    div.innerHTML = `
                        <img src=${item.img_src} height="150" class="card-img-top">
                        <div class="card-header">
                            <h2>${item.id}</h2>
                        </div>
                        <div class="card-body">
                            <dl>
                              <dt>Camera</dt>
                              <dd>${item.camera.full_name}</dd>
                              <dt>Rover</dt>
                              <dd>${item.rover.name}</dd>
                            </dl>
                        </div>
                    `;
                    document.querySelector("main").appendChild(div);
                }
            })
        }
    </script>
</head>
<body class="container-fluid" onload="bodyload()">
    <h2>Mars Rover Photos</h2>
    <main class="d-flex flex-wrap">

    </main>
</body>
</html>


Ex:
products.json

[
    {
        "Name": "Samsung TV",
        "Price": 45000.44,
        "Rating": {"Rate":4.3, "Count":5000}
    },
    {
        "Name": "Nike Casuals",
        "Price": 5700.33,
        "Rating": {"Rate":3.6, "Count":3200}
    },
    {
        "Name": "Watch",
        "Price": 3500.33,
        "Rating":{"Rate":4.2, "Count":5000}
    }
]

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        function bodyload(){
            fetch("../data/products.json")
            .then(function(response){
                return response.json();
            })
            .then(function(products){
                for(var product of products){
                    var tr = document.createElement("tr");
                    var tdName = document.createElement("td");
                    var tdPrice = document.createElement("td");
                    var tdRating = document.createElement("td");

                    tdName.innerHTML = product.Name;
                    tdPrice.innerHTML = product.Price;
                    tdRating.innerHTML = `${product.Rating.Rate} [${product.Rating.Count}]`;

                    tr.appendChild(tdName);
                    tr.appendChild(tdPrice);
                    tr.appendChild(tdRating);

                    document.querySelector("tbody").appendChild(tr);
                }
            })
        }
    </script>
</head>
<body onload="bodyload()">
    <table border="1" width="400">
        <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Rating</th>
            </tr>
        </thead>
        <tbody>

        </tbody>
    </table>
</body>
</html>




                                 Fakestore API

GET Requests

http://fakestoreapi.com

/products                                            [ { }, { } ]   20
/products/1                                        { }   specific product by id
/products/categories                            [""]     list of all categories
/products/category/jewelery                    [{},{}]  specific category products

Ex:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shopper|Online Shopping</title>
    <link rel="stylesheet" href="../node_modules/bootstrap/dist/css/bootstrap.css">
    <link rel="stylesheet" href="../node_modules/bootstrap-icons/font/bootstrap-icons.css">
    <script type="text/javascript">
        function LoadCategories(){
            fetch("http://fakestoreapi.com/products/categories&quot;)
            .then(function(response){
                return response.json();
            })
            .then(function(categories){
                categories.unshift("all");
                for(var category of categories){
                    var option = document.createElement("option");
                    option.text = category.toUpperCase();
                    option.value = category;
                    document.getElementById("lstCategories").appendChild(option);
                }
            })
        }
        function LoadProducts(url){
            document.querySelector("main").innerHTML="";
            fetch(url)
            .then(function(response){
                return response.json();
            })
            .then(function(products){
                for(var product of products){
                    var card = document.createElement("div");
                    card.className = "card p-2 m-2";
                    card.style.width = "200px";
                    card.innerHTML = `
                        <img src=${product.image} class="card-img-top" height="100">
                        <div class="card-header overflow-auto" style="height:80px">
                            <p>${product.title}</p>
                        </div>
                        <div class="card-body">
                            <dl>
                                <dt>Price</dt>
                                <dd>${product.price}</dd>
                                <dt>Rating</dt>
                                <dd>
                                    <span class="bi bi-star-fill text-success"> </span>
                                    ${product.rating.rate} [${product.rating.count}]
                                </dd>
                            </dl>
                        </div>
                        <div class="card-footer">
                            <button onclick="AddToCartClick(${product.id})" class="btn btn-danger w-100">
                             <span class="bi bi-cart4"></span> Add to Cart
                            </button>
                        </div>
                    `;
                    document.querySelector("main").appendChild(card);
                }
            })
        }
        function bodyload(){
            LoadCategories();
            LoadProducts("http://fakestoreapi.com/products&quot;);
            GetCartCount();
        }
        function CategoryChanged(){
            var categoryName = document.getElementById("lstCategories").value;
            if(categoryName=="all"){
                LoadProducts("http://fakestoreapi.com/products&quot;);
            } else {
                LoadProducts(`http://fakestoreapi.com/products/category/${categoryName}`);
            }
        }
        function NavClick(categoryName){
            document.getElementById("lstCategories").value = categoryName;
            if(categoryName=="all"){
                LoadProducts("http://fakestoreapi.com/products&quot;);
            } else {
                LoadProducts(`http://fakestoreapi.com/products/category/${categoryName}`);
            }
        }
        var cartItems = [];
        function GetCartCount(){
            document.getElementById("cartCount").innerHTML = cartItems.length;
        }
        function AddToCartClick(id) {
            fetch(`http://fakestoreapi.com/products/${id}`)
            .then(function(response){
                return response.json();
            })
            .then(function(product){
                alert(`${product.title}\nAdded to Cart`);
                cartItems.push(product);
                GetCartCount();
            })
        }
        function LoadCartItems(){
            document.querySelector("tbody").innerHTML= "";
            for(var item of cartItems){
                var tr = document.createElement("tr");
                var tdTitle = document.createElement("td");
                var tdImage = document.createElement("td");
                var tdPrice = document.createElement("td");
                var tdAction = document.createElement("td");

                tdTitle.innerHTML = item.title;
                tdImage.innerHTML = `<img src=${item.image} width="50" height="50">`;
                tdPrice.innerHTML = item.price;
                tdAction.innerHTML = `
                 <button class="bi bi-trash-fill btn btn-danger"></button>
                `;

                tr.appendChild(tdTitle);
                tr.appendChild(tdImage);
                tr.appendChild(tdPrice);
                tr.appendChild(tdAction);

                document.querySelector("tbody").appendChild(tr);
            }
        }
    </script>
    <style>
        a {
            color:white;
            text-decoration: none;
        }
        a:hover {
            color:yellow;
        }
    </style>
</head>
<body class="container-fluid" onload="bodyload()">
    <header class="d-flex justify-content-between p-2 bg-dark text-white mt-2">
        <div>
            <span style="font-size:25px; font-weight:bold">Shopper.</span>
        </div>
        <div style="font-size: 20px;">
            <span class="me-3"><a href="javascript:NavClick('all')">Home</a></span>
            <span class="me-3"><a href="javascript:NavClick('electronics')">Electronics</a></span>
            <span class="me-3"><a href="javascript:NavClick('jewelery')">Jewelery</a></span>
            <span class="me-3"><a href="javascript:NavClick('men\'s clothing')">Men's Fashion</a></span>
            <span class="me-3"><a href="javascript:NavClick('women\'s clothing')">Women's Fashion</a></span>
        </div>
        <div>
            <span class="bi bi-search me-3"></span>
            <span class="bi bi-person me-3"></span>
            <span class="bi bi-heart me-3"></span>
            <button onclick="LoadCartItems()" data-bs-target="#cart" data-bs-toggle="modal" class="btn text-white position-relative">
                <span class="bi bi-cart"></span>
                <span id="cartCount" class="badge bg-danger position-absolute rounded rounded-circle"></span>
            </button>
            <div class="modal fade" id="cart">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="text-primary">Your Cart Summary</h4>
                            <button class="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body">
                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Preview</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <section class="mt-3 row">
        <nav class="col-2">
            <div>
                <label class="form-label fw-bold">Select Category</label>
                <div>
                    <select onchange="CategoryChanged()" class="form-select" id="lstCategories">

                    </select>
                </div>
            </div>
        </nav>
        <main class="col-10 d-flex flex-wrap overflow-auto" style="height:500px">

        </main>
    </section>
    <script src="../node_modules/jquery/dist/jquery.js"></script>
    <script src="../node_modules/bootstrap/dist/js/bootstrap.bundle.js"></script>
</body>
</html>