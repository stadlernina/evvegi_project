var btnNo=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16"]
var image=["img1.jpg","img2.jpg","img3.jpg","img4.jpg","img5.jpg","img6.jpg","img7.jpg","img8.jpg"]

for(var i=0; i<8; i++)
{
    var choose1=Math.floor(Math.random()*(btnNo.length));
    document.getElementById(btnNo[choose1]).style.backgroundImage="URL("+image[i]+")";
    btnNo.splice(choose1,1);
    var choose2=Math.floor(Math.random()*(btnNo.length));
    document.getElementById(btnNo[choose2]).style.backgroundImage="URL("+image[i]+")";
    btnNo.splice(choose2,1);
}

var start=true;
var pre;
var preid;
var x=0;
function game(clicked_id)
{
    if(start==true)
    {
        document.getElementById(clicked_id).style.transform="rotateY(180deg)";
        preid=clicked_id;
        document.getElementById(clicked_id).style.transition="transform 0.8s";
        var url=document.getElementById(document.getElementById(clicked_id).lastElementChild.id).style.backgroundImage;
        pre=url.substring(4,url.length-1);
        start=false;
    }
    else
    {
        document.getElementById(clicked_id).style.transform="rotateY(180deg)";
        document.getElementById(clicked_id).style.transition="transform 0.8s";
        setTimeout(() => {
            var url=document.getElementById(document.getElementById(clicked_id).lastElementChild.id).style.backgroundImage;
            if(url.substring(4,url.length-1)==pre)
            {
                document.getElementById(preid).remove();
                document.getElementById(clicked_id).remove();
                x=x+2;
                if(x==16)
                {
                    alert("Játék teljesítve!");
                }
                start=true;
            }
            else
            {
                document.getElementById(preid).style.transform="rotateY(360deg)";
                document.getElementById(clicked_id).style.transform="rotateY(360deg)";
                start=true;
            }
        }, 800);
    }
}

let timer;
let isRunning = false;
let elapsedTime = 0;

const display = document.getElementById('display');
const startStopButton = document.getElementById('startStop');
const resetButton = document.getElementById('reset');

startStopButton.addEventListener('click', () => {
    if (isRunning) {
        clearInterval(timer);
        startStopButton.textContent = 'Start';
    } else {
        timer = setInterval(updateTime, 1000);
        startStopButton.textContent = 'Stop';
    }
    isRunning = !isRunning;
});

resetButton.addEventListener('click', () => {
    clearInterval(timer);
    elapsedTime = 0;
    display.textContent = '00:00:00';
    startStopButton.textContent = 'Start';
    isRunning = false;
});

function updateTime() {
    elapsedTime++;
    const hours = Math.floor(elapsedTime / 3600);
    const minutes = Math.floor((elapsedTime % 3600) / 60);
    const seconds = elapsedTime % 60;

    display.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(unit) {
    return unit < 10 ? '0' + unit : unit;
}