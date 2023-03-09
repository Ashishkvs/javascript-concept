function onbodyLoad(){
    alert('hello');
}
function promtUserName(default_message) {
    let name = prompt("Enter your name", default_message);
    document.querySelector("span").innerHTML = name;
    if(name == "") {
        alert("Name cannot be empty please Re-enter name")
        promtUserName("Please enter your name");
    } else if(name == null) {
        alert("Name cannot be null ")
        promtUserName("you clicked cancel please Re-enter name");
    }
}