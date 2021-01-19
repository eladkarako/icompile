<img src="https://icompile.eladkarako.com/_uploads/2015/06/icompile.eladkarako.com_ascii_pie.png" alt="" rem-width="771" rem-height="598" class="aligncenter size-full wp-image-3336" />

<br />
<!--more-->

<style>
[kbd-container] kbd{
  border: 3px outset #F3F3F3;
  border-left-color: #DBDBDB;
  border-top-color: #DBDBDB;
  background-color: #F3F3F3;
  margin: 1px;
}
</style>
<div kbd-container>
While in most keyboards you'll be having the numeric-keyboard holding <kbd>ALT</kbd> and hitting a hex code of <kbd>2</kbd><kbd>7</kbd><kbd>7</kbd> following by release of <kbd>ALT</kbd> <br /> to&nbsp;render&nbsp;<code style="font-size:50pt; font-weight:bolder;">π</code>.

Lenovo keyboards are (naturally) limited by size, first you'll have to hold <kbd>Fn</kbd> (or just click if you've previously set the <kbd>Fn</kbd> key to be sticky, which I strongly recommend, it is in the BIOS somewhere.. dig it up..) anyway we're saying..
hold <kbd>Fn</kbd> and press the <kbd>NmLk</kbd> key (notice its the <kbd>ScrLk</kbd> key, with dark-blue'ish sub-print, telling you what <em>function</em> occur when combined with the <kbd>Fn</kbd> key).

If you have Lenovo on-screen display you can also see some nice on-screen acknowledge of the NumLock status: <img src="https://icompile.eladkarako.com/_uploads/2015/06/2015-06-22_000117.jpg" alt="" rem-width="97" rem-height="92" class="alignnone size-full wp-image-3337" />

Have a close look on the letters on your keyboard, notice secondary text,
<kbd>M</kbd> = 0
<kbd>J</kbd> = 1
<kbd>K</kbd> = 2
<kbd>L</kbd> = 3
<kbd>U</kbd> = 4
<kbd>I</kbd> = 5
<kbd>O</kbd> = 6
(7, 8, 9 will just be the top numeric numbers, but the keyboard API will notice that those are the NUM_KEY 7, 8, and 9, so other HEX value when pressed..!)
and there are the side numeric-keys:
<kbd>P</kbd> = *
<kbd>;</kbd> = -
(<kbd>.</kbd> = still . --- but, again, as num_key "." !)
<kbd>/</kbd> = +

so essentially:
<blockquote>
<ol>
  <li><kbd>Fn</kbd>+<kbd>ScrLk</kbd> (activate)</li>
  <li>Hold <kbd>Alt</kbd> and press: <kbd>K</kbd> <kbd>K</kbd> <kbd>7</kbd> (release <kbd>Alt</kbd>)</li>
  <li><kbd>Fn</kbd>+<kbd>ScrLk</kbd> (to deactivate)</li>
</ol>
</blockquote>

Usually longer sequence glitch into <code>Unicode</code>, just Google some "ASCII tables" and follow the same method, using the HEX value, to render good-old classic ASCII graphic! :)


</div>