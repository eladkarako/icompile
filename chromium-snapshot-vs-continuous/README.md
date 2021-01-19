<em>OK, once and for all N00bs ;]</em>

...every time there are any substantial code-changes (about twice a day), 
an automated build of Chromium is created.

Once the compilation process succeeds (minimal unit-tests mostly..),
the build is then copied to the snapshot tree (which may be downloaded by you freely from here: <a href="https://storage.googleapis.com/chromium-browser-snapshot/index.html" target="_blank">storage.googleapis.com/chromium-browser-snapshot/index.html</a> but keep in mind, it is quite buggy..)

The build is than ran-through a quite huge (python managed) test-suit...
...
<!--more-->

where the majority of the tests are for ppapi, v8 and sandbox'ing features, some profiling for CPU/GPU and memory is next and there is a h-u-g-e part for <a href="https://cs.chromium.org/chromium/src/third_party/?q=tests" target="_blank">third-party components</a> (skia and ffmpeg and openh264 for x264 encoding, woff2 support, webgl, polymer and even zlib...) which are all integrated into the browser, since most of the components are to be native to ChromiumOS- it really is the best choice. Some OS-rendering Quirks (MacOS and Windows), JavaScript tests with mojojs, UI tests ("ash") and native-client are the last to run. <sub>Also, here is a <a href="https://cs.chromium.org/search/?q=tests&p=2&m=100&det=none&type=cs" target="_blank">list of related-sources for tests</a> if you are interested in those things..</sub>
Passing successfully (which is pretty rare.. mostly one build every two weeks) means that the build is than stable enough to be copied to the continuous tree.

Continuous builds may be downloaded from here: <a href="https://commondatastorage.googleapis.com/chromium-browser-continuous/index.html?prefix=Linux_x64/" target="_blank">commondatastorage.googleapis.com/chromium-browser-continuous/index.html</a>

If you wish to find-out just the latest build,
you may send-out a request to the <code>LAST_CHANGE</code> file (no, there is no "latest" hot-link build..)

For example here is a link to the latest VERSION (!) [not build itself] for several OS:

- https://www.googleapis.com/download/storage/v1/b/chromium-browser-continuous/o/Linux_x64/LAST_CHANGE
- https://www.googleapis.com/download/storage/v1/b/chromium-browser-continuous/o/Win_x64/LAST_CHANGE

The most visited builds are:
<pre>
Linux
Linux_x64
Mac
Win
Win_x64
</pre>

Several of the least visited ones are the ones built for Android (generic or with ARM variations)
<pre>
Android
Arm
Linux_ARM_Cross-compile
</pre>

Perhaps because the APK (for Android),
is built mostly for tests, so it is in two parts (the engine and the "shell"/"frame"/ a.k.a what was known in old Mozilla as "chrome" [small-caps 'C'])

Oh well...

Hey!
Do you want to try ChromiumOS? (it really is awesome! amm.. well at-least in a VM)
<pre>
Linux_ChromiumOS
Linux_ChromiumOS_Full
</pre>

And just a note for the ones ending with "Git":
<pre>
MacGit
WinGit
LinuxGit
LinuxGit_x64
</pre>
They WILL include the latest features,
but some overlapping/interleaved old components
(either not disabled or simply as a kind-of a linked-resource,
and are mostly useful for "post-fails" tests, it simply makes diff.
much more clear :]
So, although it will probably won't do any harm,
avoid using those...
It is similar to the case of <a href="https://code.jquery.com/jquery/" target="_blank">"jQuery-edge" with that "migrate thing"</a>, and the git-build version, which has the migrate-code re-integrated into the whole thing again, for the same reasons... - so it's like this.. :]

