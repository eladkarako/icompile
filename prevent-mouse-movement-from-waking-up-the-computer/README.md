
Control-Panel, mouse, go-to hardware tab, double click the first entry, to to power-management (if exist), 
uncheck the 'wake-up', click OK, 
double click the second entry and do the same.

<img src="https://icompile.eladkarako.com/_uploads/icompile.eladkarako.com_prevent-mouse-movement-from-waking-up-the-computer.png" />

This might help with the-known Lenovo/IBM TrackPoint-bug where the cursor moves by itself, 
and thus keeping the computer-screen ON, preventing the computer from entering idle-state, 
this option might not be present in some-versions of the TrackPoint-driver, 
you might have better-luck using the default driver the came with your Windows-OS.

Also, in-my case, I'm switching sometimes (<kbd>FN</kbd>+<kbd>F8</kbd>) from TrackPoint to touch-pad (only), 
and connecting an external wireless-mouse (I like the cheap Logitec ones about 15$, which do not have the pesky DPI-selector button like mouse-devices you get from eBay. The Logitec ones have a nice feel on the scroll-weel with just the right amount of push needed.. :]).
If you can handle yourself with just the external mouse, you'll do yourself a favor by disabling both the touch-pad and the trackpoint devices (<code>ThinkPad UltraNav Pointing Device</code>).

Those are the registry values the got modified after the UI action:
<a href="https://gist.github.com/eladkarako/5b83595524cba9102cdd3d2bf7c370fa#file-prevent-mouse-movement-from-waking-up-the-computer-registry-values-reg">https://gist.github.com/eladkarako/5b83595524cba9102cdd3d2bf7c370fa#file-prevent-mouse-movement-from-waking-up-the-computer-registry-values-reg</a>

<iframe type="text/html" charset="UTF-8" loading="eager" lazyload="off" importance="high"
  src="https://icompile.eladkarako.com/_resources/embed_gist.html?gistuser=eladkarako&gistid=5b83595524cba9102cdd3d2bf7c370fa&origin=https%3A%2F%2Ficompile.eladkarako.com&contenteditable=true" 
  referrerpolicy="no-referrer" sandbox="allow-same-origin allow-scripts allow-top-navigation" 
  seamless="false" frameborder="0" marginheight="0" marginwidth="0" scrolling="auto" 
  style="height:300px;"
></iframe>
