<!--more-->

<blockquote>First for the insults:
  A decent part of the <em>b.Sc (or b.A) degraee</em> is devoted to Mathematics,
  This is why it is striking me surprised when a fellow dev. asks me how to convert a score from 100 -> 5.</blockquote>

For the <strong>two-steps</strong> calculation:
  1.  <code>your_precentage * 5 / 100</code>  or  <code>your_precentage * 0.05</code>
      for example, if your product scored <code>78%</code> it is <code>78 * 0.05 == 3.9</code>
  2.  we <em>5 stars bucket</em> (where <code>1/2 a star</code> is possible too..)
      we need to make our data's "roughness", also known as <em>coarseness</em> or <em>granularity</em> <sup>(you've lerned it in 5th-grade math)</sup>
      or more formally: <em>characterized by a high level of detail in a set of data.</em>
      
      each star has either <em>full or half states</em>, so our coarseness or granularity is <code>1 / 1/2 == 2</code>,
      let's get rid of the high-level details by dumping the number over a round function, essentially:
      <code>round(your_score * 2) / 2</code>
      
      the whole thing:
      <code>round(your_precentage * 0.05 * 2) / 2 == your_5-star-rating_score</code>
      or
      <code>round(your_precentage * 0.1) / 2 == your_5-star-rating_score</code>
      
      for example: <code>78%</code> is
      <code>round(78 * 0.1) / 2 ===== 4</code>
      
      how round works? it convers values below <code>1.5</code> (1.499999, 1.3,..) to <code>1</code> and above <code>1.5</code> to <code>2</code>.
      
      for example (#2)  <code>50%</code> is 
      <code>round(50*0.1)/2 == round(5)/2 == 5/2 == 2.5</code> in 5-star-rating.


Hope it helps.
<sub>
<em>Ps.</em>
<em>Shame on you</em> for not knowing this stuff,
you should go back to school (5th grade)
</sub>