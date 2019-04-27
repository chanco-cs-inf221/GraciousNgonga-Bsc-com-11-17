
function btnClicked(){
    var text = "You have successfully subscribed to Help-Malawi!!";
    document.getElementById("subscribed").innerHTML = text;
}

var photo = document.getElementById("photo");

function myRadio1(){
    photo.setAttribute("id","photo1");
}
function myRadio2(){
    photo.setAttribute("id","photo2");
}
function myRadio3(){
    photo.setAttribute("id","photo3");
}