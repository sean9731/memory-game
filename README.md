# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Sean iida

Time spent: 3 hours spent in total

Link to project: https://peppered-internal-myrtle.glitch.me

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [ ] Buttons use a pitch (frequency) other than the ones in the tutorial
* [ ] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] added an arcade mode, which is an endless sequence, procedurally generated

## Video Walkthrough

Here's a walkthrough of implemented user stories:

Base game demo:

  <img src="http://g.recordit.co/B7Qdr5mmwm.gif" width =250><br>
  
Arcade mode demo: 

  <img src="http://g.recordit.co/L22Ca5F3ee.gif" width =250><br>


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
  To reference some CCS styling and refresh my memory on js syntax i used W3schools. 
  While the code that was found in the tutorial was familiar to me, i needed to reference for things like the Math library.

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
  A challenge I encountered was when I tried implementing my arcade mode, which switches the hardcded array pattern and generates a random infinite one.
  The problem I had was trying to run the arcade mode by using the same functions used in the regular mode.
  The way I was able to solve it was by creating a pseudocode.
  I had originally tried creating seperate button elements for the arcade mode, but found that it would be way to reptitive.
  I ended up adding an event listener to the arecade mode button, that changes a boolean value arcadeMode to true.
  This then changed some of the logic, using multiple if statements to switch out the pattern for the randomly generated one.
  Although this took a bit of trial and error, I thikn that this method was much more optimized than my first approach.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
  After completing my submission, there were a lot of questions I had about web development, primarily in the job market.
  While I see the label of font-end, back-end, and full stack used frequently, I would like to leanr more about what they each explicitly do.
  I would also like to learn about how front-end and back-end developers collaborate and merge their code to create a complete, cohesive app.
  Some technical questions I have about web development would be ways to implement databases into web apps. 
  Although I have worked with the mern stack in the past, the database implementation was always tricky to me.
  

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
  If I had more time to put some features into the memory game, I would add a leaderboard that could show the top scores of other users who had played it. 
  This would probably require more than just js, and would probably need a backend implementation.
  Another thing that I would have liked to change was the sound of each button press.
  The sine waves were a bit jarring, and using chords instead of notes would make the game more playable.
  I would also definitely change the UI to look more like a game.
  Bootstrap would probably be a good library to use for this game because of their default button colors and responsiveness.
  



## License

    Copyright Sean iida

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
