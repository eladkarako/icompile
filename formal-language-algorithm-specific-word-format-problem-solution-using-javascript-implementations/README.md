<!--more-->

var letters = 'abcdefghijklmnopqrstuvwxyz';

/*
  problem definition:
    given a word W, 
     |W|=L,
      W = w1w2w3...wL
     note that for each n,m,  n !== m  (you can also assume n<m, and wn !== wm, and in ASCII ordering- wn < wm)
      
             * * * * * * * * * * * * * * * * * * * (plain explain)
             \\[{{w}_{1}}{{w}_{2}}{{w}_{3}}...{{w}_{n}}...{{w}_{m}}...{{w}_{L}}\\]
               the length of W is L
               W looks like an ascending-order of letters, sequential in the A-Z order (inheritored from ASCII definition), 
                 for example W=fghij, at this case L=5 (and w1=f, w2=h,...w5=j)
             * * * * * * * * * * * * * * * * * * *
    
    we define a new way of representing W called RANGE
    W ~== w1-wL
    
    
             * * * * * * * * * * * * * * * * * * * (plain explain)
               we can write down a word as a range, meaning first letter (hyphen) last letter
                 for example f-j is "range format" for fghij "full format".
             * * * * * * * * * * * * * * * * * * *
             
             
    find the most runtime-efficient (not necessarily a memory-efficient) algorithm,
    at order of O(n),
    so, if given a range w1-wL, the algorithm will generate the full representation of W
    
    
             * * * * * * * * * * * * * * * * * * * (plain explain)
               meaning if you get "range format" input of f-j,
               you should generate "full format" output of fghij,
               but there is a catch, you should not use a loop to add "+1" to the charecter, and see if it is the result,
                 in other words looping, then checking is what we called an "unknown factor" which generally is a O(n) factor of runtime,
                   we need "to know" before, how much we should be getting ahead from that letter,
                   remember that the 
    
      

*/


distance = {
a: {
     a: 0
    ,b: 1
    ,c: 2
    ,d: 3
    ,e: 4
    ,f: 5
    ,g: 6
    ,h: 7
    ,i: 8
    ,j: 9
    ,k: 10
    ,l: 11
    ,m: 12
    ,n: 13
    ,o: 14
    ,p: 15
    ,q: 16
    ,r: 17
    ,s: 18
    ,t: 19
    ,u: 20
    ,v: 21
    ,w: 22
    ,x: 23
    ,y: 24
    ,z: 25
  }
b: 
c: 
d: 
e: 
f: 
g: 
h: 
i: 
j: 
k: 
l: 
m: 
n: 
o: 
p: 
q: 
r: 
s: 
t: 
u: 
v: 
w: 
x: 
y: 
z:

a: 
b: 
c: 
d: 
e: 
f: 
g: 
h: 
i: 
j: 
k: 
l: 
m: 
n: 
o: 
p: 
q: 
r: 
s: 
t: 
u: 
v: 
w: 
x: 
y: 
z

actually since this question only treat "from me to the end" distance,
we can save memory and only store distances from the same letter to 'z',

so while a:{a:0, b:1, .... },
b is actually b:{b:0,c:1,....}

but this gives me the idea for a new question..

now range can be change to go backward too:
here are few examples for the newly "range format", using multiple hyphens that might "change the direction" of the letters ordering

a-f is still abcdef

a-d-f is "still" abcdef

(so a-f ~== a-d-f)

here is the innovation:

c-a is cba

c-a-c is cbabc (notice "downward" and then "upward" with only ONE a in the middle)

a-a is a

b-a-b is bab

any extra hyphens means nothing (a---b ~== a-b ~== ab)



at this case we will need a "full distances map" carrying the "negative distance" too

so while "a" looks the same "b" will have a with -1 distance...

we need the "self location distance map" 
a:1,
b:2,
c:3,....

and the "from me distance" map:

a: { a:0, b:1,..... },
b: { a:-1,b:0,..... },
c: { a:-2,b:-1,c:0,...},
....



to do

- the algorithm actually cuts from the string abcd...z the letter, to the distance needed (you can cut backwards too)

- given (not need to prove) that (char code of (letter code)) + 1 ~== (char code of (letter code +1))
... at least conceptually.