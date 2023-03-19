window.addEventListener("load", titleScreen);
let lives = 3;
let gameIsPaused = false;
let gameHasEnded = false;
let durationOfGame = 30;
let timeLeft;
let deciSeconds;
let timeTracker;
let pointsToWin = 20;

/*SOUNDS*/
let titlescreenMusic = document.querySelector("#titlescreenMusic");
let gameoverMusic = document.querySelector("#gameoverMusic");
let levelcompleteMusic = document.querySelector("#levelcompleteMusic");
let dogbarkSound = document.querySelector("#dogbarkSound");
let lostlifeSound = document.querySelector("#lostlifeSound");
let gooditemSound = document.querySelector("#gooditemSound");
let buttonSound = document.querySelector("#buttonSound");


/*TITLE SCREEN*/
function titleScreen() {
    clearTimeout(timeTracker);

    stopSounds();
    playTitleScreenMusic();
    titlescreenMusic.addEventListener("ended", playTitleScreenMusic);
    console.log("function titleScreen()");
    document.querySelector("#title_screen").classList.remove("hidden");
    document.querySelector("#instructions").classList.add("hidden");
    document.querySelector("#game").classList.add("hidden");
    document.querySelector("#game_over").classList.add("hidden");
    document.querySelector("#level_complete").classList.add("hidden");


    document.querySelector("#yellowpaper1_container").classList.value = "";
    document.querySelector("#yellowpaper1_sprite").classList.value = "";
    document.querySelector("#pandemuerto2_container").classList.value = "";
    document.querySelector("#pandemuerto2_sprite").classList.value = "";
    document.querySelector("#femalebaditem3_container").classList.value = "";
    document.querySelector("#femalebaditem3_sprite").classList.value = "";
    document.querySelector("#browndog4_container").classList.value = "";
    document.querySelector("#browndog4_sprite").classList.value = "";
    document.querySelector("#candle17_container").classList.value = "";
    document.querySelector("#candle17_sprite").classList.value = "";
    document.querySelector("#xoloitzcuincle18_container").classList.value = "";
    document.querySelector("#xoloitzcuincle18_sprite").classList.value = "";
    document.querySelector("#greenpaper19_container").classList.value = "";
    document.querySelector("#greenpaper19_sprite").classList.value = "";
    document.querySelector("#flowervase20_container").classList.value = "";
    document.querySelector("#flowervase20_sprite").classList.value = "";
    document.querySelector("#malebaditem21_container").classList.value = "";
    document.querySelector("#malebaditem21_sprite").classList.value = "";
    document.querySelector("#frame22_container").classList.value = "";
    document.querySelector("#frame22_sprite").classList.value = "";
    document.querySelector("#timetop9_container").classList.value = "";


    /*TITLE SCREEN*/
    document.querySelector("#load_game_container").classList.add("blink");
    document.querySelector("#browndogtail-ss_container").classList.add("tail_animation");
    document.querySelector("#xoloitzcuincletail-ss_container").classList.add("tail_animation");

    document.querySelector("#load_game_container").addEventListener("click", loadGame);

    document.querySelector("#load_game_sprite").addEventListener("click", playButtonSound);
}



/*INTRUCTIONS SCREEN*/
function loadGame() {
    console.log("function loadGame()");
    
    playTitleScreenMusic();
    titlescreenMusic.addEventListener("ended", playTitleScreenMusic);
    
    document.querySelector("#title_screen").classList.add("hidden");
    document.querySelector("#instructions").classList.remove("hidden");

    document.querySelector("#startgame_container").classList.add("blink");

    document.querySelector("#startgame_container").addEventListener("click", startGame);

    document.querySelector("#startgame_sprite").addEventListener("click", playButtonSound);

    document.querySelector("#home-ins_container").addEventListener("click", titleScreen);

    document.querySelector("#home-ins_sprite").addEventListener("click", playButtonSound);
}




/*GAME SCREEN*/

