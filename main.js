function instaPhoto(){
    //if(window.location.href == "https://instagram.com/" || window.location.href == "https://www.instagram.com/"){
        // _aagw class'ına sahip tüm div elementlerini seçin
        var elements = document.querySelectorAll("._aagw");

        // Her bir elementi silebilirsiniz
        elements.forEach(function(element) {
            element.remove();
        });
    console.log("test")

            //}
}

setInterval(instaPhoto, 1000);
instaPhoto()
