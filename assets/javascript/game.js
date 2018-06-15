$(document).ready(function() {
    var fedBox = $("#fed_box");
    var andyBox = $("#andy_box");
    var noleBox = $("#nole_box");
    var rafaBox = $("#rafa_box");
    var yourPlayer = $(".your_player")
    var enemySelector = $(".enemy_selector")
    var characterSelector = $(".character_selector")
    var fightSection = $(".fight_section")
    var serveButton = $(".serve_btn")

    let characters = {
        fedBox: {
            name: 'federer',
            health: 120,
            attack: 8,
            counterAttack: 15
        }, 
        andyBox: {
            name: 'murray',
            health: 100,
            attack: 14,
            counterAttack: 5
        }, 
        noleBox: {
            name: 'djokovic',
            health: 150,
            attack: 8,
            counterAttack: 20
        }, 
        rafaBox: {
            name: 'nadal',
            health: 180,
            attack: 7,
            counterAttack: 20
        }
    }

    fedBox.one("click", function (event) {
        yourPlayer.append(fedBox);
        enemySelector.append(andyBox, noleBox, rafaBox);
        })
    
    andyBox.one("click", function (event) {
        yourPlayer.append(andyBox);
        enemySelector.append(fedBox, noleBox, rafaBox)
        })
    
    noleBox.one("click", function (event) {
        yourPlayer.append(noleBox);
        enemySelector.append(andyBox, fedBox, rafaBox)
        })

    rafaBox.one("click", function (event) {
        yourPlayer.append(rafaBox);
        enemySelector.append(andyBox, fedBox, noleBox)
        })

    serveButton.on("click", function () {
        
        })
    });




    //psuedocode:
    //change/fix initial click function to choose one of the several characters and "set" that one to be the player
    //set a second click function to choose an enemy and set them to be the opponent
    //allow this to run again after defeating the first opponent
    //create a function based around the serve button
    //function should run object one's health vs the others attack/counterattacks, maybe use "this." to write that function
    //for the reset section should keep track of player health ie if the player wins or loses the reset button should become visible through the proper css properties
