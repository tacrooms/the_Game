// Heroes vs. Villains

// game starts with you picking heroes or villains.  once a side is chosen the each caster (player one and computer) is assigned 20 life points.

// if heros hp goes to zero they are knocked down and cannot attack for three turns. after 3 turns their HP is restored 


// you select your 

// class hero {
//     constructor(name, attack, speed, health, heroClass, specialAbility){
//         this.name = name;
//         this.attack = attack;
//         this.speed = speed;
//         this.health = health;
//         this.heroClass = heroClass;
//         this.specialAbility = specialAbility;

//     }
// }

// class demon {
//     constructor(name, attack, speed, health, specialAbility){
//         this.name = name;
//         this.attack = attack;
//         this.speed = speed;
//         this.health = health;
//         this.specialAbility = specialAbility;

//     }
// }

// define all my global variables that will be referenced
//define health variables (has to be different than the two i already used)


//figure out intro to game

const battlePane = document.getElementById('battlePane');
const partySelection = document.getElementById('partySelection');
const actions = document.getElementsByClassName('actions');
const heroActions = document.getElementById('heroActions');
const hero1HP = document.getElementById('hero1HP');
const demonBossHP = document.getElementById('demonBossHP');
let heroAttks = document.getElementById('heroAttks')
let heroHP = 1000;
let demonHP = 2000;
let battleMusic = document.getElementById('music');
let muteButton = document.getElementById('muteButton');
let state = 'on';

function enterRealm(){
    partySelection.innerHTML = "<font size= 5px>IT IS TIME TO DEFEND HUMANITIES SOULS, THE WRETCHED SOUL STEALER HAS RISEN AGAIN!";
    for (let i = 0; i<actions.length; i++){
        actions[i].style.visibility = "visible";
    }
    battleMusic.play();
    //remember to chang music back to .5
    battleMusic.volume = 0; 
    

    // actions[0].style.visibility = 'visible';
    // actions[1].style.visibility = 'visible';
}







function bladeWaltz(){
    //(Math.floor(Math.random()*6)+3)
    let hitChance = Math.round(Math.random()*10);
    if (hitChance <=6){
        // don't know why the damage does under 200 sometimes was getting confused with this
        let dmg = Math.round(200+Math.random()*200)+150;
        demonHP -= dmg;
        if (demonHP<=0){
            demonHP = 0;
        }
        partySelection.innerHTML = '<font size= 18px>Blade Waltz hit for '+ dmg + ' damage!  The Soul Stealer has '+demonHP+" health left!!"
        // the health bar was the hardest.  this math is confusing but basically demonhp starts at 2000 and i divide by 2000. 
        //as demonhp goes down i can multiply it by 280 (the hp bar width) for an accurate percentage (say first attack is 300 it would be 1700/2000)
        let demonHPWidth = (demonHP/2000)*280;
        demonBossHP.style.width = demonHPWidth + 'px';
        }
        else {
            partySelection.innerHTML = "<font size= 18px>Blade Waltz Missed!";
    }
    if (demonHP == 0){
        partySelection.innerHTML += "<br><br><font size= 22px> Soul Stealer has been Defeated!!!<br><button onclick='restartGame()'>Play Again</button>";
        heroAttks.style.visibility = "hidden";
    } else {
        demonAttk()
    }

}

// function bladeWaltz(){
//     //(Math.floor(Math.random()*6)+3)
//     let hitChance = Math.round(Math.random()*10);
//     if (hitChance <=6){
//         // don't know why the damage does under 200 sometimes was getting confused with this
//         let dmg = Math.round(200+Math.random()*200)+150;
//         demonHP -= dmg;
//         if (demonHP<=0){
//             demonHP = 0;
//         }
//         partySelection.innerHTML = '<font size= 18px>Blade Waltz hit for '+ dmg + ' damage!  The Soul Stealer has '+demonHP+" health left!!"
//         // the health bar was the hardest.  this math is confusing but basically demonhp starts at 2000 and i divide by 2000. 
//         //as demonhp goes down i can multiply it by 280 (the hp bar width) for an accurate percentage (say first attack is 300 it would be 1700/2000)
//         let demonHPWidth = (demonHP/2000)*280;
//         demonBossHP.style.width = demonHPWidth + 'px';
//         }
//         else {
//             partySelection.innerHTML = "<font size= 18px>Blade Waltz Missed!";
//     }
//     if (demonHP == 0){
//         partySelection.innerHTML += "<br><br><font size= 22px> Soul Stealer has been Defeated!!!"
//         heroAttks.style.visibility = "hidden"
//     } else {
//         demonAttk()
//     }
// }






