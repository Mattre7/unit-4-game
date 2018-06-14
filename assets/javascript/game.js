$(document).ready(function() {
    var fedBox = $("#fed_box");
    var andyBox = $("#andy_box");
    var noleBox = $("#nole_box");
    var rafaBox = $("#rafa_box");
    var yourPlayer = $(".your_player")
    var enemySelector = $(".enemy_selector")
    var characterSelector = $(".character_selector")
    var fightSection = $(".fight_section")

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

    fedBox.one("click", function () {
        yourPlayer.append(fedBox);
        enemySelector.append(andyBox, noleBox, rafaBox)
        })
    
    andyBox.one("click", function () {
        yourPlayer.append(andyBox);
        enemySelector.append(fedBox, noleBox, rafaBox)
        })
    
    noleBox.one("click", function () {
        yourPlayer.append(noleBox);
        enemySelector.append(andyBox, fedBox, rafaBox)
        })

    rafaBox.one("click", function () {
        yourPlayer.append(rafaBox);
        enemySelector.append(andyBox, fedBox, noleBox)
        })
    });