/*  This is javascript that plays Crystals game, it utilizes jQueries as well.

    Written by Alex Chalyy on 2/16/2019. */

    /*  This initializes all variables to zero before the game is played and logged.   */

    var wins = 0, losses = 0, random = 0, amethyst = 0, citrine = 0, quartz = 0, shungite = 0, score = 0;

    function new_round()    {

    /*  This function initializes the game for new round, including resetting all variables to proper values. */

        random = Math.floor(Math.random() * 102) + 19; 
        amethyst = Math.floor(Math.random() * 12) + 1;
        citrine = Math.floor(Math.random() * 12) + 1;
        quartz = Math.floor(Math.random() * 12) + 1;
        shungite = Math.floor(Math.random() * 12) + 1;
        score = 0;

        $("#wins").html("Wins: " + wins);
        $("#losses").html("Losses: " + losses);
        $("#random").html("Random number: " + random);
        console.log("Wins: " + wins);
        console.log("Losses: " + losses);
        console.log("Computer generated random number: " + random);
        console.log("Amethyst random number: " + amethyst);
        console.log("Citrine random number: " + citrine);
        console.log("Quartz random number: " + quartz);
        console.log("Shungite random number: " + shungite);
    }

    function round(crystal_score)    {

    /*  This function performs general steps that are necessary to advance in a round. */
        
        score += crystal_score;
        console.log("Score: " + score);
        if (score == random)    {
            console.log("You won!");
            wins++;
            new_round();
        }
        else if (score > random)    {
            console.log("You lost:(");
            losses++;
            new_round();
        }
    }

    console.log("Game variable initialization before the first round.");
    new_round();

    $("#amethyst").click(function()  {

        /*  This function is executed every time one of amethyst crystal icon is clicked. */

        console.log("Amethyst was clicked.");
        round(amethyst);
    });

    $("#shungite").click(function()  {

        /*  This function is executed every time one of shungite crystal icon is clicked. */
    
        console.log("Shungite was clicked.");
        round(shungite);
    });

    $("#quartz").click(function()  {

        /*  This function is executed every time one of quartz crystal icon is clicked. */
    
        console.log("Quartz was clicked.");
        round(quartz);
    });

    $("#citrine").click(function()  {

        /*  This function is executed every time one of quartz crystal icon is clicked. */
    
        console.log("Citrine was clicked.");
        round(citrine);
    });
