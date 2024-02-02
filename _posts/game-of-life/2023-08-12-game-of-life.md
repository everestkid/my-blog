---
layout: post
title: Game of life
date: 2022-08-12 14:04 +0545
---
In 1970 John Conway developed a cellular automation known as Game of Life. The program is a 2D grid of square cells which can be in either "alive" or "dead" state. Each cell interacts with its 8 neighbours, which are horizontally, vertically and diagonally adjacent. 


The rules are simple:

1. Each cell with one or no neighbors dies, as if by solitude
2. Each cell with four or more neighbors dies, as if by overpopulation
3. Each cell with two or three neighbors survives

Complex patterns can be observed from this simple rule and can be considered a mathematical beauty. 

Here is a simple implementation using p5.js.  
<sup>*Left click to populate a cell  / Right click to unpopulate a cell</sup>  
{% include game-of-life.html %}

##### Resources

- [The Coding Train](https://thecodingtrain.com/challenges/85-the-game-of-life)
- [Conway's Game of Life - Wikipedia](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)
- [Game of life with p5.js library](https://github.com/knightfury16/Game-of-life-with-p5.js-library)


