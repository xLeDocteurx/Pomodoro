// var sound = document.createElement("audio");
//     sound.src = "sound.mp3";
//    console.log(sound);

// var stopSound = document.createElement("audio");
//     stopSound.src = "stop.mp3";
//     stopSound.volume = 0.2;
//     console.log(stopSound);

var second = 1000;



function update () {
    // console.log("Is Updating");     
    // self.minutes -= 1;
    // this.duration -= 1;
    chronos[0].seconds -= 1;
    if (seconds < 0) {
        chronos[0].seconds = 59;
        chronos[0].minutes -= 1;
    }
    chronos[0].displayTime();
    if (self.minutes < 0) {
        console.log("TRYING TO STOP");
        stop();
    }
    // sound.play();
};



class chrono {

    constructor (name, duration) {

        this.id = chronos.length;
        this.name = name;
        this.duration = duration; // En minutes
        self.minutes = duration;// * 60; // Le décrémentation se fait en seconde. et le display reconvertira dans l'autre sens et formatera le texte
        self.seconds = 0;

        console.log("duration : " + this.duration);
        // console.log("clocktime : " + self.minutes);


        this.isPaused = false;

        this.timeInterval;
        
        // var self = this;
        this.displayTime = function () {
            // console.log("id : " + self.id);
            // console.log("clock time : " + self.minutes);
            // console.log(document.getElementById("t_" + self.id));
            document.getElementById("t_" + self.id).innerHTML = `${self.minutes}:${self.seconds}`;
        } 



        //A la création de l'objet chrono_xxx
        //Créé un template HTML jumeau de ce meme chrono
        this.chrono_html = new chrono_html(self.id, this.name, this.duration);
        document.getElementById("chronos-container").appendChild(this.chrono_html.element);

    }

}

class chrono_html {

    constructor (id, name, duration) {
    
        self.id = id;
        this.name = name;

        this.element = document.createElement("div");
        this.element.setAttribute(`id`,`chrono_${id}`);
        this.element.setAttribute(`class`,`task`);





        this.element.innerHTML = `                
            <div class="head">
                <button class="delete" onclick="deleteChrono(${id})" type="button"><b>X</b> </button>
            </div>
            <div class="paper">

                <!-- <div class="texture"></div> -->
                <!-- <div class="lines"> -->
                    <!-- <div class="lines2"></div> -->
                    <div class="glossary">
                    
                        <div class="content">
                            <p id="p_${id}">${name}</p>
                        </div>
                        <div class="time">
                            <p id="t_${id}">${duration}:00</p>
                        </div>

                    </div>
                <!-- </div> -->
            </div>
        `;
    
    }
}