function startGame() {
    console.log("function startGame()");

    points = 0;
    document.querySelector("#pointsno11_sprite").textContent = points;


    lives = 3;

    gameIsPaused = false;
    gameHasEnded = false;
    durationOfGame;
    deciSeconds;

    pointscounter();
    livescounter();

    timeLeft = durationOfGame;
    deciSeconds = durationOfGame * 10;

    startTimer();

    stopSounds();

    playGameMusic();
    gameMusic.addEventListener("ended", playGameMusic);

    document.querySelector("#instructions").classList.add("hidden");
    document.querySelector("#game_over").classList.add("hidden");
    document.querySelector("#level_complete").classList.add("hidden");
    document.querySelector("#game").classList.remove("hidden");

    document.querySelector("#yellowpaper1_container").classList.remove("paused");
    document.querySelector("#yellowpaper1_sprite").classList.remove("paused");
    document.querySelector("#pandemuerto2_container").classList.remove("paused");
    document.querySelector("#pandemuerto2_sprite").classList.remove("paused");
    document.querySelector("#femalebaditem3_container").classList.remove("paused");
    document.querySelector("#femalebaditem3_sprite").classList.remove("paused");
    document.querySelector("#browndog4_container").classList.remove("paused");
    document.querySelector("#browndog4_sprite").classList.remove("paused");
    document.querySelector("#candle17_container").classList.remove("paused");
    document.querySelector("#candle17_sprite").classList.remove("paused");
    document.querySelector("#xoloitzcuincle18_container").classList.remove("paused");
    document.querySelector("#xoloitzcuincle18_sprite").classList.remove("paused");
    document.querySelector("#greenpaper19_container").classList.remove("paused");
    document.querySelector("#greenpaper19_sprite").classList.remove("paused");
    document.querySelector("#flowervase20_container").classList.remove("paused");
    document.querySelector("#flowervase20_sprite").classList.remove("paused");
    document.querySelector("#malebaditem21_container").classList.remove("paused");
    document.querySelector("#malebaditem21_sprite").classList.remove("paused");
    document.querySelector("#frame22_container").classList.remove("paused");
    document.querySelector("#frame22_sprite").classList.remove("paused");
    document.querySelector("#timetop9_container").classList.remove("paused");


    /*YELLOW PAPER*/
    document.querySelector("#yellowpaper1_container").classList.add("pos1");

    document.querySelector("#yellowpaper1_container").classList.add("animation1");

    document.querySelector("#yellowpaper1_container").addEventListener("click", playGoodItemSound);

    document.querySelector("#yellowpaper1_sprite").addEventListener("click", fadeout1);

    document.querySelector("#yellowpaper1_container").addEventListener("animationend", newPosition);


    /*PAN DE MUERTO*/
    document.querySelector("#pandemuerto2_container").classList.add("pos2");

    document.querySelector("#pandemuerto2_container").classList.add("animation2");

    document.querySelector("#pandemuerto2_container").addEventListener("click", playGoodItemSound);

    document.querySelector("#pandemuerto2_sprite").addEventListener("click", fadeout2);

    document.querySelector("#pandemuerto2_container").addEventListener("animationend", newPosition);


    /*FEMALE BAD ITEM*/
    document.querySelector("#femalebaditem3_container").classList.add("pos3");
    document.querySelector("#femalebaditem3_container").classList.add("animation1");

    document.querySelector("#femalebaditem3_container").addEventListener("click", playLostLifeSound);

    document.querySelector("#femalebaditem3_sprite").addEventListener("click", fadeout3);

    document.querySelector("#femalebaditem3_container").addEventListener("animationend", newPosition);


    /*BROWN DOG*/
    document.querySelector("#browndog4_container").classList.add("pos4");
    document.querySelector("#browndog4_container").classList.add("animation2");

    document.querySelector("#browndog4_container").addEventListener("click", playDogBarkSound);

    document.querySelector("#browndog4_sprite").addEventListener("click", fadeout4);

    document.querySelector("#browndog4_container").addEventListener("animationend", newPosition);


    /*CANDLE*/
    document.querySelector("#candle17_container").classList.add("pos5");
    document.querySelector("#candle17_container").classList.add("animation3");

    document.querySelector("#candle17_container").addEventListener("click", playGoodItemSound);

    document.querySelector("#candle17_sprite").addEventListener("click", fadeout17);

    document.querySelector("#candle17_container").addEventListener("animationend", newPosition);


    /*XOLOITZCUINCLE*/
    document.querySelector("#xoloitzcuincle18_container").classList.add("pos5");
    document.querySelector("#xoloitzcuincle18_container").classList.add("animation3");

    document.querySelector("#xoloitzcuincle18_container").addEventListener("click", playDogBarkSound);

    document.querySelector("#xoloitzcuincle18_sprite").addEventListener("click", fadeout18);

    document.querySelector("#xoloitzcuincle18_container").addEventListener("animationend", newPosition);


    /*GREEN PAPER*/
    document.querySelector("#greenpaper19_container").classList.add("pos3");
    document.querySelector("#greenpaper19_container").classList.add("animation1");

    document.querySelector("#greenpaper19_container").addEventListener("click", playGoodItemSound);

    document.querySelector("#greenpaper19_sprite").addEventListener("click", fadeout19);

    document.querySelector("#greenpaper19_container").addEventListener("animationend", newPosition);


    /*FLOWER VASE*/
    document.querySelector("#flowervase20_container").classList.add("pos4");
    document.querySelector("#flowervase20_container").classList.add("animation2");

    document.querySelector("#flowervase20_container").addEventListener("click", playGoodItemSound);

    document.querySelector("#flowervase20_sprite").addEventListener("click", fadeout20);

    document.querySelector("#flowervase20_container").addEventListener("animationend", newPosition);


    /*MALE BAD ITEM*/
    document.querySelector("#malebaditem21_container").classList.add("pos2");
    document.querySelector("#malebaditem21_container").classList.add("animation2");

    document.querySelector("#malebaditem21_container").addEventListener("click", playLostLifeSound);


    document.querySelector("#malebaditem21_sprite").addEventListener("click", fadeout21);

    document.querySelector("#malebaditem21_container").addEventListener("animationend", newPosition);


    /*FRAME*/
    document.querySelector("#frame22_container").classList.add("pos1");
    document.querySelector("#frame22_container").classList.add("animation1");

    document.querySelector("#frame22_container").addEventListener("click", playGoodItemSound);

    document.querySelector("#frame22_sprite").addEventListener("click", fadeout22);

    document.querySelector("#frame22_container").addEventListener("animationend", newPosition);


    /*FOREGROUND*/
    document.querySelector("#foreground_container").classList.add("posfg");

    document.querySelector("#happyfl5_container").classList.add("pos17");
    
    document.querySelector("#happyfl5_sprite").classList.add("happyf");


    document.querySelector("#happymr6_container").classList.add("pos6");
    
    document.querySelector("#happymr6_sprite").classList.add("happym");


    /*GAME UI*/

    document.querySelector("#timebottom7_container").classList.add("pos7");


    document.querySelector("#timemiddle8_container").classList.add("pos8");


    document.querySelector("#timetop9_container").classList.add("pos9");
    document.querySelector("#timetop9_container").classList.add("timerunning");
    document.querySelector("#points10_container").classList.add("pos10");


    document.querySelector("#pointsno11_container").classList.add("pos11");


    document.querySelector("#lives12_container").classList.add("pos12");
    document.querySelector("#lives12_container").classList.add("lives3");

    document.querySelector("#settings13_container").classList.add("pos13");
    document.querySelector("#settings13_container").addEventListener("click", pauseGame);
    
    document.querySelector("#settings13_sprite").classList.add("pausebutton");
    document.querySelector("#settings13_sprite").addEventListener("click", playButtonSound);

    document.querySelector("#homes14_container").classList.add("pos14");
    document.querySelector("#homes14_container").addEventListener("click", titleScreen);

    document.querySelector("#homes14_sprite").addEventListener("click", playButtonSound);

    document.querySelector("#music15_container").classList.add("pos15");

    document.querySelector("#music15_container").addEventListener("click", playButtonSound);
    
    
    document.querySelector("#music15_sprite").classList.add("music");
    document.querySelector("#music15_sprite").addEventListener("click", muteMusic);


    document.querySelector("#sound16_container").classList.add("pos16");

    document.querySelector("#sound16_container").addEventListener("click", playButtonSound);
    
    document.querySelector("#sound16_sprite").classList.add("sound");
    document.querySelector("#sound16_sprite").addEventListener("click", muteSound);


}


