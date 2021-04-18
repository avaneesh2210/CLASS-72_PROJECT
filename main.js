var array1 = ["FAMILY_BOOK.jpg","dad_image.png","MOM_IMAGE.jpg","SISTER.jpg","SON.jpg"];
    var array2 = ["king's family","Arjun","Sharadha","Lakshmi","Sharadh"];
    var i = 0;
function change_image(){
      i++;
    var number_of_members = 4;
    if (i>number_of_members){
      i = 0;
    }
    var update_image = array1[i];
    var update_name = array2[i];  
    document.getElementById("image").src = update_image;
document.getElementById("text").innerHTML = update_name;
}