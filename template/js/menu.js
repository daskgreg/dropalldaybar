
function selectLanguage(){
    var eng = document.getElementById("englishLanguage");
    var greek = document.getElementById("greekLanguage");
}

function showGreekMenu(){
    var x = document.getElementById("greekMenu");

    if( x.style.display === "none"){
        x.style.display = "block";
    }else{
        x.style.display = "none";
    }
}