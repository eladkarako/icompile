TL;DR
Clear the app-storage, uninstall the old version, download, extract, install: <a href="https://github.com/eladkarako/icompile/releases/download/latest/Chanu_2.0.27.a.apk.zip">https://github.com/eladkarako/icompile/releases/download/latest/Chanu_2.0.27.a.apk.zip</a>.

It seems to work.

<hr/>

Chanu is a pretty great way of viewing 4-Chan threads, 
it utilize the 4-Chan API <sup><a href="https://gist.github.com/eladkarako/dea34bc934245285b0f9864c92fbc991#file-4chan-api-some-is-old-used-in-chanu-android-application-txt">#1</a> <a href="https://github.com/4chan/4chan-API">#2</a></sup> to present thread's content in either a long thread-view (with images) or gallery-view (grab all the image's thumbnails, fetch the full image on demand). 
The gallery-view is unique to Chanu, 
it worked pretty well up-until the Android 9.0 update.

I'm not sure what the cause was, 
but it is probably a faulty way that the project built its resources, 
it seems that Android 8.1 was tollerate, but something in Android 9 has changed, 
making the opening the gallery no-longer possible. It usually was displaying an error from the operation-system, 
then closed the app. 

Forcing the app to display in English-only made this bug less common for some reason. 

Chanu can not be downloaded from Google-Play anymore <sup><a href="https://play.google.com/store/apps/details?id=com.chanapps.four.activity">#1</a></sup>, 
and the last <a href="https://f-droid.org/en/packages/com.chanapps.four.activity/">official version in F-Droid repository</a> is no-longer working since the API has changed. 

The app is open-source, and forked on GitHub by <a href="https://github.com/grzegorznittner">&#x0040;grzegorznittner</a>, 
both updating the API and the infrastructure, making it work again.
The last production-release (currently) in the releases-section is <a href="https://github.com/grzegorznittner/chanu/releases/tag/v2.0.25">v2.0.25</a>, 
but if you'll scroll through the issue(bug)-report threads you'll also find the latest (currently) alpha-release, 
<a href="https://github.com/Greznor/chanu/releases/tag/v2.0.27.alpha">v2.0.27 <em>Alpha</em></a>. 

Every of the APK built seems to have the gallery-opening-sudden-close issue, 
as reported by <a href="https://github.com/sulmanshah">&#x0040;sulmanshah</a> in the GitHub issue <a href="https://github.com/grzegorznittner/chanu/issues/482">Chanu Crashing Image Gallery - Android P 9.0.11 - 2.0.26 #482</a>. 

I first suggested <a href="https://github.com/grzegorznittner/chanu/issues/482#issuecomment-547366133">a workaround</a> that would enable downloading all the images (something your could do in the gallery-view) without triggering the bug, 

and just lately, I've modified the (currently) latest APK using a reverse-engineer tool named <a href="https://ibotpeaches.github.io/Apktool/">APKTool</a> (custom-builds can be downloaded from: <a href="https://icompile.eladkarako.com/unofficial-apktool">https://icompile.eladkarako.com/unofficial-apktool</a>).

I've modified slightly the android manifest, explicitly disabling debug-mode, 
removed all of the languages with this batch-file: <a href="https://gist.github.com/eladkarako/d829d8a37d9dd1422f998905821f156a#file-apktool_res_folder_every_language_but_default_deleter-cmd">APKTool_res_folder_every_language_but_default_deleter.cmd</a>, 
built it again, aligned and signed it.

Since it uses a different signature then the original(forked)-release you can not install it over the existing installation of your Chanu app, you would have to clear the storage of the app, then uninstall the older-version, installing the new-one.

You can download it either from: <a href="https://github.com/eladkarako/icompile/releases/download/latest/Chanu_2.0.27.a.apk.zip">https://github.com/eladkarako/icompile/releases/download/latest/Chanu_2.0.27.a.apk.zip</a>, 
or from this comment in the issue-section: <a href="https://github.com/grzegorznittner/chanu/issues/482#issuecomment-570805628">https://github.com/grzegorznittner/chanu/issues/482#issuecomment-570805628</a>. 

I've also explained about the rebuilding process in this comment: <a href="https://github.com/grzegorznittner/chanu/issues/482#issuecomment-570828397">https://github.com/grzegorznittner/chanu/issues/482#issuecomment-570828397</a>