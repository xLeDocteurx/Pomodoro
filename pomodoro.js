var chronos = [];

function submitChrono () {
    var content = document.getElementById("content");
    var name = document.getElementById("content").value;
    chronos[chronos.length] = new chrono(name, 25);
    
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
    
    var currentchrono = chronos[0];

    console.log("current chrono : " + currentchrono.id + " // current time on this one : " + currentchrono.timeInterval);   

    currentchrono.isPaused = false;
    clearInterval(this.timeInterval);
    currentchrono.timeInterval = setInterval("this.update()", second);
}

function stop () {

    console.log("current chrono" + currentchrono + "current time on this one : " + currentchrono.timeInterval);   

    var currentchrono = chronos[0];
    
    // self.minutes = 0;
    currentchrono.isPaused = false;
    clearInterval(this.timeInterval); 
    changeChrono(currentchrono.id);
}

function pause () {

    console.log("current chrono" + currentchrono + "current time on this one : " + currentchrono.timeInterval);   

    var currentchrono = chronos[0];

    currentchrono.isPaused = true;
    clearInterval(currentchrono.timeInterval);   
}