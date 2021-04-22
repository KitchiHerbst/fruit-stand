# fruit-stand
javascript/railsapi project Donovan, Jose, Triston

main screen 
		sign up or login(CREATE)
		box for past smoothie maker leader board 
		play button(above play button pick a basket and also the game instructions”catch as many fruit as you can in allowed time while avoiding bugs”) 
After play is ‘clicked’
The game will be a timed game. 
Fruit will be descending from top of screen 
User will have to catch fruit in a basket(TIMED)
	(some kind of point system for fruit(+1) v bugs(-1))
The more fruit you catch the bigger smoothie you can make
The more bugs you catch the more unsanitary your smoothie will be
Count up what’s in their basket ( and show on screen above the image of a smoothie)
	3 different images of a smoothie depending on bug level
User can UPDATE their name
Controller actions 
*index for users
*edit users
*show for users
*index for fruit
*index for bugs
*index for ingredients 
JSON responses
		


# Models

1. users
    has_many baskets

2. baskets
    belongs_to user
    has_many ingredients
    has_many bugs through ingredients
    has_many fruits through ingredients

3. ingredients
    belongs_to basket
    belongs_to fruit
    belongs_to bug

4. bugs
    has_many ingredients
    has_many baskets through ingredients

5. fruits
    has_many ingredients
    has_many baskets through ingredients


## MVP Deliverables
<!-- 1. user can login or create account  -->
<!-- 5. user can edit name -->
<!-- 2. fruit falls  -->
<!-- 3. basket can catch fruit/bugs -->
4. calculate high score from basket
6. Doesnt redirect or refresh page 
7. organize the layout of the main screen 
    * left box with login or sign up that leads to the user credentials(show username, have an edit name button with form, show high score) 
    * middle box with gameplay instructions(how to) 
    * right box with high scores(top ten or so?)
8. style
    * put the title at top of screen above all three boxes/cards
    * make each card/box unique(background color for each box)
    * maybe make the timer bigger with different text color and font
    * style play game button 
    * give page a background


<!-- 7. timed rounds -->

### Stretch Goals
1. can select a different basket skin
2. high score list updates with everyoens scores
3. achievments(5 smoothies, clean smoothie)
4. different smoothie image for different score rating

#### Controller Actions
1. index for users
2. edit users
3. show for users
4. index for fruit
5. index for bugs
6. index for ingredients 

##### JSON responses
1. user database