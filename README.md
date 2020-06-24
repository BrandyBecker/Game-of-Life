# Game-of-Life
[CS Build Week](https://github.com/BrandyBecker/CS-Build-Week-1)

[Deployed Project © Brandy Becker 2020](https://bb-game-of-life.vercel.app/)

<!-- ------------------------------------------------------------------------------------------------------------- -->
![Game of Life](https://i.ibb.co/MCLWm7N/Annotation-2020-06-22-205825.png)
# Conway's Game of Life

The universe of the Game of Life is an infinite two-dimensional orthogonal grid of square `cells`, each of which is in one of two possible states, `alive` or `dead`.

Each `cell` interacts with its `8` neighbours, which are the `cells` that are `horizontally`, `vertically`, or `diagonally` adjacent. At each `generation` (step in time). the following transitions occur:

# Rules of Life

1): Any `alive` cell with `fewer than two alive neighbors` dies, as if caused by under-population.

2): Any `alive` cell with `two or three live neighbors` lives on to the next `generation`.

3): Any `alive` cell with `more than three live neighbors` dies, as if by overcrowding.

4): Any `dead` cell with `exactly three live neighbors` becomes a `alive` cell, as if by reproduction.


<!-- ------------------------------------------------------------------------------------------------------------- -->

# MVP:

[x] grid to display cells

[x] minimum grid size of 25 x 25

[x] cell objects / components that have these props:

--> [x] current state (`dead == black` | `white == alive`)

--> [x] clickable

-------> [x] can be clicked to allow user to setup initial cell configuration

-------> [x] should NOT be clickable when simulation is running

[x] cell objects should have these behaviours:

---> [x] toggle state switch:

-------> [x] switch between `alive` & `dead` either because:

------------> [x] user manually toggled cell before starting simulation

------------> [x] simulation is running and the `Rules of Life` caused the cell to change state

[x] text to display current generation # being displayed:

---> [x] use a timeout function to build the next generation of cells & update the display at the chosen time interval

[x] buttons to start and stop the simulation

[x] buttons to clear the grid

# Custom Features:
Implement at least 3 of the following features:

[ ] Create a few sample cell configurations that users can load and run

[x] Add an option that creates a random cell configuration that users can run

[ ] Add additional cell properties, like color or size, and incorporate them into your visualization

[x] Allow users to specify the speed of the simulation

[x] Provide functionality to manually step through the simulation one generation at a time, as opposed to animating automatically

[ ] Allow users to change the dimension of the grid being displayed

[ ] Given a specific generation, calculate the configuration of cells at that point in time, and jump to that state, bypassing animation (i.e. skip ahead n generations).

[ ] If you have an idea for a custom feature on this list, run it by your TL or instructor

# Rubric:
Your simulation will receive a 2 when it satisfies the following:

[x] Display includes a text area that shows the current generation of cells being displayed

[x] Display includes a grid of cells, at least 25x25, that can be toggled to be alive or dead

[x] Display includes working buttons that start / stop the animation and clear the grid

[x] Algorithm to generate new generations of cells correctly implemented

[x] At least 3 features from Custom Features section successfully implemented

[x] Application includes a section outlining the rules to Conway's "Game of Life"

# Stretch Goals:
[ ] Implement 2+ additional custom features, above

[x] Deploy your app to a hosting service or, for iOS, to TestFlight (or the App Store!). Web devs can see more deployment info here.
( I deployed it to Vercel, Deployment link can be found @ top of README or in Github Website Link -- if that counts? )

[ ] Write a how-to guide or blog post that walks readers through the work you did to implement your project

[ ] Expand your simulation into the third dimension. Google 3D Conways Life. Google for how to do 3D stuff on your platform. Web users might check out 3D-ThreeJS, and iOS might look at SceneKit.

[ ] Explore alternate algorithms for finding the nth generation, such as Hashlife
<!-- ------------------------------------------------------------------------------------------------------------- -->

# Algorithm 

For `each cell` in the `current generation`'s grid:

---> examine state of all `8` neighbors

---> apply `Rules of Life` to determine if this cell will change states (alive / dead)

---> when the main loop completes:

------> swap current and next grids

------> repeat until simulation is stopped

---> uses `double buffering` to update grid with next generation

---> assume all edge cells are permanently dead OR wrap around to far side
<!-- ------------------------------------------------------------------------------------------------------------- -->
