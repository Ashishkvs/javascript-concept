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