//demon attacks, demon will have 3 attacks
function demonAttk(){
    let attk = Math.ceil(Math.random()*3);
    if (attk == 1){
        let hitChance = Math.round(Math.random()*10);
        if (hitChance <=7){
            // don't know why the damage does under 200 sometimes was getting confused with this
            let dmg = Math.round(Math.random()*200)+150;
            heroHP -= dmg;
            if (heroHP<=0){
                heroHP = 0;
            }
            partySelection.innerHTML += '<br><br><font size= 18px><font color= Maroon>You have been hit with Soul Rend for '+ dmg + ' damage!  You have '+heroHP+" health left!!"
            // the health bar was the hardest.  this math is confusing but basically demonhp starts at 2000 and i divide by 2000. 
            //as demonhp goes down i can multiply it by 280 (the hp bar width) for an accurate percentage (say first attack is 300 it would be 1700/2000)
            let heroHPWidth = (heroHP/1000)*280;
            hero1HP.style.width = heroHPWidth + 'px';
            }
            else {
                partySelection.innerHTML = "<br><br><font size= 18px><font color= Maroon>Soul Stealers Attack Barely Missed!";
        }

    } else if (attk == 2){
        let hitChance = Math.round(Math.random()*10);
        if (hitChance <=4){
            // don't know why the damage does under 200 sometimes was getting confused with this
            let dmg = Math.round(200+Math.random()*200)+150;
            heroHP -= dmg;
            if (heroHP<=0){
                heroHP = 0;
            }
            partySelection.innerHTML += '<br><br><font size= 18px><font color= Maroon>You have been hit with Spirit Sear for '+ dmg + ' damage!  You have '+heroHP+" health left!!"
            // the health bar was the hardest.  this math is confusing but basically demonhp starts at 2000 and i divide by 2000. 
            //as demonhp goes down i can multiply it by 280 (the hp bar width) for an accurate percentage (say first attack is 300 it would be 1700/2000)
            let heroHPWidth = (heroHP/1000)*280;
            hero1HP.style.width = heroHPWidth + 'px';
            }
            else {
                partySelection.innerHTML += "<br><br><font size= 18px><font color= Maroon>Soul Sear Barely Missed!";
            }

    } else{
        let hitChance = Math.round(2+Math.random()*10);
        if (hitChance <=3){
            // don't know why the damage does under 200 sometimes was getting confused with this
            let dmg = Math.round(300+Math.random()*300)+250;
            heroHP -= dmg;
            if (heroHP<=0){
                heroHP = 0;
            }
            partySelection.innerHTML += '<br><br><font color= Maroon><font size= 18px>You have been hit the Soul Stealers Ultimate Move, Void Avalanche for '+ dmg + ' damage!  You have '+heroHP+" health left!!"
            // the health bar was the hardest.  this math is confusing but basically demonhp starts at 2000 and i divide by 2000. 
            //as demonhp goes down i can multiply it by 280 (the hp bar width) for an accurate percentage (say first attack is 300 it would be 1700/2000)
            let heroHPWidth = (heroHP/1000)*280;
            hero1HP.style.width = heroHPWidth + 'px';
            }
            else {
                partySelection.innerHTML += "<br><br><font size= 18px><font color= Maroon>Void Avalanche Barely Missed!";
            }
        }
            if (heroHP == 0){
                partySelection.innerHTML += "<br><br><font size= 22px><font color= orange red> You have been Defeated and Your Soul Trapped for Infinity!!!<br><button onclick='restartGame()'>Play Again</button>";
                heroAttks.style.visibility = "hidden"
            }

    
}

function restartGame(){
    heroHP = 1000;
    let heroHPWidth = (heroHP/1000)*280;
    hero1HP.style.width = heroHPWidth + 'px';
    demonHP = 2000;
    let demonHPWidth = (demonHP/2000)*280;
    demonBossHP.style.width = demonHPWidth + 'px';
    heroAttks.style.visibility = "visible";
    enterRealm();
}