function fadeout1() {
    console.log("function fadeout1()");
    document.querySelector("#yellowpaper1_container").classList.add("stop");
    document.querySelector("#yellowpaper1_sprite").classList.add("fadeout1");
    document.querySelector("#yellowpaper1_sprite").addEventListener("animationend", restart1);
}

function restart1() {
    console.log("function restart1()");
    document.querySelector("#yellowpaper1_container").classList.remove("stop");
    document.querySelector("#yellowpaper1_container").classList.remove("pos1");
    document.querySelector("#yellowpaper1_container").classList.remove("animation1");
    document.querySelector("#yellowpaper1_sprite").classList.remove("fadeout1");
    document.querySelector("#yellowpaper1_container").offsetHeight;
    document.querySelector("#yellowpaper1_container").classList.add("pos1");
    document.querySelector("#yellowpaper1_container").classList.add("animation1");
    document.querySelector("#yellowpaper1_sprite").addEventListener("click", fadeout1);
}


function fadeout2() {
    console.log("function fadeout2()");
    document.querySelector("#pandemuerto2_container").classList.add("stop");
    document.querySelector("#pandemuerto2_sprite").classList.add("fadeout2");
    document.querySelector("#pandemuerto2_sprite").addEventListener("animationend", restart2);
}

function restart2() {
    console.log("function restart2()");
    document.querySelector("#pandemuerto2_container").classList.remove("stop");
    document.querySelector("#pandemuerto2_container").classList.remove("pos2");
    document.querySelector("#pandemuerto2_container").classList.remove("animation2");
    document.querySelector("#pandemuerto2_sprite").classList.remove("fadeout2");
    document.querySelector("#pandemuerto2_container").offsetHeight;
    document.querySelector("#pandemuerto2_container").classList.add("pos2");
    document.querySelector("#pandemuerto2_container").classList.add("animation2");
    document.querySelector("#pandemuerto2_sprite").addEventListener("click", fadeout2);
}


function fadeout3() {
    console.log("function fadeout3()");
    document.querySelector("#femalebaditem3_container").classList.add("stop");
    document.querySelector("#femalebaditem3_sprite").classList.add("fadeout3");
    document.querySelector("#femalebaditem3_sprite").addEventListener("animationend", restart3);
}

function restart3() {
    console.log("function restart3()");
    document.querySelector("#femalebaditem3_container").classList.remove("stop");
    document.querySelector("#femalebaditem3_container").classList.remove("pos3");
    document.querySelector("#femalebaditem3_container").classList.remove("animation1");
    document.querySelector("#femalebaditem3_sprite").classList.remove("fadeout3");
    document.querySelector("#femalebaditem3_container").offsetHeight;
    document.querySelector("#femalebaditem3_container").classList.add("pos3");
    document.querySelector("#femalebaditem3_container").classList.add("animation1");
    document.querySelector("#femalebaditem3_sprite").addEventListener("click", fadeout3);
}


function fadeout4() {
    console.log("function fadeout3()");
    document.querySelector("#browndog4_container").classList.add("stop");
    document.querySelector("#browndog4_sprite").classList.add("fadeout4");
    document.querySelector("#browndog4_sprite").addEventListener("animationend", restart4);
}

function restart4() {
    console.log("function restart4()");
    document.querySelector("#browndog4_container").classList.remove("stop");
    document.querySelector("#browndog4_container").classList.remove("pos4");
    document.querySelector("#browndog4_container").classList.remove("animation2");
    document.querySelector("#browndog4_sprite").classList.remove("fadeout4");
    document.querySelector("#browndog4_container").offsetHeight;
    document.querySelector("#browndog4_container").classList.add("pos4");
    document.querySelector("#browndog4_container").classList.add("animation2");
    document.querySelector("#browndog4_sprite").addEventListener("click", fadeout4);
}


function fadeout17() {
    console.log("function fadeout17()");
    document.querySelector("#candle17_container").classList.add("stop");
    document.querySelector("#candle17_sprite").classList.add("fadeout17");
    document.querySelector("#candle17_sprite").addEventListener("animationend", restart17);
}

function restart17() {
    console.log("function restart17()");
    document.querySelector("#candle17_container").classList.remove("stop");
    document.querySelector("#candle17_container").classList.remove("pos5");
    document.querySelector("#candle17_container").classList.remove("animation3");
    document.querySelector("#candle17_sprite").classList.remove("fadeout5");
    document.querySelector("#candle17_container").offsetHeight;
    document.querySelector("#candle17_container").classList.add("pos5");
    document.querySelector("#candle17_container").classList.add("animation3");
    document.querySelector("#candle17_sprite").addEventListener("click", fadeout17);
}


