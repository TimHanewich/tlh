////// GLOBAL VARIABLES //////
var ImgLow = 1; //The lowest number in your image set
var ImgHigh = 3; //The highest number in your image set
var CurrentImg = 1;
///////////////////////////////

setInterval(SwitchGalleryImg, 7000);

function SwitchGalleryImg()
{
    var NextImgNumber = 1; //This will be set
    if (CurrentImg != ImgHigh) //Increment upward
    {
        NextImgNumber = CurrentImg + 1;
    }
    else //Reset to low
    {
        CurrentImg = ImgLow;
    }

    //Fade out
    $("#showcase-caro").fadeOut(1200, function()
    {
        document.getElementById("showcase-caro").setAttribute("src", "home/images/" + NextImgNumber.toString() + ".jpg");
        CurrentImg = NextImgNumber;
        $("#showcase-caro").fadeIn(1200);
    });

    
}