$(".menu-tab").mouseover(function()
{
    this.classList.add("menu-tab-highlighted");
});

$(".menu-tab").mouseleave(function()
{
    this.classList.remove("menu-tab-highlighted");
});