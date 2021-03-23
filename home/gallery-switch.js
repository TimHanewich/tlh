////// GLOBAL VARIABLES //////
var ImgLow = 1; //The lowest number in your image set
var ImgHigh = 3; //The highest number in your image set
var CurrentImg = 1;

//Img's
var OnImg = 1 //1 = showcase-caro, 2 = showcase-caro2

///////////////////////////////


setInterval(SwichGalleryImg2, 3000);


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

function SwichGalleryImg2()
{
    console.log("here again");
    //Fade out the old one
    var ToFadeOut = $(".img-front")[0];
    var ToFadeIn = $(".img-back")[0];
    $(ToFadeOut).fadeOut(1000);
    $(ToFadeIn).fadeIn(1000, function()
    {

        //Flip them - place that one that is now hidden IN FRONT and the one that is now showing IN BACK
        ToFadeOut.classList.add("img-front");
        ToFadeOut.classList.remove("img-back");
        ToFadeIn.classList.add("img-back");
        ToFadeIn.classList.remove("img-front");

        //Set the next picture (the hidden) img to that img
        var NextImgNumber = 1; //This will be set
        if (CurrentImg != ImgHigh) //Increment upward
        {
            NextImgNumber = CurrentImg + 1;
        }
        else //Reset to low
        {
            CurrentImg = ImgLow;
        }
        ToFadeOut.setAttribute("src", "home/images/" + NextImgNumber.toString() + ".jpg");
    });


    

    


    
}