function fadeout18() {
    console.log("function fadeout18()");
    document.querySelector("#xoloitzcuincle18_container").classList.add("stop");
    document.querySelector("#xoloitzcuincle18_sprite").classList.add("fadeout18");
    document.querySelector("#xoloitzcuincle18_sprite").addEventListener("animationend", restart18);
}

function restart18() {
    console.log("function restart18()");
    document.querySelector("#xoloitzcuincle18_container").classList.remove("stop");
    document.querySelector("#xoloitzcuincle18_container").classList.remove("pos5");
    document.querySelector("#xoloitzcuincle18_container").classList.remove("animation3");
    document.querySelector("#xoloitzcuincle18_sprite").classList.remove("fadeout18");
    document.querySelector("#xoloitzcuincle18_container").offsetHeight;
    document.querySelector("#xoloitzcuincle18_container").classList.add("pos5");
    document.querySelector("#xoloitzcuincle18_container").classList.add("animation3");
    document.querySelector("#xoloitzcuincle18_sprite").addEventListener("click", fadeout18);
}


function fadeout19() {
    console.log("function fadeout19()");
    document.querySelector("#greenpaper19_container").classList.add("stop");
    document.querySelector("#greenpaper19_sprite").classList.add("fadeout19");
    document.querySelector("#greenpaper19_sprite").addEventListener("animationend", restart19);
}

function restart19() {
    console.log("function restart19()");
    document.querySelector("#greenpaper19_container").classList.remove("stop");
    document.querySelector("#greenpaper19_container").classList.remove("pos3");
    document.querySelector("#greenpaper19_container").classList.remove("animation1");
    document.querySelector("#greenpaper19_sprite").classList.remove("fadeout19");
    document.querySelector("#greenpaper19_container").offsetHeight;
    document.querySelector("#greenpaper19_container").classList.add("pos3");
    document.querySelector("#greenpaper19_container").classList.add("animation1");
    document.querySelector("#greenpaper19_sprite").addEventListener("click", fadeout19);
}


function fadeout20() {
    console.log("function fadeout20()");
    document.querySelector("#flowervase20_container").classList.add("stop");
    document.querySelector("#flowervase20_sprite").classList.add("fadeout20");
    document.querySelector("#flowervase20_sprite").addEventListener("animationend", restart20);
}

function restart20() {
    console.log("function restart20()");
    document.querySelector("#flowervase20_container").classList.remove("stop");
    document.querySelector("#flowervase20_container").classList.remove("pos4");
    document.querySelector("#flowervase20_container").classList.remove("animation2");
    document.querySelector("#flowervase20_sprite").classList.remove("fadeout20");
    document.querySelector("#flowervase20_container").offsetHeight;
    document.querySelector("#flowervase20_container").classList.add("pos4");
    document.querySelector("#flowervase20_container").classList.add("animation2");
    document.querySelector("#flowervase20_sprite").addEventListener("click", fadeout20);
}


function fadeout21() {
    console.log("function fadeout21()");
    document.querySelector("#malebaditem21_container").classList.add("stop");
    document.querySelector("#malebaditem21_sprite").classList.add("fadeout21");
    document.querySelector("#malebaditem21_sprite").addEventListener("animationend", restart21);
}

function restart21() {
    console.log("function restart21()");
    document.querySelector("#malebaditem21_container").classList.remove("stop");
    document.querySelector("#malebaditem21_container").classList.remove("pos2");
    document.querySelector("#malebaditem21_container").classList.remove("animation2");
    document.querySelector("#malebaditem21_sprite").classList.remove("fadeout21");
    document.querySelector("#malebaditem21_container").offsetHeight;
    document.querySelector("#malebaditem21_container").classList.add("pos2");
    document.querySelector("#malebaditem21_container").classList.add("animation2");
    document.querySelector("#malebaditem21_sprite").addEventListener("click", fadeout21);
}


function fadeout22() {
    console.log("function fadeout22()");
    document.querySelector("#frame22_container").classList.add("stop");
    document.querySelector("#frame22_sprite").classList.add("fadeout22");
    document.querySelector("#frame22_sprite").addEventListener("animationend", restart22);
}

function restart22() {
    console.log("function restart22()");
    document.querySelector("#frame22_container").classList.remove("stop");
    document.querySelector("#frame22_container").classList.remove("pos1");
    document.querySelector("#frame22_container").classList.remove("animation1");
    document.querySelector("#frame22_sprite").classList.remove("fadeout22");
    document.querySelector("#frame22_container").offsetHeight;
    document.querySelector("#frame22_container").classList.add("pos1");
    document.querySelector("#frame22_container").classList.add("animation1");
    document.querySelector("#frame22_sprite").addEventListener("click", fadeout22);
}


