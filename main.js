var name_family = ["Anirudh Lohia" , "Vasudha Lohia" , "Megha Lohia" , "Vivek Lohia" , "Poonam Lohia" , "Sudhir Lohia" , ""];
var img_family = ["ani.jpg" , "didi.jpg" , "mom.png" , "papa.png" , "dadi.webp" , "dada.webp" , "book.jpg"];
var i = 0;
function nextimg() {
    document.getElementById("name_family").innerHTML=name_family[i] ;
    document.getElementById("img_people").src=img_family[i] ;
    i++;
}

