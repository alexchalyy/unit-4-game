# unit-4-game

# Game description

     1. Integer values for wins and losses are set to 0 and displayed on the screen.

     2. Computer guesses a random number between 19 and 120 and displays it. 

     3. Each of the 4 crystal images on the screen is assigned a random integer between 1-12 (they are not displayed).

     4. Total score integer is set to zero and displayed on screen.

     5. Whenever a user is clicking on a crystal, a random integer associated with that crystal is added to total score and displayed on screen.
        
        *   If total score is less than number from step 2, the program waits for user to click a crystal again.

        *   If score is the same as the number from step 1, the user wins, the win score is appended by 1, displayed on the screen, and another      round of game starts from step 2.

        *   If score is greater than the number from step 2, the user loses, teh loss score is appended by 1, displayed on the screen, and           anohter round of game starts from step 2.

# Game creation process

    Bootstrap, css, and media queries were used to style the page to make it responsive. Javascript and jQueries were used to add functionality to the game.