function pauseGame() {
    console.log("function pauseGame()");

    muteMusic();
    muteSound();


    if (gameIsPaused == false) {
        console.log("Game is set to PAUSED");
        document.querySelector("#yellowpaper1_container").classList.add("paused");
        document.querySelector("#yellowpaper1_sprite").classList.add("paused");
        document.querySelector("#pandemuerto2_container").classList.add("paused");
        document.querySelector("#pandemuerto2_sprite").classList.add("paused");
        document.querySelector("#femalebaditem3_container").classList.add("paused");
        document.querySelector("#femalebaditem3_sprite").classList.add("paused");
        document.querySelector("#browndog4_container").classList.add("paused");
        document.querySelector("#browndog4_sprite").classList.add("paused");
        document.querySelector("#candle17_container").classList.add("paused");
        document.querySelector("#candle17_sprite").classList.add("paused");
        document.querySelector("#xoloitzcuincle18_container").classList.add("paused");
        document.querySelector("#xoloitzcuincle18_sprite").classList.add("paused");
        document.querySelector("#greenpaper19_container").classList.add("paused");
        document.querySelector("#greenpaper19_sprite").classList.add("paused");
        document.querySelector("#flowervase20_container").classList.add("paused");
        document.querySelector("#flowervase20_sprite").classList.add("paused");
        document.querySelector("#malebaditem21_container").classList.add("paused");
        document.querySelector("#malebaditem21_sprite").classList.add("paused");
        document.querySelector("#frame22_container").classList.add("paused");
        document.querySelector("#frame22_sprite").classList.add("paused");
        document.querySelector("#timetop9_container").classList.add("paused");
        document.querySelector("#yellowpaper1_sprite").removeEventListener("click", fadeout1);
        document.querySelector("#pandemuerto2_sprite").removeEventListener("click", fadeout2);
        document.querySelector("#femalebaditem3_container").removeEventListener("click", loseLife1);
        document.querySelector("#femalebaditem3_sprite").removeEventListener("click", fadeout3);
        document.querySelector("#browndog4_sprite").removeEventListener("click", fadeout4);
        document.querySelector("#candle17_sprite").removeEventListener("click", fadeout17);
        document.querySelector("#xoloitzcuincle18_sprite").removeEventListener("click", fadeout18);
        document.querySelector("#greenpaper19_sprite").removeEventListener("click", fadeout19);
        document.querySelector("#flowervase20_sprite").removeEventListener("click", fadeout20);
        document.querySelector("#malebaditem21_container").removeEventListener("click", loseLife1);
        document.querySelector("#malebaditem21_sprite").removeEventListener("click", fadeout21);
        document.querySelector("#frame22_sprite").removeEventListener("click", fadeout22);
        document.querySelector("#yellowpaper1_container").removeEventListener("click", getPoint);
        document.querySelector("#pandemuerto2_container").removeEventListener("click", getPoint);
        document.querySelector("#candle17_container").removeEventListener("click", getPoint);
        document.querySelector("#greenpaper19_container").removeEventListener("click", getPoint);
        document.querySelector("#flowervase20_container").removeEventListener("click", getPoint);
        document.querySelector("#frame22_container").removeEventListener("click", getPoint);
        document.querySelector("#browndog4_container").removeEventListener("click", losePoint);
        document.querySelector("#xoloitzcuincle18_container").removeEventListener("click", losePoint);

        document.querySelector("#yellowpaper1_sprite").offsetHeight;
        
        document.querySelector("#settings13_sprite").classList.remove("pausebutton");
        
        document.querySelector("#settings13_sprite").offsetHeight;
        
        document.querySelector("#settings13_sprite").classList.add("playbutton");


        gameIsPaused = true;

    } else {
        console.log("Game is set to NOT paused");

        document.querySelector("#yellowpaper1_container").classList.remove("paused");
        document.querySelector("#yellowpaper1_sprite").classList.remove("paused");
        document.querySelector("#pandemuerto2_container").classList.remove("paused");
        document.querySelector("#pandemuerto2_sprite").classList.remove("paused");
        document.querySelector("#femalebaditem3_container").classList.remove("paused");
        document.querySelector("#femalebaditem3_sprite").classList.remove("paused");
        document.querySelector("#browndog4_container").classList.remove("paused");
        document.querySelector("#browndog4_sprite").classList.remove("paused");
        document.querySelector("#candle17_container").classList.remove("paused");
        document.querySelector("#candle17_sprite").classList.remove("paused");
        document.querySelector("#xoloitzcuincle18_container").classList.remove("paused");
        document.querySelector("#xoloitzcuincle18_sprite").classList.remove("paused");
        document.querySelector("#greenpaper19_container").classList.remove("paused");
        document.querySelector("#greenpaper19_sprite").classList.remove("paused");
        document.querySelector("#flowervase20_container").classList.remove("paused");
        document.querySelector("#flowervase20_sprite").classList.remove("paused");
        document.querySelector("#malebaditem21_container").classList.remove("paused");
        document.querySelector("#malebaditem21_sprite").classList.remove("paused");
        document.querySelector("#frame22_container").classList.remove("paused");
        document.querySelector("#frame22_sprite").classList.remove("paused");
        document.querySelector("#timetop9_container").classList.remove("paused");

        document.querySelector("#yellowpaper1_sprite").addEventListener("click", fadeout1);
        document.querySelector("#pandemuerto2_sprite").addEventListener("click", fadeout2);
        document.querySelector("#femalebaditem3_sprite").addEventListener("click", fadeout3);
        document.querySelector("#browndog4_sprite").addEventListener("click", fadeout4);
        document.querySelector("#candle17_sprite").addEventListener("click", fadeout17);
        document.querySelector("#xoloitzcuincle18_sprite").addEventListener("click", fadeout18);
        document.querySelector("#greenpaper19_sprite").addEventListener("click", fadeout19);
        document.querySelector("#flowervase20_sprite").addEventListener("click", fadeout20);
        document.querySelector("#malebaditem21_sprite").addEventListener("click", fadeout21);
        document.querySelector("#frame22_sprite").addEventListener("click", fadeout22);

        document.querySelector("#yellowpaper1_container").addEventListener("click", getPoint);
        document.querySelector("#pandemuerto2_container").addEventListener("click", getPoint);
        document.querySelector("#candle17_container").addEventListener("click", getPoint);
        document.querySelector("#greenpaper19_container").addEventListener("click", getPoint);
        document.querySelector("#flowervase20_container").addEventListener("click", getPoint);
        document.querySelector("#frame22_container").addEventListener("click", getPoint);
        document.querySelector("#browndog4_container").addEventListener("click", losePoint);
        document.querySelector("#xoloitzcuincle18_container").addEventListener("click", losePoint);
        document.querySelector("#femalebaditem3_container").addEventListener("click", loseLife1);
        document.querySelector("#malebaditem21_container").addEventListener("click", loseLife1);
        
        document.querySelector("#settings13_sprite").classList.remove("playbutton");
        
        document.querySelector("#settings13_sprite").offsetHeight;
        
        document.querySelector("#settings13_sprite").classList.add("pausebutton");

        gameIsPaused = false;

        startTimer();
    }
}


