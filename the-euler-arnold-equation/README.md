A (smooth) <a href="http://en.wikipedia.org/wiki/Riemannian_manifold">Riemannian  manifold</a> is a smooth manifold <img title="{M}" src="http://l.wordpress.com/latex.php?latex=%7BM%7D&amp;bg=ffffff&amp;fg=000000&amp;s=0" alt="{M}" /> without boundary, equipped with a  Riemannian metric <img title="{{\

<img title="\\displaystyle  \\langle v, w \
<!--more-->
to every pair of tangent vectors <img title="{v, w \\in T_x M}" src="http://l.wordpress.com/latex.php?latex=%7Bv%2C+w+%5Cin+T_x+M%7D&amp;bg=ffffff&amp;fg=000000&amp;s=0" alt="{v, w \\in T_x M}" /> at a  point <img title="{x \\in M}" src="http://l.wordpress.com/latex.php?latex=%7Bx+%5Cin+M%7D&amp;bg=ffffff&amp;fg=000000&amp;s=0" alt="{x \\in M}" />. (We use Roman font  for <img title="{g}" src="http://l.wordpress.com/latex.php?latex=%7Bg%7D&amp;bg=ffffff&amp;fg=000000&amp;s=0" alt="{g}" /> here, as we will need to use <img title="{g}" src="http://l.wordpress.com/latex.php?latex=%7Bg%7D&amp;bg=ffffff&amp;fg=000000&amp;s=0" alt="{g}" /> to denote group elements later in  this post.) This inner product is assumed to symmetric, positive  definite, and smoothly varying in <img title="{x}" src="http://l.wordpress.com/latex.php?latex=%7Bx%7D&amp;bg=ffffff&amp;fg=000000&amp;s=0" alt="{x}" />, and the length is then given in  terms of the inner product by the formula
<img title="\\displaystyle  |v|_{{\

In coordinates (and also using <a href="http://en.wikipedia.org/wiki/Abstract_index_notation">abstract  index notation</a>), the metric <img title="{{\

<img title="\\displaystyle  \\langle v, w \

One can also view the Riemannian metric as providing a (self-adjoint)  identification between the <a href="http://en.wikipedia.org/wiki/Tangent_bundle">tangent bundle</a> <img title="{TM}" src="http://l.wordpress.com/latex.php?latex=%7BTM%7D&amp;bg=ffffff&amp;fg=000000&amp;s=0" alt="{TM}" /> of the manifold and the <a href="http://en.wikipedia.org/wiki/Cotangent_bundle">cotangent bundle</a> <img title="{T^* M}" src="http://l.wordpress.com/latex.php?latex=%7BT%5E%2A+M%7D&amp;bg=ffffff&amp;fg=000000&amp;s=0" alt="{T^* M}" />; indeed, every tangent  vector <img title="{v \\in T_x M}" src="http://l.wordpress.com/latex.php?latex=%7Bv+%5Cin+T_x+M%7D&amp;bg=ffffff&amp;fg=000000&amp;s=0" alt="{v \\in T_x M}" /> is then  identified with the cotangent vector <img title="{\\iota_{TM  \

<img title="\\displaystyle \\iota_{TM \

In coordinates, <img title="{\\iota_{TM \

A fundamental dynamical system on the tangent bundle (or equivalently,  the cotangent bundle, using the above identification) of a Riemannian  manifold is that of <a href="http://en.wikipedia.org/wiki/Geodesic_flow">geodesic  flow</a>. Recall that geodesics are smooth curves <img title="{\\gamma: [a,b] \

<img title="\\displaystyle  |\\gamma| := \\int_a^b  |\\gamma'(t)|_{{\

There is some degeneracy in this definition, because one can  reparameterise the curve <img title="{\\gamma}" src="http://l.wordpress.com/latex.php?latex=%7B%5Cgamma%7D&amp;bg=ffffff&amp;fg=000000&amp;s=0" alt="{\\gamma}" /> without affecting the  length. In order to fix this degeneracy (and also because the square of  the speed is a more tractable quantity analytically than the speed  itself), it is better if one replaces the length with the <em>energy</em>

<img title="\\displaystyle   E(\\gamma) := \\frac{1}{2} \\int_a^b |\\gamma'(t)|_{{\

Minimising the energy of a parameterised curve <img title="{\\gamma}" src="http://l.wordpress.com/latex.php?latex=%7B%5Cgamma%7D&amp;bg=ffffff&amp;fg=000000&amp;s=0" alt="{\\gamma}" /> turns out to be the same  as minimising the length, together with an additional requirement that  the speed <img title="{|\\gamma'(t)|_{{\

One can also view geodesic flows as a dynamical system on the tangent  bundle (with the state at any time <img title="{t}" src="http://l.wordpress.com/latex.php?latex=%7Bt%7D&amp;bg=ffffff&amp;fg=000000&amp;s=0" alt="{t}" /> given by the position <img title="{\\gamma(t) \\in M}" src="http://l.wordpress.com/latex.php?latex=%7B%5Cgamma%28t%29+%5Cin+M%7D&amp;bg=ffffff&amp;fg=000000&amp;s=0" alt="{\\gamma(t) \\in M}" /> and  the velocity <img title="{\\gamma'(t) \\in  T_{\\gamma(t)} M}" src="http://l.wordpress.com/latex.php?latex=%7B%5Cgamma%27%28t%29+%5Cin+T_%7B%5Cgamma%28t%29%7D+M%7D&amp;bg=ffffff&amp;fg=000000&amp;s=0" alt="{\\gamma'(t) \\in T_{\\gamma(t)} M}" />) or on the cotangent bundle (with the  state then given by the position <img title="{\\gamma(t) \\in M}" src="http://l.wordpress.com/latex.php?latex=%7B%5Cgamma%28t%29+%5Cin+M%7D&amp;bg=ffffff&amp;fg=000000&amp;s=0" alt="{\\gamma(t) \\in M}" /> and  the <em>momentum</em> <img title="{\\iota_{TM \

<img title="\\displaystyle   H( x, p ) := \\frac{1}{2} \\langle p, p \

where <img title="{\\langle ,\

<img title="\\displaystyle  \\langle  p_1, p_2 \

In coordinates, geodesic flow is given by Hamilton