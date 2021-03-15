---
title: "Discrete Differential Geometry Assignment 0"
date: "2021-03-14"
---

# DDG Week2 Writing Assignment

## 2.1

Show that $V - E + F = 1$ for any polygonal disk.

For a simple n-sided polygon with n vertices, n edges, and 1 face, the equation above holds.
When conncting another n-sided polygon to form a disk, the polygon can connect to the existing disk by merging $m$ edges.
This will generate $n-m$ edges, $n-(m+1)$ vertices, and 1 new face.

$$
V' = V + n - m + 1 \\
E' = E + n - m \\
F' = F + 1 \\
V' - E' + F' = V - E + F + (n-(m+1)) - (n-m) + 1 = V - E + F = 1
$$

The last equality stems from our inductive assumption.

### 2.2

In a platonic solid, there are $F$ m, n-gons meeting at $V$ vertices.

$(F/m) - (nF/2) + F = 2$

### 2.8

Cl(S)
![](/img/blog/Clipboard_2021-02-18-04-22-39.png)

St(S)
![](/img/blog/Clipboard_2021-02-18-04-27-48.png)

Lk(S)
![](/img/blog/Clipboard_2021-02-18-04-34-43.png)

### 2.9

![](/img/blog/Clipboard_2021-02-18-04-37-57.png)

### 2.10
![](/img/blog/Clipboard_2021-02-18-04-42-26.png)


### 2.11

```
A0 = [
  [1,1,0,0,0],
  [1,0,1,0,0],
  [1,0,0,1,0],
  [1,0,0,0,1],
  [0,1,0,0,1],
  [0,1,1,0,0],
  [0,0,1,1,0],
  [0,0,0,1,1]
]
```

```
A1 = [
  [1,0,0,1,1,0,0,0],
  [1,1,0,0,0,1,0,0],
  [0,1,1,0,0,0,1,0],
  [0,0,1,1,0,0,0,1]
]
```


## Coding

Code is somewhere, I haven't decided where to put it.
The screenshots below should verify that the c++ code is working to solve the exercises.

All tests green:
![11 tests passed](/img/blog/ddg_test.png)

Star
![star](/img/blog/ddg_star.png)


Link
![Link](/img/blog/ddg_link.png)


Closure
![closure](/img/blog/ddg_closure.png)
