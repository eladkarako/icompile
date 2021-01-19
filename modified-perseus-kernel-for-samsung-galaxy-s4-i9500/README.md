Perseus-UNIVERSAL5410 is a Samsung Galaxy S4 (i9500) kernel (boot.img), 
it contains adbd, cbd, ,healthhd, busybox, su and a pre-installing superuser.apk

the tar is taken from <a href="https://github.com/AndreiLux/Perseus-UNIVERSAL5410/releases/tag/alpha19">https://github.com/AndreiLux/Perseus-UNIVERSAL5410/releases/tag/alpha19</a>, 

there are three folders within <code>default.prop</code>: aosp44, sec43 and sec442, 
I don't know (or care) which one is used for what...

I've simply modified the <code>default.prop</code> to be: <a href="https://gist.github.com/eladkarako/5694eada31277fdc75cee4043461372e#file-tweaked_default-prop">https://gist.github.com/eladkarako/5694eada31277fdc75cee4043461372e#file-tweaked_default-prop</a> (<em>Unsecure, Permissive, Tweaked Prop File, HTC/Samsung/*, Capable Of Being Both As default.prop And/Or build.prop (just remove duplicates from the original file, favouring this version)</em>), 
and then repacked them.

<iframe type="text/html" charset="UTF-8" loading="eager" lazyload="off" importance="high"
  src="https://icompile.eladkarako.com/_resources/embed_gist.html?gistuser=eladkarako&gistid=5694eada31277fdc75cee4043461372e&origin=https%3A%2F%2Ficompile.eladkarako.com&contenteditable=true" 
  referrerpolicy="no-referrer" sandbox="allow-same-origin allow-scripts allow-top-navigation" 
  seamless="false" frameborder="0" marginheight="0" marginwidth="0" scrolling="auto" 
  style="height:300px;"
></iframe>


You can download the modified (tar and tar.md5 for odin) img (for custom-recovery) and the original from here:
<a href="https://github.com/eladkarako/icompile/releases/download/latest/Perseus-alpha19.1-i9500_modprop.7z">https://github.com/eladkarako/icompile/releases/download/latest/Perseus-alpha19.1-i9500_modprop.7z</a>
