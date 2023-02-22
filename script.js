
var img = document.getElementById('img');

var slides=[' images/sam.jpg ','images/nasa.jpg', ' images/image10.jfif.jpg',' images/image11.jfif.jpg', ' images/image12.jfif.jpg', ' images/image1.jfif.jpg', ' images/image2.jfif.jpg','images/ image18.jfif.jpg,',' images/image19.jfif.jpg'];

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