function newPosition() {
    console.log("function newPosition()");
    console.log(this);
    this.classList.value = "";
    this.offsetHeight;
    let randAni = Math.floor(Math.random() * 2) + 1;
    console.log(randAni);
    let randPos = Math.floor(Math.random() * 4) + 1;
    console.log(randPos);
    this.classList.add("animation" + randAni);
    this.classList.add("pos" + randPos);
}


function pointscounter() {
    document.querySelector("#yellowpaper1_container").addEventListener("click", getPoint);
    document.querySelector("#pandemuerto2_container").addEventListener("click", getPoint);
    document.querySelector("#candle17_container").addEventListener("click", getPoint);
    document.querySelector("#greenpaper19_container").addEventListener("click", getPoint);
    document.querySelector("#flowervase20_container").addEventListener("click", getPoint);
    document.querySelector("#frame22_container").addEventListener("click", getPoint);

    document.querySelector("#browndog4_container").addEventListener("click", losePoint);
    document.querySelector("#xoloitzcuincle18_container").addEventListener("click", losePoint);
}

function getPoint() {
    points++;
    console.log(pointscounter);
    document.querySelector("#pointsno11_sprite").textContent = points;
}

function losePoint() {
    points--;
    console.log(pointscounter);
    document.querySelector("#pointsno11_sprite").textContent = points;
}


function livescounter() {
    document.querySelector("#femalebaditem3_container").addEventListener("click", loseLife1);
    document.querySelector("#malebaditem21_container").addEventListener("click", loseLife1);
}

function loseLife1() {
    document.querySelector("#life" + lives + "_sprite").classList.remove("life");
    document.querySelector("#life" + lives + "_sprite").classList.add("lostlife");
    lives--;
    console.log(lives);


    document.querySelector("#happyfl5_container").classList.add("shaking");

    document.querySelector("#happyfl5_container").addEventListener("animationend", restart5);


    document.querySelector("#happymr6_container").classList.add("shaking");

    document.querySelector("#happymr6_container").addEventListener("animationend", restart6);
    
    
    document.querySelector("#happyfl5_sprite").classList.remove("happyf");
    document.querySelector("#happyfl5_sprite").offsetHeight;
    document.querySelector("#happyfl5_sprite").classList.add("surprisedf");
    
    
    document.querySelector("#happymr6_sprite").classList.remove("happym");
     document.querySelector("#happymr6_sprite").offsetHeight;
     document.querySelector("#happymr6_sprite").classList.add("surprisedm");

}

function restart5() {
    console.log("function restart5()");
    document.querySelector("#happyfl5_container").classList.remove("shaking");
    
    document.querySelector("#happyfl5_sprite").classList.remove("surprisedf");
    document.querySelector("#happyfl5_sprite").offsetHeight;
    document.querySelector("#happyfl5_sprite").classList.add("happyf");
    
    document.querySelector("#happymr6_sprite").classList.remove("surprisedm");
    document.querySelector("#happymr6_sprite").offsetHeight;
    document.querySelector("#happymr6_sprite").classList.add("happym");  
}

function restart6() {
    console.log("function restart6()");

    document.querySelector("#happymr6_container").classList.remove("shaking");
}


function restartGame() {
    stopSounds();
    document.querySelector("#instructions").classList.add("hidden");
    document.querySelector("#game_over").classList.add("hidden");
    document.querySelector("#level_complete").classList.add("hidden");
    document.querySelector("#game").classList.remove("hidden");


    points = 0;
    document.querySelector("#pointsno11_sprite").textContent = points;


    lives = 3;

    gameIsPaused = false;
    gameHasEnded = false;
    durationOfGame = 30;
    deciSeconds;

    pointscounter();
    livescounter();

    startGame();
}


function showTime() {
    console.log("function showTime()");
    if (timeLeft > 0) {
        timeLeft--;
        console.log("Time left: " + timeLeft);
        startTimer();
    }
}

function startTimer() {
    console.log("function startTimer()");

    if (gameIsPaused == false) {
        if (timeLeft == 0) {
            if (points >= pointsToWin) {
                levelComplete();
            } else {
                gameOver();
            }
        }
        if (lives == 0) {
            gameOver();
        } else {
            timeTracker = setTimeout(showTime, 1000);
        }
    }
}




