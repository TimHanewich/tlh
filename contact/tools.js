function DisableTextInput(element_name)
{
    document.getElementById(element_name).setAttribute("disabled", "");
}

function EnableTextInput(element_name)
{
    document.getElementById(element_name).removeAttribute("disabled");
}

function DisableButton(button_name)
{
    document.getElementById(button_name).setAttribute("disabled", "");
}

function EnableButton(button_name)
{
    document.getElementById(button_name).removeAttribute("disabled");
}