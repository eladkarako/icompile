1. install Python and GJSLinter.
<h2>(as explained <a title="https://icompile.eladkarako.com/windows-7-install-gjslint-google-closure-jslinter-into-python/" href="https://icompile.eladkarako.com/windows-7-install-gjslint-google-closure-jslinter-into-python/" target="_blank">here</a>)</h2>
2. apply the patch, or download the already patched version of GJSLint
<h2>(as explained <a title="https://icompile.eladkarako.com/python-patch-ignore-some-of-google-closure-jslinter-gjslint-errors/" href="https://icompile.eladkarako.com/python-patch-ignore-some-of-google-closure-jslinter-gjslint-errors/" target="_blank">here</a>)</h2>
3. install WebStorm6, open it, close any opened projects.

4. follow the images:

<img class="alignnone size-full wp-image-708" alt="2013-04-01_202923" src="https://icompile.eladkarako.com/_uploads/2013/04/2013-04-01_202923.jpg" width="527" height="162" />

<img class="alignnone size-full wp-image-709" alt="2013-04-01_203126" src="https://icompile.eladkarako.com/_uploads/2013/04/2013-04-01_203126.jpg" width="535" height="156" />

<img class="alignnone size-full wp-image-710" alt="2013-04-01_203301" src="https://icompile.eladkarako.com/_uploads/2013/04/2013-04-01_203301.jpg" width="392" height="171" />

prepare an empty file name it config.ini

here is a sample content (values are "new line"-separated)
<pre>--strict
--ignore_errors=1,2,6,110,131,233
--jsdoc
--summary
--beep
--check_html
--nomultiprocess
--debug_indentation
--time</pre>
&nbsp;

place the path for gjslint.exe, it will most probably be something like:  <strong>C:\\Python27\\Scripts\\gjslint.exe
</strong>set the placement of the configuration file, and press OK.

<img class="alignnone size-full wp-image-712" alt="2013-04-01_203910" src="https://icompile.eladkarako.com/_uploads/2013/04/2013-04-01_203910.jpg" width="692" height="250" />

you can run those scripts in command-line too,
but then it will be one line, and "=" will be replaced with one space.

you can change the config.ini while working in WebStorm, and the changes will be effective immediately.

&nbsp;

you can also change the color of the GJSLinter notifications:
<img class="alignnone size-full wp-image-713" alt="2013-04-01_204445" src="https://icompile.eladkarako.com/_uploads/2013/04/2013-04-01_204445.jpg" width="771" height="492" />