Remove the limit of 5 posts for WordPress Theme "minileven".

minileven is an excellent- mobile-friendly and - easily customisable theme by <a href="https://wordpress.org/plugins/jetpack/" target="_blank">WordPress's JetPack plugin</a>.

- You can get it to work as your main theme by downloading the latest folder from the SVN:
<code><a href="https://plugins.svn.wordpress.org/jetpack/trunk/modules/minileven" target="_blank">https://plugins.svn.wordpress.org/jetpack/trunk/modules/minileven</a></code>

But when you'll try it, you might notice that regardless what value you put in your <code>Settings-Reading-Blog pages show at most [xx] posts</code> it keeps showing only <code>5</code> posts :[

you might even accessed the DB, just to find-out everything is FINE! and the value (in my case "20") was already set correctly :)

SO- <strong>WHY THE 5 POST LIMIT</strong>? :(

Well.. the reason is a <a href="https://codex.wordpress.org/Plugin_API/Filter_Reference/pre_option_(option_name)" target="_blank" title="https://codex.wordpress.org/Plugin_API/Filter_Reference/pre_option_(option_name)">"pre_option" filter</a>..
<img src="https://icompile.eladkarako.com/_uploads/2016/07/icompile.eladkarako.com_wordpress_reading_settings_for_minileven_remove_5posts_limit_codex.gif" width="1035" height="647" />

...placed under the <code>functions.php</code> file..
specifically <code>pre_option_posts_per_page</code> which is overriding the real-option, returning a HARD-CODED <code>5</code> each time.

<img src="https://icompile.eladkarako.com/_uploads/2016/07/icompile.eladkarako.com_wordpress_reading_settings_for_minileven_remove_5posts_limit_functionsphp_file.gif" width="884" height="532" />

The solution is quite simple: 
- <strong>open-for-edit</strong> (local+upload or FTP'ing) the <code>/<em>[YOUR BLOG ROOT]</em>/wp-content/themes/minileven/functions.php</code>.
- mark-out those lines, save, done.

<img src="https://icompile.eladkarako.com/_uploads/2016/07/icompile.eladkarako.com_wordpress_reading_settings_for_minileven_remove_5posts_limit_functionsphp_marked_out.gif" width="874" height="183" />

in-case you have a some-sort of cache (either static-HTML [more common] or/and in-memory memcache one [more rare]) you might want to clear/invalidate all-of cache and/or restart your server (Apache).

With Go-Daddy as host, you need to access the "processes" page, and kill every process ("kill all"),
it will auto-start itself, giving you a clean('ish) RAM..

want to quickly see the change? just add <code>?23jhdsakfljh3245</code> (or any random string) to the end of the URL, the page will load with no-cache (but it will be cached, so next time use another random-string..)..

Have fun ;)