/*GAME OVER SCREEN*/
function gameOver() {
    console.log("function gameOver()");

    stopSounds();

    playGameOverMusic();
    gameoverMusic.addEventListener("ended", playGameOverMusic);


    if (gameHasEnded == false) {
        document.querySelector("#yellowpaper1_container").classList.value = "";
        document.querySelector("#yellowpaper1_sprite").classList.value = "";
        document.querySelector("#pandemuerto2_container").classList.value = "";
        document.querySelector("#pandemuerto2_sprite").classList.value = "";
        document.querySelector("#femalebaditem3_container").classList.value = "";
        document.querySelector("#femalebaditem3_sprite").classList.value = "";
        document.querySelector("#browndog4_container").classList.value = "";
        document.querySelector("#browndog4_sprite").classList.value = "";
        document.querySelector("#candle17_container").classList.value = "";
        document.querySelector("#candle17_sprite").classList.value = "";
        document.querySelector("#xoloitzcuincle18_container").classList.value = "";
        document.querySelector("#xoloitzcuincle18_sprite").classList.value = "";
        document.querySelector("#greenpaper19_container").classList.value = "";
        document.querySelector("#greenpaper19_sprite").classList.value = "";
        document.querySelector("#flowervase20_container").classList.value = "";
        document.querySelector("#flowervase20_sprite").classList.value = "";
        document.querySelector("#malebaditem21_container").classList.value = "";
        document.querySelector("#malebaditem21_sprite").classList.value = "";
        document.querySelector("#frame22_container").classList.value = "";
        document.querySelector("#frame22_sprite").classList.value = "";
        document.querySelector("#yellowpaper1_sprite").removeEventListener("click", fadeout1);
        document.querySelector("#pandemuerto2_sprite").removeEventListener("click", fadeout2);
        document.querySelector("#femalebaditem3_container").removeEventListener("click", loseLife1);
        document.querySelector("#femalebaditem3_sprite").removeEventListener("click", fadeout3);
        document.querySelector("#browndog4_sprite").removeEventListener("click", fadeout4);
        document.querySelector("#candle17_sprite").removeEventListener("click", fadeout17);
        document.querySelector("#xoloitzcuincle18_sprite").removeEventListener("click", fadeout18);
        document.querySelector("#greenpaper19_sprite").removeEventListener("click", fadeout19);
        document.querySelector("#flowervase20_sprite").removeEventListener("click", fadeout20);
        document.querySelector("#malebaditem21_container").removeEventListener("click", loseLife1);
        document.querySelector("#malebaditem21_sprite").removeEventListener("click", fadeout21);
        document.querySelector("#frame22_sprite").removeEventListener("click", fadeout22);


        document.querySelector("#game_over").classList.remove("hidden");

        document.querySelector("#tryagain_container").classList.add("blink");

        document.querySelector("#timetop9_container").classList.remove("timerunning");

        document.querySelector("#life1_sprite").classList.value = "";
        document.querySelector("#life1_sprite").offsetHeight;
        document.querySelector("#life1_sprite").classList.add("life");


        document.querySelector("#life2_sprite").classList.value = "";
        document.querySelector("#life2_sprite").offsetHeight;
        document.querySelector("#life2_sprite").classList.add("life");


        document.querySelector("#life3_sprite").classList.value = "";
        document.querySelector("#life3_sprite").offsetHeight;
        document.querySelector("#life3_sprite").classList.add("life");

        document.querySelector("#tryagain_container").addEventListener("click", restartGame);

        document.querySelector("#tryagain_sprite").addEventListener("click", playButtonSound);

        document.querySelector("#homebuttongs_container").addEventListener("click", titleScreen);

        document.querySelector("#homebuttongs_sprite").addEventListener("click", playButtonSound);


        gameHasEnded = true;
    }
}





/*LEVEL COMPLETE SCREEN*/
function levelComplete() {
    console.log("function levelComplete()");

    stopSounds();
    playLevelCompleteMusic();
    levelcompleteMusic.addEventListener("ended", playLevelCompleteMusic);

    if (gameHasEnded == false) {
        document.querySelector("#yellowpaper1_container").classList.value = "";
        document.querySelector("#yellowpaper1_sprite").classList.value = "";
        document.querySelector("#pandemuerto2_container").classList.value = "";
        document.querySelector("#pandemuerto2_sprite").classList.value = "";
        document.querySelector("#femalebaditem3_container").classList.value = "";
        document.querySelector("#femalebaditem3_sprite").classList.value = "";
        document.querySelector("#browndog4_container").classList.value = "";
        document.querySelector("#browndog4_sprite").classList.value = "";
        document.querySelector("#candle17_container").classList.value = "";
        document.querySelector("#candle17_sprite").classList.value = "";
        document.querySelector("#xoloitzcuincle18_container").classList.value = "";
        document.querySelector("#xoloitzcuincle18_sprite").classList.value = "";
        document.querySelector("#greenpaper19_container").classList.value = "";
        document.querySelector("#greenpaper19_sprite").classList.value = "";
        document.querySelector("#flowervase20_container").classList.value = "";
        document.querySelector("#flowervase20_sprite").classList.value = "";
        document.querySelector("#malebaditem21_container").classList.value = "";
        document.querySelector("#malebaditem21_sprite").classList.value = "";
        document.querySelector("#frame22_container").classList.value = "";
        document.querySelector("#frame22_sprite").classList.value = "";
        document.querySelector("#yellowpaper1_sprite").removeEventListener("click", fadeout1);
        document.querySelector("#pandemuerto2_sprite").removeEventListener("click", fadeout2);
        document.querySelector("#femalebaditem3_container").removeEventListener("click", loseLife1);
        document.querySelector("#femalebaditem3_sprite").removeEventListener("click", fadeout3);
        document.querySelector("#browndog4_sprite").removeEventListener("click", fadeout4);
        document.querySelector("#candle17_sprite").removeEventListener("click", fadeout17);
        document.querySelector("#xoloitzcuincle18_sprite").removeEventListener("click", fadeout18);
        document.querySelector("#greenpaper19_sprite").removeEventListener("click", fadeout19);
        document.querySelector("#flowervase20_sprite").removeEventListener("click", fadeout20);
        document.querySelector("#malebaditem21_container").removeEventListener("click", loseLife1);
        document.querySelector("#malebaditem21_sprite").removeEventListener("click", fadeout21);
        document.querySelector("#frame22_sprite").removeEventListener("click", fadeout22);


        document.querySelector("#level_complete").classList.remove("hidden");

        document.querySelector("#timetop9_container").classList.remove("timerunning");


        document.querySelector("#life1_sprite").classList.value = "";
        document.querySelector("#life1_sprite").offsetHeight;
        document.querySelector("#life1_sprite").classList.add("life");


        document.querySelector("#life2_sprite").classList.value = "";
        document.querySelector("#life2_sprite").offsetHeight;
        document.querySelector("#life2_sprite").classList.add("life");


        document.querySelector("#life3_sprite").classList.value = "";
        document.querySelector("#life3_sprite").offsetHeight;
        document.querySelector("#life3_sprite").classList.add("life");


        document.querySelector("#smilingfemale_container").classList.add("bouncing");
        document.querySelector("#smilingmale_container").classList.add("bouncing");
        document.querySelector("#browndogtail-ws_container").classList.add("tail_animation");
        document.querySelector("#xoloitzcuincletail-ws_container").classList.add("tail_animation");
        document.querySelector("#playagain_container").classList.add("blink");

        document.querySelector("#playagain_container").addEventListener("click", restartGame);

        document.querySelector("#playagain_sprite").addEventListener("click", playButtonSound);

        document.querySelector("#homebuttonws_container").addEventListener("click", titleScreen);

        document.querySelector("#homebuttonws_sprite").addEventListener("click", playButtonSound);


        gameHasEnded = true;

    }
}





