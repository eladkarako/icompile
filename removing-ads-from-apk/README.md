In this article we will be using a decompile/recompile tool called APKTool.
APKTool allows patching resources from any APK you've got, 
for example one you've installed from the store and backed-up after installing it on your phone.

Note that actually removing ads from an Android application is not that easy, 
and you must deal with removing smali dependencies so the file/folder resources related to ads and analytics (<code>com/Google/gms</code> for example) won't be used.

It is much simpler to hide the ads by modifying the layouts, 
which is a nothing more than a resource-editing couple of XML-files.

There are no specific set of instructions on how to find the XML-files containing ad-related layouts, 
but usually you can start with a file-search that looks into files' content (such as Locate32), 
looking for something like "@id/ad", and resizing the containers, and if it is a resource called from other layouts simply replace everything with:
<pre>
&gt;LinearLayout android:layout_width="0.0dip" android:layout_height="0.0dip" xmlns:android="http://schemas.android.com/apk/res/android"&lt;&gt;/LinearLayout&lt;
</pre>

Here are my notes regarding the whole procedure:
<a href="https://gist.github.com/eladkarako/73c1b331b856da8c40d33d1da5daafe7#file-process-of-decompiling-recompiling-apk-with-apktool-and-7zip-zstd-zipalign-keytool-and-jarsigner-txt">https://gist.github.com/eladkarako/73c1b331b856da8c40d33d1da5daafe7#file-process-of-decompiling-recompiling-apk-with-apktool-and-7zip-zstd-zipalign-keytool-and-jarsigner-txt</a>

There is a little bug in APKTool, which won't allow you to install built-APK files,
you'll need to build the APK, then unzip it, copy the original META-INF (w/o some file, see notes), 
then zip it, rename its extention to apk, align it and sign it yourself.

This layouts editing can handle static box-containers of ads pretty good, 
while full-page containers are more difficult to handle, 
the popup action is triggered by a complex condition, controlled by the code, 
which is smali-accessible.

Note:
You can find several APKs that uses web-views, and include ads as a component in a HTML-file, 
those will usually place the folder under the root folder in a folder named "assets" or under "res/raw" folder, 
modifying the HTML file or JavaScript resources can be another simple way (simple is anything but editing smali files...) to remove/reduce (really is actually just hiding) ads.

Here are some expmaple APKs, 

I'm attaching both the original and "no ads" recompiled APK.

<a href="https://github.com/eladkarako/icompile/releases/download/latest/removing_ads_from_apk__com.radiosonline.radiofmisrael.7z">https://github.com/eladkarako/icompile/releases/download/latest/removing_ads_from_apk__com.radiosonline.radiofmisrael.7z</a>
<sub>This one was just XML-layouts editing</sub>

<a href="https://github.com/eladkarako/icompile/releases/download/latest/removing_ads_from_apk__il.co.globes.android.7z">https://github.com/eladkarako/icompile/releases/download/latest/removing_ads_from_apk__il.co.globes.android.7z</a>
<sub>This one had both XML-layouts and an additional web-component</sub>

you can use 7zip to extract both APKs, then 
APKTool to extract (<code>--no-src</code> is prefered since there is no smalli modifications), 
each APK, and some sort of file/folder-diff program ("Beyond Compare" for example) to see the changes that were done in each case.
