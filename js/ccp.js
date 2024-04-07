var paragraphs = document.querySelectorAll("p")

paragraphs.forEach(function(p){
    p.addEventListener("click",function(){
        this.style.opacity = "1";
        console.log("test");
    });
});
