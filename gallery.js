function test(){
    var alle = document.getElementsByClassName("image-container");
    for (var i = 0; i < alle.length; i++){
        console.log(alle[0].childElementCount);
        
        for (var j = 0; j < alle[0].childElementCount; j++) {
            
            console.log("Test")
            alle[i].children[j].style.backgroundColor = "red";
            
        }
    }

}