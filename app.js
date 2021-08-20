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


//figure out intro to game
const battlePane = document.getElementById('battlePane');
const partySelection = document.getElementById('partySelection');
const actions = document.getElementsByClassName('actions');
const heroActions = document.getElementById('heroActions');
const hero1HP = document.getElementById('hero1HP');
const demonBossHP = document.getElementById('demonBoss')

function enterRealm(){
    partySelection.innerHTML = "IT IS TIME TO DEFEND HUMANITIES SOULS, THE WRETCHED SOUL STEALER HAS RISEN AGAIN!";
    for (let i = 0; i<actions.length; i++){
        actions[i].style.visibility = "visible";
    }
     

    // actions[0].style.visibility = 'visible';
    // actions[1].style.visibility = 'visible';


}




function bladeWaltz(){
    (Math.floor(Math.random()*6)+3)
    let hitChance = Math.round(Math.random()*10);
    if (hitChance <=7){
        let dmg = Math.round(math.random()*10)
    }

}