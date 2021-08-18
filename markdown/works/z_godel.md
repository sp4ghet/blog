---
title: "GODEL"
icon: "/img/projects/GODEL/square.png"
---

GODEL(Generative Optimal Design Engine Language) is a hardware design optimization toolkit.

The general idea behind the tooling is that hardware design is a series of tradeoffs. By creating a tool which indicates those tradeoffs to the designer in a simple way, we can create a hardware design toolkit for the consumer to decide which tradeoffs they want to make.

The concept is applied generally, but in this work we implemented a component selection tool for the heating module in a Personal Food Computer.

![](/img/projects/GODEL/frontend.jpg)

The core of the system is a [Multi-Objective Optimization algorithm](https://en.wikipedia.org/wiki/Multi-objective_optimization) which explores the pareto-optimal front of a hardware design model.
A Pareto Front is a line in a multi-dimensional hyperplane which defines the most optimal points for a specific problem.
When the user selects their desired tradeoffs, the algorithm selects the nearest neighbor in the pareto front.

The components were scraped from popular hardware component e-commerce sites like Digikey and Mouser.
The UI is based on a Javascript framework called [reflex](https://github.com/mozilla/reflex). It is "inspired by" [elm](http://elm-lang.org/) which is the language used to code this site.

![](/img/projects/GODEL/architecture.png)
