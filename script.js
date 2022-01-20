window.onload = function(){
    setInterval(fSec,1000);
    var sec = 0;
    var min = 0;
    var hour = 0;

    function fSec(){
        document.querySelector('.seconds-arrow').style.transform = 'rotate('+sec+'deg)';
        document.querySelector('.minutes-arrow').style.transform = 'rotate('+min+'deg)';
        document.querySelector('.hours-arrow').style.transform = 'rotate('+hour+'deg)';

        if(sec+6 == 366)
        {
            sec = 0;
            min = min + 6;
            if(min+6 == 366){
                min = 0;
                hour = hour + 6;
                if(hour+6 == 366){
                    hour = 0;
                }
            }
        }
        sec = sec + 6;   
    }
}