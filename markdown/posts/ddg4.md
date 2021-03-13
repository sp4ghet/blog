---
title: "Discrete Differential Geometry 4"
date: "2021-03-03"
---

# DDG Week 4
## k-forms

Week 3: Exterior algebra (k-vectors)
Week 4: Exterior calculus (k-forms)

_Exterior Calculus_, "how do lengths, areas, volumes, change over curved surfaces?

Measurement devices have the same dimensionality as the thing we're measuring.

Study exterior calculus in flat spaces ($\mathbb{R}^n$)
May seem redundant, but will help when space starts curving.

### Vectors & Covectors

_covectors_ do measurements
_vectors_ get measured

Wedging covectors get k-forms, which are duals to k-vectors.

Similar to row/column vectors.
A row vector is a linear map which maps the column vector to a real value.

let $\alpha$ be a unit covector, $u$ be a vector of any magnitude.
$\alpha(u)$ tells us how long $u$ is in the direction $\alpha$

__Defn__:
> Let $V$ be a ceal vector space. Its _dual space_ $V^*$ is the collection of all linear functions $\alpha : V \mapsto \mathbb{R}$ together with the operations of addition.
$$
(\alpha + \beta)(u) := \alpha(u) + \beta(u)
$$
and scalar multiplication
$$
(c \alpha)(u) := c (\alpha(u))
$$
$\forall \alpha,\beta \in V^*, u \in V, c \in \mathbb{R}$

__Defn__:
> An element of a dual vector space is called a _dual vector_ or _covector_

(unrelated to the Hodge Star/Dual)

e.g $V = C^0$ and $\delta(f) := f(0) \in V^*$ (Dirac delta)

Let $[x,y,z] [r,g,b]$ be column vectors, then the transpose converts between row/column.
Likewise, let $u,v \in V$ be vectors, then $u^\flat, v^\flat \in V^*$.
let $\alpha, \beta \in V^*$ be covectors, then $\alpha^\sharp, \beta^\sharp \in V$.

let the inner product be $a^T M b$ instead of the normal inner product.
$u^\flat(v) = u^T M v$ and $\alpha(\beta^\sharp) = \alpha M^{-1} \beta^T$
Equivalently, $u^\flat(\cdot) = <u, \cdot>$ and $\alpha(\cdot) = <\alpha^\sharp, \cdot>$


k-forms will be multilinear maps from a k-vector.

### Measurement of 2-vectors

The "shadow" of a parallelogram onto another parallelogram.
Given $(u,v)$, pick orthonormal basis for plane $\alpha, \beta$.

1. project onto plane
  - $u \mapsto (\alpha(u), \beta(u))$
  - $v \mapsto (\alpha(v), \beta(v))$
1. calculate area via cross product
  - $\alpha(u)\beta(v) - \alpha(v)\beta(u)$

Can apply same expression when $\alpha, \beta$ not orthonormal.

$(\alpha \wedge \beta)(u,v) := \alpha(u)\beta(v) - \alpha(v)\beta(u)$

This is the definiton of the application of a 2-form to two vectors.
Note: result scales with "area" of $\alpha \wedge \beta$

Note that the application of the 2-form is antisymettric

$(\alpha \wedge \beta)(u,v) = - (\alpha \wedge \beta)(v,u)$

Geometrically, this shows that the orientation of the face is different.

The arguments to the wedge are also antisymmetric.

$(\alpha \wedge \beta)(u,v) = -(\beta \wedge \alpha)(u,v)$

this has the same meaning, as the 2-form's orientation is flipped.

### Measurement of 3-vectors

in $\mathbb{R}^3$, all 3-vectors have the same "direction". Can only measure magnitude.

Let $u,v,w$ be the edges of a parallelopiped. Let $(\alpha, \beta, \gamma)$ be any orthonormal basis.

1. project $u,v,w$ onto the basis
  - $u \mapsto (\alpha(u), \beta(u), \gamma(u))$
  - $v \mapsto (\alpha(v), \beta(v), \gamma(v))$
  - $w \mapsto (\alpha(w), \beta(w), \gamma(w))$
1. apply standard formula for volume (det)
$$
\alpha(u)\beta(v)\gamma(w) + \alpha(v)\beta(w)\gamma(u) + \alpha(w)\beta(u)\gamma(v) \\
- \alpha(u)\beta(w)\gamma(v) - \alpha(w)\beta(v)\gamma(u) - \alpha(v)\beta(u)\gamma(w)
$$


Generally, a k-form is a _fully antisymmetric_, _multilinear_ measurement of a vector.

Typically, think of a k-form as a map from a k-vector to a scalar.
$$
\alpha : V \times \cdots V \rightarrow \mathbb{R}
$$

$$
(\alpha_1 \wedge \cdots \wedge \alpha_k)(u_1, \dots, u_k) := \det((\alpha_1(u_1), ..., \alpha_k(u_k)), \dots, (\alpha_k(u_1), ..., \alpha_k(u_k)))
$$

For historical reasons, we do not write

$$
(\alpha \wedge \beta) (u \wedge v)
$$

and instead use the notation we have been using above.

note: a 0-form is a scalar

### k-forms in coordinates

For vectors in a basis $e_1, \dots, e_n$, write

$$
v = v^1 e_1 + \cdots + v^n e_n
$$

The scalar values $v^i$ are the _coordinates_ of v.

For covectors in a so-called _dual basis_ $e^1, \dots, e^n$, write

$$
\alpha = \alpha_1 e^1 + \cdots + \alpha_n e^n
$$

Where

$$
e^i(e_j) = \delta_{ij}
$$

where $\delta_{ij}$ is the Kronecker delta.

ex.

$ v = 2 e_1 + 2 e_2 $
$ \alpha = -2 e^1 + 3 e^2 $

$$
\alpha(v) = (-2e^1 + 3e^2)(2e_1 + 2e_2) \\
 \quad = -2e^1(2e_1 + 2e_2) + 3e^2(2e_1 + 2e_2) \\
 \quad = -4 e^1(e_1) - 4e^1(e_2) + 6e^2(e_1) + 6e^2(e_2) \\
 \quad = -4 + 6 = 2
$$

ex. 2-form

$$
u = 2e_1 + 2e_2 \quad \alpha = e^1 + 3e^2 \\
v = -2e_1 + 2e_2 \quad \beta = 2e^1 + e^2
$$

Then,
$$
(\alpha \wedge \beta)(u,v) = \alpha(u)\beta(v) - \alpha(v)\beta(u) \\
\alpha(u) = 2 + 6 = 8\\
\alpha(v) = -2 + 6 = 4\\
\beta(u) = 4 + 2 = 6\\
\beta(v) = -4 + 2 = -2
$$
Thus,
$$
(\alpha \wedge \beta)(u,v) = 8\cdot(-2) - (4)\cdot6 = -40
$$

Recall $\sharp \text{ and } \flat$
If $\alpha^\sharp = u ~\land~ u^\flat = \alpha$ then

$\alpha = a_1 e^1 + \cdots + a_ne^n \stackrel{\sharp}{\implies} u = u^1e_1 + \cdots + u^ne_n$
$\alpha = a_1 e^1 + \cdots + a_ne^n \stackrel{\flat}{\impliedby} u = u^1e_1 + \cdots + u^ne_n$

This is sometimes called the _musical isomorphism_
