setInterval(bruh,1000);
function bruh(){
    let time=new Date();
    let hr = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    
    let crr_time = hr + ":"+min + ":"+ sec;

    document.getElementById("clock").innerHTML = crr_time;

}
bruh()