$("#btn_SubmitForm").click(function()
{
    
    //Get all inputs
    var input_Name = document.getElementById("input_Name").value;
    var input_Phone = document.getElementById("input_Phone").value;
    var input_Email = document.getElementById("input_Email").value;
    var input_Address = document.getElementById("input_Address").value;
    var input_Community = document.getElementById("input_Community").value;
    var input_Body = document.getElementById("input_Body").value;

    //Get the input for from
    var rb_Advertisement = document.getElementById("rb_Advertisement").checked;
    var rb_InternetSearch = document.getElementById("rb_InternetSearch").checked;
    var rb_Referral = document.getElementById("rb_Referral").checked;
    var found = -1;
    if (rb_Advertisement)
    {
        found = 0;
    }
    else if (rb_InternetSearch)
    {
        found = 1;
    }
    else if (rb_Referral)
    {
        found = 2;
    }
    else
    {
        found = -1;
    }
    

    //Prepare the body
    var payload = {"name": input_Name, "phone": input_Phone, "email": input_Email, "address": input_Address, "community": input_Address, "body": input_Body, "found": found}
    
    //Disable all of the inputs
    DisableTextInput("input_Name");
    DisableTextInput("input_Phone");
    DisableTextInput("input_Email");
    DisableTextInput("input_Address");
    DisableTextInput("input_Community");
    DisableTextInput("input_Body");
    DisableButton("btn_SubmitForm");

    //Make the call!
    var req = new XMLHttpRequest();
    req.open("post", "https://tlhll.azurewebsites.net/api/SubmitContactForm");
    req.onreadystatechange = function()
    {
        if (req.readyState == 4)
        {
            if (req.status == 200)
            {
                //Hide the form, show successful
                document.getElementById("ContactForm").classList.add("hidden");
                document.getElementById("SuccessMsg").classList.remove("hidden");
            }
            else
            {
                //Enable all of them and show an error message
                EnableTextInput("input_Name");
                EnableTextInput("input_Phone");
                EnableTextInput("input_Email");
                EnableTextInput("input_Address");
                EnableTextInput("input_Community");
                EnableTextInput("input_Body");
                EnableButton("btn_SubmitForm");

                document.getElementById("errormsg").innerText = "There was an error while submitting this form.";
                document.getElementById("errormsg").classList.remove("hidden");
            }
        }
    }
    req.send(JSON.stringify(payload));
});