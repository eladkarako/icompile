<pre>
7z a -t7z archive.7z -m0=LZMA2 -mx=9 -mmt=on -ssc -ssw -ms=on ../build/hosts0.txt

7z a -t7z archive.7z -m0=LZMA2 -mx=9 -mmt=on -ssc -ssw -mmem=20m *.dll
7z a -t7z archive.7z -m0=LZMA2 -mx=9 *.dll
7z a -t7z archive.7z -m0=LZMA2 -mx=9 -md=1024 -mmem=2048m -mmt=on -ssc -ssw  *.dll

compression method
LZMA2
LZMA
PPMd
BZip2

Archive format
7z
bzip2
gzip
tar
wim
xz
zip

-ms=on      use "solid archive" (entire content is like one huge-file)    (-ms=on|-ms=off)
-mmt=on     use multi-threading                                           (-mmt=on|-mmt=off)
-t7z        archive type is "7z"                        (-t7z|-tbzip2|-tgzip|-ttar|-twim|-txz|-tzip   maybe also: -tiso|-tudf)
-m0=LZMA2   use "LZMA2" compression method (algorithm)  (-m0=LZMA2|-m0=LZMA|-m0=PPMd|-m0=BZip2)
-mx=9       Ultra                                       (-mx=0|....|-mx=9)
-ssw        Compress locked files. You can try this if you have problems opening files. (-ssw-|-ssw)
</pre>