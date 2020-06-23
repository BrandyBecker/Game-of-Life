# Game-of-Life
[CS Build Week](https://github.com/BrandyBecker/CS-Build-Week-1)

[Deployed Project © Brandy Becker 2020](#)

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
