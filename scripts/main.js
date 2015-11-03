/**
 * Created by mconn on 11/2/2015.
 */
$(document).ready(function(){
    $('#start').on('click', function(){
        fadeLogo();
    })
});
var logoInterval;
function fadeLogo() {
    var p = 0;
    logoInterval = window.setInterval(function (){
        if (p == 100) {
            // When progress completes, we have to clear the interval
            window.clearInterval(logoInterval);
        }
        else {
            $('#disney').loadgo();
            p++;
        }
    }, 150);
}