var sliders = [
    {
        id: 1,
        imageUrl: 'https://images.unsplash.com/photo-1661956601030-fdfb9c7e9e2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=742&q=80',
        title: 'Slider 1 '
    },
    {
        id: 2,
        imageUrl: 'https://images.unsplash.com/photo-1648408685303-0aa75e78e0f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80',
        title: 'Slider 2 '
    }


]
function onLeftSlide() {
    console.log(index);
    setCardDetails();

}
function onRightSlide() {
    console.log(index);

    setCardDetails();


}
var index = 0;
var timer; // only load on call
function setCardDetails() {
    if (index >= sliders.length || index <= 0) {
        index = 0;
    }
    document.getElementById("sliderImage").src = sliders[index].imageUrl;
    document.getElementById("imageTitle").innerHTML = sliders[index].title;
    index++;
}

function onPlayCarousel() {
    timer = setInterval(setCardDetails, 1000);
}
function onPauseCarousel() {
    clearInterval(timer)
}
function onStopCarousel() {
    clearInterval(timer)
}