/*SOUNDS FUNCTIONS*/
function stopSounds() {
    /*TITLE SCREEN*/
    titlescreenMusic.pause();
    titlescreenMusic.currentTime = 0;
    titlescreenMusic.removeEventListener("ended", playTitleScreenMusic);

    /*GAME SCREEN*/
    gameMusic.pause();
    gameMusic.currentTime = 0;
    gameMusic.removeEventListener("ended", playGameMusic);

    /*GAME OVER SCREEN*/
    gameoverMusic.pause();
    gameoverMusic.currentTime = 0;
    gameoverMusic.removeEventListener("ended", playGameOverMusic);

    /*LEVEL COMPLETE SCREEN*/

    levelcompleteMusic.pause();
    levelcompleteMusic.currentTime = 0;
    levelcompleteMusic.removeEventListener("ended", playLevelCompleteMusic);


    /*GOOD ITEM*/
    gooditemSound.pause();
    gooditemSound.currentTime = 0;
    document.querySelector("#yellowpaper1_container").removeEventListener("click", playGoodItemSound);
    document.querySelector("#pandemuerto2_container").removeEventListener("click", playGoodItemSound);
    document.querySelector("#candle17_container").removeEventListener("click", playGoodItemSound);
    document.querySelector("#greenpaper19_container").removeEventListener("click", playGoodItemSound);
    document.querySelector("#flowervase20_container").removeEventListener("click", playGoodItemSound);
    document.querySelector("#frame22_container").removeEventListener("click", playGoodItemSound);


    /*DOG BARK*/
    dogbarkSound.pause();
    dogbarkSound.currentTime = 0;

    document.querySelector("#browndog4_container").removeEventListener("click", playDogBarkSound);
    document.querySelector("#xoloitzcuincle18_container").removeEventListener("click", playDogBarkSound);

    /*LOST LIFE*/
    lostlifeSound.pause();
    lostlifeSound.currentTime = 0;

    document.querySelector("#femalebaditem3_container").removeEventListener("click", playLostLifeSound);
    document.querySelector("#malebaditem21_container").removeEventListener("click", playLostLifeSound);
}

function muteMusic() {
    console.log("function muteMusic()");
    if (gameMusic.muted == false) {
        gameMusic.muted = true;
        gameoverMusic.muted = true;
        levelcompleteMusic.muted = true;
        document.querySelector("#music15_sprite").classList.remove("music");
        document.querySelector("#music15_sprite").offsetHeight;
        document.querySelector("#music15_sprite").classList.add("nomusic");
    } else {
        gameMusic.muted = false;
        gameoverMusic.muted = false;
        levelcompleteMusic.muted = false;
        
        document.querySelector("#music15_sprite").classList.remove("nomusic");
        
        document.querySelector("#music15_sprite").offsetHeight;
        
        document.querySelector("#music15_sprite").classList.add("music");
    }
}

function muteSound() {
    console.log("function muteSound()");
    if (buttonSound.muted == false) {
        buttonSound.muted = true;

        gooditemSound.muted = true;

        lostlifeSound.muted = true;

        dogbarkSound.muted = true;
        
        document.querySelector("#sound16_sprite").classList.remove("sound");
        
        document.querySelector("#sound16_sprite").offsetHeight;
        
        document.querySelector("#sound16_sprite").classList.add("nosound");
        
    } else {
        buttonSound.muted = false;

        gooditemSound.muted = false;

        lostlifeSound.muted = false;

        dogbarkSound.muted = false;
        
        document.querySelector("#sound16_sprite").classList.remove("nosound");
        
        document.querySelector("#sound16_sprite").offsetHeight;
        
        document.querySelector("#sound16_sprite").classList.add("sound");
    }
}

function playTitleScreenMusic() {
    console.log("function    playTitleScreenMusic()");
    titlescreenMusic.play();
}

function playButtonSound() {
    console.log("function playButtonSound()");

    buttonSound.play();
}

function playGameMusic() {
    console.log("function playGameMusic()");

    gameMusic.play();
}

function playGoodItemSound() {
    console.log("function playGoodItemSound()");
    gooditemSound.currentTime = 0;

    gooditemSound.play();
}

function playDogBarkSound() {
    console.log("function playDogBarkSound()");

    dogbarkSound.currentTime = 0;

    dogbarkSound.play();
}

function playLostLifeSound() {
    console.log("function playLostLifeSound()");

    lostlifeSound.currentTime = 0;

    lostlifeSound.play();
}

function playGameOverMusic() {
    console.log("function playGameOverMusic");
    gameoverMusic.play();
}

function playLevelCompleteMusic() {
    console.log("function playLevelCompleteMusic");

    levelcompleteMusic.play();
}
