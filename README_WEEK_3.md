23rd March 2023
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