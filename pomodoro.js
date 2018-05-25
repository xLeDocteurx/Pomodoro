var chronos = [];
var pauseMode = false;
var pauseTime = 5;
var pauseChrono;
var pauseDiv = document.getElementById("pauseDiv");

if (pauseMode == false) {
    
    pauseDiv.style.display = "none";
}

function submitChrono () {
    var content = document.getElementById("content");
    var name = document.getElementById("content").value;
    chronos[chronos.length] = new chrono(name, 10);
    
    document.getElementById("content").value = "Préparer un éxercice JS";
}

function deleteChrono (id) {
    var container = document.getElementById("chronos-container");
    var chrono = document.getElementById(`chrono_${id}`);
    container.removeChild(chrono);
}

function changeChrono(id) {
    var item = document.getElementById(`p_${id}`);
    var time = document.getElementById(`t_${id}`);
    
    if(item.style.textDecoration != "line-through") {
        item.style.textDecoration = "line-through";
        time.style.textDecoration = "line-through";
    }
    //  else {
    //     item.style.textDecoration = "none";
    //     time.style.textDecoration = "none";
    // }
}

function post (id, objet) {

    this.id = id;
    this.objet = objet;
}


function play () {
    
    if (chronos.length >= 0) {

        var currentchrono = chronos[0];

        console.log("current chrono : " + currentchrono.id + " // current time on this one : " + currentchrono.timeInterval);   
    
        currentchrono.isPaused = false;
        clearInterval(currentchrono.timeInterval);
        currentchrono.timeInterval = setInterval("this.update()", second);
    }

    if (pauseMode == false) {
        
        pauseDiv.style.display = "none";
    } else {
        pauseDiv.style.display = "block";
    }
}

function stop () {

    var currentchrono = chronos[0];

    console.log("current chrono" + currentchrono + "current time on this one : " + currentchrono.timeInterval);   
    
    // self.minutes = 0;
    currentchrono.isPaused = false;
    clearInterval(currentchrono.timeInterval); 
    changeChrono(currentchrono.id);

    chronos.shift();
    stopSound.play();

    if (pauseMode == false) {
        // pauseChrono = new chrono("pause", 5);
        pauseMode = true;
    } else {
        pauseChrono = null;
        pauseMode = false;
        
        if (chronos.length > 0) {
            play();
        }
    }
}

function pause () {

    var currentchrono = chronos[0];

    console.log("current chrono" + currentchrono + "current time on this one : " + currentchrono.timeInterval);   

    currentchrono.isPaused = true;
    clearInterval(currentchrono.timeInterval);   
}