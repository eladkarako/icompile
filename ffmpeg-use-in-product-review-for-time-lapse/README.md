<blockquote>
I've bought 3 clocks from eBay seller (good4deal999) that offered a "Travel Quartz" quality clocks, 

When two of the 3 started showing wrong hour I've decided to record them all together for as long as my phone's camera will allow (two hours with the lowest pixel settings)

They are all the SAME initial state (the one on the left is just at an angle to the camera)

In-fact the one on the right even got the first battery, so it should, be ahead in few seconds but it is delayed for -5 minutes every ~hour.
The one in the middle is just F*CKED up entirely. the one on the left, as the ONLY one actually working :..(

- - - - - -
Took it with my Samsung phone on tripod.
Original file: <code>20160912_003810.mp4</code>
Recorded video was two hours and 18 minutes (<code>2:18:23</code>) and about 3 Gigabytes (<code>3.22GB</code>)
Resolution is <code>VGA 640x480</code>, which is quite low but in close-up.
In order to rotate it (filmed on the side), fix it (double frames due to Samsung's camera bug), remove background sound of me (kind'a) snoring (it was just before bed), make it ready for web-streaming  better and speed it up x5 times more fast (which saves me uploading 3Giga, plus it helps identify the problem better 
I've used the following FFMPEG command line:

<pre>ffmpeg -y -hide_banner -i 20160912_003810.mp4 -an -vf "transpose=2,mpdecimate,setpts=N/FRAME_
RATE/TB,setpts=0.2*PTS" -preset veryslow -tune zerolatency -pix_fmt yuv420p -movflags "+faststart" -crf 23 "output.mp4"</pre>
</blockquote>

[embed]https://www.youtube.com/watch?v=ED2D1KuYjsc[/embed]

Full FFMPEG Output:
<!--more-->


<pre>
Input #0, mov,mp4,m4a,3gp,3g2,mj2, from '20160912_003810.mp4':
  Metadata:
    major_brand     : mp42
    minor_version   : 0
    compatible_brands: isommp42
    creation_time   : 2016-09-11 23:56:34
  Duration: 02:18:23.02, start: 0.000000, bitrate: 3338 kb/s
    Stream #0:0(eng): Video: h264 (Baseline) (avc1 / 0x31637661), yuv420p, 640x480, 3078 kb/s, 30 fps, 30 tbr, 90k
tbn, 180k tbc (default)
    Metadata:
      rotate          : 90
      creation_time   : 2016-09-11 23:56:34
      handler_name    : VideoHandle
    Side data:
      displaymatrix: rotation of -90.00 degrees
    Stream #0:1(eng): Audio: aac (LC) (mp4a / 0x6134706D), 48000 Hz, stereo, fltp, 256 kb/s (default)
    Metadata:
      creation_time   : 2016-09-11 23:56:34
      handler_name    : SoundHandle
[libx264 @ 00000000024ca160] using cpu capabilities: MMX2 SSE2Fast SSSE3 SSE4.2 AVX
[libx264 @ 00000000024ca160] profile High, level 3.2
[libx264 @ 00000000024ca160] 264 - core 148 r2694 3b70645 - H.264/MPEG-4 AVC codec - Copyleft 2003-2016 - http://ww
w.videolan.org/x264.html - options: cabac=1 ref=16 deblock=1:0:0 analyse=0x3:0x133 me=umh subme=10 psy=1 psy_rd=1.0
0:0.00 mixed_ref=1 me_range=24 chroma_me=1 trellis=2 8x8dct=1 cqm=0 deadzone=21,11 fast_pskip=1 chroma_qp_offset=-2
 threads=4 lookahead_threads=4 sliced_threads=1 slices=4 nr=0 decimate=1 interlaced=0 bluray_compat=0 constrained_i
ntra=0 bframes=0 weightp=2 keyint=250 keyint_min=25 scenecut=40 intra_refresh=0 rc=crf mbtree=0 crf=23.0 qcomp=0.60
 qpmin=0 qpmax=69 qpstep=4 ip_ratio=1.40 aq=1:1.00
[mp4 @ 00000000024c9220] Using AVStream.codec to pass codec parameters to muxers is deprecated, use AVStream.codecp
ar instead.
Output #0, mp4, to 'output.mp4':
  Metadata:
    major_brand     : mp42
    minor_version   : 0
    compatible_brands: isommp42
    encoder         : Lavf57.40.101
    Stream #0:0(eng): Video: h264 (libx264) ([33][0][0][0] / 0x0021), yuv420p, 640x480, q=-1--1, 30 fps, 15360 tbn,
 30 tbc (default)
    Metadata:
      handler_name    : VideoHandle
      creation_time   : 2016-09-11 23:56:34
      encoder         : Lavc57.46.100 libx264
    Side data:
      cpb: bitrate max/min/avg: 0/0/0 buffer size: 0 vbv_delay: -1
Stream mapping:
  Stream #0:0 -> #0:0 (h264 (native) -> h264 (libx264))
Press [q] to stop, [?] for help
Past duration 0.799995 too large
frame=  356 fps=3.0 q=27.0 size=    1865kB time=00:00:11.83 bitrate=1290.9kbits/s dup=0 drop=1410 speed=0.0999x
frame=  358 fps=3.0 q=26.0 size=    1874kB time=00:00:11.90 bitrate=1290.2kbits/s dup=0 drop=1418 speed=0.0998x
frame=  360 fps=3.0 q=26.0 size=    1883kB time=00:00:11.96 bitrate=1289.2kbits/s dup=0 drop=1426 speed=0.0995x
frame=  361 fps=3.0 q=26.0 size=    1888kB time=00:00:12.00 bitrate=1289.1kbits/s dup=0 drop=1430 speed=0.0993x
frame=  362 fps=3.0 q=27.0 size=    1894kB time=00:00:12.03 bitrate=1289.4kbits/s dup=0 drop=1434 speed=0.0991x
frame=  363 fps=3.0 q=27.0 size=    1900kB time=00:00:12.06 bitrate=1289.6kbits/s dup=0 drop=1438 speed=0.0988x
frame=  364 fps=3.0 q=27.0 size=    1904kB time=00:00:12.10 bitrate=1288.7kbits/s dup=0 drop=1442 speed=0.0985x
frame=  365 fps=3.0 q=27.0 size=    1907kB time=00:00:12.13 bitrate=1287.5kbits/s dup=0 drop=1446 speed=0.0982x
frame=  365 fps=2.9 q=27.0 size=    1907kB time=00:00:12.13 bitrate=1287.5kbits/s dup=0 drop=1449 speed=0.0978x
frame=  366 fps=2.9 q=26.0 size=    1910kB time=00:00:12.16 bitrate=1285.8kbits/s dup=0 drop=1450 speed=0.0977x
frame=  366 fps=2.9 q=26.0 size=    1910kB time=00:00:12.16 bitrate=1285.8kbits/s dup=0 drop=1453 speed=0.0973x
frame=  368 fps=2.9 q=27.0 size=    1918kB time=00:00:12.23 bitrate=1284.2kbits/s dup=0 drop=1458 speed=0.0972x
frame=  369 fps=2.9 q=27.0 size=    1923kB time=00:00:12.26 bitrate=1284.0kbits/s dup=0 drop=1462 speed=0.0971x
frame=  372 fps=2.9 q=26.0 size=    1934kB time=00:00:12.36 bitrate=1281.0kbits/s dup=0 drop=1474 speed=0.0969x
frame=  374 fps=2.9 q=25.0 size=    1940kB time=00:00:12.43 bitrate=1278.0kbits/s dup=0 drop=1484 speed=0.0971x
frame=  377 fps=2.9 q=25.0 size=    1949kB time=00:00:12.53 bitrate=1273.9kbits/s dup=0 drop=1494 speed=0.0973x
frame=  379 fps=2.9 q=27.0 size=    1960kB time=00:00:12.60 bitrate=1274.0kbits/s dup=0 drop=1502 speed=0.0972x
frame=  380 fps=2.9 q=27.0 size=    1966kB time=00:00:12.63 bitrate=1274.6kbits/s dup=0 drop=1506 speed=0.0971x
frame=  382 fps=2.9 q=27.0 size=    1977kB time=00:00:12.70 bitrate=1275.5kbits/s dup=0 drop=1514 speed=0.0972x
frame=  382 fps=2.9 q=27.0 size=    1977kB time=00:00:12.70 bitrate=1275.5kbits/s dup=0 drop=1514 speed=0.0967x
frame=  383 fps=2.9 q=28.0 size=    1984kB time=00:00:12.73 bitrate=1276.6kbits/s dup=0 drop=1518 speed=0.0965x
frame=  384 fps=2.9 q=28.0 size=    1992kB time=00:00:12.76 bitrate=1278.3kbits/s dup=0 drop=1522 speed=0.0963x
frame=  385 fps=2.9 q=27.0 size=    1999kB time=00:00:12.80 bitrate=1279.3kbits/s dup=0 drop=1526 speed=0.0961x
frame=  391 fps=2.9 q=25.0 size=    2023kB time=00:00:13.00 bitrate=1275.1kbits/s dup=0 drop=1550 speed=0.0961x
frame=  393 fps=2.9 q=26.0 size=    2033kB time=00:00:13.06 bitrate=1274.3kbits/s dup=0 drop=1558 speed=0.0961x
frame=  397 fps=2.9 q=27.0 size=    2056kB time=00:00:13.20 bitrate=1275.9kbits/s dup=0 drop=1574 speed=0.0959x
frame=  398 fps=2.9 q=27.0 size=    2062kB time=00:00:13.23 bitrate=1276.4kbits/s dup=0 drop=1578 speed=0.0957x
frame=  399 fps=2.9 q=27.0 size=    2067kB time=00:00:13.26 bitrate=1276.6kbits/s dup=0 drop=1582 speed=0.0955x
frame=  400 fps=2.9 q=27.0 size=    2073kB time=00:00:13.30 bitrate=1276.9kbits/s dup=0 drop=1586 speed=0.0954x
frame=  402 fps=2.9 q=27.0 size=    2081kB time=00:00:13.36 bitrate=1275.6kbits/s dup=0 drop=1594 speed=0.0953x
frame=  404 fps=2.9 q=27.0 size=    2093kB time=00:00:13.43 bitrate=1276.1kbits/s dup=0 drop=1602 speed=0.0952x
frame=  406 fps=2.9 q=26.0 size=    2100kB time=00:00:13.50 bitrate=1274.1kbits/s dup=0 drop=1610 speed=0.0952x
frame=  408 fps=2.9 q=24.0 size=    2120kB time=00:00:13.56 bitrate=1279.9kbits/s dup=0 drop=1618 speed=0.0953x
frame=  410 fps=2.9 q=27.0 size=    2132kB time=00:00:13.63 bitrate=1281.1kbits/s dup=0 drop=1629 speed=0.0955x
frame=  412 fps=2.9 q=26.0 size=    2141kB time=00:00:13.70 bitrate=1279.9kbits/s dup=0 drop=1634 speed=0.0956x
frame=  414 fps=2.9 q=27.0 size=    2150kB time=00:00:13.76 bitrate=1279.5kbits/s dup=0 drop=1642 speed=0.0957x
frame=  417 fps=2.9 q=26.0 size=    2162kB time=00:00:13.86 bitrate=1277.3kbits/s dup=0 drop=1654 speed=0.0959x
frame=  420 fps=2.9 q=25.0 size=    2172kB time=00:00:13.96 bitrate=1274.0kbits/s dup=0 drop=1666 speed=0.0962x
frame=  423 fps=2.9 q=25.0 size=    2180kB time=00:00:14.06 bitrate=1269.6kbits/s dup=0 drop=1678 speed=0.0965x
frame=  425 fps=2.9 q=26.0 size=    2188kB time=00:00:14.13 bitrate=1268.0kbits/s dup=0 drop=1686 speed=0.0965x
frame=  427 fps=2.9 q=27.0 size=    2200kB time=00:00:14.20 bitrate=1269.1kbits/s dup=0 drop=1694 speed=0.0964x
frame=  429 fps=2.9 q=26.0 size=    2209kB time=00:00:14.26 bitrate=1268.7kbits/s dup=0 drop=1702 speed=0.0964x
frame=  431 fps=2.9 q=26.0 size=    2220kB time=00:00:14.33 bitrate=1269.1kbits/s dup=0 drop=1710 speed=0.0963x
frame=  433 fps=2.9 q=27.0 size=    2233kB time=00:00:14.40 bitrate=1270.2kbits/s dup=0 drop=1718 speed=0.0961x
frame=  434 fps=2.9 q=27.0 size=    2239kB time=00:00:14.43 bitrate=1271.0kbits/s dup=0 drop=1722 speed=0.0959x
frame=  436 fps=2.9 q=27.0 size=    2249kB time=00:00:14.50 bitrate=1270.8kbits/s dup=0 drop=1730 speed=0.0958x
frame=  437 fps=2.9 q=27.0 size=    2255kB time=00:00:14.53 bitrate=1270.8kbits/s dup=0 drop=1734 speed=0.0957x
frame=  438 fps=2.9 q=26.0 size=    2258kB time=00:00:14.56 bitrate=1270.1kbits/s dup=0 drop=1740 speed=0.0956x
frame=  440 fps=2.9 q=26.0 size=    2266kB time=00:00:14.63 bitrate=1268.3kbits/s dup=0 drop=1746 speed=0.0955x
frame=  442 fps=2.9 q=27.0 size=    2277kB time=00:00:14.70 bitrate=1268.8kbits/s dup=0 drop=1754 speed=0.0954x
frame=  443 fps=2.9 q=27.0 size=    2282kB time=00:00:14.73 bitrate=1268.7kbits/s dup=0 drop=1759 speed=0.0953x
frame=  445 fps=2.9 q=26.0 size=    2290kB time=00:00:14.80 bitrate=1267.6kbits/s dup=0 drop=1766 speed=0.0952x
frame=  447 fps=2.9 q=26.0 size=    2299kB time=00:00:14.86 bitrate=1266.8kbits/s dup=0 drop=1774 speed=0.0951x
frame=  449 fps=2.9 q=25.0 size=    2305kB time=00:00:14.93 bitrate=1264.4kbits/s dup=0 drop=1782 speed=0.0952x
frame=  450 fps=2.9 q=26.0 size=    2309kB time=00:00:14.96 bitrate=1264.1kbits/s dup=0 drop=1786 speed=0.0951x
frame=  452 fps=2.9 q=26.0 size=    2320kB time=00:00:15.03 bitrate=1264.4kbits/s dup=0 drop=1794 speed=0.0949x
frame=  453 fps=2.8 q=27.0 size=    2326kB time=00:00:15.06 bitrate=1264.9kbits/s dup=0 drop=1798 speed=0.0947x
frame=  455 fps=2.8 q=26.0 size=    2336kB time=00:00:15.13 bitrate=1264.6kbits/s dup=0 drop=1806 speed=0.0946x
frame=  456 fps=2.8 q=26.0 size=    2341kB time=00:00:15.16 bitrate=1264.4kbits/s dup=0 drop=1810 speed=0.0945x
frame=  458 fps=2.8 q=26.0 size=    2350kB time=00:00:15.23 bitrate=1263.7kbits/s dup=0 drop=1818 speed=0.0945x
frame=  460 fps=2.8 q=26.0 size=    2359kB time=00:00:15.30 bitrate=1262.8kbits/s dup=0 drop=1826 speed=0.0946x
frame=  462 fps=2.8 q=25.0 size=    2365kB time=00:00:15.36 bitrate=1260.8kbits/s dup=0 drop=1834 speed=0.0947x
frame=  464 fps=2.8 q=26.0 size=    2374kB time=00:00:15.43 bitrate=1259.9kbits/s dup=0 drop=1842 speed=0.0947x
frame=  465 fps=2.8 q=27.0 size=    2381kB time=00:00:15.46 bitrate=1261.4kbits/s dup=0 drop=1846 speed=0.0946x
frame=  467 fps=2.8 q=27.0 size=    2393kB time=00:00:15.53 bitrate=1262.0kbits/s dup=0 drop=1854 speed=0.0947x
frame=  467 fps=2.8 q=27.0 size=    2393kB time=00:00:15.53 bitrate=1262.0kbits/s dup=0 drop=1854 speed=0.0943x
frame=  468 fps=2.8 q=27.0 size=    2398kB time=00:00:15.56 bitrate=1261.9kbits/s dup=0 drop=1858 speed=0.0942x
frame=  470 fps=2.8 q=26.0 size=    2406kB time=00:00:15.63 bitrate=1260.6kbits/s dup=0 drop=1866 speed=0.0942x
frame=  472 fps=2.8 q=26.0 size=    2415kB time=00:00:15.70 bitrate=1260.2kbits/s dup=0 drop=1874 speed=0.0941x
frame=  474 fps=2.8 q=26.0 size=    2424kB time=00:00:15.76 bitrate=1259.3kbits/s dup=0 drop=1882 speed=0.0941x
frame=  477 fps=2.8 q=26.0 size=    2439kB time=00:00:15.86 bitrate=1259.1kbits/s dup=0 drop=1897 speed=0.0939x
frame=  479 fps=2.8 q=26.0 size=    2446kB time=00:00:15.93 bitrate=1257.6kbits/s dup=0 drop=1902 speed=0.0939x
frame=  480 fps=2.8 q=25.0 size=    2449kB time=00:00:15.96 bitrate=1256.5kbits/s dup=0 drop=1908 speed=0.0938x
frame=  482 fps=2.8 q=26.0 size=    2457kB time=00:00:16.03 bitrate=1255.4kbits/s dup=0 drop=1914 speed=0.0938x
frame=  483 fps=2.8 q=26.0 size=    2463kB time=00:00:16.06 bitrate=1256.0kbits/s dup=0 drop=1918 speed=0.0938x
frame=  484 fps=2.8 q=26.0 size=    2469kB time=00:00:16.10 bitrate=1256.1kbits/s dup=0 drop=1923 speed=0.0937x
frame=  486 fps=2.8 q=26.0 size=    2478kB time=00:00:16.16 bitrate=1255.7kbits/s dup=0 drop=1930 speed=0.0936x
frame=  488 fps=2.8 q=26.0 size=    2488kB time=00:00:16.23 bitrate=1255.7kbits/s dup=0 drop=1938 speed=0.0935x
frame=  490 fps=2.8 q=27.0 size=    2500kB time=00:00:16.30 bitrate=1256.4kbits/s dup=0 drop=1946 speed=0.0934x
frame=  492 fps=2.8 q=26.0 size=    2511kB time=00:00:16.36 bitrate=1256.8kbits/s dup=0 drop=1954 speed=0.0933x
frame=  494 fps=2.8 q=26.0 size=    2522kB time=00:00:16.43 bitrate=1257.3kbits/s dup=0 drop=1962 speed=0.0932x
frame=  496 fps=2.8 q=26.0 size=    2532kB time=00:00:16.50 bitrate=1256.9kbits/s dup=0 drop=1970 speed=0.0933x
frame=  498 fps=2.8 q=26.0 size=    2540kB time=00:00:16.56 bitrate=1256.2kbits/s dup=0 drop=1978 speed=0.0933x
frame=  500 fps=2.8 q=26.0 size=    2549kB time=00:00:16.63 bitrate=1255.5kbits/s dup=0 drop=1986 speed=0.0933x
frame=  502 fps=2.8 q=26.0 size=    2559kB time=00:00:16.70 bitrate=1255.4kbits/s dup=0 drop=1994 speed=0.0933x
frame=  504 fps=2.8 q=27.0 size=    2571kB time=00:00:16.76 bitrate=1256.0kbits/s dup=0 drop=2002 speed=0.0932x
frame=  506 fps=2.8 q=26.0 size=    2580kB time=00:00:16.83 bitrate=1255.7kbits/s dup=0 drop=2010 speed=0.0931x
frame=  522 fps=2.8 q=26.0 size=    2647kB time=00:00:17.36 bitrate=1248.8kbits/s dup=0 drop=2074 speed=0.0929x
frame=  524 fps=2.8 q=26.0 size=    2656kB time=00:00:17.43 bitrate=1248.2kbits/s dup=0 drop=2082 speed=0.0929x
frame=  526 fps=2.8 q=26.0 size=    2664kB time=00:00:17.50 bitrate=1247.1kbits/s dup=0 drop=2090 speed=0.0929x
frame=  528 fps=2.8 q=26.0 size=    2673kB time=00:00:17.56 bitrate=1246.6kbits/s dup=0 drop=2098 speed=0.0928x
frame=  529 fps=2.8 q=27.0 size=    2680kB time=00:00:17.60 bitrate=1247.2kbits/s dup=0 drop=2102 speed=0.0928x
frame=  531 fps=2.8 q=27.0 size=    2690kB time=00:00:17.66 bitrate=1247.5kbits/s dup=0 drop=2110 speed=0.0927x
frame=  533 fps=2.8 q=26.0 size=    2700kB time=00:00:17.73 bitrate=1247.1kbits/s dup=0 drop=2118 speed=0.0927x
frame=  535 fps=2.8 q=26.0 size=    2706kB time=00:00:17.80 bitrate=1245.4kbits/s dup=0 drop=2126 speed=0.0927x
frame=  537 fps=2.8 q=26.0 size=    2715kB time=00:00:17.86 bitrate=1244.7kbits/s dup=0 drop=2134 speed=0.0926x
frame=  538 fps=2.8 q=27.0 size=    2721kB time=00:00:17.90 bitrate=1245.1kbits/s dup=0 drop=2138 speed=0.0925x
frame=  539 fps=2.8 q=27.0 size=    2726kB time=00:00:17.93 bitrate=1245.4kbits/s dup=0 drop=2144 speed=0.0924x
frame=  540 fps=2.8 q=27.0 size=    2732kB time=00:00:17.96 bitrate=1245.7kbits/s dup=0 drop=2147 speed=0.0924x
frame=  542 fps=2.8 q=26.0 size=    2740kB time=00:00:18.03 bitrate=1244.8kbits/s dup=0 drop=2154 speed=0.0924x
frame=  544 fps=2.8 q=26.0 size=    2748kB time=00:00:18.10 bitrate=1243.8kbits/s dup=0 drop=2162 speed=0.0924x
frame=  546 fps=2.8 q=23.0 size=    2763kB time=00:00:18.16 bitrate=1245.8kbits/s dup=0 drop=2170 speed=0.0925x
frame=  549 fps=2.8 q=27.0 size=    2783kB time=00:00:18.26 bitrate=1248.1kbits/s dup=0 drop=2182 speed=0.0927x
frame=  554 fps=2.8 q=26.0 size=    2810kB time=00:00:18.43 bitrate=1248.6kbits/s dup=0 drop=2203 speed=0.0931x
frame=  556 fps=2.8 q=26.0 size=    2819kB time=00:00:18.50 bitrate=1248.4kbits/s dup=0 drop=2210 speed=0.0931x
frame=  558 fps=2.8 q=26.0 size=    2827kB time=00:00:18.56 bitrate=1247.1kbits/s dup=0 drop=2219 speed=0.0932x
frame=  560 fps=2.8 q=26.0 size=    2837kB time=00:00:18.63 bitrate=1247.4kbits/s dup=0 drop=2226 speed=0.0932x
frame=  561 fps=2.8 q=27.0 size=    2845kB time=00:00:18.66 bitrate=1248.4kbits/s dup=0 drop=2230 speed=0.0931x
frame=  563 fps=2.8 q=27.0 size=    2862kB time=00:00:18.73 bitrate=1251.4kbits/s dup=0 drop=2238 speed=0.0931x
frame=  565 fps=2.8 q=27.0 size=    2878kB time=00:00:18.80 bitrate=1254.0kbits/s dup=0 drop=2246 speed=0.0932x
frame=  567 fps=2.8 q=27.0 size=    2889kB time=00:00:18.86 bitrate=1254.6kbits/s dup=0 drop=2254 speed=0.0931x
frame=  575 fps=2.8 q=26.0 size=    2931kB time=00:00:19.13 bitrate=1255.1kbits/s dup=0 drop=2286 speed=0.0929x
frame=  577 fps=2.8 q=26.0 size=    2939kB time=00:00:19.20 bitrate=1253.9kbits/s dup=0 drop=2294 speed=0.0929x
frame=  579 fps=2.8 q=26.0 size=    2946kB time=00:00:19.26 bitrate=1252.5kbits/s dup=0 drop=2302 speed=0.0929x
frame=  580 fps=2.8 q=26.0 size=    2952kB time=00:00:19.30 bitrate=1253.1kbits/s dup=0 drop=2306 speed=0.0927x
frame=  586 fps=2.8 q=23.0 size=    2991kB time=00:00:19.50 bitrate=1256.6kbits/s dup=0 drop=2330 speed=0.0932x
frame=  588 fps=2.8 q=27.0 size=    3007kB time=00:00:19.56 bitrate=1258.8kbits/s dup=0 drop=2338 speed=0.0933x
frame=  590 fps=2.8 q=27.0 size=    3017kB time=00:00:19.63 bitrate=1258.9kbits/s dup=0 drop=2346 speed=0.0933x
frame=  592 fps=2.8 q=27.0 size=    3032kB time=00:00:19.70 bitrate=1261.0kbits/s dup=0 drop=2354 speed=0.0933x
frame=  594 fps=2.8 q=26.0 size=    3042kB time=00:00:19.76 bitrate=1260.6kbits/s dup=0 drop=2362 speed=0.0933x
frame=  596 fps=2.8 q=26.0 size=    3050kB time=00:00:19.83 bitrate=1259.9kbits/s dup=0 drop=2370 speed=0.0933x
frame=  597 fps=2.8 q=26.0 size=    3055kB time=00:00:19.86 bitrate=1259.9kbits/s dup=0 drop=2374 speed=0.0932x
frame=  598 fps=2.8 q=26.0 size=    3061kB time=00:00:19.90 bitrate=1260.0kbits/s dup=0 drop=2378 speed=0.0931x
frame=  604 fps=2.8 q=25.0 size=    3090kB time=00:00:20.10 bitrate=1259.3kbits/s dup=0 drop=2402 speed=0.0936x
frame=  606 fps=2.8 q=25.0 size=    3099kB time=00:00:20.16 bitrate=1258.7kbits/s dup=0 drop=2410 speed=0.0936x
frame=  613 fps=2.8 q=27.0 size=    3143kB time=00:00:20.40 bitrate=1262.1kbits/s dup=0 drop=2438 speed=0.0941x
frame=  615 fps=2.8 q=26.0 size=    3153kB time=00:00:20.46 bitrate=1262.1kbits/s dup=0 drop=2446 speed=0.0942x
frame=  617 fps=2.8 q=26.0 size=    3163kB time=00:00:20.53 bitrate=1261.8kbits/s dup=0 drop=2454 speed=0.0942x
frame=  619 fps=2.8 q=26.0 size=    3171kB time=00:00:20.60 bitrate=1261.1kbits/s dup=0 drop=2462 speed=0.0942x
frame=  621 fps=2.8 q=27.0 size=    3181kB time=00:00:20.66 bitrate=1260.7kbits/s dup=0 drop=2470 speed=0.0941x
frame=  623 fps=2.8 q=26.0 size=    3190kB time=00:00:20.73 bitrate=1260.4kbits/s dup=0 drop=2478 speed=0.0941x
frame=  625 fps=2.8 q=26.0 size=    3198kB time=00:00:20.80 bitrate=1259.4kbits/s dup=0 drop=2486 speed=0.0941x
frame=  627 fps=2.8 q=26.0 size=    3208kB time=00:00:20.86 bitrate=1259.6kbits/s dup=0 drop=2494 speed=0.0941x
frame=  632 fps=2.8 q=28.0 size=    3247kB time=00:00:21.03 bitrate=1264.4kbits/s dup=0 drop=2514 speed=0.0946x
frame=  639 fps=2.9 q=26.0 size=    3273kB time=00:00:21.26 bitrate=1260.9kbits/s dup=0 drop=2543 speed=0.0952x
frame=  642 fps=2.9 q=26.0 size=    3285kB time=00:00:21.36 bitrate=1259.6kbits/s dup=0 drop=2554 speed=0.0953x
frame=  645 fps=2.9 q=26.0 size=    3295kB time=00:00:21.46 bitrate=1257.3kbits/s dup=0 drop=2566 speed=0.0955x
frame=  647 fps=2.9 q=26.0 size=    3301kB time=00:00:21.53 bitrate=1255.8kbits/s dup=0 drop=2574 speed=0.0955x
frame=  649 fps=2.9 q=26.0 size=    3306kB time=00:00:21.60 bitrate=1253.9kbits/s dup=0 drop=2582 speed=0.0956x
frame=  651 fps=2.9 q=26.0 size=    3312kB time=00:00:21.66 bitrate=1252.4kbits/s dup=0 drop=2590 speed=0.0956x
frame=  653 fps=2.9 q=26.0 size=    3319kB time=00:00:21.73 bitrate=1250.9kbits/s dup=0 drop=2598 speed=0.0956x
frame=  655 fps=2.9 q=26.0 size=    3328kB time=00:00:21.80 bitrate=1250.4kbits/s dup=0 drop=2606 speed=0.0956x
frame=  657 fps=2.9 q=26.0 size=    3335kB time=00:00:21.86 bitrate=1249.5kbits/s dup=0 drop=2614 speed=0.0956x
frame=  659 fps=2.9 q=26.0 size=    3343kB time=00:00:21.93 bitrate=1248.5kbits/s dup=0 drop=2622 speed=0.0957x
frame=  661 fps=2.9 q=26.0 size=    3352kB time=00:00:22.00 bitrate=1248.0kbits/s dup=0 drop=2630 speed=0.0957x
frame=  663 fps=2.9 q=26.0 size=    3359kB time=00:00:22.06 bitrate=1246.8kbits/s dup=0 drop=2638 speed=0.0957x
frame=  665 fps=2.9 q=26.0 size=    3367kB time=00:00:22.13 bitrate=1246.1kbits/s dup=0 drop=2646 speed=0.0957x
frame=  667 fps=2.9 q=26.0 size=    3374kB time=00:00:22.20 bitrate=1245.2kbits/s dup=0 drop=2654 speed=0.0957x
frame=  669 fps=2.9 q=26.0 size=    3382kB time=00:00:22.26 bitrate=1244.1kbits/s dup=0 drop=2662 speed=0.0956x
frame=  671 fps=2.9 q=26.0 size=    3388kB time=00:00:22.33 bitrate=1242.8kbits/s dup=0 drop=2670 speed=0.0956x
frame=  673 fps=2.9 q=26.0 size=    3394kB time=00:00:22.40 bitrate=1241.2kbits/s dup=0 drop=2678 speed=0.0956x
frame=  675 fps=2.9 q=26.0 size=    3400kB time=00:00:22.46 bitrate=1239.6kbits/s dup=0 drop=2686 speed=0.0956x
frame=  677 fps=2.9 q=26.0 size=    3407kB time=00:00:22.53 bitrate=1238.7kbits/s dup=0 drop=2694 speed=0.0956x
frame=  679 fps=2.9 q=26.0 size=    3414kB time=00:00:22.60 bitrate=1237.7kbits/s dup=0 drop=2702 speed=0.0956x
frame=  681 fps=2.9 q=26.0 size=    3422kB time=00:00:22.66 bitrate=1236.7kbits/s dup=0 drop=2710 speed=0.0957x
frame=  683 fps=2.9 q=26.0 size=    3428kB time=00:00:22.73 bitrate=1235.3kbits/s dup=0 drop=2718 speed=0.0957x
frame=  685 fps=2.9 q=26.0 size=    3434kB time=00:00:22.80 bitrate=1233.8kbits/s dup=0 drop=2726 speed=0.0958x
frame=  687 fps=2.9 q=26.0 size=    3441kB time=00:00:22.86 bitrate=1232.6kbits/s dup=0 drop=2734 speed=0.0958x
frame=  689 fps=2.9 q=26.0 size=    3446kB time=00:00:22.93 bitrate=1231.0kbits/s dup=0 drop=2742 speed=0.0958x
frame=  691 fps=2.9 q=26.0 size=    3451kB time=00:00:23.00 bitrate=1229.2kbits/s dup=0 drop=2750 speed=0.0958x
frame=  693 fps=2.9 q=25.0 size=    3455kB time=00:00:23.06 bitrate=1227.1kbits/s dup=0 drop=2758 speed=0.0959x
frame=  699 fps=2.9 q=26.0 size=    3469kB time=00:00:23.26 bitrate=1221.2kbits/s dup=0 drop=2782 speed=0.0962x
frame=  702 fps=2.9 q=26.0 size=    3475kB time=00:00:23.36 bitrate=1218.4kbits/s dup=0 drop=2794 speed=0.0963x
frame=  704 fps=2.9 q=26.0 size=    3480kB time=00:00:23.43 bitrate=1216.7kbits/s dup=0 drop=2802 speed=0.0964x
frame=  706 fps=2.9 q=26.0 size=    3485kB time=00:00:23.50 bitrate=1214.8kbits/s dup=0 drop=2812 speed=0.0964x
frame=  708 fps=2.9 q=26.0 size=    3491kB time=00:00:23.56 bitrate=1213.6kbits/s dup=0 drop=2818 speed=0.0965x
frame=  710 fps=2.9 q=26.0 size=    3496kB time=00:00:23.63 bitrate=1211.8kbits/s dup=0 drop=2826 speed=0.0965x
frame=  712 fps=2.9 q=26.0 size=    3501kB time=00:00:23.70 bitrate=1210.2kbits/s dup=0 drop=2834 speed=0.0966x
frame=  714 fps=2.9 q=25.0 size=    3506kB time=00:00:23.76 bitrate=1208.3kbits/s dup=0 drop=2842 speed=0.0967x
frame=  716 fps=2.9 q=25.0 size=    3510kB time=00:00:23.83 bitrate=1206.4kbits/s dup=0 drop=2853 speed=0.0967x
frame=  719 fps=2.9 q=25.0 size=    3516kB time=00:00:23.93 bitrate=1203.4kbits/s dup=0 drop=2862 speed=0.0969x
frame=  722 fps=2.9 q=25.0 size=    3522kB time=00:00:24.03 bitrate=1200.6kbits/s dup=0 drop=2874 speed=0.0971x
frame=  724 fps=2.9 q=25.0 size=    3526kB time=00:00:24.10 bitrate=1198.6kbits/s dup=0 drop=2883 speed=0.0972x
frame=  727 fps=2.9 q=25.0 size=    3532kB time=00:00:24.20 bitrate=1195.7kbits/s dup=0 drop=2894 speed=0.0974x
frame=  729 fps=2.9 q=25.0 size=    3536kB time=00:00:24.26 bitrate=1193.6kbits/s dup=0 drop=2902 speed=0.0974x
frame=  731 fps=2.9 q=25.0 size=    3539kB time=00:00:24.33 bitrate=1191.5kbits/s dup=0 drop=2913 speed=0.0975x
frame=  733 fps=2.9 q=25.0 size=    3544kB time=00:00:24.40 bitrate=1190.0kbits/s dup=0 drop=2918 speed=0.0975x
frame=  735 fps=2.9 q=25.0 size=    3549kB time=00:00:24.46 bitrate=1188.2kbits/s dup=0 drop=2926 speed=0.0976x
frame=  737 fps=2.9 q=26.0 size=    3553kB time=00:00:24.53 bitrate=1186.5kbits/s dup=0 drop=2934 speed=0.0976x
frame=  740 fps=2.9 q=26.0 size=    3569kB time=00:00:24.63 bitrate=1186.8kbits/s dup=0 drop=2946 speed=0.0978x
frame=  742 fps=2.9 q=25.0 size=    3579kB time=00:00:24.70 bitrate=1186.9kbits/s dup=0 drop=2954 speed=0.0979x
frame=  744 fps=2.9 q=25.0 size=    3586kB time=00:00:24.76 bitrate=1186.0kbits/s dup=0 drop=2962 speed=0.0979x
frame=  747 fps=2.9 q=25.0 size=    3595kB time=00:00:24.86 bitrate=1184.2kbits/s dup=0 drop=2974 speed=0.0981x
frame=  749 fps=2.9 q=25.0 size=    3601kB time=00:00:24.93 bitrate=1183.0kbits/s dup=0 drop=2982 speed=0.0982x
frame=  751 fps=3.0 q=25.0 size=    3607kB time=00:00:25.00 bitrate=1181.8kbits/s dup=0 drop=2990 speed=0.0982x
frame=  753 fps=3.0 q=25.0 size=    3612kB time=00:00:25.06 bitrate=1180.6kbits/s dup=0 drop=2998 speed=0.0982x
frame=  755 fps=3.0 q=25.0 size=    3618kB time=00:00:25.13 bitrate=1179.2kbits/s dup=0 drop=3006 speed=0.0983x
frame=  757 fps=3.0 q=25.0 size=    3623kB time=00:00:25.20 bitrate=1177.7kbits/s dup=0 drop=3014 speed=0.0983x
frame=  759 fps=3.0 q=25.0 size=    3628kB time=00:00:25.26 bitrate=1176.1kbits/s dup=0 drop=3022 speed=0.0983x
frame=  760 fps=3.0 q=25.0 size=    3630kB time=00:00:25.30 bitrate=1175.3kbits/s dup=0 drop=3028 speed=0.0982x
frame=  762 fps=3.0 q=25.0 size=    3634kB time=00:00:25.36 bitrate=1173.6kbits/s dup=0 drop=3034 speed=0.0982x
frame=  763 fps=2.9 q=25.0 size=    3636kB time=00:00:25.40 bitrate=1172.7kbits/s dup=0 drop=3038 speed=0.0982x
frame=  764 fps=2.9 q=25.0 size=    3638kB time=00:00:25.43 bitrate=1171.8kbits/s dup=0 drop=3044 speed=0.0981x
frame=  766 fps=2.9 q=25.0 size=    3642kB time=00:00:25.50 bitrate=1169.9kbits/s dup=0 drop=3050 speed=0.0982x
frame=  767 fps=2.9 q=25.0 size=    3644kB time=00:00:25.53 bitrate=1169.0kbits/s dup=0 drop=3054 speed=0.0981x
frame=  775 fps=2.9 q=25.0 size=    3659kB time=00:00:25.80 bitrate=1161.7kbits/s dup=0 drop=3086 speed=0.0981x
frame=  778 fps=2.9 q=25.0 size=    3664kB time=00:00:25.90 bitrate=1158.9kbits/s dup=0 drop=3098 speed=0.0981x
frame=  780 fps=2.9 q=25.0 size=    3668kB time=00:00:25.96 bitrate=1157.1kbits/s dup=0 drop=3106 speed=0.0982x
frame=  782 fps=2.9 q=25.0 size=    3671kB time=00:00:26.03 bitrate=1155.2kbits/s dup=0 drop=3114 speed=0.0982x
frame=  784 fps=3.0 q=25.0 size=    3675kB time=00:00:26.10 bitrate=1153.4kbits/s dup=0 drop=3122 speed=0.0982x
frame=  785 fps=2.9 q=25.0 size=    3677kB time=00:00:26.13 bitrate=1152.5kbits/s dup=0 drop=3128 speed=0.0982x
frame=  787 fps=2.9 q=25.0 size=    3681kB time=00:00:26.20 bitrate=1150.9kbits/s dup=0 drop=3134 speed=0.0982x
frame=  788 fps=2.9 q=25.0 size=    3683kB time=00:00:26.23 bitrate=1150.1kbits/s dup=0 drop=3139 speed=0.0981x
frame=  790 fps=2.9 q=25.0 size=    3687kB time=00:00:26.30 bitrate=1148.4kbits/s dup=0 drop=3146 speed=0.0982x
frame=  791 fps=2.9 q=25.0 size=    3689kB time=00:00:26.33 bitrate=1147.5kbits/s dup=0 drop=3152 speed=0.0981x
frame=  793 fps=2.9 q=25.0 size=    3692kB time=00:00:26.40 bitrate=1145.7kbits/s dup=0 drop=3158 speed=0.0982x
frame=  795 fps=2.9 q=25.0 size=    3696kB time=00:00:26.46 bitrate=1143.9kbits/s dup=0 drop=3166 speed=0.0982x
frame=  796 fps=2.9 q=25.0 size=    3698kB time=00:00:26.50 bitrate=1143.0kbits/s dup=0 drop=3171 speed=0.0981x
frame=  798 fps=2.9 q=25.0 size=    3701kB time=00:00:26.56 bitrate=1141.3kbits/s dup=0 drop=3178 speed=0.0981x
frame=  799 fps=2.9 q=25.0 size=    3703kB time=00:00:26.60 bitrate=1140.4kbits/s dup=0 drop=3182 speed=0.0981x
frame=  810 fps=2.9 q=25.0 size=    3722kB time=00:00:26.96 bitrate=1130.8kbits/s dup=0 drop=3227 speed=0.0979x
frame=  811 fps=2.9 q=25.0 size=    3724kB time=00:00:27.00 bitrate=1129.9kbits/s dup=0 drop=3232 speed=0.0979x
frame=  813 fps=2.9 q=25.0 size=    3728kB time=00:00:27.06 bitrate=1128.2kbits/s dup=0 drop=3238 speed=0.0979x
frame=  814 fps=2.9 q=25.0 size=    3729kB time=00:00:27.10 bitrate=1127.3kbits/s dup=0 drop=3242 speed=0.0979x
frame=  815 fps=2.9 q=25.0 size=    3731kB time=00:00:27.13 bitrate=1126.4kbits/s dup=0 drop=3246 speed=0.0978x
frame=  816 fps=2.9 q=25.0 size=    3733kB time=00:00:27.16 bitrate=1125.6kbits/s dup=0 drop=3250 speed=0.0977x
frame=  817 fps=2.9 q=25.0 size=    3735kB time=00:00:27.20 bitrate=1124.8kbits/s dup=0 drop=3254 speed=0.0977x
frame=  819 fps=2.9 q=25.0 size=    3738kB time=00:00:27.26 bitrate=1123.0kbits/s dup=0 drop=3262 speed=0.0977x
frame=  820 fps=2.9 q=25.0 size=    3740kB time=00:00:27.30 bitrate=1122.1kbits/s dup=0 drop=3268 speed=0.0977x
frame=  822 fps=2.9 q=25.0 size=    3743kB time=00:00:27.36 bitrate=1120.4kbits/s dup=0 drop=3274 speed=0.0977x
frame=  824 fps=2.9 q=25.0 size=    3747kB time=00:00:27.43 bitrate=1118.8kbits/s dup=0 drop=3282 speed=0.0977x
frame=  825 fps=2.9 q=25.0 size=    3748kB time=00:00:27.46 bitrate=1117.9kbits/s dup=0 drop=3288 speed=0.0977x
frame=  827 fps=2.9 q=25.0 size=    3752kB time=00:00:27.53 bitrate=1116.2kbits/s dup=0 drop=3294 speed=0.0977x
frame=  828 fps=2.9 q=25.0 size=    3753kB time=00:00:27.56 bitrate=1115.4kbits/s dup=0 drop=3301 speed=0.0976x
frame=  830 fps=2.9 q=25.0 size=    3757kB time=00:00:27.63 bitrate=1113.6kbits/s dup=0 drop=3306 speed=0.0977x
frame=  831 fps=2.9 q=25.0 size=    3758kB time=00:00:27.66 bitrate=1112.8kbits/s dup=0 drop=3313 speed=0.0977x
frame=  833 fps=2.9 q=25.0 size=    3762kB time=00:00:27.73 bitrate=1111.1kbits/s dup=0 drop=3318 speed=0.0977x
frame=  834 fps=2.9 q=25.0 size=    3763kB time=00:00:27.76 bitrate=1110.2kbits/s dup=0 drop=3325 speed=0.0977x
frame=  836 fps=2.9 q=25.0 size=    3767kB time=00:00:27.83 bitrate=1108.6kbits/s dup=0 drop=3330 speed=0.0977x
frame=  837 fps=2.9 q=25.0 size=    3768kB time=00:00:27.86 bitrate=1107.7kbits/s dup=0 drop=3334 speed=0.0976x
frame=  838 fps=2.9 q=25.0 size=    3770kB time=00:00:27.90 bitrate=1106.9kbits/s dup=0 drop=3338 speed=0.0976x
frame=  839 fps=2.9 q=25.0 size=    3772kB time=00:00:27.93 bitrate=1106.1kbits/s dup=0 drop=3344 speed=0.0975x
frame=  841 fps=2.9 q=25.0 size=    3775kB time=00:00:28.00 bitrate=1104.5kbits/s dup=0 drop=3350 speed=0.0976x
frame=  843 fps=2.9 q=25.0 size=    3778kB time=00:00:28.06 bitrate=1102.8kbits/s dup=0 drop=3358 speed=0.0976x
frame=  844 fps=2.9 q=25.0 size=    3780kB time=00:00:28.10 bitrate=1102.0kbits/s dup=0 drop=3364 speed=0.0975x
frame=  846 fps=2.9 q=25.0 size=    3784kB time=00:00:28.16 bitrate=1100.4kbits/s dup=0 drop=3370 speed=0.0976x
frame=  847 fps=2.9 q=25.0 size=    3785kB time=00:00:28.20 bitrate=1099.6kbits/s dup=0 drop=3376 speed=0.0975x
frame=  849 fps=2.9 q=25.0 size=    3789kB time=00:00:28.26 bitrate=1098.0kbits/s dup=0 drop=3382 speed=0.0976x
frame=  850 fps=2.9 q=25.0 size=    3791kB time=00:00:28.30 bitrate=1097.2kbits/s dup=0 drop=3388 speed=0.0975x
frame=  852 fps=2.9 q=25.0 size=    3794kB time=00:00:28.36 bitrate=1095.6kbits/s dup=0 drop=3394 speed=0.0976x
frame=  854 fps=2.9 q=25.0 size=    3797kB time=00:00:28.43 bitrate=1094.0kbits/s dup=0 drop=3402 speed=0.0976x
frame=  856 fps=2.9 q=25.0 size=    3800kB time=00:00:28.50 bitrate=1092.4kbits/s dup=0 drop=3410 speed=0.0977x
frame=  858 fps=2.9 q=25.0 size=    3804kB time=00:00:28.56 bitrate=1090.8kbits/s dup=0 drop=3418 speed=0.0977x
frame=  859 fps=2.9 q=25.0 size=    3805kB time=00:00:28.60 bitrate=1090.0kbits/s dup=0 drop=3425 speed=0.0976x
frame=  861 fps=2.9 q=25.0 size=    3809kB time=00:00:28.66 bitrate=1088.4kbits/s dup=0 drop=3432 speed=0.0977x
frame=  863 fps=2.9 q=25.0 size=    3812kB time=00:00:28.73 bitrate=1086.8kbits/s dup=0 drop=3438 speed=0.0978x
frame=  865 fps=2.9 q=25.0 size=    3815kB time=00:00:28.80 bitrate=1085.2kbits/s dup=0 drop=3446 speed=0.0978x
frame=  867 fps=2.9 q=25.0 size=    3819kB time=00:00:28.86 bitrate=1083.7kbits/s dup=0 drop=3454 speed=0.0979x
frame=  869 fps=2.9 q=25.0 size=    3822kB time=00:00:28.93 bitrate=1082.1kbits/s dup=0 drop=3462 speed=0.0979x
frame=  870 fps=2.9 q=25.0 size=    3824kB time=00:00:28.96 bitrate=1081.3kbits/s dup=0 drop=3467 speed=0.0978x
frame=  872 fps=2.9 q=25.0 size=    3827kB time=00:00:29.03 bitrate=1079.8kbits/s dup=0 drop=3474 speed=0.0978x
frame=  873 fps=2.9 q=25.0 size=    3829kB time=00:00:29.06 bitrate=1079.1kbits/s dup=0 drop=3480 speed=0.0978x
frame=  875 fps=2.9 q=25.0 size=    3832kB time=00:00:29.13 bitrate=1077.5kbits/s dup=0 drop=3486 speed=0.0978x
frame=  876 fps=2.9 q=25.0 size=    3834kB time=00:00:29.16 bitrate=1076.7kbits/s dup=0 drop=3492 speed=0.0978x
frame=  877 fps=2.9 q=25.0 size=    3835kB time=00:00:29.20 bitrate=1076.0kbits/s dup=0 drop=3496 speed=0.0977x
frame=  879 fps=2.9 q=25.0 size=    3839kB time=00:00:29.26 bitrate=1074.5kbits/s dup=0 drop=3502 speed=0.0978x
frame=  880 fps=2.9 q=25.0 size=    3840kB time=00:00:29.30 bitrate=1073.7kbits/s dup=0 drop=3508 speed=0.0977x
frame=  882 fps=2.9 q=25.0 size=    3844kB time=00:00:29.36 bitrate=1072.2kbits/s dup=0 drop=3514 speed=0.0977x
frame=  884 fps=2.9 q=25.0 size=    3847kB time=00:00:29.43 bitrate=1070.7kbits/s dup=0 drop=3522 speed=0.0978x
frame=  886 fps=2.9 q=25.0 size=    3850kB time=00:00:29.50 bitrate=1069.2kbits/s dup=0 drop=3530 speed=0.0978x
frame=  887 fps=2.9 q=25.0 size=    3852kB time=00:00:29.53 bitrate=1068.4kbits/s dup=0 drop=3537 speed=0.0978x
frame=  889 fps=2.9 q=25.0 size=    3855kB time=00:00:29.60 bitrate=1066.9kbits/s dup=0 drop=3542 speed=0.0978x
frame=  890 fps=2.9 q=25.0 size=    3857kB time=00:00:29.63 bitrate=1066.2kbits/s dup=0 drop=3547 speed=0.0978x
frame=  892 fps=2.9 q=25.0 size=    3860kB time=00:00:29.70 bitrate=1064.7kbits/s dup=0 drop=3554 speed=0.0978x
frame=  894 fps=2.9 q=25.0 size=    3863kB time=00:00:29.76 bitrate=1063.2kbits/s dup=0 drop=3562 speed=0.0978x
frame=  896 fps=2.9 q=25.0 size=    3867kB time=00:00:29.83 bitrate=1061.8kbits/s dup=0 drop=3570 speed=0.0979x
frame=  897 fps=2.9 q=25.0 size=    3868kB time=00:00:29.86 bitrate=1061.1kbits/s dup=0 drop=3576 speed=0.0978x
frame=  899 fps=2.9 q=25.0 size=    3872kB time=00:00:29.93 bitrate=1059.6kbits/s dup=0 drop=3582 speed=0.0979x
frame=  900 fps=2.9 q=25.0 size=    3873kB time=00:00:29.96 bitrate=1058.9kbits/s dup=0 drop=3589 speed=0.0978x
frame=  902 fps=2.9 q=25.0 size=    3876kB time=00:00:30.03 bitrate=1057.4kbits/s dup=0 drop=3594 speed=0.0979x
frame=  902 fps=2.9 q=25.0 size=    3876kB time=00:00:30.03 bitrate=1057.4kbits/s dup=0 drop=3594 speed=0.0977x
frame=  903 fps=2.9 q=25.0 size=    3878kB time=00:00:30.06 bitrate=1056.6kbits/s dup=0 drop=3601 speed=0.0977x
frame=  905 fps=2.9 q=25.0 size=    3881kB time=00:00:30.13 bitrate=1055.1kbits/s dup=0 drop=3607 speed=0.0977x
frame=  907 fps=2.9 q=25.0 size=    3884kB time=00:00:30.20 bitrate=1053.7kbits/s dup=0 drop=3614 speed=0.0978x
frame=  909 fps=2.9 q=25.0 size=    3888kB time=00:00:30.26 bitrate=1052.2kbits/s dup=0 drop=3622 speed=0.0978x
frame=  911 fps=2.9 q=25.0 size=    3891kB time=00:00:30.33 bitrate=1050.8kbits/s dup=0 drop=3630 speed=0.0978x
frame=  912 fps=2.9 q=25.0 size=    3892kB time=00:00:30.36 bitrate=1050.1kbits/s dup=0 drop=3637 speed=0.0978x
frame=  914 fps=2.9 q=25.0 size=    3896kB time=00:00:30.43 bitrate=1048.6kbits/s dup=0 drop=3643 speed=0.0979x
frame=  916 fps=2.9 q=25.0 size=    3899kB time=00:00:30.50 bitrate=1047.2kbits/s dup=0 drop=3650 speed=0.0979x
frame=  918 fps=2.9 q=25.0 size=    3902kB time=00:00:30.56 bitrate=1045.8kbits/s dup=0 drop=3658 speed=0.0979x
frame=  921 fps=2.9 q=25.0 size=    3907kB time=00:00:30.66 bitrate=1043.7kbits/s dup=0 drop=3671 speed=0.0979x
frame=  922 fps=2.9 q=25.0 size=    3909kB time=00:00:30.70 bitrate=1043.0kbits/s dup=0 drop=3675 speed=0.0979x
frame=  923 fps=2.9 q=25.0 size=    3911kB time=00:00:30.73 bitrate=1042.4kbits/s dup=0 drop=3680 speed=0.0978x
frame=  925 fps=2.9 q=25.0 size=    3914kB time=00:00:30.80 bitrate=1041.0kbits/s dup=0 drop=3686 speed=0.0979x
frame=  926 fps=2.9 q=25.0 size=    3916kB time=00:00:30.83 bitrate=1040.3kbits/s dup=0 drop=3692 speed=0.0978x
frame=  928 fps=2.9 q=25.0 size=    3919kB time=00:00:30.90 bitrate=1039.0kbits/s dup=0 drop=3698 speed=0.0979x
frame=  930 fps=2.9 q=25.0 size=    3922kB time=00:00:30.96 bitrate=1037.6kbits/s dup=0 drop=3706 speed=0.0979x
frame=  932 fps=2.9 q=25.0 size=    3926kB time=00:00:31.03 bitrate=1036.3kbits/s dup=0 drop=3714 speed=0.0979x
frame=  933 fps=2.9 q=25.0 size=    3928kB time=00:00:31.06 bitrate=1035.7kbits/s dup=0 drop=3719 speed=0.0979x
frame=  935 fps=2.9 q=25.0 size=    3931kB time=00:00:31.13 bitrate=1034.3kbits/s dup=0 drop=3726 speed=0.0979x
frame=  937 fps=2.9 q=25.0 size=    3934kB time=00:00:31.20 bitrate=1033.0kbits/s dup=0 drop=3734 speed=0.0979x
frame=  943 fps=2.9 q=25.0 size=    3944kB time=00:00:31.40 bitrate=1029.0kbits/s dup=0 drop=3758 speed=0.0981x
frame=  948 fps=2.9 q=25.0 size=    3953kB time=00:00:31.56 bitrate=1025.8kbits/s dup=0 drop=3781 speed=0.0979x
frame=  951 fps=2.9 q=25.0 size=    3958kB time=00:00:31.66 bitrate=1023.9kbits/s dup=0 drop=3791 speed=0.0979x
frame=  954 fps=2.9 q=25.0 size=    3963kB time=00:00:31.76 bitrate=1022.1kbits/s dup=0 drop=3802 speed=0.0979x
frame=  955 fps=2.9 q=25.0 size=    3965kB time=00:00:31.80 bitrate=1021.4kbits/s dup=0 drop=3809 speed=0.0979x
frame=  957 fps=2.9 q=25.0 size=    3969kB time=00:00:31.86 bitrate=1020.2kbits/s dup=0 drop=3814 speed=0.0979x
frame=  958 fps=2.9 q=25.0 size=    3971kB time=00:00:31.90 bitrate=1019.7kbits/s dup=0 drop=3818 speed=0.0979x
frame=  959 fps=2.9 q=25.0 size=    3972kB time=00:00:31.93 bitrate=1019.1kbits/s dup=0 drop=3824 speed=0.0978x
frame=  961 fps=2.9 q=25.0 size=    3976kB time=00:00:32.00 bitrate=1017.9kbits/s dup=0 drop=3830 speed=0.0978x
frame=  962 fps=2.9 q=25.0 size=    3978kB time=00:00:32.03 bitrate=1017.3kbits/s dup=0 drop=3834 speed=0.0978x
frame=  964 fps=2.9 q=25.0 size=    3982kB time=00:00:32.10 bitrate=1016.1kbits/s dup=0 drop=3842 speed=0.0978x
frame=  965 fps=2.9 q=25.0 size=    3983kB time=00:00:32.13 bitrate=1015.5kbits/s dup=0 drop=3848 speed=0.0978x
frame=  967 fps=2.9 q=25.0 size=    3987kB time=00:00:32.20 bitrate=1014.3kbits/s dup=0 drop=3854 speed=0.0978x
frame=  968 fps=2.9 q=25.0 size=    3989kB time=00:00:32.23 bitrate=1013.7kbits/s dup=0 drop=3860 speed=0.0977x
frame=  970 fps=2.9 q=25.0 size=    3993kB time=00:00:32.30 bitrate=1012.6kbits/s dup=0 drop=3866 speed=0.0978x
frame=  971 fps=2.9 q=25.0 size=    3994kB time=00:00:32.33 bitrate=1012.0kbits/s dup=0 drop=3872 speed=0.0977x
frame=  973 fps=2.9 q=25.0 size=    3998kB time=00:00:32.40 bitrate=1010.8kbits/s dup=0 drop=3878 speed=0.0978x
frame=  974 fps=2.9 q=25.0 size=    4000kB time=00:00:32.43 bitrate=1010.2kbits/s dup=0 drop=3885 speed=0.0977x
frame=  976 fps=2.9 q=25.0 size=    4003kB time=00:00:32.50 bitrate=1009.0kbits/s dup=0 drop=3890 speed=0.0978x
frame=  978 fps=2.9 q=25.0 size=    4006kB time=00:00:32.56 bitrate=1007.8kbits/s dup=0 drop=3898 speed=0.0978x
frame=  979 fps=2.9 q=25.0 size=    4008kB time=00:00:32.60 bitrate=1007.2kbits/s dup=0 drop=3904 speed=0.0977x
frame=  981 fps=2.9 q=25.0 size=    4012kB time=00:00:32.66 bitrate=1006.0kbits/s dup=0 drop=3910 speed=0.0978x
frame=  982 fps=2.9 q=25.0 size=    4013kB time=00:00:32.70 bitrate=1005.4kbits/s dup=0 drop=3916 speed=0.0977x
frame=  984 fps=2.9 q=25.0 size=    4017kB time=00:00:32.76 bitrate=1004.3kbits/s dup=0 drop=3922 speed=0.0978x
frame=  985 fps=2.9 q=25.0 size=    4019kB time=00:00:32.80 bitrate=1003.7kbits/s dup=0 drop=3928 speed=0.0977x
frame=  987 fps=2.9 q=25.0 size=    4022kB time=00:00:32.86 bitrate=1002.5kbits/s dup=0 drop=3934 speed=0.0978x
frame=  988 fps=2.9 q=25.0 size=    4024kB time=00:00:32.90 bitrate=1001.9kbits/s dup=0 drop=3939 speed=0.0977x
frame=  990 fps=2.9 q=26.0 size=    4039kB time=00:00:32.96 bitrate=1003.8kbits/s dup=0 drop=3946 speed=0.0978x
frame=  991 fps=2.9 q=25.0 size=    4041kB time=00:00:33.00 bitrate=1003.2kbits/s dup=0 drop=3953 speed=0.0977x
frame=  993 fps=2.9 q=25.0 size=    4045kB time=00:00:33.06 bitrate=1002.1kbits/s dup=0 drop=3958 speed=0.0978x
frame=  995 fps=2.9 q=25.0 size=    4049kB time=00:00:33.13 bitrate=1001.1kbits/s dup=0 drop=3966 speed=0.0978x
frame=  996 fps=2.9 q=25.0 size=    4051kB time=00:00:33.16 bitrate=1000.5kbits/s dup=0 drop=3970 speed=0.0978x
frame=  997 fps=2.9 q=25.0 size=    4053kB time=00:00:33.20 bitrate=1000.0kbits/s dup=0 drop=3974 speed=0.0977x
frame=  998 fps=2.9 q=25.0 size=    4055kB time=00:00:33.23 bitrate= 999.5kbits/s dup=0 drop=3981 speed=0.0977x
frame= 1000 fps=2.9 q=25.0 size=    4059kB time=00:00:33.30 bitrate= 998.4kbits/s dup=0 drop=3986 speed=0.0977x
frame= 1001 fps=2.9 q=25.0 size=    4060kB time=00:00:33.33 bitrate= 997.8kbits/s dup=0 drop=3991 speed=0.0977x
frame= 1003 fps=2.9 q=25.0 size=    4064kB time=00:00:33.40 bitrate= 996.8kbits/s dup=0 drop=3998 speed=0.0977x
frame= 1004 fps=2.9 q=25.0 size=    4066kB time=00:00:33.43 bitrate= 996.2kbits/s dup=0 drop=4002 speed=0.0976x
frame= 1005 fps=2.9 q=25.0 size=    4068kB time=00:00:33.46 bitrate= 995.7kbits/s dup=0 drop=4007 speed=0.0976x
frame= 1006 fps=2.9 q=25.0 size=    4069kB time=00:00:33.50 bitrate= 995.1kbits/s dup=0 drop=4011 speed=0.0975x
frame= 1007 fps=2.9 q=25.0 size=    4071kB time=00:00:33.53 bitrate= 994.6kbits/s dup=0 drop=4017 speed=0.0975x
frame= 1009 fps=2.9 q=25.0 size=    4075kB time=00:00:33.60 bitrate= 993.5kbits/s dup=0 drop=4022 speed=0.0976x
frame= 1010 fps=2.9 q=25.0 size=    4077kB time=00:00:33.63 bitrate= 992.9kbits/s dup=0 drop=4029 speed=0.0975x
frame= 1012 fps=2.9 q=25.0 size=    4080kB time=00:00:33.70 bitrate= 991.9kbits/s dup=0 drop=4034 speed=0.0976x
frame= 1013 fps=2.9 q=25.0 size=    4082kB time=00:00:33.73 bitrate= 991.3kbits/s dup=0 drop=4041 speed=0.0975x
frame= 1015 fps=2.9 q=25.0 size=    4086kB time=00:00:33.80 bitrate= 990.2kbits/s dup=0 drop=4046 speed=0.0976x
frame= 1017 fps=2.9 q=25.0 size=    4089kB time=00:00:33.86 bitrate= 989.1kbits/s dup=0 drop=4054 speed=0.0976x
frame= 1018 fps=2.9 q=25.0 size=    4091kB time=00:00:33.90 bitrate= 988.5kbits/s dup=0 drop=4060 speed=0.0975x
frame= 1020 fps=2.9 q=25.0 size=    4094kB time=00:00:33.96 bitrate= 987.4kbits/s dup=0 drop=4066 speed=0.0976x
frame= 1022 fps=2.9 q=25.0 size=    4099kB time=00:00:34.03 bitrate= 986.7kbits/s dup=0 drop=4074 speed=0.0976x
frame= 1023 fps=2.9 q=25.0 size=    4102kB time=00:00:34.06 bitrate= 986.3kbits/s dup=0 drop=4079 speed=0.0975x
frame= 1025 fps=2.9 q=25.0 size=    4106kB time=00:00:34.13 bitrate= 985.4kbits/s dup=0 drop=4086 speed=0.0975x
frame= 1026 fps=2.9 q=25.0 size=    4108kB time=00:00:34.16 bitrate= 985.0kbits/s dup=0 drop=4091 speed=0.0975x
frame= 1028 fps=2.9 q=25.0 size=    4114kB time=00:00:34.23 bitrate= 984.5kbits/s dup=0 drop=4098 speed=0.0975x
frame= 1030 fps=2.9 q=26.0 size=    4123kB time=00:00:34.30 bitrate= 984.8kbits/s dup=0 drop=4106 speed=0.0974x
frame= 1031 fps=2.9 q=26.0 size=    4128kB time=00:00:34.33 bitrate= 985.0kbits/s dup=0 drop=4110 speed=0.0974x
frame= 1032 fps=2.9 q=26.0 size=    4132kB time=00:00:34.36 bitrate= 985.0kbits/s dup=0 drop=4114 speed=0.0973x
frame= 1033 fps=2.9 q=25.0 size=    4136kB time=00:00:34.40 bitrate= 984.9kbits/s dup=0 drop=4118 speed=0.0972x
frame= 1035 fps=2.9 q=25.0 size=    4142kB time=00:00:34.46 bitrate= 984.4kbits/s dup=0 drop=4126 speed=0.0972x
frame= 1037 fps=2.9 q=25.0 size=    4148kB time=00:00:34.53 bitrate= 984.0kbits/s dup=0 drop=4134 speed=0.0972x
frame= 1039 fps=2.9 q=25.0 size=    4155kB time=00:00:34.60 bitrate= 983.7kbits/s dup=0 drop=4142 speed=0.0972x
frame= 1041 fps=2.9 q=25.0 size=    4161kB time=00:00:34.66 bitrate= 983.2kbits/s dup=0 drop=4150 speed=0.0972x
frame= 1043 fps=2.9 q=25.0 size=    4167kB time=00:00:34.73 bitrate= 982.7kbits/s dup=0 drop=4158 speed=0.0972x
frame= 1045 fps=2.9 q=25.0 size=    4173kB time=00:00:34.80 bitrate= 982.3kbits/s dup=0 drop=4166 speed=0.0972x
frame= 1047 fps=2.9 q=25.0 size=    4181kB time=00:00:34.86 bitrate= 982.3kbits/s dup=0 drop=4174 speed=0.0972x
frame= 1049 fps=2.9 q=25.0 size=    4188kB time=00:00:34.93 bitrate= 982.0kbits/s dup=0 drop=4182 speed=0.0973x
frame= 1050 fps=2.9 q=25.0 size=    4191kB time=00:00:34.96 bitrate= 981.9kbits/s dup=0 drop=4187 speed=0.0972x
frame= 1051 fps=2.9 q=26.0 size=    4196kB time=00:00:35.00 bitrate= 982.1kbits/s dup=0 drop=4190 speed=0.0972x
frame= 1053 fps=2.9 q=26.0 size=    4204kB time=00:00:35.06 bitrate= 982.1kbits/s dup=0 drop=4198 speed=0.0971x
frame= 1055 fps=2.9 q=26.0 size=    4214kB time=00:00:35.13 bitrate= 982.7kbits/s dup=0 drop=4206 speed=0.0971x
frame= 1061 fps=2.9 q=25.0 size=    4235kB time=00:00:35.33 bitrate= 981.8kbits/s dup=0 drop=4230 speed=0.0971x
frame= 1066 fps=2.9 q=26.0 size=    4250kB time=00:00:35.50 bitrate= 980.6kbits/s dup=0 drop=4250 speed=0.0969x
frame= 1067 fps=2.9 q=26.0 size=    4255kB time=00:00:35.53 bitrate= 980.9kbits/s dup=0 drop=4254 speed=0.0969x
frame= 1068 fps=2.9 q=26.0 size=    4259kB time=00:00:35.56 bitrate= 980.9kbits/s dup=0 drop=4258 speed=0.0968x
frame= 1069 fps=2.9 q=26.0 size=    4262kB time=00:00:35.60 bitrate= 980.7kbits/s dup=0 drop=4263 speed=0.0968x
frame= 1070 fps=2.9 q=26.0 size=    4265kB time=00:00:35.63 bitrate= 980.4kbits/s dup=0 drop=4267 speed=0.0967x
frame= 1072 fps=2.9 q=25.0 size=    4269kB time=00:00:35.70 bitrate= 979.6kbits/s dup=0 drop=4274 speed=0.0968x
frame= 1073 fps=2.9 q=25.0 size=    4271kB time=00:00:35.73 bitrate= 979.2kbits/s dup=0 drop=4278 speed=0.0967x
frame= 1074 fps=2.9 q=25.0 size=    4273kB time=00:00:35.76 bitrate= 978.8kbits/s dup=0 drop=4283 speed=0.0967x
frame= 1076 fps=2.9 q=25.0 size=    4277kB time=00:00:35.83 bitrate= 977.9kbits/s dup=0 drop=4290 speed=0.0967x
frame= 1077 fps=2.9 q=25.0 size=    4279kB time=00:00:35.86 bitrate= 977.4kbits/s dup=0 drop=4296 speed=0.0966x
frame= 1079 fps=2.9 q=25.0 size=    4283kB time=00:00:35.93 bitrate= 976.5kbits/s dup=0 drop=4302 speed=0.0966x
frame= 1080 fps=2.9 q=25.0 size=    4285kB time=00:00:35.96 bitrate= 976.0kbits/s dup=0 drop=4306 speed=0.0966x
frame= 1082 fps=2.9 q=25.0 size=    4289kB time=00:00:36.03 bitrate= 975.1kbits/s dup=0 drop=4314 speed=0.0966x
frame= 1084 fps=2.9 q=25.0 size=    4293kB time=00:00:36.10 bitrate= 974.1kbits/s dup=0 drop=4322 speed=0.0966x
frame= 1086 fps=2.9 q=25.0 size=    4296kB time=00:00:36.16 bitrate= 973.2kbits/s dup=0 drop=4330 speed=0.0967x
frame= 1088 fps=2.9 q=25.0 size=    4300kB time=00:00:36.23 bitrate= 972.2kbits/s dup=0 drop=4338 speed=0.0967x
frame= 1090 fps=2.9 q=25.0 size=    4304kB time=00:00:36.30 bitrate= 971.3kbits/s dup=0 drop=4346 speed=0.0967x
frame= 1092 fps=2.9 q=25.0 size=    4308kB time=00:00:36.36 bitrate= 970.3kbits/s dup=0 drop=4354 speed=0.0967x
frame= 1093 fps=2.9 q=25.0 size=    4310kB time=00:00:36.40 bitrate= 969.9kbits/s dup=0 drop=4358 speed=0.0967x
frame= 1094 fps=2.9 q=25.0 size=    4311kB time=00:00:36.43 bitrate= 969.4kbits/s dup=0 drop=4365 speed=0.0966x
frame= 1096 fps=2.9 q=25.0 size=    4315kB time=00:00:36.50 bitrate= 968.4kbits/s dup=0 drop=4370 speed=0.0967x
frame= 1097 fps=2.9 q=25.0 size=    4316kB time=00:00:36.53 bitrate= 967.9kbits/s dup=0 drop=4375 speed=0.0966x
frame= 1099 fps=2.9 q=25.0 size=    4320kB time=00:00:36.60 bitrate= 966.9kbits/s dup=0 drop=4382 speed=0.0967x
frame= 1101 fps=2.9 q=25.0 size=    4323kB time=00:00:36.66 bitrate= 965.9kbits/s dup=0 drop=4390 speed=0.0967x
frame= 1103 fps=2.9 q=25.0 size=    4327kB time=00:00:36.73 bitrate= 965.0kbits/s dup=0 drop=4398 speed=0.0967x
frame= 1104 fps=2.9 q=25.0 size=    4329kB time=00:00:36.76 bitrate= 964.5kbits/s dup=0 drop=4403 speed=0.0967x
frame= 1105 fps=2.9 q=25.0 size=    4331kB time=00:00:36.80 bitrate= 964.0kbits/s dup=0 drop=4407 speed=0.0966x
frame= 1107 fps=2.9 q=25.0 size=    4334kB time=00:00:36.86 bitrate= 963.1kbits/s dup=0 drop=4414 speed=0.0967x
frame= 1108 fps=2.9 q=25.0 size=    4336kB time=00:00:36.90 bitrate= 962.6kbits/s dup=0 drop=4420 speed=0.0966x
frame= 1110 fps=2.9 q=25.0 size=    4340kB time=00:00:36.96 bitrate= 961.7kbits/s dup=0 drop=4426 speed=0.0967x
frame= 1112 fps=2.9 q=25.0 size=    4343kB time=00:00:37.03 bitrate= 960.8kbits/s dup=0 drop=4434 speed=0.0967x
frame= 1114 fps=2.9 q=25.0 size=    4347kB time=00:00:37.10 bitrate= 959.8kbits/s dup=0 drop=4442 speed=0.0968x
frame= 1115 fps=2.9 q=25.0 size=    4349kB time=00:00:37.13 bitrate= 959.3kbits/s dup=0 drop=4446 speed=0.0967x
frame= 1117 fps=2.9 q=25.0 size=    4352kB time=00:00:37.20 bitrate= 958.4kbits/s dup=0 drop=4454 speed=0.0967x
frame= 1118 fps=2.9 q=25.0 size=    4354kB time=00:00:37.23 bitrate= 957.9kbits/s dup=0 drop=4461 speed=0.0967x
frame= 1120 fps=2.9 q=25.0 size=    4357kB time=00:00:37.30 bitrate= 956.9kbits/s dup=0 drop=4467 speed=0.0968x
frame= 1122 fps=2.9 q=25.0 size=    4361kB time=00:00:37.36 bitrate= 956.0kbits/s dup=0 drop=4474 speed=0.0968x
frame= 1124 fps=2.9 q=25.0 size=    4364kB time=00:00:37.43 bitrate= 955.0kbits/s dup=0 drop=4482 speed=0.0968x
frame= 1125 fps=2.9 q=25.0 size=    4366kB time=00:00:37.46 bitrate= 954.6kbits/s dup=0 drop=4487 speed=0.0968x
frame= 1127 fps=2.9 q=25.0 size=    4369kB time=00:00:37.53 bitrate= 953.6kbits/s dup=0 drop=4494 speed=0.0968x
frame= 1128 fps=2.9 q=25.0 size=    4371kB time=00:00:37.56 bitrate= 953.2kbits/s dup=0 drop=4499 speed=0.0968x
frame= 1130 fps=2.9 q=25.0 size=    4375kB time=00:00:37.63 bitrate= 952.4kbits/s dup=0 drop=4506 speed=0.0968x
frame= 1131 fps=2.9 q=25.0 size=    4377kB time=00:00:37.66 bitrate= 952.0kbits/s dup=0 drop=4510 speed=0.0967x
frame= 1132 fps=2.9 q=25.0 size=    4379kB time=00:00:37.70 bitrate= 951.6kbits/s dup=0 drop=4517 speed=0.0967x
frame= 1134 fps=2.9 q=25.0 size=    4383kB time=00:00:37.76 bitrate= 950.6kbits/s dup=0 drop=4522 speed=0.0967x
frame= 1135 fps=2.9 q=25.0 size=    4384kB time=00:00:37.80 bitrate= 950.2kbits/s dup=0 drop=4527 speed=0.0967x
frame= 1136 fps=2.9 q=25.0 size=    4386kB time=00:00:37.83 bitrate= 949.7kbits/s dup=0 drop=4533 speed=0.0966x
frame= 1138 fps=2.9 q=25.0 size=    4389kB time=00:00:37.90 bitrate= 948.7kbits/s dup=0 drop=4538 speed=0.0967x
frame= 1139 fps=2.9 q=25.0 size=    4391kB time=00:00:37.93 bitrate= 948.3kbits/s dup=0 drop=4544 speed=0.0966x
frame= 1141 fps=2.9 q=25.0 size=    4395kB time=00:00:38.00 bitrate= 947.4kbits/s dup=0 drop=4550 speed=0.0967x
frame= 1142 fps=2.9 q=25.0 size=    4396kB time=00:00:38.03 bitrate= 946.9kbits/s dup=0 drop=4556 speed=0.0966x
frame= 1144 fps=2.9 q=25.0 size=    4400kB time=00:00:38.10 bitrate= 946.0kbits/s dup=0 drop=4562 speed=0.0967x
frame= 1145 fps=2.9 q=25.0 size=    4401kB time=00:00:38.13 bitrate= 945.5kbits/s dup=0 drop=4566 speed=0.0966x
frame= 1146 fps=2.9 q=25.0 size=    4403kB time=00:00:38.16 bitrate= 945.1kbits/s dup=0 drop=4570 speed=0.0966x
frame= 1147 fps=2.9 q=25.0 size=    4405kB time=00:00:38.20 bitrate= 944.6kbits/s dup=0 drop=4574 speed=0.0965x
frame= 1148 fps=2.9 q=25.0 size=    4407kB time=00:00:38.23 bitrate= 944.2kbits/s dup=0 drop=4581 speed=0.0965x
frame= 1150 fps=2.9 q=25.0 size=    4410kB time=00:00:38.30 bitrate= 943.3kbits/s dup=0 drop=4586 speed=0.0965x
frame= 1151 fps=2.9 q=25.0 size=    4412kB time=00:00:38.33 bitrate= 942.8kbits/s dup=0 drop=4592 speed=0.0965x
frame= 1153 fps=2.9 q=25.0 size=    4415kB time=00:00:38.40 bitrate= 941.9kbits/s dup=0 drop=4598 speed=0.0965x
frame= 1154 fps=2.9 q=25.0 size=    4417kB time=00:00:38.43 bitrate= 941.5kbits/s dup=0 drop=4603 speed=0.0965x
frame= 1156 fps=2.9 q=25.0 size=    4420kB time=00:00:38.50 bitrate= 940.6kbits/s dup=0 drop=4610 speed=0.0965x
frame= 1157 fps=2.9 q=25.0 size=    4422kB time=00:00:38.53 bitrate= 940.1kbits/s dup=0 drop=4616 speed=0.0965x
frame= 1159 fps=2.9 q=25.0 size=    4426kB time=00:00:38.60 bitrate= 939.2kbits/s dup=0 drop=4622 speed=0.0965x
frame= 1161 fps=2.9 q=25.0 size=    4429kB time=00:00:38.66 bitrate= 938.3kbits/s dup=0 drop=4630 speed=0.0965x
frame= 1162 fps=2.9 q=25.0 size=    4431kB time=00:00:38.70 bitrate= 937.9kbits/s dup=0 drop=4635 speed=0.0965x
frame= 1164 fps=2.9 q=25.0 size=    4434kB time=00:00:38.76 bitrate= 937.0kbits/s dup=0 drop=4642 speed=0.0966x
frame= 1165 fps=2.9 q=25.0 size=    4436kB time=00:00:38.80 bitrate= 936.5kbits/s dup=0 drop=4649 speed=0.0965x
frame= 1167 fps=2.9 q=25.0 size=    4439kB time=00:00:38.86 bitrate= 935.7kbits/s dup=0 drop=4654 speed=0.0966x
frame= 1169 fps=2.9 q=25.0 size=    4443kB time=00:00:38.93 bitrate= 934.8kbits/s dup=0 drop=4662 speed=0.0966x
frame= 1170 fps=2.9 q=25.0 size=    4444kB time=00:00:38.96 bitrate= 934.3kbits/s dup=0 drop=4669 speed=0.0966x
frame= 1172 fps=2.9 q=25.0 size=    4448kB time=00:00:39.03 bitrate= 933.4kbits/s dup=0 drop=4674 speed=0.0966x
frame= 1173 fps=2.9 q=25.0 size=    4449kB time=00:00:39.06 bitrate= 933.0kbits/s dup=0 drop=4681 speed=0.0966x
frame= 1175 fps=2.9 q=25.0 size=    4453kB time=00:00:39.13 bitrate= 932.1kbits/s dup=0 drop=4686 speed=0.0966x
frame= 1176 fps=2.9 q=25.0 size=    4454kB time=00:00:39.16 bitrate= 931.7kbits/s dup=0 drop=4691 speed=0.0966x
frame= 1178 fps=2.9 q=25.0 size=    4458kB time=00:00:39.23 bitrate= 930.8kbits/s dup=0 drop=4699 speed=0.0959x
frame= 1182 fps=2.9 q=25.0 size=    4465kB time=00:00:39.36 bitrate= 929.1kbits/s dup=0 drop=4717 speed=0.0959x
frame= 1184 fps=2.9 q=25.0 size=    4468kB time=00:00:39.43 bitrate= 928.2kbits/s dup=0 drop=4722 speed=0.0959x
frame= 1185 fps=2.9 q=25.0 size=    4470kB time=00:00:39.46 bitrate= 927.7kbits/s dup=0 drop=4727 speed=0.0959x
frame= 1187 fps=2.9 q=25.0 size=    4473kB time=00:00:39.53 bitrate= 926.9kbits/s dup=0 drop=4734 speed=0.0959x
frame= 1188 fps=2.9 q=25.0 size=    4475kB time=00:00:39.56 bitrate= 926.5kbits/s dup=0 drop=4740 speed=0.0959x
frame= 1190 fps=2.9 q=25.0 size=    4478kB time=00:00:39.63 bitrate= 925.6kbits/s dup=0 drop=4746 speed=0.0959x
frame= 1191 fps=2.9 q=25.0 size=    4480kB time=00:00:39.66 bitrate= 925.2kbits/s dup=0 drop=4752 speed=0.0959x
frame= 1193 fps=2.9 q=25.0 size=    4483kB time=00:00:39.73 bitrate= 924.3kbits/s dup=0 drop=4758 speed=0.0959x
frame= 1194 fps=2.9 q=25.0 size=    4485kB time=00:00:39.76 bitrate= 923.9kbits/s dup=0 drop=4764 speed=0.0959x
frame= 1196 fps=2.9 q=25.0 size=    4488kB time=00:00:39.83 bitrate= 923.1kbits/s dup=0 drop=4770 speed=0.0959x
frame= 1197 fps=2.9 q=25.0 size=    4490kB time=00:00:39.86 bitrate= 922.6kbits/s dup=0 drop=4777 speed=0.0959x
frame= 1198 fps=2.9 q=25.0 size=    4492kB time=00:00:39.90 bitrate= 922.2kbits/s dup=0 drop=4780 speed=0.0958x
frame= 1200 fps=2.9 q=25.0 size=    4495kB time=00:00:39.96 bitrate= 921.4kbits/s dup=0 drop=4786 speed=0.0959x
frame= 1201 fps=2.9 q=25.0 size=    4497kB time=00:00:40.00 bitrate= 920.9kbits/s dup=0 drop=4791 speed=0.0958x
frame= 1203 fps=2.9 q=25.0 size=    4500kB time=00:00:40.06 bitrate= 920.1kbits/s dup=0 drop=4798 speed=0.0958x
frame= 1204 fps=2.9 q=25.0 size=    4502kB time=00:00:40.10 bitrate= 919.7kbits/s dup=0 drop=4805 speed=0.0958x
frame= 1206 fps=2.9 q=25.0 size=    4505kB time=00:00:40.16 bitrate= 918.9kbits/s dup=0 drop=4810 speed=0.0958x
frame= 1207 fps=2.9 q=25.0 size=    4507kB time=00:00:40.20 bitrate= 918.4kbits/s dup=0 drop=4817 speed=0.0958x
frame= 1209 fps=2.9 q=25.0 size=    4510kB time=00:00:40.26 bitrate= 917.6kbits/s dup=0 drop=4822 speed=0.0958x
frame= 1210 fps=2.9 q=25.0 size=    4512kB time=00:00:40.30 bitrate= 917.2kbits/s dup=0 drop=4828 speed=0.0958x
frame= 1212 fps=2.9 q=25.0 size=    4515kB time=00:00:40.36 bitrate= 916.4kbits/s dup=0 drop=4834 speed=0.0958x
frame= 1213 fps=2.9 q=25.0 size=    4517kB time=00:00:40.40 bitrate= 915.9kbits/s dup=0 drop=4841 speed=0.0958x
frame= 1215 fps=2.9 q=25.0 size=    4520kB time=00:00:40.46 bitrate= 915.1kbits/s dup=0 drop=4846 speed=0.0959x
frame= 1216 fps=2.9 q=25.0 size=    4522kB time=00:00:40.50 bitrate= 914.7kbits/s dup=0 drop=4853 speed=0.0958x
frame= 1218 fps=2.9 q=25.0 size=    4526kB time=00:00:40.56 bitrate= 913.9kbits/s dup=0 drop=4858 speed=0.0959x
frame= 1219 fps=2.9 q=25.0 size=    4527kB time=00:00:40.60 bitrate= 913.5kbits/s dup=0 drop=4864 speed=0.0958x
frame= 1221 fps=2.9 q=25.0 size=    4531kB time=00:00:40.66 bitrate= 912.7kbits/s dup=0 drop=4870 speed=0.0959x
frame= 1222 fps=2.9 q=25.0 size=    4532kB time=00:00:40.70 bitrate= 912.3kbits/s dup=0 drop=4874 speed=0.0958x
frame= 1223 fps=2.9 q=25.0 size=    4534kB time=00:00:40.73 bitrate= 911.9kbits/s dup=0 drop=4878 speed=0.0958x
frame= 1224 fps=2.9 q=25.0 size=    4536kB time=00:00:40.76 bitrate= 911.5kbits/s dup=0 drop=4884 speed=0.0958x
frame= 1226 fps=2.9 q=25.0 size=    4539kB time=00:00:40.83 bitrate= 910.7kbits/s dup=0 drop=4890 speed=0.0958x
frame= 1227 fps=2.9 q=25.0 size=    4541kB time=00:00:40.86 bitrate= 910.3kbits/s dup=0 drop=4896 speed=0.0957x
frame= 1229 fps=2.9 q=25.0 size=    4546kB time=00:00:40.93 bitrate= 909.7kbits/s dup=0 drop=4902 speed=0.0958x
frame= 1230 fps=2.9 q=25.0 size=    4548kB time=00:00:40.96 bitrate= 909.5kbits/s dup=0 drop=4906 speed=0.0957x
frame= 1231 fps=2.9 q=25.0 size=    4551kB time=00:00:41.00 bitrate= 909.2kbits/s dup=0 drop=4913 speed=0.0957x
frame= 1233 fps=2.9 q=25.0 size=    4555kB time=00:00:41.06 bitrate= 908.6kbits/s dup=0 drop=4918 speed=0.0957x
frame= 1234 fps=2.9 q=25.0 size=    4557kB time=00:00:41.10 bitrate= 908.3kbits/s dup=0 drop=4925 speed=0.0957x
frame= 1236 fps=2.9 q=25.0 size=    4561kB time=00:00:41.16 bitrate= 907.5kbits/s dup=0 drop=4930 speed=0.0957x
frame= 1237 fps=2.9 q=25.0 size=    4563kB time=00:00:41.20 bitrate= 907.2kbits/s dup=0 drop=4934 speed=0.0957x
frame= 1239 fps=2.9 q=22.0 size=    4579kB time=00:00:41.26 bitrate= 908.9kbits/s dup=0 drop=4942 speed=0.0957x
frame= 1241 fps=2.9 q=25.0 size=    4582kB time=00:00:41.33 bitrate= 908.2kbits/s dup=0 drop=4951 speed=0.0957x
frame= 1243 fps=2.9 q=25.0 size=    4586kB time=00:00:41.40 bitrate= 907.5kbits/s dup=0 drop=4961 speed=0.0958x
frame= 1246 fps=2.9 q=25.0 size=    4592kB time=00:00:41.50 bitrate= 906.4kbits/s dup=0 drop=4970 speed=0.0959x
frame= 1247 fps=2.9 q=25.0 size=    4594kB time=00:00:41.53 bitrate= 906.1kbits/s dup=0 drop=4976 speed=0.0959x
frame= 1249 fps=2.9 q=25.0 size=    4598kB time=00:00:41.60 bitrate= 905.5kbits/s dup=0 drop=4983 speed=0.0959x
frame= 1251 fps=2.9 q=25.0 size=    4602kB time=00:00:41.66 bitrate= 904.8kbits/s dup=0 drop=4990 speed=0.0959x
frame= 1253 fps=2.9 q=25.0 size=    4606kB time=00:00:41.73 bitrate= 904.2kbits/s dup=0 drop=4998 speed=0.0959x
frame= 1256 fps=2.9 q=25.0 size=    4612kB time=00:00:41.83 bitrate= 903.1kbits/s dup=0 drop=5012 speed=0.0959x
frame= 1259 fps=2.9 q=25.0 size=    4617kB time=00:00:41.93 bitrate= 901.9kbits/s dup=0 drop=5023 speed=0.0959x
frame= 1272 fps=2.9 q=25.0 size=    4639kB time=00:00:42.36 bitrate= 897.0kbits/s dup=0 drop=5074 speed=0.0961x
frame= 1274 fps=2.9 q=25.0 size=    4643kB time=00:00:42.43 bitrate= 896.3kbits/s dup=0 drop=5082 speed=0.0961x
frame= 1276 fps=2.9 q=25.0 size=    4646kB time=00:00:42.50 bitrate= 895.5kbits/s dup=0 drop=5090 speed=0.0961x
frame= 1278 fps=2.9 q=25.0 size=    4649kB time=00:00:42.56 bitrate= 894.8kbits/s dup=0 drop=5098 speed=0.0961x
frame= 1280 fps=2.9 q=25.0 size=    4653kB time=00:00:42.63 bitrate= 894.0kbits/s dup=0 drop=5106 speed=0.0962x
frame= 1281 fps=2.9 q=25.0 size=    4654kB time=00:00:42.66 bitrate= 893.6kbits/s dup=0 drop=5112 speed=0.0961x
frame= 1282 fps=2.9 q=25.0 size=    4656kB time=00:00:42.70 bitrate= 893.3kbits/s dup=0 drop=5117 speed=0.0961x
frame= 1284 fps=2.9 q=25.0 size=    4659kB time=00:00:42.76 bitrate= 892.5kbits/s dup=0 drop=5122 speed=0.0961x
frame= 1285 fps=2.9 q=25.0 size=    4661kB time=00:00:42.80 bitrate= 892.2kbits/s dup=0 drop=5127 speed=0.0961x
frame= 1287 fps=2.9 q=25.0 size=    4664kB time=00:00:42.86 bitrate= 891.4kbits/s dup=0 drop=5134 speed=0.0961x
frame= 1289 fps=2.9 q=25.0 size=    4668kB time=00:00:42.93 bitrate= 890.6kbits/s dup=0 drop=5142 speed=0.0961x
frame= 1291 fps=2.9 q=25.0 size=    4671kB time=00:00:43.00 bitrate= 889.9kbits/s dup=0 drop=5150 speed=0.0962x
frame= 1293 fps=2.9 q=25.0 size=    4674kB time=00:00:43.06 bitrate= 889.1kbits/s dup=0 drop=5158 speed=0.0962x
frame= 1295 fps=2.9 q=25.0 size=    4678kB time=00:00:43.13 bitrate= 888.4kbits/s dup=0 drop=5166 speed=0.0962x
frame= 1296 fps=2.9 q=25.0 size=    4679kB time=00:00:43.16 bitrate= 888.0kbits/s dup=0 drop=5170 speed=0.0962x
frame= 1297 fps=2.9 q=25.0 size=    4681kB time=00:00:43.20 bitrate= 887.7kbits/s dup=0 drop=5175 speed=0.0962x
frame= 1298 fps=2.9 q=25.0 size=    4683kB time=00:00:43.23 bitrate= 887.3kbits/s dup=0 drop=5179 speed=0.0961x
frame= 1300 fps=2.9 q=25.0 size=    4686kB time=00:00:43.30 bitrate= 886.6kbits/s dup=0 drop=5186 speed=0.0962x
frame= 1302 fps=2.9 q=25.0 size=    4690kB time=00:00:43.36 bitrate= 885.9kbits/s dup=0 drop=5194 speed=0.0962x
frame= 1303 fps=2.9 q=25.0 size=    4691kB time=00:00:43.40 bitrate= 885.5kbits/s dup=0 drop=5200 speed=0.0961x
frame= 1305 fps=2.9 q=25.0 size=    4695kB time=00:00:43.46 bitrate= 884.8kbits/s dup=0 drop=5206 speed=0.0962x
frame= 1307 fps=2.9 q=25.0 size=    4698kB time=00:00:43.53 bitrate= 884.1kbits/s dup=0 drop=5214 speed=0.0962x
frame= 1308 fps=2.9 q=25.0 size=    4700kB time=00:00:43.56 bitrate= 883.7kbits/s dup=0 drop=5218 speed=0.0962x
frame= 1309 fps=2.9 q=25.0 size=    4701kB time=00:00:43.60 bitrate= 883.3kbits/s dup=0 drop=5225 speed=0.0962x
frame= 1311 fps=2.9 q=25.0 size=    4705kB time=00:00:43.66 bitrate= 882.6kbits/s dup=0 drop=5230 speed=0.0962x
frame= 1313 fps=2.9 q=25.0 size=    4708kB time=00:00:43.73 bitrate= 881.9kbits/s dup=0 drop=5238 speed=0.0962x
frame= 1314 fps=2.9 q=25.0 size=    4710kB time=00:00:43.76 bitrate= 881.5kbits/s dup=0 drop=5245 speed=0.0962x
frame= 1316 fps=2.9 q=25.0 size=    4713kB time=00:00:43.83 bitrate= 880.8kbits/s dup=0 drop=5250 speed=0.0962x
frame= 1318 fps=2.9 q=25.0 size=    4716kB time=00:00:43.90 bitrate= 880.1kbits/s dup=0 drop=5258 speed=0.0962x
frame= 1320 fps=2.9 q=25.0 size=    4720kB time=00:00:43.96 bitrate= 879.4kbits/s dup=0 drop=5266 speed=0.0963x
frame= 1321 fps=2.9 q=25.0 size=    4721kB time=00:00:44.00 bitrate= 879.0kbits/s dup=0 drop=5273 speed=0.0962x
frame= 1323 fps=2.9 q=25.0 size=    4725kB time=00:00:44.06 bitrate= 878.3kbits/s dup=0 drop=5278 speed=0.0963x
frame= 1324 fps=2.9 q=25.0 size=    4726kB time=00:00:44.10 bitrate= 877.9kbits/s dup=0 drop=5284 speed=0.0962x
frame= 1326 fps=2.9 q=25.0 size=    4730kB time=00:00:44.16 bitrate= 877.2kbits/s dup=0 drop=5290 speed=0.0963x
frame= 1328 fps=2.9 q=25.0 size=    4733kB time=00:00:44.23 bitrate= 876.5kbits/s dup=0 drop=5298 speed=0.0963x
frame= 1330 fps=2.9 q=25.0 size=    4736kB time=00:00:44.30 bitrate= 875.8kbits/s dup=0 drop=5306 speed=0.0963x
frame= 1332 fps=2.9 q=25.0 size=    4739kB time=00:00:44.36 bitrate= 875.1kbits/s dup=0 drop=5314 speed=0.0963x
frame= 1333 fps=2.9 q=25.0 size=    4741kB time=00:00:44.40 bitrate= 874.8kbits/s dup=0 drop=5319 speed=0.0963x
frame= 1335 fps=2.9 q=25.0 size=    4745kB time=00:00:44.46 bitrate= 874.2kbits/s dup=0 drop=5326 speed=0.0963x
frame= 1336 fps=2.9 q=25.0 size=    4747kB time=00:00:44.50 bitrate= 873.9kbits/s dup=0 drop=5331 speed=0.0963x
frame= 1338 fps=2.9 q=25.0 size=    4751kB time=00:00:44.56 bitrate= 873.2kbits/s dup=0 drop=5338 speed=0.0963x
frame= 1339 fps=2.9 q=25.0 size=    4753kB time=00:00:44.60 bitrate= 872.9kbits/s dup=0 drop=5344 speed=0.0963x
frame= 1341 fps=2.9 q=25.0 size=    4756kB time=00:00:44.66 bitrate= 872.3kbits/s dup=0 drop=5350 speed=0.0963x
frame= 1342 fps=2.9 q=25.0 size=    4758kB time=00:00:44.70 bitrate= 872.0kbits/s dup=0 drop=5356 speed=0.0963x
frame= 1344 fps=2.9 q=25.0 size=    4762kB time=00:00:44.76 bitrate= 871.3kbits/s dup=0 drop=5362 speed=0.0963x
frame= 1345 fps=2.9 q=25.0 size=    4763kB time=00:00:44.80 bitrate= 871.0kbits/s dup=0 drop=5367 speed=0.0963x
frame= 1346 fps=2.9 q=25.0 size=    4765kB time=00:00:44.83 bitrate= 870.7kbits/s dup=0 drop=5373 speed=0.0962x
frame= 1348 fps=2.9 q=25.0 size=    4769kB time=00:00:44.90 bitrate= 870.0kbits/s dup=0 drop=5378 speed=0.0963x
frame= 1349 fps=2.9 q=25.0 size=    4770kB time=00:00:44.93 bitrate= 869.7kbits/s dup=0 drop=5384 speed=0.0962x
frame= 1351 fps=2.9 q=25.0 size=    4774kB time=00:00:45.00 bitrate= 869.0kbits/s dup=0 drop=5390 speed=0.0963x
frame= 1352 fps=2.9 q=25.0 size=    4776kB time=00:00:45.03 bitrate= 868.7kbits/s dup=0 drop=5396 speed=0.0962x
frame= 1354 fps=2.9 q=25.0 size=    4779kB time=00:00:45.10 bitrate= 868.1kbits/s dup=0 drop=5402 speed=0.0963x
frame= 1355 fps=2.9 q=25.0 size=    4781kB time=00:00:45.13 bitrate= 867.7kbits/s dup=0 drop=5408 speed=0.0962x
frame= 1357 fps=2.9 q=25.0 size=    4784kB time=00:00:45.20 bitrate= 867.1kbits/s dup=0 drop=5414 speed=0.0963x
frame= 1358 fps=2.9 q=25.0 size=    4786kB time=00:00:45.23 bitrate= 866.8kbits/s dup=0 drop=5418 speed=0.0962x
frame= 1359 fps=2.9 q=25.0 size=    4788kB time=00:00:45.26 bitrate= 866.4kbits/s dup=0 drop=5425 speed=0.0962x
frame= 1361 fps=2.9 q=25.0 size=    4791kB time=00:00:45.33 bitrate= 865.8kbits/s dup=0 drop=5430 speed=0.0962x
frame= 1362 fps=2.9 q=25.0 size=    4793kB time=00:00:45.36 bitrate= 865.5kbits/s dup=0 drop=5435 speed=0.0962x
frame= 1364 fps=2.9 q=25.0 size=    4796kB time=00:00:45.43 bitrate= 864.8kbits/s dup=0 drop=5442 speed=0.0962x
frame= 1365 fps=2.9 q=25.0 size=    4798kB time=00:00:45.46 bitrate= 864.5kbits/s dup=0 drop=5448 speed=0.0962x
frame= 1367 fps=2.9 q=25.0 size=    4802kB time=00:00:45.53 bitrate= 863.8kbits/s dup=0 drop=5454 speed=0.0962x
frame= 1368 fps=2.9 q=25.0 size=    4803kB time=00:00:45.56 bitrate= 863.5kbits/s dup=0 drop=5459 speed=0.0962x
frame= 1370 fps=2.9 q=25.0 size=    4807kB time=00:00:45.63 bitrate= 862.9kbits/s dup=0 drop=5466 speed=0.0962x
frame= 1371 fps=2.9 q=25.0 size=    4808kB time=00:00:45.66 bitrate= 862.5kbits/s dup=0 drop=5470 speed=0.0962x
frame= 1372 fps=2.9 q=25.0 size=    4810kB time=00:00:45.70 bitrate= 862.2kbits/s dup=0 drop=5477 speed=0.0961x
frame= 1374 fps=2.9 q=25.0 size=    4814kB time=00:00:45.76 bitrate= 861.6kbits/s dup=0 drop=5482 speed=0.0962x
frame= 1375 fps=2.9 q=25.0 size=    4815kB time=00:00:45.80 bitrate= 861.3kbits/s dup=0 drop=5487 speed=0.0961x
frame= 1377 fps=2.9 q=25.0 size=    4819kB time=00:00:45.86 bitrate= 860.6kbits/s dup=0 drop=5494 speed=0.0961x
frame= 1378 fps=2.9 q=25.0 size=    4821kB time=00:00:45.90 bitrate= 860.3kbits/s dup=0 drop=5498 speed=0.0961x
frame= 1379 fps=2.9 q=25.0 size=    4822kB time=00:00:45.93 bitrate= 860.0kbits/s dup=0 drop=5504 speed=0.0961x
frame= 1381 fps=2.9 q=25.0 size=    4826kB time=00:00:46.00 bitrate= 859.4kbits/s dup=0 drop=5510 speed=0.0961x
frame= 1382 fps=2.9 q=25.0 size=    4828kB time=00:00:46.03 bitrate= 859.1kbits/s dup=0 drop=5515 speed=0.0961x
frame= 1384 fps=2.9 q=25.0 size=    4831kB time=00:00:46.10 bitrate= 858.5kbits/s dup=0 drop=5522 speed=0.0961x
frame= 1385 fps=2.9 q=25.0 size=    4833kB time=00:00:46.13 bitrate= 858.2kbits/s dup=0 drop=5527 speed=0.0961x
frame= 1387 fps=2.9 q=25.0 size=    4836kB time=00:00:46.20 bitrate= 857.6kbits/s dup=0 drop=5534 speed=0.0961x
frame= 1388 fps=2.9 q=25.0 size=    4838kB time=00:00:46.23 bitrate= 857.2kbits/s dup=0 drop=5540 speed=0.0961x
frame= 1390 fps=2.9 q=25.0 size=    4841kB time=00:00:46.30 bitrate= 856.6kbits/s dup=0 drop=5546 speed=0.0961x
frame= 1391 fps=2.9 q=25.0 size=    4843kB time=00:00:46.33 bitrate= 856.3kbits/s dup=0 drop=5551 speed=0.0961x
frame= 1393 fps=2.9 q=25.0 size=    4847kB time=00:00:46.40 bitrate= 855.7kbits/s dup=0 drop=5558 speed=0.0961x
frame= 1402 fps=2.9 q=25.0 size=    4862kB time=00:00:46.70 bitrate= 852.9kbits/s dup=0 drop=5594 speed=0.0961x
frame= 1408 fps=2.9 q=25.0 size=    4872kB time=00:00:46.90 bitrate= 851.0kbits/s dup=0 drop=5618 speed=0.0961x
frame= 1410 fps=2.9 q=25.0 size=    4875kB time=00:00:46.96 bitrate= 850.4kbits/s dup=0 drop=5626 speed=0.0961x
frame= 1417 fps=2.9 q=25.0 size=    4887kB time=00:00:47.20 bitrate= 848.2kbits/s dup=0 drop=5655 speed=0.0959x
frame= 1418 fps=2.9 q=25.0 size=    4889kB time=00:00:47.23 bitrate= 847.9kbits/s dup=0 drop=5660 speed=0.0959x
frame= 1420 fps=2.9 q=25.0 size=    4892kB time=00:00:47.30 bitrate= 847.3kbits/s dup=0 drop=5666 speed=0.0959x
frame= 1421 fps=2.9 q=25.0 size=    4894kB time=00:00:47.33 bitrate= 847.0kbits/s dup=0 drop=5671 speed=0.0959x
frame= 1422 fps=2.9 q=25.0 size=    4896kB time=00:00:47.36 bitrate= 846.7kbits/s dup=0 drop=5677 speed=0.0959x
frame= 1424 fps=2.9 q=25.0 size=    4899kB time=00:00:47.43 bitrate= 846.0kbits/s dup=0 drop=5683 speed=0.0959x
frame= 1426 fps=2.9 q=25.0 size=    4902kB time=00:00:47.50 bitrate= 845.4kbits/s dup=0 drop=5690 speed=0.0959x
frame= 1429 fps=2.9 q=25.0 size=    4907kB time=00:00:47.60 bitrate= 844.5kbits/s dup=0 drop=5705 speed=0.0959x
frame= 1432 fps=2.9 q=25.0 size=    4912kB time=00:00:47.70 bitrate= 843.6kbits/s dup=0 drop=5714 speed=0.0959x
frame= 1433 fps=2.9 q=25.0 size=    4914kB time=00:00:47.73 bitrate= 843.3kbits/s dup=0 drop=5718 speed=0.0959x
frame= 1434 fps=2.9 q=25.0 size=    4915kB time=00:00:47.76 bitrate= 843.0kbits/s dup=0 drop=5724 speed=0.0959x
frame= 1436 fps=2.9 q=25.0 size=    4919kB time=00:00:47.83 bitrate= 842.4kbits/s dup=0 drop=5730 speed=0.0959x
frame= 1437 fps=2.9 q=25.0 size=    4920kB time=00:00:47.86 bitrate= 842.1kbits/s dup=0 drop=5734 speed=0.0958x
frame= 1438 fps=2.9 q=25.0 size=    4922kB time=00:00:47.90 bitrate= 841.8kbits/s dup=0 drop=5740 speed=0.0958x
frame= 1440 fps=2.9 q=25.0 size=    4925kB time=00:00:47.96 bitrate= 841.2kbits/s dup=0 drop=5746 speed=0.0958x
frame= 1442 fps=2.9 q=25.0 size=    4928kB time=00:00:48.03 bitrate= 840.5kbits/s dup=0 drop=5754 speed=0.0958x
frame= 1444 fps=2.9 q=25.0 size=    4931kB time=00:00:48.10 bitrate= 839.9kbits/s dup=0 drop=5762 speed=0.0958x
frame= 1446 fps=2.9 q=25.0 size=    4935kB time=00:00:48.16 bitrate= 839.3kbits/s dup=0 drop=5770 speed=0.0959x
frame= 1448 fps=2.9 q=25.0 size=    4938kB time=00:00:48.23 bitrate= 838.7kbits/s dup=0 drop=5778 speed=0.0959x
frame= 1449 fps=2.9 q=25.0 size=    4940kB time=00:00:48.26 bitrate= 838.4kbits/s dup=0 drop=5782 speed=0.0958x
frame= 1450 fps=2.9 q=25.0 size=    4941kB time=00:00:48.30 bitrate= 838.1kbits/s dup=0 drop=5787 speed=0.0958x
frame= 1452 fps=2.9 q=25.0 size=    4945kB time=00:00:48.36 bitrate= 837.5kbits/s dup=0 drop=5794 speed=0.0958x
frame= 1454 fps=2.9 q=25.0 size=    4948kB time=00:00:48.43 bitrate= 836.9kbits/s dup=0 drop=5802 speed=0.0959x
frame= 1455 fps=2.9 q=25.0 size=    4950kB time=00:00:48.46 bitrate= 836.7kbits/s dup=0 drop=5808 speed=0.0958x
frame= 1457 fps=2.9 q=25.0 size=    4953kB time=00:00:48.53 bitrate= 836.1kbits/s dup=0 drop=5814 speed=0.0959x
frame= 1459 fps=2.9 q=25.0 size=    4957kB time=00:00:48.60 bitrate= 835.5kbits/s dup=0 drop=5822 speed=0.0959x
frame= 1460 fps=2.9 q=25.0 size=    4958kB time=00:00:48.63 bitrate= 835.2kbits/s dup=0 drop=5828 speed=0.0959x
frame= 1462 fps=2.9 q=25.0 size=    4962kB time=00:00:48.70 bitrate= 834.6kbits/s dup=0 drop=5834 speed=0.0959x
frame= 1464 fps=2.9 q=25.0 size=    4965kB time=00:00:48.76 bitrate= 834.1kbits/s dup=0 drop=5842 speed=0.0959x
frame= 1467 fps=2.9 q=25.0 size=    4970kB time=00:00:48.86 bitrate= 833.2kbits/s dup=0 drop=5856 speed=0.0959x
frame= 1490 fps=2.9 q=26.0 size=    5022kB time=00:00:49.63 bitrate= 828.8kbits/s dup=0 drop=5946 speed=0.0961x
frame= 1492 fps=2.9 q=25.0 size=    5025kB time=00:00:49.70 bitrate= 828.3kbits/s dup=0 drop=5954 speed=0.0961x
frame= 1494 fps=2.9 q=25.0 size=    5029kB time=00:00:49.76 bitrate= 827.8kbits/s dup=0 drop=5962 speed=0.0961x
frame= 1495 fps=2.9 q=25.0 size=    5031kB time=00:00:49.80 bitrate= 827.6kbits/s dup=0 drop=5968 speed=0.0961x
frame= 1497 fps=2.9 q=25.0 size=    5035kB time=00:00:49.86 bitrate= 827.1kbits/s dup=0 drop=5974 speed=0.0961x
frame= 1499 fps=2.9 q=25.0 size=    5038kB time=00:00:49.93 bitrate= 826.6kbits/s dup=0 drop=5982 speed=0.0961x
frame= 1500 fps=2.9 q=25.0 size=    5040kB time=00:00:49.96 bitrate= 826.3kbits/s dup=0 drop=5989 speed=0.0961x
frame= 1502 fps=2.9 q=25.0 size=    5044kB time=00:00:50.03 bitrate= 825.9kbits/s dup=0 drop=5994 speed=0.0961x
frame= 1504 fps=2.9 q=25.0 size=    5048kB time=00:00:50.10 bitrate= 825.4kbits/s dup=0 drop=6002 speed=0.0961x
frame= 1505 fps=2.9 q=25.0 size=    5049kB time=00:00:50.13 bitrate= 825.1kbits/s dup=0 drop=6009 speed=0.0961x
frame= 1507 fps=2.9 q=25.0 size=    5053kB time=00:00:50.20 bitrate= 824.6kbits/s dup=0 drop=6014 speed=0.0961x
frame= 1508 fps=2.9 q=25.0 size=    5055kB time=00:00:50.23 bitrate= 824.4kbits/s dup=0 drop=6020 speed=0.0961x
frame= 1510 fps=2.9 q=25.0 size=    5059kB time=00:00:50.30 bitrate= 823.8kbits/s dup=0 drop=6026 speed=0.0961x
frame= 1511 fps=2.9 q=25.0 size=    5060kB time=00:00:50.33 bitrate= 823.6kbits/s dup=0 drop=6031 speed=0.0961x
frame= 1513 fps=2.9 q=25.0 size=    5064kB time=00:00:50.40 bitrate= 823.1kbits/s dup=0 drop=6038 speed=0.0961x
frame= 1514 fps=2.9 q=25.0 size=    5066kB time=00:00:50.43 bitrate= 822.9kbits/s dup=0 drop=6043 speed=0.0961x
frame= 1516 fps=2.9 q=25.0 size=    5070kB time=00:00:50.50 bitrate= 822.4kbits/s dup=0 drop=6050 speed=0.0961x
frame= 1517 fps=2.9 q=25.0 size=    5071kB time=00:00:50.53 bitrate= 822.1kbits/s dup=0 drop=6054 speed=0.0961x
frame= 1520 fps=2.9 q=25.0 size=    5077kB time=00:00:50.63 bitrate= 821.4kbits/s dup=0 drop=6066 speed=0.0961x
frame= 1523 fps=2.9 q=25.0 size=    5082kB time=00:00:50.73 bitrate= 820.6kbits/s dup=0 drop=6078 speed=0.0961x
frame= 1526 fps=2.9 q=25.0 size=    5087kB time=00:00:50.83 bitrate= 819.8kbits/s dup=0 drop=6090 speed=0.0961x
frame= 1529 fps=2.9 q=25.0 size=    5092kB time=00:00:50.93 bitrate= 819.0kbits/s dup=0 drop=6102 speed=0.0961x
frame= 1569 fps=2.9 q=25.0 size=    5162kB time=00:00:52.26 bitrate= 809.0kbits/s dup=0 drop=6262 speed=0.0961x
frame= 1571 fps=2.9 q=25.0 size=    5165kB time=00:00:52.33 bitrate= 808.5kbits/s dup=0 drop=6270 speed=0.0961x
frame= 1572 fps=2.9 q=25.0 size=    5167kB time=00:00:52.36 bitrate= 808.3kbits/s dup=0 drop=6274 speed=0.0961x
frame= 1574 fps=2.9 q=25.0 size=    5170kB time=00:00:52.43 bitrate= 807.8kbits/s dup=0 drop=6282 speed=0.0961x
frame= 1577 fps=2.9 q=25.0 size=    5176kB time=00:00:52.53 bitrate= 807.1kbits/s dup=0 drop=6294 speed=0.0961x
frame= 1580 fps=2.9 q=25.0 size=    5181kB time=00:00:52.63 bitrate= 806.4kbits/s dup=0 drop=6306 speed=0.0961x
frame= 1583 fps=2.9 q=25.0 size=    5186kB time=00:00:52.73 bitrate= 805.6kbits/s dup=0 drop=6318 speed=0.0961x
frame= 1588 fps=2.9 q=25.0 size=    5195kB time=00:00:52.90 bitrate= 804.5kbits/s dup=0 drop=6338 speed=0.0961x
frame= 1591 fps=2.9 q=25.0 size=    5200kB time=00:00:53.00 bitrate= 803.7kbits/s dup=0 drop=6350 speed=0.0961x
frame= 1594 fps=2.9 q=25.0 size=    5205kB time=00:00:53.10 bitrate= 803.0kbits/s dup=0 drop=6362 speed=0.0961x
frame= 1595 fps=2.9 q=25.0 size=    5207kB time=00:00:53.13 bitrate= 802.7kbits/s dup=0 drop=6369 speed=0.0961x
frame= 1597 fps=2.9 q=25.0 size=    5210kB time=00:00:53.20 bitrate= 802.3kbits/s dup=0 drop=6374 speed=0.0961x
frame= 1600 fps=2.9 q=25.0 size=    5215kB time=00:00:53.30 bitrate= 801.5kbits/s dup=0 drop=6386 speed=0.0961x
frame= 1603 fps=2.9 q=25.0 size=    5220kB time=00:00:53.40 bitrate= 800.8kbits/s dup=0 drop=6398 speed=0.0961x
frame= 1605 fps=2.9 q=25.0 size=    5223kB time=00:00:53.46 bitrate= 800.3kbits/s dup=0 drop=6406 speed=0.0961x
frame= 1608 fps=2.9 q=25.0 size=    5228kB time=00:00:53.56 bitrate= 799.6kbits/s dup=0 drop=6418 speed=0.0961x
frame= 1610 fps=2.9 q=25.0 size=    5232kB time=00:00:53.63 bitrate= 799.1kbits/s dup=0 drop=6426 speed=0.0961x
frame= 1611 fps=2.9 q=25.0 size=    5234kB time=00:00:53.66 bitrate= 798.9kbits/s dup=0 drop=6432 speed=0.0961x
frame= 1613 fps=2.9 q=25.0 size=    5237kB time=00:00:53.73 bitrate= 798.4kbits/s dup=0 drop=6438 speed=0.0961x
frame= 1615 fps=2.9 q=25.0 size=    5240kB time=00:00:53.80 bitrate= 798.0kbits/s dup=0 drop=6446 speed=0.0961x
frame= 1616 fps=2.9 q=25.0 size=    5242kB time=00:00:53.83 bitrate= 797.7kbits/s dup=0 drop=6451 speed=0.0961x
frame= 1619 fps=2.9 q=25.0 size=    5247kB time=00:00:53.93 bitrate= 797.0kbits/s dup=0 drop=6462 speed=0.0961x
frame= 1621 fps=2.9 q=25.0 size=    5251kB time=00:00:54.00 bitrate= 796.5kbits/s dup=0 drop=6470 speed=0.0961x
frame= 1622 fps=2.9 q=25.0 size=    5252kB time=00:00:54.03 bitrate= 796.3kbits/s dup=0 drop=6474 speed=0.0961x
frame= 1624 fps=2.9 q=25.0 size=    5256kB time=00:00:54.10 bitrate= 795.9kbits/s dup=0 drop=6482 speed=0.0961x
frame= 1626 fps=2.9 q=25.0 size=    5259kB time=00:00:54.16 bitrate= 795.4kbits/s dup=0 drop=6490 speed=0.0961x
frame= 1627 fps=2.9 q=25.0 size=    5261kB time=00:00:54.20 bitrate= 795.2kbits/s dup=0 drop=6497 speed=0.0961x
frame= 1629 fps=2.9 q=25.0 size=    5264kB time=00:00:54.26 bitrate= 794.7kbits/s dup=0 drop=6503 speed=0.0961x
frame= 1631 fps=2.9 q=25.0 size=    5267kB time=00:00:54.33 bitrate= 794.2kbits/s dup=0 drop=6510 speed=0.0962x
frame= 1633 fps=2.9 q=25.0 size=    5271kB time=00:00:54.40 bitrate= 793.7kbits/s dup=0 drop=6518 speed=0.0962x
frame= 1635 fps=2.9 q=25.0 size=    5274kB time=00:00:54.46 bitrate= 793.3kbits/s dup=0 drop=6526 speed=0.0962x
frame= 1637 fps=2.9 q=25.0 size=    5278kB time=00:00:54.53 bitrate= 792.8kbits/s dup=0 drop=6534 speed=0.0962x
frame= 1638 fps=2.9 q=25.0 size=    5279kB time=00:00:54.56 bitrate= 792.6kbits/s dup=0 drop=6540 speed=0.0962x
frame= 1640 fps=2.9 q=25.0 size=    5283kB time=00:00:54.63 bitrate= 792.1kbits/s dup=0 drop=6546 speed=0.0962x
frame= 1642 fps=2.9 q=25.0 size=    5286kB time=00:00:54.70 bitrate= 791.6kbits/s dup=0 drop=6554 speed=0.0962x
frame= 1643 fps=2.9 q=25.0 size=    5288kB time=00:00:54.73 bitrate= 791.4kbits/s dup=0 drop=6561 speed=0.0962x
frame= 1645 fps=2.9 q=25.0 size=    5291kB time=00:00:54.80 bitrate= 790.9kbits/s dup=0 drop=6566 speed=0.0962x
frame= 1647 fps=2.9 q=25.0 size=    5294kB time=00:00:54.86 bitrate= 790.5kbits/s dup=0 drop=6574 speed=0.0963x
frame= 1648 fps=2.9 q=25.0 size=    5296kB time=00:00:54.90 bitrate= 790.2kbits/s dup=0 drop=6580 speed=0.0962x
frame= 1650 fps=2.9 q=25.0 size=    5299kB time=00:00:54.96 bitrate= 789.8kbits/s dup=0 drop=6586 speed=0.0963x
frame= 1651 fps=2.9 q=25.0 size=    5301kB time=00:00:55.00 bitrate= 789.5kbits/s dup=0 drop=6591 speed=0.0963x
frame= 1653 fps=2.9 q=25.0 size=    5304kB time=00:00:55.06 bitrate= 789.1kbits/s dup=0 drop=6598 speed=0.0963x
frame= 1654 fps=2.9 q=25.0 size=    5306kB time=00:00:55.10 bitrate= 788.9kbits/s dup=0 drop=6604 speed=0.0962x
frame= 1656 fps=2.9 q=25.0 size=    5309kB time=00:00:55.16 bitrate= 788.4kbits/s dup=0 drop=6610 speed=0.0963x
frame= 1657 fps=2.9 q=25.0 size=    5311kB time=00:00:55.20 bitrate= 788.2kbits/s dup=0 drop=6617 speed=0.0962x
frame= 1659 fps=2.9 q=25.0 size=    5314kB time=00:00:55.26 bitrate= 787.7kbits/s dup=0 drop=6622 speed=0.0963x
frame= 1661 fps=2.9 q=25.0 size=    5318kB time=00:00:55.33 bitrate= 787.3kbits/s dup=0 drop=6630 speed=0.0963x
frame= 1663 fps=2.9 q=25.0 size=    5321kB time=00:00:55.40 bitrate= 786.8kbits/s dup=0 drop=6638 speed=0.0963x
frame= 1664 fps=2.9 q=25.0 size=    5322kB time=00:00:55.43 bitrate= 786.5kbits/s dup=0 drop=6643 speed=0.0963x
frame= 1666 fps=2.9 q=25.0 size=    5326kB time=00:00:55.50 bitrate= 786.1kbits/s dup=0 drop=6650 speed=0.0963x
frame= 1667 fps=2.9 q=25.0 size=    5327kB time=00:00:55.53 bitrate= 785.9kbits/s dup=0 drop=6657 speed=0.0963x
frame= 1669 fps=2.9 q=25.0 size=    5331kB time=00:00:55.60 bitrate= 785.4kbits/s dup=0 drop=6662 speed=0.0963x
frame= 1670 fps=2.9 q=25.0 size=    5333kB time=00:00:55.63 bitrate= 785.2kbits/s dup=0 drop=6669 speed=0.0963x
frame= 1672 fps=2.9 q=25.0 size=    5336kB time=00:00:55.70 bitrate= 784.8kbits/s dup=0 drop=6674 speed=0.0963x
frame= 1673 fps=2.9 q=25.0 size=    5338kB time=00:00:55.73 bitrate= 784.6kbits/s dup=0 drop=6681 speed=0.0963x
frame= 1675 fps=2.9 q=25.0 size=    5341kB time=00:00:55.80 bitrate= 784.1kbits/s dup=0 drop=6686 speed=0.0963x
frame= 1677 fps=2.9 q=25.0 size=    5344kB time=00:00:55.86 bitrate= 783.7kbits/s dup=0 drop=6694 speed=0.0963x
frame= 1678 fps=2.9 q=25.0 size=    5346kB time=00:00:55.90 bitrate= 783.5kbits/s dup=0 drop=6699 speed=0.0963x
frame= 1680 fps=2.9 q=25.0 size=    5350kB time=00:00:55.96 bitrate= 783.0kbits/s dup=0 drop=6706 speed=0.0963x
frame= 1681 fps=2.9 q=25.0 size=    5351kB time=00:00:56.00 bitrate= 782.8kbits/s dup=0 drop=6711 speed=0.0963x
frame= 1682 fps=2.9 q=25.0 size=    5353kB time=00:00:56.03 bitrate= 782.6kbits/s dup=0 drop=6717 speed=0.0963x
frame= 1684 fps=2.9 q=25.0 size=    5356kB time=00:00:56.10 bitrate= 782.1kbits/s dup=0 drop=6722 speed=0.0963x
frame= 1685 fps=2.9 q=25.0 size=    5358kB time=00:00:56.13 bitrate= 781.9kbits/s dup=0 drop=6727 speed=0.0963x
frame= 1687 fps=2.9 q=25.0 size=    5361kB time=00:00:56.20 bitrate= 781.4kbits/s dup=0 drop=6734 speed=0.0963x
frame= 1688 fps=2.9 q=25.0 size=    5363kB time=00:00:56.23 bitrate= 781.2kbits/s dup=0 drop=6741 speed=0.0963x
frame= 1690 fps=2.9 q=25.0 size=    5366kB time=00:00:56.30 bitrate= 780.8kbits/s dup=0 drop=6746 speed=0.0963x
frame= 1691 fps=2.9 q=25.0 size=    5367kB time=00:00:56.33 bitrate= 780.5kbits/s dup=0 drop=6752 speed=0.0963x
frame= 1693 fps=2.9 q=25.0 size=    5371kB time=00:00:56.40 bitrate= 780.1kbits/s dup=0 drop=6758 speed=0.0963x
frame= 1694 fps=2.9 q=25.0 size=    5373kB time=00:00:56.43 bitrate= 779.9kbits/s dup=0 drop=6763 speed=0.0963x
frame= 1696 fps=2.9 q=25.0 size=    5376kB time=00:00:56.50 bitrate= 779.5kbits/s dup=0 drop=6770 speed=0.0963x
frame= 1697 fps=2.9 q=25.0 size=    5378kB time=00:00:56.53 bitrate= 779.2kbits/s dup=0 drop=6774 speed=0.0962x
frame= 1699 fps=2.9 q=25.0 size=    5381kB time=00:00:56.60 bitrate= 778.8kbits/s dup=0 drop=6782 speed=0.0962x
frame= 1700 fps=2.9 q=25.0 size=    5382kB time=00:00:56.63 bitrate= 778.6kbits/s dup=0 drop=6789 speed=0.0962x
frame= 1702 fps=2.9 q=25.0 size=    5386kB time=00:00:56.70 bitrate= 778.1kbits/s dup=0 drop=6794 speed=0.0962x
frame= 1703 fps=2.9 q=25.0 size=    5387kB time=00:00:56.73 bitrate= 777.9kbits/s dup=0 drop=6800 speed=0.0962x
frame= 1705 fps=2.9 q=25.0 size=    5391kB time=00:00:56.80 bitrate= 777.5kbits/s dup=0 drop=6806 speed=0.0962x
frame= 1706 fps=2.9 q=25.0 size=    5392kB time=00:00:56.83 bitrate= 777.3kbits/s dup=0 drop=6812 speed=0.0962x
frame= 1708 fps=2.9 q=25.0 size=    5396kB time=00:00:56.90 bitrate= 776.8kbits/s dup=0 drop=6818 speed=0.0962x
frame= 1709 fps=2.9 q=25.0 size=    5398kB time=00:00:56.93 bitrate= 776.6kbits/s dup=0 drop=6824 speed=0.0962x
frame= 1711 fps=2.9 q=25.0 size=    5401kB time=00:00:57.00 bitrate= 776.3kbits/s dup=0 drop=6830 speed=0.0962x
frame= 1713 fps=2.9 q=25.0 size=    5405kB time=00:00:57.06 bitrate= 775.8kbits/s dup=0 drop=6838 speed=0.0963x
frame= 1714 fps=2.9 q=25.0 size=    5406kB time=00:00:57.10 bitrate= 775.6kbits/s dup=0 drop=6845 speed=0.0962x
frame= 1716 fps=2.9 q=25.0 size=    5409kB time=00:00:57.16 bitrate= 775.1kbits/s dup=0 drop=6850 speed=0.0963x
frame= 1718 fps=2.9 q=25.0 size=    5412kB time=00:00:57.23 bitrate= 774.7kbits/s dup=0 drop=6858 speed=0.0963x
frame= 1719 fps=2.9 q=25.0 size=    5414kB time=00:00:57.26 bitrate= 774.5kbits/s dup=0 drop=6864 speed=0.0963x
frame= 1721 fps=2.9 q=25.0 size=    5418kB time=00:00:57.33 bitrate= 774.1kbits/s dup=0 drop=6870 speed=0.0963x
frame= 1722 fps=2.9 q=25.0 size=    5419kB time=00:00:57.36 bitrate= 773.9kbits/s dup=0 drop=6877 speed=0.0962x
frame= 1724 fps=2.9 q=25.0 size=    5423kB time=00:00:57.43 bitrate= 773.5kbits/s dup=0 drop=6882 speed=0.0963x
frame= 1725 fps=2.9 q=25.0 size=    5424kB time=00:00:57.46 bitrate= 773.2kbits/s dup=0 drop=6887 speed=0.0963x
frame= 1727 fps=2.9 q=25.0 size=    5428kB time=00:00:57.53 bitrate= 772.8kbits/s dup=0 drop=6894 speed=0.0963x
frame= 1728 fps=2.9 q=25.0 size=    5429kB time=00:00:57.56 bitrate= 772.6kbits/s dup=0 drop=6901 speed=0.0963x
frame= 1730 fps=2.9 q=25.0 size=    5433kB time=00:00:57.63 bitrate= 772.2kbits/s dup=0 drop=6906 speed=0.0963x
frame= 1731 fps=2.9 q=25.0 size=    5435kB time=00:00:57.66 bitrate= 772.0kbits/s dup=0 drop=6912 speed=0.0963x
frame= 1733 fps=2.9 q=25.0 size=    5438kB time=00:00:57.73 bitrate= 771.6kbits/s dup=0 drop=6918 speed=0.0963x
frame= 1734 fps=2.9 q=25.0 size=    5440kB time=00:00:57.76 bitrate= 771.4kbits/s dup=0 drop=6924 speed=0.0962x
frame= 1736 fps=2.9 q=25.0 size=    5443kB time=00:00:57.83 bitrate= 771.0kbits/s dup=0 drop=6930 speed=0.0963x
frame= 1737 fps=2.9 q=25.0 size=    5445kB time=00:00:57.86 bitrate= 770.8kbits/s dup=0 drop=6936 speed=0.0962x
frame= 1739 fps=2.9 q=22.0 size=    5461kB time=00:00:57.93 bitrate= 772.2kbits/s dup=0 drop=6942 speed=0.0963x
frame= 1741 fps=2.9 q=25.0 size=    5464kB time=00:00:58.00 bitrate= 771.8kbits/s dup=0 drop=6950 speed=0.0963x
frame= 1743 fps=2.9 q=25.0 size=    5468kB time=00:00:58.06 bitrate= 771.4kbits/s dup=0 drop=6958 speed=0.0963x
frame= 1745 fps=2.9 q=25.0 size=    5472kB time=00:00:58.13 bitrate= 771.1kbits/s dup=0 drop=6966 speed=0.0963x
frame= 1747 fps=2.9 q=25.0 size=    5476kB time=00:00:58.20 bitrate= 770.8kbits/s dup=0 drop=6974 speed=0.0964x
frame= 1749 fps=2.9 q=25.0 size=    5480kB time=00:00:58.26 bitrate= 770.4kbits/s dup=0 drop=6982 speed=0.0964x
frame= 1750 fps=2.9 q=25.0 size=    5482kB time=00:00:58.30 bitrate= 770.2kbits/s dup=0 drop=6987 speed=0.0964x
frame= 1752 fps=2.9 q=25.0 size=    5485kB time=00:00:58.36 bitrate= 769.9kbits/s dup=0 drop=6994 speed=0.0964x
frame= 1754 fps=2.9 q=25.0 size=    5489kB time=00:00:58.43 bitrate= 769.5kbits/s dup=0 drop=7002 speed=0.0964x
frame= 1755 fps=2.9 q=25.0 size=    5491kB time=00:00:58.46 bitrate= 769.3kbits/s dup=0 drop=7008 speed=0.0964x
frame= 1757 fps=2.9 q=25.0 size=    5495kB time=00:00:58.53 bitrate= 769.0kbits/s dup=0 drop=7014 speed=0.0964x
frame= 1758 fps=2.9 q=25.0 size=    5496kB time=00:00:58.56 bitrate= 768.8kbits/s dup=0 drop=7018 speed=0.0964x
frame= 1760 fps=2.9 q=25.0 size=    5500kB time=00:00:58.63 bitrate= 768.4kbits/s dup=0 drop=7026 speed=0.0964x
frame= 1762 fps=2.9 q=25.0 size=    5503kB time=00:00:58.70 bitrate= 768.0kbits/s dup=0 drop=7034 speed=0.0964x
frame= 1764 fps=2.9 q=25.0 size=    5507kB time=00:00:58.76 bitrate= 767.6kbits/s dup=0 drop=7042 speed=0.0964x
frame= 1765 fps=2.9 q=25.0 size=    5509kB time=00:00:58.80 bitrate= 767.5kbits/s dup=0 drop=7046 speed=0.0964x
frame= 1766 fps=2.9 q=25.0 size=    5510kB time=00:00:58.83 bitrate= 767.3kbits/s dup=0 drop=7052 speed=0.0964x
frame= 1768 fps=2.9 q=25.0 size=    5514kB time=00:00:58.90 bitrate= 766.9kbits/s dup=0 drop=7058 speed=0.0964x
frame= 1769 fps=2.9 q=25.0 size=    5515kB time=00:00:58.93 bitrate= 766.7kbits/s dup=0 drop=7064 speed=0.0963x
frame= 1771 fps=2.9 q=25.0 size=    5519kB time=00:00:59.00 bitrate= 766.3kbits/s dup=0 drop=7070 speed=0.0964x
frame= 1772 fps=2.9 q=25.0 size=    5521kB time=00:00:59.03 bitrate= 766.1kbits/s dup=0 drop=7074 speed=0.0963x
frame= 1773 fps=2.9 q=25.0 size=    5523kB time=00:00:59.06 bitrate= 765.9kbits/s dup=0 drop=7078 speed=0.0963x
frame= 1774 fps=2.9 q=25.0 size=    5524kB time=00:00:59.10 bitrate= 765.7kbits/s dup=0 drop=7085 speed=0.0963x
frame= 1776 fps=2.9 q=25.0 size=    5528kB time=00:00:59.16 bitrate= 765.3kbits/s dup=0 drop=7090 speed=0.0963x
frame= 1777 fps=2.9 q=25.0 size=    5530kB time=00:00:59.20 bitrate= 765.2kbits/s dup=0 drop=7094 speed=0.0963x
frame= 1778 fps=2.9 q=25.0 size=    5531kB time=00:00:59.23 bitrate= 765.0kbits/s dup=0 drop=7100 speed=0.0962x
frame= 1780 fps=2.9 q=25.0 size=    5535kB time=00:00:59.30 bitrate= 764.6kbits/s dup=0 drop=7106 speed=0.0963x
frame= 1781 fps=2.9 q=25.0 size=    5537kB time=00:00:59.33 bitrate= 764.4kbits/s dup=0 drop=7111 speed=0.0962x
frame= 1783 fps=2.9 q=25.0 size=    5540kB time=00:00:59.40 bitrate= 764.0kbits/s dup=0 drop=7118 speed=0.0962x
frame= 1784 fps=2.9 q=25.0 size=    5542kB time=00:00:59.43 bitrate= 763.8kbits/s dup=0 drop=7123 speed=0.0962x
frame= 1786 fps=2.9 q=25.0 size=    5545kB time=00:00:59.50 bitrate= 763.4kbits/s dup=0 drop=7130 speed=0.0962x
frame= 1787 fps=2.9 q=25.0 size=    5547kB time=00:00:59.53 bitrate= 763.3kbits/s dup=0 drop=7135 speed=0.0962x
frame= 1789 fps=2.9 q=25.0 size=    5550kB time=00:00:59.60 bitrate= 762.9kbits/s dup=0 drop=7142 speed=0.0962x
frame= 1790 fps=2.9 q=25.0 size=    5552kB time=00:00:59.63 bitrate= 762.7kbits/s dup=0 drop=7148 speed=0.0962x
frame= 1792 fps=2.9 q=25.0 size=    5555kB time=00:00:59.70 bitrate= 762.3kbits/s dup=0 drop=7154 speed=0.0962x
frame= 1794 fps=2.9 q=25.0 size=    5559kB time=00:00:59.76 bitrate= 761.9kbits/s dup=0 drop=7162 speed=0.0962x
frame= 1796 fps=2.9 q=25.0 size=    5562kB time=00:00:59.83 bitrate= 761.6kbits/s dup=0 drop=7170 speed=0.0963x
frame= 1797 fps=2.9 q=25.0 size=    5564kB time=00:00:59.86 bitrate= 761.4kbits/s dup=0 drop=7177 speed=0.0962x
frame= 1799 fps=2.9 q=25.0 size=    5568kB time=00:00:59.93 bitrate= 761.0kbits/s dup=0 drop=7182 speed=0.0963x
frame= 1800 fps=2.9 q=25.0 size=    5570kB time=00:00:59.96 bitrate= 760.8kbits/s dup=0 drop=7189 speed=0.0962x
frame= 1802 fps=2.9 q=25.0 size=    5573kB time=00:01:00.03 bitrate= 760.5kbits/s dup=0 drop=7195 speed=0.0963x
frame= 1804 fps=2.9 q=25.0 size=    5577kB time=00:01:00.10 bitrate= 760.1kbits/s dup=0 drop=7202 speed=0.0963x
frame= 1806 fps=2.9 q=25.0 size=    5580kB time=00:01:00.16 bitrate= 759.7kbits/s dup=0 drop=7210 speed=0.0963x
frame= 1807 fps=2.9 q=25.0 size=    5582kB time=00:01:00.20 bitrate= 759.6kbits/s dup=0 drop=7216 speed=0.0963x
frame= 1809 fps=2.9 q=25.0 size=    5585kB time=00:01:00.26 bitrate= 759.2kbits/s dup=0 drop=7222 speed=0.0963x
frame= 1811 fps=2.9 q=25.0 size=    5588kB time=00:01:00.33 bitrate= 758.8kbits/s dup=0 drop=7230 speed=0.0963x
frame= 1812 fps=2.9 q=25.0 size=    5590kB time=00:01:00.36 bitrate= 758.6kbits/s dup=0 drop=7235 speed=0.0963x
frame= 1814 fps=2.9 q=25.0 size=    5594kB time=00:01:00.43 bitrate= 758.2kbits/s dup=0 drop=7242 speed=0.0963x
frame= 1815 fps=2.9 q=25.0 size=    5595kB time=00:01:00.46 bitrate= 758.0kbits/s dup=0 drop=7248 speed=0.0963x
frame= 1817 fps=2.9 q=25.0 size=    5599kB time=00:01:00.53 bitrate= 757.7kbits/s dup=0 drop=7254 speed=0.0963x
frame= 1818 fps=2.9 q=25.0 size=    5600kB time=00:01:00.56 bitrate= 757.5kbits/s dup=0 drop=7260 speed=0.0963x
frame= 1820 fps=2.9 q=25.0 size=    5604kB time=00:01:00.63 bitrate= 757.1kbits/s dup=0 drop=7266 speed=0.0963x
frame= 1821 fps=2.9 q=25.0 size=    5605kB time=00:01:00.66 bitrate= 756.9kbits/s dup=0 drop=7273 speed=0.0963x
frame= 1823 fps=2.9 q=25.0 size=    5609kB time=00:01:00.73 bitrate= 756.5kbits/s dup=0 drop=7278 speed=0.0963x
frame= 1824 fps=2.9 q=25.0 size=    5610kB time=00:01:00.76 bitrate= 756.4kbits/s dup=0 drop=7284 speed=0.0963x
frame= 1826 fps=2.9 q=25.0 size=    5614kB time=00:01:00.83 bitrate= 756.0kbits/s dup=0 drop=7290 speed=0.0963x
frame= 1827 fps=2.9 q=25.0 size=    5616kB time=00:01:00.86 bitrate= 755.8kbits/s dup=0 drop=7296 speed=0.0963x
frame= 1829 fps=2.9 q=25.0 size=    5619kB time=00:01:00.93 bitrate= 755.5kbits/s dup=0 drop=7302 speed=0.0963x
frame= 1831 fps=2.9 q=25.0 size=    5623kB time=00:01:01.00 bitrate= 755.1kbits/s dup=0 drop=7310 speed=0.0963x
frame= 1833 fps=2.9 q=25.0 size=    5626kB time=00:01:01.06 bitrate= 754.7kbits/s dup=0 drop=7318 speed=0.0963x
frame= 1835 fps=2.9 q=25.0 size=    5629kB time=00:01:01.13 bitrate= 754.3kbits/s dup=0 drop=7326 speed=0.0964x
frame= 1836 fps=2.9 q=25.0 size=    5631kB time=00:01:01.16 bitrate= 754.2kbits/s dup=0 drop=7333 speed=0.0963x
frame= 1838 fps=2.9 q=25.0 size=    5634kB time=00:01:01.23 bitrate= 753.8kbits/s dup=0 drop=7339 speed=0.0964x
frame= 1840 fps=2.9 q=25.0 size=    5638kB time=00:01:01.30 bitrate= 753.4kbits/s dup=0 drop=7346 speed=0.0964x
frame= 1841 fps=2.9 q=25.0 size=    5639kB time=00:01:01.33 bitrate= 753.2kbits/s dup=0 drop=7353 speed=0.0964x
frame= 1843 fps=2.9 q=25.0 size=    5643kB time=00:01:01.40 bitrate= 752.8kbits/s dup=0 drop=7358 speed=0.0964x
frame= 1845 fps=2.9 q=25.0 size=    5646kB time=00:01:01.46 bitrate= 752.5kbits/s dup=0 drop=7366 speed=0.0964x
frame= 1846 fps=2.9 q=25.0 size=    5648kB time=00:01:01.50 bitrate= 752.3kbits/s dup=0 drop=7372 speed=0.0964x
frame= 1848 fps=2.9 q=25.0 size=    5651kB time=00:01:01.56 bitrate= 751.9kbits/s dup=0 drop=7378 speed=0.0964x
frame= 1849 fps=2.9 q=25.0 size=    5653kB time=00:01:01.60 bitrate= 751.8kbits/s dup=0 drop=7382 speed=0.0964x
frame= 1850 fps=2.9 q=25.0 size=    5654kB time=00:01:01.63 bitrate= 751.6kbits/s dup=0 drop=7389 speed=0.0964x
frame= 1852 fps=2.9 q=25.0 size=    5658kB time=00:01:01.70 bitrate= 751.2kbits/s dup=0 drop=7394 speed=0.0964x
frame= 1853 fps=2.9 q=25.0 size=    5660kB time=00:01:01.73 bitrate= 751.0kbits/s dup=0 drop=7398 speed=0.0964x
frame= 1854 fps=2.9 q=25.0 size=    5661kB time=00:01:01.76 bitrate= 750.9kbits/s dup=0 drop=7404 speed=0.0963x
frame= 1856 fps=2.9 q=25.0 size=    5665kB time=00:01:01.83 bitrate= 750.5kbits/s dup=0 drop=7410 speed=0.0964x
frame= 1858 fps=2.9 q=25.0 size=    5668kB time=00:01:01.90 bitrate= 750.1kbits/s dup=0 drop=7418 speed=0.0964x
frame= 1859 fps=2.9 q=25.0 size=    5670kB time=00:01:01.93 bitrate= 750.0kbits/s dup=0 drop=7425 speed=0.0964x
frame= 1861 fps=2.9 q=25.0 size=    5673kB time=00:01:02.00 bitrate= 749.6kbits/s dup=0 drop=7430 speed=0.0964x
frame= 1863 fps=2.9 q=25.0 size=    5677kB time=00:01:02.06 bitrate= 749.3kbits/s dup=0 drop=7438 speed=0.0964x
frame= 1864 fps=2.9 q=25.0 size=    5678kB time=00:01:02.10 bitrate= 749.1kbits/s dup=0 drop=7445 speed=0.0964x
frame= 1866 fps=2.9 q=25.0 size=    5682kB time=00:01:02.16 bitrate= 748.7kbits/s dup=0 drop=7450 speed=0.0964x
frame= 1867 fps=2.9 q=25.0 size=    5683kB time=00:01:02.20 bitrate= 748.5kbits/s dup=0 drop=7456 speed=0.0964x
frame= 1869 fps=2.9 q=25.0 size=    5687kB time=00:01:02.26 bitrate= 748.2kbits/s dup=0 drop=7462 speed=0.0964x
frame= 1870 fps=2.9 q=25.0 size=    5689kB time=00:01:02.30 bitrate= 748.0kbits/s dup=0 drop=7468 speed=0.0964x
frame= 1872 fps=2.9 q=25.0 size=    5692kB time=00:01:02.36 bitrate= 747.6kbits/s dup=0 drop=7474 speed=0.0964x
frame= 1873 fps=2.9 q=25.0 size=    5694kB time=00:01:02.40 bitrate= 747.5kbits/s dup=0 drop=7480 speed=0.0964x
frame= 1875 fps=2.9 q=25.0 size=    5697kB time=00:01:02.46 bitrate= 747.1kbits/s dup=0 drop=7486 speed=0.0964x
frame= 1876 fps=2.9 q=25.0 size=    5699kB time=00:01:02.50 bitrate= 746.9kbits/s dup=0 drop=7492 speed=0.0964x
frame= 1878 fps=2.9 q=25.0 size=    5702kB time=00:01:02.56 bitrate= 746.6kbits/s dup=0 drop=7498 speed=0.0964x
frame= 1879 fps=2.9 q=25.0 size=    5704kB time=00:01:02.60 bitrate= 746.4kbits/s dup=0 drop=7503 speed=0.0964x
frame= 1881 fps=2.9 q=25.0 size=    5707kB time=00:01:02.66 bitrate= 746.1kbits/s dup=0 drop=7510 speed=0.0964x
frame= 1882 fps=2.9 q=25.0 size=    5709kB time=00:01:02.70 bitrate= 745.9kbits/s dup=0 drop=7516 speed=0.0964x
frame= 1884 fps=2.9 q=25.0 size=    5712kB time=00:01:02.76 bitrate= 745.5kbits/s dup=0 drop=7522 speed=0.0964x
frame= 1886 fps=2.9 q=25.0 size=    5716kB time=00:01:02.83 bitrate= 745.2kbits/s dup=0 drop=7530 speed=0.0964x
frame= 1887 fps=2.9 q=25.0 size=    5717kB time=00:01:02.86 bitrate= 745.0kbits/s dup=0 drop=7537 speed=0.0964x
frame= 1889 fps=2.9 q=25.0 size=    5720kB time=00:01:02.93 bitrate= 744.6kbits/s dup=0 drop=7542 speed=0.0964x
frame= 1890 fps=2.9 q=25.0 size=    5722kB time=00:01:02.96 bitrate= 744.4kbits/s dup=0 drop=7549 speed=0.0964x
frame= 1892 fps=2.9 q=25.0 size=    5726kB time=00:01:03.03 bitrate= 744.1kbits/s dup=0 drop=7554 speed=0.0964x
frame= 1893 fps=2.9 q=25.0 size=    5727kB time=00:01:03.06 bitrate= 743.9kbits/s dup=0 drop=7559 speed=0.0964x
frame= 1895 fps=2.9 q=25.0 size=    5731kB time=00:01:03.13 bitrate= 743.6kbits/s dup=0 drop=7566 speed=0.0964x
frame= 1896 fps=2.9 q=25.0 size=    5732kB time=00:01:03.16 bitrate= 743.4kbits/s dup=0 drop=7572 speed=0.0964x
frame= 1898 fps=2.9 q=25.0 size=    5736kB time=00:01:03.23 bitrate= 743.1kbits/s dup=0 drop=7578 speed=0.0964x
frame= 1899 fps=2.9 q=25.0 size=    5738kB time=00:01:03.26 bitrate= 742.9kbits/s dup=0 drop=7584 speed=0.0964x
frame= 1901 fps=2.9 q=25.0 size=    5741kB time=00:01:03.33 bitrate= 742.6kbits/s dup=0 drop=7590 speed=0.0964x
frame= 1902 fps=2.9 q=25.0 size=    5742kB time=00:01:03.36 bitrate= 742.4kbits/s dup=0 drop=7597 speed=0.0964x
frame= 1904 fps=2.9 q=25.0 size=    5746kB time=00:01:03.43 bitrate= 742.1kbits/s dup=0 drop=7602 speed=0.0964x
frame= 1905 fps=2.9 q=25.0 size=    5748kB time=00:01:03.46 bitrate= 741.9kbits/s dup=0 drop=7609 speed=0.0964x
frame= 1907 fps=2.9 q=25.0 size=    5751kB time=00:01:03.53 bitrate= 741.5kbits/s dup=0 drop=7614 speed=0.0964x
frame= 1909 fps=2.9 q=25.0 size=    5754kB time=00:01:03.60 bitrate= 741.2kbits/s dup=0 drop=7622 speed=0.0964x
frame= 1911 fps=2.9 q=25.0 size=    5758kB time=00:01:03.66 bitrate= 740.9kbits/s dup=0 drop=7630 speed=0.0964x
frame= 1912 fps=2.9 q=25.0 size=    5760kB time=00:01:03.70 bitrate= 740.7kbits/s dup=0 drop=7636 speed=0.0964x
frame= 1914 fps=2.9 q=25.0 size=    5763kB time=00:01:03.76 bitrate= 740.4kbits/s dup=0 drop=7642 speed=0.0964x
frame= 1915 fps=2.9 q=25.0 size=    5765kB time=00:01:03.80 bitrate= 740.2kbits/s dup=0 drop=7648 speed=0.0964x
frame= 1917 fps=2.9 q=25.0 size=    5768kB time=00:01:03.86 bitrate= 739.8kbits/s dup=0 drop=7654 speed=0.0964x
frame= 1918 fps=2.9 q=25.0 size=    5770kB time=00:01:03.90 bitrate= 739.7kbits/s dup=0 drop=7659 speed=0.0964x
frame= 1920 fps=2.9 q=25.0 size=    5773kB time=00:01:03.96 bitrate= 739.3kbits/s dup=0 drop=7666 speed=0.0964x
frame= 1921 fps=2.9 q=25.0 size=    5774kB time=00:01:04.00 bitrate= 739.1kbits/s dup=0 drop=7672 speed=0.0964x
frame= 1923 fps=2.9 q=25.0 size=    5778kB time=00:01:04.06 bitrate= 738.8kbits/s dup=0 drop=7678 speed=0.0964x
frame= 1924 fps=2.9 q=25.0 size=    5779kB time=00:01:04.10 bitrate= 738.6kbits/s dup=0 drop=7682 speed=0.0964x
frame= 1925 fps=2.9 q=25.0 size=    5781kB time=00:01:04.13 bitrate= 738.4kbits/s dup=0 drop=7686 speed=0.0963x
frame= 1926 fps=2.9 q=25.0 size=    5783kB time=00:01:04.16 bitrate= 738.3kbits/s dup=0 drop=7690 speed=0.0963x
frame= 1927 fps=2.9 q=25.0 size=    5784kB time=00:01:04.20 bitrate= 738.1kbits/s dup=0 drop=7694 speed=0.0963x
frame= 1927 fps=2.9 q=25.0 size=    5784kB time=00:01:04.20 bitrate= 738.1kbits/s dup=0 drop=7697 speed=0.0962x
frame= 1929 fps=2.9 q=25.0 size=    5788kB time=00:01:04.26 bitrate= 737.8kbits/s dup=0 drop=7702 speed=0.0962x
frame= 1931 fps=2.9 q=25.0 size=    5791kB time=00:01:04.33 bitrate= 737.5kbits/s dup=0 drop=7710 speed=0.0962x
frame= 1932 fps=2.9 q=25.0 size=    5793kB time=00:01:04.36 bitrate= 737.3kbits/s dup=0 drop=7716 speed=0.0962x
frame= 1933 fps=2.9 q=25.0 size=    5795kB time=00:01:04.40 bitrate= 737.1kbits/s dup=0 drop=7721 speed=0.0962x
frame= 1935 fps=2.9 q=25.0 size=    5798kB time=00:01:04.46 bitrate= 736.8kbits/s dup=0 drop=7726 speed=0.0962x
frame= 1936 fps=2.9 q=25.0 size=    5800kB time=00:01:04.50 bitrate= 736.6kbits/s dup=0 drop=7730 speed=0.0962x
frame= 1937 fps=2.9 q=25.0 size=    5801kB time=00:01:04.53 bitrate= 736.4kbits/s dup=0 drop=7734 speed=0.0961x
frame= 1938 fps=2.9 q=25.0 size=    5803kB time=00:01:04.56 bitrate= 736.3kbits/s dup=0 drop=7738 speed=0.0961x
frame= 1939 fps=2.9 q=25.0 size=    5805kB time=00:01:04.60 bitrate= 736.1kbits/s dup=0 drop=7743 speed=0.0961x
frame= 1941 fps=2.9 q=25.0 size=    5808kB time=00:01:04.66 bitrate= 735.8kbits/s dup=0 drop=7750 speed=0.0961x
frame= 1942 fps=2.9 q=25.0 size=    5810kB time=00:01:04.70 bitrate= 735.6kbits/s dup=0 drop=7754 speed=0.0961x
frame= 1944 fps=2.9 q=25.0 size=    5813kB time=00:01:04.76 bitrate= 735.3kbits/s dup=0 drop=7762 speed=0.0961x
frame= 1946 fps=2.9 q=25.0 size=    5817kB time=00:01:04.83 bitrate= 734.9kbits/s dup=0 drop=7770 speed=0.0961x
frame= 1948 fps=2.9 q=25.0 size=    5820kB time=00:01:04.90 bitrate= 734.6kbits/s dup=0 drop=7778 speed=0.0961x
frame= 1949 fps=2.9 q=25.0 size=    5821kB time=00:01:04.93 bitrate= 734.4kbits/s dup=0 drop=7783 speed=0.0961x
frame= 1951 fps=2.9 q=25.0 size=    5825kB time=00:01:05.00 bitrate= 734.1kbits/s dup=0 drop=7790 speed=0.0961x
frame= 1953 fps=2.9 q=25.0 size=    5828kB time=00:01:05.06 bitrate= 733.7kbits/s dup=0 drop=7798 speed=0.0962x
frame= 1954 fps=2.9 q=25.0 size=    5830kB time=00:01:05.10 bitrate= 733.6kbits/s dup=0 drop=7803 speed=0.0961x
frame= 1956 fps=2.9 q=25.0 size=    5833kB time=00:01:05.16 bitrate= 733.2kbits/s dup=0 drop=7810 speed=0.0962x
frame= 1957 fps=2.9 q=25.0 size=    5835kB time=00:01:05.20 bitrate= 733.1kbits/s dup=0 drop=7816 speed=0.0961x
frame= 1959 fps=2.9 q=25.0 size=    5838kB time=00:01:05.26 bitrate= 732.7kbits/s dup=0 drop=7822 speed=0.0962x
frame= 1961 fps=2.9 q=25.0 size=    5841kB time=00:01:05.33 bitrate= 732.4kbits/s dup=0 drop=7830 speed=0.0962x
frame= 1962 fps=2.9 q=25.0 size=    5843kB time=00:01:05.36 bitrate= 732.2kbits/s dup=0 drop=7837 speed=0.0961x
frame= 1964 fps=2.9 q=25.0 size=    5846kB time=00:01:05.43 bitrate= 731.9kbits/s dup=0 drop=7842 speed=0.0962x
frame= 1966 fps=2.9 q=25.0 size=    5850kB time=00:01:05.50 bitrate= 731.6kbits/s dup=0 drop=7850 speed=0.0962x
frame= 1967 fps=2.9 q=25.0 size=    5851kB time=00:01:05.53 bitrate= 731.4kbits/s dup=0 drop=7857 speed=0.0962x
frame= 1969 fps=2.9 q=25.0 size=    5855kB time=00:01:05.60 bitrate= 731.1kbits/s dup=0 drop=7862 speed=0.0962x
frame= 1970 fps=2.9 q=25.0 size=    5856kB time=00:01:05.63 bitrate= 730.9kbits/s dup=0 drop=7868 speed=0.0962x
frame= 1972 fps=2.9 q=25.0 size=    5859kB time=00:01:05.70 bitrate= 730.6kbits/s dup=0 drop=7874 speed=0.0962x
frame= 1974 fps=2.9 q=25.0 size=    5863kB time=00:01:05.76 bitrate= 730.3kbits/s dup=0 drop=7882 speed=0.0962x
frame= 1975 fps=2.9 q=25.0 size=    5865kB time=00:01:05.80 bitrate= 730.2kbits/s dup=0 drop=7886 speed=0.0962x
frame= 1976 fps=2.9 q=25.0 size=    5867kB time=00:01:05.83 bitrate= 730.0kbits/s dup=0 drop=7892 speed=0.0962x
frame= 1978 fps=2.9 q=25.0 size=    5870kB time=00:01:05.90 bitrate= 729.7kbits/s dup=0 drop=7898 speed=0.0962x
frame= 1979 fps=2.9 q=25.0 size=    5872kB time=00:01:05.93 bitrate= 729.5kbits/s dup=0 drop=7904 speed=0.0962x
frame= 1981 fps=2.9 q=25.0 size=    5875kB time=00:01:06.00 bitrate= 729.2kbits/s dup=0 drop=7910 speed=0.0962x
frame= 1982 fps=2.9 q=25.0 size=    5876kB time=00:01:06.03 bitrate= 729.0kbits/s dup=0 drop=7917 speed=0.0962x
frame= 1984 fps=2.9 q=25.0 size=    5880kB time=00:01:06.10 bitrate= 728.7kbits/s dup=0 drop=7922 speed=0.0962x
frame= 1986 fps=2.9 q=25.0 size=    5883kB time=00:01:06.16 bitrate= 728.4kbits/s dup=0 drop=7930 speed=0.0962x
frame= 1987 fps=2.9 q=25.0 size=    5885kB time=00:01:06.20 bitrate= 728.3kbits/s dup=0 drop=7935 speed=0.0962x
frame= 1989 fps=2.9 q=22.0 size=    5901kB time=00:01:06.26 bitrate= 729.5kbits/s dup=0 drop=7942 speed=0.0962x
frame= 1991 fps=2.9 q=25.0 size=    5905kB time=00:01:06.33 bitrate= 729.2kbits/s dup=0 drop=7950 speed=0.0962x
frame= 1992 fps=2.9 q=25.0 size=    5907kB time=00:01:06.36 bitrate= 729.1kbits/s dup=0 drop=7956 speed=0.0962x
frame= 1994 fps=2.9 q=25.0 size=    5911kB time=00:01:06.43 bitrate= 728.9kbits/s dup=0 drop=7962 speed=0.0962x
frame= 1995 fps=2.9 q=25.0 size=    5913kB time=00:01:06.46 bitrate= 728.8kbits/s dup=0 drop=7969 speed=0.0962x
frame= 1997 fps=2.9 q=25.0 size=    5917kB time=00:01:06.53 bitrate= 728.5kbits/s dup=0 drop=7974 speed=0.0962x
frame= 1999 fps=2.9 q=25.0 size=    5920kB time=00:01:06.60 bitrate= 728.2kbits/s dup=0 drop=7982 speed=0.0962x
frame= 2001 fps=2.9 q=25.0 size=    5924kB time=00:01:06.66 bitrate= 727.9kbits/s dup=0 drop=7990 speed=0.0963x
frame= 2002 fps=2.9 q=25.0 size=    5926kB time=00:01:06.70 bitrate= 727.8kbits/s dup=0 drop=7997 speed=0.0962x
frame= 2004 fps=2.9 q=25.0 size=    5930kB time=00:01:06.76 bitrate= 727.5kbits/s dup=0 drop=8002 speed=0.0963x
frame= 2005 fps=2.9 q=25.0 size=    5931kB time=00:01:06.80 bitrate= 727.4kbits/s dup=0 drop=8009 speed=0.0962x
frame= 2007 fps=2.9 q=25.0 size=    5935kB time=00:01:06.86 bitrate= 727.1kbits/s dup=0 drop=8014 speed=0.0963x
frame= 2008 fps=2.9 q=25.0 size=    5937kB time=00:01:06.90 bitrate= 727.0kbits/s dup=0 drop=8019 speed=0.0962x
frame= 2010 fps=2.9 q=25.0 size=    5941kB time=00:01:06.96 bitrate= 726.7kbits/s dup=0 drop=8026 speed=0.0962x
frame= 2011 fps=2.9 q=25.0 size=    5942kB time=00:01:07.00 bitrate= 726.6kbits/s dup=0 drop=8031 speed=0.0962x
frame= 2012 fps=2.9 q=25.0 size=    5944kB time=00:01:07.03 bitrate= 726.5kbits/s dup=0 drop=8037 speed=0.0962x
frame= 2014 fps=2.9 q=25.0 size=    5948kB time=00:01:07.10 bitrate= 726.2kbits/s dup=0 drop=8042 speed=0.0962x
frame= 2015 fps=2.9 q=25.0 size=    5950kB time=00:01:07.13 bitrate= 726.0kbits/s dup=0 drop=8047 speed=0.0962x
frame= 2017 fps=2.9 q=25.0 size=    5953kB time=00:01:07.20 bitrate= 725.8kbits/s dup=0 drop=8054 speed=0.0962x
frame= 2018 fps=2.9 q=25.0 size=    5955kB time=00:01:07.23 bitrate= 725.6kbits/s dup=0 drop=8059 speed=0.0962x
frame= 2020 fps=2.9 q=25.0 size=    5959kB time=00:01:07.30 bitrate= 725.3kbits/s dup=0 drop=8066 speed=0.0962x
frame= 2021 fps=2.9 q=25.0 size=    5961kB time=00:01:07.33 bitrate= 725.2kbits/s dup=0 drop=8072 speed=0.0962x
frame= 2023 fps=2.9 q=25.0 size=    5964kB time=00:01:07.40 bitrate= 724.9kbits/s dup=0 drop=8078 speed=0.0962x
frame= 2024 fps=2.9 q=25.0 size=    5966kB time=00:01:07.43 bitrate= 724.8kbits/s dup=0 drop=8084 speed=0.0962x
frame= 2026 fps=2.9 q=25.0 size=    5969kB time=00:01:07.50 bitrate= 724.5kbits/s dup=0 drop=8090 speed=0.0962x
frame= 2028 fps=2.9 q=25.0 size=    5973kB time=00:01:07.56 bitrate= 724.2kbits/s dup=0 drop=8098 speed=0.0962x
frame= 2030 fps=2.9 q=25.0 size=    5976kB time=00:01:07.63 bitrate= 723.9kbits/s dup=0 drop=8106 speed=0.0962x
frame= 2032 fps=2.9 q=25.0 size=    5980kB time=00:01:07.70 bitrate= 723.6kbits/s dup=0 drop=8114 speed=0.0962x
frame= 2034 fps=2.9 q=25.0 size=    5983kB time=00:01:07.76 bitrate= 723.2kbits/s dup=0 drop=8122 speed=0.0963x
frame= 2035 fps=2.9 q=25.0 size=    5985kB time=00:01:07.80 bitrate= 723.1kbits/s dup=0 drop=8129 speed=0.0962x
frame= 2037 fps=2.9 q=25.0 size=    5988kB time=00:01:07.86 bitrate= 722.8kbits/s dup=0 drop=8134 speed=0.0963x
frame= 2039 fps=2.9 q=25.0 size=    5991kB time=00:01:07.93 bitrate= 722.5kbits/s dup=0 drop=8142 speed=0.0963x
frame= 2041 fps=2.9 q=25.0 size=    5995kB time=00:01:08.00 bitrate= 722.2kbits/s dup=0 drop=8150 speed=0.0963x
frame= 2042 fps=2.9 q=25.0 size=    5997kB time=00:01:08.03 bitrate= 722.1kbits/s dup=0 drop=8157 speed=0.0963x
frame= 2044 fps=2.9 q=25.0 size=    6000kB time=00:01:08.10 bitrate= 721.8kbits/s dup=0 drop=8162 speed=0.0963x
frame= 2046 fps=2.9 q=25.0 size=    6003kB time=00:01:08.16 bitrate= 721.5kbits/s dup=0 drop=8170 speed=0.0963x
frame= 2047 fps=2.9 q=25.0 size=    6005kB time=00:01:08.20 bitrate= 721.3kbits/s dup=0 drop=8176 speed=0.0963x
frame= 2049 fps=2.9 q=25.0 size=    6009kB time=00:01:08.26 bitrate= 721.0kbits/s dup=0 drop=8182 speed=0.0963x
frame= 2050 fps=2.9 q=25.0 size=    6010kB time=00:01:08.30 bitrate= 720.9kbits/s dup=0 drop=8188 speed=0.0963x
frame= 2050 fps=2.9 q=25.0 size=    6010kB time=00:01:08.30 bitrate= 720.9kbits/s dup=0 drop=8188 speed=0.0962x
frame= 2051 fps=2.9 q=25.0 size=    6012kB time=00:01:08.33 bitrate= 720.8kbits/s dup=0 drop=8191 speed=0.0961x
frame= 2052 fps=2.9 q=25.0 size=    6014kB time=00:01:08.36 bitrate= 720.6kbits/s dup=0 drop=8197 speed=0.0961x
frame= 2054 fps=2.9 q=25.0 size=    6017kB time=00:01:08.43 bitrate= 720.3kbits/s dup=0 drop=8202 speed=0.0961x
frame= 2056 fps=2.9 q=25.0 size=    6021kB time=00:01:08.50 bitrate= 720.0kbits/s dup=0 drop=8210 speed=0.0962x
frame= 2057 fps=2.9 q=25.0 size=    6022kB time=00:01:08.53 bitrate= 719.9kbits/s dup=0 drop=8214 speed=0.0961x
frame= 2058 fps=2.9 q=25.0 size=    6024kB time=00:01:08.56 bitrate= 719.7kbits/s dup=0 drop=8221 speed=0.0961x
frame= 2060 fps=2.9 q=25.0 size=    6028kB time=00:01:08.63 bitrate= 719.5kbits/s dup=0 drop=8226 speed=0.0961x
frame= 2062 fps=2.9 q=25.0 size=    6031kB time=00:01:08.70 bitrate= 719.1kbits/s dup=0 drop=8234 speed=0.0961x
frame= 2063 fps=2.9 q=25.0 size=    6033kB time=00:01:08.73 bitrate= 719.0kbits/s dup=0 drop=8240 speed=0.0961x
frame= 2065 fps=2.9 q=25.0 size=    6036kB time=00:01:08.80 bitrate= 718.7kbits/s dup=0 drop=8246 speed=0.0962x
frame= 2066 fps=2.9 q=25.0 size=    6038kB time=00:01:08.83 bitrate= 718.6kbits/s dup=0 drop=8252 speed=0.0961x
frame= 2068 fps=2.9 q=25.0 size=    6041kB time=00:01:08.90 bitrate= 718.3kbits/s dup=0 drop=8258 speed=0.0961x
frame= 2069 fps=2.9 q=25.0 size=    6043kB time=00:01:08.93 bitrate= 718.1kbits/s dup=0 drop=8263 speed=0.0961x
frame= 2070 fps=2.9 q=25.0 size=    6045kB time=00:01:08.96 bitrate= 718.0kbits/s dup=0 drop=8269 speed=0.0961x
frame= 2072 fps=2.9 q=25.0 size=    6048kB time=00:01:09.03 bitrate= 717.7kbits/s dup=0 drop=8274 speed=0.0961x
frame= 2073 fps=2.9 q=25.0 size=    6050kB time=00:01:09.06 bitrate= 717.6kbits/s dup=0 drop=8280 speed=0.0961x
frame= 2075 fps=2.9 q=25.0 size=    6053kB time=00:01:09.13 bitrate= 717.3kbits/s dup=0 drop=8286 speed=0.0961x
frame= 2076 fps=2.9 q=25.0 size=    6055kB time=00:01:09.16 bitrate= 717.1kbits/s dup=0 drop=8290 speed=0.0961x
frame= 2078 fps=2.9 q=25.0 size=    6058kB time=00:01:09.23 bitrate= 716.9kbits/s dup=0 drop=8298 speed=0.0961x
frame= 2079 fps=2.9 q=25.0 size=    6060kB time=00:01:09.26 bitrate= 716.7kbits/s dup=0 drop=8304 speed=0.0961x
frame= 2081 fps=2.9 q=25.0 size=    6063kB time=00:01:09.33 bitrate= 716.4kbits/s dup=0 drop=8310 speed=0.0961x
frame= 2083 fps=2.9 q=25.0 size=    6067kB time=00:01:09.40 bitrate= 716.1kbits/s dup=0 drop=8318 speed=0.0961x
frame= 2084 fps=2.9 q=25.0 size=    6068kB time=00:01:09.43 bitrate= 715.9kbits/s dup=0 drop=8325 speed=0.0961x
frame= 2086 fps=2.9 q=25.0 size=    6072kB time=00:01:09.50 bitrate= 715.7kbits/s dup=0 drop=8330 speed=0.0961x
frame= 2087 fps=2.9 q=25.0 size=    6073kB time=00:01:09.53 bitrate= 715.5kbits/s dup=0 drop=8335 speed=0.0961x
frame= 2089 fps=2.9 q=25.0 size=    6077kB time=00:01:09.60 bitrate= 715.3kbits/s dup=0 drop=8342 speed=0.0961x
frame= 2090 fps=2.9 q=25.0 size=    6079kB time=00:01:09.63 bitrate= 715.1kbits/s dup=0 drop=8347 speed=0.0961x
frame= 2092 fps=2.9 q=25.0 size=    6082kB time=00:01:09.70 bitrate= 714.8kbits/s dup=0 drop=8354 speed=0.0961x
frame= 2093 fps=2.9 q=25.0 size=    6084kB time=00:01:09.73 bitrate= 714.7kbits/s dup=0 drop=8358 speed=0.0961x
frame= 2094 fps=2.9 q=25.0 size=    6086kB time=00:01:09.76 bitrate= 714.6kbits/s dup=0 drop=8364 speed=0.0961x
frame= 2096 fps=2.9 q=25.0 size=    6089kB time=00:01:09.83 bitrate= 714.3kbits/s dup=0 drop=8370 speed=0.0961x
frame= 2097 fps=2.9 q=25.0 size=    6091kB time=00:01:09.86 bitrate= 714.2kbits/s dup=0 drop=8376 speed=0.0961x
frame= 2099 fps=2.9 q=25.0 size=    6095kB time=00:01:09.93 bitrate= 713.9kbits/s dup=0 drop=8382 speed=0.0961x
frame= 2100 fps=2.9 q=25.0 size=    6096kB time=00:01:09.96 bitrate= 713.8kbits/s dup=0 drop=8388 speed=0.0961x
frame= 2102 fps=2.9 q=25.0 size=    6100kB time=00:01:10.03 bitrate= 713.5kbits/s dup=0 drop=8394 speed=0.0961x
frame= 2104 fps=2.9 q=25.0 size=    6103kB time=00:01:10.10 bitrate= 713.2kbits/s dup=0 drop=8402 speed=0.0961x
frame= 2105 fps=2.9 q=25.0 size=    6104kB time=00:01:10.13 bitrate= 713.0kbits/s dup=0 drop=8409 speed=0.0961x
frame= 2107 fps=2.9 q=25.0 size=    6108kB time=00:01:10.20 bitrate= 712.7kbits/s dup=0 drop=8414 speed=0.0961x
frame= 2109 fps=2.9 q=25.0 size=    6111kB time=00:01:10.26 bitrate= 712.4kbits/s dup=0 drop=8422 speed=0.0961x
frame= 2110 fps=2.9 q=25.0 size=    6113kB time=00:01:10.30 bitrate= 712.3kbits/s dup=0 drop=8428 speed=0.0961x
frame= 2112 fps=2.9 q=25.0 size=    6116kB time=00:01:10.36 bitrate= 712.0kbits/s dup=0 drop=8434 speed=0.0961x
frame= 2113 fps=2.9 q=25.0 size=    6118kB time=00:01:10.40 bitrate= 711.9kbits/s dup=0 drop=8439 speed=0.0961x
frame= 2114 fps=2.9 q=25.0 size=    6120kB time=00:01:10.43 bitrate= 711.8kbits/s dup=0 drop=8445 speed=0.0961x
frame= 2116 fps=2.9 q=25.0 size=    6123kB time=00:01:10.50 bitrate= 711.5kbits/s dup=0 drop=8450 speed=0.0961x
frame= 2117 fps=2.9 q=25.0 size=    6125kB time=00:01:10.53 bitrate= 711.3kbits/s dup=0 drop=8454 speed=0.0961x
frame= 2122 fps=2.9 q=25.0 size=    6133kB time=00:01:10.70 bitrate= 710.6kbits/s dup=0 drop=8474 speed=0.0961x
frame= 2124 fps=2.9 q=25.0 size=    6137kB time=00:01:10.76 bitrate= 710.4kbits/s dup=0 drop=8482 speed=0.0961x
frame= 2126 fps=2.9 q=25.0 size=    6140kB time=00:01:10.83 bitrate= 710.1kbits/s dup=0 drop=8490 speed=0.0961x
frame= 2128 fps=2.9 q=25.0 size=    6144kB time=00:01:10.90 bitrate= 709.8kbits/s dup=0 drop=8498 speed=0.0961x
frame= 2129 fps=2.9 q=25.0 size=    6145kB time=00:01:10.93 bitrate= 709.7kbits/s dup=0 drop=8505 speed=0.0961x
frame= 2131 fps=2.9 q=25.0 size=    6149kB time=00:01:11.00 bitrate= 709.4kbits/s dup=0 drop=8510 speed=0.0961x
frame= 2132 fps=2.9 q=25.0 size=    6151kB time=00:01:11.03 bitrate= 709.3kbits/s dup=0 drop=8516 speed=0.0961x
frame= 2134 fps=2.9 q=25.0 size=    6154kB time=00:01:11.10 bitrate= 709.0kbits/s dup=0 drop=8522 speed=0.0961x
frame= 2135 fps=2.9 q=25.0 size=    6156kB time=00:01:11.13 bitrate= 708.9kbits/s dup=0 drop=8527 speed=0.0961x
frame= 2137 fps=2.9 q=25.0 size=    6159kB time=00:01:11.20 bitrate= 708.6kbits/s dup=0 drop=8534 speed=0.0961x
frame= 2138 fps=2.9 q=25.0 size=    6161kB time=00:01:11.23 bitrate= 708.5kbits/s dup=0 drop=8540 speed=0.0961x
frame= 2140 fps=2.9 q=25.0 size=    6164kB time=00:01:11.30 bitrate= 708.2kbits/s dup=0 drop=8546 speed=0.0961x
frame= 2141 fps=2.9 q=25.0 size=    6166kB time=00:01:11.33 bitrate= 708.1kbits/s dup=0 drop=8551 speed=0.0961x
frame= 2143 fps=2.9 q=25.0 size=    6169kB time=00:01:11.40 bitrate= 707.8kbits/s dup=0 drop=8558 speed=0.0961x
frame= 2145 fps=2.9 q=25.0 size=    6173kB time=00:01:11.46 bitrate= 707.6kbits/s dup=0 drop=8566 speed=0.0961x
frame= 2146 fps=2.9 q=25.0 size=    6174kB time=00:01:11.50 bitrate= 707.4kbits/s dup=0 drop=8572 speed=0.0961x
frame= 2149 fps=2.9 q=25.0 size=    6180kB time=00:01:11.60 bitrate= 707.0kbits/s dup=0 drop=8582 speed=0.0961x
frame= 2152 fps=2.9 q=25.0 size=    6185kB time=00:01:11.70 bitrate= 706.6kbits/s dup=0 drop=8594 speed=0.0961x
frame= 2200 fps=2.9 q=25.0 size=    6266kB time=00:01:13.30 bitrate= 700.2kbits/s dup=0 drop=8786 speed=0.0961x
frame= 2202 fps=2.9 q=25.0 size=    6269kB time=00:01:13.36 bitrate= 700.0kbits/s dup=0 drop=8794 speed=0.0961x
frame= 2203 fps=2.9 q=25.0 size=    6270kB time=00:01:13.40 bitrate= 699.8kbits/s dup=0 drop=8800 speed=0.0961x
frame= 2205 fps=2.9 q=25.0 size=    6274kB time=00:01:13.46 bitrate= 699.6kbits/s dup=0 drop=8806 speed=0.0961x
frame= 2206 fps=2.9 q=25.0 size=    6275kB time=00:01:13.50 bitrate= 699.4kbits/s dup=0 drop=8812 speed=0.0961x
frame= 2208 fps=2.9 q=25.0 size=    6278kB time=00:01:13.56 bitrate= 699.1kbits/s dup=0 drop=8818 speed=0.0961x
frame= 2219 fps=2.9 q=25.0 size=    6296kB time=00:01:13.93 bitrate= 697.7kbits/s dup=0 drop=8862 speed=0.0961x
frame= 2221 fps=2.9 q=25.0 size=    6300kB time=00:01:14.00 bitrate= 697.4kbits/s dup=0 drop=8870 speed=0.0961x
frame= 2242 fps=2.9 q=25.0 size=    6347kB time=00:01:14.70 bitrate= 696.0kbits/s dup=0 drop=8954 speed=0.0961x
frame= 2244 fps=2.9 q=25.0 size=    6351kB time=00:01:14.76 bitrate= 695.8kbits/s dup=0 drop=8962 speed=0.0961x
frame= 2245 fps=2.9 q=25.0 size=    6352kB time=00:01:14.80 bitrate= 695.7kbits/s dup=0 drop=8968 speed=0.0961x
frame= 2247 fps=2.9 q=25.0 size=    6356kB time=00:01:14.86 bitrate= 695.5kbits/s dup=0 drop=8974 speed=0.0961x
frame= 2249 fps=2.9 q=25.0 size=    6360kB time=00:01:14.93 bitrate= 695.3kbits/s dup=0 drop=8982 speed=0.0961x
frame= 2250 fps=2.9 q=25.0 size=    6362kB time=00:01:14.96 bitrate= 695.2kbits/s dup=0 drop=8986 speed=0.0961x
frame= 2253 fps=2.9 q=25.0 size=    6367kB time=00:01:15.06 bitrate= 694.8kbits/s dup=0 drop=8998 speed=0.0961x
frame= 2259 fps=2.9 q=25.0 size=    6378kB time=00:01:15.26 bitrate= 694.2kbits/s dup=0 drop=9022 speed=0.0961x
frame= 2262 fps=2.9 q=25.0 size=    6384kB time=00:01:15.36 bitrate= 693.9kbits/s dup=0 drop=9034 speed=0.0961x
frame= 2264 fps=2.9 q=25.0 size=    6387kB time=00:01:15.43 bitrate= 693.6kbits/s dup=0 drop=9042 speed=0.0961x
frame= 2266 fps=2.9 q=25.0 size=    6390kB time=00:01:15.50 bitrate= 693.4kbits/s dup=0 drop=9050 speed=0.0961x
frame= 2268 fps=2.9 q=25.0 size=    6394kB time=00:01:15.56 bitrate= 693.1kbits/s dup=0 drop=9058 speed=0.0961x
frame= 2270 fps=2.9 q=25.0 size=    6397kB time=00:01:15.63 bitrate= 692.9kbits/s dup=0 drop=9066 speed=0.0961x
frame= 2271 fps=2.9 q=25.0 size=    6399kB time=00:01:15.66 bitrate= 692.8kbits/s dup=0 drop=9073 speed=0.0961x
frame= 2273 fps=2.9 q=25.0 size=    6402kB time=00:01:15.73 bitrate= 692.5kbits/s dup=0 drop=9078 speed=0.0961x
frame= 2274 fps=2.9 q=25.0 size=    6404kB time=00:01:15.76 bitrate= 692.4kbits/s dup=0 drop=9084 speed=0.0961x
frame= 2276 fps=2.9 q=25.0 size=    6408kB time=00:01:15.83 bitrate= 692.2kbits/s dup=0 drop=9090 speed=0.0961x
frame= 2277 fps=2.9 q=25.0 size=    6409kB time=00:01:15.86 bitrate= 692.1kbits/s dup=0 drop=9095 speed=0.0961x
frame= 2279 fps=2.9 q=25.0 size=    6413kB time=00:01:15.93 bitrate= 691.8kbits/s dup=0 drop=9102 speed=0.0961x
frame= 2281 fps=2.9 q=25.0 size=    6416kB time=00:01:16.00 bitrate= 691.6kbits/s dup=0 drop=9110 speed=0.0961x
frame= 2282 fps=2.9 q=25.0 size=    6418kB time=00:01:16.03 bitrate= 691.5kbits/s dup=0 drop=9116 speed=0.0961x
frame= 2284 fps=2.9 q=25.0 size=    6421kB time=00:01:16.10 bitrate= 691.2kbits/s dup=0 drop=9122 speed=0.0961x
frame= 2286 fps=2.9 q=25.0 size=    6424kB time=00:01:16.16 bitrate= 691.0kbits/s dup=0 drop=9130 speed=0.0962x
frame= 2287 fps=2.9 q=25.0 size=    6426kB time=00:01:16.20 bitrate= 690.8kbits/s dup=0 drop=9135 speed=0.0961x
frame= 2289 fps=2.9 q=25.0 size=    6429kB time=00:01:16.26 bitrate= 690.6kbits/s dup=0 drop=9142 speed=0.0961x
frame= 2290 fps=2.9 q=25.0 size=    6431kB time=00:01:16.30 bitrate= 690.5kbits/s dup=0 drop=9149 speed=0.0961x
frame= 2292 fps=2.9 q=25.0 size=    6434kB time=00:01:16.36 bitrate= 690.2kbits/s dup=0 drop=9154 speed=0.0962x
frame= 2293 fps=2.9 q=25.0 size=    6436kB time=00:01:16.40 bitrate= 690.1kbits/s dup=0 drop=9159 speed=0.0961x
frame= 2294 fps=2.9 q=25.0 size=    6438kB time=00:01:16.43 bitrate= 690.0kbits/s dup=0 drop=9164 speed=0.0961x
frame= 2296 fps=2.9 q=25.0 size=    6441kB time=00:01:16.50 bitrate= 689.7kbits/s dup=0 drop=9170 speed=0.0961x
frame= 2297 fps=2.9 q=25.0 size=    6443kB time=00:01:16.53 bitrate= 689.6kbits/s dup=0 drop=9175 speed=0.0961x
frame= 2299 fps=2.9 q=25.0 size=    6446kB time=00:01:16.60 bitrate= 689.4kbits/s dup=0 drop=9182 speed=0.0961x
frame= 2300 fps=2.9 q=25.0 size=    6448kB time=00:01:16.63 bitrate= 689.2kbits/s dup=0 drop=9189 speed=0.0961x
frame= 2302 fps=2.9 q=25.0 size=    6451kB time=00:01:16.70 bitrate= 689.0kbits/s dup=0 drop=9194 speed=0.0961x
frame= 2304 fps=2.9 q=25.0 size=    6454kB time=00:01:16.76 bitrate= 688.8kbits/s dup=0 drop=9202 speed=0.0961x
frame= 2306 fps=2.9 q=25.0 size=    6458kB time=00:01:16.83 bitrate= 688.5kbits/s dup=0 drop=9210 speed=0.0961x
frame= 2307 fps=2.9 q=25.0 size=    6459kB time=00:01:16.86 bitrate= 688.4kbits/s dup=0 drop=9216 speed=0.0961x
frame= 2309 fps=2.9 q=25.0 size=    6463kB time=00:01:16.93 bitrate= 688.2kbits/s dup=0 drop=9222 speed=0.0961x
frame= 2310 fps=2.9 q=25.0 size=    6464kB time=00:01:16.96 bitrate= 688.0kbits/s dup=0 drop=9229 speed=0.0961x
frame= 2312 fps=2.9 q=25.0 size=    6467kB time=00:01:17.03 bitrate= 687.8kbits/s dup=0 drop=9234 speed=0.0961x
frame= 2313 fps=2.9 q=25.0 size=    6469kB time=00:01:17.06 bitrate= 687.6kbits/s dup=0 drop=9241 speed=0.0961x
frame= 2315 fps=2.9 q=25.0 size=    6472kB time=00:01:17.13 bitrate= 687.4kbits/s dup=0 drop=9246 speed=0.0961x
frame= 2316 fps=2.9 q=25.0 size=    6474kB time=00:01:17.16 bitrate= 687.3kbits/s dup=0 drop=9252 speed=0.0961x
frame= 2318 fps=2.9 q=25.0 size=    6478kB time=00:01:17.23 bitrate= 687.1kbits/s dup=0 drop=9258 speed=0.0961x
frame= 2320 fps=2.9 q=25.0 size=    6481kB time=00:01:17.30 bitrate= 686.8kbits/s dup=0 drop=9266 speed=0.0962x
frame= 2322 fps=2.9 q=25.0 size=    6484kB time=00:01:17.36 bitrate= 686.6kbits/s dup=0 drop=9274 speed=0.0962x
frame= 2324 fps=2.9 q=25.0 size=    6487kB time=00:01:17.43 bitrate= 686.3kbits/s dup=0 drop=9282 speed=0.0962x
frame= 2325 fps=2.9 q=25.0 size=    6489kB time=00:01:17.46 bitrate= 686.2kbits/s dup=0 drop=9288 speed=0.0962x
frame= 2327 fps=2.9 q=25.0 size=    6492kB time=00:01:17.53 bitrate= 686.0kbits/s dup=0 drop=9294 speed=0.0962x
frame= 2329 fps=2.9 q=25.0 size=    6496kB time=00:01:17.60 bitrate= 685.7kbits/s dup=0 drop=9302 speed=0.0962x
frame= 2330 fps=2.9 q=25.0 size=    6497kB time=00:01:17.63 bitrate= 685.6kbits/s dup=0 drop=9309 speed=0.0962x
frame= 2332 fps=2.9 q=25.0 size=    6501kB time=00:01:17.70 bitrate= 685.4kbits/s dup=0 drop=9314 speed=0.0962x
frame= 2333 fps=2.9 q=25.0 size=    6502kB time=00:01:17.73 bitrate= 685.2kbits/s dup=0 drop=9319 speed=0.0962x
frame= 2335 fps=2.9 q=25.0 size=    6506kB time=00:01:17.80 bitrate= 685.0kbits/s dup=0 drop=9326 speed=0.0962x
frame= 2336 fps=2.9 q=25.0 size=    6507kB time=00:01:17.83 bitrate= 684.9kbits/s dup=0 drop=9331 speed=0.0962x
frame= 2338 fps=2.9 q=25.0 size=    6511kB time=00:01:17.90 bitrate= 684.7kbits/s dup=0 drop=9338 speed=0.0962x
frame= 2339 fps=2.9 q=25.0 size=    6512kB time=00:01:17.93 bitrate= 684.5kbits/s dup=0 drop=9343 speed=0.0962x
frame= 2341 fps=2.9 q=25.0 size=    6516kB time=00:01:18.00 bitrate= 684.3kbits/s dup=0 drop=9350 speed=0.0962x
frame= 2343 fps=2.9 q=25.0 size=    6519kB time=00:01:18.06 bitrate= 684.1kbits/s dup=0 drop=9358 speed=0.0962x
frame= 2345 fps=2.9 q=25.0 size=    6522kB time=00:01:18.13 bitrate= 683.8kbits/s dup=0 drop=9366 speed=0.0962x
frame= 2346 fps=2.9 q=25.0 size=    6524kB time=00:01:18.16 bitrate= 683.7kbits/s dup=0 drop=9373 speed=0.0962x
frame= 2348 fps=2.9 q=25.0 size=    6527kB time=00:01:18.23 bitrate= 683.5kbits/s dup=0 drop=9378 speed=0.0962x
frame= 2349 fps=2.9 q=25.0 size=    6529kB time=00:01:18.26 bitrate= 683.4kbits/s dup=0 drop=9385 speed=0.0962x
frame= 2351 fps=2.9 q=25.0 size=    6533kB time=00:01:18.33 bitrate= 683.2kbits/s dup=0 drop=9390 speed=0.0962x
frame= 2352 fps=2.9 q=25.0 size=    6534kB time=00:01:18.36 bitrate= 683.1kbits/s dup=0 drop=9396 speed=0.0962x
frame= 2354 fps=2.9 q=25.0 size=    6538kB time=00:01:18.43 bitrate= 682.8kbits/s dup=0 drop=9402 speed=0.0962x
frame= 2355 fps=2.9 q=25.0 size=    6539kB time=00:01:18.46 bitrate= 682.7kbits/s dup=0 drop=9408 speed=0.0962x
frame= 2357 fps=2.9 q=25.0 size=    6542kB time=00:01:18.53 bitrate= 682.5kbits/s dup=0 drop=9414 speed=0.0962x
frame= 2358 fps=2.9 q=25.0 size=    6544kB time=00:01:18.56 bitrate= 682.3kbits/s dup=0 drop=9420 speed=0.0962x
frame= 2360 fps=2.9 q=25.0 size=    6547kB time=00:01:18.63 bitrate= 682.1kbits/s dup=0 drop=9426 speed=0.0962x
frame= 2362 fps=2.9 q=25.0 size=    6551kB time=00:01:18.70 bitrate= 681.9kbits/s dup=0 drop=9434 speed=0.0962x
frame= 2363 fps=2.9 q=25.0 size=    6552kB time=00:01:18.73 bitrate= 681.7kbits/s dup=0 drop=9439 speed=0.0962x
frame= 2364 fps=2.9 q=25.0 size=    6554kB time=00:01:18.76 bitrate= 681.6kbits/s dup=0 drop=9445 speed=0.0962x
frame= 2366 fps=2.9 q=25.0 size=    6557kB time=00:01:18.83 bitrate= 681.4kbits/s dup=0 drop=9450 speed=0.0962x
frame= 2367 fps=2.9 q=25.0 size=    6559kB time=00:01:18.86 bitrate= 681.3kbits/s dup=0 drop=9455 speed=0.0962x
frame= 2368 fps=2.9 q=25.0 size=    6561kB time=00:01:18.90 bitrate= 681.2kbits/s dup=0 drop=9460 speed=0.0962x
frame= 2370 fps=2.9 q=25.0 size=    6564kB time=00:01:18.96 bitrate= 680.9kbits/s dup=0 drop=9466 speed=0.0962x
frame= 2371 fps=2.9 q=25.0 size=    6566kB time=00:01:19.00 bitrate= 680.8kbits/s dup=0 drop=9470 speed=0.0962x
frame= 2372 fps=2.9 q=25.0 size=    6567kB time=00:01:19.03 bitrate= 680.7kbits/s dup=0 drop=9477 speed=0.0961x
frame= 2374 fps=2.9 q=25.0 size=    6571kB time=00:01:19.10 bitrate= 680.5kbits/s dup=0 drop=9482 speed=0.0961x
frame= 2375 fps=2.9 q=25.0 size=    6572kB time=00:01:19.13 bitrate= 680.4kbits/s dup=0 drop=9487 speed=0.0961x
frame= 2377 fps=2.9 q=25.0 size=    6575kB time=00:01:19.20 bitrate= 680.1kbits/s dup=0 drop=9494 speed=0.0961x
frame= 2378 fps=2.9 q=25.0 size=    6577kB time=00:01:19.23 bitrate= 680.0kbits/s dup=0 drop=9500 speed=0.0961x
frame= 2380 fps=2.9 q=25.0 size=    6580kB time=00:01:19.30 bitrate= 679.8kbits/s dup=0 drop=9506 speed=0.0961x
frame= 2381 fps=2.9 q=25.0 size=    6582kB time=00:01:19.33 bitrate= 679.7kbits/s dup=0 drop=9512 speed=0.0961x
frame= 2383 fps=2.9 q=25.0 size=    6585kB time=00:01:19.40 bitrate= 679.4kbits/s dup=0 drop=9518 speed=0.0961x
frame= 2384 fps=2.9 q=25.0 size=    6587kB time=00:01:19.43 bitrate= 679.3kbits/s dup=0 drop=9523 speed=0.0961x
frame= 2386 fps=2.9 q=25.0 size=    6590kB time=00:01:19.50 bitrate= 679.1kbits/s dup=0 drop=9530 speed=0.0961x
frame= 2387 fps=2.9 q=25.0 size=    6592kB time=00:01:19.53 bitrate= 679.0kbits/s dup=0 drop=9537 speed=0.0961x
frame= 2389 fps=2.9 q=25.0 size=    6595kB time=00:01:19.60 bitrate= 678.7kbits/s dup=0 drop=9542 speed=0.0961x
frame= 2391 fps=2.9 q=25.0 size=    6599kB time=00:01:19.66 bitrate= 678.5kbits/s dup=0 drop=9550 speed=0.0961x
frame= 2393 fps=2.9 q=25.0 size=    6602kB time=00:01:19.73 bitrate= 678.3kbits/s dup=0 drop=9558 speed=0.0962x
frame= 2394 fps=2.9 q=25.0 size=    6604kB time=00:01:19.76 bitrate= 678.2kbits/s dup=0 drop=9564 speed=0.0961x
frame= 2396 fps=2.9 q=25.0 size=    6607kB time=00:01:19.83 bitrate= 678.0kbits/s dup=0 drop=9570 speed=0.0962x
frame= 2398 fps=2.9 q=25.0 size=    6610kB time=00:01:19.90 bitrate= 677.7kbits/s dup=0 drop=9578 speed=0.0962x
frame= 2400 fps=2.9 q=25.0 size=    6613kB time=00:01:19.96 bitrate= 677.5kbits/s dup=0 drop=9586 speed=0.0962x
frame= 2401 fps=2.9 q=25.0 size=    6615kB time=00:01:20.00 bitrate= 677.4kbits/s dup=0 drop=9591 speed=0.0962x
frame= 2402 fps=2.9 q=25.0 size=    6617kB time=00:01:20.03 bitrate= 677.3kbits/s dup=0 drop=9596 speed=0.0962x
frame= 2404 fps=2.9 q=25.0 size=    6620kB time=00:01:20.10 bitrate= 677.0kbits/s dup=0 drop=9602 speed=0.0962x
frame= 2405 fps=2.9 q=25.0 size=    6621kB time=00:01:20.13 bitrate= 676.9kbits/s dup=0 drop=9608 speed=0.0962x
frame= 2407 fps=2.9 q=25.0 size=    6625kB time=00:01:20.20 bitrate= 676.7kbits/s dup=0 drop=9614 speed=0.0962x
frame= 2408 fps=2.9 q=25.0 size=    6626kB time=00:01:20.23 bitrate= 676.5kbits/s dup=0 drop=9621 speed=0.0962x
frame= 2410 fps=2.9 q=25.0 size=    6629kB time=00:01:20.30 bitrate= 676.3kbits/s dup=0 drop=9626 speed=0.0962x
frame= 2412 fps=2.9 q=25.0 size=    6633kB time=00:01:20.36 bitrate= 676.1kbits/s dup=0 drop=9634 speed=0.0962x
frame= 2414 fps=2.9 q=25.0 size=    6636kB time=00:01:20.43 bitrate= 675.9kbits/s dup=0 drop=9642 speed=0.0962x
frame= 2416 fps=2.9 q=25.0 size=    6639kB time=00:01:20.50 bitrate= 675.6kbits/s dup=0 drop=9650 speed=0.0962x
frame= 2418 fps=2.9 q=25.0 size=    6642kB time=00:01:20.56 bitrate= 675.4kbits/s dup=0 drop=9658 speed=0.0962x
frame= 2420 fps=2.9 q=25.0 size=    6646kB time=00:01:20.63 bitrate= 675.2kbits/s dup=0 drop=9666 speed=0.0962x
frame= 2422 fps=2.9 q=25.0 size=    6649kB time=00:01:20.70 bitrate= 674.9kbits/s dup=0 drop=9674 speed=0.0963x
frame= 2424 fps=2.9 q=25.0 size=    6652kB time=00:01:20.76 bitrate= 674.7kbits/s dup=0 drop=9682 speed=0.0963x
frame= 2426 fps=2.9 q=25.0 size=    6655kB time=00:01:20.83 bitrate= 674.4kbits/s dup=0 drop=9690 speed=0.0963x
frame= 2427 fps=2.9 q=25.0 size=    6657kB time=00:01:20.86 bitrate= 674.3kbits/s dup=0 drop=9695 speed=0.0963x
frame= 2429 fps=2.9 q=25.0 size=    6660kB time=00:01:20.93 bitrate= 674.1kbits/s dup=0 drop=9702 speed=0.0963x
frame= 2430 fps=2.9 q=25.0 size=    6662kB time=00:01:20.96 bitrate= 674.0kbits/s dup=0 drop=9708 speed=0.0963x
frame= 2432 fps=2.9 q=25.0 size=    6665kB time=00:01:21.03 bitrate= 673.8kbits/s dup=0 drop=9714 speed=0.0963x
frame= 2433 fps=2.9 q=25.0 size=    6667kB time=00:01:21.06 bitrate= 673.7kbits/s dup=0 drop=9721 speed=0.0963x
frame= 2435 fps=2.9 q=25.0 size=    6670kB time=00:01:21.13 bitrate= 673.5kbits/s dup=0 drop=9726 speed=0.0963x
frame= 2436 fps=2.9 q=25.0 size=    6671kB time=00:01:21.16 bitrate= 673.3kbits/s dup=0 drop=9733 speed=0.0963x
frame= 2438 fps=2.9 q=25.0 size=    6675kB time=00:01:21.23 bitrate= 673.1kbits/s dup=0 drop=9738 speed=0.0963x
frame= 2439 fps=2.9 q=25.0 size=    6676kB time=00:01:21.26 bitrate= 673.0kbits/s dup=0 drop=9744 speed=0.0963x
frame= 2440 fps=2.9 q=25.0 size=    6678kB time=00:01:21.30 bitrate= 672.9kbits/s dup=0 drop=9747 speed=0.0963x
frame= 2442 fps=2.9 q=25.0 size=    6682kB time=00:01:21.36 bitrate= 672.7kbits/s dup=0 drop=9754 speed=0.0963x
frame= 2443 fps=2.9 q=25.0 size=    6683kB time=00:01:21.40 bitrate= 672.6kbits/s dup=0 drop=9760 speed=0.0962x
frame= 2445 fps=2.9 q=25.0 size=    6687kB time=00:01:21.46 bitrate= 672.4kbits/s dup=0 drop=9766 speed=0.0963x
frame= 2447 fps=2.9 q=25.0 size=    6690kB time=00:01:21.53 bitrate= 672.2kbits/s dup=0 drop=9774 speed=0.0963x
frame= 2448 fps=2.9 q=25.0 size=    6691kB time=00:01:21.56 bitrate= 672.0kbits/s dup=0 drop=9781 speed=0.0963x
frame= 2450 fps=2.9 q=25.0 size=    6695kB time=00:01:21.63 bitrate= 671.8kbits/s dup=0 drop=9786 speed=0.0963x
frame= 2452 fps=2.9 q=25.0 size=    6698kB time=00:01:21.70 bitrate= 671.6kbits/s dup=0 drop=9794 speed=0.0963x
frame= 2453 fps=2.9 q=25.0 size=    6700kB time=00:01:21.73 bitrate= 671.5kbits/s dup=0 drop=9799 speed=0.0963x
frame= 2454 fps=2.9 q=25.0 size=    6701kB time=00:01:21.76 bitrate= 671.4kbits/s dup=0 drop=9805 speed=0.0962x
frame= 2456 fps=2.9 q=25.0 size=    6705kB time=00:01:21.83 bitrate= 671.2kbits/s dup=0 drop=9810 speed=0.0963x
frame= 2457 fps=2.9 q=25.0 size=    6706kB time=00:01:21.86 bitrate= 671.1kbits/s dup=0 drop=9815 speed=0.0962x
frame= 2458 fps=2.9 q=25.0 size=    6708kB time=00:01:21.90 bitrate= 671.0kbits/s dup=0 drop=9821 speed=0.0962x
frame= 2460 fps=2.9 q=25.0 size=    6711kB time=00:01:21.96 bitrate= 670.7kbits/s dup=0 drop=9826 speed=0.0962x
frame= 2462 fps=2.9 q=25.0 size=    6714kB time=00:01:22.03 bitrate= 670.5kbits/s dup=0 drop=9834 speed=0.0963x
frame= 2463 fps=2.9 q=25.0 size=    6716kB time=00:01:22.06 bitrate= 670.4kbits/s dup=0 drop=9841 speed=0.0962x
frame= 2465 fps=2.9 q=25.0 size=    6719kB time=00:01:22.13 bitrate= 670.2kbits/s dup=0 drop=9848 speed=0.0963x
frame= 2467 fps=2.9 q=25.0 size=    6723kB time=00:01:22.20 bitrate= 670.0kbits/s dup=0 drop=9854 speed=0.0963x
frame= 2469 fps=2.9 q=25.0 size=    6726kB time=00:01:22.26 bitrate= 669.7kbits/s dup=0 drop=9862 speed=0.0963x
frame= 2470 fps=2.9 q=25.0 size=    6727kB time=00:01:22.30 bitrate= 669.6kbits/s dup=0 drop=9869 speed=0.0963x
frame= 2472 fps=2.9 q=25.0 size=    6731kB time=00:01:22.36 bitrate= 669.4kbits/s dup=0 drop=9874 speed=0.0963x
frame= 2473 fps=2.9 q=25.0 size=    6732kB time=00:01:22.40 bitrate= 669.3kbits/s dup=0 drop=9878 speed=0.0963x
frame= 2474 fps=2.9 q=25.0 size=    6734kB time=00:01:22.43 bitrate= 669.2kbits/s dup=0 drop=9884 speed=0.0963x
frame= 2476 fps=2.9 q=25.0 size=    6737kB time=00:01:22.50 bitrate= 669.0kbits/s dup=0 drop=9890 speed=0.0963x
frame= 2478 fps=2.9 q=25.0 size=    6741kB time=00:01:22.56 bitrate= 668.8kbits/s dup=0 drop=9898 speed=0.0963x
frame= 2479 fps=2.9 q=25.0 size=    6742kB time=00:01:22.60 bitrate= 668.7kbits/s dup=0 drop=9902 speed=0.0963x
frame= 2481 fps=2.9 q=25.0 size=    6745kB time=00:01:22.66 bitrate= 668.4kbits/s dup=0 drop=9910 speed=0.0963x
frame= 2483 fps=2.9 q=25.0 size=    6749kB time=00:01:22.73 bitrate= 668.2kbits/s dup=0 drop=9918 speed=0.0963x
frame= 2484 fps=2.9 q=25.0 size=    6750kB time=00:01:22.76 bitrate= 668.1kbits/s dup=0 drop=9924 speed=0.0963x
frame= 2486 fps=2.9 q=25.0 size=    6753kB time=00:01:22.83 bitrate= 667.9kbits/s dup=0 drop=9930 speed=0.0963x
frame= 2488 fps=2.9 q=25.0 size=    6757kB time=00:01:22.90 bitrate= 667.7kbits/s dup=0 drop=9938 speed=0.0963x
frame= 2489 fps=2.9 q=22.0 size=    6771kB time=00:01:22.93 bitrate= 668.8kbits/s dup=0 drop=9945 speed=0.0963x
frame= 2492 fps=2.9 q=25.0 size=    6777kB time=00:01:23.03 bitrate= 668.6kbits/s dup=0 drop=9954 speed=0.0964x
frame= 2494 fps=2.9 q=25.0 size=    6780kB time=00:01:23.10 bitrate= 668.4kbits/s dup=0 drop=9962 speed=0.0964x
frame= 2495 fps=2.9 q=25.0 size=    6782kB time=00:01:23.13 bitrate= 668.3kbits/s dup=0 drop=9969 speed=0.0964x
frame= 2497 fps=2.9 q=25.0 size=    6786kB time=00:01:23.20 bitrate= 668.2kbits/s dup=0 drop=9974 speed=0.0964x
frame= 2499 fps=2.9 q=25.0 size=    6790kB time=00:01:23.26 bitrate= 668.0kbits/s dup=0 drop=9982 speed=0.0964x
frame= 2501 fps=2.9 q=25.0 size=    6793kB time=00:01:23.33 bitrate= 667.8kbits/s dup=0 drop=9990 speed=0.0964x
frame= 2502 fps=2.9 q=25.0 size=    6795kB time=00:01:23.36 bitrate= 667.7kbits/s dup=0 drop=9997 speed=0.0964x
frame= 2504 fps=2.9 q=25.0 size=    6799kB time=00:01:23.43 bitrate= 667.5kbits/s dup=0 drop=10002 speed=0.0964x
frame= 2505 fps=2.9 q=25.0 size=    6800kB time=00:01:23.46 bitrate= 667.4kbits/s dup=0 drop=10009 speed=0.0964x
frame= 2507 fps=2.9 q=25.0 size=    6804kB time=00:01:23.53 bitrate= 667.3kbits/s dup=0 drop=10014 speed=0.0964x
frame= 2508 fps=2.9 q=25.0 size=    6806kB time=00:01:23.56 bitrate= 667.2kbits/s dup=0 drop=10018 speed=0.0964x
frame= 2509 fps=2.9 q=25.0 size=    6808kB time=00:01:23.60 bitrate= 667.1kbits/s dup=0 drop=10024 speed=0.0964x
frame= 2511 fps=2.9 q=25.0 size=    6811kB time=00:01:23.66 bitrate= 666.9kbits/s dup=0 drop=10030 speed=0.0964x
frame= 2512 fps=2.9 q=25.0 size=    6813kB time=00:01:23.70 bitrate= 666.8kbits/s dup=0 drop=10035 speed=0.0964x
frame= 2513 fps=2.9 q=25.0 size=    6815kB time=00:01:23.73 bitrate= 666.7kbits/s dup=0 drop=10041 speed=0.0963x
frame= 2515 fps=2.9 q=25.0 size=    6818kB time=00:01:23.80 bitrate= 666.5kbits/s dup=0 drop=10046 speed=0.0964x
frame= 2516 fps=2.9 q=25.0 size=    6820kB time=00:01:23.83 bitrate= 666.4kbits/s dup=0 drop=10052 speed=0.0964x
frame= 2518 fps=2.9 q=25.0 size=    6823kB time=00:01:23.90 bitrate= 666.2kbits/s dup=0 drop=10058 speed=0.0964x
frame= 2519 fps=2.9 q=25.0 size=    6825kB time=00:01:23.93 bitrate= 666.2kbits/s dup=0 drop=10064 speed=0.0963x
frame= 2521 fps=2.9 q=25.0 size=    6829kB time=00:01:24.00 bitrate= 666.0kbits/s dup=0 drop=10070 speed=0.0964x
frame= 2522 fps=2.9 q=25.0 size=    6830kB time=00:01:24.03 bitrate= 665.9kbits/s dup=0 drop=10074 speed=0.0963x
frame= 2523 fps=2.9 q=25.0 size=    6832kB time=00:01:24.06 bitrate= 665.8kbits/s dup=0 drop=10080 speed=0.0963x
frame= 2525 fps=2.9 q=25.0 size=    6836kB time=00:01:24.13 bitrate= 665.6kbits/s dup=0 drop=10086 speed=0.0963x
frame= 2526 fps=2.9 q=25.0 size=    6837kB time=00:01:24.16 bitrate= 665.5kbits/s dup=0 drop=10091 speed=0.0963x
frame= 2527 fps=2.9 q=25.0 size=    6839kB time=00:01:24.20 bitrate= 665.4kbits/s dup=0 drop=10097 speed=0.0963x
frame= 2529 fps=2.9 q=25.0 size=    6842kB time=00:01:24.26 bitrate= 665.2kbits/s dup=0 drop=10102 speed=0.0963x
frame= 2530 fps=2.9 q=25.0 size=    6844kB time=00:01:24.30 bitrate= 665.1kbits/s dup=0 drop=10109 speed=0.0963x
frame= 2532 fps=2.9 q=25.0 size=    6847kB time=00:01:24.36 bitrate= 664.9kbits/s dup=0 drop=10114 speed=0.0963x
frame= 2533 fps=2.9 q=25.0 size=    6849kB time=00:01:24.40 bitrate= 664.8kbits/s dup=0 drop=10120 speed=0.0963x
frame= 2535 fps=2.9 q=25.0 size=    6852kB time=00:01:24.46 bitrate= 664.6kbits/s dup=0 drop=10126 speed=0.0963x
frame= 2536 fps=2.9 q=25.0 size=    6854kB time=00:01:24.50 bitrate= 664.5kbits/s dup=0 drop=10132 speed=0.0963x
frame= 2538 fps=2.9 q=25.0 size=    6857kB time=00:01:24.56 bitrate= 664.3kbits/s dup=0 drop=10138 speed=0.0963x
frame= 2539 fps=2.9 q=25.0 size=    6859kB time=00:01:24.60 bitrate= 664.2kbits/s dup=0 drop=10145 speed=0.0963x
frame= 2541 fps=2.9 q=25.0 size=    6862kB time=00:01:24.66 bitrate= 664.0kbits/s dup=0 drop=10150 speed=0.0963x
frame= 2542 fps=2.9 q=25.0 size=    6864kB time=00:01:24.70 bitrate= 663.9kbits/s dup=0 drop=10156 speed=0.0963x
frame= 2544 fps=2.9 q=25.0 size=    6867kB time=00:01:24.76 bitrate= 663.7kbits/s dup=0 drop=10162 speed=0.0963x
frame= 2545 fps=2.9 q=25.0 size=    6869kB time=00:01:24.80 bitrate= 663.6kbits/s dup=0 drop=10168 speed=0.0963x
frame= 2547 fps=2.9 q=25.0 size=    6873kB time=00:01:24.86 bitrate= 663.4kbits/s dup=0 drop=10174 speed=0.0963x
frame= 2548 fps=2.9 q=25.0 size=    6874kB time=00:01:24.90 bitrate= 663.3kbits/s dup=0 drop=10180 speed=0.0963x
frame= 2550 fps=2.9 q=25.0 size=    6877kB time=00:01:24.96 bitrate= 663.1kbits/s dup=0 drop=10186 speed=0.0963x
frame= 2552 fps=2.9 q=25.0 size=    6881kB time=00:01:25.03 bitrate= 662.9kbits/s dup=0 drop=10194 speed=0.0963x
frame= 2554 fps=2.9 q=25.0 size=    6884kB time=00:01:25.10 bitrate= 662.7kbits/s dup=0 drop=10202 speed=0.0964x
frame= 2555 fps=2.9 q=25.0 size=    6886kB time=00:01:25.13 bitrate= 662.6kbits/s dup=0 drop=10209 speed=0.0963x
frame= 2557 fps=2.9 q=25.0 size=    6889kB time=00:01:25.20 bitrate= 662.4kbits/s dup=0 drop=10214 speed=0.0964x
frame= 2559 fps=2.9 q=25.0 size=    6893kB time=00:01:25.26 bitrate= 662.2kbits/s dup=0 drop=10222 speed=0.0964x
frame= 2560 fps=2.9 q=25.0 size=    6895kB time=00:01:25.30 bitrate= 662.1kbits/s dup=0 drop=10226 speed=0.0963x
frame= 2561 fps=2.9 q=25.0 size=    6896kB time=00:01:25.33 bitrate= 662.0kbits/s dup=0 drop=10233 speed=0.0963x
frame= 2563 fps=2.9 q=25.0 size=    6900kB time=00:01:25.40 bitrate= 661.9kbits/s dup=0 drop=10238 speed=0.0963x
frame= 2564 fps=2.9 q=25.0 size=    6901kB time=00:01:25.43 bitrate= 661.8kbits/s dup=0 drop=10244 speed=0.0963x
frame= 2566 fps=2.9 q=25.0 size=    6905kB time=00:01:25.50 bitrate= 661.6kbits/s dup=0 drop=10250 speed=0.0963x
frame= 2567 fps=2.9 q=25.0 size=    6906kB time=00:01:25.53 bitrate= 661.5kbits/s dup=0 drop=10256 speed=0.0963x
frame= 2568 fps=2.9 q=25.0 size=    6908kB time=00:01:25.56 bitrate= 661.4kbits/s dup=0 drop=10261 speed=0.0963x
frame= 2570 fps=2.9 q=25.0 size=    6911kB time=00:01:25.63 bitrate= 661.2kbits/s dup=0 drop=10266 speed=0.0963x
frame= 2571 fps=2.9 q=25.0 size=    6913kB time=00:01:25.66 bitrate= 661.1kbits/s dup=0 drop=10273 speed=0.0963x
frame= 2573 fps=2.9 q=25.0 size=    6916kB time=00:01:25.73 bitrate= 660.9kbits/s dup=0 drop=10278 speed=0.0963x
frame= 2574 fps=2.9 q=25.0 size=    6918kB time=00:01:25.76 bitrate= 660.8kbits/s dup=0 drop=10285 speed=0.0963x
frame= 2576 fps=2.9 q=25.0 size=    6921kB time=00:01:25.83 bitrate= 660.6kbits/s dup=0 drop=10290 speed=0.0963x
frame= 2577 fps=2.9 q=25.0 size=    6923kB time=00:01:25.86 bitrate= 660.5kbits/s dup=0 drop=10296 speed=0.0963x
frame= 2579 fps=2.9 q=25.0 size=    6926kB time=00:01:25.93 bitrate= 660.3kbits/s dup=0 drop=10302 speed=0.0963x
frame= 2581 fps=2.9 q=25.0 size=    6930kB time=00:01:26.00 bitrate= 660.1kbits/s dup=0 drop=10310 speed=0.0964x
frame= 2582 fps=2.9 q=25.0 size=    6931kB time=00:01:26.03 bitrate= 660.0kbits/s dup=0 drop=10317 speed=0.0963x
frame= 2584 fps=2.9 q=25.0 size=    6935kB time=00:01:26.10 bitrate= 659.8kbits/s dup=0 drop=10322 speed=0.0964x
frame= 2586 fps=2.9 q=25.0 size=    6938kB time=00:01:26.16 bitrate= 659.6kbits/s dup=0 drop=10330 speed=0.0964x
frame= 2587 fps=2.9 q=25.0 size=    6940kB time=00:01:26.20 bitrate= 659.5kbits/s dup=0 drop=10334 speed=0.0964x
frame= 2588 fps=2.9 q=25.0 size=    6941kB time=00:01:26.23 bitrate= 659.4kbits/s dup=0 drop=10341 speed=0.0963x
frame= 2590 fps=2.9 q=25.0 size=    6944kB time=00:01:26.30 bitrate= 659.2kbits/s dup=0 drop=10347 speed=0.0964x
frame= 2592 fps=2.9 q=25.0 size=    6948kB time=00:01:26.36 bitrate= 659.0kbits/s dup=0 drop=10354 speed=0.0964x
frame= 2594 fps=2.9 q=25.0 size=    6951kB time=00:01:26.43 bitrate= 658.8kbits/s dup=0 drop=10362 speed=0.0964x
frame= 2596 fps=2.9 q=25.0 size=    6954kB time=00:01:26.50 bitrate= 658.6kbits/s dup=0 drop=10370 speed=0.0964x
frame= 2597 fps=2.9 q=25.0 size=    6956kB time=00:01:26.53 bitrate= 658.5kbits/s dup=0 drop=10377 speed=0.0964x
frame= 2599 fps=2.9 q=25.0 size=    6960kB time=00:01:26.60 bitrate= 658.3kbits/s dup=0 drop=10382 speed=0.0964x
frame= 2600 fps=2.9 q=25.0 size=    6961kB time=00:01:26.63 bitrate= 658.2kbits/s dup=0 drop=10386 speed=0.0964x
frame= 2601 fps=2.9 q=25.0 size=    6963kB time=00:01:26.66 bitrate= 658.2kbits/s dup=0 drop=10392 speed=0.0964x
frame= 2603 fps=2.9 q=25.0 size=    6966kB time=00:01:26.73 bitrate= 657.9kbits/s dup=0 drop=10398 speed=0.0964x
frame= 2604 fps=2.9 q=25.0 size=    6968kB time=00:01:26.76 bitrate= 657.8kbits/s dup=0 drop=10403 speed=0.0964x
frame= 2606 fps=2.9 q=25.0 size=    6971kB time=00:01:26.83 bitrate= 657.7kbits/s dup=0 drop=10410 speed=0.0964x
frame= 2608 fps=2.9 q=25.0 size=    6974kB time=00:01:26.90 bitrate= 657.5kbits/s dup=0 drop=10418 speed=0.0964x
frame= 2609 fps=2.9 q=25.0 size=    6976kB time=00:01:26.93 bitrate= 657.4kbits/s dup=0 drop=10424 speed=0.0964x
frame= 2611 fps=2.9 q=25.0 size=    6979kB time=00:01:27.00 bitrate= 657.2kbits/s dup=0 drop=10430 speed=0.0964x
frame= 2613 fps=2.9 q=25.0 size=    6983kB time=00:01:27.06 bitrate= 657.0kbits/s dup=0 drop=10438 speed=0.0964x
frame= 2614 fps=2.9 q=25.0 size=    6984kB time=00:01:27.10 bitrate= 656.9kbits/s dup=0 drop=10445 speed=0.0964x
frame= 2616 fps=2.9 q=25.0 size=    6988kB time=00:01:27.16 bitrate= 656.7kbits/s dup=0 drop=10451 speed=0.0964x
frame= 2618 fps=2.9 q=25.0 size=    6991kB time=00:01:27.23 bitrate= 656.5kbits/s dup=0 drop=10458 speed=0.0964x
frame= 2620 fps=2.9 q=25.0 size=    6994kB time=00:01:27.30 bitrate= 656.3kbits/s dup=0 drop=10466 speed=0.0965x
frame= 2622 fps=2.9 q=25.0 size=    6998kB time=00:01:27.36 bitrate= 656.1kbits/s dup=0 drop=10474 speed=0.0965x
frame= 2624 fps=2.9 q=25.0 size=    7001kB time=00:01:27.43 bitrate= 655.9kbits/s dup=0 drop=10482 speed=0.0965x
frame= 2625 fps=2.9 q=25.0 size=    7003kB time=00:01:27.46 bitrate= 655.9kbits/s dup=0 drop=10489 speed=0.0965x
frame= 2627 fps=2.9 q=25.0 size=    7006kB time=00:01:27.53 bitrate= 655.7kbits/s dup=0 drop=10495 speed=0.0965x
frame= 2629 fps=2.9 q=25.0 size=    7009kB time=00:01:27.60 bitrate= 655.5kbits/s dup=0 drop=10502 speed=0.0965x
frame= 2630 fps=2.9 q=25.0 size=    7011kB time=00:01:27.63 bitrate= 655.4kbits/s dup=0 drop=10509 speed=0.0965x
frame= 2632 fps=2.9 q=25.0 size=    7014kB time=00:01:27.70 bitrate= 655.2kbits/s dup=0 drop=10514 speed=0.0965x
frame= 2633 fps=2.9 q=25.0 size=    7016kB time=00:01:27.73 bitrate= 655.1kbits/s dup=0 drop=10520 speed=0.0965x
frame= 2635 fps=2.9 q=25.0 size=    7019kB time=00:01:27.80 bitrate= 654.9kbits/s dup=0 drop=10526 speed=0.0965x
frame= 2636 fps=2.9 q=25.0 size=    7021kB time=00:01:27.83 bitrate= 654.8kbits/s dup=0 drop=10533 speed=0.0965x
frame= 2638 fps=2.9 q=25.0 size=    7024kB time=00:01:27.90 bitrate= 654.6kbits/s dup=0 drop=10539 speed=0.0965x
frame= 2640 fps=2.9 q=25.0 size=    7027kB time=00:01:27.96 bitrate= 654.4kbits/s dup=0 drop=10546 speed=0.0965x
frame= 2641 fps=2.9 q=25.0 size=    7029kB time=00:01:28.00 bitrate= 654.3kbits/s dup=0 drop=10552 speed=0.0965x
frame= 2643 fps=2.9 q=25.0 size=    7032kB time=00:01:28.06 bitrate= 654.2kbits/s dup=0 drop=10558 speed=0.0965x
frame= 2644 fps=2.9 q=25.0 size=    7034kB time=00:01:28.10 bitrate= 654.1kbits/s dup=0 drop=10564 speed=0.0965x
frame= 2646 fps=2.9 q=25.0 size=    7037kB time=00:01:28.16 bitrate= 653.9kbits/s dup=0 drop=10570 speed=0.0965x
frame= 2647 fps=2.9 q=25.0 size=    7039kB time=00:01:28.20 bitrate= 653.8kbits/s dup=0 drop=10576 speed=0.0965x
frame= 2649 fps=2.9 q=25.0 size=    7042kB time=00:01:28.26 bitrate= 653.6kbits/s dup=0 drop=10582 speed=0.0965x
frame= 2650 fps=2.9 q=25.0 size=    7044kB time=00:01:28.30 bitrate= 653.5kbits/s dup=0 drop=10587 speed=0.0965x
frame= 2651 fps=2.9 q=25.0 size=    7046kB time=00:01:28.33 bitrate= 653.4kbits/s dup=0 drop=10592 speed=0.0965x
frame= 2653 fps=2.9 q=25.0 size=    7049kB time=00:01:28.40 bitrate= 653.2kbits/s dup=0 drop=10598 speed=0.0965x
frame= 2655 fps=2.9 q=25.0 size=    7052kB time=00:01:28.46 bitrate= 653.0kbits/s dup=0 drop=10606 speed=0.0965x
frame= 2656 fps=2.9 q=25.0 size=    7054kB time=00:01:28.50 bitrate= 652.9kbits/s dup=0 drop=10612 speed=0.0965x
frame= 2658 fps=2.9 q=25.0 size=    7057kB time=00:01:28.56 bitrate= 652.7kbits/s dup=0 drop=10618 speed=0.0965x
frame= 2659 fps=2.9 q=25.0 size=    7059kB time=00:01:28.60 bitrate= 652.6kbits/s dup=0 drop=10625 speed=0.0965x
frame= 2661 fps=2.9 q=25.0 size=    7062kB time=00:01:28.66 bitrate= 652.5kbits/s dup=0 drop=10630 speed=0.0965x
frame= 2662 fps=2.9 q=25.0 size=    7064kB time=00:01:28.70 bitrate= 652.4kbits/s dup=0 drop=10635 speed=0.0965x
frame= 2664 fps=2.9 q=25.0 size=    7067kB time=00:01:28.76 bitrate= 652.2kbits/s dup=0 drop=10642 speed=0.0965x
frame= 2665 fps=2.9 q=25.0 size=    7069kB time=00:01:28.80 bitrate= 652.1kbits/s dup=0 drop=10648 speed=0.0965x
frame= 2667 fps=2.9 q=25.0 size=    7072kB time=00:01:28.86 bitrate= 651.9kbits/s dup=0 drop=10654 speed=0.0965x
frame= 2668 fps=2.9 q=25.0 size=    7074kB time=00:01:28.90 bitrate= 651.8kbits/s dup=0 drop=10660 speed=0.0965x
frame= 2670 fps=2.9 q=25.0 size=    7077kB time=00:01:28.96 bitrate= 651.7kbits/s dup=0 drop=10666 speed=0.0965x
frame= 2671 fps=2.9 q=25.0 size=    7079kB time=00:01:29.00 bitrate= 651.6kbits/s dup=0 drop=10672 speed=0.0965x
frame= 2673 fps=2.9 q=25.0 size=    7082kB time=00:01:29.06 bitrate= 651.4kbits/s dup=0 drop=10678 speed=0.0965x
frame= 2674 fps=2.9 q=25.0 size=    7084kB time=00:01:29.10 bitrate= 651.3kbits/s dup=0 drop=10684 speed=0.0964x
frame= 2676 fps=2.9 q=25.0 size=    7087kB time=00:01:29.16 bitrate= 651.1kbits/s dup=0 drop=10690 speed=0.0965x
frame= 2678 fps=2.9 q=25.0 size=    7090kB time=00:01:29.23 bitrate= 650.9kbits/s dup=0 drop=10698 speed=0.0965x
frame= 2679 fps=2.9 q=25.0 size=    7092kB time=00:01:29.26 bitrate= 650.8kbits/s dup=0 drop=10705 speed=0.0965x
frame= 2681 fps=2.9 q=25.0 size=    7096kB time=00:01:29.33 bitrate= 650.7kbits/s dup=0 drop=10710 speed=0.0965x
frame= 2682 fps=2.9 q=25.0 size=    7097kB time=00:01:29.36 bitrate= 650.6kbits/s dup=0 drop=10716 speed=0.0965x
frame= 2684 fps=2.9 q=25.0 size=    7100kB time=00:01:29.43 bitrate= 650.4kbits/s dup=0 drop=10722 speed=0.0965x
frame= 2685 fps=2.9 q=25.0 size=    7102kB time=00:01:29.46 bitrate= 650.3kbits/s dup=0 drop=10728 speed=0.0965x
frame= 2687 fps=2.9 q=25.0 size=    7105kB time=00:01:29.53 bitrate= 650.1kbits/s dup=0 drop=10734 speed=0.0965x
frame= 2688 fps=2.9 q=25.0 size=    7107kB time=00:01:29.56 bitrate= 650.0kbits/s dup=0 drop=10740 speed=0.0965x
frame= 2690 fps=2.9 q=25.0 size=    7110kB time=00:01:29.63 bitrate= 649.8kbits/s dup=0 drop=10746 speed=0.0965x
frame= 2691 fps=2.9 q=25.0 size=    7112kB time=00:01:29.66 bitrate= 649.7kbits/s dup=0 drop=10752 speed=0.0965x
frame= 2693 fps=2.9 q=25.0 size=    7115kB time=00:01:29.73 bitrate= 649.6kbits/s dup=0 drop=10758 speed=0.0965x
frame= 2694 fps=2.9 q=25.0 size=    7117kB time=00:01:29.76 bitrate= 649.5kbits/s dup=0 drop=10764 speed=0.0965x
frame= 2696 fps=2.9 q=25.0 size=    7120kB time=00:01:29.83 bitrate= 649.3kbits/s dup=0 drop=10770 speed=0.0965x
frame= 2697 fps=2.9 q=25.0 size=    7121kB time=00:01:29.86 bitrate= 649.2kbits/s dup=0 drop=10776 speed=0.0965x
frame= 2699 fps=2.9 q=25.0 size=    7125kB time=00:01:29.93 bitrate= 649.0kbits/s dup=0 drop=10782 speed=0.0965x
frame= 2700 fps=2.9 q=25.0 size=    7126kB time=00:01:29.96 bitrate= 648.9kbits/s dup=0 drop=10788 speed=0.0965x
frame= 2702 fps=2.9 q=25.0 size=    7130kB time=00:01:30.03 bitrate= 648.7kbits/s dup=0 drop=10794 speed=0.0965x
frame= 2703 fps=2.9 q=25.0 size=    7131kB time=00:01:30.06 bitrate= 648.6kbits/s dup=0 drop=10800 speed=0.0965x
frame= 2705 fps=2.9 q=25.0 size=    7135kB time=00:01:30.13 bitrate= 648.5kbits/s dup=0 drop=10806 speed=0.0965x
frame= 2707 fps=2.9 q=25.0 size=    7138kB time=00:01:30.20 bitrate= 648.3kbits/s dup=0 drop=10814 speed=0.0965x
frame= 2708 fps=2.9 q=25.0 size=    7140kB time=00:01:30.23 bitrate= 648.2kbits/s dup=0 drop=10818 speed=0.0965x
frame= 2710 fps=2.9 q=25.0 size=    7143kB time=00:01:30.30 bitrate= 648.0kbits/s dup=0 drop=10826 speed=0.0965x
frame= 2711 fps=2.9 q=25.0 size=    7144kB time=00:01:30.33 bitrate= 647.9kbits/s dup=0 drop=10830 speed=0.0965x
frame= 2713 fps=2.9 q=25.0 size=    7148kB time=00:01:30.40 bitrate= 647.7kbits/s dup=0 drop=10838 speed=0.0965x
frame= 2715 fps=2.9 q=25.0 size=    7151kB time=00:01:30.46 bitrate= 647.5kbits/s dup=0 drop=10846 speed=0.0965x
frame= 2716 fps=2.9 q=25.0 size=    7153kB time=00:01:30.50 bitrate= 647.4kbits/s dup=0 drop=10853 speed=0.0965x
frame= 2718 fps=2.9 q=25.0 size=    7156kB time=00:01:30.56 bitrate= 647.3kbits/s dup=0 drop=10858 speed=0.0965x
frame= 2719 fps=2.9 q=25.0 size=    7157kB time=00:01:30.60 bitrate= 647.2kbits/s dup=0 drop=10863 speed=0.0965x
frame= 2721 fps=2.9 q=25.0 size=    7161kB time=00:01:30.66 bitrate= 647.0kbits/s dup=0 drop=10870 speed=0.0965x
frame= 2722 fps=2.9 q=25.0 size=    7162kB time=00:01:30.70 bitrate= 646.9kbits/s dup=0 drop=10874 speed=0.0965x
frame= 2723 fps=2.9 q=25.0 size=    7164kB time=00:01:30.73 bitrate= 646.8kbits/s dup=0 drop=10879 speed=0.0965x
frame= 2724 fps=2.9 q=25.0 size=    7166kB time=00:01:30.76 bitrate= 646.7kbits/s dup=0 drop=10885 speed=0.0964x
frame= 2726 fps=2.9 q=25.0 size=    7169kB time=00:01:30.83 bitrate= 646.6kbits/s dup=0 drop=10890 speed=0.0965x
frame= 2727 fps=2.9 q=25.0 size=    7171kB time=00:01:30.86 bitrate= 646.5kbits/s dup=0 drop=10894 speed=0.0964x
frame= 2728 fps=2.9 q=25.0 size=    7172kB time=00:01:30.90 bitrate= 646.4kbits/s dup=0 drop=10900 speed=0.0964x
frame= 2730 fps=2.9 q=25.0 size=    7176kB time=00:01:30.96 bitrate= 646.2kbits/s dup=0 drop=10906 speed=0.0964x
frame= 2731 fps=2.9 q=25.0 size=    7177kB time=00:01:31.00 bitrate= 646.1kbits/s dup=0 drop=10911 speed=0.0964x
frame= 2733 fps=2.9 q=25.0 size=    7181kB time=00:01:31.06 bitrate= 645.9kbits/s dup=0 drop=10918 speed=0.0964x
frame= 2734 fps=2.9 q=25.0 size=    7182kB time=00:01:31.10 bitrate= 645.8kbits/s dup=0 drop=10925 speed=0.0964x
frame= 2736 fps=2.9 q=25.0 size=    7185kB time=00:01:31.16 bitrate= 645.6kbits/s dup=0 drop=10930 speed=0.0964x
frame= 2738 fps=2.9 q=25.0 size=    7189kB time=00:01:31.23 bitrate= 645.5kbits/s dup=0 drop=10938 speed=0.0964x
frame= 2739 fps=2.9 q=22.0 size=    7203kB time=00:01:31.26 bitrate= 646.5kbits/s dup=0 drop=10945 speed=0.0964x
frame= 2741 fps=2.9 q=25.0 size=    7206kB time=00:01:31.33 bitrate= 646.3kbits/s dup=0 drop=10953 speed=0.0965x
frame= 2743 fps=2.9 q=25.0 size=    7210kB time=00:01:31.40 bitrate= 646.2kbits/s dup=0 drop=10961 speed=0.0965x
frame= 2745 fps=2.9 q=25.0 size=    7214kB time=00:01:31.46 bitrate= 646.1kbits/s dup=0 drop=10966 speed=0.0965x
frame= 2747 fps=2.9 q=25.0 size=    7217kB time=00:01:31.53 bitrate= 645.9kbits/s dup=0 drop=10974 speed=0.0965x
frame= 2749 fps=2.9 q=25.0 size=    7221kB time=00:01:31.60 bitrate= 645.8kbits/s dup=0 drop=10982 speed=0.0965x
frame= 2750 fps=2.9 q=25.0 size=    7223kB time=00:01:31.63 bitrate= 645.7kbits/s dup=0 drop=10989 speed=0.0965x
frame= 2752 fps=2.9 q=25.0 size=    7226kB time=00:01:31.70 bitrate= 645.6kbits/s dup=0 drop=10995 speed=0.0965x
frame= 2754 fps=2.9 q=25.0 size=    7230kB time=00:01:31.76 bitrate= 645.4kbits/s dup=0 drop=11002 speed=0.0965x
frame= 2755 fps=2.9 q=25.0 size=    7232kB time=00:01:31.80 bitrate= 645.4kbits/s dup=0 drop=11009 speed=0.0965x
frame= 2757 fps=2.9 q=25.0 size=    7235kB time=00:01:31.86 bitrate= 645.2kbits/s dup=0 drop=11014 speed=0.0966x
frame= 2758 fps=2.9 q=25.0 size=    7237kB time=00:01:31.90 bitrate= 645.1kbits/s dup=0 drop=11018 speed=0.0965x
frame= 2759 fps=2.9 q=25.0 size=    7239kB time=00:01:31.93 bitrate= 645.0kbits/s dup=0 drop=11023 speed=0.0965x
frame= 2760 fps=2.9 q=25.0 size=    7241kB time=00:01:31.96 bitrate= 645.0kbits/s dup=0 drop=11029 speed=0.0965x
frame= 2762 fps=2.9 q=25.0 size=    7244kB time=00:01:32.03 bitrate= 644.8kbits/s dup=0 drop=11034 speed=0.0965x
frame= 2763 fps=2.9 q=25.0 size=    7246kB time=00:01:32.06 bitrate= 644.7kbits/s dup=0 drop=11039 speed=0.0965x
frame= 2765 fps=2.9 q=25.0 size=    7250kB time=00:01:32.13 bitrate= 644.6kbits/s dup=0 drop=11046 speed=0.0965x
frame= 2766 fps=2.9 q=25.0 size=    7251kB time=00:01:32.16 bitrate= 644.5kbits/s dup=0 drop=11052 speed=0.0965x
frame= 2768 fps=2.9 q=25.0 size=    7255kB time=00:01:32.23 bitrate= 644.3kbits/s dup=0 drop=11058 speed=0.0965x
frame= 2770 fps=2.9 q=25.0 size=    7258kB time=00:01:32.30 bitrate= 644.2kbits/s dup=0 drop=11066 speed=0.0965x
frame= 2772 fps=2.9 q=25.0 size=    7261kB time=00:01:32.36 bitrate= 644.0kbits/s dup=0 drop=11074 speed=0.0965x
frame= 2774 fps=2.9 q=25.0 size=    7265kB time=00:01:32.43 bitrate= 643.9kbits/s dup=0 drop=11082 speed=0.0965x
frame= 2776 fps=2.9 q=25.0 size=    7268kB time=00:01:32.50 bitrate= 643.7kbits/s dup=0 drop=11090 speed=0.0966x
frame= 2778 fps=2.9 q=25.0 size=    7272kB time=00:01:32.56 bitrate= 643.5kbits/s dup=0 drop=11098 speed=0.0966x
frame= 2780 fps=2.9 q=25.0 size=    7275kB time=00:01:32.63 bitrate= 643.4kbits/s dup=0 drop=11106 speed=0.0966x
frame= 2782 fps=2.9 q=25.0 size=    7279kB time=00:01:32.70 bitrate= 643.2kbits/s dup=0 drop=11114 speed=0.0966x
frame= 2784 fps=2.9 q=25.0 size=    7282kB time=00:01:32.76 bitrate= 643.0kbits/s dup=0 drop=11122 speed=0.0966x
frame= 2785 fps=2.9 q=25.0 size=    7284kB time=00:01:32.80 bitrate= 643.0kbits/s dup=0 drop=11128 speed=0.0966x
frame= 2787 fps=2.9 q=25.0 size=    7287kB time=00:01:32.86 bitrate= 642.8kbits/s dup=0 drop=11134 speed=0.0966x
frame= 2788 fps=2.9 q=25.0 size=    7289kB time=00:01:32.90 bitrate= 642.7kbits/s dup=0 drop=11138 speed=0.0966x
frame= 2790 fps=2.9 q=25.0 size=    7292kB time=00:01:32.96 bitrate= 642.6kbits/s dup=0 drop=11146 speed=0.0966x
frame= 2792 fps=2.9 q=25.0 size=    7295kB time=00:01:33.03 bitrate= 642.4kbits/s dup=0 drop=11154 speed=0.0966x
frame= 2793 fps=2.9 q=25.0 size=    7297kB time=00:01:33.06 bitrate= 642.3kbits/s dup=0 drop=11159 speed=0.0966x
frame= 2795 fps=2.9 q=25.0 size=    7300kB time=00:01:33.13 bitrate= 642.1kbits/s dup=0 drop=11166 speed=0.0966x
frame= 2797 fps=2.9 q=25.0 size=    7304kB time=00:01:33.20 bitrate= 642.0kbits/s dup=0 drop=11174 speed=0.0966x
frame= 2799 fps=2.9 q=25.0 size=    7307kB time=00:01:33.26 bitrate= 641.8kbits/s dup=0 drop=11182 speed=0.0966x
frame= 2801 fps=2.9 q=25.0 size=    7310kB time=00:01:33.33 bitrate= 641.6kbits/s dup=0 drop=11190 speed=0.0966x
frame= 2802 fps=2.9 q=25.0 size=    7312kB time=00:01:33.36 bitrate= 641.6kbits/s dup=0 drop=11194 speed=0.0966x
frame= 2804 fps=2.9 q=25.0 size=    7315kB time=00:01:33.43 bitrate= 641.4kbits/s dup=0 drop=11202 speed=0.0966x
frame= 2805 fps=2.9 q=25.0 size=    7317kB time=00:01:33.46 bitrate= 641.3kbits/s dup=0 drop=11209 speed=0.0966x
frame= 2807 fps=2.9 q=25.0 size=    7320kB time=00:01:33.53 bitrate= 641.1kbits/s dup=0 drop=11214 speed=0.0966x
frame= 2808 fps=2.9 q=25.0 size=    7322kB time=00:01:33.56 bitrate= 641.1kbits/s dup=0 drop=11219 speed=0.0966x
frame= 2810 fps=2.9 q=25.0 size=    7325kB time=00:01:33.63 bitrate= 640.9kbits/s dup=0 drop=11226 speed=0.0966x
frame= 2811 fps=2.9 q=25.0 size=    7327kB time=00:01:33.66 bitrate= 640.8kbits/s dup=0 drop=11232 speed=0.0966x
frame= 2813 fps=2.9 q=25.0 size=    7330kB time=00:01:33.73 bitrate= 640.6kbits/s dup=0 drop=11238 speed=0.0966x
frame= 2815 fps=2.9 q=25.0 size=    7334kB time=00:01:33.80 bitrate= 640.5kbits/s dup=0 drop=11246 speed=0.0966x
frame= 2817 fps=2.9 q=25.0 size=    7337kB time=00:01:33.86 bitrate= 640.3kbits/s dup=0 drop=11254 speed=0.0967x
frame= 2818 fps=2.9 q=25.0 size=    7339kB time=00:01:33.90 bitrate= 640.2kbits/s dup=0 drop=11260 speed=0.0966x
frame= 2820 fps=2.9 q=25.0 size=    7342kB time=00:01:33.96 bitrate= 640.1kbits/s dup=0 drop=11266 speed=0.0967x
frame= 2821 fps=2.9 q=25.0 size=    7343kB time=00:01:34.00 bitrate= 640.0kbits/s dup=0 drop=11273 speed=0.0966x
frame= 2823 fps=2.9 q=25.0 size=    7347kB time=00:01:34.06 bitrate= 639.8kbits/s dup=0 drop=11278 speed=0.0967x
frame= 2825 fps=2.9 q=25.0 size=    7350kB time=00:01:34.13 bitrate= 639.6kbits/s dup=0 drop=11286 speed=0.0967x
frame= 2826 fps=2.9 q=25.0 size=    7352kB time=00:01:34.16 bitrate= 639.6kbits/s dup=0 drop=11291 speed=0.0966x
frame= 2828 fps=2.9 q=25.0 size=    7355kB time=00:01:34.23 bitrate= 639.4kbits/s dup=0 drop=11298 speed=0.0967x
frame= 2829 fps=2.9 q=25.0 size=    7357kB time=00:01:34.26 bitrate= 639.3kbits/s dup=0 drop=11304 speed=0.0966x
frame= 2831 fps=2.9 q=25.0 size=    7360kB time=00:01:34.33 bitrate= 639.2kbits/s dup=0 drop=11310 speed=0.0967x
frame= 2833 fps=2.9 q=25.0 size=    7363kB time=00:01:34.40 bitrate= 639.0kbits/s dup=0 drop=11318 speed=0.0967x
frame= 2835 fps=2.9 q=25.0 size=    7367kB time=00:01:34.46 bitrate= 638.8kbits/s dup=0 drop=11326 speed=0.0967x
frame= 2837 fps=2.9 q=25.0 size=    7370kB time=00:01:34.53 bitrate= 638.7kbits/s dup=0 drop=11334 speed=0.0967x
frame= 2839 fps=2.9 q=25.0 size=    7373kB time=00:01:34.60 bitrate= 638.5kbits/s dup=0 drop=11342 speed=0.0967x
frame= 2841 fps=2.9 q=25.0 size=    7377kB time=00:01:34.66 bitrate= 638.4kbits/s dup=0 drop=11350 speed=0.0967x
frame= 2842 fps=2.9 q=25.0 size=    7379kB time=00:01:34.70 bitrate= 638.3kbits/s dup=0 drop=11356 speed=0.0967x
frame= 2844 fps=2.9 q=25.0 size=    7382kB time=00:01:34.76 bitrate= 638.1kbits/s dup=0 drop=11362 speed=0.0967x
frame= 2845 fps=2.9 q=25.0 size=    7384kB time=00:01:34.80 bitrate= 638.0kbits/s dup=0 drop=11369 speed=0.0967x
frame= 2847 fps=2.9 q=25.0 size=    7387kB time=00:01:34.86 bitrate= 637.9kbits/s dup=0 drop=11374 speed=0.0967x
frame= 2848 fps=2.9 q=25.0 size=    7389kB time=00:01:34.90 bitrate= 637.8kbits/s dup=0 drop=11381 speed=0.0967x
frame= 2850 fps=2.9 q=25.0 size=    7392kB time=00:01:34.96 bitrate= 637.6kbits/s dup=0 drop=11386 speed=0.0967x
frame= 2851 fps=2.9 q=25.0 size=    7394kB time=00:01:35.00 bitrate= 637.6kbits/s dup=0 drop=11393 speed=0.0967x
frame= 2853 fps=2.9 q=25.0 size=    7397kB time=00:01:35.06 bitrate= 637.4kbits/s dup=0 drop=11398 speed=0.0967x
frame= 2855 fps=2.9 q=25.0 size=    7400kB time=00:01:35.13 bitrate= 637.2kbits/s dup=0 drop=11406 speed=0.0967x
frame= 2856 fps=2.9 q=25.0 size=    7402kB time=00:01:35.16 bitrate= 637.1kbits/s dup=0 drop=11412 speed=0.0967x
frame= 2858 fps=2.9 q=25.0 size=    7405kB time=00:01:35.23 bitrate= 637.0kbits/s dup=0 drop=11418 speed=0.0967x
frame= 2859 fps=2.9 q=25.0 size=    7407kB time=00:01:35.26 bitrate= 636.9kbits/s dup=0 drop=11424 speed=0.0967x
frame= 2861 fps=2.9 q=25.0 size=    7410kB time=00:01:35.33 bitrate= 636.8kbits/s dup=0 drop=11430 speed=0.0967x
frame= 2862 fps=2.9 q=25.0 size=    7412kB time=00:01:35.36 bitrate= 636.7kbits/s dup=0 drop=11436 speed=0.0967x
frame= 2864 fps=2.9 q=25.0 size=    7415kB time=00:01:35.43 bitrate= 636.5kbits/s dup=0 drop=11442 speed=0.0967x
frame= 2865 fps=2.9 q=25.0 size=    7417kB time=00:01:35.46 bitrate= 636.5kbits/s dup=0 drop=11449 speed=0.0967x
frame= 2867 fps=2.9 q=25.0 size=    7420kB time=00:01:35.53 bitrate= 636.3kbits/s dup=0 drop=11454 speed=0.0967x
frame= 2868 fps=2.9 q=25.0 size=    7422kB time=00:01:35.56 bitrate= 636.2kbits/s dup=0 drop=11459 speed=0.0967x
frame= 2870 fps=2.9 q=25.0 size=    7425kB time=00:01:35.63 bitrate= 636.0kbits/s dup=0 drop=11466 speed=0.0967x
frame= 2871 fps=2.9 q=25.0 size=    7427kB time=00:01:35.66 bitrate= 636.0kbits/s dup=0 drop=11470 speed=0.0967x
frame= 2873 fps=2.9 q=25.0 size=    7430kB time=00:01:35.73 bitrate= 635.8kbits/s dup=0 drop=11478 speed=0.0967x
frame= 2874 fps=2.9 q=25.0 size=    7432kB time=00:01:35.76 bitrate= 635.7kbits/s dup=0 drop=11484 speed=0.0967x
frame= 2876 fps=2.9 q=25.0 size=    7435kB time=00:01:35.83 bitrate= 635.6kbits/s dup=0 drop=11490 speed=0.0967x
frame= 2877 fps=2.9 q=25.0 size=    7437kB time=00:01:35.86 bitrate= 635.5kbits/s dup=0 drop=11495 speed=0.0967x
frame= 2879 fps=2.9 q=25.0 size=    7440kB time=00:01:35.93 bitrate= 635.3kbits/s dup=0 drop=11502 speed=0.0967x
frame= 2880 fps=2.9 q=25.0 size=    7442kB time=00:01:35.96 bitrate= 635.2kbits/s dup=0 drop=11507 speed=0.0967x
frame= 2881 fps=2.9 q=25.0 size=    7443kB time=00:01:36.00 bitrate= 635.2kbits/s dup=0 drop=11512 speed=0.0967x
frame= 2883 fps=2.9 q=25.0 size=    7446kB time=00:01:36.06 bitrate= 635.0kbits/s dup=0 drop=11518 speed=0.0967x
frame= 2884 fps=2.9 q=25.0 size=    7448kB time=00:01:36.10 bitrate= 634.9kbits/s dup=0 drop=11524 speed=0.0967x
frame= 2886 fps=2.9 q=25.0 size=    7452kB time=00:01:36.16 bitrate= 634.8kbits/s dup=0 drop=11530 speed=0.0967x
frame= 2887 fps=2.9 q=25.0 size=    7453kB time=00:01:36.20 bitrate= 634.7kbits/s dup=0 drop=11535 speed=0.0967x
frame= 2888 fps=2.9 q=25.0 size=    7455kB time=00:01:36.23 bitrate= 634.6kbits/s dup=0 drop=11541 speed=0.0966x
frame= 2890 fps=2.9 q=25.0 size=    7458kB time=00:01:36.30 bitrate= 634.4kbits/s dup=0 drop=11546 speed=0.0967x
frame= 2891 fps=2.9 q=25.0 size=    7460kB time=00:01:36.33 bitrate= 634.4kbits/s dup=0 drop=11553 speed=0.0966x
frame= 2893 fps=2.9 q=25.0 size=    7463kB time=00:01:36.40 bitrate= 634.2kbits/s dup=0 drop=11558 speed=0.0967x
frame= 2894 fps=2.9 q=25.0 size=    7465kB time=00:01:36.43 bitrate= 634.1kbits/s dup=0 drop=11564 speed=0.0966x
frame= 2896 fps=2.9 q=25.0 size=    7468kB time=00:01:36.50 bitrate= 634.0kbits/s dup=0 drop=11570 speed=0.0967x
frame= 2897 fps=2.9 q=25.0 size=    7470kB time=00:01:36.53 bitrate= 633.9kbits/s dup=0 drop=11577 speed=0.0966x
frame= 2899 fps=2.9 q=25.0 size=    7473kB time=00:01:36.60 bitrate= 633.7kbits/s dup=0 drop=11582 speed=0.0967x
frame= 2900 fps=2.9 q=25.0 size=    7475kB time=00:01:36.63 bitrate= 633.6kbits/s dup=0 drop=11588 speed=0.0967x
frame= 2902 fps=2.9 q=25.0 size=    7478kB time=00:01:36.70 bitrate= 633.5kbits/s dup=0 drop=11594 speed=0.0967x
frame= 2904 fps=2.9 q=25.0 size=    7481kB time=00:01:36.76 bitrate= 633.3kbits/s dup=0 drop=11602 speed=0.0967x
frame= 2906 fps=2.9 q=25.0 size=    7484kB time=00:01:36.83 bitrate= 633.2kbits/s dup=0 drop=11610 speed=0.0967x
frame= 2907 fps=2.9 q=25.0 size=    7486kB time=00:01:36.86 bitrate= 633.1kbits/s dup=0 drop=11615 speed=0.0967x
frame= 2909 fps=2.9 q=25.0 size=    7489kB time=00:01:36.93 bitrate= 632.9kbits/s dup=0 drop=11622 speed=0.0967x
frame= 2910 fps=2.9 q=25.0 size=    7491kB time=00:01:36.96 bitrate= 632.9kbits/s dup=0 drop=11628 speed=0.0967x
frame= 2912 fps=2.9 q=25.0 size=    7494kB time=00:01:37.03 bitrate= 632.7kbits/s dup=0 drop=11634 speed=0.0967x
frame= 2914 fps=2.9 q=25.0 size=    7498kB time=00:01:37.10 bitrate= 632.6kbits/s dup=0 drop=11642 speed=0.0967x
frame= 2915 fps=2.9 q=25.0 size=    7499kB time=00:01:37.13 bitrate= 632.5kbits/s dup=0 drop=11649 speed=0.0967x
frame= 2917 fps=2.9 q=25.0 size=    7503kB time=00:01:37.20 bitrate= 632.3kbits/s dup=0 drop=11654 speed=0.0967x
frame= 2918 fps=2.9 q=25.0 size=    7504kB time=00:01:37.23 bitrate= 632.2kbits/s dup=0 drop=11660 speed=0.0967x
frame= 2919 fps=2.9 q=25.0 size=    7506kB time=00:01:37.26 bitrate= 632.2kbits/s dup=0 drop=11665 speed=0.0967x
frame= 2921 fps=2.9 q=25.0 size=    7509kB time=00:01:37.33 bitrate= 632.0kbits/s dup=0 drop=11670 speed=0.0967x
frame= 2922 fps=2.9 q=25.0 size=    7511kB time=00:01:37.36 bitrate= 631.9kbits/s dup=0 drop=11676 speed=0.0967x
frame= 2924 fps=2.9 q=25.0 size=    7515kB time=00:01:37.43 bitrate= 631.8kbits/s dup=0 drop=11682 speed=0.0967x
frame= 2925 fps=2.9 q=25.0 size=    7516kB time=00:01:37.46 bitrate= 631.7kbits/s dup=0 drop=11688 speed=0.0967x
frame= 2927 fps=2.9 q=25.0 size=    7520kB time=00:01:37.53 bitrate= 631.6kbits/s dup=0 drop=11694 speed=0.0967x
frame= 2928 fps=2.9 q=25.0 size=    7521kB time=00:01:37.56 bitrate= 631.5kbits/s dup=0 drop=11700 speed=0.0967x
frame= 2930 fps=2.9 q=25.0 size=    7525kB time=00:01:37.63 bitrate= 631.4kbits/s dup=0 drop=11706 speed=0.0967x
frame= 2932 fps=2.9 q=25.0 size=    7528kB time=00:01:37.70 bitrate= 631.2kbits/s dup=0 drop=11714 speed=0.0967x
frame= 2933 fps=2.9 q=25.0 size=    7530kB time=00:01:37.73 bitrate= 631.1kbits/s dup=0 drop=11720 speed=0.0967x
frame= 2935 fps=2.9 q=25.0 size=    7533kB time=00:01:37.80 bitrate= 631.0kbits/s dup=0 drop=11726 speed=0.0967x
frame= 2936 fps=2.9 q=25.0 size=    7534kB time=00:01:37.83 bitrate= 630.9kbits/s dup=0 drop=11732 speed=0.0967x
frame= 2938 fps=2.9 q=25.0 size=    7538kB time=00:01:37.90 bitrate= 630.7kbits/s dup=0 drop=11738 speed=0.0967x
frame= 2940 fps=2.9 q=25.0 size=    7541kB time=00:01:37.96 bitrate= 630.6kbits/s dup=0 drop=11746 speed=0.0967x
frame= 2942 fps=2.9 q=25.0 size=    7544kB time=00:01:38.03 bitrate= 630.4kbits/s dup=0 drop=11754 speed=0.0967x
frame= 2943 fps=2.9 q=25.0 size=    7546kB time=00:01:38.06 bitrate= 630.4kbits/s dup=0 drop=11761 speed=0.0967x
frame= 2945 fps=2.9 q=25.0 size=    7549kB time=00:01:38.13 bitrate= 630.2kbits/s dup=0 drop=11766 speed=0.0967x
frame= 2947 fps=2.9 q=25.0 size=    7552kB time=00:01:38.20 bitrate= 630.0kbits/s dup=0 drop=11774 speed=0.0967x
frame= 2949 fps=2.9 q=25.0 size=    7556kB time=00:01:38.26 bitrate= 629.9kbits/s dup=0 drop=11782 speed=0.0967x
frame= 2951 fps=2.9 q=25.0 size=    7559kB time=00:01:38.33 bitrate= 629.7kbits/s dup=0 drop=11790 speed=0.0967x
frame= 2953 fps=2.9 q=25.0 size=    7562kB time=00:01:38.40 bitrate= 629.6kbits/s dup=0 drop=11798 speed=0.0967x
frame= 2955 fps=2.9 q=25.0 size=    7566kB time=00:01:38.46 bitrate= 629.4kbits/s dup=0 drop=11806 speed=0.0968x
frame= 2956 fps=2.9 q=25.0 size=    7567kB time=00:01:38.50 bitrate= 629.4kbits/s dup=0 drop=11813 speed=0.0967x
frame= 2958 fps=2.9 q=25.0 size=    7571kB time=00:01:38.56 bitrate= 629.2kbits/s dup=0 drop=11818 speed=0.0968x
frame= 2960 fps=2.9 q=25.0 size=    7574kB time=00:01:38.63 bitrate= 629.1kbits/s dup=0 drop=11826 speed=0.0968x
frame= 2962 fps=2.9 q=25.0 size=    7577kB time=00:01:38.70 bitrate= 628.9kbits/s dup=0 drop=11834 speed=0.0968x
frame= 2964 fps=2.9 q=25.0 size=    7581kB time=00:01:38.76 bitrate= 628.8kbits/s dup=0 drop=11842 speed=0.0968x
frame= 2965 fps=2.9 q=25.0 size=    7582kB time=00:01:38.80 bitrate= 628.7kbits/s dup=0 drop=11848 speed=0.0968x
frame= 2967 fps=2.9 q=25.0 size=    7586kB time=00:01:38.86 bitrate= 628.5kbits/s dup=0 drop=11854 speed=0.0968x
frame= 2969 fps=2.9 q=25.0 size=    7589kB time=00:01:38.93 bitrate= 628.4kbits/s dup=0 drop=11862 speed=0.0968x
frame= 2970 fps=2.9 q=25.0 size=    7590kB time=00:01:38.96 bitrate= 628.3kbits/s dup=0 drop=11868 speed=0.0968x
frame= 2972 fps=2.9 q=25.0 size=    7594kB time=00:01:39.03 bitrate= 628.2kbits/s dup=0 drop=11874 speed=0.0968x
frame= 2973 fps=2.9 q=25.0 size=    7596kB time=00:01:39.06 bitrate= 628.1kbits/s dup=0 drop=11881 speed=0.0968x
frame= 2975 fps=2.9 q=25.0 size=    7599kB time=00:01:39.13 bitrate= 628.0kbits/s dup=0 drop=11886 speed=0.0968x
frame= 2977 fps=2.9 q=25.0 size=    7603kB time=00:01:39.20 bitrate= 627.8kbits/s dup=0 drop=11894 speed=0.0968x
frame= 2978 fps=2.9 q=25.0 size=    7604kB time=00:01:39.23 bitrate= 627.7kbits/s dup=0 drop=11901 speed=0.0968x
frame= 2980 fps=2.9 q=25.0 size=    7607kB time=00:01:39.30 bitrate= 627.6kbits/s dup=0 drop=11906 speed=0.0968x
frame= 2982 fps=2.9 q=25.0 size=    7611kB time=00:01:39.36 bitrate= 627.5kbits/s dup=0 drop=11914 speed=0.0968x
frame= 2984 fps=2.9 q=25.0 size=    7614kB time=00:01:39.43 bitrate= 627.3kbits/s dup=0 drop=11922 speed=0.0968x
frame= 2985 fps=2.9 q=25.0 size=    7616kB time=00:01:39.46 bitrate= 627.2kbits/s dup=0 drop=11928 speed=0.0968x
frame= 2987 fps=2.9 q=25.0 size=    7619kB time=00:01:39.53 bitrate= 627.1kbits/s dup=0 drop=11934 speed=0.0968x
frame= 2988 fps=2.9 q=25.0 size=    7621kB time=00:01:39.56 bitrate= 627.0kbits/s dup=0 drop=11941 speed=0.0968x
frame= 2990 fps=2.9 q=26.0 size=    7637kB time=00:01:39.63 bitrate= 627.9kbits/s dup=0 drop=11947 speed=0.0968x
frame= 2992 fps=2.9 q=25.0 size=    7641kB time=00:01:39.70 bitrate= 627.8kbits/s dup=0 drop=11954 speed=0.0969x
frame= 2994 fps=2.9 q=25.0 size=    7645kB time=00:01:39.76 bitrate= 627.7kbits/s dup=0 drop=11962 speed=0.0969x
frame= 2996 fps=2.9 q=25.0 size=    7649kB time=00:01:39.83 bitrate= 627.6kbits/s dup=0 drop=11971 speed=0.0969x
frame= 2998 fps=2.9 q=25.0 size=    7653kB time=00:01:39.90 bitrate= 627.6kbits/s dup=0 drop=11978 speed=0.0969x
frame= 3000 fps=2.9 q=25.0 size=    7657kB time=00:01:39.96 bitrate= 627.5kbits/s dup=0 drop=11986 speed=0.0969x
frame= 3002 fps=2.9 q=25.0 size=    7661kB time=00:01:40.03 bitrate= 627.4kbits/s dup=0 drop=11994 speed=0.0969x
frame= 3004 fps=2.9 q=25.0 size=    7665kB time=00:01:40.10 bitrate= 627.3kbits/s dup=0 drop=12002 speed=0.0969x
frame= 3006 fps=2.9 q=25.0 size=    7668kB time=00:01:40.16 bitrate= 627.1kbits/s dup=0 drop=12010 speed=0.0969x
frame= 3007 fps=2.9 q=25.0 size=    7670kB time=00:01:40.20 bitrate= 627.1kbits/s dup=0 drop=12016 speed=0.0969x
frame= 3009 fps=2.9 q=25.0 size=    7674kB time=00:01:40.26 bitrate= 626.9kbits/s dup=0 drop=12022 speed=0.0969x
frame= 3010 fps=2.9 q=25.0 size=    7675kB time=00:01:40.30 bitrate= 626.9kbits/s dup=0 drop=12029 speed=0.0969x
frame= 3012 fps=2.9 q=25.0 size=    7679kB time=00:01:40.36 bitrate= 626.7kbits/s dup=0 drop=12034 speed=0.0969x
frame= 3013 fps=2.9 q=25.0 size=    7680kB time=00:01:40.40 bitrate= 626.7kbits/s dup=0 drop=12041 speed=0.0969x
frame= 3015 fps=2.9 q=25.0 size=    7684kB time=00:01:40.46 bitrate= 626.5kbits/s dup=0 drop=12046 speed=0.0969x
frame= 3016 fps=2.9 q=25.0 size=    7686kB time=00:01:40.50 bitrate= 626.5kbits/s dup=0 drop=12050 speed=0.0969x
frame= 3017 fps=2.9 q=25.0 size=    7687kB time=00:01:40.53 bitrate= 626.4kbits/s dup=0 drop=12056 speed=0.0969x
frame= 3019 fps=2.9 q=25.0 size=    7690kB time=00:01:40.60 bitrate= 626.2kbits/s dup=0 drop=12062 speed=0.0969x
frame= 3021 fps=2.9 q=25.0 size=    7694kB time=00:01:40.66 bitrate= 626.1kbits/s dup=0 drop=12070 speed=0.0969x
frame= 3022 fps=2.9 q=25.0 size=    7695kB time=00:01:40.70 bitrate= 626.0kbits/s dup=0 drop=12076 speed=0.0969x
frame= 3024 fps=2.9 q=25.0 size=    7699kB time=00:01:40.76 bitrate= 625.9kbits/s dup=0 drop=12082 speed=0.0969x
frame= 3026 fps=2.9 q=25.0 size=    7702kB time=00:01:40.83 bitrate= 625.7kbits/s dup=0 drop=12090 speed=0.097x
frame= 3027 fps=2.9 q=25.0 size=    7704kB time=00:01:40.86 bitrate= 625.7kbits/s dup=0 drop=12096 speed=0.0969x
frame= 3029 fps=2.9 q=25.0 size=    7707kB time=00:01:40.93 bitrate= 625.5kbits/s dup=0 drop=12102 speed=0.0969x
frame= 3030 fps=2.9 q=25.0 size=    7708kB time=00:01:40.96 bitrate= 625.4kbits/s dup=0 drop=12109 speed=0.0969x
frame= 3032 fps=2.9 q=25.0 size=    7712kB time=00:01:41.03 bitrate= 625.3kbits/s dup=0 drop=12114 speed=0.0969x
frame= 3033 fps=2.9 q=25.0 size=    7713kB time=00:01:41.06 bitrate= 625.2kbits/s dup=0 drop=12119 speed=0.0969x
frame= 3035 fps=2.9 q=25.0 size=    7716kB time=00:01:41.13 bitrate= 625.0kbits/s dup=0 drop=12126 speed=0.0969x
frame= 3037 fps=2.9 q=25.0 size=    7720kB time=00:01:41.20 bitrate= 624.9kbits/s dup=0 drop=12134 speed=0.097x
frame= 3039 fps=2.9 q=25.0 size=    7723kB time=00:01:41.26 bitrate= 624.8kbits/s dup=0 drop=12142 speed=0.097x
frame= 3041 fps=2.9 q=25.0 size=    7726kB time=00:01:41.33 bitrate= 624.6kbits/s dup=0 drop=12150 speed=0.097x
frame= 3043 fps=2.9 q=25.0 size=    7729kB time=00:01:41.40 bitrate= 624.4kbits/s dup=0 drop=12158 speed=0.097x
frame= 3045 fps=2.9 q=25.0 size=    7733kB time=00:01:41.46 bitrate= 624.3kbits/s dup=0 drop=12166 speed=0.097x
frame= 3046 fps=2.9 q=25.0 size=    7734kB time=00:01:41.50 bitrate= 624.2kbits/s dup=0 drop=12173 speed=0.097x
frame= 3048 fps=2.9 q=25.0 size=    7738kB time=00:01:41.56 bitrate= 624.1kbits/s dup=0 drop=12178 speed=0.097x
frame= 3049 fps=2.9 q=25.0 size=    7739kB time=00:01:41.60 bitrate= 624.0kbits/s dup=0 drop=12184 speed=0.097x
frame= 3051 fps=2.9 q=25.0 size=    7742kB time=00:01:41.66 bitrate= 623.9kbits/s dup=0 drop=12190 speed=0.097x
frame= 3052 fps=2.9 q=25.0 size=    7744kB time=00:01:41.70 bitrate= 623.8kbits/s dup=0 drop=12197 speed=0.097x
frame= 3054 fps=2.9 q=25.0 size=    7747kB time=00:01:41.76 bitrate= 623.6kbits/s dup=0 drop=12202 speed=0.097x
frame= 3055 fps=2.9 q=25.0 size=    7749kB time=00:01:41.80 bitrate= 623.5kbits/s dup=0 drop=12209 speed=0.097x
frame= 3057 fps=2.9 q=25.0 size=    7752kB time=00:01:41.86 bitrate= 623.4kbits/s dup=0 drop=12214 speed=0.097x
frame= 3058 fps=2.9 q=25.0 size=    7753kB time=00:01:41.90 bitrate= 623.3kbits/s dup=0 drop=12221 speed=0.097x
frame= 3060 fps=2.9 q=25.0 size=    7756kB time=00:01:41.96 bitrate= 623.1kbits/s dup=0 drop=12226 speed=0.097x
frame= 3061 fps=2.9 q=25.0 size=    7758kB time=00:01:42.00 bitrate= 623.1kbits/s dup=0 drop=12233 speed=0.097x
frame= 3063 fps=2.9 q=25.0 size=    7761kB time=00:01:42.06 bitrate= 622.9kbits/s dup=0 drop=12238 speed=0.097x
frame= 3065 fps=2.9 q=25.0 size=    7764kB time=00:01:42.13 bitrate= 622.8kbits/s dup=0 drop=12246 speed=0.097x
frame= 3067 fps=2.9 q=25.0 size=    7767kB time=00:01:42.20 bitrate= 622.6kbits/s dup=0 drop=12254 speed=0.097x
frame= 3068 fps=2.9 q=25.0 size=    7769kB time=00:01:42.23 bitrate= 622.5kbits/s dup=0 drop=12261 speed=0.097x
frame= 3070 fps=2.9 q=25.0 size=    7772kB time=00:01:42.30 bitrate= 622.4kbits/s dup=0 drop=12266 speed=0.097x
frame= 3071 fps=2.9 q=25.0 size=    7774kB time=00:01:42.33 bitrate= 622.3kbits/s dup=0 drop=12273 speed=0.097x
frame= 3073 fps=2.9 q=25.0 size=    7777kB time=00:01:42.40 bitrate= 622.2kbits/s dup=0 drop=12278 speed=0.097x
frame= 3075 fps=2.9 q=25.0 size=    7780kB time=00:01:42.46 bitrate= 622.0kbits/s dup=0 drop=12286 speed=0.097x
frame= 3076 fps=2.9 q=25.0 size=    7782kB time=00:01:42.50 bitrate= 621.9kbits/s dup=0 drop=12293 speed=0.097x
frame= 3078 fps=2.9 q=25.0 size=    7785kB time=00:01:42.56 bitrate= 621.8kbits/s dup=0 drop=12298 speed=0.097x
frame= 3080 fps=2.9 q=25.0 size=    7788kB time=00:01:42.63 bitrate= 621.6kbits/s dup=0 drop=12306 speed=0.0971x
frame= 3081 fps=2.9 q=25.0 size=    7790kB time=00:01:42.66 bitrate= 621.6kbits/s dup=0 drop=12313 speed=0.097x
frame= 3083 fps=2.9 q=25.0 size=    7793kB time=00:01:42.73 bitrate= 621.4kbits/s dup=0 drop=12318 speed=0.0971x
frame= 3084 fps=2.9 q=25.0 size=    7794kB time=00:01:42.76 bitrate= 621.3kbits/s dup=0 drop=12325 speed=0.097x
frame= 3086 fps=2.9 q=25.0 size=    7798kB time=00:01:42.83 bitrate= 621.2kbits/s dup=0 drop=12330 speed=0.0971x
frame= 3087 fps=2.9 q=25.0 size=    7799kB time=00:01:42.86 bitrate= 621.1kbits/s dup=0 drop=12337 speed=0.097x
frame= 3089 fps=2.9 q=25.0 size=    7802kB time=00:01:42.93 bitrate= 620.9kbits/s dup=0 drop=12342 speed=0.0971x
frame= 3090 fps=2.9 q=25.0 size=    7804kB time=00:01:42.96 bitrate= 620.9kbits/s dup=0 drop=12349 speed=0.097x
frame= 3092 fps=2.9 q=25.0 size=    7807kB time=00:01:43.03 bitrate= 620.7kbits/s dup=0 drop=12354 speed=0.0971x
frame= 3093 fps=2.9 q=25.0 size=    7809kB time=00:01:43.06 bitrate= 620.6kbits/s dup=0 drop=12360 speed=0.097x
frame= 3095 fps=2.9 q=25.0 size=    7812kB time=00:01:43.13 bitrate= 620.5kbits/s dup=0 drop=12366 speed=0.0971x
frame= 3096 fps=2.9 q=25.0 size=    7813kB time=00:01:43.16 bitrate= 620.4kbits/s dup=0 drop=12373 speed=0.097x
frame= 3098 fps=2.9 q=25.0 size=    7817kB time=00:01:43.23 bitrate= 620.3kbits/s dup=0 drop=12378 speed=0.0971x
frame= 3099 fps=2.9 q=25.0 size=    7819kB time=00:01:43.26 bitrate= 620.2kbits/s dup=0 drop=12384 speed=0.097x
frame= 3101 fps=2.9 q=25.0 size=    7822kB time=00:01:43.33 bitrate= 620.1kbits/s dup=0 drop=12390 speed=0.0971x
frame= 3103 fps=2.9 q=25.0 size=    7825kB time=00:01:43.40 bitrate= 619.9kbits/s dup=0 drop=12398 speed=0.0971x
frame= 3104 fps=2.9 q=25.0 size=    7826kB time=00:01:43.43 bitrate= 619.9kbits/s dup=0 drop=12405 speed=0.097x
frame= 3106 fps=2.9 q=25.0 size=    7830kB time=00:01:43.50 bitrate= 619.7kbits/s dup=0 drop=12412 speed=0.0971x
frame= 3108 fps=2.9 q=25.0 size=    7833kB time=00:01:43.56 bitrate= 619.6kbits/s dup=0 drop=12419 speed=0.0971x
frame= 3110 fps=2.9 q=25.0 size=    7836kB time=00:01:43.63 bitrate= 619.4kbits/s dup=0 drop=12426 speed=0.0971x
frame= 3111 fps=2.9 q=25.0 size=    7838kB time=00:01:43.66 bitrate= 619.4kbits/s dup=0 drop=12433 speed=0.0971x
frame= 3113 fps=2.9 q=25.0 size=    7841kB time=00:01:43.73 bitrate= 619.2kbits/s dup=0 drop=12438 speed=0.0971x
frame= 3115 fps=2.9 q=25.0 size=    7844kB time=00:01:43.80 bitrate= 619.1kbits/s dup=0 drop=12446 speed=0.0971x
frame= 3117 fps=2.9 q=25.0 size=    7847kB time=00:01:43.86 bitrate= 618.9kbits/s dup=0 drop=12454 speed=0.0971x
frame= 3119 fps=2.9 q=25.0 size=    7850kB time=00:01:43.93 bitrate= 618.8kbits/s dup=0 drop=12462 speed=0.0971x
frame= 3121 fps=2.9 q=25.0 size=    7854kB time=00:01:44.00 bitrate= 618.6kbits/s dup=0 drop=12470 speed=0.0971x
frame= 3123 fps=2.9 q=25.0 size=    7857kB time=00:01:44.06 bitrate= 618.5kbits/s dup=0 drop=12478 speed=0.0971x
frame= 3124 fps=2.9 q=25.0 size=    7858kB time=00:01:44.10 bitrate= 618.4kbits/s dup=0 drop=12483 speed=0.0971x
frame= 3126 fps=2.9 q=25.0 size=    7862kB time=00:01:44.16 bitrate= 618.3kbits/s dup=0 drop=12490 speed=0.0971x
frame= 3128 fps=2.9 q=25.0 size=    7865kB time=00:01:44.23 bitrate= 618.1kbits/s dup=0 drop=12498 speed=0.0972x
frame= 3130 fps=2.9 q=25.0 size=    7868kB time=00:01:44.30 bitrate= 618.0kbits/s dup=0 drop=12506 speed=0.0972x
frame= 3131 fps=2.9 q=25.0 size=    7870kB time=00:01:44.33 bitrate= 617.9kbits/s dup=0 drop=12510 speed=0.0971x
frame= 3132 fps=2.9 q=25.0 size=    7871kB time=00:01:44.36 bitrate= 617.8kbits/s dup=0 drop=12517 speed=0.0971x
frame= 3134 fps=2.9 q=25.0 size=    7874kB time=00:01:44.43 bitrate= 617.7kbits/s dup=0 drop=12522 speed=0.0972x
frame= 3135 fps=2.9 q=25.0 size=    7876kB time=00:01:44.46 bitrate= 617.6kbits/s dup=0 drop=12529 speed=0.0971x
frame= 3137 fps=2.9 q=25.0 size=    7879kB time=00:01:44.53 bitrate= 617.5kbits/s dup=0 drop=12534 speed=0.0972x
frame= 3139 fps=2.9 q=25.0 size=    7882kB time=00:01:44.60 bitrate= 617.3kbits/s dup=0 drop=12542 speed=0.0972x
frame= 3140 fps=2.9 q=25.0 size=    7884kB time=00:01:44.63 bitrate= 617.3kbits/s dup=0 drop=12547 speed=0.0971x
frame= 3142 fps=2.9 q=25.0 size=    7887kB time=00:01:44.70 bitrate= 617.1kbits/s dup=0 drop=12554 speed=0.0972x
frame= 3144 fps=2.9 q=25.0 size=    7890kB time=00:01:44.76 bitrate= 617.0kbits/s dup=0 drop=12562 speed=0.0972x
frame= 3146 fps=2.9 q=25.0 size=    7893kB time=00:01:44.83 bitrate= 616.8kbits/s dup=0 drop=12570 speed=0.0972x
frame= 3148 fps=2.9 q=25.0 size=    7896kB time=00:01:44.90 bitrate= 616.7kbits/s dup=0 drop=12578 speed=0.0972x
frame= 3150 fps=2.9 q=25.0 size=    7900kB time=00:01:44.96 bitrate= 616.5kbits/s dup=0 drop=12586 speed=0.0972x
frame= 3152 fps=2.9 q=25.0 size=    7903kB time=00:01:45.03 bitrate= 616.4kbits/s dup=0 drop=12594 speed=0.0972x
frame= 3154 fps=2.9 q=25.0 size=    7906kB time=00:01:45.10 bitrate= 616.2kbits/s dup=0 drop=12602 speed=0.0972x
frame= 3155 fps=2.9 q=25.0 size=    7908kB time=00:01:45.13 bitrate= 616.2kbits/s dup=0 drop=12609 speed=0.0972x
frame= 3157 fps=2.9 q=25.0 size=    7911kB time=00:01:45.20 bitrate= 616.0kbits/s dup=0 drop=12615 speed=0.0972x
frame= 3159 fps=2.9 q=25.0 size=    7914kB time=00:01:45.26 bitrate= 615.8kbits/s dup=0 drop=12623 speed=0.0972x
frame= 3161 fps=2.9 q=25.0 size=    7917kB time=00:01:45.33 bitrate= 615.7kbits/s dup=0 drop=12631 speed=0.0973x
frame= 3163 fps=2.9 q=25.0 size=    7920kB time=00:01:45.40 bitrate= 615.5kbits/s dup=0 drop=12639 speed=0.0973x
frame= 3165 fps=2.9 q=25.0 size=    7923kB time=00:01:45.46 bitrate= 615.4kbits/s dup=0 drop=12647 speed=0.0973x
frame= 3167 fps=2.9 q=25.0 size=    7926kB time=00:01:45.53 bitrate= 615.2kbits/s dup=0 drop=12654 speed=0.0973x
frame= 3169 fps=2.9 q=25.0 size=    7929kB time=00:01:45.60 bitrate= 615.1kbits/s dup=0 drop=12662 speed=0.0973x
frame= 3171 fps=2.9 q=25.0 size=    7932kB time=00:01:45.66 bitrate= 615.0kbits/s dup=0 drop=12670 speed=0.0973x
frame= 3173 fps=2.9 q=25.0 size=    7936kB time=00:01:45.73 bitrate= 614.8kbits/s dup=0 drop=12678 speed=0.0973x
frame= 3175 fps=2.9 q=25.0 size=    7939kB time=00:01:45.80 bitrate= 614.7kbits/s dup=0 drop=12686 speed=0.0974x
frame= 3176 fps=2.9 q=25.0 size=    7940kB time=00:01:45.83 bitrate= 614.6kbits/s dup=0 drop=12693 speed=0.0973x
frame= 3178 fps=2.9 q=25.0 size=    7943kB time=00:01:45.90 bitrate= 614.5kbits/s dup=0 drop=12698 speed=0.0974x
frame= 3180 fps=2.9 q=25.0 size=    7946kB time=00:01:45.96 bitrate= 614.3kbits/s dup=0 drop=12706 speed=0.0974x
frame= 3182 fps=2.9 q=25.0 size=    7950kB time=00:01:46.03 bitrate= 614.2kbits/s dup=0 drop=12714 speed=0.0974x
frame= 3184 fps=2.9 q=25.0 size=    7953kB time=00:01:46.10 bitrate= 614.0kbits/s dup=0 drop=12722 speed=0.0974x
frame= 3185 fps=2.9 q=25.0 size=    7954kB time=00:01:46.13 bitrate= 614.0kbits/s dup=0 drop=12728 speed=0.0974x
frame= 3187 fps=2.9 q=25.0 size=    7957kB time=00:01:46.20 bitrate= 613.8kbits/s dup=0 drop=12735 speed=0.0974x
frame= 3189 fps=2.9 q=25.0 size=    7960kB time=00:01:46.26 bitrate= 613.7kbits/s dup=0 drop=12742 speed=0.0974x
frame= 3191 fps=2.9 q=25.0 size=    7964kB time=00:01:46.33 bitrate= 613.5kbits/s dup=0 drop=12750 speed=0.0974x
frame= 3193 fps=2.9 q=25.0 size=    7967kB time=00:01:46.40 bitrate= 613.4kbits/s dup=0 drop=12758 speed=0.0974x
frame= 3195 fps=2.9 q=25.0 size=    7970kB time=00:01:46.46 bitrate= 613.2kbits/s dup=0 drop=12766 speed=0.0974x
frame= 3196 fps=2.9 q=25.0 size=    7971kB time=00:01:46.50 bitrate= 613.2kbits/s dup=0 drop=12771 speed=0.0974x
frame= 3197 fps=2.9 q=25.0 size=    7973kB time=00:01:46.53 bitrate= 613.1kbits/s dup=0 drop=12777 speed=0.0974x
frame= 3199 fps=2.9 q=25.0 size=    7976kB time=00:01:46.60 bitrate= 613.0kbits/s dup=0 drop=12782 speed=0.0974x
frame= 3200 fps=2.9 q=25.0 size=    7978kB time=00:01:46.63 bitrate= 612.9kbits/s dup=0 drop=12787 speed=0.0974x
frame= 3201 fps=2.9 q=25.0 size=    7979kB time=00:01:46.66 bitrate= 612.8kbits/s dup=0 drop=12793 speed=0.0974x
frame= 3203 fps=2.9 q=25.0 size=    7983kB time=00:01:46.73 bitrate= 612.7kbits/s dup=0 drop=12798 speed=0.0974x
frame= 3204 fps=2.9 q=25.0 size=    7984kB time=00:01:46.76 bitrate= 612.6kbits/s dup=0 drop=12804 speed=0.0974x
frame= 3206 fps=2.9 q=25.0 size=    7987kB time=00:01:46.83 bitrate= 612.5kbits/s dup=0 drop=12810 speed=0.0974x
frame= 3208 fps=2.9 q=25.0 size=    7991kB time=00:01:46.90 bitrate= 612.3kbits/s dup=0 drop=12818 speed=0.0974x
frame= 3210 fps=2.9 q=25.0 size=    7994kB time=00:01:46.96 bitrate= 612.2kbits/s dup=0 drop=12826 speed=0.0974x
frame= 3212 fps=2.9 q=25.0 size=    7997kB time=00:01:47.03 bitrate= 612.1kbits/s dup=0 drop=12834 speed=0.0974x
frame= 3214 fps=2.9 q=25.0 size=    8000kB time=00:01:47.10 bitrate= 611.9kbits/s dup=0 drop=12842 speed=0.0975x
frame= 3216 fps=2.9 q=25.0 size=    8003kB time=00:01:47.16 bitrate= 611.8kbits/s dup=0 drop=12850 speed=0.0975x
frame= 3217 fps=2.9 q=25.0 size=    8005kB time=00:01:47.20 bitrate= 611.7kbits/s dup=0 drop=12855 speed=0.0975x
frame= 3218 fps=2.9 q=25.0 size=    8007kB time=00:01:47.23 bitrate= 611.7kbits/s dup=0 drop=12860 speed=0.0974x
frame= 3219 fps=2.9 q=25.0 size=    8008kB time=00:01:47.26 bitrate= 611.6kbits/s dup=0 drop=12864 speed=0.0974x
frame= 3221 fps=2.9 q=25.0 size=    8011kB time=00:01:47.33 bitrate= 611.4kbits/s dup=0 drop=12870 speed=0.0974x
frame= 3222 fps=2.9 q=25.0 size=    8013kB time=00:01:47.36 bitrate= 611.4kbits/s dup=0 drop=12876 speed=0.0974x
frame= 3224 fps=2.9 q=25.0 size=    8016kB time=00:01:47.43 bitrate= 611.2kbits/s dup=0 drop=12882 speed=0.0974x
frame= 3225 fps=2.9 q=25.0 size=    8017kB time=00:01:47.46 bitrate= 611.1kbits/s dup=0 drop=12888 speed=0.0974x
frame= 3227 fps=2.9 q=25.0 size=    8021kB time=00:01:47.53 bitrate= 611.0kbits/s dup=0 drop=12894 speed=0.0974x
frame= 3228 fps=2.9 q=25.0 size=    8022kB time=00:01:47.56 bitrate= 611.0kbits/s dup=0 drop=12901 speed=0.0974x
frame= 3230 fps=2.9 q=25.0 size=    8025kB time=00:01:47.63 bitrate= 610.8kbits/s dup=0 drop=12906 speed=0.0974x
frame= 3231 fps=2.9 q=25.0 size=    8027kB time=00:01:47.66 bitrate= 610.7kbits/s dup=0 drop=12911 speed=0.0974x
frame= 3233 fps=2.9 q=25.0 size=    8030kB time=00:01:47.73 bitrate= 610.6kbits/s dup=0 drop=12918 speed=0.0974x
frame= 3234 fps=2.9 q=25.0 size=    8032kB time=00:01:47.76 bitrate= 610.5kbits/s dup=0 drop=12923 speed=0.0974x
frame= 3235 fps=2.9 q=25.0 size=    8033kB time=00:01:47.80 bitrate= 610.5kbits/s dup=0 drop=12929 speed=0.0974x
frame= 3237 fps=2.9 q=25.0 size=    8036kB time=00:01:47.86 bitrate= 610.3kbits/s dup=0 drop=12934 speed=0.0974x
frame= 3238 fps=2.9 q=25.0 size=    8038kB time=00:01:47.90 bitrate= 610.2kbits/s dup=0 drop=12938 speed=0.0974x
frame= 3239 fps=2.9 q=22.0 size=    8052kB time=00:01:47.93 bitrate= 611.1kbits/s dup=0 drop=12945 speed=0.0974x
frame= 3241 fps=2.9 q=25.0 size=    8055kB time=00:01:48.00 bitrate= 611.0kbits/s dup=0 drop=12951 speed=0.0974x
frame= 3243 fps=2.9 q=25.0 size=    8059kB time=00:01:48.06 bitrate= 610.9kbits/s dup=0 drop=12958 speed=0.0974x
frame= 3244 fps=2.9 q=25.0 size=    8061kB time=00:01:48.10 bitrate= 610.8kbits/s dup=0 drop=12965 speed=0.0974x
frame= 3246 fps=2.9 q=25.0 size=    8064kB time=00:01:48.16 bitrate= 610.7kbits/s dup=0 drop=12970 speed=0.0974x
frame= 3247 fps=2.9 q=25.0 size=    8066kB time=00:01:48.20 bitrate= 610.7kbits/s dup=0 drop=12977 speed=0.0974x
frame= 3249 fps=2.9 q=25.0 size=    8070kB time=00:01:48.26 bitrate= 610.6kbits/s dup=0 drop=12982 speed=0.0974x
frame= 3250 fps=2.9 q=25.0 size=    8072kB time=00:01:48.30 bitrate= 610.5kbits/s dup=0 drop=12988 speed=0.0974x
frame= 3252 fps=2.9 q=25.0 size=    8075kB time=00:01:48.36 bitrate= 610.4kbits/s dup=0 drop=12994 speed=0.0974x
frame= 3253 fps=2.9 q=25.0 size=    8077kB time=00:01:48.40 bitrate= 610.4kbits/s dup=0 drop=12998 speed=0.0974x
frame= 3254 fps=2.9 q=25.0 size=    8079kB time=00:01:48.43 bitrate= 610.3kbits/s dup=0 drop=13002 speed=0.0974x
frame= 3255 fps=2.9 q=25.0 size=    8080kB time=00:01:48.46 bitrate= 610.3kbits/s dup=0 drop=13006 speed=0.0974x
frame= 3256 fps=2.9 q=25.0 size=    8082kB time=00:01:48.50 bitrate= 610.2kbits/s dup=0 drop=13011 speed=0.0974x
frame= 3258 fps=2.9 q=25.0 size=    8086kB time=00:01:48.56 bitrate= 610.1kbits/s dup=0 drop=13018 speed=0.0974x
frame= 3259 fps=2.9 q=25.0 size=    8087kB time=00:01:48.60 bitrate= 610.0kbits/s dup=0 drop=13024 speed=0.0973x
frame= 3261 fps=2.9 q=25.0 size=    8091kB time=00:01:48.66 bitrate= 609.9kbits/s dup=0 drop=13030 speed=0.0974x
frame= 3262 fps=2.9 q=25.0 size=    8092kB time=00:01:48.70 bitrate= 609.9kbits/s dup=0 drop=13037 speed=0.0973x
frame= 3264 fps=2.9 q=25.0 size=    8096kB time=00:01:48.76 bitrate= 609.7kbits/s dup=0 drop=13042 speed=0.0974x
frame= 3265 fps=2.9 q=25.0 size=    8097kB time=00:01:48.80 bitrate= 609.7kbits/s dup=0 drop=13048 speed=0.0973x
frame= 3267 fps=2.9 q=25.0 size=    8101kB time=00:01:48.86 bitrate= 609.5kbits/s dup=0 drop=13054 speed=0.0973x
frame= 3269 fps=2.9 q=25.0 size=    8104kB time=00:01:48.93 bitrate= 609.4kbits/s dup=0 drop=13062 speed=0.0974x
frame= 3271 fps=2.9 q=25.0 size=    8107kB time=00:01:49.00 bitrate= 609.3kbits/s dup=0 drop=13070 speed=0.0974x
frame= 3272 fps=2.9 q=25.0 size=    8109kB time=00:01:49.03 bitrate= 609.2kbits/s dup=0 drop=13076 speed=0.0974x
frame= 3274 fps=2.9 q=25.0 size=    8112kB time=00:01:49.10 bitrate= 609.1kbits/s dup=0 drop=13082 speed=0.0974x
frame= 3275 fps=2.9 q=25.0 size=    8114kB time=00:01:49.13 bitrate= 609.1kbits/s dup=0 drop=13088 speed=0.0974x
frame= 3277 fps=2.9 q=25.0 size=    8117kB time=00:01:49.20 bitrate= 608.9kbits/s dup=0 drop=13094 speed=0.0974x
frame= 3278 fps=2.9 q=25.0 size=    8119kB time=00:01:49.23 bitrate= 608.9kbits/s dup=0 drop=13101 speed=0.0973x
frame= 3280 fps=2.9 q=25.0 size=    8122kB time=00:01:49.30 bitrate= 608.7kbits/s dup=0 drop=13106 speed=0.0974x
frame= 3282 fps=2.9 q=25.0 size=    8125kB time=00:01:49.36 bitrate= 608.6kbits/s dup=0 drop=13114 speed=0.0974x
frame= 3283 fps=2.9 q=25.0 size=    8127kB time=00:01:49.40 bitrate= 608.5kbits/s dup=0 drop=13121 speed=0.0974x
frame= 3285 fps=2.9 q=25.0 size=    8130kB time=00:01:49.46 bitrate= 608.4kbits/s dup=0 drop=13126 speed=0.0974x
frame= 3287 fps=2.9 q=25.0 size=    8133kB time=00:01:49.53 bitrate= 608.3kbits/s dup=0 drop=13134 speed=0.0974x
frame= 3288 fps=2.9 q=25.0 size=    8135kB time=00:01:49.56 bitrate= 608.2kbits/s dup=0 drop=13140 speed=0.0974x
frame= 3290 fps=2.9 q=25.0 size=    8138kB time=00:01:49.63 bitrate= 608.1kbits/s dup=0 drop=13146 speed=0.0974x
frame= 3291 fps=2.9 q=25.0 size=    8140kB time=00:01:49.66 bitrate= 608.0kbits/s dup=0 drop=13150 speed=0.0974x
frame= 3292 fps=2.9 q=25.0 size=    8141kB time=00:01:49.70 bitrate= 608.0kbits/s dup=0 drop=13155 speed=0.0974x
frame= 3293 fps=2.9 q=25.0 size=    8143kB time=00:01:49.73 bitrate= 607.9kbits/s dup=0 drop=13161 speed=0.0973x
frame= 3295 fps=2.9 q=25.0 size=    8146kB time=00:01:49.80 bitrate= 607.8kbits/s dup=0 drop=13166 speed=0.0974x
frame= 3296 fps=2.9 q=25.0 size=    8148kB time=00:01:49.83 bitrate= 607.7kbits/s dup=0 drop=13173 speed=0.0973x
frame= 3298 fps=2.9 q=25.0 size=    8151kB time=00:01:49.90 bitrate= 607.6kbits/s dup=0 drop=13178 speed=0.0974x
frame= 3299 fps=2.9 q=25.0 size=    8153kB time=00:01:49.93 bitrate= 607.5kbits/s dup=0 drop=13184 speed=0.0973x
frame= 3301 fps=2.9 q=25.0 size=    8156kB time=00:01:50.00 bitrate= 607.4kbits/s dup=0 drop=13190 speed=0.0974x
frame= 3303 fps=2.9 q=25.0 size=    8159kB time=00:01:50.06 bitrate= 607.2kbits/s dup=0 drop=13198 speed=0.0974x
frame= 3305 fps=2.9 q=25.0 size=    8162kB time=00:01:50.13 bitrate= 607.1kbits/s dup=0 drop=13206 speed=0.0974x
frame= 3307 fps=2.9 q=25.0 size=    8165kB time=00:01:50.20 bitrate= 607.0kbits/s dup=0 drop=13214 speed=0.0974x
frame= 3308 fps=2.9 q=25.0 size=    8167kB time=00:01:50.23 bitrate= 606.9kbits/s dup=0 drop=13220 speed=0.0974x
frame= 3310 fps=2.9 q=25.0 size=    8170kB time=00:01:50.30 bitrate= 606.8kbits/s dup=0 drop=13227 speed=0.0974x
frame= 3312 fps=2.9 q=25.0 size=    8173kB time=00:01:50.36 bitrate= 606.6kbits/s dup=0 drop=13234 speed=0.0974x
frame= 3314 fps=2.9 q=25.0 size=    8176kB time=00:01:50.43 bitrate= 606.5kbits/s dup=0 drop=13242 speed=0.0974x
frame= 3316 fps=2.9 q=25.0 size=    8179kB time=00:01:50.50 bitrate= 606.4kbits/s dup=0 drop=13250 speed=0.0974x
frame= 3318 fps=2.9 q=25.0 size=    8182kB time=00:01:50.56 bitrate= 606.2kbits/s dup=0 drop=13258 speed=0.0974x
frame= 3320 fps=2.9 q=25.0 size=    8186kB time=00:01:50.63 bitrate= 606.1kbits/s dup=0 drop=13266 speed=0.0974x
frame= 3322 fps=2.9 q=25.0 size=    8189kB time=00:01:50.70 bitrate= 606.0kbits/s dup=0 drop=13274 speed=0.0974x
frame= 3323 fps=2.9 q=25.0 size=    8190kB time=00:01:50.73 bitrate= 605.9kbits/s dup=0 drop=13281 speed=0.0974x
frame= 3325 fps=2.9 q=25.0 size=    8194kB time=00:01:50.80 bitrate= 605.8kbits/s dup=0 drop=13286 speed=0.0974x
frame= 3326 fps=2.9 q=25.0 size=    8195kB time=00:01:50.83 bitrate= 605.7kbits/s dup=0 drop=13291 speed=0.0974x
frame= 3328 fps=2.9 q=25.0 size=    8199kB time=00:01:50.90 bitrate= 605.6kbits/s dup=0 drop=13298 speed=0.0974x
frame= 3330 fps=2.9 q=25.0 size=    8202kB time=00:01:50.96 bitrate= 605.5kbits/s dup=0 drop=13306 speed=0.0974x
frame= 3331 fps=2.9 q=25.0 size=    8204kB time=00:01:51.00 bitrate= 605.4kbits/s dup=0 drop=13311 speed=0.0974x
frame= 3333 fps=2.9 q=25.0 size=    8207kB time=00:01:51.06 bitrate= 605.3kbits/s dup=0 drop=13318 speed=0.0974x
frame= 3334 fps=2.9 q=25.0 size=    8208kB time=00:01:51.10 bitrate= 605.2kbits/s dup=0 drop=13322 speed=0.0974x
frame= 3335 fps=2.9 q=25.0 size=    8210kB time=00:01:51.13 bitrate= 605.2kbits/s dup=0 drop=13327 speed=0.0974x
frame= 3337 fps=2.9 q=25.0 size=    8213kB time=00:01:51.20 bitrate= 605.1kbits/s dup=0 drop=13334 speed=0.0974x
frame= 3338 fps=2.9 q=25.0 size=    8215kB time=00:01:51.23 bitrate= 605.0kbits/s dup=0 drop=13341 speed=0.0974x
frame= 3340 fps=2.9 q=25.0 size=    8218kB time=00:01:51.30 bitrate= 604.9kbits/s dup=0 drop=13346 speed=0.0974x
frame= 3341 fps=2.9 q=25.0 size=    8219kB time=00:01:51.33 bitrate= 604.8kbits/s dup=0 drop=13353 speed=0.0974x
frame= 3343 fps=2.9 q=25.0 size=    8223kB time=00:01:51.40 bitrate= 604.7kbits/s dup=0 drop=13358 speed=0.0974x
frame= 3344 fps=2.9 q=25.0 size=    8225kB time=00:01:51.43 bitrate= 604.6kbits/s dup=0 drop=13365 speed=0.0974x
frame= 3346 fps=2.9 q=25.0 size=    8228kB time=00:01:51.50 bitrate= 604.5kbits/s dup=0 drop=13370 speed=0.0974x
frame= 3348 fps=2.9 q=25.0 size=    8231kB time=00:01:51.56 bitrate= 604.4kbits/s dup=0 drop=13378 speed=0.0974x
frame= 3350 fps=2.9 q=25.0 size=    8234kB time=00:01:51.63 bitrate= 604.2kbits/s dup=0 drop=13386 speed=0.0974x
frame= 3352 fps=2.9 q=25.0 size=    8237kB time=00:01:51.70 bitrate= 604.1kbits/s dup=0 drop=13394 speed=0.0975x
frame= 3353 fps=2.9 q=25.0 size=    8239kB time=00:01:51.73 bitrate= 604.1kbits/s dup=0 drop=13400 speed=0.0974x
frame= 3355 fps=2.9 q=25.0 size=    8242kB time=00:01:51.80 bitrate= 603.9kbits/s dup=0 drop=13406 speed=0.0975x
frame= 3357 fps=2.9 q=25.0 size=    8245kB time=00:01:51.86 bitrate= 603.8kbits/s dup=0 drop=13414 speed=0.0975x
frame= 3359 fps=2.9 q=25.0 size=    8248kB time=00:01:51.93 bitrate= 603.7kbits/s dup=0 drop=13422 speed=0.0975x
frame= 3361 fps=2.9 q=25.0 size=    8252kB time=00:01:52.00 bitrate= 603.5kbits/s dup=0 drop=13430 speed=0.0975x
frame= 3363 fps=2.9 q=25.0 size=    8255kB time=00:01:52.06 bitrate= 603.4kbits/s dup=0 drop=13438 speed=0.0975x
frame= 3365 fps=2.9 q=25.0 size=    8258kB time=00:01:52.13 bitrate= 603.3kbits/s dup=0 drop=13446 speed=0.0975x
frame= 3367 fps=2.9 q=25.0 size=    8261kB time=00:01:52.20 bitrate= 603.2kbits/s dup=0 drop=13454 speed=0.0975x
frame= 3368 fps=2.9 q=25.0 size=    8263kB time=00:01:52.23 bitrate= 603.1kbits/s dup=0 drop=13460 speed=0.0975x
frame= 3370 fps=2.9 q=25.0 size=    8266kB time=00:01:52.30 bitrate= 603.0kbits/s dup=0 drop=13466 speed=0.0975x
frame= 3372 fps=2.9 q=25.0 size=    8269kB time=00:01:52.36 bitrate= 602.9kbits/s dup=0 drop=13474 speed=0.0976x
frame= 3373 fps=2.9 q=25.0 size=    8271kB time=00:01:52.40 bitrate= 602.8kbits/s dup=0 drop=13478 speed=0.0975x
frame= 3374 fps=2.9 q=25.0 size=    8273kB time=00:01:52.43 bitrate= 602.7kbits/s dup=0 drop=13485 speed=0.0975x
frame= 3376 fps=2.9 q=25.0 size=    8276kB time=00:01:52.50 bitrate= 602.6kbits/s dup=0 drop=13490 speed=0.0975x
frame= 3377 fps=2.9 q=25.0 size=    8277kB time=00:01:52.53 bitrate= 602.5kbits/s dup=0 drop=13495 speed=0.0975x
frame= 3379 fps=2.9 q=25.0 size=    8280kB time=00:01:52.60 bitrate= 602.4kbits/s dup=0 drop=13502 speed=0.0975x
frame= 3381 fps=2.9 q=25.0 size=    8283kB time=00:01:52.66 bitrate= 602.3kbits/s dup=0 drop=13510 speed=0.0976x
frame= 3383 fps=2.9 q=25.0 size=    8286kB time=00:01:52.73 bitrate= 602.1kbits/s dup=0 drop=13518 speed=0.0976x
frame= 3385 fps=2.9 q=25.0 size=    8289kB time=00:01:52.80 bitrate= 602.0kbits/s dup=0 drop=13526 speed=0.0976x
frame= 3386 fps=2.9 q=25.0 size=    8291kB time=00:01:52.83 bitrate= 602.0kbits/s dup=0 drop=13533 speed=0.0976x
frame= 3388 fps=2.9 q=25.0 size=    8294kB time=00:01:52.90 bitrate= 601.8kbits/s dup=0 drop=13538 speed=0.0976x
frame= 3389 fps=2.9 q=25.0 size=    8296kB time=00:01:52.93 bitrate= 601.8kbits/s dup=0 drop=13543 speed=0.0976x
frame= 3391 fps=2.9 q=25.0 size=    8299kB time=00:01:53.00 bitrate= 601.6kbits/s dup=0 drop=13550 speed=0.0976x
frame= 3392 fps=2.9 q=25.0 size=    8300kB time=00:01:53.03 bitrate= 601.6kbits/s dup=0 drop=13556 speed=0.0976x
frame= 3394 fps=2.9 q=25.0 size=    8303kB time=00:01:53.10 bitrate= 601.4kbits/s dup=0 drop=13562 speed=0.0976x
frame= 3395 fps=2.9 q=25.0 size=    8305kB time=00:01:53.13 bitrate= 601.4kbits/s dup=0 drop=13567 speed=0.0975x
frame= 3396 fps=2.9 q=25.0 size=    8307kB time=00:01:53.16 bitrate= 601.3kbits/s dup=0 drop=13573 speed=0.0975x
frame= 3398 fps=2.9 q=25.0 size=    8310kB time=00:01:53.23 bitrate= 601.2kbits/s dup=0 drop=13578 speed=0.0975x
frame= 3400 fps=2.9 q=25.0 size=    8313kB time=00:01:53.30 bitrate= 601.0kbits/s dup=0 drop=13586 speed=0.0976x
frame= 3401 fps=2.9 q=25.0 size=    8314kB time=00:01:53.33 bitrate= 601.0kbits/s dup=0 drop=13593 speed=0.0975x
frame= 3403 fps=2.9 q=25.0 size=    8317kB time=00:01:53.40 bitrate= 600.8kbits/s dup=0 drop=13598 speed=0.0976x
frame= 3405 fps=2.9 q=25.0 size=    8321kB time=00:01:53.46 bitrate= 600.7kbits/s dup=0 drop=13606 speed=0.0976x
frame= 3406 fps=2.9 q=25.0 size=    8322kB time=00:01:53.50 bitrate= 600.7kbits/s dup=0 drop=13610 speed=0.0975x
frame= 3407 fps=2.9 q=25.0 size=    8324kB time=00:01:53.53 bitrate= 600.6kbits/s dup=0 drop=13617 speed=0.0975x
frame= 3409 fps=2.9 q=25.0 size=    8327kB time=00:01:53.60 bitrate= 600.5kbits/s dup=0 drop=13622 speed=0.0975x
frame= 3410 fps=2.9 q=25.0 size=    8329kB time=00:01:53.63 bitrate= 600.4kbits/s dup=0 drop=13626 speed=0.0975x
frame= 3411 fps=2.9 q=25.0 size=    8330kB time=00:01:53.66 bitrate= 600.4kbits/s dup=0 drop=13632 speed=0.0975x
frame= 3413 fps=2.9 q=25.0 size=    8333kB time=00:01:53.73 bitrate= 600.2kbits/s dup=0 drop=13638 speed=0.0975x
frame= 3414 fps=2.9 q=25.0 size=    8335kB time=00:01:53.76 bitrate= 600.2kbits/s dup=0 drop=13642 speed=0.0975x
frame= 3415 fps=2.9 q=25.0 size=    8336kB time=00:01:53.80 bitrate= 600.1kbits/s dup=0 drop=13649 speed=0.0975x
frame= 3417 fps=2.9 q=25.0 size=    8339kB time=00:01:53.86 bitrate= 600.0kbits/s dup=0 drop=13654 speed=0.0975x
frame= 3418 fps=2.9 q=25.0 size=    8341kB time=00:01:53.90 bitrate= 599.9kbits/s dup=0 drop=13661 speed=0.0975x
frame= 3420 fps=2.9 q=25.0 size=    8344kB time=00:01:53.96 bitrate= 599.8kbits/s dup=0 drop=13666 speed=0.0975x
frame= 3422 fps=2.9 q=25.0 size=    8347kB time=00:01:54.03 bitrate= 599.7kbits/s dup=0 drop=13674 speed=0.0975x
frame= 3424 fps=2.9 q=25.0 size=    8350kB time=00:01:54.10 bitrate= 599.5kbits/s dup=0 drop=13682 speed=0.0975x
frame= 3426 fps=2.9 q=25.0 size=    8354kB time=00:01:54.16 bitrate= 599.4kbits/s dup=0 drop=13690 speed=0.0975x
frame= 3427 fps=2.9 q=25.0 size=    8355kB time=00:01:54.20 bitrate= 599.4kbits/s dup=0 drop=13696 speed=0.0975x
frame= 3429 fps=2.9 q=25.0 size=    8358kB time=00:01:54.26 bitrate= 599.2kbits/s dup=0 drop=13702 speed=0.0975x
frame= 3430 fps=2.9 q=25.0 size=    8360kB time=00:01:54.30 bitrate= 599.2kbits/s dup=0 drop=13709 speed=0.0975x
frame= 3432 fps=2.9 q=25.0 size=    8363kB time=00:01:54.36 bitrate= 599.0kbits/s dup=0 drop=13714 speed=0.0975x
frame= 3433 fps=2.9 q=25.0 size=    8365kB time=00:01:54.40 bitrate= 599.0kbits/s dup=0 drop=13721 speed=0.0975x
frame= 3435 fps=2.9 q=25.0 size=    8368kB time=00:01:54.46 bitrate= 598.8kbits/s dup=0 drop=13726 speed=0.0975x
frame= 3437 fps=2.9 q=25.0 size=    8371kB time=00:01:54.53 bitrate= 598.7kbits/s dup=0 drop=13734 speed=0.0975x
frame= 3437 fps=2.9 q=25.0 size=    8371kB time=00:01:54.53 bitrate= 598.7kbits/s dup=0 drop=13737 speed=0.0975x
frame= 3438 fps=2.9 q=25.0 size=    8372kB time=00:01:54.56 bitrate= 598.7kbits/s dup=0 drop=13740 speed=0.0975x
frame= 3439 fps=2.9 q=25.0 size=    8374kB time=00:01:54.60 bitrate= 598.6kbits/s dup=0 drop=13744 speed=0.0975x
frame= 3440 fps=2.9 q=25.0 size=    8376kB time=00:01:54.63 bitrate= 598.5kbits/s dup=0 drop=13748 speed=0.0975x
frame= 3441 fps=2.9 q=25.0 size=    8377kB time=00:01:54.66 bitrate= 598.5kbits/s dup=0 drop=13752 speed=0.0974x
frame= 3443 fps=2.9 q=25.0 size=    8380kB time=00:01:54.73 bitrate= 598.4kbits/s dup=0 drop=13758 speed=0.0974x
frame= 3444 fps=2.9 q=25.0 size=    8382kB time=00:01:54.76 bitrate= 598.3kbits/s dup=0 drop=13762 speed=0.0974x
frame= 3445 fps=2.9 q=25.0 size=    8383kB time=00:01:54.80 bitrate= 598.2kbits/s dup=0 drop=13766 speed=0.0974x
frame= 3446 fps=2.9 q=25.0 size=    8385kB time=00:01:54.83 bitrate= 598.2kbits/s dup=0 drop=13770 speed=0.0974x
frame= 3446 fps=2.9 q=25.0 size=    8385kB time=00:01:54.83 bitrate= 598.2kbits/s dup=0 drop=13773 speed=0.0974x
frame= 3447 fps=2.9 q=25.0 size=    8387kB time=00:01:54.86 bitrate= 598.1kbits/s dup=0 drop=13774 speed=0.0973x
frame= 3447 fps=2.9 q=25.0 size=    8387kB time=00:01:54.86 bitrate= 598.1kbits/s dup=0 drop=13777 speed=0.0973x
frame= 3448 fps=2.9 q=25.0 size=    8388kB time=00:01:54.90 bitrate= 598.0kbits/s dup=0 drop=13778 speed=0.0973x
frame= 3448 fps=2.9 q=25.0 size=    8388kB time=00:01:54.90 bitrate= 598.0kbits/s dup=0 drop=13781 speed=0.0972x
frame= 3449 fps=2.9 q=25.0 size=    8390kB time=00:01:54.93 bitrate= 598.0kbits/s dup=0 drop=13782 speed=0.0972x
frame= 3449 fps=2.9 q=25.0 size=    8390kB time=00:01:54.93 bitrate= 598.0kbits/s dup=0 drop=13785 speed=0.0972x
frame= 3450 fps=2.9 q=25.0 size=    8391kB time=00:01:54.96 bitrate= 597.9kbits/s dup=0 drop=13788 speed=0.0972x
frame= 3451 fps=2.9 q=25.0 size=    8393kB time=00:01:55.00 bitrate= 597.9kbits/s dup=0 drop=13790 speed=0.0972x
frame= 3452 fps=2.9 q=25.0 size=    8395kB time=00:01:55.03 bitrate= 597.8kbits/s dup=0 drop=13794 speed=0.0971x
frame= 3452 fps=2.9 q=25.0 size=    8395kB time=00:01:55.03 bitrate= 597.8kbits/s dup=0 drop=13797 speed=0.0971x
frame= 3453 fps=2.9 q=25.0 size=    8396kB time=00:01:55.06 bitrate= 597.8kbits/s dup=0 drop=13799 speed=0.0971x
frame= 3454 fps=2.9 q=25.0 size=    8398kB time=00:01:55.10 bitrate= 597.7kbits/s dup=0 drop=13802 speed=0.0971x
frame= 3454 fps=2.9 q=25.0 size=    8398kB time=00:01:55.10 bitrate= 597.7kbits/s dup=0 drop=13804 speed=0.097x
frame= 3455 fps=2.9 q=25.0 size=    8399kB time=00:01:55.13 bitrate= 597.6kbits/s dup=0 drop=13806 speed=0.097x
frame= 3455 fps=2.9 q=25.0 size=    8399kB time=00:01:55.13 bitrate= 597.6kbits/s dup=0 drop=13807 speed=0.0969x
frame= 3456 fps=2.9 q=25.0 size=    8401kB time=00:01:55.16 bitrate= 597.6kbits/s dup=0 drop=13810 speed=0.0969x
frame= 3456 fps=2.9 q=25.0 size=    8401kB time=00:01:55.16 bitrate= 597.6kbits/s dup=0 drop=13813 speed=0.0969x
frame= 3457 fps=2.9 q=25.0 size=    8402kB time=00:01:55.20 bitrate= 597.5kbits/s dup=0 drop=13814 speed=0.0968x
frame= 3457 fps=2.9 q=25.0 size=    8402kB time=00:01:55.20 bitrate= 597.5kbits/s dup=0 drop=13815 speed=0.0968x
frame= 3458 fps=2.9 q=25.0 size=    8404kB time=00:01:55.23 bitrate= 597.4kbits/s dup=0 drop=13818 speed=0.0968x
frame= 3458 fps=2.9 q=25.0 size=    8404kB time=00:01:55.23 bitrate= 597.4kbits/s dup=0 drop=13820 speed=0.0967x
frame= 3459 fps=2.9 q=25.0 size=    8405kB time=00:01:55.26 bitrate= 597.4kbits/s dup=0 drop=13822 speed=0.0967x
frame= 3459 fps=2.9 q=25.0 size=    8405kB time=00:01:55.26 bitrate= 597.4kbits/s dup=0 drop=13825 speed=0.0967x
frame= 3460 fps=2.9 q=25.0 size=    8407kB time=00:01:55.30 bitrate= 597.3kbits/s dup=0 drop=13826 speed=0.0966x
frame= 3461 fps=2.9 q=25.0 size=    8408kB time=00:01:55.33 bitrate= 597.2kbits/s dup=0 drop=13830 speed=0.0966x
frame= 3462 fps=2.9 q=25.0 size=    8410kB time=00:01:55.36 bitrate= 597.2kbits/s dup=0 drop=13836 speed=0.0966x
frame= 3463 fps=2.9 q=25.0 size=    8411kB time=00:01:55.40 bitrate= 597.1kbits/s dup=0 drop=13841 speed=0.0966x
frame= 3465 fps=2.9 q=25.0 size=    8414kB time=00:01:55.46 bitrate= 597.0kbits/s dup=0 drop=13846 speed=0.0966x
frame= 3466 fps=2.9 q=25.0 size=    8416kB time=00:01:55.50 bitrate= 596.9kbits/s dup=0 drop=13851 speed=0.0966x
frame= 3467 fps=2.9 q=25.0 size=    8418kB time=00:01:55.53 bitrate= 596.9kbits/s dup=0 drop=13854 speed=0.0966x
frame= 3467 fps=2.9 q=25.0 size=    8418kB time=00:01:55.53 bitrate= 596.9kbits/s dup=0 drop=13856 speed=0.0965x
frame= 3468 fps=2.9 q=25.0 size=    8419kB time=00:01:55.56 bitrate= 596.8kbits/s dup=0 drop=13858 speed=0.0965x
frame= 3468 fps=2.9 q=25.0 size=    8419kB time=00:01:55.56 bitrate= 596.8kbits/s dup=0 drop=13860 speed=0.0965x
frame= 3469 fps=2.9 q=25.0 size=    8421kB time=00:01:55.60 bitrate= 596.7kbits/s dup=0 drop=13862 speed=0.0965x
frame= 3469 fps=2.9 q=25.0 size=    8421kB time=00:01:55.60 bitrate= 596.7kbits/s dup=0 drop=13864 speed=0.0964x
frame= 3470 fps=2.9 q=25.0 size=    8422kB time=00:01:55.63 bitrate= 596.7kbits/s dup=0 drop=13866 speed=0.0964x
frame= 3471 fps=2.9 q=25.0 size=    8424kB time=00:01:55.66 bitrate= 596.6kbits/s dup=0 drop=13871 speed=0.0964x
frame= 3472 fps=2.9 q=25.0 size=    8425kB time=00:01:55.70 bitrate= 596.6kbits/s dup=0 drop=13876 speed=0.0964x
frame= 3474 fps=2.9 q=25.0 size=    8429kB time=00:01:55.76 bitrate= 596.4kbits/s dup=0 drop=13882 speed=0.0964x
frame= 3475 fps=2.9 q=25.0 size=    8430kB time=00:01:55.80 bitrate= 596.4kbits/s dup=0 drop=13887 speed=0.0964x
frame= 3476 fps=2.9 q=25.0 size=    8432kB time=00:01:55.83 bitrate= 596.3kbits/s dup=0 drop=13892 speed=0.0964x
frame= 3477 fps=2.9 q=25.0 size=    8433kB time=00:01:55.86 bitrate= 596.2kbits/s dup=0 drop=13897 speed=0.0964x
frame= 3479 fps=2.9 q=25.0 size=    8436kB time=00:01:55.93 bitrate= 596.1kbits/s dup=0 drop=13902 speed=0.0964x
frame= 3480 fps=2.9 q=25.0 size=    8438kB time=00:01:55.96 bitrate= 596.1kbits/s dup=0 drop=13908 speed=0.0964x
frame= 3482 fps=2.9 q=25.0 size=    8441kB time=00:01:56.03 bitrate= 595.9kbits/s dup=0 drop=13914 speed=0.0964x
frame= 3483 fps=2.9 q=25.0 size=    8442kB time=00:01:56.06 bitrate= 595.9kbits/s dup=0 drop=13920 speed=0.0964x
frame= 3484 fps=2.9 q=25.0 size=    8444kB time=00:01:56.10 bitrate= 595.8kbits/s dup=0 drop=13924 speed=0.0963x
frame= 3486 fps=2.9 q=25.0 size=    8447kB time=00:01:56.16 bitrate= 595.7kbits/s dup=0 drop=13930 speed=0.0964x
frame= 3487 fps=2.9 q=25.0 size=    8449kB time=00:01:56.20 bitrate= 595.6kbits/s dup=0 drop=13934 speed=0.0963x
frame= 3488 fps=2.9 q=25.0 size=    8451kB time=00:01:56.23 bitrate= 595.6kbits/s dup=0 drop=13938 speed=0.0963x
frame= 3489 fps=2.9 q=22.0 size=    8465kB time=00:01:56.26 bitrate= 596.4kbits/s dup=0 drop=13942 speed=0.0963x
frame= 3490 fps=2.9 q=26.0 size=    8467kB time=00:01:56.30 bitrate= 596.4kbits/s dup=0 drop=13947 speed=0.0963x
frame= 3491 fps=2.9 q=25.0 size=    8468kB time=00:01:56.33 bitrate= 596.3kbits/s dup=0 drop=13952 speed=0.0963x
frame= 3493 fps=2.9 q=25.0 size=    8472kB time=00:01:56.40 bitrate= 596.2kbits/s dup=0 drop=13958 speed=0.0963x
frame= 3494 fps=2.9 q=25.0 size=    8474kB time=00:01:56.43 bitrate= 596.2kbits/s dup=0 drop=13964 speed=0.0963x
frame= 3496 fps=2.9 q=25.0 size=    8478kB time=00:01:56.50 bitrate= 596.1kbits/s dup=0 drop=13970 speed=0.0963x
frame= 3498 fps=2.9 q=25.0 size=    8481kB time=00:01:56.56 bitrate= 596.0kbits/s dup=0 drop=13978 speed=0.0963x
frame= 3499 fps=2.9 q=25.0 size=    8483kB time=00:01:56.60 bitrate= 596.0kbits/s dup=0 drop=13985 speed=0.0963x
frame= 3501 fps=2.9 q=25.0 size=    8486kB time=00:01:56.66 bitrate= 595.9kbits/s dup=0 drop=13990 speed=0.0963x
frame= 3503 fps=2.9 q=25.0 size=    8490kB time=00:01:56.73 bitrate= 595.8kbits/s dup=0 drop=13998 speed=0.0963x
frame= 3504 fps=2.9 q=25.0 size=    8492kB time=00:01:56.76 bitrate= 595.7kbits/s dup=0 drop=14005 speed=0.0963x
frame= 3506 fps=2.9 q=25.0 size=    8495kB time=00:01:56.83 bitrate= 595.6kbits/s dup=0 drop=14011 speed=0.0963x
frame= 3508 fps=2.9 q=25.0 size=    8498kB time=00:01:56.90 bitrate= 595.5kbits/s dup=0 drop=14018 speed=0.0963x
frame= 3510 fps=2.9 q=25.0 size=    8502kB time=00:01:56.96 bitrate= 595.4kbits/s dup=0 drop=14026 speed=0.0963x
frame= 3512 fps=2.9 q=25.0 size=    8505kB time=00:01:57.03 bitrate= 595.3kbits/s dup=0 drop=14034 speed=0.0964x
frame= 3514 fps=2.9 q=25.0 size=    8508kB time=00:01:57.10 bitrate= 595.2kbits/s dup=0 drop=14042 speed=0.0964x
frame= 3516 fps=2.9 q=25.0 size=    8512kB time=00:01:57.16 bitrate= 595.1kbits/s dup=0 drop=14050 speed=0.0964x
frame= 3518 fps=2.9 q=25.0 size=    8515kB time=00:01:57.23 bitrate= 595.0kbits/s dup=0 drop=14058 speed=0.0964x
frame= 3520 fps=2.9 q=25.0 size=    8518kB time=00:01:57.30 bitrate= 594.9kbits/s dup=0 drop=14066 speed=0.0964x
frame= 3521 fps=2.9 q=25.0 size=    8520kB time=00:01:57.33 bitrate= 594.8kbits/s dup=0 drop=14070 speed=0.0964x
frame= 3523 fps=2.9 q=25.0 size=    8523kB time=00:01:57.40 bitrate= 594.7kbits/s dup=0 drop=14078 speed=0.0964x
frame= 3525 fps=2.9 q=25.0 size=    8526kB time=00:01:57.46 bitrate= 594.6kbits/s dup=0 drop=14086 speed=0.0964x
frame= 3526 fps=2.9 q=25.0 size=    8528kB time=00:01:57.50 bitrate= 594.5kbits/s dup=0 drop=14093 speed=0.0964x
frame= 3528 fps=2.9 q=25.0 size=    8531kB time=00:01:57.56 bitrate= 594.4kbits/s dup=0 drop=14098 speed=0.0964x
frame= 3529 fps=2.9 q=25.0 size=    8533kB time=00:01:57.60 bitrate= 594.4kbits/s dup=0 drop=14102 speed=0.0964x
frame= 3531 fps=2.9 q=25.0 size=    8536kB time=00:01:57.66 bitrate= 594.3kbits/s dup=0 drop=14110 speed=0.0964x
frame= 3532 fps=2.9 q=25.0 size=    8537kB time=00:01:57.70 bitrate= 594.2kbits/s dup=0 drop=14117 speed=0.0964x
frame= 3534 fps=2.9 q=25.0 size=    8541kB time=00:01:57.76 bitrate= 594.1kbits/s dup=0 drop=14124 speed=0.0964x
frame= 3536 fps=2.9 q=25.0 size=    8544kB time=00:01:57.83 bitrate= 594.0kbits/s dup=0 drop=14130 speed=0.0964x
frame= 3537 fps=2.9 q=25.0 size=    8546kB time=00:01:57.86 bitrate= 594.0kbits/s dup=0 drop=14136 speed=0.0964x
frame= 3539 fps=2.9 q=25.0 size=    8549kB time=00:01:57.93 bitrate= 593.8kbits/s dup=0 drop=14142 speed=0.0964x
frame= 3541 fps=2.9 q=25.0 size=    8552kB time=00:01:58.00 bitrate= 593.7kbits/s dup=0 drop=14150 speed=0.0964x
frame= 3543 fps=2.9 q=25.0 size=    8556kB time=00:01:58.06 bitrate= 593.6kbits/s dup=0 drop=14158 speed=0.0964x
frame= 3545 fps=2.9 q=25.0 size=    8559kB time=00:01:58.13 bitrate= 593.5kbits/s dup=0 drop=14166 speed=0.0964x
frame= 3546 fps=2.9 q=25.0 size=    8560kB time=00:01:58.16 bitrate= 593.4kbits/s dup=0 drop=14172 speed=0.0964x
frame= 3548 fps=2.9 q=25.0 size=    8563kB time=00:01:58.23 bitrate= 593.3kbits/s dup=0 drop=14178 speed=0.0964x
frame= 3549 fps=2.9 q=25.0 size=    8565kB time=00:01:58.26 bitrate= 593.3kbits/s dup=0 drop=14183 speed=0.0964x
frame= 3551 fps=2.9 q=25.0 size=    8568kB time=00:01:58.33 bitrate= 593.2kbits/s dup=0 drop=14190 speed=0.0964x
frame= 3553 fps=2.9 q=25.0 size=    8571kB time=00:01:58.40 bitrate= 593.0kbits/s dup=0 drop=14198 speed=0.0965x
frame= 3555 fps=2.9 q=25.0 size=    8574kB time=00:01:58.46 bitrate= 592.9kbits/s dup=0 drop=14206 speed=0.0965x
frame= 3557 fps=2.9 q=25.0 size=    8578kB time=00:01:58.53 bitrate= 592.8kbits/s dup=0 drop=14214 speed=0.0965x
frame= 3558 fps=2.9 q=25.0 size=    8579kB time=00:01:58.56 bitrate= 592.8kbits/s dup=0 drop=14220 speed=0.0965x
frame= 3560 fps=2.9 q=25.0 size=    8582kB time=00:01:58.63 bitrate= 592.6kbits/s dup=0 drop=14226 speed=0.0965x
frame= 3561 fps=2.9 q=25.0 size=    8584kB time=00:01:58.66 bitrate= 592.6kbits/s dup=0 drop=14230 speed=0.0965x
frame= 3562 fps=2.9 q=25.0 size=    8586kB time=00:01:58.70 bitrate= 592.5kbits/s dup=0 drop=14237 speed=0.0964x
frame= 3564 fps=2.9 q=25.0 size=    8589kB time=00:01:58.76 bitrate= 592.4kbits/s dup=0 drop=14242 speed=0.0965x
frame= 3565 fps=2.9 q=25.0 size=    8590kB time=00:01:58.80 bitrate= 592.4kbits/s dup=0 drop=14246 speed=0.0964x
frame= 3567 fps=2.9 q=25.0 size=    8594kB time=00:01:58.86 bitrate= 592.3kbits/s dup=0 drop=14254 speed=0.0965x
frame= 3568 fps=2.9 q=25.0 size=    8595kB time=00:01:58.90 bitrate= 592.2kbits/s dup=0 drop=14261 speed=0.0964x
frame= 3570 fps=2.9 q=25.0 size=    8598kB time=00:01:58.96 bitrate= 592.1kbits/s dup=0 drop=14266 speed=0.0964x
frame= 3571 fps=2.9 q=25.0 size=    8600kB time=00:01:59.00 bitrate= 592.0kbits/s dup=0 drop=14271 speed=0.0964x
frame= 3573 fps=2.9 q=25.0 size=    8603kB time=00:01:59.06 bitrate= 591.9kbits/s dup=0 drop=14278 speed=0.0964x
frame= 3574 fps=2.9 q=25.0 size=    8605kB time=00:01:59.10 bitrate= 591.8kbits/s dup=0 drop=14284 speed=0.0964x
frame= 3576 fps=2.9 q=25.0 size=    8608kB time=00:01:59.16 bitrate= 591.7kbits/s dup=0 drop=14290 speed=0.0964x
frame= 3577 fps=2.9 q=25.0 size=    8609kB time=00:01:59.20 bitrate= 591.7kbits/s dup=0 drop=14296 speed=0.0964x
frame= 3579 fps=2.9 q=25.0 size=    8612kB time=00:01:59.26 bitrate= 591.5kbits/s dup=0 drop=14302 speed=0.0964x
frame= 3581 fps=2.9 q=25.0 size=    8615kB time=00:01:59.33 bitrate= 591.4kbits/s dup=0 drop=14310 speed=0.0965x
frame= 3582 fps=2.9 q=25.0 size=    8617kB time=00:01:59.36 bitrate= 591.4kbits/s dup=0 drop=14317 speed=0.0965x
frame= 3584 fps=2.9 q=25.0 size=    8620kB time=00:01:59.43 bitrate= 591.2kbits/s dup=0 drop=14322 speed=0.0965x
frame= 3586 fps=2.9 q=25.0 size=    8623kB time=00:01:59.50 bitrate= 591.1kbits/s dup=0 drop=14330 speed=0.0965x
frame= 3587 fps=2.9 q=25.0 size=    8624kB time=00:01:59.53 bitrate= 591.1kbits/s dup=0 drop=14337 speed=0.0965x
frame= 3589 fps=2.9 q=25.0 size=    8627kB time=00:01:59.60 bitrate= 590.9kbits/s dup=0 drop=14342 speed=0.0965x
frame= 3591 fps=2.9 q=25.0 size=    8631kB time=00:01:59.66 bitrate= 590.8kbits/s dup=0 drop=14350 speed=0.0965x
frame= 3592 fps=2.9 q=25.0 size=    8632kB time=00:01:59.70 bitrate= 590.8kbits/s dup=0 drop=14354 speed=0.0965x
frame= 3593 fps=2.9 q=25.0 size=    8634kB time=00:01:59.73 bitrate= 590.7kbits/s dup=0 drop=14358 speed=0.0965x
frame= 3594 fps=2.9 q=25.0 size=    8635kB time=00:01:59.76 bitrate= 590.7kbits/s dup=0 drop=14364 speed=0.0964x
frame= 3596 fps=2.9 q=25.0 size=    8639kB time=00:01:59.83 bitrate= 590.6kbits/s dup=0 drop=14370 speed=0.0965x
frame= 3597 fps=2.9 q=25.0 size=    8640kB time=00:01:59.86 bitrate= 590.5kbits/s dup=0 drop=14374 speed=0.0964x
frame= 3598 fps=2.9 q=25.0 size=    8642kB time=00:01:59.90 bitrate= 590.4kbits/s dup=0 drop=14379 speed=0.0964x
frame= 3600 fps=2.9 q=25.0 size=    8645kB time=00:01:59.96 bitrate= 590.3kbits/s dup=0 drop=14386 speed=0.0964x
frame= 3601 fps=2.9 q=25.0 size=    8647kB time=00:02:00.00 bitrate= 590.3kbits/s dup=0 drop=14390 speed=0.0964x
frame= 3603 fps=2.9 q=25.0 size=    8650kB time=00:02:00.06 bitrate= 590.2kbits/s dup=0 drop=14398 speed=0.0964x
frame= 3604 fps=2.9 q=25.0 size=    8651kB time=00:02:00.10 bitrate= 590.1kbits/s dup=0 drop=14403 speed=0.0964x
frame= 3605 fps=2.9 q=25.0 size=    8653kB time=00:02:00.13 bitrate= 590.1kbits/s dup=0 drop=14408 speed=0.0964x
frame= 3607 fps=2.9 q=25.0 size=    8656kB time=00:02:00.20 bitrate= 589.9kbits/s dup=0 drop=14414 speed=0.0964x
frame= 3608 fps=2.9 q=25.0 size=    8658kB time=00:02:00.23 bitrate= 589.9kbits/s dup=0 drop=14420 speed=0.0964x
frame= 3610 fps=2.9 q=25.0 size=    8661kB time=00:02:00.30 bitrate= 589.8kbits/s dup=0 drop=14426 speed=0.0964x
frame= 3612 fps=2.9 q=25.0 size=    8664kB time=00:02:00.36 bitrate= 589.7kbits/s dup=0 drop=14434 speed=0.0964x
frame= 3614 fps=2.9 q=25.0 size=    8667kB time=00:02:00.43 bitrate= 589.6kbits/s dup=0 drop=14442 speed=0.0964x
frame= 3615 fps=2.9 q=25.0 size=    8669kB time=00:02:00.46 bitrate= 589.5kbits/s dup=0 drop=14446 speed=0.0964x
frame= 3617 fps=2.9 q=25.0 size=    8672kB time=00:02:00.53 bitrate= 589.4kbits/s dup=0 drop=14454 speed=0.0964x
frame= 3619 fps=2.9 q=25.0 size=    8675kB time=00:02:00.60 bitrate= 589.3kbits/s dup=0 drop=14462 speed=0.0964x
frame= 3620 fps=2.9 q=25.0 size=    8677kB time=00:02:00.63 bitrate= 589.2kbits/s dup=0 drop=14469 speed=0.0964x
frame= 3622 fps=2.9 q=25.0 size=    8680kB time=00:02:00.70 bitrate= 589.1kbits/s dup=0 drop=14474 speed=0.0964x
frame= 3623 fps=2.9 q=25.0 size=    8682kB time=00:02:00.73 bitrate= 589.1kbits/s dup=0 drop=14480 speed=0.0964x
frame= 3625 fps=2.9 q=25.0 size=    8685kB time=00:02:00.80 bitrate= 589.0kbits/s dup=0 drop=14486 speed=0.0964x
frame= 3626 fps=2.9 q=25.0 size=    8686kB time=00:02:00.83 bitrate= 588.9kbits/s dup=0 drop=14492 speed=0.0964x
frame= 3628 fps=2.9 q=25.0 size=    8689kB time=00:02:00.90 bitrate= 588.8kbits/s dup=0 drop=14498 speed=0.0964x
frame= 3629 fps=2.9 q=25.0 size=    8691kB time=00:02:00.93 bitrate= 588.7kbits/s dup=0 drop=14505 speed=0.0964x
frame= 3631 fps=2.9 q=25.0 size=    8694kB time=00:02:01.00 bitrate= 588.6kbits/s dup=0 drop=14510 speed=0.0964x
frame= 3632 fps=2.9 q=25.0 size=    8695kB time=00:02:01.03 bitrate= 588.5kbits/s dup=0 drop=14517 speed=0.0964x
frame= 3634 fps=2.9 q=25.0 size=    8698kB time=00:02:01.10 bitrate= 588.4kbits/s dup=0 drop=14522 speed=0.0964x
frame= 3635 fps=2.9 q=25.0 size=    8700kB time=00:02:01.13 bitrate= 588.4kbits/s dup=0 drop=14528 speed=0.0964x
frame= 3637 fps=2.9 q=25.0 size=    8703kB time=00:02:01.20 bitrate= 588.3kbits/s dup=0 drop=14534 speed=0.0964x
frame= 3638 fps=2.9 q=25.0 size=    8705kB time=00:02:01.23 bitrate= 588.2kbits/s dup=0 drop=14539 speed=0.0964x
frame= 3640 fps=2.9 q=25.0 size=    8708kB time=00:02:01.30 bitrate= 588.1kbits/s dup=0 drop=14546 speed=0.0964x
frame= 3641 fps=2.9 q=25.0 size=    8709kB time=00:02:01.33 bitrate= 588.0kbits/s dup=0 drop=14553 speed=0.0964x
frame= 3643 fps=2.9 q=25.0 size=    8712kB time=00:02:01.40 bitrate= 587.9kbits/s dup=0 drop=14558 speed=0.0964x
frame= 3644 fps=2.9 q=25.0 size=    8714kB time=00:02:01.43 bitrate= 587.9kbits/s dup=0 drop=14562 speed=0.0964x
frame= 3645 fps=2.9 q=25.0 size=    8716kB time=00:02:01.46 bitrate= 587.8kbits/s dup=0 drop=14568 speed=0.0964x
frame= 3646 fps=2.9 q=25.0 size=    8717kB time=00:02:01.50 bitrate= 587.8kbits/s dup=0 drop=14573 speed=0.0964x
frame= 3648 fps=2.9 q=25.0 size=    8720kB time=00:02:01.56 bitrate= 587.6kbits/s dup=0 drop=14578 speed=0.0964x
frame= 3649 fps=2.9 q=25.0 size=    8722kB time=00:02:01.60 bitrate= 587.6kbits/s dup=0 drop=14583 speed=0.0964x
frame= 3651 fps=2.9 q=25.0 size=    8725kB time=00:02:01.66 bitrate= 587.5kbits/s dup=0 drop=14590 speed=0.0964x
frame= 3652 fps=2.9 q=25.0 size=    8726kB time=00:02:01.70 bitrate= 587.4kbits/s dup=0 drop=14595 speed=0.0964x
frame= 3654 fps=2.9 q=25.0 size=    8730kB time=00:02:01.76 bitrate= 587.3kbits/s dup=0 drop=14602 speed=0.0964x
frame= 3655 fps=2.9 q=25.0 size=    8731kB time=00:02:01.80 bitrate= 587.2kbits/s dup=0 drop=14606 speed=0.0964x
frame= 3656 fps=2.9 q=25.0 size=    8733kB time=00:02:01.83 bitrate= 587.2kbits/s dup=0 drop=14613 speed=0.0964x
frame= 3658 fps=2.9 q=25.0 size=    8736kB time=00:02:01.90 bitrate= 587.1kbits/s dup=0 drop=14618 speed=0.0964x
frame= 3660 fps=2.9 q=25.0 size=    8739kB time=00:02:01.96 bitrate= 587.0kbits/s dup=0 drop=14626 speed=0.0964x
frame= 3662 fps=2.9 q=25.0 size=    8742kB time=00:02:02.03 bitrate= 586.8kbits/s dup=0 drop=14634 speed=0.0964x
frame= 3664 fps=2.9 q=25.0 size=    8745kB time=00:02:02.10 bitrate= 586.7kbits/s dup=0 drop=14642 speed=0.0964x
frame= 3666 fps=2.9 q=25.0 size=    8748kB time=00:02:02.16 bitrate= 586.6kbits/s dup=0 drop=14650 speed=0.0964x
frame= 3668 fps=2.9 q=25.0 size=    8751kB time=00:02:02.23 bitrate= 586.5kbits/s dup=0 drop=14658 speed=0.0964x
frame= 3670 fps=2.9 q=25.0 size=    8754kB time=00:02:02.30 bitrate= 586.4kbits/s dup=0 drop=14666 speed=0.0965x
frame= 3671 fps=2.9 q=25.0 size=    8756kB time=00:02:02.33 bitrate= 586.3kbits/s dup=0 drop=14672 speed=0.0964x
frame= 3673 fps=2.9 q=25.0 size=    8759kB time=00:02:02.40 bitrate= 586.2kbits/s dup=0 drop=14679 speed=0.0965x
frame= 3675 fps=2.9 q=25.0 size=    8762kB time=00:02:02.46 bitrate= 586.1kbits/s dup=0 drop=14686 speed=0.0965x
frame= 3677 fps=2.9 q=25.0 size=    8765kB time=00:02:02.53 bitrate= 586.0kbits/s dup=0 drop=14694 speed=0.0965x
frame= 3678 fps=2.9 q=25.0 size=    8767kB time=00:02:02.56 bitrate= 585.9kbits/s dup=0 drop=14700 speed=0.0965x
frame= 3680 fps=2.9 q=25.0 size=    8770kB time=00:02:02.63 bitrate= 585.8kbits/s dup=0 drop=14706 speed=0.0965x
frame= 3681 fps=2.9 q=25.0 size=    8772kB time=00:02:02.66 bitrate= 585.8kbits/s dup=0 drop=14712 speed=0.0965x
frame= 3683 fps=2.9 q=25.0 size=    8775kB time=00:02:02.73 bitrate= 585.7kbits/s dup=0 drop=14718 speed=0.0965x
frame= 3685 fps=2.9 q=25.0 size=    8778kB time=00:02:02.80 bitrate= 585.6kbits/s dup=0 drop=14726 speed=0.0965x
frame= 3686 fps=2.9 q=25.0 size=    8779kB time=00:02:02.83 bitrate= 585.5kbits/s dup=0 drop=14732 speed=0.0965x
frame= 3688 fps=2.9 q=25.0 size=    8783kB time=00:02:02.90 bitrate= 585.4kbits/s dup=0 drop=14738 speed=0.0965x
frame= 3689 fps=2.9 q=25.0 size=    8784kB time=00:02:02.93 bitrate= 585.3kbits/s dup=0 drop=14745 speed=0.0965x
frame= 3691 fps=2.9 q=25.0 size=    8787kB time=00:02:03.00 bitrate= 585.2kbits/s dup=0 drop=14750 speed=0.0965x
frame= 3693 fps=2.9 q=25.0 size=    8790kB time=00:02:03.06 bitrate= 585.1kbits/s dup=0 drop=14758 speed=0.0965x
frame= 3694 fps=2.9 q=25.0 size=    8792kB time=00:02:03.10 bitrate= 585.1kbits/s dup=0 drop=14765 speed=0.0965x
frame= 3696 fps=2.9 q=25.0 size=    8795kB time=00:02:03.16 bitrate= 585.0kbits/s dup=0 drop=14770 speed=0.0965x
frame= 3698 fps=2.9 q=25.0 size=    8798kB time=00:02:03.23 bitrate= 584.9kbits/s dup=0 drop=14778 speed=0.0965x
frame= 3700 fps=2.9 q=25.0 size=    8801kB time=00:02:03.30 bitrate= 584.7kbits/s dup=0 drop=14786 speed=0.0965x
frame= 3702 fps=2.9 q=25.0 size=    8804kB time=00:02:03.36 bitrate= 584.6kbits/s dup=0 drop=14794 speed=0.0965x
frame= 3704 fps=2.9 q=25.0 size=    8807kB time=00:02:03.43 bitrate= 584.5kbits/s dup=0 drop=14802 speed=0.0965x
frame= 3706 fps=2.9 q=25.0 size=    8810kB time=00:02:03.50 bitrate= 584.4kbits/s dup=0 drop=14810 speed=0.0965x
frame= 3708 fps=2.9 q=25.0 size=    8813kB time=00:02:03.56 bitrate= 584.3kbits/s dup=0 drop=14818 speed=0.0966x
frame= 3710 fps=2.9 q=25.0 size=    8817kB time=00:02:03.63 bitrate= 584.2kbits/s dup=0 drop=14826 speed=0.0966x
frame= 3711 fps=2.9 q=25.0 size=    8818kB time=00:02:03.66 bitrate= 584.1kbits/s dup=0 drop=14833 speed=0.0965x
frame= 3713 fps=2.9 q=25.0 size=    8821kB time=00:02:03.73 bitrate= 584.0kbits/s dup=0 drop=14838 speed=0.0966x
frame= 3715 fps=2.9 q=25.0 size=    8824kB time=00:02:03.80 bitrate= 583.9kbits/s dup=0 drop=14846 speed=0.0966x
frame= 3716 fps=2.9 q=25.0 size=    8826kB time=00:02:03.83 bitrate= 583.8kbits/s dup=0 drop=14852 speed=0.0966x
frame= 3718 fps=2.9 q=25.0 size=    8829kB time=00:02:03.90 bitrate= 583.7kbits/s dup=0 drop=14858 speed=0.0966x
frame= 3719 fps=2.9 q=25.0 size=    8830kB time=00:02:03.93 bitrate= 583.7kbits/s dup=0 drop=14863 speed=0.0966x
frame= 3721 fps=2.9 q=25.0 size=    8834kB time=00:02:04.00 bitrate= 583.6kbits/s dup=0 drop=14870 speed=0.0966x
frame= 3723 fps=2.9 q=25.0 size=    8837kB time=00:02:04.06 bitrate= 583.5kbits/s dup=0 drop=14878 speed=0.0966x
frame= 3724 fps=2.9 q=25.0 size=    8838kB time=00:02:04.10 bitrate= 583.4kbits/s dup=0 drop=14882 speed=0.0966x
frame= 3726 fps=2.9 q=25.0 size=    8841kB time=00:02:04.16 bitrate= 583.3kbits/s dup=0 drop=14890 speed=0.0966x
frame= 3727 fps=2.9 q=25.0 size=    8843kB time=00:02:04.20 bitrate= 583.3kbits/s dup=0 drop=14896 speed=0.0966x
frame= 3729 fps=2.9 q=25.0 size=    8846kB time=00:02:04.26 bitrate= 583.2kbits/s dup=0 drop=14902 speed=0.0966x
frame= 3731 fps=2.9 q=25.0 size=    8849kB time=00:02:04.33 bitrate= 583.1kbits/s dup=0 drop=14910 speed=0.0966x
frame= 3732 fps=2.9 q=25.0 size=    8851kB time=00:02:04.36 bitrate= 583.0kbits/s dup=0 drop=14917 speed=0.0966x
frame= 3734 fps=2.9 q=25.0 size=    8854kB time=00:02:04.43 bitrate= 582.9kbits/s dup=0 drop=14922 speed=0.0966x
frame= 3736 fps=2.9 q=25.0 size=    8857kB time=00:02:04.50 bitrate= 582.8kbits/s dup=0 drop=14930 speed=0.0966x
frame= 3737 fps=2.9 q=25.0 size=    8859kB time=00:02:04.53 bitrate= 582.7kbits/s dup=0 drop=14936 speed=0.0966x
frame= 3739 fps=2.9 q=22.0 size=    8875kB time=00:02:04.60 bitrate= 583.5kbits/s dup=0 drop=14942 speed=0.0966x
frame= 3741 fps=2.9 q=25.0 size=    8878kB time=00:02:04.66 bitrate= 583.4kbits/s dup=0 drop=14950 speed=0.0966x
frame= 3743 fps=2.9 q=25.0 size=    8882kB time=00:02:04.73 bitrate= 583.3kbits/s dup=0 drop=14958 speed=0.0966x
frame= 3745 fps=2.9 q=25.0 size=    8885kB time=00:02:04.80 bitrate= 583.2kbits/s dup=0 drop=14966 speed=0.0966x
frame= 3747 fps=2.9 q=25.0 size=    8889kB time=00:02:04.86 bitrate= 583.2kbits/s dup=0 drop=14974 speed=0.0966x
frame= 3749 fps=2.9 q=25.0 size=    8892kB time=00:02:04.93 bitrate= 583.1kbits/s dup=0 drop=14982 speed=0.0966x
frame= 3751 fps=2.9 q=25.0 size=    8896kB time=00:02:05.00 bitrate= 583.0kbits/s dup=0 drop=14990 speed=0.0966x
frame= 3752 fps=2.9 q=25.0 size=    8898kB time=00:02:05.03 bitrate= 583.0kbits/s dup=0 drop=14996 speed=0.0966x
frame= 3754 fps=2.9 q=25.0 size=    8901kB time=00:02:05.10 bitrate= 582.9kbits/s dup=0 drop=15002 speed=0.0966x
frame= 3755 fps=2.9 q=25.0 size=    8903kB time=00:02:05.13 bitrate= 582.8kbits/s dup=0 drop=15008 speed=0.0966x
frame= 3757 fps=2.9 q=25.0 size=    8906kB time=00:02:05.20 bitrate= 582.8kbits/s dup=0 drop=15014 speed=0.0966x
frame= 3758 fps=2.9 q=25.0 size=    8908kB time=00:02:05.23 bitrate= 582.7kbits/s dup=0 drop=15019 speed=0.0966x
frame= 3760 fps=2.9 q=25.0 size=    8911kB time=00:02:05.30 bitrate= 582.6kbits/s dup=0 drop=15026 speed=0.0966x
frame= 3761 fps=2.9 q=25.0 size=    8913kB time=00:02:05.33 bitrate= 582.6kbits/s dup=0 drop=15032 speed=0.0966x
frame= 3763 fps=2.9 q=25.0 size=    8916kB time=00:02:05.40 bitrate= 582.5kbits/s dup=0 drop=15038 speed=0.0966x
frame= 3765 fps=2.9 q=25.0 size=    8920kB time=00:02:05.46 bitrate= 582.4kbits/s dup=0 drop=15046 speed=0.0967x
frame= 3766 fps=2.9 q=25.0 size=    8921kB time=00:02:05.50 bitrate= 582.3kbits/s dup=0 drop=15050 speed=0.0966x
frame= 3767 fps=2.9 q=25.0 size=    8923kB time=00:02:05.53 bitrate= 582.3kbits/s dup=0 drop=15056 speed=0.0966x
frame= 3769 fps=2.9 q=25.0 size=    8926kB time=00:02:05.60 bitrate= 582.2kbits/s dup=0 drop=15062 speed=0.0966x
frame= 3771 fps=2.9 q=25.0 size=    8930kB time=00:02:05.66 bitrate= 582.1kbits/s dup=0 drop=15070 speed=0.0967x
frame= 3772 fps=2.9 q=25.0 size=    8931kB time=00:02:05.70 bitrate= 582.1kbits/s dup=0 drop=15076 speed=0.0966x
frame= 3774 fps=2.9 q=25.0 size=    8935kB time=00:02:05.76 bitrate= 582.0kbits/s dup=0 drop=15082 speed=0.0967x
frame= 3775 fps=2.9 q=25.0 size=    8936kB time=00:02:05.80 bitrate= 581.9kbits/s dup=0 drop=15088 speed=0.0966x
frame= 3777 fps=2.9 q=25.0 size=    8940kB time=00:02:05.86 bitrate= 581.8kbits/s dup=0 drop=15094 speed=0.0967x
frame= 3778 fps=2.9 q=25.0 size=    8941kB time=00:02:05.90 bitrate= 581.8kbits/s dup=0 drop=15100 speed=0.0966x
frame= 3779 fps=2.9 q=25.0 size=    8943kB time=00:02:05.93 bitrate= 581.7kbits/s dup=0 drop=15105 speed=0.0966x
frame= 3781 fps=2.9 q=25.0 size=    8946kB time=00:02:06.00 bitrate= 581.6kbits/s dup=0 drop=15110 speed=0.0966x
frame= 3782 fps=2.9 q=25.0 size=    8948kB time=00:02:06.03 bitrate= 581.6kbits/s dup=0 drop=15117 speed=0.0966x
frame= 3784 fps=2.9 q=25.0 size=    8951kB time=00:02:06.10 bitrate= 581.5kbits/s dup=0 drop=15122 speed=0.0966x
frame= 3786 fps=2.9 q=25.0 size=    8954kB time=00:02:06.16 bitrate= 581.4kbits/s dup=0 drop=15130 speed=0.0966x
frame= 3788 fps=2.9 q=25.0 size=    8957kB time=00:02:06.23 bitrate= 581.3kbits/s dup=0 drop=15138 speed=0.0967x
frame= 3789 fps=2.9 q=25.0 size=    8959kB time=00:02:06.26 bitrate= 581.2kbits/s dup=0 drop=15144 speed=0.0966x
frame= 3791 fps=2.9 q=25.0 size=    8962kB time=00:02:06.33 bitrate= 581.1kbits/s dup=0 drop=15150 speed=0.0967x
frame= 3792 fps=2.9 q=25.0 size=    8964kB time=00:02:06.36 bitrate= 581.1kbits/s dup=0 drop=15156 speed=0.0966x
frame= 3794 fps=2.9 q=25.0 size=    8967kB time=00:02:06.43 bitrate= 581.0kbits/s dup=0 drop=15162 speed=0.0967x
frame= 3795 fps=2.9 q=25.0 size=    8968kB time=00:02:06.46 bitrate= 580.9kbits/s dup=0 drop=15168 speed=0.0966x
frame= 3796 fps=2.9 q=25.0 size=    8970kB time=00:02:06.50 bitrate= 580.9kbits/s dup=0 drop=15173 speed=0.0966x
frame= 3798 fps=2.9 q=25.0 size=    8973kB time=00:02:06.56 bitrate= 580.8kbits/s dup=0 drop=15178 speed=0.0966x
frame= 3799 fps=2.9 q=25.0 size=    8975kB time=00:02:06.60 bitrate= 580.7kbits/s dup=0 drop=15185 speed=0.0966x
frame= 3801 fps=2.9 q=25.0 size=    8978kB time=00:02:06.66 bitrate= 580.6kbits/s dup=0 drop=15190 speed=0.0966x
frame= 3802 fps=2.9 q=25.0 size=    8980kB time=00:02:06.70 bitrate= 580.6kbits/s dup=0 drop=15197 speed=0.0966x
frame= 3804 fps=2.9 q=25.0 size=    8983kB time=00:02:06.76 bitrate= 580.5kbits/s dup=0 drop=15202 speed=0.0966x
frame= 3805 fps=2.9 q=25.0 size=    8984kB time=00:02:06.80 bitrate= 580.4kbits/s dup=0 drop=15209 speed=0.0966x
frame= 3807 fps=2.9 q=25.0 size=    8988kB time=00:02:06.86 bitrate= 580.3kbits/s dup=0 drop=15214 speed=0.0966x
frame= 3808 fps=2.9 q=25.0 size=    8989kB time=00:02:06.90 bitrate= 580.3kbits/s dup=0 drop=15221 speed=0.0966x
frame= 3810 fps=2.9 q=25.0 size=    8992kB time=00:02:06.96 bitrate= 580.2kbits/s dup=0 drop=15226 speed=0.0966x
frame= 3811 fps=2.9 q=25.0 size=    8994kB time=00:02:07.00 bitrate= 580.1kbits/s dup=0 drop=15233 speed=0.0966x
frame= 3813 fps=2.9 q=25.0 size=    8997kB time=00:02:07.06 bitrate= 580.0kbits/s dup=0 drop=15238 speed=0.0967x
frame= 3814 fps=2.9 q=25.0 size=    8999kB time=00:02:07.10 bitrate= 580.0kbits/s dup=0 drop=15245 speed=0.0966x
frame= 3816 fps=2.9 q=25.0 size=    9002kB time=00:02:07.16 bitrate= 579.9kbits/s dup=0 drop=15250 speed=0.0967x
frame= 3817 fps=2.9 q=25.0 size=    9003kB time=00:02:07.20 bitrate= 579.8kbits/s dup=0 drop=15256 speed=0.0966x
frame= 3819 fps=2.9 q=25.0 size=    9006kB time=00:02:07.26 bitrate= 579.7kbits/s dup=0 drop=15262 speed=0.0967x
frame= 3821 fps=2.9 q=25.0 size=    9009kB time=00:02:07.33 bitrate= 579.6kbits/s dup=0 drop=15270 speed=0.0967x
frame= 3823 fps=2.9 q=25.0 size=    9012kB time=00:02:07.40 bitrate= 579.5kbits/s dup=0 drop=15278 speed=0.0967x
frame= 3825 fps=2.9 q=25.0 size=    9016kB time=00:02:07.46 bitrate= 579.4kbits/s dup=0 drop=15286 speed=0.0967x
frame= 3827 fps=2.9 q=25.0 size=    9019kB time=00:02:07.53 bitrate= 579.3kbits/s dup=0 drop=15294 speed=0.0967x
frame= 3829 fps=2.9 q=25.0 size=    9022kB time=00:02:07.60 bitrate= 579.2kbits/s dup=0 drop=15302 speed=0.0967x
frame= 3831 fps=2.9 q=25.0 size=    9025kB time=00:02:07.66 bitrate= 579.1kbits/s dup=0 drop=15310 speed=0.0967x
frame= 3833 fps=2.9 q=25.0 size=    9028kB time=00:02:07.73 bitrate= 579.0kbits/s dup=0 drop=15318 speed=0.0967x
frame= 3834 fps=2.9 q=25.0 size=    9030kB time=00:02:07.76 bitrate= 578.9kbits/s dup=0 drop=15325 speed=0.0967x
frame= 3836 fps=2.9 q=25.0 size=    9033kB time=00:02:07.83 bitrate= 578.9kbits/s dup=0 drop=15330 speed=0.0967x
frame= 3837 fps=2.9 q=25.0 size=    9034kB time=00:02:07.86 bitrate= 578.8kbits/s dup=0 drop=15336 speed=0.0967x
frame= 3839 fps=2.9 q=25.0 size=    9038kB time=00:02:07.93 bitrate= 578.7kbits/s dup=0 drop=15342 speed=0.0967x
frame= 3840 fps=2.9 q=25.0 size=    9039kB time=00:02:07.96 bitrate= 578.7kbits/s dup=0 drop=15348 speed=0.0967x
frame= 3842 fps=2.9 q=25.0 size=    9042kB time=00:02:08.03 bitrate= 578.6kbits/s dup=0 drop=15354 speed=0.0967x
frame= 3843 fps=2.9 q=25.0 size=    9044kB time=00:02:08.06 bitrate= 578.5kbits/s dup=0 drop=15361 speed=0.0967x
frame= 3845 fps=2.9 q=25.0 size=    9047kB time=00:02:08.13 bitrate= 578.4kbits/s dup=0 drop=15366 speed=0.0967x
frame= 3847 fps=2.9 q=25.0 size=    9050kB time=00:02:08.20 bitrate= 578.3kbits/s dup=0 drop=15374 speed=0.0967x
frame= 3848 fps=2.9 q=25.0 size=    9052kB time=00:02:08.23 bitrate= 578.3kbits/s dup=0 drop=15380 speed=0.0967x
frame= 3850 fps=2.9 q=25.0 size=    9055kB time=00:02:08.30 bitrate= 578.2kbits/s dup=0 drop=15386 speed=0.0967x
frame= 3851 fps=2.9 q=25.0 size=    9057kB time=00:02:08.33 bitrate= 578.1kbits/s dup=0 drop=15391 speed=0.0967x
frame= 3853 fps=2.9 q=25.0 size=    9060kB time=00:02:08.40 bitrate= 578.0kbits/s dup=0 drop=15398 speed=0.0967x
frame= 3854 fps=2.9 q=25.0 size=    9062kB time=00:02:08.43 bitrate= 578.0kbits/s dup=0 drop=15405 speed=0.0967x
frame= 3856 fps=2.9 q=25.0 size=    9065kB time=00:02:08.50 bitrate= 577.9kbits/s dup=0 drop=15410 speed=0.0967x
frame= 3857 fps=2.9 q=25.0 size=    9067kB time=00:02:08.53 bitrate= 577.9kbits/s dup=0 drop=15414 speed=0.0967x
frame= 3859 fps=2.9 q=25.0 size=    9070kB time=00:02:08.60 bitrate= 577.8kbits/s dup=0 drop=15422 speed=0.0967x
frame= 3861 fps=2.9 q=25.0 size=    9073kB time=00:02:08.66 bitrate= 577.7kbits/s dup=0 drop=15430 speed=0.0967x
frame= 3863 fps=2.9 q=25.0 size=    9076kB time=00:02:08.73 bitrate= 577.6kbits/s dup=0 drop=15438 speed=0.0967x
frame= 3864 fps=2.9 q=25.0 size=    9078kB time=00:02:08.76 bitrate= 577.5kbits/s dup=0 drop=15444 speed=0.0967x
frame= 3866 fps=2.9 q=25.0 size=    9081kB time=00:02:08.83 bitrate= 577.4kbits/s dup=0 drop=15450 speed=0.0967x
frame= 3868 fps=2.9 q=25.0 size=    9084kB time=00:02:08.90 bitrate= 577.3kbits/s dup=0 drop=15458 speed=0.0967x
frame= 3869 fps=2.9 q=25.0 size=    9086kB time=00:02:08.93 bitrate= 577.3kbits/s dup=0 drop=15464 speed=0.0967x
frame= 3871 fps=2.9 q=25.0 size=    9089kB time=00:02:09.00 bitrate= 577.2kbits/s dup=0 drop=15470 speed=0.0967x
frame= 3872 fps=2.9 q=25.0 size=    9091kB time=00:02:09.03 bitrate= 577.1kbits/s dup=0 drop=15476 speed=0.0967x
frame= 3874 fps=2.9 q=25.0 size=    9094kB time=00:02:09.10 bitrate= 577.1kbits/s dup=0 drop=15482 speed=0.0967x
frame= 3875 fps=2.9 q=25.0 size=    9096kB time=00:02:09.13 bitrate= 577.0kbits/s dup=0 drop=15488 speed=0.0967x
frame= 3877 fps=2.9 q=25.0 size=    9099kB time=00:02:09.20 bitrate= 576.9kbits/s dup=0 drop=15494 speed=0.0967x
frame= 3878 fps=2.9 q=25.0 size=    9100kB time=00:02:09.23 bitrate= 576.9kbits/s dup=0 drop=15500 speed=0.0967x
frame= 3880 fps=2.9 q=25.0 size=    9104kB time=00:02:09.30 bitrate= 576.8kbits/s dup=0 drop=15506 speed=0.0967x
frame= 3881 fps=2.9 q=25.0 size=    9105kB time=00:02:09.33 bitrate= 576.7kbits/s dup=0 drop=15512 speed=0.0967x
frame= 3883 fps=2.9 q=25.0 size=    9108kB time=00:02:09.40 bitrate= 576.6kbits/s dup=0 drop=15518 speed=0.0967x
frame= 3885 fps=2.9 q=25.0 size=    9111kB time=00:02:09.46 bitrate= 576.5kbits/s dup=0 drop=15526 speed=0.0967x
frame= 3886 fps=2.9 q=25.0 size=    9113kB time=00:02:09.50 bitrate= 576.5kbits/s dup=0 drop=15532 speed=0.0967x
frame= 3888 fps=2.9 q=25.0 size=    9116kB time=00:02:09.56 bitrate= 576.4kbits/s dup=0 drop=15538 speed=0.0967x
frame= 3889 fps=2.9 q=25.0 size=    9118kB time=00:02:09.60 bitrate= 576.3kbits/s dup=0 drop=15544 speed=0.0967x
frame= 3891 fps=2.9 q=25.0 size=    9121kB time=00:02:09.66 bitrate= 576.2kbits/s dup=0 drop=15550 speed=0.0967x
frame= 3892 fps=2.9 q=25.0 size=    9123kB time=00:02:09.70 bitrate= 576.2kbits/s dup=0 drop=15556 speed=0.0967x
frame= 3894 fps=2.9 q=25.0 size=    9126kB time=00:02:09.76 bitrate= 576.1kbits/s dup=0 drop=15562 speed=0.0967x
frame= 3896 fps=2.9 q=25.0 size=    9129kB time=00:02:09.83 bitrate= 576.0kbits/s dup=0 drop=15570 speed=0.0968x
frame= 3898 fps=2.9 q=25.0 size=    9132kB time=00:02:09.90 bitrate= 575.9kbits/s dup=0 drop=15578 speed=0.0968x
frame= 3900 fps=2.9 q=25.0 size=    9135kB time=00:02:09.96 bitrate= 575.8kbits/s dup=0 drop=15586 speed=0.0968x
frame= 3902 fps=2.9 q=25.0 size=    9138kB time=00:02:10.03 bitrate= 575.7kbits/s dup=0 drop=15594 speed=0.0968x
frame= 3904 fps=2.9 q=25.0 size=    9141kB time=00:02:10.10 bitrate= 575.6kbits/s dup=0 drop=15602 speed=0.0968x
frame= 3906 fps=2.9 q=25.0 size=    9144kB time=00:02:10.16 bitrate= 575.5kbits/s dup=0 drop=15610 speed=0.0968x
frame= 3907 fps=2.9 q=25.0 size=    9146kB time=00:02:10.20 bitrate= 575.5kbits/s dup=0 drop=15616 speed=0.0968x
frame= 3909 fps=2.9 q=25.0 size=    9149kB time=00:02:10.26 bitrate= 575.4kbits/s dup=0 drop=15622 speed=0.0968x
frame= 3910 fps=2.9 q=25.0 size=    9151kB time=00:02:10.30 bitrate= 575.3kbits/s dup=0 drop=15628 speed=0.0968x
frame= 3912 fps=2.9 q=25.0 size=    9154kB time=00:02:10.36 bitrate= 575.2kbits/s dup=0 drop=15634 speed=0.0968x
frame= 3913 fps=2.9 q=25.0 size=    9156kB time=00:02:10.40 bitrate= 575.2kbits/s dup=0 drop=15638 speed=0.0968x
frame= 3914 fps=2.9 q=25.0 size=    9157kB time=00:02:10.43 bitrate= 575.1kbits/s dup=0 drop=15645 speed=0.0968x
frame= 3916 fps=2.9 q=25.0 size=    9160kB time=00:02:10.50 bitrate= 575.0kbits/s dup=0 drop=15651 speed=0.0968x
frame= 3918 fps=2.9 q=25.0 size=    9164kB time=00:02:10.56 bitrate= 574.9kbits/s dup=0 drop=15658 speed=0.0968x
frame= 3920 fps=2.9 q=25.0 size=    9167kB time=00:02:10.63 bitrate= 574.8kbits/s dup=0 drop=15666 speed=0.0968x
frame= 3921 fps=2.9 q=25.0 size=    9168kB time=00:02:10.66 bitrate= 574.8kbits/s dup=0 drop=15671 speed=0.0968x
frame= 3923 fps=2.9 q=25.0 size=    9171kB time=00:02:10.73 bitrate= 574.7kbits/s dup=0 drop=15679 speed=0.0968x
frame= 3925 fps=2.9 q=25.0 size=    9174kB time=00:02:10.80 bitrate= 574.6kbits/s dup=0 drop=15686 speed=0.0968x
frame= 3927 fps=2.9 q=25.0 size=    9177kB time=00:02:10.86 bitrate= 574.5kbits/s dup=0 drop=15694 speed=0.0968x
frame= 3928 fps=2.9 q=25.0 size=    9179kB time=00:02:10.90 bitrate= 574.4kbits/s dup=0 drop=15698 speed=0.0968x
frame= 3930 fps=2.9 q=25.0 size=    9182kB time=00:02:10.96 bitrate= 574.3kbits/s dup=0 drop=15706 speed=0.0968x
frame= 3932 fps=2.9 q=25.0 size=    9185kB time=00:02:11.03 bitrate= 574.2kbits/s dup=0 drop=15714 speed=0.0968x
frame= 3934 fps=2.9 q=25.0 size=    9188kB time=00:02:11.10 bitrate= 574.1kbits/s dup=0 drop=15722 speed=0.0969x
frame= 3935 fps=2.9 q=25.0 size=    9190kB time=00:02:11.13 bitrate= 574.1kbits/s dup=0 drop=15728 speed=0.0968x
frame= 3937 fps=2.9 q=25.0 size=    9193kB time=00:02:11.20 bitrate= 574.0kbits/s dup=0 drop=15734 speed=0.0969x
frame= 3938 fps=2.9 q=25.0 size=    9195kB time=00:02:11.23 bitrate= 574.0kbits/s dup=0 drop=15738 speed=0.0968x
frame= 3939 fps=2.9 q=25.0 size=    9196kB time=00:02:11.26 bitrate= 573.9kbits/s dup=0 drop=15744 speed=0.0968x
frame= 3941 fps=2.9 q=25.0 size=    9199kB time=00:02:11.33 bitrate= 573.8kbits/s dup=0 drop=15750 speed=0.0968x
frame= 3942 fps=2.9 q=25.0 size=    9201kB time=00:02:11.36 bitrate= 573.8kbits/s dup=0 drop=15756 speed=0.0968x
frame= 3944 fps=2.9 q=25.0 size=    9204kB time=00:02:11.43 bitrate= 573.7kbits/s dup=0 drop=15762 speed=0.0968x
frame= 3945 fps=2.9 q=25.0 size=    9206kB time=00:02:11.46 bitrate= 573.6kbits/s dup=0 drop=15768 speed=0.0968x
frame= 3947 fps=2.9 q=25.0 size=    9209kB time=00:02:11.53 bitrate= 573.5kbits/s dup=0 drop=15774 speed=0.0968x
frame= 3948 fps=2.9 q=25.0 size=    9210kB time=00:02:11.56 bitrate= 573.5kbits/s dup=0 drop=15779 speed=0.0968x
frame= 3950 fps=2.9 q=25.0 size=    9213kB time=00:02:11.63 bitrate= 573.4kbits/s dup=0 drop=15786 speed=0.0968x
frame= 3951 fps=2.9 q=25.0 size=    9215kB time=00:02:11.66 bitrate= 573.3kbits/s dup=0 drop=15792 speed=0.0968x
frame= 3953 fps=2.9 q=25.0 size=    9218kB time=00:02:11.73 bitrate= 573.2kbits/s dup=0 drop=15798 speed=0.0968x
frame= 3954 fps=2.9 q=25.0 size=    9220kB time=00:02:11.76 bitrate= 573.2kbits/s dup=0 drop=15803 speed=0.0968x
frame= 3956 fps=2.9 q=25.0 size=    9223kB time=00:02:11.83 bitrate= 573.1kbits/s dup=0 drop=15810 speed=0.0968x
frame= 3957 fps=2.9 q=25.0 size=    9225kB time=00:02:11.86 bitrate= 573.1kbits/s dup=0 drop=15814 speed=0.0968x
frame= 3958 fps=2.9 q=25.0 size=    9226kB time=00:02:11.90 bitrate= 573.0kbits/s dup=0 drop=15820 speed=0.0968x
frame= 3960 fps=2.9 q=25.0 size=    9229kB time=00:02:11.96 bitrate= 572.9kbits/s dup=0 drop=15826 speed=0.0968x
frame= 3962 fps=2.9 q=25.0 size=    9233kB time=00:02:12.03 bitrate= 572.8kbits/s dup=0 drop=15834 speed=0.0968x
frame= 3963 fps=2.9 q=25.0 size=    9234kB time=00:02:12.06 bitrate= 572.8kbits/s dup=0 drop=15840 speed=0.0968x
frame= 3965 fps=2.9 q=25.0 size=    9237kB time=00:02:12.13 bitrate= 572.7kbits/s dup=0 drop=15846 speed=0.0968x
frame= 3966 fps=2.9 q=25.0 size=    9239kB time=00:02:12.16 bitrate= 572.6kbits/s dup=0 drop=15853 speed=0.0968x
frame= 3968 fps=2.9 q=25.0 size=    9242kB time=00:02:12.23 bitrate= 572.5kbits/s dup=0 drop=15858 speed=0.0968x
frame= 3970 fps=2.9 q=25.0 size=    9245kB time=00:02:12.30 bitrate= 572.4kbits/s dup=0 drop=15866 speed=0.0968x
frame= 3971 fps=2.9 q=25.0 size=    9247kB time=00:02:12.33 bitrate= 572.4kbits/s dup=0 drop=15872 speed=0.0968x
frame= 3973 fps=2.9 q=25.0 size=    9250kB time=00:02:12.40 bitrate= 572.3kbits/s dup=0 drop=15878 speed=0.0968x
frame= 3974 fps=2.9 q=25.0 size=    9251kB time=00:02:12.43 bitrate= 572.3kbits/s dup=0 drop=15883 speed=0.0968x
frame= 3976 fps=2.9 q=25.0 size=    9255kB time=00:02:12.50 bitrate= 572.2kbits/s dup=0 drop=15890 speed=0.0968x
frame= 3977 fps=2.9 q=25.0 size=    9256kB time=00:02:12.53 bitrate= 572.1kbits/s dup=0 drop=15895 speed=0.0968x
frame= 3979 fps=2.9 q=25.0 size=    9260kB time=00:02:12.60 bitrate= 572.1kbits/s dup=0 drop=15902 speed=0.0968x
frame= 3981 fps=2.9 q=25.0 size=    9263kB time=00:02:12.66 bitrate= 572.0kbits/s dup=0 drop=15910 speed=0.0968x
frame= 3983 fps=2.9 q=25.0 size=    9266kB time=00:02:12.73 bitrate= 571.9kbits/s dup=0 drop=15918 speed=0.0968x
frame= 3984 fps=2.9 q=25.0 size=    9268kB time=00:02:12.76 bitrate= 571.8kbits/s dup=0 drop=15923 speed=0.0968x
frame= 3986 fps=2.9 q=25.0 size=    9271kB time=00:02:12.83 bitrate= 571.7kbits/s dup=0 drop=15930 speed=0.0968x
frame= 3988 fps=2.9 q=25.0 size=    9274kB time=00:02:12.90 bitrate= 571.7kbits/s dup=0 drop=15938 speed=0.0968x
frame= 3989 fps=2.9 q=22.0 size=    9288kB time=00:02:12.93 bitrate= 572.4kbits/s dup=0 drop=15945 speed=0.0968x
frame= 3991 fps=2.9 q=25.0 size=    9292kB time=00:02:13.00 bitrate= 572.3kbits/s dup=0 drop=15952 speed=0.0968x
frame= 3993 fps=2.9 q=25.0 size=    9296kB time=00:02:13.06 bitrate= 572.3kbits/s dup=0 drop=15958 speed=0.0969x
frame= 3994 fps=2.9 q=25.0 size=    9298kB time=00:02:13.10 bitrate= 572.2kbits/s dup=0 drop=15964 speed=0.0968x
frame= 3996 fps=2.9 q=25.0 size=    9301kB time=00:02:13.16 bitrate= 572.2kbits/s dup=0 drop=15970 speed=0.0969x
frame= 3997 fps=2.9 q=25.0 size=    9303kB time=00:02:13.20 bitrate= 572.1kbits/s dup=0 drop=15976 speed=0.0968x
frame= 3999 fps=2.9 q=25.0 size=    9307kB time=00:02:13.26 bitrate= 572.1kbits/s dup=0 drop=15982 speed=0.0969x
frame= 4001 fps=2.9 q=25.0 size=    9310kB time=00:02:13.33 bitrate= 572.0kbits/s dup=0 drop=15990 speed=0.0969x
frame= 4002 fps=2.9 q=25.0 size=    9312kB time=00:02:13.36 bitrate= 572.0kbits/s dup=0 drop=15997 speed=0.0969x
frame= 4004 fps=2.9 q=25.0 size=    9315kB time=00:02:13.43 bitrate= 571.9kbits/s dup=0 drop=16002 speed=0.0969x
frame= 4005 fps=2.9 q=25.0 size=    9317kB time=00:02:13.46 bitrate= 571.9kbits/s dup=0 drop=16006 speed=0.0969x
frame= 4006 fps=2.9 q=25.0 size=    9319kB time=00:02:13.50 bitrate= 571.8kbits/s dup=0 drop=16012 speed=0.0968x
frame= 4008 fps=2.9 q=25.0 size=    9323kB time=00:02:13.56 bitrate= 571.8kbits/s dup=0 drop=16018 speed=0.0968x
frame= 4009 fps=2.9 q=25.0 size=    9324kB time=00:02:13.60 bitrate= 571.7kbits/s dup=0 drop=16024 speed=0.0968x
frame= 4011 fps=2.9 q=25.0 size=    9328kB time=00:02:13.66 bitrate= 571.7kbits/s dup=0 drop=16030 speed=0.0968x
frame= 4012 fps=2.9 q=25.0 size=    9330kB time=00:02:13.70 bitrate= 571.6kbits/s dup=0 drop=16037 speed=0.0968x
frame= 4014 fps=2.9 q=25.0 size=    9333kB time=00:02:13.76 bitrate= 571.6kbits/s dup=0 drop=16042 speed=0.0968x
frame= 4015 fps=2.9 q=25.0 size=    9335kB time=00:02:13.80 bitrate= 571.5kbits/s dup=0 drop=16049 speed=0.0968x
frame= 4017 fps=2.9 q=25.0 size=    9338kB time=00:02:13.86 bitrate= 571.4kbits/s dup=0 drop=16054 speed=0.0968x
frame= 4019 fps=2.9 q=25.0 size=    9341kB time=00:02:13.93 bitrate= 571.4kbits/s dup=0 drop=16062 speed=0.0969x
frame= 4021 fps=2.9 q=25.0 size=    9345kB time=00:02:14.00 bitrate= 571.3kbits/s dup=0 drop=16070 speed=0.0969x
frame= 4023 fps=2.9 q=25.0 size=    9348kB time=00:02:14.06 bitrate= 571.2kbits/s dup=0 drop=16078 speed=0.0969x
frame= 4025 fps=2.9 q=25.0 size=    9351kB time=00:02:14.13 bitrate= 571.1kbits/s dup=0 drop=16086 speed=0.0969x
frame= 4027 fps=2.9 q=25.0 size=    9355kB time=00:02:14.20 bitrate= 571.0kbits/s dup=0 drop=16094 speed=0.0969x
frame= 4029 fps=2.9 q=25.0 size=    9358kB time=00:02:14.26 bitrate= 571.0kbits/s dup=0 drop=16102 speed=0.0969x
frame= 4031 fps=2.9 q=25.0 size=    9361kB time=00:02:14.33 bitrate= 570.9kbits/s dup=0 drop=16110 speed=0.0969x
frame= 4033 fps=2.9 q=25.0 size=    9365kB time=00:02:14.40 bitrate= 570.8kbits/s dup=0 drop=16118 speed=0.0969x
frame= 4035 fps=2.9 q=25.0 size=    9368kB time=00:02:14.46 bitrate= 570.7kbits/s dup=0 drop=16126 speed=0.0969x
frame= 4036 fps=2.9 q=25.0 size=    9370kB time=00:02:14.50 bitrate= 570.7kbits/s dup=0 drop=16132 speed=0.0969x
frame= 4038 fps=2.9 q=25.0 size=    9373kB time=00:02:14.56 bitrate= 570.6kbits/s dup=0 drop=16138 speed=0.0969x
frame= 4040 fps=2.9 q=25.0 size=    9376kB time=00:02:14.63 bitrate= 570.5kbits/s dup=0 drop=16146 speed=0.0969x
frame= 4041 fps=2.9 q=25.0 size=    9378kB time=00:02:14.66 bitrate= 570.5kbits/s dup=0 drop=16152 speed=0.0969x
frame= 4043 fps=2.9 q=25.0 size=    9381kB time=00:02:14.73 bitrate= 570.4kbits/s dup=0 drop=16158 speed=0.0969x
frame= 4045 fps=2.9 q=25.0 size=    9385kB time=00:02:14.80 bitrate= 570.3kbits/s dup=0 drop=16166 speed=0.0969x
frame= 4046 fps=2.9 q=25.0 size=    9386kB time=00:02:14.83 bitrate= 570.3kbits/s dup=0 drop=16170 speed=0.0969x
frame= 4048 fps=2.9 q=25.0 size=    9390kB time=00:02:14.90 bitrate= 570.2kbits/s dup=0 drop=16178 speed=0.0969x
frame= 4049 fps=2.9 q=25.0 size=    9391kB time=00:02:14.93 bitrate= 570.2kbits/s dup=0 drop=16183 speed=0.0969x
frame= 4050 fps=2.9 q=25.0 size=    9393kB time=00:02:14.96 bitrate= 570.1kbits/s dup=0 drop=16189 speed=0.0969x
frame= 4052 fps=2.9 q=25.0 size=    9396kB time=00:02:15.03 bitrate= 570.0kbits/s dup=0 drop=16194 speed=0.0969x
frame= 4053 fps=2.9 q=25.0 size=    9398kB time=00:02:15.06 bitrate= 570.0kbits/s dup=0 drop=16198 speed=0.0969x
frame= 4054 fps=2.9 q=25.0 size=    9400kB time=00:02:15.10 bitrate= 570.0kbits/s dup=0 drop=16202 speed=0.0969x
frame= 4055 fps=2.9 q=25.0 size=    9401kB time=00:02:15.13 bitrate= 569.9kbits/s dup=0 drop=16207 speed=0.0969x
frame= 4057 fps=2.9 q=25.0 size=    9405kB time=00:02:15.20 bitrate= 569.8kbits/s dup=0 drop=16214 speed=0.0969x
frame= 4059 fps=2.9 q=25.0 size=    9408kB time=00:02:15.26 bitrate= 569.7kbits/s dup=0 drop=16222 speed=0.0969x
frame= 4060 fps=2.9 q=25.0 size=    9409kB time=00:02:15.30 bitrate= 569.7kbits/s dup=0 drop=16228 speed=0.0969x
frame= 4062 fps=2.9 q=25.0 size=    9413kB time=00:02:15.36 bitrate= 569.6kbits/s dup=0 drop=16234 speed=0.0969x
frame= 4064 fps=2.9 q=25.0 size=    9416kB time=00:02:15.43 bitrate= 569.6kbits/s dup=0 drop=16242 speed=0.0969x
frame= 4065 fps=2.9 q=25.0 size=    9418kB time=00:02:15.46 bitrate= 569.5kbits/s dup=0 drop=16246 speed=0.0969x
frame= 4066 fps=2.9 q=25.0 size=    9419kB time=00:02:15.50 bitrate= 569.5kbits/s dup=0 drop=16250 speed=0.0969x
frame= 4067 fps=2.9 q=25.0 size=    9421kB time=00:02:15.53 bitrate= 569.4kbits/s dup=0 drop=16255 speed=0.0969x
frame= 4069 fps=2.9 q=25.0 size=    9424kB time=00:02:15.60 bitrate= 569.4kbits/s dup=0 drop=16262 speed=0.0969x
frame= 4070 fps=2.9 q=25.0 size=    9426kB time=00:02:15.63 bitrate= 569.3kbits/s dup=0 drop=16267 speed=0.0969x
frame= 4071 fps=2.9 q=25.0 size=    9428kB time=00:02:15.66 bitrate= 569.3kbits/s dup=0 drop=16273 speed=0.0968x
frame= 4073 fps=2.9 q=25.0 size=    9431kB time=00:02:15.73 bitrate= 569.2kbits/s dup=0 drop=16278 speed=0.0969x
frame= 4074 fps=2.9 q=25.0 size=    9432kB time=00:02:15.76 bitrate= 569.1kbits/s dup=0 drop=16284 speed=0.0968x
frame= 4076 fps=2.9 q=25.0 size=    9436kB time=00:02:15.83 bitrate= 569.1kbits/s dup=0 drop=16290 speed=0.0969x
frame= 4077 fps=2.9 q=25.0 size=    9437kB time=00:02:15.86 bitrate= 569.0kbits/s dup=0 drop=16296 speed=0.0968x
frame= 4079 fps=2.9 q=25.0 size=    9441kB time=00:02:15.93 bitrate= 568.9kbits/s dup=0 drop=16302 speed=0.0969x
frame= 4080 fps=2.9 q=25.0 size=    9442kB time=00:02:15.96 bitrate= 568.9kbits/s dup=0 drop=16309 speed=0.0968x
frame= 4082 fps=2.9 q=25.0 size=    9445kB time=00:02:16.03 bitrate= 568.8kbits/s dup=0 drop=16314 speed=0.0969x
frame= 4084 fps=2.9 q=25.0 size=    9449kB time=00:02:16.10 bitrate= 568.7kbits/s dup=0 drop=16322 speed=0.0969x
frame= 4085 fps=2.9 q=25.0 size=    9450kB time=00:02:16.13 bitrate= 568.7kbits/s dup=0 drop=16328 speed=0.0969x
frame= 4087 fps=2.9 q=25.0 size=    9453kB time=00:02:16.20 bitrate= 568.6kbits/s dup=0 drop=16334 speed=0.0969x
frame= 4089 fps=2.9 q=25.0 size=    9457kB time=00:02:16.26 bitrate= 568.5kbits/s dup=0 drop=16342 speed=0.0969x
frame= 4091 fps=2.9 q=25.0 size=    9460kB time=00:02:16.33 bitrate= 568.4kbits/s dup=0 drop=16350 speed=0.0969x
frame= 4092 fps=2.9 q=25.0 size=    9461kB time=00:02:16.36 bitrate= 568.4kbits/s dup=0 drop=16356 speed=0.0969x
frame= 4094 fps=2.9 q=25.0 size=    9464kB time=00:02:16.43 bitrate= 568.3kbits/s dup=0 drop=16362 speed=0.0969x
frame= 4096 fps=2.9 q=25.0 size=    9467kB time=00:02:16.50 bitrate= 568.2kbits/s dup=0 drop=16370 speed=0.0969x
frame= 4098 fps=2.9 q=25.0 size=    9471kB time=00:02:16.56 bitrate= 568.1kbits/s dup=0 drop=16378 speed=0.0969x
frame= 4100 fps=2.9 q=25.0 size=    9474kB time=00:02:16.63 bitrate= 568.0kbits/s dup=0 drop=16386 speed=0.0969x
frame= 4101 fps=2.9 q=25.0 size=    9476kB time=00:02:16.66 bitrate= 568.0kbits/s dup=0 drop=16393 speed=0.0969x
frame= 4103 fps=2.9 q=25.0 size=    9479kB time=00:02:16.73 bitrate= 567.9kbits/s dup=0 drop=16399 speed=0.0969x
frame= 4105 fps=2.9 q=25.0 size=    9482kB time=00:02:16.80 bitrate= 567.8kbits/s dup=0 drop=16406 speed=0.0969x
frame= 4106 fps=2.9 q=25.0 size=    9483kB time=00:02:16.83 bitrate= 567.8kbits/s dup=0 drop=16411 speed=0.0969x
frame= 4108 fps=2.9 q=25.0 size=    9487kB time=00:02:16.90 bitrate= 567.7kbits/s dup=0 drop=16418 speed=0.0969x
frame= 4109 fps=2.9 q=25.0 size=    9488kB time=00:02:16.93 bitrate= 567.6kbits/s dup=0 drop=16425 speed=0.0969x
frame= 4111 fps=2.9 q=25.0 size=    9491kB time=00:02:17.00 bitrate= 567.5kbits/s dup=0 drop=16430 speed=0.0969x
frame= 4113 fps=2.9 q=25.0 size=    9495kB time=00:02:17.06 bitrate= 567.5kbits/s dup=0 drop=16438 speed=0.0969x
frame= 4115 fps=2.9 q=25.0 size=    9498kB time=00:02:17.13 bitrate= 567.4kbits/s dup=0 drop=16446 speed=0.0969x
frame= 4116 fps=2.9 q=25.0 size=    9499kB time=00:02:17.16 bitrate= 567.3kbits/s dup=0 drop=16450 speed=0.0969x
frame= 4118 fps=2.9 q=25.0 size=    9502kB time=00:02:17.23 bitrate= 567.2kbits/s dup=0 drop=16458 speed=0.0969x
frame= 4120 fps=2.9 q=25.0 size=    9506kB time=00:02:17.30 bitrate= 567.2kbits/s dup=0 drop=16466 speed=0.0969x
frame= 4122 fps=2.9 q=25.0 size=    9509kB time=00:02:17.36 bitrate= 567.1kbits/s dup=0 drop=16474 speed=0.0969x
frame= 4123 fps=2.9 q=25.0 size=    9511kB time=00:02:17.40 bitrate= 567.0kbits/s dup=0 drop=16478 speed=0.0969x
frame= 4125 fps=2.9 q=25.0 size=    9514kB time=00:02:17.46 bitrate= 567.0kbits/s dup=0 drop=16486 speed=0.0969x
frame= 4126 fps=2.9 q=25.0 size=    9515kB time=00:02:17.50 bitrate= 566.9kbits/s dup=0 drop=16492 speed=0.0969x
frame= 4128 fps=2.9 q=25.0 size=    9519kB time=00:02:17.56 bitrate= 566.8kbits/s dup=0 drop=16498 speed=0.0969x
frame= 4129 fps=2.9 q=25.0 size=    9521kB time=00:02:17.60 bitrate= 566.8kbits/s dup=0 drop=16504 speed=0.0969x
frame= 4131 fps=2.9 q=25.0 size=    9524kB time=00:02:17.66 bitrate= 566.7kbits/s dup=0 drop=16510 speed=0.0969x
frame= 4132 fps=2.9 q=25.0 size=    9525kB time=00:02:17.70 bitrate= 566.7kbits/s dup=0 drop=16516 speed=0.0969x
frame= 4134 fps=2.9 q=25.0 size=    9529kB time=00:02:17.76 bitrate= 566.6kbits/s dup=0 drop=16522 speed=0.0969x
frame= 4135 fps=2.9 q=25.0 size=    9530kB time=00:02:17.80 bitrate= 566.5kbits/s dup=0 drop=16526 speed=0.0969x
frame= 4137 fps=2.9 q=25.0 size=    9533kB time=00:02:17.86 bitrate= 566.5kbits/s dup=0 drop=16534 speed=0.0969x
frame= 4138 fps=2.9 q=25.0 size=    9535kB time=00:02:17.90 bitrate= 566.4kbits/s dup=0 drop=16540 speed=0.0969x
frame= 4140 fps=2.9 q=25.0 size=    9538kB time=00:02:17.96 bitrate= 566.3kbits/s dup=0 drop=16546 speed=0.0969x
frame= 4141 fps=2.9 q=25.0 size=    9540kB time=00:02:18.00 bitrate= 566.3kbits/s dup=0 drop=16553 speed=0.0969x
frame= 4143 fps=2.9 q=25.0 size=    9543kB time=00:02:18.06 bitrate= 566.2kbits/s dup=0 drop=16558 speed=0.0969x
frame= 4144 fps=2.9 q=25.0 size=    9545kB time=00:02:18.10 bitrate= 566.2kbits/s dup=0 drop=16564 speed=0.0969x
frame= 4146 fps=2.9 q=25.0 size=    9548kB time=00:02:18.16 bitrate= 566.1kbits/s dup=0 drop=16570 speed=0.0969x
frame= 4148 fps=2.9 q=25.0 size=    9551kB time=00:02:18.23 bitrate= 566.0kbits/s dup=0 drop=16578 speed=0.0969x
frame= 4150 fps=2.9 q=25.0 size=    9555kB time=00:02:18.30 bitrate= 566.0kbits/s dup=0 drop=16586 speed=0.0969x
frame= 4151 fps=2.9 q=25.0 size=    9556kB time=00:02:18.33 bitrate= 565.9kbits/s dup=0 drop=16592 speed=0.0969x
frame= 4153 fps=2.9 q=25.0 size=    9560kB time=00:02:18.40 bitrate= 565.8kbits/s dup=0 drop=16598 speed=0.0969x
frame= 4154 fps=2.9 q=25.0 size=    9561kB time=00:02:18.43 bitrate= 565.8kbits/s dup=0 drop=16604 speed=0.0969x
frame= 4156 fps=2.9 q=25.0 size=    9565kB time=00:02:18.50 bitrate= 565.7kbits/s dup=0 drop=16610 speed=0.0969x
frame= 4157 fps=2.9 q=25.0 size=    9566kB time=00:02:18.53 bitrate= 565.7kbits/s dup=0 drop=16616 speed=0.0969x
frame= 4159 fps=2.9 q=25.0 size=    9570kB time=00:02:18.60 bitrate= 565.6kbits/s dup=0 drop=16622 speed=0.0969x
frame= 4160 fps=2.9 q=25.0 size=    9571kB time=00:02:18.63 bitrate= 565.6kbits/s dup=0 drop=16628 speed=0.0969x
frame= 4162 fps=2.9 q=25.0 size=    9575kB time=00:02:18.70 bitrate= 565.5kbits/s dup=0 drop=16634 speed=0.0969x
frame= 4163 fps=2.9 q=25.0 size=    9576kB time=00:02:18.73 bitrate= 565.5kbits/s dup=0 drop=16640 speed=0.0969x
frame= 4165 fps=2.9 q=25.0 size=    9579kB time=00:02:18.80 bitrate= 565.4kbits/s dup=0 drop=16646 speed=0.0969x
frame= 4166 fps=2.9 q=25.0 size=    9581kB time=00:02:18.83 bitrate= 565.3kbits/s dup=0 drop=16652 speed=0.0969x
frame= 4168 fps=2.9 q=25.0 size=    9584kB time=00:02:18.90 bitrate= 565.3kbits/s dup=0 drop=16658 speed=0.0969x
frame= 4169 fps=2.9 q=25.0 size=    9586kB time=00:02:18.93 bitrate= 565.2kbits/s dup=0 drop=16664 speed=0.0969x
frame= 4171 fps=2.9 q=25.0 size=    9589kB time=00:02:19.00 bitrate= 565.1kbits/s dup=0 drop=16670 speed=0.0969x
frame= 4172 fps=2.9 q=25.0 size=    9591kB time=00:02:19.03 bitrate= 565.1kbits/s dup=0 drop=16676 speed=0.0969x
frame= 4174 fps=2.9 q=25.0 size=    9594kB time=00:02:19.10 bitrate= 565.0kbits/s dup=0 drop=16682 speed=0.0969x
frame= 4174 fps=2.9 q=25.0 size=    9594kB time=00:02:19.10 bitrate= 565.0kbits/s dup=0 drop=16682 speed=0.0969x
frame= 4175 fps=2.9 q=25.0 size=    9595kB time=00:02:19.13 bitrate= 565.0kbits/s dup=0 drop=16689 speed=0.0969x
frame= 4177 fps=2.9 q=25.0 size=    9599kB time=00:02:19.20 bitrate= 564.9kbits/s dup=0 drop=16694 speed=0.0969x
frame= 4179 fps=2.9 q=25.0 size=    9602kB time=00:02:19.26 bitrate= 564.8kbits/s dup=0 drop=16702 speed=0.0969x
frame= 4181 fps=2.9 q=25.0 size=    9605kB time=00:02:19.33 bitrate= 564.7kbits/s dup=0 drop=16710 speed=0.0969x
frame= 4183 fps=2.9 q=25.0 size=    9608kB time=00:02:19.40 bitrate= 564.6kbits/s dup=0 drop=16718 speed=0.0969x
frame= 4184 fps=2.9 q=25.0 size=    9610kB time=00:02:19.43 bitrate= 564.6kbits/s dup=0 drop=16725 speed=0.0969x
frame= 4186 fps=2.9 q=25.0 size=    9613kB time=00:02:19.50 bitrate= 564.5kbits/s dup=0 drop=16730 speed=0.0969x
frame= 4188 fps=2.9 q=25.0 size=    9616kB time=00:02:19.56 bitrate= 564.4kbits/s dup=0 drop=16738 speed=0.0969x
frame= 4190 fps=2.9 q=25.0 size=    9619kB time=00:02:19.63 bitrate= 564.3kbits/s dup=0 drop=16746 speed=0.0969x
frame= 4192 fps=2.9 q=25.0 size=    9622kB time=00:02:19.70 bitrate= 564.2kbits/s dup=0 drop=16754 speed=0.0969x
frame= 4194 fps=2.9 q=25.0 size=    9625kB time=00:02:19.76 bitrate= 564.2kbits/s dup=0 drop=16762 speed=0.0969x
frame= 4195 fps=2.9 q=25.0 size=    9627kB time=00:02:19.80 bitrate= 564.1kbits/s dup=0 drop=16768 speed=0.0969x
frame= 4197 fps=2.9 q=25.0 size=    9630kB time=00:02:19.86 bitrate= 564.0kbits/s dup=0 drop=16774 speed=0.0969x
frame= 4198 fps=2.9 q=25.0 size=    9632kB time=00:02:19.90 bitrate= 564.0kbits/s dup=0 drop=16780 speed=0.0969x
frame= 4200 fps=2.9 q=25.0 size=    9635kB time=00:02:19.96 bitrate= 563.9kbits/s dup=0 drop=16786 speed=0.0969x
frame= 4201 fps=2.9 q=25.0 size=    9637kB time=00:02:20.00 bitrate= 563.9kbits/s dup=0 drop=16793 speed=0.0969x
frame= 4203 fps=2.9 q=25.0 size=    9640kB time=00:02:20.06 bitrate= 563.8kbits/s dup=0 drop=16798 speed=0.0969x
frame= 4204 fps=2.9 q=25.0 size=    9641kB time=00:02:20.10 bitrate= 563.8kbits/s dup=0 drop=16805 speed=0.0969x
frame= 4206 fps=2.9 q=25.0 size=    9644kB time=00:02:20.16 bitrate= 563.7kbits/s dup=0 drop=16811 speed=0.0969x
frame= 4208 fps=2.9 q=25.0 size=    9647kB time=00:02:20.23 bitrate= 563.6kbits/s dup=0 drop=16818 speed=0.0969x
frame= 4209 fps=2.9 q=25.0 size=    9649kB time=00:02:20.26 bitrate= 563.5kbits/s dup=0 drop=16825 speed=0.0969x
frame= 4211 fps=2.9 q=25.0 size=    9652kB time=00:02:20.33 bitrate= 563.4kbits/s dup=0 drop=16830 speed=0.0969x
frame= 4212 fps=2.9 q=25.0 size=    9654kB time=00:02:20.36 bitrate= 563.4kbits/s dup=0 drop=16836 speed=0.0969x
frame= 4214 fps=2.9 q=25.0 size=    9657kB time=00:02:20.43 bitrate= 563.3kbits/s dup=0 drop=16842 speed=0.0969x
frame= 4215 fps=2.9 q=25.0 size=    9658kB time=00:02:20.46 bitrate= 563.3kbits/s dup=0 drop=16846 speed=0.0969x
frame= 4217 fps=2.9 q=25.0 size=    9662kB time=00:02:20.53 bitrate= 563.2kbits/s dup=0 drop=16854 speed=0.0969x
frame= 4218 fps=2.9 q=25.0 size=    9663kB time=00:02:20.56 bitrate= 563.2kbits/s dup=0 drop=16861 speed=0.0969x
frame= 4220 fps=2.9 q=25.0 size=    9666kB time=00:02:20.63 bitrate= 563.1kbits/s dup=0 drop=16866 speed=0.0969x
frame= 4222 fps=2.9 q=25.0 size=    9670kB time=00:02:20.70 bitrate= 563.0kbits/s dup=0 drop=16874 speed=0.0969x
frame= 4224 fps=2.9 q=25.0 size=    9673kB time=00:02:20.76 bitrate= 562.9kbits/s dup=0 drop=16882 speed=0.0969x
frame= 4225 fps=2.9 q=25.0 size=    9674kB time=00:02:20.80 bitrate= 562.9kbits/s dup=0 drop=16889 speed=0.0969x
frame= 4227 fps=2.9 q=25.0 size=    9678kB time=00:02:20.86 bitrate= 562.8kbits/s dup=0 drop=16894 speed=0.097x
frame= 4228 fps=2.9 q=25.0 size=    9679kB time=00:02:20.90 bitrate= 562.8kbits/s dup=0 drop=16901 speed=0.0969x
frame= 4230 fps=2.9 q=25.0 size=    9682kB time=00:02:20.96 bitrate= 562.7kbits/s dup=0 drop=16906 speed=0.097x
frame= 4231 fps=2.9 q=25.0 size=    9684kB time=00:02:21.00 bitrate= 562.6kbits/s dup=0 drop=16912 speed=0.0969x
frame= 4233 fps=2.9 q=25.0 size=    9687kB time=00:02:21.06 bitrate= 562.6kbits/s dup=0 drop=16918 speed=0.0969x
frame= 4234 fps=2.9 q=25.0 size=    9689kB time=00:02:21.10 bitrate= 562.5kbits/s dup=0 drop=16923 speed=0.0969x
frame= 4236 fps=2.9 q=25.0 size=    9692kB time=00:02:21.16 bitrate= 562.4kbits/s dup=0 drop=16930 speed=0.0969x
frame= 4237 fps=2.9 q=25.0 size=    9694kB time=00:02:21.20 bitrate= 562.4kbits/s dup=0 drop=16935 speed=0.0969x
frame= 4239 fps=2.9 q=22.0 size=    9710kB time=00:02:21.26 bitrate= 563.1kbits/s dup=0 drop=16942 speed=0.0969x
frame= 4241 fps=2.9 q=25.0 size=    9713kB time=00:02:21.33 bitrate= 563.0kbits/s dup=0 drop=16950 speed=0.097x
frame= 4243 fps=2.9 q=25.0 size=    9717kB time=00:02:21.40 bitrate= 563.0kbits/s dup=0 drop=16958 speed=0.097x
frame= 4245 fps=2.9 q=25.0 size=    9721kB time=00:02:21.46 bitrate= 562.9kbits/s dup=0 drop=16966 speed=0.097x
frame= 4247 fps=2.9 q=25.0 size=    9724kB time=00:02:21.53 bitrate= 562.9kbits/s dup=0 drop=16974 speed=0.097x
frame= 4249 fps=2.9 q=25.0 size=    9728kB time=00:02:21.60 bitrate= 562.8kbits/s dup=0 drop=16982 speed=0.097x
frame= 4250 fps=2.9 q=25.0 size=    9730kB time=00:02:21.63 bitrate= 562.8kbits/s dup=0 drop=16989 speed=0.097x
frame= 4252 fps=2.9 q=25.0 size=    9734kB time=00:02:21.70 bitrate= 562.7kbits/s dup=0 drop=16995 speed=0.097x
frame= 4253 fps=2.9 q=25.0 size=    9735kB time=00:02:21.73 bitrate= 562.7kbits/s dup=0 drop=17000 speed=0.097x
frame= 4255 fps=2.9 q=25.0 size=    9739kB time=00:02:21.80 bitrate= 562.6kbits/s dup=0 drop=17006 speed=0.097x
frame= 4256 fps=2.9 q=25.0 size=    9741kB time=00:02:21.83 bitrate= 562.6kbits/s dup=0 drop=17012 speed=0.097x
frame= 4258 fps=2.9 q=25.0 size=    9744kB time=00:02:21.90 bitrate= 562.5kbits/s dup=0 drop=17018 speed=0.097x
frame= 4259 fps=2.9 q=25.0 size=    9746kB time=00:02:21.93 bitrate= 562.5kbits/s dup=0 drop=17025 speed=0.097x
frame= 4261 fps=2.9 q=25.0 size=    9749kB time=00:02:22.00 bitrate= 562.4kbits/s dup=0 drop=17030 speed=0.097x
frame= 4262 fps=2.9 q=25.0 size=    9751kB time=00:02:22.03 bitrate= 562.4kbits/s dup=0 drop=17037 speed=0.097x
frame= 4264 fps=2.9 q=25.0 size=    9755kB time=00:02:22.10 bitrate= 562.3kbits/s dup=0 drop=17042 speed=0.097x
frame= 4265 fps=2.9 q=25.0 size=    9756kB time=00:02:22.13 bitrate= 562.3kbits/s dup=0 drop=17046 speed=0.097x
frame= 4266 fps=2.9 q=25.0 size=    9758kB time=00:02:22.16 bitrate= 562.3kbits/s dup=0 drop=17052 speed=0.097x
frame= 4267 fps=2.9 q=25.0 size=    9760kB time=00:02:22.20 bitrate= 562.2kbits/s dup=0 drop=17057 speed=0.097x
frame= 4269 fps=2.9 q=25.0 size=    9763kB time=00:02:22.26 bitrate= 562.2kbits/s dup=0 drop=17062 speed=0.097x
frame= 4270 fps=2.9 q=25.0 size=    9765kB time=00:02:22.30 bitrate= 562.1kbits/s dup=0 drop=17067 speed=0.097x
frame= 4272 fps=2.9 q=25.0 size=    9768kB time=00:02:22.36 bitrate= 562.1kbits/s dup=0 drop=17074 speed=0.097x
frame= 4273 fps=2.9 q=25.0 size=    9770kB time=00:02:22.40 bitrate= 562.0kbits/s dup=0 drop=17079 speed=0.097x
frame= 4275 fps=2.9 q=25.0 size=    9773kB time=00:02:22.46 bitrate= 562.0kbits/s dup=0 drop=17086 speed=0.097x
frame= 4276 fps=2.9 q=25.0 size=    9775kB time=00:02:22.50 bitrate= 561.9kbits/s dup=0 drop=17093 speed=0.097x
frame= 4278 fps=2.9 q=25.0 size=    9778kB time=00:02:22.56 bitrate= 561.9kbits/s dup=0 drop=17098 speed=0.097x
frame= 4279 fps=2.9 q=25.0 size=    9780kB time=00:02:22.60 bitrate= 561.8kbits/s dup=0 drop=17104 speed=0.097x
frame= 4281 fps=2.9 q=25.0 size=    9783kB time=00:02:22.66 bitrate= 561.8kbits/s dup=0 drop=17110 speed=0.097x
frame= 4283 fps=2.9 q=25.0 size=    9787kB time=00:02:22.73 bitrate= 561.7kbits/s dup=0 drop=17118 speed=0.097x
frame= 4285 fps=2.9 q=25.0 size=    9790kB time=00:02:22.80 bitrate= 561.6kbits/s dup=0 drop=17126 speed=0.097x
frame= 4287 fps=2.9 q=25.0 size=    9793kB time=00:02:22.86 bitrate= 561.5kbits/s dup=0 drop=17134 speed=0.097x
frame= 4289 fps=2.9 q=25.0 size=    9796kB time=00:02:22.93 bitrate= 561.5kbits/s dup=0 drop=17142 speed=0.097x
frame= 4291 fps=2.9 q=25.0 size=    9800kB time=00:02:23.00 bitrate= 561.4kbits/s dup=0 drop=17150 speed=0.097x
frame= 4293 fps=2.9 q=25.0 size=    9803kB time=00:02:23.06 bitrate= 561.3kbits/s dup=0 drop=17158 speed=0.097x
frame= 4294 fps=2.9 q=25.0 size=    9805kB time=00:02:23.10 bitrate= 561.3kbits/s dup=0 drop=17163 speed=0.097x
frame= 4296 fps=2.9 q=25.0 size=    9808kB time=00:02:23.16 bitrate= 561.2kbits/s dup=0 drop=17170 speed=0.097x
frame= 4298 fps=2.9 q=25.0 size=    9811kB time=00:02:23.23 bitrate= 561.1kbits/s dup=0 drop=17178 speed=0.097x
frame= 4299 fps=2.9 q=25.0 size=    9813kB time=00:02:23.26 bitrate= 561.1kbits/s dup=0 drop=17185 speed=0.097x
frame= 4301 fps=2.9 q=25.0 size=    9816kB time=00:02:23.33 bitrate= 561.0kbits/s dup=0 drop=17191 speed=0.097x
frame= 4303 fps=2.9 q=25.0 size=    9819kB time=00:02:23.40 bitrate= 560.9kbits/s dup=0 drop=17198 speed=0.097x
frame= 4305 fps=2.9 q=25.0 size=    9822kB time=00:02:23.46 bitrate= 560.8kbits/s dup=0 drop=17206 speed=0.097x
frame= 4306 fps=2.9 q=25.0 size=    9824kB time=00:02:23.50 bitrate= 560.8kbits/s dup=0 drop=17213 speed=0.097x
frame= 4308 fps=2.9 q=25.0 size=    9827kB time=00:02:23.56 bitrate= 560.7kbits/s dup=0 drop=17218 speed=0.097x
frame= 4309 fps=2.9 q=25.0 size=    9829kB time=00:02:23.60 bitrate= 560.7kbits/s dup=0 drop=17224 speed=0.097x
frame= 4311 fps=2.9 q=25.0 size=    9832kB time=00:02:23.66 bitrate= 560.6kbits/s dup=0 drop=17230 speed=0.097x
frame= 4313 fps=2.9 q=25.0 size=    9835kB time=00:02:23.73 bitrate= 560.6kbits/s dup=0 drop=17238 speed=0.097x
frame= 4314 fps=2.9 q=25.0 size=    9837kB time=00:02:23.76 bitrate= 560.5kbits/s dup=0 drop=17245 speed=0.097x
frame= 4316 fps=2.9 q=25.0 size=    9840kB time=00:02:23.83 bitrate= 560.4kbits/s dup=0 drop=17250 speed=0.097x
frame= 4318 fps=2.9 q=25.0 size=    9843kB time=00:02:23.90 bitrate= 560.4kbits/s dup=0 drop=17258 speed=0.0971x
frame= 4320 fps=2.9 q=25.0 size=    9847kB time=00:02:23.96 bitrate= 560.3kbits/s dup=0 drop=17266 speed=0.0971x
frame= 4321 fps=2.9 q=25.0 size=    9848kB time=00:02:24.00 bitrate= 560.3kbits/s dup=0 drop=17273 speed=0.097x
frame= 4323 fps=2.9 q=25.0 size=    9852kB time=00:02:24.06 bitrate= 560.2kbits/s dup=0 drop=17278 speed=0.0971x
frame= 4324 fps=2.9 q=25.0 size=    9853kB time=00:02:24.10 bitrate= 560.2kbits/s dup=0 drop=17283 speed=0.097x
frame= 4326 fps=2.9 q=25.0 size=    9857kB time=00:02:24.16 bitrate= 560.1kbits/s dup=0 drop=17290 speed=0.0971x
frame= 4327 fps=2.9 q=25.0 size=    9858kB time=00:02:24.20 bitrate= 560.1kbits/s dup=0 drop=17295 speed=0.097x
frame= 4329 fps=2.9 q=25.0 size=    9862kB time=00:02:24.26 bitrate= 560.0kbits/s dup=0 drop=17302 speed=0.0971x
frame= 4330 fps=2.9 q=25.0 size=    9863kB time=00:02:24.30 bitrate= 559.9kbits/s dup=0 drop=17306 speed=0.097x
frame= 4331 fps=2.9 q=25.0 size=    9865kB time=00:02:24.33 bitrate= 559.9kbits/s dup=0 drop=17310 speed=0.097x
frame= 4332 fps=2.9 q=25.0 size=    9867kB time=00:02:24.36 bitrate= 559.9kbits/s dup=0 drop=17316 speed=0.097x
frame= 4334 fps=2.9 q=25.0 size=    9870kB time=00:02:24.43 bitrate= 559.8kbits/s dup=0 drop=17322 speed=0.097x
frame= 4335 fps=2.9 q=25.0 size=    9871kB time=00:02:24.46 bitrate= 559.8kbits/s dup=0 drop=17329 speed=0.097x
frame= 4337 fps=2.9 q=25.0 size=    9874kB time=00:02:24.53 bitrate= 559.7kbits/s dup=0 drop=17334 speed=0.097x
frame= 4339 fps=2.9 q=25.0 size=    9878kB time=00:02:24.60 bitrate= 559.6kbits/s dup=0 drop=17342 speed=0.097x
frame= 4341 fps=2.9 q=25.0 size=    9881kB time=00:02:24.66 bitrate= 559.5kbits/s dup=0 drop=17350 speed=0.097x
frame= 4342 fps=2.9 q=25.0 size=    9883kB time=00:02:24.70 bitrate= 559.5kbits/s dup=0 drop=17357 speed=0.097x
frame= 4344 fps=2.9 q=25.0 size=    9886kB time=00:02:24.76 bitrate= 559.4kbits/s dup=0 drop=17362 speed=0.097x
frame= 4345 fps=2.9 q=25.0 size=    9887kB time=00:02:24.80 bitrate= 559.4kbits/s dup=0 drop=17367 speed=0.097x
frame= 4347 fps=2.9 q=25.0 size=    9891kB time=00:02:24.86 bitrate= 559.3kbits/s dup=0 drop=17374 speed=0.097x
frame= 4349 fps=2.9 q=25.0 size=    9894kB time=00:02:24.93 bitrate= 559.2kbits/s dup=0 drop=17382 speed=0.097x
frame= 4350 fps=2.9 q=25.0 size=    9896kB time=00:02:24.96 bitrate= 559.2kbits/s dup=0 drop=17386 speed=0.097x
frame= 4352 fps=2.9 q=25.0 size=    9899kB time=00:02:25.03 bitrate= 559.1kbits/s dup=0 drop=17394 speed=0.097x
frame= 4353 fps=2.9 q=25.0 size=    9901kB time=00:02:25.06 bitrate= 559.1kbits/s dup=0 drop=17400 speed=0.097x
frame= 4355 fps=2.9 q=25.0 size=    9904kB time=00:02:25.13 bitrate= 559.0kbits/s dup=0 drop=17406 speed=0.097x
frame= 4356 fps=2.9 q=25.0 size=    9906kB time=00:02:25.16 bitrate= 559.0kbits/s dup=0 drop=17411 speed=0.097x
frame= 4358 fps=2.9 q=25.0 size=    9909kB time=00:02:25.23 bitrate= 558.9kbits/s dup=0 drop=17418 speed=0.097x
frame= 4359 fps=2.9 q=25.0 size=    9911kB time=00:02:25.26 bitrate= 558.9kbits/s dup=0 drop=17425 speed=0.097x
frame= 4361 fps=2.9 q=25.0 size=    9914kB time=00:02:25.33 bitrate= 558.8kbits/s dup=0 drop=17430 speed=0.097x
frame= 4362 fps=2.9 q=25.0 size=    9916kB time=00:02:25.36 bitrate= 558.8kbits/s dup=0 drop=17436 speed=0.097x
frame= 4364 fps=2.9 q=25.0 size=    9919kB time=00:02:25.43 bitrate= 558.7kbits/s dup=0 drop=17442 speed=0.097x
frame= 4365 fps=2.9 q=25.0 size=    9920kB time=00:02:25.46 bitrate= 558.7kbits/s dup=0 drop=17447 speed=0.097x
frame= 4367 fps=2.9 q=25.0 size=    9924kB time=00:02:25.53 bitrate= 558.6kbits/s dup=0 drop=17454 speed=0.097x
frame= 4368 fps=2.9 q=25.0 size=    9925kB time=00:02:25.56 bitrate= 558.6kbits/s dup=0 drop=17461 speed=0.097x
frame= 4370 fps=2.9 q=25.0 size=    9928kB time=00:02:25.63 bitrate= 558.5kbits/s dup=0 drop=17466 speed=0.097x
frame= 4371 fps=2.9 q=25.0 size=    9930kB time=00:02:25.66 bitrate= 558.4kbits/s dup=0 drop=17470 speed=0.097x
frame= 4372 fps=2.9 q=25.0 size=    9932kB time=00:02:25.70 bitrate= 558.4kbits/s dup=0 drop=17477 speed=0.097x
frame= 4374 fps=2.9 q=25.0 size=    9935kB time=00:02:25.76 bitrate= 558.3kbits/s dup=0 drop=17482 speed=0.097x
frame= 4376 fps=2.9 q=25.0 size=    9938kB time=00:02:25.83 bitrate= 558.3kbits/s dup=0 drop=17490 speed=0.097x
frame= 4378 fps=2.9 q=25.0 size=    9941kB time=00:02:25.90 bitrate= 558.2kbits/s dup=0 drop=17498 speed=0.0971x
frame= 4379 fps=2.9 q=25.0 size=    9943kB time=00:02:25.93 bitrate= 558.1kbits/s dup=0 drop=17503 speed=0.097x
frame= 4381 fps=2.9 q=25.0 size=    9946kB time=00:02:26.00 bitrate= 558.0kbits/s dup=0 drop=17510 speed=0.0971x
frame= 4382 fps=2.9 q=25.0 size=    9947kB time=00:02:26.03 bitrate= 558.0kbits/s dup=0 drop=17515 speed=0.097x
frame= 4384 fps=2.9 q=25.0 size=    9950kB time=00:02:26.10 bitrate= 557.9kbits/s dup=0 drop=17522 speed=0.097x
frame= 4385 fps=2.9 q=25.0 size=    9952kB time=00:02:26.13 bitrate= 557.9kbits/s dup=0 drop=17528 speed=0.097x
frame= 4387 fps=2.9 q=25.0 size=    9955kB time=00:02:26.20 bitrate= 557.8kbits/s dup=0 drop=17534 speed=0.097x
frame= 4388 fps=2.9 q=25.0 size=    9957kB time=00:02:26.23 bitrate= 557.8kbits/s dup=0 drop=17540 speed=0.097x
frame= 4390 fps=2.9 q=25.0 size=    9960kB time=00:02:26.30 bitrate= 557.7kbits/s dup=0 drop=17546 speed=0.097x
frame= 4391 fps=2.9 q=25.0 size=    9961kB time=00:02:26.33 bitrate= 557.7kbits/s dup=0 drop=17552 speed=0.097x
frame= 4393 fps=2.9 q=25.0 size=    9965kB time=00:02:26.40 bitrate= 557.6kbits/s dup=0 drop=17558 speed=0.097x
frame= 4394 fps=2.9 q=25.0 size=    9966kB time=00:02:26.43 bitrate= 557.6kbits/s dup=0 drop=17565 speed=0.097x
frame= 4396 fps=2.9 q=25.0 size=    9969kB time=00:02:26.50 bitrate= 557.5kbits/s dup=0 drop=17570 speed=0.097x
frame= 4397 fps=2.9 q=25.0 size=    9971kB time=00:02:26.53 bitrate= 557.4kbits/s dup=0 drop=17576 speed=0.097x
frame= 4399 fps=2.9 q=25.0 size=    9974kB time=00:02:26.60 bitrate= 557.3kbits/s dup=0 drop=17582 speed=0.097x
frame= 4400 fps=2.9 q=25.0 size=    9976kB time=00:02:26.63 bitrate= 557.3kbits/s dup=0 drop=17589 speed=0.097x
frame= 4402 fps=2.9 q=25.0 size=    9979kB time=00:02:26.70 bitrate= 557.2kbits/s dup=0 drop=17594 speed=0.097x
frame= 4403 fps=2.9 q=25.0 size=    9980kB time=00:02:26.73 bitrate= 557.2kbits/s dup=0 drop=17601 speed=0.097x
frame= 4405 fps=2.9 q=25.0 size=    9984kB time=00:02:26.80 bitrate= 557.1kbits/s dup=0 drop=17607 speed=0.097x
frame= 4407 fps=2.9 q=25.0 size=    9987kB time=00:02:26.86 bitrate= 557.1kbits/s dup=0 drop=17614 speed=0.0971x
frame= 4408 fps=2.9 q=25.0 size=    9988kB time=00:02:26.90 bitrate= 557.0kbits/s dup=0 drop=17620 speed=0.097x
frame= 4410 fps=2.9 q=25.0 size=    9992kB time=00:02:26.96 bitrate= 556.9kbits/s dup=0 drop=17626 speed=0.0971x
frame= 4411 fps=2.9 q=25.0 size=    9993kB time=00:02:27.00 bitrate= 556.9kbits/s dup=0 drop=17631 speed=0.097x
frame= 4413 fps=2.9 q=25.0 size=    9996kB time=00:02:27.06 bitrate= 556.8kbits/s dup=0 drop=17638 speed=0.0971x
frame= 4414 fps=2.9 q=25.0 size=    9998kB time=00:02:27.10 bitrate= 556.8kbits/s dup=0 drop=17644 speed=0.097x
frame= 4416 fps=2.9 q=25.0 size=   10001kB time=00:02:27.16 bitrate= 556.7kbits/s dup=0 drop=17650 speed=0.0971x
frame= 4418 fps=2.9 q=25.0 size=   10004kB time=00:02:27.23 bitrate= 556.6kbits/s dup=0 drop=17658 speed=0.0971x
frame= 4420 fps=2.9 q=25.0 size=   10007kB time=00:02:27.30 bitrate= 556.5kbits/s dup=0 drop=17666 speed=0.0971x
frame= 4421 fps=2.9 q=25.0 size=   10009kB time=00:02:27.33 bitrate= 556.5kbits/s dup=0 drop=17671 speed=0.0971x
frame= 4422 fps=2.9 q=25.0 size=   10010kB time=00:02:27.36 bitrate= 556.5kbits/s dup=0 drop=17677 speed=0.097x
frame= 4424 fps=2.9 q=25.0 size=   10014kB time=00:02:27.43 bitrate= 556.4kbits/s dup=0 drop=17682 speed=0.0971x
frame= 4425 fps=2.9 q=25.0 size=   10015kB time=00:02:27.46 bitrate= 556.4kbits/s dup=0 drop=17686 speed=0.097x
frame= 4426 fps=2.9 q=25.0 size=   10017kB time=00:02:27.50 bitrate= 556.3kbits/s dup=0 drop=17691 speed=0.097x
frame= 4428 fps=2.9 q=25.0 size=   10020kB time=00:02:27.56 bitrate= 556.2kbits/s dup=0 drop=17698 speed=0.097x
frame= 4429 fps=2.9 q=25.0 size=   10021kB time=00:02:27.60 bitrate= 556.2kbits/s dup=0 drop=17702 speed=0.097x
frame= 4430 fps=2.9 q=25.0 size=   10023kB time=00:02:27.63 bitrate= 556.2kbits/s dup=0 drop=17708 speed=0.097x
frame= 4432 fps=2.9 q=25.0 size=   10026kB time=00:02:27.70 bitrate= 556.1kbits/s dup=0 drop=17714 speed=0.097x
frame= 4433 fps=2.9 q=25.0 size=   10028kB time=00:02:27.73 bitrate= 556.0kbits/s dup=0 drop=17719 speed=0.097x
frame= 4435 fps=2.9 q=25.0 size=   10031kB time=00:02:27.80 bitrate= 556.0kbits/s dup=0 drop=17726 speed=0.097x
frame= 4436 fps=2.9 q=25.0 size=   10032kB time=00:02:27.83 bitrate= 555.9kbits/s dup=0 drop=17730 speed=0.097x
frame= 4438 fps=2.9 q=25.0 size=   10035kB time=00:02:27.90 bitrate= 555.8kbits/s dup=0 drop=17738 speed=0.097x
frame= 4440 fps=2.9 q=25.0 size=   10039kB time=00:02:27.96 bitrate= 555.8kbits/s dup=0 drop=17746 speed=0.097x
frame= 4442 fps=2.9 q=25.0 size=   10042kB time=00:02:28.03 bitrate= 555.7kbits/s dup=0 drop=17754 speed=0.097x
frame= 4444 fps=2.9 q=25.0 size=   10045kB time=00:02:28.10 bitrate= 555.6kbits/s dup=0 drop=17762 speed=0.097x
frame= 4446 fps=2.9 q=25.0 size=   10048kB time=00:02:28.16 bitrate= 555.6kbits/s dup=0 drop=17770 speed=0.0971x
frame= 4447 fps=2.9 q=25.0 size=   10050kB time=00:02:28.20 bitrate= 555.5kbits/s dup=0 drop=17776 speed=0.097x
frame= 4448 fps=2.9 q=25.0 size=   10051kB time=00:02:28.23 bitrate= 555.5kbits/s dup=0 drop=17781 speed=0.097x
frame= 4450 fps=2.9 q=25.0 size=   10054kB time=00:02:28.30 bitrate= 555.4kbits/s dup=0 drop=17786 speed=0.097x
frame= 4452 fps=2.9 q=25.0 size=   10058kB time=00:02:28.36 bitrate= 555.3kbits/s dup=0 drop=17794 speed=0.097x
frame= 4453 fps=2.9 q=25.0 size=   10059kB time=00:02:28.40 bitrate= 555.3kbits/s dup=0 drop=17800 speed=0.097x
frame= 4455 fps=2.9 q=25.0 size=   10062kB time=00:02:28.46 bitrate= 555.2kbits/s dup=0 drop=17806 speed=0.097x
frame= 4457 fps=2.9 q=25.0 size=   10066kB time=00:02:28.53 bitrate= 555.1kbits/s dup=0 drop=17814 speed=0.0971x
frame= 4458 fps=2.9 q=25.0 size=   10067kB time=00:02:28.56 bitrate= 555.1kbits/s dup=0 drop=17821 speed=0.097x
frame= 4460 fps=2.9 q=25.0 size=   10071kB time=00:02:28.63 bitrate= 555.0kbits/s dup=0 drop=17826 speed=0.0971x
frame= 4461 fps=2.9 q=25.0 size=   10072kB time=00:02:28.66 bitrate= 555.0kbits/s dup=0 drop=17831 speed=0.0971x
frame= 4463 fps=2.9 q=25.0 size=   10075kB time=00:02:28.73 bitrate= 554.9kbits/s dup=0 drop=17838 speed=0.0971x
frame= 4464 fps=2.9 q=25.0 size=   10077kB time=00:02:28.76 bitrate= 554.9kbits/s dup=0 drop=17843 speed=0.097x
frame= 4466 fps=2.9 q=25.0 size=   10080kB time=00:02:28.83 bitrate= 554.8kbits/s dup=0 drop=17850 speed=0.0971x
frame= 4467 fps=2.9 q=25.0 size=   10082kB time=00:02:28.86 bitrate= 554.8kbits/s dup=0 drop=17857 speed=0.097x
frame= 4469 fps=2.9 q=25.0 size=   10085kB time=00:02:28.93 bitrate= 554.7kbits/s dup=0 drop=17862 speed=0.0971x
frame= 4471 fps=2.9 q=25.0 size=   10088kB time=00:02:29.00 bitrate= 554.7kbits/s dup=0 drop=17870 speed=0.0971x
frame= 4473 fps=2.9 q=25.0 size=   10091kB time=00:02:29.06 bitrate= 554.6kbits/s dup=0 drop=17878 speed=0.0971x
frame= 4475 fps=2.9 q=25.0 size=   10095kB time=00:02:29.13 bitrate= 554.5kbits/s dup=0 drop=17886 speed=0.0971x
frame= 4476 fps=2.9 q=25.0 size=   10096kB time=00:02:29.16 bitrate= 554.5kbits/s dup=0 drop=17893 speed=0.0971x
frame= 4478 fps=2.9 q=25.0 size=   10100kB time=00:02:29.23 bitrate= 554.4kbits/s dup=0 drop=17898 speed=0.0971x
frame= 4479 fps=2.9 q=25.0 size=   10101kB time=00:02:29.26 bitrate= 554.4kbits/s dup=0 drop=17905 speed=0.0971x
frame= 4481 fps=2.9 q=25.0 size=   10104kB time=00:02:29.33 bitrate= 554.3kbits/s dup=0 drop=17910 speed=0.0971x
frame= 4483 fps=2.9 q=25.0 size=   10108kB time=00:02:29.40 bitrate= 554.2kbits/s dup=0 drop=17918 speed=0.0971x
frame= 4485 fps=2.9 q=25.0 size=   10111kB time=00:02:29.46 bitrate= 554.1kbits/s dup=0 drop=17926 speed=0.0971x
frame= 4486 fps=2.9 q=25.0 size=   10112kB time=00:02:29.50 bitrate= 554.1kbits/s dup=0 drop=17933 speed=0.0971x
frame= 4488 fps=2.9 q=25.0 size=   10115kB time=00:02:29.56 bitrate= 554.0kbits/s dup=0 drop=17938 speed=0.0971x
frame= 4489 fps=2.9 q=22.0 size=   10130kB time=00:02:29.60 bitrate= 554.7kbits/s dup=0 drop=17942 speed=0.0971x
frame= 4491 fps=2.9 q=25.0 size=   10133kB time=00:02:29.66 bitrate= 554.6kbits/s dup=0 drop=17952 speed=0.0971x
frame= 4493 fps=2.9 q=25.0 size=   10137kB time=00:02:29.73 bitrate= 554.6kbits/s dup=0 drop=17961 speed=0.0971x
frame= 4495 fps=2.9 q=25.0 size=   10140kB time=00:02:29.80 bitrate= 554.5kbits/s dup=0 drop=17968 speed=0.0971x
frame= 4497 fps=2.9 q=25.0 size=   10144kB time=00:02:29.86 bitrate= 554.5kbits/s dup=0 drop=17975 speed=0.0971x
frame= 4499 fps=2.9 q=25.0 size=   10148kB time=00:02:29.93 bitrate= 554.4kbits/s dup=0 drop=17982 speed=0.0971x
frame= 4501 fps=2.9 q=25.0 size=   10151kB time=00:02:30.00 bitrate= 554.4kbits/s dup=0 drop=17990 speed=0.0971x
frame= 4503 fps=2.9 q=25.0 size=   10155kB time=00:02:30.06 bitrate= 554.3kbits/s dup=0 drop=17998 speed=0.0971x
frame= 4504 fps=2.9 q=25.0 size=   10156kB time=00:02:30.10 bitrate= 554.3kbits/s dup=0 drop=18003 speed=0.0971x
frame= 4506 fps=2.9 q=25.0 size=   10160kB time=00:02:30.16 bitrate= 554.2kbits/s dup=0 drop=18010 speed=0.0971x
frame= 4507 fps=2.9 q=25.0 size=   10162kB time=00:02:30.20 bitrate= 554.2kbits/s dup=0 drop=18016 speed=0.0971x
frame= 4509 fps=2.9 q=25.0 size=   10165kB time=00:02:30.26 bitrate= 554.2kbits/s dup=0 drop=18022 speed=0.0971x
frame= 4510 fps=2.9 q=25.0 size=   10167kB time=00:02:30.30 bitrate= 554.1kbits/s dup=0 drop=18028 speed=0.0971x
frame= 4512 fps=2.9 q=25.0 size=   10170kB time=00:02:30.36 bitrate= 554.1kbits/s dup=0 drop=18034 speed=0.0971x
frame= 4514 fps=2.9 q=25.0 size=   10173kB time=00:02:30.43 bitrate= 554.0kbits/s dup=0 drop=18042 speed=0.0971x
frame= 4515 fps=2.9 q=25.0 size=   10175kB time=00:02:30.46 bitrate= 554.0kbits/s dup=0 drop=18046 speed=0.0971x
frame= 4516 fps=2.9 q=25.0 size=   10177kB time=00:02:30.50 bitrate= 553.9kbits/s dup=0 drop=18051 speed=0.0971x
frame= 4517 fps=2.9 q=25.0 size=   10179kB time=00:02:30.53 bitrate= 553.9kbits/s dup=0 drop=18056 speed=0.0971x
frame= 4519 fps=2.9 q=25.0 size=   10182kB time=00:02:30.60 bitrate= 553.9kbits/s dup=0 drop=18062 speed=0.0971x
frame= 4520 fps=2.9 q=25.0 size=   10184kB time=00:02:30.63 bitrate= 553.8kbits/s dup=0 drop=18068 speed=0.0971x
frame= 4522 fps=2.9 q=25.0 size=   10187kB time=00:02:30.70 bitrate= 553.8kbits/s dup=0 drop=18074 speed=0.0971x
frame= 4523 fps=2.9 q=25.0 size=   10189kB time=00:02:30.73 bitrate= 553.7kbits/s dup=0 drop=18080 speed=0.0971x
frame= 4525 fps=2.9 q=25.0 size=   10192kB time=00:02:30.80 bitrate= 553.7kbits/s dup=0 drop=18086 speed=0.0971x
frame= 4526 fps=2.9 q=25.0 size=   10194kB time=00:02:30.83 bitrate= 553.6kbits/s dup=0 drop=18092 speed=0.0971x
frame= 4527 fps=2.9 q=25.0 size=   10195kB time=00:02:30.86 bitrate= 553.6kbits/s dup=0 drop=18097 speed=0.0971x
frame= 4529 fps=2.9 q=25.0 size=   10199kB time=00:02:30.93 bitrate= 553.6kbits/s dup=0 drop=18102 speed=0.0971x
frame= 4530 fps=2.9 q=25.0 size=   10201kB time=00:02:30.96 bitrate= 553.5kbits/s dup=0 drop=18108 speed=0.0971x
frame= 4532 fps=2.9 q=25.0 size=   10204kB time=00:02:31.03 bitrate= 553.5kbits/s dup=0 drop=18114 speed=0.0971x
frame= 4534 fps=2.9 q=25.0 size=   10207kB time=00:02:31.10 bitrate= 553.4kbits/s dup=0 drop=18122 speed=0.0971x
frame= 4536 fps=2.9 q=25.0 size=   10210kB time=00:02:31.16 bitrate= 553.3kbits/s dup=0 drop=18130 speed=0.0971x
frame= 4538 fps=2.9 q=25.0 size=   10213kB time=00:02:31.23 bitrate= 553.2kbits/s dup=0 drop=18138 speed=0.0971x
frame= 4539 fps=2.9 q=25.0 size=   10215kB time=00:02:31.26 bitrate= 553.2kbits/s dup=0 drop=18145 speed=0.0971x
frame= 4541 fps=2.9 q=25.0 size=   10218kB time=00:02:31.33 bitrate= 553.1kbits/s dup=0 drop=18150 speed=0.0971x
frame= 4543 fps=2.9 q=25.0 size=   10221kB time=00:02:31.40 bitrate= 553.1kbits/s dup=0 drop=18158 speed=0.0971x
frame= 4544 fps=2.9 q=25.0 size=   10223kB time=00:02:31.43 bitrate= 553.0kbits/s dup=0 drop=18165 speed=0.0971x
frame= 4546 fps=2.9 q=25.0 size=   10226kB time=00:02:31.50 bitrate= 553.0kbits/s dup=0 drop=18170 speed=0.0971x
frame= 4548 fps=2.9 q=25.0 size=   10229kB time=00:02:31.56 bitrate= 552.9kbits/s dup=0 drop=18178 speed=0.0972x
frame= 4550 fps=2.9 q=25.0 size=   10233kB time=00:02:31.63 bitrate= 552.8kbits/s dup=0 drop=18186 speed=0.0972x
frame= 4551 fps=2.9 q=25.0 size=   10234kB time=00:02:31.66 bitrate= 552.8kbits/s dup=0 drop=18193 speed=0.0972x
frame= 4553 fps=2.9 q=25.0 size=   10237kB time=00:02:31.73 bitrate= 552.7kbits/s dup=0 drop=18199 speed=0.0972x
frame= 4555 fps=2.9 q=25.0 size=   10241kB time=00:02:31.80 bitrate= 552.6kbits/s dup=0 drop=18206 speed=0.0972x
frame= 4557 fps=2.9 q=25.0 size=   10244kB time=00:02:31.86 bitrate= 552.6kbits/s dup=0 drop=18214 speed=0.0972x
frame= 4559 fps=2.9 q=25.0 size=   10247kB time=00:02:31.93 bitrate= 552.5kbits/s dup=0 drop=18222 speed=0.0972x
frame= 4560 fps=2.9 q=25.0 size=   10249kB time=00:02:31.96 bitrate= 552.5kbits/s dup=0 drop=18228 speed=0.0972x
frame= 4562 fps=2.9 q=25.0 size=   10252kB time=00:02:32.03 bitrate= 552.4kbits/s dup=0 drop=18234 speed=0.0972x
frame= 4564 fps=2.9 q=25.0 size=   10255kB time=00:02:32.10 bitrate= 552.3kbits/s dup=0 drop=18242 speed=0.0972x
frame= 4565 fps=2.9 q=25.0 size=   10257kB time=00:02:32.13 bitrate= 552.3kbits/s dup=0 drop=18249 speed=0.0972x
frame= 4567 fps=2.9 q=25.0 size=   10260kB time=00:02:32.20 bitrate= 552.2kbits/s dup=0 drop=18254 speed=0.0972x
frame= 4568 fps=2.9 q=25.0 size=   10262kB time=00:02:32.23 bitrate= 552.2kbits/s dup=0 drop=18261 speed=0.0972x
frame= 4570 fps=2.9 q=25.0 size=   10265kB time=00:02:32.30 bitrate= 552.1kbits/s dup=0 drop=18266 speed=0.0972x
frame= 4571 fps=2.9 q=25.0 size=   10267kB time=00:02:32.33 bitrate= 552.1kbits/s dup=0 drop=18270 speed=0.0972x
frame= 4573 fps=2.9 q=25.0 size=   10270kB time=00:02:32.40 bitrate= 552.0kbits/s dup=0 drop=18278 speed=0.0972x
frame= 4574 fps=2.9 q=25.0 size=   10272kB time=00:02:32.43 bitrate= 552.0kbits/s dup=0 drop=18282 speed=0.0972x
frame= 4575 fps=2.9 q=25.0 size=   10273kB time=00:02:32.46 bitrate= 552.0kbits/s dup=0 drop=18286 speed=0.0972x
frame= 4576 fps=2.9 q=25.0 size=   10275kB time=00:02:32.50 bitrate= 551.9kbits/s dup=0 drop=18291 speed=0.0972x
frame= 4577 fps=2.9 q=25.0 size=   10276kB time=00:02:32.53 bitrate= 551.9kbits/s dup=0 drop=18295 speed=0.0972x
frame= 4578 fps=2.9 q=25.0 size=   10278kB time=00:02:32.56 bitrate= 551.9kbits/s dup=0 drop=18299 speed=0.0971x
frame= 4579 fps=2.9 q=25.0 size=   10280kB time=00:02:32.60 bitrate= 551.8kbits/s dup=0 drop=18304 speed=0.0971x
frame= 4580 fps=2.9 q=25.0 size=   10281kB time=00:02:32.63 bitrate= 551.8kbits/s dup=0 drop=18307 speed=0.0971x
frame= 4581 fps=2.9 q=25.0 size=   10283kB time=00:02:32.66 bitrate= 551.8kbits/s dup=0 drop=18310 speed=0.0971x
frame= 4582 fps=2.9 q=25.0 size=   10284kB time=00:02:32.70 bitrate= 551.7kbits/s dup=0 drop=18314 speed=0.0971x
frame= 4583 fps=2.9 q=25.0 size=   10286kB time=00:02:32.73 bitrate= 551.7kbits/s dup=0 drop=18319 speed=0.0971x
frame= 4584 fps=2.9 q=25.0 size=   10288kB time=00:02:32.76 bitrate= 551.7kbits/s dup=0 drop=18324 speed=0.0971x
frame= 4586 fps=2.9 q=25.0 size=   10291kB time=00:02:32.83 bitrate= 551.6kbits/s dup=0 drop=18330 speed=0.0971x
frame= 4587 fps=2.9 q=25.0 size=   10292kB time=00:02:32.86 bitrate= 551.6kbits/s dup=0 drop=18336 speed=0.0971x
frame= 4588 fps=2.9 q=25.0 size=   10294kB time=00:02:32.90 bitrate= 551.5kbits/s dup=0 drop=18341 speed=0.0971x
frame= 4590 fps=2.9 q=25.0 size=   10297kB time=00:02:32.96 bitrate= 551.5kbits/s dup=0 drop=18346 speed=0.0971x
frame= 4591 fps=2.9 q=25.0 size=   10299kB time=00:02:33.00 bitrate= 551.4kbits/s dup=0 drop=18350 speed=0.0971x
frame= 4592 fps=2.9 q=25.0 size=   10301kB time=00:02:33.03 bitrate= 551.4kbits/s dup=0 drop=18354 speed=0.097x
frame= 4593 fps=2.9 q=25.0 size=   10302kB time=00:02:33.06 bitrate= 551.4kbits/s dup=0 drop=18358 speed=0.097x
frame= 4595 fps=2.9 q=25.0 size=   10305kB time=00:02:33.13 bitrate= 551.3kbits/s dup=0 drop=18366 speed=0.097x
frame= 4596 fps=2.9 q=25.0 size=   10307kB time=00:02:33.16 bitrate= 551.3kbits/s dup=0 drop=18371 speed=0.097x
frame= 4598 fps=2.9 q=25.0 size=   10310kB time=00:02:33.23 bitrate= 551.2kbits/s dup=0 drop=18378 speed=0.097x
frame= 4600 fps=2.9 q=25.0 size=   10313kB time=00:02:33.30 bitrate= 551.1kbits/s dup=0 drop=18386 speed=0.097x
frame= 4602 fps=2.9 q=25.0 size=   10316kB time=00:02:33.36 bitrate= 551.0kbits/s dup=0 drop=18394 speed=0.0971x
frame= 4603 fps=2.9 q=25.0 size=   10318kB time=00:02:33.40 bitrate= 551.0kbits/s dup=0 drop=18400 speed=0.097x
frame= 4605 fps=2.9 q=25.0 size=   10321kB time=00:02:33.46 bitrate= 550.9kbits/s dup=0 drop=18406 speed=0.0971x
frame= 4606 fps=2.9 q=25.0 size=   10323kB time=00:02:33.50 bitrate= 550.9kbits/s dup=0 drop=18412 speed=0.097x
frame= 4608 fps=2.9 q=25.0 size=   10326kB time=00:02:33.56 bitrate= 550.8kbits/s dup=0 drop=18418 speed=0.097x
frame= 4609 fps=2.9 q=25.0 size=   10328kB time=00:02:33.60 bitrate= 550.8kbits/s dup=0 drop=18423 speed=0.097x
frame= 4610 fps=2.9 q=25.0 size=   10329kB time=00:02:33.63 bitrate= 550.8kbits/s dup=0 drop=18429 speed=0.097x
frame= 4612 fps=2.9 q=25.0 size=   10332kB time=00:02:33.70 bitrate= 550.7kbits/s dup=0 drop=18434 speed=0.097x
frame= 4613 fps=2.9 q=25.0 size=   10334kB time=00:02:33.73 bitrate= 550.7kbits/s dup=0 drop=18441 speed=0.097x
frame= 4615 fps=2.9 q=25.0 size=   10337kB time=00:02:33.80 bitrate= 550.6kbits/s dup=0 drop=18446 speed=0.097x
frame= 4617 fps=2.9 q=25.0 size=   10340kB time=00:02:33.86 bitrate= 550.5kbits/s dup=0 drop=18454 speed=0.097x
frame= 4619 fps=2.9 q=25.0 size=   10343kB time=00:02:33.93 bitrate= 550.5kbits/s dup=0 drop=18462 speed=0.0971x
frame= 4620 fps=2.9 q=25.0 size=   10345kB time=00:02:33.96 bitrate= 550.4kbits/s dup=0 drop=18466 speed=0.097x
frame= 4621 fps=2.9 q=25.0 size=   10347kB time=00:02:34.00 bitrate= 550.4kbits/s dup=0 drop=18472 speed=0.097x
frame= 4623 fps=2.9 q=25.0 size=   10350kB time=00:02:34.06 bitrate= 550.3kbits/s dup=0 drop=18478 speed=0.097x
frame= 4624 fps=2.9 q=25.0 size=   10352kB time=00:02:34.10 bitrate= 550.3kbits/s dup=0 drop=18482 speed=0.097x
frame= 4625 fps=2.9 q=25.0 size=   10353kB time=00:02:34.13 bitrate= 550.3kbits/s dup=0 drop=18488 speed=0.097x
frame= 4627 fps=2.9 q=25.0 size=   10356kB time=00:02:34.20 bitrate= 550.2kbits/s dup=0 drop=18494 speed=0.097x
frame= 4628 fps=2.9 q=25.0 size=   10358kB time=00:02:34.23 bitrate= 550.1kbits/s dup=0 drop=18500 speed=0.097x
frame= 4630 fps=2.9 q=25.0 size=   10361kB time=00:02:34.30 bitrate= 550.1kbits/s dup=0 drop=18506 speed=0.097x
frame= 4631 fps=2.9 q=25.0 size=   10362kB time=00:02:34.33 bitrate= 550.0kbits/s dup=0 drop=18513 speed=0.097x
frame= 4633 fps=2.9 q=25.0 size=   10365kB time=00:02:34.40 bitrate= 550.0kbits/s dup=0 drop=18518 speed=0.097x
frame= 4634 fps=2.9 q=25.0 size=   10367kB time=00:02:34.43 bitrate= 549.9kbits/s dup=0 drop=18525 speed=0.097x
frame= 4636 fps=2.9 q=25.0 size=   10370kB time=00:02:34.50 bitrate= 549.9kbits/s dup=0 drop=18530 speed=0.097x
frame= 4637 fps=2.9 q=25.0 size=   10372kB time=00:02:34.53 bitrate= 549.8kbits/s dup=0 drop=18537 speed=0.097x
frame= 4639 fps=2.9 q=25.0 size=   10375kB time=00:02:34.60 bitrate= 549.7kbits/s dup=0 drop=18542 speed=0.097x
frame= 4641 fps=2.9 q=25.0 size=   10378kB time=00:02:34.66 bitrate= 549.7kbits/s dup=0 drop=18550 speed=0.097x
frame= 4643 fps=2.9 q=25.0 size=   10381kB time=00:02:34.73 bitrate= 549.6kbits/s dup=0 drop=18558 speed=0.097x
frame= 4645 fps=2.9 q=25.0 size=   10384kB time=00:02:34.80 bitrate= 549.5kbits/s dup=0 drop=18566 speed=0.097x
frame= 4646 fps=2.9 q=25.0 size=   10386kB time=00:02:34.83 bitrate= 549.5kbits/s dup=0 drop=18572 speed=0.097x
frame= 4648 fps=2.9 q=25.0 size=   10389kB time=00:02:34.90 bitrate= 549.4kbits/s dup=0 drop=18578 speed=0.097x
frame= 4650 fps=2.9 q=25.0 size=   10392kB time=00:02:34.96 bitrate= 549.4kbits/s dup=0 drop=18586 speed=0.0971x
frame= 4652 fps=2.9 q=25.0 size=   10395kB time=00:02:35.03 bitrate= 549.3kbits/s dup=0 drop=18594 speed=0.0971x
frame= 4654 fps=2.9 q=25.0 size=   10398kB time=00:02:35.10 bitrate= 549.2kbits/s dup=0 drop=18602 speed=0.0971x
frame= 4656 fps=2.9 q=25.0 size=   10401kB time=00:02:35.16 bitrate= 549.1kbits/s dup=0 drop=18610 speed=0.0971x
frame= 4657 fps=2.9 q=25.0 size=   10403kB time=00:02:35.20 bitrate= 549.1kbits/s dup=0 drop=18616 speed=0.0971x
frame= 4659 fps=2.9 q=25.0 size=   10406kB time=00:02:35.26 bitrate= 549.0kbits/s dup=0 drop=18622 speed=0.0971x
frame= 4660 fps=2.9 q=25.0 size=   10408kB time=00:02:35.30 bitrate= 549.0kbits/s dup=0 drop=18629 speed=0.0971x
frame= 4662 fps=2.9 q=25.0 size=   10411kB time=00:02:35.36 bitrate= 548.9kbits/s dup=0 drop=18634 speed=0.0971x
frame= 4663 fps=2.9 q=25.0 size=   10412kB time=00:02:35.40 bitrate= 548.9kbits/s dup=0 drop=18640 speed=0.0971x
frame= 4665 fps=2.9 q=25.0 size=   10416kB time=00:02:35.46 bitrate= 548.8kbits/s dup=0 drop=18646 speed=0.0971x
frame= 4666 fps=2.9 q=25.0 size=   10417kB time=00:02:35.50 bitrate= 548.8kbits/s dup=0 drop=18653 speed=0.0971x
frame= 4668 fps=2.9 q=25.0 size=   10420kB time=00:02:35.56 bitrate= 548.7kbits/s dup=0 drop=18658 speed=0.0971x
frame= 4669 fps=2.9 q=25.0 size=   10422kB time=00:02:35.60 bitrate= 548.7kbits/s dup=0 drop=18664 speed=0.0971x
frame= 4671 fps=2.9 q=25.0 size=   10425kB time=00:02:35.66 bitrate= 548.6kbits/s dup=0 drop=18670 speed=0.0971x
frame= 4673 fps=2.9 q=25.0 size=   10428kB time=00:02:35.73 bitrate= 548.6kbits/s dup=0 drop=18678 speed=0.0971x
frame= 4675 fps=2.9 q=25.0 size=   10432kB time=00:02:35.80 bitrate= 548.5kbits/s dup=0 drop=18686 speed=0.0971x
frame= 4677 fps=2.9 q=25.0 size=   10435kB time=00:02:35.86 bitrate= 548.4kbits/s dup=0 drop=18694 speed=0.0971x
frame= 4678 fps=2.9 q=25.0 size=   10436kB time=00:02:35.90 bitrate= 548.4kbits/s dup=0 drop=18700 speed=0.0971x
frame= 4680 fps=2.9 q=25.0 size=   10440kB time=00:02:35.96 bitrate= 548.3kbits/s dup=0 drop=18706 speed=0.0971x
frame= 4681 fps=2.9 q=25.0 size=   10441kB time=00:02:36.00 bitrate= 548.3kbits/s dup=0 drop=18713 speed=0.0971x
frame= 4683 fps=2.9 q=25.0 size=   10444kB time=00:02:36.06 bitrate= 548.2kbits/s dup=0 drop=18718 speed=0.0971x
frame= 4684 fps=2.9 q=25.0 size=   10446kB time=00:02:36.10 bitrate= 548.2kbits/s dup=0 drop=18725 speed=0.0971x
frame= 4686 fps=2.9 q=25.0 size=   10449kB time=00:02:36.16 bitrate= 548.1kbits/s dup=0 drop=18730 speed=0.0971x
frame= 4687 fps=2.9 q=25.0 size=   10451kB time=00:02:36.20 bitrate= 548.1kbits/s dup=0 drop=18737 speed=0.0971x
frame= 4689 fps=2.9 q=25.0 size=   10454kB time=00:02:36.26 bitrate= 548.0kbits/s dup=0 drop=18742 speed=0.0971x
frame= 4690 fps=2.9 q=25.0 size=   10456kB time=00:02:36.30 bitrate= 548.0kbits/s dup=0 drop=18749 speed=0.0971x
frame= 4692 fps=2.9 q=25.0 size=   10459kB time=00:02:36.36 bitrate= 547.9kbits/s dup=0 drop=18754 speed=0.0971x
frame= 4694 fps=2.9 q=25.0 size=   10462kB time=00:02:36.43 bitrate= 547.9kbits/s dup=0 drop=18762 speed=0.0971x
frame= 4696 fps=2.9 q=25.0 size=   10465kB time=00:02:36.50 bitrate= 547.8kbits/s dup=0 drop=18770 speed=0.0971x
frame= 4698 fps=2.9 q=25.0 size=   10468kB time=00:02:36.56 bitrate= 547.7kbits/s dup=0 drop=18778 speed=0.0971x
frame= 4699 fps=2.9 q=25.0 size=   10470kB time=00:02:36.60 bitrate= 547.7kbits/s dup=0 drop=18785 speed=0.0971x
frame= 4701 fps=2.9 q=25.0 size=   10473kB time=00:02:36.66 bitrate= 547.6kbits/s dup=0 drop=18790 speed=0.0971x
frame= 4703 fps=2.9 q=25.0 size=   10476kB time=00:02:36.73 bitrate= 547.6kbits/s dup=0 drop=18798 speed=0.0971x
frame= 4705 fps=2.9 q=25.0 size=   10480kB time=00:02:36.80 bitrate= 547.5kbits/s dup=0 drop=18806 speed=0.0971x
frame= 4706 fps=2.9 q=25.0 size=   10481kB time=00:02:36.83 bitrate= 547.5kbits/s dup=0 drop=18813 speed=0.0971x
frame= 4708 fps=2.9 q=25.0 size=   10484kB time=00:02:36.90 bitrate= 547.4kbits/s dup=0 drop=18819 speed=0.0971x
frame= 4710 fps=2.9 q=25.0 size=   10487kB time=00:02:36.96 bitrate= 547.3kbits/s dup=0 drop=18826 speed=0.0971x
frame= 4711 fps=2.9 q=25.0 size=   10489kB time=00:02:37.00 bitrate= 547.3kbits/s dup=0 drop=18832 speed=0.0971x
frame= 4713 fps=2.9 q=25.0 size=   10492kB time=00:02:37.06 bitrate= 547.2kbits/s dup=0 drop=18838 speed=0.0971x
frame= 4714 fps=2.9 q=25.0 size=   10494kB time=00:02:37.10 bitrate= 547.2kbits/s dup=0 drop=18843 speed=0.0971x
frame= 4716 fps=2.9 q=25.0 size=   10497kB time=00:02:37.16 bitrate= 547.1kbits/s dup=0 drop=18850 speed=0.0971x
frame= 4718 fps=2.9 q=25.0 size=   10500kB time=00:02:37.23 bitrate= 547.1kbits/s dup=0 drop=18858 speed=0.0971x
frame= 4719 fps=2.9 q=25.0 size=   10502kB time=00:02:37.26 bitrate= 547.0kbits/s dup=0 drop=18864 speed=0.0971x
frame= 4721 fps=2.9 q=25.0 size=   10505kB time=00:02:37.33 bitrate= 547.0kbits/s dup=0 drop=18870 speed=0.0971x
frame= 4723 fps=2.9 q=25.0 size=   10508kB time=00:02:37.40 bitrate= 546.9kbits/s dup=0 drop=18878 speed=0.0972x
frame= 4725 fps=2.9 q=25.0 size=   10511kB time=00:02:37.46 bitrate= 546.8kbits/s dup=0 drop=18886 speed=0.0972x
frame= 4726 fps=2.9 q=25.0 size=   10513kB time=00:02:37.50 bitrate= 546.8kbits/s dup=0 drop=18891 speed=0.0971x
frame= 4728 fps=2.9 q=25.0 size=   10516kB time=00:02:37.56 bitrate= 546.7kbits/s dup=0 drop=18898 speed=0.0972x
frame= 4729 fps=2.9 q=25.0 size=   10518kB time=00:02:37.60 bitrate= 546.7kbits/s dup=0 drop=18902 speed=0.0971x
frame= 4730 fps=2.9 q=25.0 size=   10519kB time=00:02:37.63 bitrate= 546.7kbits/s dup=0 drop=18909 speed=0.0971x
frame= 4732 fps=2.9 q=25.0 size=   10522kB time=00:02:37.70 bitrate= 546.6kbits/s dup=0 drop=18914 speed=0.0971x
frame= 4733 fps=2.9 q=25.0 size=   10524kB time=00:02:37.73 bitrate= 546.6kbits/s dup=0 drop=18920 speed=0.0971x
frame= 4735 fps=2.9 q=25.0 size=   10527kB time=00:02:37.80 bitrate= 546.5kbits/s dup=0 drop=18926 speed=0.0971x
frame= 4737 fps=2.9 q=25.0 size=   10530kB time=00:02:37.86 bitrate= 546.4kbits/s dup=0 drop=18934 speed=0.0972x
frame= 4739 fps=2.9 q=22.0 size=   10546kB time=00:02:37.93 bitrate= 547.0kbits/s dup=0 drop=18942 speed=0.0972x
frame= 4741 fps=2.9 q=25.0 size=   10550kB time=00:02:38.00 bitrate= 547.0kbits/s dup=0 drop=18950 speed=0.0972x
frame= 4743 fps=2.9 q=25.0 size=   10553kB time=00:02:38.06 bitrate= 546.9kbits/s dup=0 drop=18958 speed=0.0972x
frame= 4744 fps=2.9 q=25.0 size=   10555kB time=00:02:38.10 bitrate= 546.9kbits/s dup=0 drop=18963 speed=0.0972x
frame= 4746 fps=2.9 q=25.0 size=   10559kB time=00:02:38.16 bitrate= 546.9kbits/s dup=0 drop=18970 speed=0.0972x
frame= 4747 fps=2.9 q=25.0 size=   10561kB time=00:02:38.20 bitrate= 546.9kbits/s dup=0 drop=18976 speed=0.0972x
frame= 4749 fps=2.9 q=25.0 size=   10565kB time=00:02:38.26 bitrate= 546.8kbits/s dup=0 drop=18982 speed=0.0972x
frame= 4750 fps=2.9 q=25.0 size=   10566kB time=00:02:38.30 bitrate= 546.8kbits/s dup=0 drop=18987 speed=0.0972x
frame= 4751 fps=2.9 q=25.0 size=   10568kB time=00:02:38.33 bitrate= 546.8kbits/s dup=0 drop=18993 speed=0.0972x
frame= 4753 fps=2.9 q=25.0 size=   10572kB time=00:02:38.40 bitrate= 546.8kbits/s dup=0 drop=18998 speed=0.0972x
frame= 4754 fps=2.9 q=25.0 size=   10574kB time=00:02:38.43 bitrate= 546.7kbits/s dup=0 drop=19005 speed=0.0972x
frame= 4756 fps=2.9 q=25.0 size=   10577kB time=00:02:38.50 bitrate= 546.7kbits/s dup=0 drop=19010 speed=0.0972x
frame= 4757 fps=2.9 q=25.0 size=   10579kB time=00:02:38.53 bitrate= 546.6kbits/s dup=0 drop=19017 speed=0.0972x
frame= 4759 fps=2.9 q=25.0 size=   10582kB time=00:02:38.60 bitrate= 546.6kbits/s dup=0 drop=19023 speed=0.0972x
frame= 4761 fps=2.9 q=25.0 size=   10586kB time=00:02:38.66 bitrate= 546.5kbits/s dup=0 drop=19030 speed=0.0972x
frame= 4762 fps=2.9 q=25.0 size=   10587kB time=00:02:38.70 bitrate= 546.5kbits/s dup=0 drop=19037 speed=0.0972x
frame= 4764 fps=2.9 q=25.0 size=   10591kB time=00:02:38.76 bitrate= 546.5kbits/s dup=0 drop=19043 speed=0.0972x
frame= 4766 fps=2.9 q=25.0 size=   10594kB time=00:02:38.83 bitrate= 546.4kbits/s dup=0 drop=19050 speed=0.0972x
frame= 4767 fps=2.9 q=25.0 size=   10596kB time=00:02:38.86 bitrate= 546.4kbits/s dup=0 drop=19056 speed=0.0972x
frame= 4768 fps=2.9 q=25.0 size=   10598kB time=00:02:38.90 bitrate= 546.4kbits/s dup=0 drop=19060 speed=0.0972x
frame= 4770 fps=2.9 q=25.0 size=   10601kB time=00:02:38.96 bitrate= 546.3kbits/s dup=0 drop=19066 speed=0.0972x
frame= 4771 fps=2.9 q=25.0 size=   10603kB time=00:02:39.00 bitrate= 546.3kbits/s dup=0 drop=19073 speed=0.0972x
frame= 4773 fps=2.9 q=25.0 size=   10606kB time=00:02:39.06 bitrate= 546.2kbits/s dup=0 drop=19078 speed=0.0972x
frame= 4774 fps=2.9 q=25.0 size=   10608kB time=00:02:39.10 bitrate= 546.2kbits/s dup=0 drop=19083 speed=0.0972x
frame= 4776 fps=2.9 q=25.0 size=   10611kB time=00:02:39.16 bitrate= 546.1kbits/s dup=0 drop=19090 speed=0.0972x
frame= 4777 fps=2.9 q=25.0 size=   10613kB time=00:02:39.20 bitrate= 546.1kbits/s dup=0 drop=19095 speed=0.0972x
frame= 4778 fps=2.9 q=25.0 size=   10615kB time=00:02:39.23 bitrate= 546.1kbits/s dup=0 drop=19101 speed=0.0971x
frame= 4780 fps=2.9 q=25.0 size=   10618kB time=00:02:39.30 bitrate= 546.0kbits/s dup=0 drop=19106 speed=0.0972x
frame= 4781 fps=2.9 q=25.0 size=   10620kB time=00:02:39.33 bitrate= 546.0kbits/s dup=0 drop=19111 speed=0.0971x
frame= 4782 fps=2.9 q=25.0 size=   10621kB time=00:02:39.36 bitrate= 546.0kbits/s dup=0 drop=19117 speed=0.0971x
frame= 4784 fps=2.9 q=25.0 size=   10625kB time=00:02:39.43 bitrate= 545.9kbits/s dup=0 drop=19122 speed=0.0971x
frame= 4785 fps=2.9 q=25.0 size=   10626kB time=00:02:39.46 bitrate= 545.9kbits/s dup=0 drop=19129 speed=0.0971x
frame= 4787 fps=2.9 q=25.0 size=   10629kB time=00:02:39.53 bitrate= 545.8kbits/s dup=0 drop=19134 speed=0.0971x
frame= 4788 fps=2.9 q=25.0 size=   10631kB time=00:02:39.56 bitrate= 545.8kbits/s dup=0 drop=19141 speed=0.0971x
frame= 4790 fps=2.9 q=25.0 size=   10634kB time=00:02:39.63 bitrate= 545.7kbits/s dup=0 drop=19146 speed=0.0972x
frame= 4791 fps=2.9 q=25.0 size=   10636kB time=00:02:39.66 bitrate= 545.7kbits/s dup=0 drop=19152 speed=0.0971x
frame= 4793 fps=2.9 q=25.0 size=   10640kB time=00:02:39.73 bitrate= 545.7kbits/s dup=0 drop=19158 speed=0.0972x
frame= 4794 fps=2.9 q=25.0 size=   10641kB time=00:02:39.76 bitrate= 545.6kbits/s dup=0 drop=19164 speed=0.0971x
frame= 4796 fps=2.9 q=25.0 size=   10645kB time=00:02:39.83 bitrate= 545.6kbits/s dup=0 drop=19170 speed=0.0971x
frame= 4797 fps=2.9 q=25.0 size=   10646kB time=00:02:39.86 bitrate= 545.5kbits/s dup=0 drop=19177 speed=0.0971x
frame= 4799 fps=2.9 q=25.0 size=   10650kB time=00:02:39.93 bitrate= 545.5kbits/s dup=0 drop=19182 speed=0.0972x
frame= 4801 fps=2.9 q=25.0 size=   10653kB time=00:02:40.00 bitrate= 545.4kbits/s dup=0 drop=19190 speed=0.0972x
frame= 4803 fps=2.9 q=25.0 size=   10656kB time=00:02:40.06 bitrate= 545.4kbits/s dup=0 drop=19198 speed=0.0972x
frame= 4804 fps=2.9 q=25.0 size=   10658kB time=00:02:40.10 bitrate= 545.3kbits/s dup=0 drop=19205 speed=0.0972x
frame= 4806 fps=2.9 q=25.0 size=   10661kB time=00:02:40.16 bitrate= 545.3kbits/s dup=0 drop=19210 speed=0.0972x
frame= 4808 fps=2.9 q=25.0 size=   10664kB time=00:02:40.23 bitrate= 545.2kbits/s dup=0 drop=19218 speed=0.0972x
frame= 4809 fps=2.9 q=25.0 size=   10666kB time=00:02:40.26 bitrate= 545.2kbits/s dup=0 drop=19223 speed=0.0972x
frame= 4811 fps=2.9 q=25.0 size=   10670kB time=00:02:40.33 bitrate= 545.2kbits/s dup=0 drop=19230 speed=0.0972x
frame= 4812 fps=2.9 q=25.0 size=   10671kB time=00:02:40.36 bitrate= 545.1kbits/s dup=0 drop=19236 speed=0.0972x
frame= 4814 fps=2.9 q=25.0 size=   10675kB time=00:02:40.43 bitrate= 545.1kbits/s dup=0 drop=19242 speed=0.0972x
frame= 4815 fps=2.9 q=25.0 size=   10676kB time=00:02:40.46 bitrate= 545.0kbits/s dup=0 drop=19246 speed=0.0972x
frame= 4816 fps=2.9 q=25.0 size=   10678kB time=00:02:40.50 bitrate= 545.0kbits/s dup=0 drop=19252 speed=0.0971x
frame= 4817 fps=2.9 q=25.0 size=   10680kB time=00:02:40.53 bitrate= 545.0kbits/s dup=0 drop=19256 speed=0.0971x
frame= 4819 fps=2.9 q=25.0 size=   10683kB time=00:02:40.60 bitrate= 544.9kbits/s dup=0 drop=19262 speed=0.0971x
frame= 4820 fps=2.9 q=25.0 size=   10685kB time=00:02:40.63 bitrate= 544.9kbits/s dup=0 drop=19266 speed=0.0971x
frame= 4821 fps=2.9 q=25.0 size=   10686kB time=00:02:40.66 bitrate= 544.9kbits/s dup=0 drop=19272 speed=0.0971x
frame= 4823 fps=2.9 q=25.0 size=   10689kB time=00:02:40.73 bitrate= 544.8kbits/s dup=0 drop=19278 speed=0.0971x
frame= 4824 fps=2.9 q=25.0 size=   10691kB time=00:02:40.76 bitrate= 544.8kbits/s dup=0 drop=19283 speed=0.0971x
frame= 4825 fps=2.9 q=25.0 size=   10693kB time=00:02:40.80 bitrate= 544.7kbits/s dup=0 drop=19289 speed=0.0971x
frame= 4827 fps=2.9 q=25.0 size=   10696kB time=00:02:40.86 bitrate= 544.7kbits/s dup=0 drop=19294 speed=0.0971x
frame= 4828 fps=2.9 q=25.0 size=   10698kB time=00:02:40.90 bitrate= 544.7kbits/s dup=0 drop=19300 speed=0.0971x
frame= 4830 fps=2.9 q=25.0 size=   10701kB time=00:02:40.96 bitrate= 544.6kbits/s dup=0 drop=19306 speed=0.0971x
frame= 4831 fps=2.9 q=25.0 size=   10703kB time=00:02:41.00 bitrate= 544.6kbits/s dup=0 drop=19312 speed=0.0971x
frame= 4833 fps=2.9 q=25.0 size=   10706kB time=00:02:41.06 bitrate= 544.5kbits/s dup=0 drop=19318 speed=0.0971x
frame= 4835 fps=2.9 q=25.0 size=   10709kB time=00:02:41.13 bitrate= 544.5kbits/s dup=0 drop=19326 speed=0.0971x
frame= 4837 fps=2.9 q=25.0 size=   10713kB time=00:02:41.20 bitrate= 544.4kbits/s dup=0 drop=19334 speed=0.0971x
frame= 4838 fps=2.9 q=25.0 size=   10714kB time=00:02:41.23 bitrate= 544.4kbits/s dup=0 drop=19341 speed=0.0971x
frame= 4840 fps=2.9 q=25.0 size=   10717kB time=00:02:41.30 bitrate= 544.3kbits/s dup=0 drop=19346 speed=0.0971x
frame= 4841 fps=2.9 q=25.0 size=   10719kB time=00:02:41.33 bitrate= 544.3kbits/s dup=0 drop=19351 speed=0.0971x
frame= 4843 fps=2.9 q=25.0 size=   10722kB time=00:02:41.40 bitrate= 544.2kbits/s dup=0 drop=19358 speed=0.0971x
frame= 4845 fps=2.9 q=25.0 size=   10725kB time=00:02:41.46 bitrate= 544.2kbits/s dup=0 drop=19366 speed=0.0971x
frame= 4847 fps=2.9 q=25.0 size=   10729kB time=00:02:41.53 bitrate= 544.1kbits/s dup=0 drop=19374 speed=0.0971x
frame= 4848 fps=2.9 q=25.0 size=   10730kB time=00:02:41.56 bitrate= 544.1kbits/s dup=0 drop=19381 speed=0.0971x
frame= 4850 fps=2.9 q=25.0 size=   10734kB time=00:02:41.63 bitrate= 544.0kbits/s dup=0 drop=19386 speed=0.0971x
frame= 4852 fps=2.9 q=25.0 size=   10737kB time=00:02:41.70 bitrate= 544.0kbits/s dup=0 drop=19394 speed=0.0972x
frame= 4853 fps=2.9 q=25.0 size=   10739kB time=00:02:41.73 bitrate= 543.9kbits/s dup=0 drop=19400 speed=0.0971x
frame= 4855 fps=2.9 q=25.0 size=   10742kB time=00:02:41.80 bitrate= 543.9kbits/s dup=0 drop=19406 speed=0.0972x
frame= 4857 fps=2.9 q=25.0 size=   10745kB time=00:02:41.86 bitrate= 543.8kbits/s dup=0 drop=19414 speed=0.0972x
frame= 4858 fps=2.9 q=25.0 size=   10747kB time=00:02:41.90 bitrate= 543.8kbits/s dup=0 drop=19419 speed=0.0971x
frame= 4860 fps=2.9 q=25.0 size=   10750kB time=00:02:41.96 bitrate= 543.7kbits/s dup=0 drop=19426 speed=0.0972x
frame= 4861 fps=2.9 q=25.0 size=   10752kB time=00:02:42.00 bitrate= 543.7kbits/s dup=0 drop=19433 speed=0.0971x
frame= 4863 fps=2.9 q=25.0 size=   10755kB time=00:02:42.06 bitrate= 543.6kbits/s dup=0 drop=19438 speed=0.0972x
frame= 4865 fps=2.9 q=25.0 size=   10758kB time=00:02:42.13 bitrate= 543.6kbits/s dup=0 drop=19446 speed=0.0972x
frame= 4867 fps=2.9 q=25.0 size=   10761kB time=00:02:42.20 bitrate= 543.5kbits/s dup=0 drop=19454 speed=0.0972x
frame= 4868 fps=2.9 q=25.0 size=   10763kB time=00:02:42.23 bitrate= 543.5kbits/s dup=0 drop=19460 speed=0.0972x
frame= 4870 fps=2.9 q=25.0 size=   10767kB time=00:02:42.30 bitrate= 543.4kbits/s dup=0 drop=19466 speed=0.0972x
frame= 4871 fps=2.9 q=25.0 size=   10768kB time=00:02:42.33 bitrate= 543.4kbits/s dup=0 drop=19473 speed=0.0972x
frame= 4873 fps=2.9 q=25.0 size=   10771kB time=00:02:42.40 bitrate= 543.3kbits/s dup=0 drop=19478 speed=0.0972x
frame= 4874 fps=2.9 q=25.0 size=   10773kB time=00:02:42.43 bitrate= 543.3kbits/s dup=0 drop=19485 speed=0.0972x
frame= 4876 fps=2.9 q=25.0 size=   10777kB time=00:02:42.50 bitrate= 543.3kbits/s dup=0 drop=19490 speed=0.0972x
frame= 4877 fps=2.9 q=25.0 size=   10778kB time=00:02:42.53 bitrate= 543.2kbits/s dup=0 drop=19496 speed=0.0972x
frame= 4879 fps=2.9 q=25.0 size=   10782kB time=00:02:42.60 bitrate= 543.2kbits/s dup=0 drop=19502 speed=0.0972x
frame= 4880 fps=2.9 q=25.0 size=   10783kB time=00:02:42.63 bitrate= 543.2kbits/s dup=0 drop=19508 speed=0.0972x
frame= 4882 fps=2.9 q=25.0 size=   10787kB time=00:02:42.70 bitrate= 543.1kbits/s dup=0 drop=19514 speed=0.0972x
frame= 4883 fps=2.9 q=25.0 size=   10788kB time=00:02:42.73 bitrate= 543.1kbits/s dup=0 drop=19519 speed=0.0972x
frame= 4885 fps=2.9 q=25.0 size=   10791kB time=00:02:42.80 bitrate= 543.0kbits/s dup=0 drop=19526 speed=0.0972x
frame= 4887 fps=2.9 q=25.0 size=   10795kB time=00:02:42.86 bitrate= 543.0kbits/s dup=0 drop=19534 speed=0.0972x
frame= 4888 fps=2.9 q=25.0 size=   10796kB time=00:02:42.90 bitrate= 542.9kbits/s dup=0 drop=19541 speed=0.0972x
frame= 4890 fps=2.9 q=25.0 size=   10799kB time=00:02:42.96 bitrate= 542.9kbits/s dup=0 drop=19546 speed=0.0972x
frame= 4892 fps=2.9 q=25.0 size=   10803kB time=00:02:43.03 bitrate= 542.8kbits/s dup=0 drop=19554 speed=0.0972x
frame= 4894 fps=2.9 q=25.0 size=   10806kB time=00:02:43.10 bitrate= 542.7kbits/s dup=0 drop=19562 speed=0.0972x
frame= 4895 fps=2.9 q=25.0 size=   10807kB time=00:02:43.13 bitrate= 542.7kbits/s dup=0 drop=19569 speed=0.0972x
frame= 4897 fps=2.9 q=25.0 size=   10811kB time=00:02:43.20 bitrate= 542.7kbits/s dup=0 drop=19574 speed=0.0972x
frame= 4898 fps=2.9 q=25.0 size=   10812kB time=00:02:43.23 bitrate= 542.6kbits/s dup=0 drop=19581 speed=0.0972x
frame= 4900 fps=2.9 q=25.0 size=   10815kB time=00:02:43.30 bitrate= 542.6kbits/s dup=0 drop=19586 speed=0.0972x
frame= 4901 fps=2.9 q=25.0 size=   10817kB time=00:02:43.33 bitrate= 542.5kbits/s dup=0 drop=19592 speed=0.0972x
frame= 4902 fps=2.9 q=25.0 size=   10819kB time=00:02:43.36 bitrate= 542.5kbits/s dup=0 drop=19597 speed=0.0972x
frame= 4904 fps=2.9 q=25.0 size=   10822kB time=00:02:43.43 bitrate= 542.5kbits/s dup=0 drop=19602 speed=0.0972x
frame= 4905 fps=2.9 q=25.0 size=   10824kB time=00:02:43.46 bitrate= 542.4kbits/s dup=0 drop=19606 speed=0.0972x
frame= 4907 fps=2.9 q=25.0 size=   10828kB time=00:02:43.53 bitrate= 542.4kbits/s dup=0 drop=19614 speed=0.0972x
frame= 4908 fps=2.9 q=25.0 size=   10829kB time=00:02:43.56 bitrate= 542.4kbits/s dup=0 drop=19618 speed=0.0972x
frame= 4910 fps=2.9 q=25.0 size=   10833kB time=00:02:43.63 bitrate= 542.3kbits/s dup=0 drop=19626 speed=0.0972x
frame= 4912 fps=2.9 q=25.0 size=   10836kB time=00:02:43.70 bitrate= 542.3kbits/s dup=0 drop=19634 speed=0.0972x
frame= 4914 fps=2.9 q=25.0 size=   10839kB time=00:02:43.76 bitrate= 542.2kbits/s dup=0 drop=19642 speed=0.0972x
frame= 4915 fps=2.9 q=25.0 size=   10841kB time=00:02:43.80 bitrate= 542.2kbits/s dup=0 drop=19646 speed=0.0972x
frame= 4917 fps=2.9 q=25.0 size=   10844kB time=00:02:43.86 bitrate= 542.1kbits/s dup=0 drop=19654 speed=0.0972x
frame= 4919 fps=2.9 q=25.0 size=   10848kB time=00:02:43.93 bitrate= 542.1kbits/s dup=0 drop=19662 speed=0.0972x
frame= 4920 fps=2.9 q=25.0 size=   10849kB time=00:02:43.96 bitrate= 542.1kbits/s dup=0 drop=19667 speed=0.0972x
frame= 4921 fps=2.9 q=25.0 size=   10851kB time=00:02:44.00 bitrate= 542.0kbits/s dup=0 drop=19673 speed=0.0972x
frame= 4923 fps=2.9 q=25.0 size=   10854kB time=00:02:44.06 bitrate= 542.0kbits/s dup=0 drop=19678 speed=0.0972x
frame= 4924 fps=2.9 q=25.0 size=   10856kB time=00:02:44.10 bitrate= 541.9kbits/s dup=0 drop=19684 speed=0.0972x
frame= 4926 fps=2.9 q=25.0 size=   10859kB time=00:02:44.16 bitrate= 541.9kbits/s dup=0 drop=19690 speed=0.0972x
frame= 4927 fps=2.9 q=25.0 size=   10861kB time=00:02:44.20 bitrate= 541.9kbits/s dup=0 drop=19696 speed=0.0972x
frame= 4929 fps=2.9 q=25.0 size=   10865kB time=00:02:44.26 bitrate= 541.8kbits/s dup=0 drop=19702 speed=0.0972x
frame= 4930 fps=2.9 q=25.0 size=   10866kB time=00:02:44.30 bitrate= 541.8kbits/s dup=0 drop=19709 speed=0.0972x
frame= 4932 fps=2.9 q=25.0 size=   10870kB time=00:02:44.36 bitrate= 541.8kbits/s dup=0 drop=19714 speed=0.0972x
frame= 4933 fps=2.9 q=25.0 size=   10872kB time=00:02:44.40 bitrate= 541.7kbits/s dup=0 drop=19718 speed=0.0972x
frame= 4934 fps=2.9 q=25.0 size=   10874kB time=00:02:44.43 bitrate= 541.7kbits/s dup=0 drop=19723 speed=0.0972x
frame= 4935 fps=2.9 q=25.0 size=   10875kB time=00:02:44.46 bitrate= 541.7kbits/s dup=0 drop=19729 speed=0.0972x
frame= 4937 fps=2.9 q=25.0 size=   10879kB time=00:02:44.53 bitrate= 541.6kbits/s dup=0 drop=19734 speed=0.0972x
frame= 4938 fps=2.9 q=25.0 size=   10881kB time=00:02:44.56 bitrate= 541.6kbits/s dup=0 drop=19739 speed=0.0971x
frame= 4940 fps=2.9 q=25.0 size=   10884kB time=00:02:44.63 bitrate= 541.6kbits/s dup=0 drop=19746 speed=0.0972x
frame= 4941 fps=2.9 q=25.0 size=   10886kB time=00:02:44.66 bitrate= 541.6kbits/s dup=0 drop=19751 speed=0.0971x
frame= 4943 fps=2.9 q=25.0 size=   10889kB time=00:02:44.73 bitrate= 541.5kbits/s dup=0 drop=19758 speed=0.0972x
frame= 4944 fps=2.9 q=25.0 size=   10891kB time=00:02:44.76 bitrate= 541.5kbits/s dup=0 drop=19763 speed=0.0971x
frame= 4946 fps=2.9 q=25.0 size=   10894kB time=00:02:44.83 bitrate= 541.4kbits/s dup=0 drop=19770 speed=0.0972x
frame= 4947 fps=2.9 q=25.0 size=   10896kB time=00:02:44.86 bitrate= 541.4kbits/s dup=0 drop=19774 speed=0.0971x
frame= 4949 fps=2.9 q=25.0 size=   10899kB time=00:02:44.93 bitrate= 541.3kbits/s dup=0 drop=19782 speed=0.0971x
frame= 4950 fps=2.9 q=25.0 size=   10901kB time=00:02:44.96 bitrate= 541.3kbits/s dup=0 drop=19786 speed=0.0971x
frame= 4952 fps=2.9 q=25.0 size=   10904kB time=00:02:45.03 bitrate= 541.3kbits/s dup=0 drop=19794 speed=0.0971x
frame= 4953 fps=2.9 q=25.0 size=   10906kB time=00:02:45.06 bitrate= 541.2kbits/s dup=0 drop=19799 speed=0.0971x
frame= 4954 fps=2.9 q=25.0 size=   10907kB time=00:02:45.10 bitrate= 541.2kbits/s dup=0 drop=19805 speed=0.0971x
frame= 4956 fps=2.9 q=25.0 size=   10911kB time=00:02:45.16 bitrate= 541.1kbits/s dup=0 drop=19810 speed=0.0971x
frame= 4957 fps=2.9 q=25.0 size=   10912kB time=00:02:45.20 bitrate= 541.1kbits/s dup=0 drop=19815 speed=0.0971x
frame= 4959 fps=2.9 q=25.0 size=   10916kB time=00:02:45.26 bitrate= 541.1kbits/s dup=0 drop=19822 speed=0.0971x
frame= 4960 fps=2.9 q=25.0 size=   10917kB time=00:02:45.30 bitrate= 541.1kbits/s dup=0 drop=19829 speed=0.0971x
frame= 4962 fps=2.9 q=25.0 size=   10921kB time=00:02:45.36 bitrate= 541.0kbits/s dup=0 drop=19834 speed=0.0971x
frame= 4963 fps=2.9 q=25.0 size=   10923kB time=00:02:45.40 bitrate= 541.0kbits/s dup=0 drop=19840 speed=0.0971x
frame= 4964 fps=2.9 q=25.0 size=   10925kB time=00:02:45.43 bitrate= 541.0kbits/s dup=0 drop=19845 speed=0.0971x
frame= 4966 fps=2.9 q=25.0 size=   10928kB time=00:02:45.50 bitrate= 540.9kbits/s dup=0 drop=19850 speed=0.0971x
frame= 4967 fps=2.9 q=25.0 size=   10930kB time=00:02:45.53 bitrate= 540.9kbits/s dup=0 drop=19854 speed=0.0971x
frame= 4968 fps=2.9 q=25.0 size=   10931kB time=00:02:45.56 bitrate= 540.9kbits/s dup=0 drop=19859 speed=0.0971x
frame= 4969 fps=2.9 q=25.0 size=   10933kB time=00:02:45.60 bitrate= 540.8kbits/s dup=0 drop=19865 speed=0.0971x
frame= 4971 fps=2.9 q=25.0 size=   10936kB time=00:02:45.66 bitrate= 540.8kbits/s dup=0 drop=19870 speed=0.0971x
frame= 4972 fps=2.9 q=25.0 size=   10938kB time=00:02:45.70 bitrate= 540.8kbits/s dup=0 drop=19876 speed=0.0971x
frame= 4974 fps=2.9 q=25.0 size=   10941kB time=00:02:45.76 bitrate= 540.7kbits/s dup=0 drop=19882 speed=0.0971x
frame= 4975 fps=2.9 q=25.0 size=   10943kB time=00:02:45.80 bitrate= 540.7kbits/s dup=0 drop=19888 speed=0.0971x
frame= 4977 fps=2.9 q=25.0 size=   10946kB time=00:02:45.86 bitrate= 540.6kbits/s dup=0 drop=19894 speed=0.0971x
frame= 4978 fps=2.9 q=25.0 size=   10948kB time=00:02:45.90 bitrate= 540.6kbits/s dup=0 drop=19900 speed=0.0971x
frame= 4980 fps=2.9 q=25.0 size=   10951kB time=00:02:45.96 bitrate= 540.5kbits/s dup=0 drop=19906 speed=0.0971x
frame= 4981 fps=2.9 q=25.0 size=   10953kB time=00:02:46.00 bitrate= 540.5kbits/s dup=0 drop=19912 speed=0.0971x
frame= 4983 fps=2.9 q=25.0 size=   10956kB time=00:02:46.06 bitrate= 540.5kbits/s dup=0 drop=19918 speed=0.0971x
frame= 4984 fps=2.9 q=25.0 size=   10958kB time=00:02:46.10 bitrate= 540.4kbits/s dup=0 drop=19922 speed=0.0971x
frame= 4985 fps=2.9 q=25.0 size=   10960kB time=00:02:46.13 bitrate= 540.4kbits/s dup=0 drop=19929 speed=0.0971x
frame= 4987 fps=2.9 q=25.0 size=   10963kB time=00:02:46.20 bitrate= 540.4kbits/s dup=0 drop=19934 speed=0.0971x
frame= 4988 fps=2.9 q=25.0 size=   10965kB time=00:02:46.23 bitrate= 540.3kbits/s dup=0 drop=19938 speed=0.0971x
frame= 4989 fps=2.9 q=22.0 size=   10979kB time=00:02:46.26 bitrate= 540.9kbits/s dup=0 drop=19945 speed=0.097x
frame= 4991 fps=2.9 q=26.0 size=   10982kB time=00:02:46.33 bitrate= 540.9kbits/s dup=0 drop=19952 speed=0.0971x
frame= 4993 fps=2.9 q=25.0 size=   10986kB time=00:02:46.40 bitrate= 540.9kbits/s dup=0 drop=19958 speed=0.0971x
frame= 4995 fps=2.9 q=25.0 size=   10990kB time=00:02:46.46 bitrate= 540.9kbits/s dup=0 drop=19966 speed=0.0971x
frame= 4996 fps=2.9 q=25.0 size=   10992kB time=00:02:46.50 bitrate= 540.8kbits/s dup=0 drop=19973 speed=0.0971x
frame= 4998 fps=2.9 q=25.0 size=   10996kB time=00:02:46.56 bitrate= 540.8kbits/s dup=0 drop=19980 speed=0.0971x
frame= 5000 fps=2.9 q=25.0 size=   11000kB time=00:02:46.63 bitrate= 540.8kbits/s dup=0 drop=19986 speed=0.0971x
frame= 5001 fps=2.9 q=25.0 size=   11002kB time=00:02:46.66 bitrate= 540.8kbits/s dup=0 drop=19993 speed=0.0971x
frame= 5003 fps=2.9 q=25.0 size=   11006kB time=00:02:46.73 bitrate= 540.8kbits/s dup=0 drop=19998 speed=0.0971x
frame= 5004 fps=2.9 q=25.0 size=   11008kB time=00:02:46.76 bitrate= 540.7kbits/s dup=0 drop=20004 speed=0.0971x
frame= 5006 fps=2.9 q=25.0 size=   11011kB time=00:02:46.83 bitrate= 540.7kbits/s dup=0 drop=20010 speed=0.0971x
frame= 5007 fps=2.9 q=25.0 size=   11013kB time=00:02:46.86 bitrate= 540.7kbits/s dup=0 drop=20017 speed=0.0971x
frame= 5009 fps=2.9 q=25.0 size=   11017kB time=00:02:46.93 bitrate= 540.6kbits/s dup=0 drop=20022 speed=0.0971x
frame= 5010 fps=2.9 q=25.0 size=   11018kB time=00:02:46.96 bitrate= 540.6kbits/s dup=0 drop=20028 speed=0.0971x
frame= 5012 fps=2.9 q=25.0 size=   11022kB time=00:02:47.03 bitrate= 540.6kbits/s dup=0 drop=20034 speed=0.0971x
frame= 5013 fps=2.9 q=25.0 size=   11024kB time=00:02:47.06 bitrate= 540.5kbits/s dup=0 drop=20039 speed=0.0971x
frame= 5014 fps=2.9 q=25.0 size=   11025kB time=00:02:47.10 bitrate= 540.5kbits/s dup=0 drop=20045 speed=0.0971x
frame= 5016 fps=2.9 q=25.0 size=   11029kB time=00:02:47.16 bitrate= 540.5kbits/s dup=0 drop=20050 speed=0.0971x
frame= 5017 fps=2.9 q=25.0 size=   11031kB time=00:02:47.20 bitrate= 540.4kbits/s dup=0 drop=20057 speed=0.0971x
frame= 5019 fps=2.9 q=25.0 size=   11034kB time=00:02:47.26 bitrate= 540.4kbits/s dup=0 drop=20062 speed=0.0971x
frame= 5020 fps=2.9 q=25.0 size=   11036kB time=00:02:47.30 bitrate= 540.4kbits/s dup=0 drop=20068 speed=0.0971x
frame= 5021 fps=2.9 q=25.0 size=   11038kB time=00:02:47.33 bitrate= 540.4kbits/s dup=0 drop=20073 speed=0.0971x
frame= 5023 fps=2.9 q=25.0 size=   11041kB time=00:02:47.40 bitrate= 540.3kbits/s dup=0 drop=20078 speed=0.0971x
frame= 5025 fps=2.9 q=25.0 size=   11045kB time=00:02:47.46 bitrate= 540.3kbits/s dup=0 drop=20086 speed=0.0971x
frame= 5026 fps=2.9 q=25.0 size=   11047kB time=00:02:47.50 bitrate= 540.3kbits/s dup=0 drop=20092 speed=0.0971x
frame= 5028 fps=2.9 q=25.0 size=   11050kB time=00:02:47.56 bitrate= 540.2kbits/s dup=0 drop=20098 speed=0.0971x
frame= 5029 fps=2.9 q=25.0 size=   11052kB time=00:02:47.60 bitrate= 540.2kbits/s dup=0 drop=20105 speed=0.097x
frame= 5031 fps=2.9 q=25.0 size=   11055kB time=00:02:47.66 bitrate= 540.2kbits/s dup=0 drop=20110 speed=0.0971x
frame= 5032 fps=2.9 q=25.0 size=   11057kB time=00:02:47.70 bitrate= 540.1kbits/s dup=0 drop=20115 speed=0.0971x
frame= 5034 fps=2.9 q=25.0 size=   11060kB time=00:02:47.76 bitrate= 540.1kbits/s dup=0 drop=20122 speed=0.0971x
frame= 5036 fps=2.9 q=25.0 size=   11064kB time=00:02:47.83 bitrate= 540.0kbits/s dup=0 drop=20130 speed=0.0971x
frame= 5038 fps=2.9 q=25.0 size=   11067kB time=00:02:47.90 bitrate= 540.0kbits/s dup=0 drop=20138 speed=0.0971x
frame= 5040 fps=2.9 q=25.0 size=   11071kB time=00:02:47.96 bitrate= 539.9kbits/s dup=0 drop=20146 speed=0.0971x
frame= 5041 fps=2.9 q=25.0 size=   11073kB time=00:02:48.00 bitrate= 539.9kbits/s dup=0 drop=20153 speed=0.0971x
frame= 5043 fps=2.9 q=25.0 size=   11076kB time=00:02:48.06 bitrate= 539.9kbits/s dup=0 drop=20158 speed=0.0971x
frame= 5044 fps=2.9 q=25.0 size=   11078kB time=00:02:48.10 bitrate= 539.8kbits/s dup=0 drop=20165 speed=0.0971x
frame= 5046 fps=2.9 q=25.0 size=   11081kB time=00:02:48.16 bitrate= 539.8kbits/s dup=0 drop=20170 speed=0.0971x
frame= 5047 fps=2.9 q=25.0 size=   11082kB time=00:02:48.20 bitrate= 539.8kbits/s dup=0 drop=20177 speed=0.0971x
frame= 5049 fps=2.9 q=25.0 size=   11086kB time=00:02:48.26 bitrate= 539.7kbits/s dup=0 drop=20182 speed=0.0971x
frame= 5050 fps=2.9 q=25.0 size=   11088kB time=00:02:48.30 bitrate= 539.7kbits/s dup=0 drop=20189 speed=0.0971x
frame= 5052 fps=2.9 q=25.0 size=   11091kB time=00:02:48.36 bitrate= 539.6kbits/s dup=0 drop=20196 speed=0.0971x
frame= 5054 fps=2.9 q=25.0 size=   11095kB time=00:02:48.43 bitrate= 539.6kbits/s dup=0 drop=20202 speed=0.0971x
frame= 5055 fps=2.9 q=25.0 size=   11096kB time=00:02:48.46 bitrate= 539.6kbits/s dup=0 drop=20208 speed=0.0971x
frame= 5057 fps=2.9 q=25.0 size=   11099kB time=00:02:48.53 bitrate= 539.5kbits/s dup=0 drop=20214 speed=0.0971x
frame= 5058 fps=2.9 q=25.0 size=   11101kB time=00:02:48.56 bitrate= 539.5kbits/s dup=0 drop=20221 speed=0.0971x
frame= 5060 fps=2.9 q=25.0 size=   11105kB time=00:02:48.63 bitrate= 539.4kbits/s dup=0 drop=20227 speed=0.0971x
frame= 5062 fps=2.9 q=25.0 size=   11108kB time=00:02:48.70 bitrate= 539.4kbits/s dup=0 drop=20234 speed=0.0971x
frame= 5063 fps=2.9 q=25.0 size=   11109kB time=00:02:48.73 bitrate= 539.4kbits/s dup=0 drop=20240 speed=0.0971x
frame= 5065 fps=2.9 q=25.0 size=   11113kB time=00:02:48.80 bitrate= 539.3kbits/s dup=0 drop=20247 speed=0.0971x
frame= 5067 fps=2.9 q=25.0 size=   11116kB time=00:02:48.86 bitrate= 539.3kbits/s dup=0 drop=20254 speed=0.0971x
frame= 5069 fps=2.9 q=25.0 size=   11120kB time=00:02:48.93 bitrate= 539.2kbits/s dup=0 drop=20262 speed=0.0971x
frame= 5071 fps=2.9 q=25.0 size=   11124kB time=00:02:49.00 bitrate= 539.2kbits/s dup=0 drop=20270 speed=0.0971x
frame= 5073 fps=2.9 q=25.0 size=   11128kB time=00:02:49.06 bitrate= 539.2kbits/s dup=0 drop=20278 speed=0.0971x
frame= 5074 fps=2.9 q=25.0 size=   11129kB time=00:02:49.10 bitrate= 539.2kbits/s dup=0 drop=20284 speed=0.0971x
frame= 5075 fps=2.9 q=25.0 size=   11131kB time=00:02:49.13 bitrate= 539.1kbits/s dup=0 drop=20289 speed=0.0971x
frame= 5077 fps=2.9 q=25.0 size=   11135kB time=00:02:49.20 bitrate= 539.1kbits/s dup=0 drop=20294 speed=0.0971x
frame= 5079 fps=2.9 q=25.0 size=   11138kB time=00:02:49.26 bitrate= 539.0kbits/s dup=0 drop=20302 speed=0.0971x
frame= 5081 fps=2.9 q=25.0 size=   11141kB time=00:02:49.33 bitrate= 539.0kbits/s dup=0 drop=20310 speed=0.0971x
frame= 5082 fps=2.9 q=25.0 size=   11143kB time=00:02:49.36 bitrate= 539.0kbits/s dup=0 drop=20316 speed=0.0971x
frame= 5084 fps=2.9 q=25.0 size=   11146kB time=00:02:49.43 bitrate= 538.9kbits/s dup=0 drop=20322 speed=0.0971x
frame= 5085 fps=2.9 q=25.0 size=   11148kB time=00:02:49.46 bitrate= 538.9kbits/s dup=0 drop=20329 speed=0.0971x
frame= 5086 fps=2.9 q=25.0 size=   11149kB time=00:02:49.50 bitrate= 538.8kbits/s dup=0 drop=20333 speed=0.0971x
frame= 5087 fps=2.9 q=25.0 size=   11151kB time=00:02:49.53 bitrate= 538.8kbits/s dup=0 drop=20337 speed=0.0971x
frame= 5089 fps=2.9 q=25.0 size=   11154kB time=00:02:49.60 bitrate= 538.8kbits/s dup=0 drop=20342 speed=0.0971x
frame= 5090 fps=2.9 q=25.0 size=   11156kB time=00:02:49.63 bitrate= 538.7kbits/s dup=0 drop=20346 speed=0.0971x
frame= 5091 fps=2.9 q=25.0 size=   11158kB time=00:02:49.66 bitrate= 538.7kbits/s dup=0 drop=20350 speed=0.0971x
frame= 5092 fps=2.9 q=25.0 size=   11159kB time=00:02:49.70 bitrate= 538.7kbits/s dup=0 drop=20357 speed=0.0971x
frame= 5094 fps=2.9 q=25.0 size=   11163kB time=00:02:49.76 bitrate= 538.6kbits/s dup=0 drop=20362 speed=0.0971x
frame= 5095 fps=2.9 q=25.0 size=   11164kB time=00:02:49.80 bitrate= 538.6kbits/s dup=0 drop=20367 speed=0.0971x
frame= 5097 fps=2.9 q=25.0 size=   11168kB time=00:02:49.86 bitrate= 538.6kbits/s dup=0 drop=20374 speed=0.0971x
frame= 5098 fps=2.9 q=25.0 size=   11170kB time=00:02:49.90 bitrate= 538.6kbits/s dup=0 drop=20379 speed=0.0971x
frame= 5100 fps=2.9 q=25.0 size=   11173kB time=00:02:49.96 bitrate= 538.5kbits/s dup=0 drop=20386 speed=0.0971x
frame= 5101 fps=2.9 q=25.0 size=   11175kB time=00:02:50.00 bitrate= 538.5kbits/s dup=0 drop=20390 speed=0.0971x
frame= 5102 fps=2.9 q=25.0 size=   11177kB time=00:02:50.03 bitrate= 538.5kbits/s dup=0 drop=20396 speed=0.0971x
frame= 5104 fps=2.9 q=25.0 size=   11180kB time=00:02:50.10 bitrate= 538.4kbits/s dup=0 drop=20402 speed=0.0971x
frame= 5106 fps=2.9 q=25.0 size=   11183kB time=00:02:50.16 bitrate= 538.4kbits/s dup=0 drop=20410 speed=0.0971x
frame= 5107 fps=2.9 q=25.0 size=   11185kB time=00:02:50.20 bitrate= 538.4kbits/s dup=0 drop=20414 speed=0.0971x
frame= 5109 fps=2.9 q=25.0 size=   11188kB time=00:02:50.26 bitrate= 538.3kbits/s dup=0 drop=20422 speed=0.0971x
frame= 5110 fps=2.9 q=25.0 size=   11190kB time=00:02:50.30 bitrate= 538.3kbits/s dup=0 drop=20428 speed=0.0971x
frame= 5112 fps=2.9 q=25.0 size=   11194kB time=00:02:50.36 bitrate= 538.2kbits/s dup=0 drop=20434 speed=0.0971x
frame= 5113 fps=2.9 q=25.0 size=   11195kB time=00:02:50.40 bitrate= 538.2kbits/s dup=0 drop=20438 speed=0.0971x
frame= 5115 fps=2.9 q=25.0 size=   11199kB time=00:02:50.46 bitrate= 538.2kbits/s dup=0 drop=20446 speed=0.0971x
frame= 5116 fps=2.9 q=25.0 size=   11200kB time=00:02:50.50 bitrate= 538.1kbits/s dup=0 drop=20453 speed=0.0971x
frame= 5118 fps=2.9 q=25.0 size=   11204kB time=00:02:50.56 bitrate= 538.1kbits/s dup=0 drop=20458 speed=0.0971x
frame= 5119 fps=2.9 q=25.0 size=   11206kB time=00:02:50.60 bitrate= 538.1kbits/s dup=0 drop=20465 speed=0.0971x
frame= 5121 fps=2.9 q=25.0 size=   11209kB time=00:02:50.66 bitrate= 538.0kbits/s dup=0 drop=20470 speed=0.0971x
frame= 5122 fps=2.9 q=25.0 size=   11211kB time=00:02:50.70 bitrate= 538.0kbits/s dup=0 drop=20477 speed=0.0971x
frame= 5124 fps=2.9 q=25.0 size=   11214kB time=00:02:50.76 bitrate= 538.0kbits/s dup=0 drop=20482 speed=0.0971x
frame= 5125 fps=2.9 q=25.0 size=   11216kB time=00:02:50.80 bitrate= 537.9kbits/s dup=0 drop=20486 speed=0.0971x
frame= 5126 fps=2.9 q=25.0 size=   11218kB time=00:02:50.83 bitrate= 537.9kbits/s dup=0 drop=20491 speed=0.0971x
frame= 5127 fps=2.9 q=25.0 size=   11219kB time=00:02:50.86 bitrate= 537.9kbits/s dup=0 drop=20497 speed=0.0971x
frame= 5129 fps=2.9 q=25.0 size=   11223kB time=00:02:50.93 bitrate= 537.8kbits/s dup=0 drop=20502 speed=0.0971x
frame= 5130 fps=2.9 q=25.0 size=   11224kB time=00:02:50.96 bitrate= 537.8kbits/s dup=0 drop=20508 speed=0.0971x
frame= 5132 fps=2.9 q=25.0 size=   11228kB time=00:02:51.03 bitrate= 537.8kbits/s dup=0 drop=20514 speed=0.0971x
frame= 5133 fps=2.9 q=25.0 size=   11229kB time=00:02:51.06 bitrate= 537.8kbits/s dup=0 drop=20520 speed=0.0971x
frame= 5135 fps=2.9 q=25.0 size=   11233kB time=00:02:51.13 bitrate= 537.7kbits/s dup=0 drop=20526 speed=0.0971x
frame= 5136 fps=2.9 q=25.0 size=   11234kB time=00:02:51.16 bitrate= 537.7kbits/s dup=0 drop=20532 speed=0.0971x
frame= 5138 fps=2.9 q=25.0 size=   11238kB time=00:02:51.23 bitrate= 537.6kbits/s dup=0 drop=20538 speed=0.0971x
frame= 5139 fps=2.9 q=25.0 size=   11240kB time=00:02:51.26 bitrate= 537.6kbits/s dup=0 drop=20544 speed=0.0971x
frame= 5141 fps=2.9 q=25.0 size=   11243kB time=00:02:51.33 bitrate= 537.6kbits/s dup=0 drop=20550 speed=0.0971x
frame= 5142 fps=2.9 q=25.0 size=   11245kB time=00:02:51.36 bitrate= 537.6kbits/s dup=0 drop=20556 speed=0.0971x
frame= 5144 fps=2.9 q=25.0 size=   11248kB time=00:02:51.43 bitrate= 537.5kbits/s dup=0 drop=20562 speed=0.0971x
frame= 5145 fps=2.9 q=25.0 size=   11250kB time=00:02:51.46 bitrate= 537.5kbits/s dup=0 drop=20569 speed=0.0971x
frame= 5147 fps=2.9 q=25.0 size=   11253kB time=00:02:51.53 bitrate= 537.4kbits/s dup=0 drop=20574 speed=0.0971x
frame= 5148 fps=2.9 q=25.0 size=   11255kB time=00:02:51.56 bitrate= 537.4kbits/s dup=0 drop=20581 speed=0.0971x
frame= 5150 fps=2.9 q=25.0 size=   11258kB time=00:02:51.63 bitrate= 537.3kbits/s dup=0 drop=20586 speed=0.0971x
frame= 5152 fps=2.9 q=25.0 size=   11261kB time=00:02:51.70 bitrate= 537.3kbits/s dup=0 drop=20594 speed=0.0971x
frame= 5154 fps=2.9 q=25.0 size=   11265kB time=00:02:51.76 bitrate= 537.2kbits/s dup=0 drop=20602 speed=0.0971x
frame= 5155 fps=2.9 q=25.0 size=   11266kB time=00:02:51.80 bitrate= 537.2kbits/s dup=0 drop=20608 speed=0.0971x
frame= 5157 fps=2.9 q=25.0 size=   11270kB time=00:02:51.86 bitrate= 537.2kbits/s dup=0 drop=20614 speed=0.0971x
frame= 5158 fps=2.9 q=25.0 size=   11271kB time=00:02:51.90 bitrate= 537.1kbits/s dup=0 drop=20620 speed=0.0971x
frame= 5160 fps=2.9 q=25.0 size=   11275kB time=00:02:51.96 bitrate= 537.1kbits/s dup=0 drop=20626 speed=0.0971x
frame= 5161 fps=2.9 q=25.0 size=   11277kB time=00:02:52.00 bitrate= 537.1kbits/s dup=0 drop=20630 speed=0.0971x
frame= 5162 fps=2.9 q=25.0 size=   11278kB time=00:02:52.03 bitrate= 537.1kbits/s dup=0 drop=20637 speed=0.0971x
frame= 5164 fps=2.9 q=25.0 size=   11282kB time=00:02:52.10 bitrate= 537.0kbits/s dup=0 drop=20642 speed=0.0971x
frame= 5165 fps=2.9 q=25.0 size=   11283kB time=00:02:52.13 bitrate= 537.0kbits/s dup=0 drop=20646 speed=0.097x
frame= 5166 fps=2.9 q=25.0 size=   11285kB time=00:02:52.16 bitrate= 537.0kbits/s dup=0 drop=20651 speed=0.097x
frame= 5168 fps=2.9 q=25.0 size=   11289kB time=00:02:52.23 bitrate= 536.9kbits/s dup=0 drop=20658 speed=0.097x
frame= 5169 fps=2.9 q=25.0 size=   11291kB time=00:02:52.26 bitrate= 536.9kbits/s dup=0 drop=20663 speed=0.097x
frame= 5171 fps=2.9 q=25.0 size=   11294kB time=00:02:52.33 bitrate= 536.9kbits/s dup=0 drop=20670 speed=0.097x
frame= 5172 fps=2.9 q=25.0 size=   11296kB time=00:02:52.36 bitrate= 536.8kbits/s dup=0 drop=20675 speed=0.097x
frame= 5174 fps=2.9 q=25.0 size=   11299kB time=00:02:52.43 bitrate= 536.8kbits/s dup=0 drop=20682 speed=0.097x
frame= 5175 fps=2.9 q=25.0 size=   11301kB time=00:02:52.46 bitrate= 536.8kbits/s dup=0 drop=20686 speed=0.097x
frame= 5176 fps=2.9 q=25.0 size=   11302kB time=00:02:52.50 bitrate= 536.8kbits/s dup=0 drop=20692 speed=0.097x
frame= 5178 fps=2.9 q=25.0 size=   11306kB time=00:02:52.56 bitrate= 536.7kbits/s dup=0 drop=20698 speed=0.097x
frame= 5179 fps=2.9 q=25.0 size=   11307kB time=00:02:52.60 bitrate= 536.7kbits/s dup=0 drop=20704 speed=0.097x
frame= 5181 fps=2.9 q=25.0 size=   11311kB time=00:02:52.66 bitrate= 536.6kbits/s dup=0 drop=20710 speed=0.097x
frame= 5183 fps=2.9 q=25.0 size=   11314kB time=00:02:52.73 bitrate= 536.6kbits/s dup=0 drop=20718 speed=0.097x
frame= 5185 fps=2.9 q=25.0 size=   11317kB time=00:02:52.80 bitrate= 536.5kbits/s dup=0 drop=20726 speed=0.097x
frame= 5186 fps=2.9 q=25.0 size=   11319kB time=00:02:52.83 bitrate= 536.5kbits/s dup=0 drop=20732 speed=0.097x
frame= 5188 fps=2.9 q=25.0 size=   11322kB time=00:02:52.90 bitrate= 536.4kbits/s dup=0 drop=20738 speed=0.097x
frame= 5190 fps=2.9 q=25.0 size=   11326kB time=00:02:52.96 bitrate= 536.4kbits/s dup=0 drop=20746 speed=0.097x
frame= 5192 fps=2.9 q=25.0 size=   11329kB time=00:02:53.03 bitrate= 536.3kbits/s dup=0 drop=20754 speed=0.097x
frame= 5194 fps=2.9 q=25.0 size=   11332kB time=00:02:53.10 bitrate= 536.3kbits/s dup=0 drop=20762 speed=0.0971x
frame= 5196 fps=2.9 q=25.0 size=   11335kB time=00:02:53.16 bitrate= 536.2kbits/s dup=0 drop=20770 speed=0.0971x
frame= 5198 fps=2.9 q=25.0 size=   11338kB time=00:02:53.23 bitrate= 536.2kbits/s dup=0 drop=20778 speed=0.0971x
frame= 5199 fps=2.9 q=25.0 size=   11340kB time=00:02:53.26 bitrate= 536.2kbits/s dup=0 drop=20785 speed=0.0971x
frame= 5201 fps=2.9 q=25.0 size=   11343kB time=00:02:53.33 bitrate= 536.1kbits/s dup=0 drop=20790 speed=0.0971x
frame= 5202 fps=2.9 q=25.0 size=   11345kB time=00:02:53.36 bitrate= 536.1kbits/s dup=0 drop=20796 speed=0.0971x
frame= 5204 fps=2.9 q=25.0 size=   11349kB time=00:02:53.43 bitrate= 536.0kbits/s dup=0 drop=20802 speed=0.0971x
frame= 5205 fps=2.9 q=25.0 size=   11350kB time=00:02:53.46 bitrate= 536.0kbits/s dup=0 drop=20807 speed=0.0971x
frame= 5207 fps=2.9 q=25.0 size=   11354kB time=00:02:53.53 bitrate= 536.0kbits/s dup=0 drop=20814 speed=0.0971x
frame= 5208 fps=2.9 q=25.0 size=   11355kB time=00:02:53.56 bitrate= 536.0kbits/s dup=0 drop=20818 speed=0.0971x
frame= 5209 fps=2.9 q=25.0 size=   11357kB time=00:02:53.60 bitrate= 535.9kbits/s dup=0 drop=20824 speed=0.0971x
frame= 5211 fps=2.9 q=25.0 size=   11360kB time=00:02:53.66 bitrate= 535.9kbits/s dup=0 drop=20830 speed=0.0971x
frame= 5212 fps=2.9 q=25.0 size=   11362kB time=00:02:53.70 bitrate= 535.9kbits/s dup=0 drop=20834 speed=0.0971x
frame= 5214 fps=2.9 q=25.0 size=   11366kB time=00:02:53.76 bitrate= 535.8kbits/s dup=0 drop=20842 speed=0.0971x
frame= 5216 fps=2.9 q=25.0 size=   11369kB time=00:02:53.83 bitrate= 535.8kbits/s dup=0 drop=20850 speed=0.0971x
frame= 5217 fps=2.9 q=25.0 size=   11370kB time=00:02:53.86 bitrate= 535.7kbits/s dup=0 drop=20856 speed=0.097x
frame= 5219 fps=2.9 q=25.0 size=   11374kB time=00:02:53.93 bitrate= 535.7kbits/s dup=0 drop=20862 speed=0.0971x
frame= 5221 fps=2.9 q=25.0 size=   11377kB time=00:02:54.00 bitrate= 535.6kbits/s dup=0 drop=20870 speed=0.0971x
frame= 5222 fps=2.9 q=25.0 size=   11379kB time=00:02:54.03 bitrate= 535.6kbits/s dup=0 drop=20877 speed=0.097x
frame= 5224 fps=2.9 q=25.0 size=   11382kB time=00:02:54.10 bitrate= 535.6kbits/s dup=0 drop=20882 speed=0.0971x
frame= 5225 fps=2.9 q=25.0 size=   11384kB time=00:02:54.13 bitrate= 535.5kbits/s dup=0 drop=20888 speed=0.097x
frame= 5227 fps=2.9 q=25.0 size=   11387kB time=00:02:54.20 bitrate= 535.5kbits/s dup=0 drop=20894 speed=0.0971x
frame= 5228 fps=2.9 q=25.0 size=   11388kB time=00:02:54.23 bitrate= 535.5kbits/s dup=0 drop=20899 speed=0.097x
frame= 5230 fps=2.9 q=25.0 size=   11392kB time=00:02:54.30 bitrate= 535.4kbits/s dup=0 drop=20906 speed=0.0971x
frame= 5232 fps=2.9 q=25.0 size=   11395kB time=00:02:54.36 bitrate= 535.4kbits/s dup=0 drop=20914 speed=0.0971x
frame= 5233 fps=2.9 q=25.0 size=   11397kB time=00:02:54.40 bitrate= 535.3kbits/s dup=0 drop=20921 speed=0.097x
frame= 5235 fps=2.9 q=25.0 size=   11400kB time=00:02:54.46 bitrate= 535.3kbits/s dup=0 drop=20926 speed=0.0971x
frame= 5237 fps=2.9 q=25.0 size=   11403kB time=00:02:54.53 bitrate= 535.2kbits/s dup=0 drop=20934 speed=0.0971x
frame= 5238 fps=2.9 q=25.0 size=   11405kB time=00:02:54.56 bitrate= 535.2kbits/s dup=0 drop=20941 speed=0.0971x
frame= 5240 fps=2.9 q=26.0 size=   11421kB time=00:02:54.63 bitrate= 535.8kbits/s dup=0 drop=20946 speed=0.0971x
frame= 5241 fps=2.9 q=25.0 size=   11423kB time=00:02:54.66 bitrate= 535.7kbits/s dup=0 drop=20952 speed=0.0971x
frame= 5243 fps=2.9 q=25.0 size=   11428kB time=00:02:54.73 bitrate= 535.8kbits/s dup=0 drop=20958 speed=0.0971x
frame= 5244 fps=2.9 q=25.0 size=   11430kB time=00:02:54.76 bitrate= 535.8kbits/s dup=0 drop=20963 speed=0.0971x
frame= 5246 fps=2.9 q=25.0 size=   11434kB time=00:02:54.83 bitrate= 535.8kbits/s dup=0 drop=20970 speed=0.0971x
frame= 5247 fps=2.9 q=25.0 size=   11437kB time=00:02:54.86 bitrate= 535.8kbits/s dup=0 drop=20977 speed=0.0971x
frame= 5249 fps=2.9 q=25.0 size=   11441kB time=00:02:54.93 bitrate= 535.8kbits/s dup=0 drop=20982 speed=0.0971x
frame= 5250 fps=2.9 q=25.0 size=   11443kB time=00:02:54.96 bitrate= 535.7kbits/s dup=0 drop=20988 speed=0.0971x
frame= 5252 fps=2.9 q=25.0 size=   11447kB time=00:02:55.03 bitrate= 535.7kbits/s dup=0 drop=20994 speed=0.0971x
frame= 5253 fps=2.9 q=25.0 size=   11449kB time=00:02:55.06 bitrate= 535.7kbits/s dup=0 drop=21001 speed=0.0971x
frame= 5255 fps=2.9 q=25.0 size=   11452kB time=00:02:55.13 bitrate= 535.7kbits/s dup=0 drop=21006 speed=0.0971x
frame= 5257 fps=2.9 q=25.0 size=   11456kB time=00:02:55.20 bitrate= 535.7kbits/s dup=0 drop=21014 speed=0.0971x
frame= 5259 fps=2.9 q=25.0 size=   11460kB time=00:02:55.26 bitrate= 535.6kbits/s dup=0 drop=21022 speed=0.0971x
frame= 5260 fps=2.9 q=25.0 size=   11462kB time=00:02:55.30 bitrate= 535.6kbits/s dup=0 drop=21028 speed=0.0971x
frame= 5262 fps=2.9 q=25.0 size=   11466kB time=00:02:55.36 bitrate= 535.6kbits/s dup=0 drop=21034 speed=0.0971x
frame= 5264 fps=2.9 q=25.0 size=   11469kB time=00:02:55.43 bitrate= 535.6kbits/s dup=0 drop=21042 speed=0.0971x
frame= 5266 fps=2.9 q=25.0 size=   11473kB time=00:02:55.50 bitrate= 535.5kbits/s dup=0 drop=21050 speed=0.0971x
frame= 5267 fps=2.9 q=25.0 size=   11475kB time=00:02:55.53 bitrate= 535.5kbits/s dup=0 drop=21054 speed=0.0971x
frame= 5269 fps=2.9 q=25.0 size=   11479kB time=00:02:55.60 bitrate= 535.5kbits/s dup=0 drop=21062 speed=0.0971x
frame= 5270 fps=2.9 q=25.0 size=   11480kB time=00:02:55.63 bitrate= 535.5kbits/s dup=0 drop=21068 speed=0.0971x
frame= 5272 fps=2.9 q=25.0 size=   11484kB time=00:02:55.70 bitrate= 535.4kbits/s dup=0 drop=21074 speed=0.0971x
frame= 5274 fps=2.9 q=25.0 size=   11487kB time=00:02:55.76 bitrate= 535.4kbits/s dup=0 drop=21082 speed=0.0971x
frame= 5275 fps=2.9 q=25.0 size=   11489kB time=00:02:55.80 bitrate= 535.4kbits/s dup=0 drop=21089 speed=0.0971x
frame= 5277 fps=2.9 q=25.0 size=   11493kB time=00:02:55.86 bitrate= 535.3kbits/s dup=0 drop=21094 speed=0.0971x
frame= 5278 fps=2.9 q=25.0 size=   11495kB time=00:02:55.90 bitrate= 535.3kbits/s dup=0 drop=21099 speed=0.0971x
frame= 5279 fps=2.9 q=25.0 size=   11496kB time=00:02:55.93 bitrate= 535.3kbits/s dup=0 drop=21105 speed=0.0971x
frame= 5280 fps=2.9 q=25.0 size=   11498kB time=00:02:55.96 bitrate= 535.3kbits/s dup=0 drop=21109 speed=0.097x
frame= 5282 fps=2.9 q=25.0 size=   11502kB time=00:02:56.03 bitrate= 535.3kbits/s dup=0 drop=21114 speed=0.0971x
frame= 5283 fps=2.9 q=25.0 size=   11503kB time=00:02:56.06 bitrate= 535.2kbits/s dup=0 drop=21120 speed=0.097x
frame= 5285 fps=2.9 q=25.0 size=   11507kB time=00:02:56.13 bitrate= 535.2kbits/s dup=0 drop=21126 speed=0.097x
frame= 5286 fps=2.9 q=25.0 size=   11509kB time=00:02:56.16 bitrate= 535.2kbits/s dup=0 drop=21130 speed=0.097x
frame= 5287 fps=2.9 q=25.0 size=   11511kB time=00:02:56.20 bitrate= 535.2kbits/s dup=0 drop=21137 speed=0.097x
frame= 5289 fps=2.9 q=25.0 size=   11514kB time=00:02:56.26 bitrate= 535.1kbits/s dup=0 drop=21142 speed=0.097x
frame= 5290 fps=2.9 q=25.0 size=   11516kB time=00:02:56.30 bitrate= 535.1kbits/s dup=0 drop=21146 speed=0.097x
frame= 5291 fps=2.9 q=25.0 size=   11518kB time=00:02:56.33 bitrate= 535.1kbits/s dup=0 drop=21152 speed=0.097x
frame= 5292 fps=2.9 q=25.0 size=   11520kB time=00:02:56.36 bitrate= 535.1kbits/s dup=0 drop=21157 speed=0.097x
frame= 5294 fps=2.9 q=25.0 size=   11523kB time=00:02:56.43 bitrate= 535.0kbits/s dup=0 drop=21162 speed=0.097x
frame= 5295 fps=2.9 q=25.0 size=   11525kB time=00:02:56.46 bitrate= 535.0kbits/s dup=0 drop=21168 speed=0.097x
frame= 5297 fps=2.9 q=25.0 size=   11529kB time=00:02:56.53 bitrate= 535.0kbits/s dup=0 drop=21174 speed=0.097x
frame= 5298 fps=2.9 q=25.0 size=   11530kB time=00:02:56.56 bitrate= 535.0kbits/s dup=0 drop=21180 speed=0.097x
frame= 5300 fps=2.9 q=25.0 size=   11533kB time=00:02:56.63 bitrate= 534.9kbits/s dup=0 drop=21186 speed=0.097x
frame= 5301 fps=2.9 q=25.0 size=   11535kB time=00:02:56.66 bitrate= 534.9kbits/s dup=0 drop=21192 speed=0.097x
frame= 5302 fps=2.9 q=25.0 size=   11537kB time=00:02:56.70 bitrate= 534.9kbits/s dup=0 drop=21197 speed=0.097x
frame= 5304 fps=2.9 q=25.0 size=   11541kB time=00:02:56.76 bitrate= 534.8kbits/s dup=0 drop=21202 speed=0.097x
frame= 5305 fps=2.9 q=25.0 size=   11542kB time=00:02:56.80 bitrate= 534.8kbits/s dup=0 drop=21208 speed=0.097x
frame= 5307 fps=2.9 q=25.0 size=   11546kB time=00:02:56.86 bitrate= 534.8kbits/s dup=0 drop=21214 speed=0.097x
frame= 5308 fps=2.9 q=25.0 size=   11548kB time=00:02:56.90 bitrate= 534.8kbits/s dup=0 drop=21220 speed=0.097x
frame= 5310 fps=2.9 q=25.0 size=   11551kB time=00:02:56.96 bitrate= 534.7kbits/s dup=0 drop=21226 speed=0.097x
frame= 5312 fps=2.9 q=25.0 size=   11555kB time=00:02:57.03 bitrate= 534.7kbits/s dup=0 drop=21234 speed=0.097x
frame= 5313 fps=2.9 q=25.0 size=   11556kB time=00:02:57.06 bitrate= 534.7kbits/s dup=0 drop=21239 speed=0.097x
frame= 5314 fps=2.9 q=25.0 size=   11558kB time=00:02:57.10 bitrate= 534.6kbits/s dup=0 drop=21245 speed=0.097x
frame= 5316 fps=2.9 q=25.0 size=   11561kB time=00:02:57.16 bitrate= 534.6kbits/s dup=0 drop=21250 speed=0.097x
frame= 5317 fps=2.9 q=25.0 size=   11563kB time=00:02:57.20 bitrate= 534.6kbits/s dup=0 drop=21254 speed=0.097x
frame= 5318 fps=2.9 q=25.0 size=   11565kB time=00:02:57.23 bitrate= 534.6kbits/s dup=0 drop=21261 speed=0.097x
frame= 5320 fps=2.9 q=25.0 size=   11568kB time=00:02:57.30 bitrate= 534.5kbits/s dup=0 drop=21266 speed=0.097x
frame= 5321 fps=2.9 q=25.0 size=   11570kB time=00:02:57.33 bitrate= 534.5kbits/s dup=0 drop=21271 speed=0.097x
frame= 5323 fps=2.9 q=25.0 size=   11573kB time=00:02:57.40 bitrate= 534.4kbits/s dup=0 drop=21278 speed=0.097x
frame= 5324 fps=2.9 q=25.0 size=   11575kB time=00:02:57.43 bitrate= 534.4kbits/s dup=0 drop=21284 speed=0.097x
frame= 5326 fps=2.9 q=25.0 size=   11579kB time=00:02:57.50 bitrate= 534.4kbits/s dup=0 drop=21290 speed=0.097x
frame= 5327 fps=2.9 q=25.0 size=   11581kB time=00:02:57.53 bitrate= 534.4kbits/s dup=0 drop=21296 speed=0.097x
frame= 5329 fps=2.9 q=25.0 size=   11584kB time=00:02:57.60 bitrate= 534.3kbits/s dup=0 drop=21302 speed=0.097x
frame= 5330 fps=2.9 q=25.0 size=   11586kB time=00:02:57.63 bitrate= 534.3kbits/s dup=0 drop=21308 speed=0.097x
frame= 5332 fps=2.9 q=25.0 size=   11589kB time=00:02:57.70 bitrate= 534.3kbits/s dup=0 drop=21314 speed=0.097x
frame= 5333 fps=2.9 q=25.0 size=   11591kB time=00:02:57.73 bitrate= 534.2kbits/s dup=0 drop=21320 speed=0.097x
frame= 5335 fps=2.9 q=25.0 size=   11594kB time=00:02:57.80 bitrate= 534.2kbits/s dup=0 drop=21326 speed=0.097x
frame= 5337 fps=2.9 q=25.0 size=   11598kB time=00:02:57.86 bitrate= 534.2kbits/s dup=0 drop=21334 speed=0.097x
frame= 5338 fps=2.9 q=25.0 size=   11600kB time=00:02:57.90 bitrate= 534.1kbits/s dup=0 drop=21338 speed=0.097x
frame= 5339 fps=2.9 q=25.0 size=   11601kB time=00:02:57.93 bitrate= 534.1kbits/s dup=0 drop=21345 speed=0.097x
frame= 5341 fps=2.9 q=25.0 size=   11605kB time=00:02:58.00 bitrate= 534.1kbits/s dup=0 drop=21350 speed=0.097x
frame= 5343 fps=2.9 q=25.0 size=   11608kB time=00:02:58.06 bitrate= 534.0kbits/s dup=0 drop=21358 speed=0.097x
frame= 5345 fps=2.9 q=25.0 size=   11612kB time=00:02:58.13 bitrate= 534.0kbits/s dup=0 drop=21366 speed=0.097x
frame= 5346 fps=2.9 q=25.0 size=   11613kB time=00:02:58.16 bitrate= 534.0kbits/s dup=0 drop=21372 speed=0.097x
frame= 5348 fps=2.9 q=25.0 size=   11617kB time=00:02:58.23 bitrate= 533.9kbits/s dup=0 drop=21378 speed=0.097x
frame= 5349 fps=2.9 q=25.0 size=   11619kB time=00:02:58.26 bitrate= 533.9kbits/s dup=0 drop=21384 speed=0.097x
frame= 5350 fps=2.9 q=25.0 size=   11620kB time=00:02:58.30 bitrate= 533.9kbits/s dup=0 drop=21389 speed=0.097x
frame= 5352 fps=2.9 q=25.0 size=   11624kB time=00:02:58.36 bitrate= 533.9kbits/s dup=0 drop=21394 speed=0.097x
frame= 5354 fps=2.9 q=25.0 size=   11627kB time=00:02:58.43 bitrate= 533.8kbits/s dup=0 drop=21402 speed=0.097x
frame= 5355 fps=2.9 q=25.0 size=   11629kB time=00:02:58.46 bitrate= 533.8kbits/s dup=0 drop=21407 speed=0.097x
frame= 5356 fps=2.9 q=25.0 size=   11631kB time=00:02:58.50 bitrate= 533.8kbits/s dup=0 drop=21413 speed=0.097x
frame= 5358 fps=2.9 q=25.0 size=   11634kB time=00:02:58.56 bitrate= 533.7kbits/s dup=0 drop=21418 speed=0.097x
frame= 5359 fps=2.9 q=25.0 size=   11636kB time=00:02:58.60 bitrate= 533.7kbits/s dup=0 drop=21422 speed=0.097x
frame= 5360 fps=2.9 q=25.0 size=   11638kB time=00:02:58.63 bitrate= 533.7kbits/s dup=0 drop=21426 speed=0.0969x
frame= 5361 fps=2.9 q=25.0 size=   11639kB time=00:02:58.66 bitrate= 533.7kbits/s dup=0 drop=21430 speed=0.0969x
frame= 5362 fps=2.9 q=25.0 size=   11641kB time=00:02:58.70 bitrate= 533.7kbits/s dup=0 drop=21434 speed=0.0969x
frame= 5363 fps=2.9 q=25.0 size=   11643kB time=00:02:58.73 bitrate= 533.6kbits/s dup=0 drop=21441 speed=0.0969x
frame= 5365 fps=2.9 q=25.0 size=   11646kB time=00:02:58.80 bitrate= 533.6kbits/s dup=0 drop=21446 speed=0.0969x
frame= 5366 fps=2.9 q=25.0 size=   11648kB time=00:02:58.83 bitrate= 533.6kbits/s dup=0 drop=21451 speed=0.0969x
frame= 5368 fps=2.9 q=25.0 size=   11652kB time=00:02:58.90 bitrate= 533.5kbits/s dup=0 drop=21458 speed=0.0969x
frame= 5369 fps=2.9 q=25.0 size=   11653kB time=00:02:58.93 bitrate= 533.5kbits/s dup=0 drop=21465 speed=0.0969x
frame= 5371 fps=2.9 q=25.0 size=   11657kB time=00:02:59.00 bitrate= 533.5kbits/s dup=0 drop=21470 speed=0.0969x
frame= 5373 fps=2.9 q=25.0 size=   11660kB time=00:02:59.06 bitrate= 533.4kbits/s dup=0 drop=21478 speed=0.0969x
frame= 5374 fps=2.9 q=25.0 size=   11662kB time=00:02:59.10 bitrate= 533.4kbits/s dup=0 drop=21484 speed=0.0969x
frame= 5376 fps=2.9 q=25.0 size=   11666kB time=00:02:59.16 bitrate= 533.4kbits/s dup=0 drop=21490 speed=0.0969x
frame= 5377 fps=2.9 q=25.0 size=   11667kB time=00:02:59.20 bitrate= 533.4kbits/s dup=0 drop=21496 speed=0.0969x
frame= 5379 fps=2.9 q=25.0 size=   11671kB time=00:02:59.26 bitrate= 533.3kbits/s dup=0 drop=21502 speed=0.0969x
frame= 5381 fps=2.9 q=25.0 size=   11674kB time=00:02:59.33 bitrate= 533.3kbits/s dup=0 drop=21510 speed=0.0969x
frame= 5383 fps=2.9 q=25.0 size=   11678kB time=00:02:59.40 bitrate= 533.2kbits/s dup=0 drop=21518 speed=0.0969x
frame= 5384 fps=2.9 q=25.0 size=   11679kB time=00:02:59.43 bitrate= 533.2kbits/s dup=0 drop=21524 speed=0.0969x
frame= 5386 fps=2.9 q=25.0 size=   11683kB time=00:02:59.50 bitrate= 533.2kbits/s dup=0 drop=21530 speed=0.0969x
frame= 5387 fps=2.9 q=25.0 size=   11684kB time=00:02:59.53 bitrate= 533.2kbits/s dup=0 drop=21535 speed=0.0969x
frame= 5389 fps=2.9 q=25.0 size=   11688kB time=00:02:59.60 bitrate= 533.1kbits/s dup=0 drop=21542 speed=0.0969x
frame= 5390 fps=2.9 q=25.0 size=   11689kB time=00:02:59.63 bitrate= 533.1kbits/s dup=0 drop=21549 speed=0.0969x
frame= 5392 fps=2.9 q=25.0 size=   11693kB time=00:02:59.70 bitrate= 533.0kbits/s dup=0 drop=21554 speed=0.0969x
frame= 5393 fps=2.9 q=25.0 size=   11694kB time=00:02:59.73 bitrate= 533.0kbits/s dup=0 drop=21561 speed=0.0969x
frame= 5395 fps=2.9 q=25.0 size=   11698kB time=00:02:59.80 bitrate= 533.0kbits/s dup=0 drop=21566 speed=0.0969x
frame= 5396 fps=2.9 q=25.0 size=   11700kB time=00:02:59.83 bitrate= 533.0kbits/s dup=0 drop=21570 speed=0.0969x
frame= 5397 fps=2.9 q=25.0 size=   11702kB time=00:02:59.86 bitrate= 532.9kbits/s dup=0 drop=21574 speed=0.0969x
frame= 5398 fps=2.9 q=25.0 size=   11703kB time=00:02:59.90 bitrate= 532.9kbits/s dup=0 drop=21578 speed=0.0969x
frame= 5399 fps=2.9 q=25.0 size=   11705kB time=00:02:59.93 bitrate= 532.9kbits/s dup=0 drop=21582 speed=0.0969x
frame= 5400 fps=2.9 q=25.0 size=   11707kB time=00:02:59.96 bitrate= 532.9kbits/s dup=0 drop=21586 speed=0.0969x
frame= 5401 fps=2.9 q=25.0 size=   11708kB time=00:03:00.00 bitrate= 532.9kbits/s dup=0 drop=21593 speed=0.0969x
frame= 5403 fps=2.9 q=25.0 size=   11712kB time=00:03:00.06 bitrate= 532.8kbits/s dup=0 drop=21598 speed=0.0969x
frame= 5404 fps=2.9 q=25.0 size=   11714kB time=00:03:00.10 bitrate= 532.8kbits/s dup=0 drop=21602 speed=0.0969x
frame= 5406 fps=2.9 q=25.0 size=   11717kB time=00:03:00.16 bitrate= 532.8kbits/s dup=0 drop=21610 speed=0.0969x
frame= 5408 fps=2.9 q=25.0 size=   11721kB time=00:03:00.23 bitrate= 532.7kbits/s dup=0 drop=21618 speed=0.0969x
frame= 5410 fps=2.9 q=25.0 size=   11724kB time=00:03:00.30 bitrate= 532.7kbits/s dup=0 drop=21626 speed=0.0969x
frame= 5411 fps=2.9 q=25.0 size=   11726kB time=00:03:00.33 bitrate= 532.7kbits/s dup=0 drop=21632 speed=0.0969x
frame= 5413 fps=2.9 q=25.0 size=   11729kB time=00:03:00.40 bitrate= 532.6kbits/s dup=0 drop=21638 speed=0.0969x
frame= 5414 fps=2.9 q=25.0 size=   11731kB time=00:03:00.43 bitrate= 532.6kbits/s dup=0 drop=21642 speed=0.0969x
frame= 5415 fps=2.9 q=25.0 size=   11733kB time=00:03:00.46 bitrate= 532.6kbits/s dup=0 drop=21648 speed=0.0969x
frame= 5417 fps=2.9 q=25.0 size=   11736kB time=00:03:00.53 bitrate= 532.6kbits/s dup=0 drop=21654 speed=0.0969x
frame= 5418 fps=2.9 q=25.0 size=   11738kB time=00:03:00.56 bitrate= 532.5kbits/s dup=0 drop=21661 speed=0.0969x
frame= 5420 fps=2.9 q=25.0 size=   11742kB time=00:03:00.63 bitrate= 532.5kbits/s dup=0 drop=21666 speed=0.0969x
frame= 5422 fps=2.9 q=25.0 size=   11745kB time=00:03:00.70 bitrate= 532.5kbits/s dup=0 drop=21674 speed=0.0969x
frame= 5423 fps=2.9 q=25.0 size=   11747kB time=00:03:00.73 bitrate= 532.4kbits/s dup=0 drop=21680 speed=0.0969x
frame= 5424 fps=2.9 q=25.0 size=   11749kB time=00:03:00.76 bitrate= 532.4kbits/s dup=0 drop=21685 speed=0.0969x
frame= 5426 fps=2.9 q=25.0 size=   11752kB time=00:03:00.83 bitrate= 532.4kbits/s dup=0 drop=21690 speed=0.0969x
frame= 5427 fps=2.9 q=25.0 size=   11754kB time=00:03:00.86 bitrate= 532.4kbits/s dup=0 drop=21697 speed=0.0969x
frame= 5428 fps=2.9 q=25.0 size=   11756kB time=00:03:00.90 bitrate= 532.4kbits/s dup=0 drop=21701 speed=0.0969x
frame= 5430 fps=2.9 q=25.0 size=   11759kB time=00:03:00.96 bitrate= 532.3kbits/s dup=0 drop=21706 speed=0.0969x
frame= 5431 fps=2.9 q=25.0 size=   11761kB time=00:03:01.00 bitrate= 532.3kbits/s dup=0 drop=21711 speed=0.0969x
frame= 5433 fps=2.9 q=25.0 size=   11764kB time=00:03:01.06 bitrate= 532.2kbits/s dup=0 drop=21718 speed=0.0969x
frame= 5434 fps=2.9 q=25.0 size=   11766kB time=00:03:01.10 bitrate= 532.2kbits/s dup=0 drop=21722 speed=0.0968x
frame= 5435 fps=2.9 q=25.0 size=   11768kB time=00:03:01.13 bitrate= 532.2kbits/s dup=0 drop=21728 speed=0.0968x
frame= 5437 fps=2.9 q=25.0 size=   11771kB time=00:03:01.20 bitrate= 532.2kbits/s dup=0 drop=21734 speed=0.0968x
frame= 5438 fps=2.9 q=25.0 size=   11773kB time=00:03:01.23 bitrate= 532.2kbits/s dup=0 drop=21740 speed=0.0968x
frame= 5440 fps=2.9 q=25.0 size=   11776kB time=00:03:01.30 bitrate= 532.1kbits/s dup=0 drop=21746 speed=0.0968x
frame= 5441 fps=2.9 q=25.0 size=   11778kB time=00:03:01.33 bitrate= 532.1kbits/s dup=0 drop=21752 speed=0.0968x
frame= 5443 fps=2.9 q=25.0 size=   11782kB time=00:03:01.40 bitrate= 532.1kbits/s dup=0 drop=21758 speed=0.0968x
frame= 5444 fps=2.9 q=25.0 size=   11783kB time=00:03:01.43 bitrate= 532.0kbits/s dup=0 drop=21764 speed=0.0968x
frame= 5446 fps=2.9 q=25.0 size=   11787kB time=00:03:01.50 bitrate= 532.0kbits/s dup=0 drop=21770 speed=0.0968x
frame= 5447 fps=2.9 q=25.0 size=   11788kB time=00:03:01.53 bitrate= 532.0kbits/s dup=0 drop=21777 speed=0.0968x
frame= 5449 fps=2.9 q=25.0 size=   11792kB time=00:03:01.60 bitrate= 531.9kbits/s dup=0 drop=21782 speed=0.0968x
frame= 5450 fps=2.9 q=25.0 size=   11794kB time=00:03:01.63 bitrate= 531.9kbits/s dup=0 drop=21788 speed=0.0968x
frame= 5452 fps=2.9 q=25.0 size=   11797kB time=00:03:01.70 bitrate= 531.9kbits/s dup=0 drop=21794 speed=0.0968x
frame= 5454 fps=2.9 q=25.0 size=   11800kB time=00:03:01.76 bitrate= 531.8kbits/s dup=0 drop=21802 speed=0.0968x
frame= 5456 fps=2.9 q=25.0 size=   11804kB time=00:03:01.83 bitrate= 531.8kbits/s dup=0 drop=21810 speed=0.0968x
frame= 5457 fps=2.9 q=25.0 size=   11806kB time=00:03:01.86 bitrate= 531.8kbits/s dup=0 drop=21817 speed=0.0968x
frame= 5459 fps=2.9 q=25.0 size=   11809kB time=00:03:01.93 bitrate= 531.7kbits/s dup=0 drop=21822 speed=0.0968x
frame= 5460 fps=2.9 q=25.0 size=   11811kB time=00:03:01.96 bitrate= 531.7kbits/s dup=0 drop=21826 speed=0.0968x
frame= 5461 fps=2.9 q=25.0 size=   11812kB time=00:03:02.00 bitrate= 531.7kbits/s dup=0 drop=21833 speed=0.0968x
frame= 5463 fps=2.9 q=25.0 size=   11816kB time=00:03:02.06 bitrate= 531.6kbits/s dup=0 drop=21838 speed=0.0968x
frame= 5464 fps=2.9 q=25.0 size=   11817kB time=00:03:02.10 bitrate= 531.6kbits/s dup=0 drop=21842 speed=0.0968x
frame= 5465 fps=2.9 q=25.0 size=   11819kB time=00:03:02.13 bitrate= 531.6kbits/s dup=0 drop=21847 speed=0.0968x
frame= 5466 fps=2.9 q=25.0 size=   11821kB time=00:03:02.16 bitrate= 531.6kbits/s dup=0 drop=21853 speed=0.0968x
frame= 5468 fps=2.9 q=25.0 size=   11824kB time=00:03:02.23 bitrate= 531.5kbits/s dup=0 drop=21858 speed=0.0968x
frame= 5469 fps=2.9 q=25.0 size=   11826kB time=00:03:02.26 bitrate= 531.5kbits/s dup=0 drop=21863 speed=0.0968x
frame= 5471 fps=2.9 q=25.0 size=   11830kB time=00:03:02.33 bitrate= 531.5kbits/s dup=0 drop=21870 speed=0.0968x
frame= 5472 fps=2.9 q=25.0 size=   11831kB time=00:03:02.36 bitrate= 531.5kbits/s dup=0 drop=21876 speed=0.0968x
frame= 5474 fps=2.9 q=25.0 size=   11835kB time=00:03:02.43 bitrate= 531.4kbits/s dup=0 drop=21882 speed=0.0968x
frame= 5475 fps=2.9 q=25.0 size=   11837kB time=00:03:02.46 bitrate= 531.4kbits/s dup=0 drop=21887 speed=0.0968x
frame= 5476 fps=2.9 q=25.0 size=   11838kB time=00:03:02.50 bitrate= 531.4kbits/s dup=0 drop=21893 speed=0.0968x
frame= 5478 fps=2.9 q=25.0 size=   11842kB time=00:03:02.56 bitrate= 531.4kbits/s dup=0 drop=21898 speed=0.0968x
frame= 5479 fps=2.9 q=25.0 size=   11844kB time=00:03:02.60 bitrate= 531.3kbits/s dup=0 drop=21902 speed=0.0968x
frame= 5480 fps=2.9 q=25.0 size=   11845kB time=00:03:02.63 bitrate= 531.3kbits/s dup=0 drop=21909 speed=0.0968x
frame= 5482 fps=2.9 q=25.0 size=   11849kB time=00:03:02.70 bitrate= 531.3kbits/s dup=0 drop=21914 speed=0.0968x
frame= 5483 fps=2.9 q=25.0 size=   11850kB time=00:03:02.73 bitrate= 531.3kbits/s dup=0 drop=21918 speed=0.0968x
frame= 5484 fps=2.9 q=25.0 size=   11852kB time=00:03:02.76 bitrate= 531.2kbits/s dup=0 drop=21923 speed=0.0968x
frame= 5486 fps=2.9 q=25.0 size=   11855kB time=00:03:02.83 bitrate= 531.2kbits/s dup=0 drop=21930 speed=0.0968x
frame= 5487 fps=2.9 q=25.0 size=   11857kB time=00:03:02.86 bitrate= 531.2kbits/s dup=0 drop=21937 speed=0.0968x
frame= 5489 fps=2.9 q=22.0 size=   11873kB time=00:03:02.93 bitrate= 531.7kbits/s dup=0 drop=21942 speed=0.0968x
frame= 5491 fps=2.9 q=25.0 size=   11877kB time=00:03:03.00 bitrate= 531.7kbits/s dup=0 drop=21951 speed=0.0968x
frame= 5493 fps=2.9 q=25.0 size=   11881kB time=00:03:03.06 bitrate= 531.7kbits/s dup=0 drop=21958 speed=0.0968x
frame= 5494 fps=2.9 q=25.0 size=   11883kB time=00:03:03.10 bitrate= 531.6kbits/s dup=0 drop=21964 speed=0.0968x
frame= 5496 fps=2.9 q=25.0 size=   11887kB time=00:03:03.16 bitrate= 531.6kbits/s dup=0 drop=21970 speed=0.0968x
frame= 5498 fps=2.9 q=25.0 size=   11891kB time=00:03:03.23 bitrate= 531.6kbits/s dup=0 drop=21978 speed=0.0968x
frame= 5499 fps=2.9 q=25.0 size=   11893kB time=00:03:03.26 bitrate= 531.6kbits/s dup=0 drop=21983 speed=0.0968x
frame= 5500 fps=2.9 q=25.0 size=   11894kB time=00:03:03.30 bitrate= 531.6kbits/s dup=0 drop=21987 speed=0.0968x
frame= 5502 fps=2.9 q=25.0 size=   11898kB time=00:03:03.36 bitrate= 531.6kbits/s dup=0 drop=21994 speed=0.0968x
frame= 5503 fps=2.9 q=25.0 size=   11900kB time=00:03:03.40 bitrate= 531.5kbits/s dup=0 drop=21998 speed=0.0968x
frame= 5505 fps=2.9 q=25.0 size=   11904kB time=00:03:03.46 bitrate= 531.5kbits/s dup=0 drop=22006 speed=0.0968x
frame= 5506 fps=2.9 q=25.0 size=   11906kB time=00:03:03.50 bitrate= 531.5kbits/s dup=0 drop=22010 speed=0.0968x
frame= 5507 fps=2.9 q=25.0 size=   11908kB time=00:03:03.53 bitrate= 531.5kbits/s dup=0 drop=22016 speed=0.0968x
frame= 5509 fps=2.9 q=25.0 size=   11912kB time=00:03:03.60 bitrate= 531.5kbits/s dup=0 drop=22022 speed=0.0968x
frame= 5510 fps=2.9 q=25.0 size=   11913kB time=00:03:03.63 bitrate= 531.5kbits/s dup=0 drop=22028 speed=0.0968x
frame= 5512 fps=2.9 q=25.0 size=   11917kB time=00:03:03.70 bitrate= 531.4kbits/s dup=0 drop=22034 speed=0.0968x
frame= 5513 fps=2.9 q=25.0 size=   11919kB time=00:03:03.73 bitrate= 531.4kbits/s dup=0 drop=22039 speed=0.0968x
frame= 5515 fps=2.9 q=25.0 size=   11923kB time=00:03:03.80 bitrate= 531.4kbits/s dup=0 drop=22046 speed=0.0968x
frame= 5516 fps=2.9 q=25.0 size=   11925kB time=00:03:03.83 bitrate= 531.4kbits/s dup=0 drop=22052 speed=0.0968x
frame= 5518 fps=2.9 q=25.0 size=   11928kB time=00:03:03.90 bitrate= 531.4kbits/s dup=0 drop=22058 speed=0.0968x
frame= 5519 fps=2.9 q=25.0 size=   11930kB time=00:03:03.93 bitrate= 531.3kbits/s dup=0 drop=22062 speed=0.0968x
frame= 5520 fps=2.9 q=25.0 size=   11932kB time=00:03:03.96 bitrate= 531.3kbits/s dup=0 drop=22068 speed=0.0968x
frame= 5522 fps=2.9 q=25.0 size=   11935kB time=00:03:04.03 bitrate= 531.3kbits/s dup=0 drop=22074 speed=0.0968x
frame= 5524 fps=2.9 q=25.0 size=   11939kB time=00:03:04.10 bitrate= 531.3kbits/s dup=0 drop=22082 speed=0.0968x
frame= 5525 fps=2.9 q=25.0 size=   11941kB time=00:03:04.13 bitrate= 531.2kbits/s dup=0 drop=22087 speed=0.0968x
frame= 5527 fps=2.9 q=25.0 size=   11944kB time=00:03:04.20 bitrate= 531.2kbits/s dup=0 drop=22094 speed=0.0968x
frame= 5528 fps=2.9 q=25.0 size=   11946kB time=00:03:04.23 bitrate= 531.2kbits/s dup=0 drop=22099 speed=0.0968x
frame= 5529 fps=2.9 q=25.0 size=   11948kB time=00:03:04.26 bitrate= 531.2kbits/s dup=0 drop=22105 speed=0.0967x
frame= 5531 fps=2.9 q=25.0 size=   11951kB time=00:03:04.33 bitrate= 531.1kbits/s dup=0 drop=22110 speed=0.0968x
frame= 5532 fps=2.9 q=25.0 size=   11953kB time=00:03:04.36 bitrate= 531.1kbits/s dup=0 drop=22114 speed=0.0967x
frame= 5533 fps=2.9 q=25.0 size=   11955kB time=00:03:04.40 bitrate= 531.1kbits/s dup=0 drop=22121 speed=0.0967x
frame= 5535 fps=2.9 q=25.0 size=   11958kB time=00:03:04.46 bitrate= 531.0kbits/s dup=0 drop=22126 speed=0.0967x
frame= 5536 fps=2.9 q=25.0 size=   11960kB time=00:03:04.50 bitrate= 531.0kbits/s dup=0 drop=22131 speed=0.0967x
frame= 5537 fps=2.9 q=25.0 size=   11962kB time=00:03:04.53 bitrate= 531.0kbits/s dup=0 drop=22136 speed=0.0967x
frame= 5539 fps=2.9 q=25.0 size=   11965kB time=00:03:04.60 bitrate= 531.0kbits/s dup=0 drop=22142 speed=0.0967x
frame= 5540 fps=2.9 q=25.0 size=   11967kB time=00:03:04.63 bitrate= 531.0kbits/s dup=0 drop=22146 speed=0.0967x
frame= 5541 fps=2.9 q=25.0 size=   11969kB time=00:03:04.66 bitrate= 530.9kbits/s dup=0 drop=22151 speed=0.0967x
frame= 5542 fps=2.9 q=25.0 size=   11970kB time=00:03:04.70 bitrate= 530.9kbits/s dup=0 drop=22157 speed=0.0967x
frame= 5544 fps=2.9 q=25.0 size=   11974kB time=00:03:04.76 bitrate= 530.9kbits/s dup=0 drop=22162 speed=0.0967x
frame= 5545 fps=2.9 q=25.0 size=   11976kB time=00:03:04.80 bitrate= 530.9kbits/s dup=0 drop=22167 speed=0.0967x
frame= 5547 fps=2.9 q=25.0 size=   11979kB time=00:03:04.86 bitrate= 530.8kbits/s dup=0 drop=22174 speed=0.0967x
frame= 5548 fps=2.9 q=25.0 size=   11981kB time=00:03:04.90 bitrate= 530.8kbits/s dup=0 drop=22181 speed=0.0967x
frame= 5550 fps=2.9 q=25.0 size=   11984kB time=00:03:04.96 bitrate= 530.8kbits/s dup=0 drop=22186 speed=0.0967x
frame= 5552 fps=2.9 q=25.0 size=   11988kB time=00:03:05.03 bitrate= 530.7kbits/s dup=0 drop=22194 speed=0.0967x
frame= 5554 fps=2.9 q=25.0 size=   11991kB time=00:03:05.10 bitrate= 530.7kbits/s dup=0 drop=22202 speed=0.0967x
frame= 5555 fps=2.9 q=25.0 size=   11993kB time=00:03:05.13 bitrate= 530.7kbits/s dup=0 drop=22207 speed=0.0967x
frame= 5556 fps=2.9 q=25.0 size=   11994kB time=00:03:05.16 bitrate= 530.7kbits/s dup=0 drop=22213 speed=0.0967x
frame= 5558 fps=2.9 q=25.0 size=   11998kB time=00:03:05.23 bitrate= 530.6kbits/s dup=0 drop=22218 speed=0.0967x
frame= 5559 fps=2.9 q=25.0 size=   12000kB time=00:03:05.26 bitrate= 530.6kbits/s dup=0 drop=22223 speed=0.0967x
frame= 5561 fps=2.9 q=25.0 size=   12003kB time=00:03:05.33 bitrate= 530.6kbits/s dup=0 drop=22230 speed=0.0967x
frame= 5563 fps=2.9 q=25.0 size=   12007kB time=00:03:05.40 bitrate= 530.5kbits/s dup=0 drop=22238 speed=0.0967x
frame= 5565 fps=2.9 q=25.0 size=   12010kB time=00:03:05.46 bitrate= 530.5kbits/s dup=0 drop=22246 speed=0.0967x
frame= 5566 fps=2.9 q=25.0 size=   12012kB time=00:03:05.50 bitrate= 530.5kbits/s dup=0 drop=22252 speed=0.0967x
frame= 5568 fps=2.9 q=25.0 size=   12015kB time=00:03:05.56 bitrate= 530.4kbits/s dup=0 drop=22258 speed=0.0967x
frame= 5569 fps=2.9 q=25.0 size=   12017kB time=00:03:05.60 bitrate= 530.4kbits/s dup=0 drop=22262 speed=0.0967x
frame= 5570 fps=2.9 q=25.0 size=   12019kB time=00:03:05.63 bitrate= 530.4kbits/s dup=0 drop=22267 speed=0.0967x
frame= 5571 fps=2.9 q=25.0 size=   12021kB time=00:03:05.66 bitrate= 530.4kbits/s dup=0 drop=22272 speed=0.0967x
frame= 5573 fps=2.9 q=25.0 size=   12024kB time=00:03:05.73 bitrate= 530.3kbits/s dup=0 drop=22278 speed=0.0967x
frame= 5574 fps=2.9 q=25.0 size=   12026kB time=00:03:05.76 bitrate= 530.3kbits/s dup=0 drop=22283 speed=0.0967x
frame= 5575 fps=2.9 q=25.0 size=   12028kB time=00:03:05.80 bitrate= 530.3kbits/s dup=0 drop=22289 speed=0.0967x
frame= 5577 fps=2.9 q=25.0 size=   12031kB time=00:03:05.86 bitrate= 530.3kbits/s dup=0 drop=22294 speed=0.0967x
frame= 5578 fps=2.9 q=25.0 size=   12033kB time=00:03:05.90 bitrate= 530.2kbits/s dup=0 drop=22298 speed=0.0967x
frame= 5579 fps=2.9 q=25.0 size=   12035kB time=00:03:05.93 bitrate= 530.2kbits/s dup=0 drop=22303 speed=0.0967x
frame= 5580 fps=2.9 q=25.0 size=   12036kB time=00:03:05.96 bitrate= 530.2kbits/s dup=0 drop=22309 speed=0.0967x
frame= 5582 fps=2.9 q=25.0 size=   12040kB time=00:03:06.03 bitrate= 530.2kbits/s dup=0 drop=22314 speed=0.0967x
frame= 5583 fps=2.9 q=25.0 size=   12042kB time=00:03:06.06 bitrate= 530.2kbits/s dup=0 drop=22320 speed=0.0967x
frame= 5585 fps=2.9 q=25.0 size=   12045kB time=00:03:06.13 bitrate= 530.1kbits/s dup=0 drop=22326 speed=0.0967x
frame= 5586 fps=2.9 q=25.0 size=   12047kB time=00:03:06.16 bitrate= 530.1kbits/s dup=0 drop=22332 speed=0.0967x
frame= 5588 fps=2.9 q=25.0 size=   12050kB time=00:03:06.23 bitrate= 530.1kbits/s dup=0 drop=22338 speed=0.0967x
frame= 5589 fps=2.9 q=25.0 size=   12052kB time=00:03:06.26 bitrate= 530.0kbits/s dup=0 drop=22343 speed=0.0967x
frame= 5590 fps=2.9 q=25.0 size=   12053kB time=00:03:06.30 bitrate= 530.0kbits/s dup=0 drop=22349 speed=0.0967x
frame= 5592 fps=2.9 q=25.0 size=   12057kB time=00:03:06.36 bitrate= 530.0kbits/s dup=0 drop=22354 speed=0.0967x
frame= 5594 fps=2.9 q=25.0 size=   12060kB time=00:03:06.43 bitrate= 529.9kbits/s dup=0 drop=22362 speed=0.0967x
frame= 5595 fps=2.9 q=25.0 size=   12062kB time=00:03:06.46 bitrate= 529.9kbits/s dup=0 drop=22369 speed=0.0967x
frame= 5597 fps=2.9 q=25.0 size=   12066kB time=00:03:06.53 bitrate= 529.9kbits/s dup=0 drop=22374 speed=0.0967x
frame= 5598 fps=2.9 q=25.0 size=   12067kB time=00:03:06.56 bitrate= 529.9kbits/s dup=0 drop=22381 speed=0.0967x
frame= 5600 fps=2.9 q=25.0 size=   12071kB time=00:03:06.63 bitrate= 529.8kbits/s dup=0 drop=22386 speed=0.0967x
frame= 5601 fps=2.9 q=25.0 size=   12073kB time=00:03:06.66 bitrate= 529.8kbits/s dup=0 drop=22391 speed=0.0967x
frame= 5602 fps=2.9 q=25.0 size=   12074kB time=00:03:06.70 bitrate= 529.8kbits/s dup=0 drop=22397 speed=0.0967x
frame= 5604 fps=2.9 q=25.0 size=   12078kB time=00:03:06.76 bitrate= 529.8kbits/s dup=0 drop=22402 speed=0.0967x
frame= 5605 fps=2.9 q=25.0 size=   12080kB time=00:03:06.80 bitrate= 529.7kbits/s dup=0 drop=22406 speed=0.0967x
frame= 5606 fps=2.9 q=25.0 size=   12081kB time=00:03:06.83 bitrate= 529.7kbits/s dup=0 drop=22411 speed=0.0967x
frame= 5607 fps=2.9 q=25.0 size=   12083kB time=00:03:06.86 bitrate= 529.7kbits/s dup=0 drop=22417 speed=0.0967x
frame= 5609 fps=2.9 q=25.0 size=   12086kB time=00:03:06.93 bitrate= 529.7kbits/s dup=0 drop=22422 speed=0.0967x
frame= 5610 fps=2.9 q=25.0 size=   12088kB time=00:03:06.96 bitrate= 529.6kbits/s dup=0 drop=22426 speed=0.0967x
frame= 5611 fps=2.9 q=25.0 size=   12090kB time=00:03:07.00 bitrate= 529.6kbits/s dup=0 drop=22433 speed=0.0966x
frame= 5612 fps=2.9 q=25.0 size=   12092kB time=00:03:07.03 bitrate= 529.6kbits/s dup=0 drop=22437 speed=0.0966x
frame= 5614 fps=2.9 q=25.0 size=   12095kB time=00:03:07.10 bitrate= 529.6kbits/s dup=0 drop=22442 speed=0.0966x
frame= 5615 fps=2.9 q=25.0 size=   12097kB time=00:03:07.13 bitrate= 529.6kbits/s dup=0 drop=22446 speed=0.0966x
frame= 5616 fps=2.9 q=25.0 size=   12099kB time=00:03:07.16 bitrate= 529.5kbits/s dup=0 drop=22453 speed=0.0966x
frame= 5618 fps=2.9 q=25.0 size=   12102kB time=00:03:07.23 bitrate= 529.5kbits/s dup=0 drop=22458 speed=0.0966x
frame= 5619 fps=2.9 q=25.0 size=   12104kB time=00:03:07.26 bitrate= 529.5kbits/s dup=0 drop=22462 speed=0.0966x
frame= 5621 fps=2.9 q=25.0 size=   12107kB time=00:03:07.33 bitrate= 529.4kbits/s dup=0 drop=22470 speed=0.0966x
frame= 5622 fps=2.9 q=25.0 size=   12109kB time=00:03:07.36 bitrate= 529.4kbits/s dup=0 drop=22475 speed=0.0966x
frame= 5624 fps=2.9 q=25.0 size=   12112kB time=00:03:07.43 bitrate= 529.4kbits/s dup=0 drop=22482 speed=0.0966x
frame= 5625 fps=2.9 q=25.0 size=   12114kB time=00:03:07.46 bitrate= 529.4kbits/s dup=0 drop=22486 speed=0.0966x
frame= 5627 fps=2.9 q=25.0 size=   12118kB time=00:03:07.53 bitrate= 529.3kbits/s dup=0 drop=22494 speed=0.0966x
frame= 5628 fps=2.9 q=25.0 size=   12119kB time=00:03:07.56 bitrate= 529.3kbits/s dup=0 drop=22498 speed=0.0966x
frame= 5630 fps=2.9 q=25.0 size=   12123kB time=00:03:07.63 bitrate= 529.3kbits/s dup=0 drop=22506 speed=0.0966x
frame= 5631 fps=2.9 q=25.0 size=   12124kB time=00:03:07.66 bitrate= 529.3kbits/s dup=0 drop=22512 speed=0.0966x
frame= 5633 fps=2.9 q=25.0 size=   12128kB time=00:03:07.73 bitrate= 529.2kbits/s dup=0 drop=22518 speed=0.0966x
frame= 5634 fps=2.9 q=25.0 size=   12129kB time=00:03:07.76 bitrate= 529.2kbits/s dup=0 drop=22524 speed=0.0966x
frame= 5636 fps=2.9 q=25.0 size=   12133kB time=00:03:07.83 bitrate= 529.1kbits/s dup=0 drop=22530 speed=0.0966x
frame= 5637 fps=2.9 q=25.0 size=   12134kB time=00:03:07.86 bitrate= 529.1kbits/s dup=0 drop=22535 speed=0.0966x
frame= 5638 fps=2.9 q=25.0 size=   12136kB time=00:03:07.90 bitrate= 529.1kbits/s dup=0 drop=22541 speed=0.0966x
frame= 5639 fps=2.9 q=25.0 size=   12138kB time=00:03:07.93 bitrate= 529.1kbits/s dup=0 drop=22545 speed=0.0966x
frame= 5641 fps=2.9 q=25.0 size=   12141kB time=00:03:08.00 bitrate= 529.0kbits/s dup=0 drop=22550 speed=0.0966x
frame= 5642 fps=2.9 q=25.0 size=   12143kB time=00:03:08.03 bitrate= 529.0kbits/s dup=0 drop=22554 speed=0.0966x
frame= 5643 fps=2.9 q=25.0 size=   12145kB time=00:03:08.06 bitrate= 529.0kbits/s dup=0 drop=22559 speed=0.0966x
frame= 5644 fps=2.9 q=25.0 size=   12146kB time=00:03:08.10 bitrate= 529.0kbits/s dup=0 drop=22565 speed=0.0966x
frame= 5646 fps=2.9 q=25.0 size=   12150kB time=00:03:08.16 bitrate= 528.9kbits/s dup=0 drop=22570 speed=0.0966x
frame= 5647 fps=2.9 q=25.0 size=   12151kB time=00:03:08.20 bitrate= 528.9kbits/s dup=0 drop=22574 speed=0.0966x
frame= 5649 fps=2.9 q=25.0 size=   12155kB time=00:03:08.26 bitrate= 528.9kbits/s dup=0 drop=22582 speed=0.0966x
frame= 5650 fps=2.9 q=25.0 size=   12156kB time=00:03:08.30 bitrate= 528.9kbits/s dup=0 drop=22587 speed=0.0966x
frame= 5652 fps=2.9 q=25.0 size=   12160kB time=00:03:08.36 bitrate= 528.8kbits/s dup=0 drop=22594 speed=0.0966x
frame= 5653 fps=2.9 q=25.0 size=   12162kB time=00:03:08.40 bitrate= 528.8kbits/s dup=0 drop=22599 speed=0.0966x
frame= 5655 fps=2.9 q=25.0 size=   12165kB time=00:03:08.46 bitrate= 528.8kbits/s dup=0 drop=22606 speed=0.0966x
frame= 5656 fps=2.9 q=25.0 size=   12167kB time=00:03:08.50 bitrate= 528.8kbits/s dup=0 drop=22611 speed=0.0966x
frame= 5657 fps=2.9 q=25.0 size=   12169kB time=00:03:08.53 bitrate= 528.7kbits/s dup=0 drop=22615 speed=0.0966x
frame= 5658 fps=2.9 q=25.0 size=   12170kB time=00:03:08.56 bitrate= 528.7kbits/s dup=0 drop=22621 speed=0.0966x
frame= 5660 fps=2.9 q=25.0 size=   12174kB time=00:03:08.63 bitrate= 528.7kbits/s dup=0 drop=22626 speed=0.0966x
frame= 5661 fps=2.9 q=25.0 size=   12176kB time=00:03:08.66 bitrate= 528.7kbits/s dup=0 drop=22630 speed=0.0966x
frame= 5662 fps=2.9 q=25.0 size=   12177kB time=00:03:08.70 bitrate= 528.6kbits/s dup=0 drop=22636 speed=0.0965x
frame= 5663 fps=2.9 q=25.0 size=   12179kB time=00:03:08.73 bitrate= 528.6kbits/s dup=0 drop=22641 speed=0.0965x
frame= 5665 fps=2.9 q=25.0 size=   12182kB time=00:03:08.80 bitrate= 528.6kbits/s dup=0 drop=22646 speed=0.0965x
frame= 5666 fps=2.9 q=25.0 size=   12184kB time=00:03:08.83 bitrate= 528.6kbits/s dup=0 drop=22651 speed=0.0965x
frame= 5668 fps=2.9 q=25.0 size=   12187kB time=00:03:08.90 bitrate= 528.5kbits/s dup=0 drop=22658 speed=0.0965x
frame= 5669 fps=2.9 q=25.0 size=   12189kB time=00:03:08.93 bitrate= 528.5kbits/s dup=0 drop=22663 speed=0.0965x
frame= 5671 fps=2.9 q=25.0 size=   12192kB time=00:03:09.00 bitrate= 528.5kbits/s dup=0 drop=22670 speed=0.0965x
frame= 5672 fps=2.9 q=25.0 size=   12194kB time=00:03:09.03 bitrate= 528.4kbits/s dup=0 drop=22675 speed=0.0965x
frame= 5673 fps=2.9 q=25.0 size=   12196kB time=00:03:09.06 bitrate= 528.4kbits/s dup=0 drop=22679 speed=0.0965x
frame= 5674 fps=2.9 q=25.0 size=   12197kB time=00:03:09.10 bitrate= 528.4kbits/s dup=0 drop=22684 speed=0.0965x
frame= 5675 fps=2.9 q=25.0 size=   12199kB time=00:03:09.13 bitrate= 528.4kbits/s dup=0 drop=22688 speed=0.0965x
frame= 5676 fps=2.9 q=25.0 size=   12201kB time=00:03:09.16 bitrate= 528.4kbits/s dup=0 drop=22692 speed=0.0965x
frame= 5677 fps=2.9 q=25.0 size=   12203kB time=00:03:09.20 bitrate= 528.3kbits/s dup=0 drop=22695 speed=0.0965x
frame= 5678 fps=2.9 q=25.0 size=   12204kB time=00:03:09.23 bitrate= 528.3kbits/s dup=0 drop=22701 speed=0.0965x
frame= 5680 fps=2.9 q=25.0 size=   12208kB time=00:03:09.30 bitrate= 528.3kbits/s dup=0 drop=22706 speed=0.0965x
frame= 5681 fps=2.9 q=25.0 size=   12210kB time=00:03:09.33 bitrate= 528.3kbits/s dup=0 drop=22712 speed=0.0965x
frame= 5683 fps=2.9 q=25.0 size=   12213kB time=00:03:09.40 bitrate= 528.2kbits/s dup=0 drop=22718 speed=0.0965x
frame= 5684 fps=2.9 q=25.0 size=   12215kB time=00:03:09.43 bitrate= 528.2kbits/s dup=0 drop=22725 speed=0.0965x
frame= 5686 fps=2.9 q=25.0 size=   12218kB time=00:03:09.50 bitrate= 528.2kbits/s dup=0 drop=22730 speed=0.0965x
frame= 5687 fps=2.9 q=25.0 size=   12220kB time=00:03:09.53 bitrate= 528.2kbits/s dup=0 drop=22736 speed=0.0965x
frame= 5689 fps=2.9 q=25.0 size=   12223kB time=00:03:09.60 bitrate= 528.1kbits/s dup=0 drop=22742 speed=0.0965x
frame= 5690 fps=2.9 q=25.0 size=   12225kB time=00:03:09.63 bitrate= 528.1kbits/s dup=0 drop=22746 speed=0.0965x
frame= 5691 fps=2.9 q=25.0 size=   12227kB time=00:03:09.66 bitrate= 528.1kbits/s dup=0 drop=22753 speed=0.0965x
frame= 5693 fps=2.9 q=25.0 size=   12230kB time=00:03:09.73 bitrate= 528.1kbits/s dup=0 drop=22758 speed=0.0965x
frame= 5695 fps=2.9 q=25.0 size=   12233kB time=00:03:09.80 bitrate= 528.0kbits/s dup=0 drop=22766 speed=0.0965x
frame= 5697 fps=2.9 q=25.0 size=   12237kB time=00:03:09.86 bitrate= 528.0kbits/s dup=0 drop=22774 speed=0.0965x
frame= 5698 fps=2.9 q=25.0 size=   12238kB time=00:03:09.90 bitrate= 527.9kbits/s dup=0 drop=22781 speed=0.0965x
frame= 5700 fps=2.9 q=25.0 size=   12242kB time=00:03:09.96 bitrate= 527.9kbits/s dup=0 drop=22786 speed=0.0965x
frame= 5701 fps=2.9 q=25.0 size=   12243kB time=00:03:10.00 bitrate= 527.9kbits/s dup=0 drop=22792 speed=0.0965x
frame= 5703 fps=2.9 q=25.0 size=   12247kB time=00:03:10.06 bitrate= 527.8kbits/s dup=0 drop=22798 speed=0.0965x
frame= 5704 fps=2.9 q=25.0 size=   12248kB time=00:03:10.10 bitrate= 527.8kbits/s dup=0 drop=22803 speed=0.0965x
frame= 5705 fps=2.9 q=25.0 size=   12250kB time=00:03:10.13 bitrate= 527.8kbits/s dup=0 drop=22808 speed=0.0965x
frame= 5706 fps=2.9 q=25.0 size=   12252kB time=00:03:10.16 bitrate= 527.8kbits/s dup=0 drop=22813 speed=0.0965x
frame= 5707 fps=2.9 q=25.0 size=   12253kB time=00:03:10.20 bitrate= 527.8kbits/s dup=0 drop=22817 speed=0.0964x
frame= 5709 fps=2.9 q=25.0 size=   12257kB time=00:03:10.26 bitrate= 527.7kbits/s dup=0 drop=22822 speed=0.0965x
frame= 5710 fps=2.9 q=25.0 size=   12259kB time=00:03:10.30 bitrate= 527.7kbits/s dup=0 drop=22826 speed=0.0964x
frame= 5711 fps=2.9 q=25.0 size=   12260kB time=00:03:10.33 bitrate= 527.7kbits/s dup=0 drop=22832 speed=0.0964x
frame= 5712 fps=2.9 q=25.0 size=   12262kB time=00:03:10.36 bitrate= 527.7kbits/s dup=0 drop=22837 speed=0.0964x
frame= 5714 fps=2.9 q=25.0 size=   12265kB time=00:03:10.43 bitrate= 527.6kbits/s dup=0 drop=22842 speed=0.0964x
frame= 5715 fps=2.9 q=25.0 size=   12267kB time=00:03:10.46 bitrate= 527.6kbits/s dup=0 drop=22846 speed=0.0964x
frame= 5717 fps=2.9 q=25.0 size=   12271kB time=00:03:10.53 bitrate= 527.6kbits/s dup=0 drop=22854 speed=0.0964x
frame= 5718 fps=2.9 q=25.0 size=   12272kB time=00:03:10.56 bitrate= 527.6kbits/s dup=0 drop=22860 speed=0.0964x
frame= 5720 fps=2.9 q=25.0 size=   12276kB time=00:03:10.63 bitrate= 527.5kbits/s dup=0 drop=22866 speed=0.0964x
frame= 5721 fps=2.9 q=25.0 size=   12277kB time=00:03:10.66 bitrate= 527.5kbits/s dup=0 drop=22870 speed=0.0964x
frame= 5722 fps=2.9 q=25.0 size=   12279kB time=00:03:10.70 bitrate= 527.5kbits/s dup=0 drop=22877 speed=0.0964x
frame= 5724 fps=2.9 q=25.0 size=   12282kB time=00:03:10.76 bitrate= 527.4kbits/s dup=0 drop=22882 speed=0.0964x
frame= 5725 fps=2.9 q=25.0 size=   12284kB time=00:03:10.80 bitrate= 527.4kbits/s dup=0 drop=22887 speed=0.0964x
frame= 5727 fps=2.9 q=25.0 size=   12288kB time=00:03:10.86 bitrate= 527.4kbits/s dup=0 drop=22894 speed=0.0964x
frame= 5729 fps=2.9 q=25.0 size=   12291kB time=00:03:10.93 bitrate= 527.3kbits/s dup=0 drop=22902 speed=0.0964x
frame= 5730 fps=2.9 q=25.0 size=   12293kB time=00:03:10.96 bitrate= 527.3kbits/s dup=0 drop=22906 speed=0.0964x
frame= 5731 fps=2.9 q=25.0 size=   12295kB time=00:03:11.00 bitrate= 527.3kbits/s dup=0 drop=22911 speed=0.0964x
frame= 5732 fps=2.9 q=25.0 size=   12296kB time=00:03:11.03 bitrate= 527.3kbits/s dup=0 drop=22915 speed=0.0964x
frame= 5733 fps=2.9 q=25.0 size=   12298kB time=00:03:11.06 bitrate= 527.3kbits/s dup=0 drop=22921 speed=0.0964x
frame= 5734 fps=2.9 q=25.0 size=   12300kB time=00:03:11.10 bitrate= 527.3kbits/s dup=0 drop=22924 speed=0.0964x
frame= 5735 fps=2.9 q=25.0 size=   12301kB time=00:03:11.13 bitrate= 527.2kbits/s dup=0 drop=22928 speed=0.0964x
frame= 5737 fps=2.9 q=25.0 size=   12305kB time=00:03:11.20 bitrate= 527.2kbits/s dup=0 drop=22934 speed=0.0964x
frame= 5738 fps=2.9 q=25.0 size=   12306kB time=00:03:11.23 bitrate= 527.2kbits/s dup=0 drop=22939 speed=0.0964x
frame= 5739 fps=2.9 q=22.0 size=   12321kB time=00:03:11.26 bitrate= 527.7kbits/s dup=0 drop=22944 speed=0.0964x
frame= 5741 fps=2.9 q=25.0 size=   12324kB time=00:03:11.33 bitrate= 527.7kbits/s dup=0 drop=22951 speed=0.0964x
frame= 5743 fps=2.9 q=25.0 size=   12328kB time=00:03:11.40 bitrate= 527.7kbits/s dup=0 drop=22958 speed=0.0964x
frame= 5744 fps=2.9 q=25.0 size=   12330kB time=00:03:11.43 bitrate= 527.7kbits/s dup=0 drop=22965 speed=0.0964x
frame= 5746 fps=2.9 q=25.0 size=   12334kB time=00:03:11.50 bitrate= 527.6kbits/s dup=0 drop=22970 speed=0.0964x
frame= 5747 fps=2.9 q=25.0 size=   12336kB time=00:03:11.53 bitrate= 527.6kbits/s dup=0 drop=22975 speed=0.0964x
frame= 5749 fps=2.9 q=25.0 size=   12340kB time=00:03:11.60 bitrate= 527.6kbits/s dup=0 drop=22982 speed=0.0964x
frame= 5750 fps=2.9 q=25.0 size=   12342kB time=00:03:11.63 bitrate= 527.6kbits/s dup=0 drop=22987 speed=0.0964x
frame= 5752 fps=2.9 q=25.0 size=   12346kB time=00:03:11.70 bitrate= 527.6kbits/s dup=0 drop=22994 speed=0.0964x
frame= 5753 fps=2.9 q=25.0 size=   12348kB time=00:03:11.73 bitrate= 527.6kbits/s dup=0 drop=23000 speed=0.0964x
frame= 5755 fps=2.9 q=25.0 size=   12351kB time=00:03:11.80 bitrate= 527.5kbits/s dup=0 drop=23006 speed=0.0964x
frame= 5756 fps=2.9 q=25.0 size=   12353kB time=00:03:11.83 bitrate= 527.5kbits/s dup=0 drop=23011 speed=0.0964x
frame= 5758 fps=2.9 q=25.0 size=   12357kB time=00:03:11.90 bitrate= 527.5kbits/s dup=0 drop=23018 speed=0.0964x
frame= 5759 fps=2.9 q=25.0 size=   12359kB time=00:03:11.93 bitrate= 527.5kbits/s dup=0 drop=23025 speed=0.0964x
frame= 5761 fps=2.9 q=25.0 size=   12362kB time=00:03:12.00 bitrate= 527.5kbits/s dup=0 drop=23030 speed=0.0964x
frame= 5763 fps=2.9 q=25.0 size=   12366kB time=00:03:12.06 bitrate= 527.4kbits/s dup=0 drop=23038 speed=0.0964x
frame= 5764 fps=2.9 q=25.0 size=   12368kB time=00:03:12.10 bitrate= 527.4kbits/s dup=0 drop=23045 speed=0.0964x
frame= 5765 fps=2.9 q=25.0 size=   12370kB time=00:03:12.13 bitrate= 527.4kbits/s dup=0 drop=23049 speed=0.0964x
frame= 5767 fps=2.9 q=25.0 size=   12373kB time=00:03:12.20 bitrate= 527.4kbits/s dup=0 drop=23054 speed=0.0964x
frame= 5768 fps=2.9 q=25.0 size=   12375kB time=00:03:12.23 bitrate= 527.4kbits/s dup=0 drop=23059 speed=0.0964x
frame= 5769 fps=2.9 q=25.0 size=   12377kB time=00:03:12.26 bitrate= 527.3kbits/s dup=0 drop=23063 speed=0.0964x
frame= 5771 fps=2.9 q=25.0 size=   12380kB time=00:03:12.33 bitrate= 527.3kbits/s dup=0 drop=23070 speed=0.0964x
frame= 5772 fps=2.9 q=25.0 size=   12382kB time=00:03:12.36 bitrate= 527.3kbits/s dup=0 drop=23075 speed=0.0964x
frame= 5773 fps=2.9 q=25.0 size=   12384kB time=00:03:12.40 bitrate= 527.3kbits/s dup=0 drop=23080 speed=0.0963x
frame= 5774 fps=2.9 q=25.0 size=   12386kB time=00:03:12.43 bitrate= 527.3kbits/s dup=0 drop=23084 speed=0.0963x
frame= 5775 fps=2.9 q=25.0 size=   12387kB time=00:03:12.46 bitrate= 527.2kbits/s dup=0 drop=23089 speed=0.0963x
frame= 5777 fps=2.9 q=25.0 size=   12391kB time=00:03:12.53 bitrate= 527.2kbits/s dup=0 drop=23094 speed=0.0963x
frame= 5778 fps=2.9 q=25.0 size=   12393kB time=00:03:12.56 bitrate= 527.2kbits/s dup=0 drop=23100 speed=0.0963x
frame= 5780 fps=2.9 q=25.0 size=   12396kB time=00:03:12.63 bitrate= 527.2kbits/s dup=0 drop=23106 speed=0.0963x
frame= 5781 fps=2.9 q=25.0 size=   12398kB time=00:03:12.66 bitrate= 527.1kbits/s dup=0 drop=23112 speed=0.0963x
frame= 5783 fps=2.9 q=25.0 size=   12401kB time=00:03:12.73 bitrate= 527.1kbits/s dup=0 drop=23118 speed=0.0963x
frame= 5784 fps=2.9 q=25.0 size=   12403kB time=00:03:12.76 bitrate= 527.1kbits/s dup=0 drop=23124 speed=0.0963x
frame= 5786 fps=2.9 q=25.0 size=   12407kB time=00:03:12.83 bitrate= 527.1kbits/s dup=0 drop=23130 speed=0.0963x
frame= 5787 fps=2.9 q=25.0 size=   12408kB time=00:03:12.86 bitrate= 527.0kbits/s dup=0 drop=23135 speed=0.0963x
frame= 5788 fps=2.9 q=25.0 size=   12410kB time=00:03:12.90 bitrate= 527.0kbits/s dup=0 drop=23140 speed=0.0963x
frame= 5790 fps=2.9 q=25.0 size=   12413kB time=00:03:12.96 bitrate= 527.0kbits/s dup=0 drop=23146 speed=0.0963x
frame= 5791 fps=2.9 q=25.0 size=   12415kB time=00:03:13.00 bitrate= 527.0kbits/s dup=0 drop=23150 speed=0.0963x
frame= 5792 fps=2.9 q=25.0 size=   12417kB time=00:03:13.03 bitrate= 527.0kbits/s dup=0 drop=23156 speed=0.0963x
frame= 5794 fps=2.9 q=25.0 size=   12420kB time=00:03:13.10 bitrate= 526.9kbits/s dup=0 drop=23162 speed=0.0963x
frame= 5795 fps=2.9 q=25.0 size=   12422kB time=00:03:13.13 bitrate= 526.9kbits/s dup=0 drop=23169 speed=0.0963x
frame= 5797 fps=2.9 q=25.0 size=   12425kB time=00:03:13.20 bitrate= 526.9kbits/s dup=0 drop=23174 speed=0.0963x
frame= 5798 fps=2.9 q=25.0 size=   12427kB time=00:03:13.23 bitrate= 526.8kbits/s dup=0 drop=23180 speed=0.0963x
frame= 5800 fps=2.9 q=25.0 size=   12430kB time=00:03:13.30 bitrate= 526.8kbits/s dup=0 drop=23186 speed=0.0963x
frame= 5801 fps=2.9 q=25.0 size=   12432kB time=00:03:13.33 bitrate= 526.8kbits/s dup=0 drop=23192 speed=0.0963x
frame= 5802 fps=2.9 q=25.0 size=   12434kB time=00:03:13.36 bitrate= 526.8kbits/s dup=0 drop=23197 speed=0.0963x
frame= 5804 fps=2.9 q=25.0 size=   12437kB time=00:03:13.43 bitrate= 526.7kbits/s dup=0 drop=23202 speed=0.0963x
frame= 5805 fps=2.9 q=25.0 size=   12439kB time=00:03:13.46 bitrate= 526.7kbits/s dup=0 drop=23206 speed=0.0963x
frame= 5806 fps=2.9 q=25.0 size=   12441kB time=00:03:13.50 bitrate= 526.7kbits/s dup=0 drop=23210 speed=0.0963x
frame= 5807 fps=2.9 q=25.0 size=   12443kB time=00:03:13.53 bitrate= 526.7kbits/s dup=0 drop=23214 speed=0.0963x
frame= 5808 fps=2.9 q=25.0 size=   12444kB time=00:03:13.56 bitrate= 526.7kbits/s dup=0 drop=23219 speed=0.0963x
frame= 5809 fps=2.9 q=25.0 size=   12446kB time=00:03:13.60 bitrate= 526.6kbits/s dup=0 drop=23225 speed=0.0963x
frame= 5811 fps=2.9 q=25.0 size=   12450kB time=00:03:13.66 bitrate= 526.6kbits/s dup=0 drop=23230 speed=0.0963x
frame= 5812 fps=2.9 q=25.0 size=   12451kB time=00:03:13.70 bitrate= 526.6kbits/s dup=0 drop=23235 speed=0.0963x
frame= 5813 fps=2.9 q=25.0 size=   12453kB time=00:03:13.73 bitrate= 526.6kbits/s dup=0 drop=23240 speed=0.0963x
frame= 5815 fps=2.9 q=25.0 size=   12457kB time=00:03:13.80 bitrate= 526.5kbits/s dup=0 drop=23246 speed=0.0963x
frame= 5816 fps=2.9 q=25.0 size=   12458kB time=00:03:13.83 bitrate= 526.5kbits/s dup=0 drop=23250 speed=0.0963x
frame= 5817 fps=2.9 q=25.0 size=   12460kB time=00:03:13.86 bitrate= 526.5kbits/s dup=0 drop=23257 speed=0.0962x
frame= 5818 fps=2.9 q=25.0 size=   12462kB time=00:03:13.90 bitrate= 526.5kbits/s dup=0 drop=23261 speed=0.0962x
frame= 5819 fps=2.9 q=25.0 size=   12463kB time=00:03:13.93 bitrate= 526.5kbits/s dup=0 drop=23265 speed=0.0962x
frame= 5820 fps=2.9 q=25.0 size=   12465kB time=00:03:13.96 bitrate= 526.5kbits/s dup=0 drop=23269 speed=0.0962x
frame= 5822 fps=2.9 q=25.0 size=   12469kB time=00:03:14.03 bitrate= 526.4kbits/s dup=0 drop=23274 speed=0.0962x
frame= 5823 fps=2.9 q=25.0 size=   12470kB time=00:03:14.06 bitrate= 526.4kbits/s dup=0 drop=23279 speed=0.0962x
frame= 5825 fps=2.9 q=25.0 size=   12474kB time=00:03:14.13 bitrate= 526.4kbits/s dup=0 drop=23286 speed=0.0962x
frame= 5826 fps=2.9 q=25.0 size=   12475kB time=00:03:14.16 bitrate= 526.3kbits/s dup=0 drop=23290 speed=0.0962x
frame= 5827 fps=2.9 q=25.0 size=   12477kB time=00:03:14.20 bitrate= 526.3kbits/s dup=0 drop=23296 speed=0.0962x
frame= 5828 fps=2.9 q=25.0 size=   12479kB time=00:03:14.23 bitrate= 526.3kbits/s dup=0 drop=23301 speed=0.0962x
frame= 5830 fps=2.9 q=25.0 size=   12482kB time=00:03:14.30 bitrate= 526.3kbits/s dup=0 drop=23306 speed=0.0962x
frame= 5831 fps=2.9 q=25.0 size=   12484kB time=00:03:14.33 bitrate= 526.2kbits/s dup=0 drop=23312 speed=0.0962x
frame= 5833 fps=2.9 q=25.0 size=   12487kB time=00:03:14.40 bitrate= 526.2kbits/s dup=0 drop=23318 speed=0.0962x
frame= 5834 fps=2.9 q=25.0 size=   12489kB time=00:03:14.43 bitrate= 526.2kbits/s dup=0 drop=23324 speed=0.0962x
frame= 5836 fps=2.9 q=25.0 size=   12492kB time=00:03:14.50 bitrate= 526.2kbits/s dup=0 drop=23330 speed=0.0962x
frame= 5837 fps=2.9 q=25.0 size=   12494kB time=00:03:14.53 bitrate= 526.1kbits/s dup=0 drop=23334 speed=0.0962x
frame= 5838 fps=2.9 q=25.0 size=   12496kB time=00:03:14.56 bitrate= 526.1kbits/s dup=0 drop=23338 speed=0.0962x
frame= 5839 fps=2.9 q=25.0 size=   12497kB time=00:03:14.60 bitrate= 526.1kbits/s dup=0 drop=23343 speed=0.0962x
frame= 5840 fps=2.9 q=25.0 size=   12499kB time=00:03:14.63 bitrate= 526.1kbits/s dup=0 drop=23347 speed=0.0962x
frame= 5842 fps=2.9 q=25.0 size=   12503kB time=00:03:14.70 bitrate= 526.1kbits/s dup=0 drop=23354 speed=0.0962x
frame= 5843 fps=2.9 q=25.0 size=   12505kB time=00:03:14.73 bitrate= 526.0kbits/s dup=0 drop=23358 speed=0.0962x
frame= 5844 fps=2.9 q=25.0 size=   12506kB time=00:03:14.76 bitrate= 526.0kbits/s dup=0 drop=23363 speed=0.0962x
frame= 5845 fps=2.9 q=25.0 size=   12508kB time=00:03:14.80 bitrate= 526.0kbits/s dup=0 drop=23368 speed=0.0962x
frame= 5847 fps=2.9 q=25.0 size=   12511kB time=00:03:14.86 bitrate= 526.0kbits/s dup=0 drop=23374 speed=0.0962x
frame= 5848 fps=2.9 q=25.0 size=   12513kB time=00:03:14.90 bitrate= 525.9kbits/s dup=0 drop=23380 speed=0.0962x
frame= 5850 fps=2.9 q=25.0 size=   12517kB time=00:03:14.96 bitrate= 525.9kbits/s dup=0 drop=23386 speed=0.0962x
frame= 5851 fps=2.9 q=25.0 size=   12518kB time=00:03:15.00 bitrate= 525.9kbits/s dup=0 drop=23390 speed=0.0962x
frame= 5852 fps=2.9 q=25.0 size=   12520kB time=00:03:15.03 bitrate= 525.9kbits/s dup=0 drop=23397 speed=0.0962x
frame= 5854 fps=2.9 q=25.0 size=   12523kB time=00:03:15.10 bitrate= 525.8kbits/s dup=0 drop=23402 speed=0.0962x
frame= 5856 fps=2.9 q=25.0 size=   12527kB time=00:03:15.16 bitrate= 525.8kbits/s dup=0 drop=23410 speed=0.0962x
frame= 5857 fps=2.9 q=25.0 size=   12528kB time=00:03:15.20 bitrate= 525.8kbits/s dup=0 drop=23416 speed=0.0962x
frame= 5859 fps=2.9 q=25.0 size=   12532kB time=00:03:15.26 bitrate= 525.7kbits/s dup=0 drop=23422 speed=0.0962x
frame= 5860 fps=2.9 q=25.0 size=   12533kB time=00:03:15.30 bitrate= 525.7kbits/s dup=0 drop=23426 speed=0.0962x
frame= 5861 fps=2.9 q=25.0 size=   12535kB time=00:03:15.33 bitrate= 525.7kbits/s dup=0 drop=23431 speed=0.0962x
frame= 5862 fps=2.9 q=25.0 size=   12537kB time=00:03:15.36 bitrate= 525.7kbits/s dup=0 drop=23436 speed=0.0961x
frame= 5863 fps=2.9 q=25.0 size=   12538kB time=00:03:15.40 bitrate= 525.7kbits/s dup=0 drop=23440 speed=0.0961x
frame= 5864 fps=2.9 q=25.0 size=   12540kB time=00:03:15.43 bitrate= 525.6kbits/s dup=0 drop=23445 speed=0.0961x
frame= 5865 fps=2.9 q=25.0 size=   12542kB time=00:03:15.46 bitrate= 525.6kbits/s dup=0 drop=23449 speed=0.0961x
frame= 5867 fps=2.9 q=25.0 size=   12545kB time=00:03:15.53 bitrate= 525.6kbits/s dup=0 drop=23454 speed=0.0961x
frame= 5868 fps=2.9 q=25.0 size=   12547kB time=00:03:15.56 bitrate= 525.6kbits/s dup=0 drop=23459 speed=0.0961x
frame= 5869 fps=2.9 q=25.0 size=   12549kB time=00:03:15.60 bitrate= 525.6kbits/s dup=0 drop=23465 speed=0.0961x
frame= 5871 fps=2.9 q=25.0 size=   12552kB time=00:03:15.66 bitrate= 525.5kbits/s dup=0 drop=23470 speed=0.0961x
frame= 5872 fps=2.9 q=25.0 size=   12554kB time=00:03:15.70 bitrate= 525.5kbits/s dup=0 drop=23474 speed=0.0961x
frame= 5873 fps=2.9 q=25.0 size=   12555kB time=00:03:15.73 bitrate= 525.5kbits/s dup=0 drop=23479 speed=0.0961x
frame= 5875 fps=2.9 q=25.0 size=   12559kB time=00:03:15.80 bitrate= 525.4kbits/s dup=0 drop=23486 speed=0.0961x
frame= 5876 fps=2.9 q=25.0 size=   12561kB time=00:03:15.83 bitrate= 525.4kbits/s dup=0 drop=23491 speed=0.0961x
frame= 5877 fps=2.9 q=25.0 size=   12562kB time=00:03:15.86 bitrate= 525.4kbits/s dup=0 drop=23496 speed=0.0961x
frame= 5879 fps=2.9 q=25.0 size=   12566kB time=00:03:15.93 bitrate= 525.4kbits/s dup=0 drop=23502 speed=0.0961x
frame= 5880 fps=2.9 q=25.0 size=   12567kB time=00:03:15.96 bitrate= 525.4kbits/s dup=0 drop=23507 speed=0.0961x
frame= 5881 fps=2.9 q=25.0 size=   12569kB time=00:03:16.00 bitrate= 525.3kbits/s dup=0 drop=23512 speed=0.0961x
frame= 5883 fps=2.9 q=25.0 size=   12572kB time=00:03:16.06 bitrate= 525.3kbits/s dup=0 drop=23518 speed=0.0961x
frame= 5884 fps=2.9 q=25.0 size=   12574kB time=00:03:16.10 bitrate= 525.3kbits/s dup=0 drop=23523 speed=0.0961x
frame= 5886 fps=2.9 q=25.0 size=   12578kB time=00:03:16.16 bitrate= 525.2kbits/s dup=0 drop=23530 speed=0.0961x
frame= 5887 fps=2.9 q=25.0 size=   12579kB time=00:03:16.20 bitrate= 525.2kbits/s dup=0 drop=23537 speed=0.0961x
frame= 5889 fps=2.9 q=25.0 size=   12583kB time=00:03:16.26 bitrate= 525.2kbits/s dup=0 drop=23542 speed=0.0961x
frame= 5890 fps=2.9 q=25.0 size=   12584kB time=00:03:16.30 bitrate= 525.2kbits/s dup=0 drop=23547 speed=0.0961x
frame= 5891 fps=2.9 q=25.0 size=   12586kB time=00:03:16.33 bitrate= 525.2kbits/s dup=0 drop=23553 speed=0.0961x
frame= 5893 fps=2.9 q=25.0 size=   12590kB time=00:03:16.40 bitrate= 525.1kbits/s dup=0 drop=23558 speed=0.0961x
frame= 5894 fps=2.9 q=25.0 size=   12591kB time=00:03:16.43 bitrate= 525.1kbits/s dup=0 drop=23562 speed=0.0961x
frame= 5895 fps=2.9 q=25.0 size=   12593kB time=00:03:16.46 bitrate= 525.1kbits/s dup=0 drop=23567 speed=0.0961x
frame= 5896 fps=2.9 q=25.0 size=   12595kB time=00:03:16.50 bitrate= 525.1kbits/s dup=0 drop=23572 speed=0.0961x
frame= 5898 fps=2.9 q=25.0 size=   12598kB time=00:03:16.56 bitrate= 525.0kbits/s dup=0 drop=23578 speed=0.0961x
frame= 5899 fps=2.9 q=25.0 size=   12600kB time=00:03:16.60 bitrate= 525.0kbits/s dup=0 drop=23584 speed=0.096x
frame= 5901 fps=2.9 q=25.0 size=   12603kB time=00:03:16.66 bitrate= 525.0kbits/s dup=0 drop=23590 speed=0.0961x
frame= 5902 fps=2.9 q=25.0 size=   12605kB time=00:03:16.70 bitrate= 525.0kbits/s dup=0 drop=23596 speed=0.096x
frame= 5904 fps=2.9 q=25.0 size=   12608kB time=00:03:16.76 bitrate= 524.9kbits/s dup=0 drop=23602 speed=0.0961x
frame= 5905 fps=2.9 q=25.0 size=   12610kB time=00:03:16.80 bitrate= 524.9kbits/s dup=0 drop=23607 speed=0.096x
frame= 5907 fps=2.9 q=25.0 size=   12613kB time=00:03:16.86 bitrate= 524.9kbits/s dup=0 drop=23614 speed=0.0961x
frame= 5908 fps=2.9 q=25.0 size=   12615kB time=00:03:16.90 bitrate= 524.8kbits/s dup=0 drop=23619 speed=0.096x
frame= 5909 fps=2.9 q=25.0 size=   12617kB time=00:03:16.93 bitrate= 524.8kbits/s dup=0 drop=23625 speed=0.096x
frame= 5911 fps=2.9 q=25.0 size=   12620kB time=00:03:17.00 bitrate= 524.8kbits/s dup=0 drop=23630 speed=0.0961x
frame= 5912 fps=2.9 q=25.0 size=   12622kB time=00:03:17.03 bitrate= 524.8kbits/s dup=0 drop=23636 speed=0.096x
frame= 5914 fps=2.9 q=25.0 size=   12625kB time=00:03:17.10 bitrate= 524.7kbits/s dup=0 drop=23642 speed=0.096x
frame= 5915 fps=2.9 q=25.0 size=   12627kB time=00:03:17.13 bitrate= 524.7kbits/s dup=0 drop=23647 speed=0.096x
frame= 5916 fps=2.9 q=25.0 size=   12628kB time=00:03:17.16 bitrate= 524.7kbits/s dup=0 drop=23652 speed=0.096x
frame= 5918 fps=2.9 q=25.0 size=   12632kB time=00:03:17.23 bitrate= 524.7kbits/s dup=0 drop=23658 speed=0.096x
frame= 5919 fps=2.9 q=25.0 size=   12634kB time=00:03:17.26 bitrate= 524.6kbits/s dup=0 drop=23665 speed=0.096x
frame= 5921 fps=2.9 q=25.0 size=   12637kB time=00:03:17.33 bitrate= 524.6kbits/s dup=0 drop=23670 speed=0.096x
frame= 5922 fps=2.9 q=25.0 size=   12639kB time=00:03:17.36 bitrate= 524.6kbits/s dup=0 drop=23676 speed=0.096x
frame= 5924 fps=2.9 q=25.0 size=   12642kB time=00:03:17.43 bitrate= 524.5kbits/s dup=0 drop=23682 speed=0.096x
frame= 5925 fps=2.9 q=25.0 size=   12644kB time=00:03:17.46 bitrate= 524.5kbits/s dup=0 drop=23688 speed=0.096x
frame= 5927 fps=2.9 q=25.0 size=   12647kB time=00:03:17.53 bitrate= 524.5kbits/s dup=0 drop=23694 speed=0.096x
frame= 5928 fps=2.9 q=25.0 size=   12649kB time=00:03:17.56 bitrate= 524.5kbits/s dup=0 drop=23700 speed=0.096x
frame= 5929 fps=2.9 q=25.0 size=   12650kB time=00:03:17.60 bitrate= 524.5kbits/s dup=0 drop=23705 speed=0.096x
frame= 5931 fps=2.9 q=25.0 size=   12654kB time=00:03:17.66 bitrate= 524.4kbits/s dup=0 drop=23710 speed=0.096x
frame= 5932 fps=2.9 q=25.0 size=   12655kB time=00:03:17.70 bitrate= 524.4kbits/s dup=0 drop=23715 speed=0.096x
frame= 5933 fps=2.9 q=25.0 size=   12657kB time=00:03:17.73 bitrate= 524.4kbits/s dup=0 drop=23720 speed=0.096x
frame= 5934 fps=2.9 q=25.0 size=   12659kB time=00:03:17.76 bitrate= 524.4kbits/s dup=0 drop=23724 speed=0.096x
frame= 5935 fps=2.9 q=25.0 size=   12661kB time=00:03:17.80 bitrate= 524.3kbits/s dup=0 drop=23729 speed=0.096x
frame= 5937 fps=2.9 q=25.0 size=   12664kB time=00:03:17.86 bitrate= 524.3kbits/s dup=0 drop=23734 speed=0.096x
frame= 5938 fps=2.9 q=25.0 size=   12666kB time=00:03:17.90 bitrate= 524.3kbits/s dup=0 drop=23740 speed=0.096x
frame= 5940 fps=2.9 q=25.0 size=   12669kB time=00:03:17.96 bitrate= 524.2kbits/s dup=0 drop=23746 speed=0.096x
frame= 5941 fps=2.9 q=25.0 size=   12671kB time=00:03:18.00 bitrate= 524.2kbits/s dup=0 drop=23751 speed=0.096x
frame= 5943 fps=2.9 q=25.0 size=   12674kB time=00:03:18.06 bitrate= 524.2kbits/s dup=0 drop=23758 speed=0.096x
frame= 5944 fps=2.9 q=25.0 size=   12676kB time=00:03:18.10 bitrate= 524.2kbits/s dup=0 drop=23763 speed=0.096x
frame= 5945 fps=2.9 q=25.0 size=   12677kB time=00:03:18.13 bitrate= 524.2kbits/s dup=0 drop=23769 speed=0.096x
frame= 5946 fps=2.9 q=25.0 size=   12679kB time=00:03:18.16 bitrate= 524.1kbits/s dup=0 drop=23773 speed=0.096x
frame= 5947 fps=2.9 q=25.0 size=   12681kB time=00:03:18.20 bitrate= 524.1kbits/s dup=0 drop=23777 speed=0.096x
frame= 5948 fps=2.9 q=25.0 size=   12682kB time=00:03:18.23 bitrate= 524.1kbits/s dup=0 drop=23781 speed=0.096x
frame= 5950 fps=2.9 q=25.0 size=   12686kB time=00:03:18.30 bitrate= 524.1kbits/s dup=0 drop=23786 speed=0.096x
frame= 5951 fps=2.9 q=25.0 size=   12688kB time=00:03:18.33 bitrate= 524.1kbits/s dup=0 drop=23790 speed=0.096x
frame= 5952 fps=2.9 q=25.0 size=   12689kB time=00:03:18.36 bitrate= 524.0kbits/s dup=0 drop=23796 speed=0.096x
frame= 5954 fps=2.9 q=25.0 size=   12693kB time=00:03:18.43 bitrate= 524.0kbits/s dup=0 drop=23802 speed=0.096x
frame= 5955 fps=2.9 q=25.0 size=   12694kB time=00:03:18.46 bitrate= 524.0kbits/s dup=0 drop=23807 speed=0.096x
frame= 5957 fps=2.9 q=25.0 size=   12698kB time=00:03:18.53 bitrate= 523.9kbits/s dup=0 drop=23814 speed=0.096x
frame= 5958 fps=2.9 q=25.0 size=   12699kB time=00:03:18.56 bitrate= 523.9kbits/s dup=0 drop=23819 speed=0.096x
frame= 5960 fps=2.9 q=25.0 size=   12703kB time=00:03:18.63 bitrate= 523.9kbits/s dup=0 drop=23826 speed=0.096x
frame= 5961 fps=2.9 q=25.0 size=   12705kB time=00:03:18.66 bitrate= 523.9kbits/s dup=0 drop=23831 speed=0.096x
frame= 5963 fps=2.9 q=25.0 size=   12708kB time=00:03:18.73 bitrate= 523.8kbits/s dup=0 drop=23838 speed=0.096x
frame= 5964 fps=2.9 q=25.0 size=   12710kB time=00:03:18.76 bitrate= 523.8kbits/s dup=0 drop=23842 speed=0.096x
frame= 5965 fps=2.9 q=25.0 size=   12711kB time=00:03:18.80 bitrate= 523.8kbits/s dup=0 drop=23846 speed=0.0959x
frame= 5966 fps=2.9 q=25.0 size=   12713kB time=00:03:18.83 bitrate= 523.8kbits/s dup=0 drop=23851 speed=0.0959x
frame= 5967 fps=2.9 q=25.0 size=   12715kB time=00:03:18.86 bitrate= 523.8kbits/s dup=0 drop=23855 speed=0.0959x
frame= 5969 fps=2.9 q=25.0 size=   12718kB time=00:03:18.93 bitrate= 523.7kbits/s dup=0 drop=23862 speed=0.0959x
frame= 5970 fps=2.9 q=25.0 size=   12720kB time=00:03:18.96 bitrate= 523.7kbits/s dup=0 drop=23867 speed=0.0959x
frame= 5972 fps=2.9 q=25.0 size=   12723kB time=00:03:19.03 bitrate= 523.7kbits/s dup=0 drop=23874 speed=0.0959x
frame= 5973 fps=2.9 q=25.0 size=   12725kB time=00:03:19.06 bitrate= 523.6kbits/s dup=0 drop=23880 speed=0.0959x
frame= 5974 fps=2.9 q=25.0 size=   12726kB time=00:03:19.10 bitrate= 523.6kbits/s dup=0 drop=23885 speed=0.0959x
frame= 5976 fps=2.9 q=25.0 size=   12730kB time=00:03:19.16 bitrate= 523.6kbits/s dup=0 drop=23890 speed=0.0959x
frame= 5977 fps=2.9 q=25.0 size=   12732kB time=00:03:19.20 bitrate= 523.6kbits/s dup=0 drop=23894 speed=0.0959x
frame= 5978 fps=2.9 q=25.0 size=   12733kB time=00:03:19.23 bitrate= 523.6kbits/s dup=0 drop=23901 speed=0.0959x
frame= 5979 fps=2.9 q=25.0 size=   12735kB time=00:03:19.26 bitrate= 523.5kbits/s dup=0 drop=23905 speed=0.0959x
frame= 5981 fps=2.9 q=25.0 size=   12738kB time=00:03:19.33 bitrate= 523.5kbits/s dup=0 drop=23910 speed=0.0959x
frame= 5982 fps=2.9 q=25.0 size=   12740kB time=00:03:19.36 bitrate= 523.5kbits/s dup=0 drop=23914 speed=0.0959x
frame= 5984 fps=2.9 q=25.0 size=   12743kB time=00:03:19.43 bitrate= 523.4kbits/s dup=0 drop=23922 speed=0.0959x
frame= 5985 fps=2.9 q=25.0 size=   12745kB time=00:03:19.46 bitrate= 523.4kbits/s dup=0 drop=23929 speed=0.0959x
frame= 5987 fps=2.9 q=25.0 size=   12748kB time=00:03:19.53 bitrate= 523.4kbits/s dup=0 drop=23934 speed=0.0959x
frame= 5988 fps=2.9 q=25.0 size=   12750kB time=00:03:19.56 bitrate= 523.4kbits/s dup=0 drop=23938 speed=0.0959x
frame= 5989 fps=2.9 q=22.0 size=   12765kB time=00:03:19.60 bitrate= 523.9kbits/s dup=0 drop=23945 speed=0.0959x
frame= 5991 fps=2.9 q=25.0 size=   12768kB time=00:03:19.66 bitrate= 523.9kbits/s dup=0 drop=23950 speed=0.0959x
frame= 5992 fps=2.9 q=25.0 size=   12770kB time=00:03:19.70 bitrate= 523.9kbits/s dup=0 drop=23954 speed=0.0959x
frame= 5993 fps=2.9 q=25.0 size=   12772kB time=00:03:19.73 bitrate= 523.9kbits/s dup=0 drop=23958 speed=0.0959x
frame= 5994 fps=2.9 q=25.0 size=   12774kB time=00:03:19.76 bitrate= 523.8kbits/s dup=0 drop=23962 speed=0.0959x
frame= 5995 fps=2.9 q=25.0 size=   12776kB time=00:03:19.80 bitrate= 523.8kbits/s dup=0 drop=23966 speed=0.0959x
[mp4 @ 00000000024c9220] Starting second pass: moving the moov atom to the beginning of the file
frame= 5996 fps=2.9 q=25.0 Lsize=   12803kB time=00:03:19.83 bitrate= 524.8kbits/s dup=0 drop=23971 speed=0.0959x

video:12761kB audio:0kB subtitle:0kB other streams:0kB global headers:0kB muxing overhead: 0.329995%
[libx264 @ 00000000024ca160] frame I:117   Avg QP:20.46  size:  8205
[libx264 @ 00000000024ca160] frame P:5879  Avg QP:20.63  size:  2059
[libx264 @ 00000000024ca160] mb I  I16..4: 38.6% 52.1%  9.3%
[libx264 @ 00000000024ca160] mb P  I16..4:  4.7%  3.5%  0.2%  P16..4: 36.7%  2.4%  5.4%  0.0%  0.0%    skip:47.0%
[libx264 @ 00000000024ca160] 8x8 transform intra:43.6% inter:81.5%
[libx264 @ 00000000024ca160] coded y,uvDC,uvAC intra: 28.4% 31.0% 3.5% inter: 4.5% 13.4% 0.1%
[libx264 @ 00000000024ca160] i16 v,h,dc,p: 20% 21% 24% 35%
[libx264 @ 00000000024ca160] i8 v,h,dc,ddl,ddr,vr,hd,vl,hu: 16% 12% 33%  5%  6%  6%  7%  6%  9%
[libx264 @ 00000000024ca160] i4 v,h,dc,ddl,ddr,vr,hd,vl,hu: 15% 17% 16%  7%  9%  8%  9%  8% 10%
[libx264 @ 00000000024ca160] i8c dc,h,v,p: 61% 22% 12%  4%
[libx264 @ 00000000024ca160] Weighted P-Frames: Y:3.8% UV:1.8%
[libx264 @ 00000000024ca160] ref P L0: 29.7%  3.6% 16.1%  7.9%  6.9%  6.3%  5.9%  3.2%  3.0%  2.9%  2.8%  2.7%  2.6
%  2.5%  2.5%  1.4%
[libx264 @ 00000000024ca160] kb/s:523.00
</pre>