
$(document).ready(function(){

    $("#myDropdown").hide();
    $('#detail-view').hide();
    $("#togglebtn").on("click", function(){
        $("#myDropdown").toggle();
        document.getElementById("toggleAnchor").classList.toggle("greyBackground");
    });   


    $(".clickableImageClass").on("click", function() {
        // $(this).addClass("testAddClass");
        // $("#main-content").addClass("testAddClass");
        $("#myDropdown").hide();
        var path = $(this).attr("src");
        var label = $(this).next().text(); //$("#fuuuck").text();//attr("alt");
        $("#detail-view").show();
        $("#detail-img").attr("src", path);
        $("#detail-label").text(label)
        $("#detail-view").addClass("fullscreen-object");
    });

    $("#detail-view").on("click", function() {
        $(this).hide();
    });
});


/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function showHamburgerMenu() {
    document.getElementById("main-mobile-nav").classList.toggle("show");
}

function insertSubMenu() {
    document.getElementById("aboutDropdown").classList.toggle("show");

}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtnCopy')) {
        var dropdowns = document.getElementsByClassName("dropdown-contentCopy");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
        }
        }
    } 
}   