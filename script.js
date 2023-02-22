
var img = document.getElementById('img');

var slides=[' images/sam.jpg ','images/nasa.jpg', ' images/image1.jfif.jpg',' images/image2.jfif.jpg', ' images/image3.jfif.jpg', ' images/image4.jfif.jpg', ' images/image5.jfif.jpg','images/ image6.jfif.jpg,',' images/image19.jfif.jpg'];

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

