//update progress bar and count
var count = 1;

function onLoadTemplate() {
    console.log('On Load Template');

    document.getElementById("loading").style.display = "block";
    document.querySelector("button").style.display = "none";

    
    setInterval(updateProgressBar, 100);

}
function updateProgressBar() {

    count++;
    if (count == 100) {
        location.href = 'my-operator.html';
    } else {
        document.getElementById("progress").value = `${count}`;
        document.getElementById("status").innerHTML = `${count} %`;

    }

}