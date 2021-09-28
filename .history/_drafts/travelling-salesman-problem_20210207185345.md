---
layout: post
title: Travelling Salesman Problem Part 1
date: 2020-09-03 21:04 +0545
---
### Solving using Permutation
Travelling Salesman Problem is a classic problem in Computer Science. TSP has its application in delivery business, planning and different other areas. 

Travelling salesman problem requires us to find a route or a path with least distance, that covers all the  cities and returns back to the original city.There are many algorithms to solve this problem like Genetics Algorithm, Nearest Neighbour Algorithm, Greedy Heuristic Algorithm, etc. This time I am using permutation to solve this problem. 

The approach here is to try each and every route that is possible. It is an inefficient approach because for **n** number of cities the possible routes will be **n!**.   
<figure>
<img src="/assets/img/cities.gif">
<figcaption>Fig 1. Finding Shortest Path using permutation</figcaption>
</figure>

There are six cities of Nepal plotted in the screen. The program loops through all the permutation and finds the best route with list distance.
#### Algorithm
1. Find all possible routes. For n cities the possible routes is n!
2. Calculate the distance for each route and choose route with the minimum distance.

I used <a href="https://p5js.org/">P5.js</a> to render the point and calculate the distance between points. In the upcoming blog I will use other algorithms to solve the TSP problem. 
```


```
 
