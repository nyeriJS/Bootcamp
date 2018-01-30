function countDown(secs){
    var elem = document.getElementById("timer");
    elem.innerHTML = "Please wait for " + secs + " seconds";
    if(secs < 0){
        clearTimeout(timer);
        elem.innerHTML="<a href='#'><h4>Your download is ready</h4></a>";
        elem.innerHTML+= "<button type='button' class='btn btn-success btn-lg'>Download <span class='glyphicon glyphicon-save'</button>";
    }
    secs--;    
    var timer = setTimeout('countDown('+secs+')', 1000); 
}

countDown(3);