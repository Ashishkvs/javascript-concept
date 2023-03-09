function bookMovie(){
    prompt("Enter movie name");
}

function saveBooking(){
    movie = document.getElementById("movie").value;
    theater = document.getElementById("theater").value;
    bookingTime = document.getElementById("bookingTime").value;
    bookingDate = document.getElementById("bookingDate").value;

    // alert(movie+""+theater+" "+bookingDate+" : "+ bookingTime)
    document.querySelector("span").innerHTML = movie+""+theater+" "+bookingDate+" : "+ bookingTime;

}