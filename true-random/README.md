<img src="https://icompile.eladkarako.com/_uploads/2010-07-29_175306.jpg" alt="" title="2010-07-29_175306" width="209" height="197" class="alignnone size-full wp-image-115" />
There are two principal methods used to generate random numbers. One measures some physical phenomenon that is expected to be random and then compensates for possible biases in the measurement process. The other uses computational algorithms that produce long sequences of apparently random results, which are in fact completely determined by a shorter initial value, known as a seed or key. The latter type are often called pseudo-random number generators.

Pseudo-random implementations, like LCG (linear congruential generator), usually uses a seed using a couple of runs with <img src="https://icompile.eladkarako.com/_uploads/2010-07-29_174952.jpg" alt="" title="2010-07-29_174952" width="292" height="36" class="alignnone size-full wp-image-114" /> with a slightly different values of the multiplier coefficient <img src="https://icompile.eladkarako.com/_uploads/2010-07-29_180000.jpg" alt="" title="2010-07-29_180000" width="17" height="15" class="alignnone size-full wp-image-116" /> (<a href="http://en.wikipedia.org/wiki/Linear_congruential_generator">more on LCG</a>).

True randomness can achieved from the sound a Zener diode caused by its avalanche breakdown, another way is sampling statics or a "white noise" this can be done using any simple receiver.

<img src="https://icompile.eladkarako.com/_uploads/2010-07-29_180922.jpg" alt="" title="2010-07-29_180922" width="172" height="19" class="alignnone size-full wp-image-117" /> is doing just that, offering a free, online generator.

generate integer using the <a href="http://www.random.org/clients/http/">HTTP service</a>.
Generating 1 random number [1 to 100, base 10] is easy!
http://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new
<a href="http://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new">Watch</a>

The downsize is active connection to the internet and a small delay, even thou the output does not need parsing.

quick&dirty wrapping:
<pre>
Private Function trueRandom(ByVal num As Long, ByVal min As Long, ByVal max As Long) As Long()
    On Error Resume Next
    With Inet1
        .Document = "/integers/?num=" & num & "&min=" & min & "&max=" & max & "&col=1&base=10&format=plain&rnd=new"
        .RemoteHost = "www.random.org"
        .URL = "http://www.random.org/integers/?num=" & num & "&min=" & min & "&max=" & max & "&col=1&base=10&format=plain&rnd=new"
    End With
    Dim s as String
    s=Inet1.OpenURL
    'Here a Small Delay...
    trueRandom=CInt(Trim$(s))
End Function
</pre>
