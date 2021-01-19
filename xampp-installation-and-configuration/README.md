<a href="http://en.wikipedia.org/wiki/XAMPP">XAMPP</a> is a free and open source cross-platform web server package, consisting mainly of the Apache HTTP Server, MySQL database, and interpreters for scripts written in the PHP and Perl programming languages.
<!--more-->
it is very easy to configure.

can be used with <a href="http://www.netbeans.org/">Netbeans </a> <a href="http://netbeans.org/kb/docs/php/quickstart.html">(guide here)</a>, with Visual-Studio for ASP.Net and php <a href="http://phalanger.codeplex.com/">(guide here)</a> or phpDesigner <a href="http://wiki.mpsoftware.dk/doku.php/tutorials/configure_xampp_with_xdebug_and_get_it_working_in_phpdesigner_7">(guide here)</a>.

download XAMPP at <a href="http://www.apachefriends.org/en/xampp.html">http://www.apachefriends.org/en/xampp.html</a>.

<img src="https://icompile.eladkarako.com/_uploads/2011-01-02_0202031.png" alt="" title="2011-01-02_020203" width="586" height="79" class="alignnone size-full wp-image-315" />

view the installation guide for more information:

<iframe width="960" height="720" src="https://www.youtube-nocookie.com/embed/Mfmsri2dow0?rel=0&amp;showinfo=0&amp;showads=0" frameborder="0" allowfullscreen></iframe>


<strong>WinCacheGrind</strong>
download <a href="http://sourceforge.net/projects/wincachegrind/">WinCacheGrind.exe</a> and place it in this path <strong>C:\\xampp\\WinCacheGrind</strong> (create a new folder).

<strong>adding xdebug.</strong>
start Apache and MySql.
<img src="https://icompile.eladkarako.com/_uploads/2011-01-02_170059.gif" alt="" title="2011-01-02_170059" width="365" height="88" class="alignnone size-full wp-image-322" />

visit http://localhost/xampp/ and click the <strong>phpinfo()</strong> on the left menu.

right click the PHP Version page and view HTML of the frame.
copy the HTML.
you can stop Apache and MySql now.

visit http://xdebug.org/find-binary.php and paste the HTML into the text-box in the page.
<img src="https://icompile.eladkarako.com/_uploads/2011-01-02_170656.jpg" alt="" title="2011-01-02_170656" width="525" height="309" class="alignnone size-full wp-image-323" />
hit the button at the bottom of the page.

you will the suggested the right version of dll to download,
where to put it and how to edit php.ini, download the dll and place it where it suggested.
<img src="https://icompile.eladkarako.com/_uploads/2011-01-02_171117.jpg" alt="" title="2011-01-02_171117" width="525" height="234" class="alignnone size-full wp-image-324" />

edit the php.ini (C:\\xampp\\php\\php.ini):
locate <strong>[Xdebug]</strong> delete all the content in this section and place this text:

<code>[XDebug]
;; Only Zend OR (!) XDebug
zend_extension="C:\\xampp\\php\\ext\\php_xdebug-2.1.0-5.3-vc6.dll"
xdebug.remote_enable=true
xdebug.remote_host=127.0.0.1
xdebug.remote_port=9000
xdebug.remote_handler=dbgp
xdebug.profiler_enable=1
xdebug.profiler_output_dir=C:\\xampp\\tmp\\
</code>
the content of <strong>zend_extension</strong> is copied from what has been given to you from http://xdebug.org/find-binary.php .


<strong>phpdoc</strong>
make sure you have an active internet connection.

open start->run->cmd
type:
<code>cd\\</code>
<code>cd c:\\xampp\\php\\</code>
<code>pear config-set data_dir C:\\xampp\\htdocs\\pear</code>
wait until it says <strong>successful</strong>.
<code>pear install PhpDocumentor</code>
this will download and install phpdoc, don't close the window,
just keep it without poking it, its done when its says <strong>install ok</strong>.

activate the Apache and MySql server and launch http://localhost/pear/PhpDocumentor/ 
it should says that are number of errors locating resources (include_once:...) 
open <strong>C:\\xampp\\htdocs\\pear\\PhpDocumentor\\docbuilder</strong>,
search config.php, actions.php, builder.php for lines contains include_once followed by a path with <strong>C:\\</strong>
for example <strong>include_once( "c:\\xampp\\htdocs\\pear/PhpDocumentor/.....</strong>
and change C:\\ to C:\\\\ <strong>include_once( "c:\\\\xampp\\htdocs\\pear/PhpDocumentor/.....</strong>

refresh the <strong>C:\\xampp\\htdocs\\pear\\PhpDocumentor\\docbuilder</strong> to see that there are no errors.

