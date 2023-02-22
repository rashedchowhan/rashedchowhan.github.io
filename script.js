
var img = document.getElementById('img');

var slides=['sam.jpg ','nasa.jpg', 'image1.jfif.jpg','image2.jfif.jpg', 'image3.jfif.jpg', 'image4.jfif.jpg', 'image5.jfif.jpg','image6.jfif.jpg'];

var Start=0;

function slider(){
    if(Start<slides.length){
        Start=Start+1;
    }
    else{
        Start=1;
    }
    console.log(img);
    img.innerHTML = "<img src="+slides[Start-1]+">";
   
}
setInterval(slider,2000);

