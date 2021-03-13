---
title: "Discrete Differential Geometry 5"
date: "2021-03-13"
---


# DDG Lecture 5

## Differential Forms in $\mathbb{R}^n$

### Differential k-forms

A vector field is an assignment of vectors to each point in space.

A _differential k-form_ is an assignment of a k-form to each point.
A common abbreviation is to shorten "differential k-form" to just "k-form".

A differential 0-form is a just a scalar field.
A differential 1-form is like a vector field.
(But they are 1-forms at each point, so it is how to take a measurement at each point)

A differential 2-form is an area measurement at each point (x1,x2,x3).

### Pointwise operations on Differential k-forms

$$
(\star \alpha)_p := \star (\alpha_p) \\
(\alpha \wedge \beta)_p := (\alpha_p) \wedge (\beta_p)
$$

Apply operator over each k-form pointwise.

Notation: omit _p.

### Differential k-forms in Coordinates

Basis Vector Fields

![](/img/blog/Clipboard_2021-03-12-21-29-33.png)

The coeffecients of the linear combination of basis fields can vary pointwise.

For differential 1-forms, call the basis 1-forms (_dual bases_) $dx^1, ~ dx^2$.
So $\alpha = \alpha_1 dx^1 + \alpha_2 dx^2$.

$$
dx^i \left( \frac{\partial}{\partial x_j} \right) = \delta_j^i  :=
  \begin{cases}
    1, & \text{if } i = j \\
    0, & \text{otherwise}
  \end{cases}
$$

Ex. Hodge star of differential 1-form.

Consider the differential 1-form:
  $\alpha := (1-x)dx + x dy$
Q: what is the hodge star of $\alpha$?

$$
\begin{aligned}
  \star \alpha &= \star ((1-x)dx) + \star (xdy) \\
  &= (1-x)(\star dx) + x (\star dy) \\
  &= (1-x)dy - x dx
\end{aligned}
$$

Ex. wedge of two 1-forms.

$\alpha := xdx, \quad \beta := (1-x)dx + (1-y)dy$

$$
\begin{aligned}
  \alpha \wedge \beta &= xdx \wedge ((1-x)dx + (1-y)dy) \\
  &= xdx \wedge (1-x)dx + xdx \wedge (1-y)dy \\
  &= x(1-x) (dx \wedge dx) + x(1-y) (dx \wedge dy) \\
  &= (x-xy) (dx \wedge dy)
\end{aligned}
$$

Note that in $\mathbb{R}^2$ all wedges of 1-forms are scalar multiples of $dx \wedge dy$.
The same information is contained in the hodge star.

![](/img/blog/Clipboard_2021-03-12-21-58-13.png)

$\star (\alpha \wedge \beta) = (x-xy)$

Ex. Applying a Differential 1-form to a vector field

$$
\alpha := xdx \\
X := (1-x)\frac{\partial}{\partial x} + (1-y)\frac{\partial}{\partial y}
$$

apply $\alpha$ to $X$.

$$
\begin{aligned}
  \alpha(X) &= (xdx) \left( (1-x)\frac{\partial}{\partial x} + (1-y)\frac{\partial}{\partial y} \right) \\
  &= (x(1-x)) \left( dx \frac{\partial}{\partial x} \right) + (x(1-y)) \left( dx \frac{\partial}{\partial y} \right) \\
  &= x-x^2
\end{aligned}
$$
