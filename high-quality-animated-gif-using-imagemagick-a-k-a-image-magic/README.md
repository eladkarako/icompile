place all png images (32bit, with alpha trans. etc..) in a folder,
add 'convers.exe' path of image magic to the PATH.
(for me thats in C:\\Program Files\\ImageMagick-6.8.8-Q16)

<pre>
convert -background white -alpha remove -layers OptimizePlus -delay 25x100 myImagePrefix-*.png -loop 0 myAnimatedGif.gif
</pre>