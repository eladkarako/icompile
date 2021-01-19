Those empty squares are known, among the font-glyph designers as TOFU

<img src="https://icompile.eladkarako.com/_uploads/2016/10/icompile.eladkarako.com_notofu_no_tofu_empty_squares0.png" alt="icompile.eladkarako.com_notofu_no_tofu_empty_squares0" width="985" height="608"/>

<blockquote>
From <a href="https://en.wikipedia.org/wiki/Tofu_(disambiguation)" target="_blank">Wikipedia</a>:
<em>Slang term, for the empty-boxes shown in-place of undisplayable code-points in computer character encoding, a form of mojibake.</em>
</blockquote>

Now, there are several way of dealing with those empty-box-symbols,
First of all, all of the basic european characters range, known as US-ASCII, is presented well by all of the browsers,
going back to Netscape days,

- making your website contains only US-ASCII characters, including any content submitted and presented by other people (such as comments on your blog)
is, in fact a very simple and effective way of addressing (or avoiding..) the empty-squares problem,
this, however makes your website very.. ammm... content-limited,

the other end of the problem-solution, is the optimistic one - 
- If your website renders as <code>UTF-8</code>, or it's more extended sibling <code>Unicode</code>, and your 'customers' are viewing your website, using a browser that renders text-to-graphic (most of them do, with only dependency is your operation-system's installed-fonts),
AND your customer has a font that supports, at-least, the same set of characters you are using on your website,
Your content will be shown 100% of the time.

let us take a break for a second and understand that elusive "TOFU" thing.
When text is rendered by a computer, sometimes there will be characters in the text that can not be displayed, because no font that supports them is available to the computer. When this occurs, small boxes are shown to represent the characters. We call those small boxes "tofu".

and example of Hand-picking your content (optimistic solution) can be found in the website <a href="http://umoji.eladkarako.com" target="_blank">umoji.eladkarako.com</a>, in which, 

<img src="https://icompile.eladkarako.com/_uploads/2016/10/icompile.eladkarako.com_notofu_no_tofu_empty_squares1.png" alt="icompile.eladkarako.com_notofu_no_tofu_empty_squares1" width="623" height="504"/>

I (really!) picked only the "symbol-like" characters which are shown well, on a Windows 7 with Courier-New monospace font, removing a lot of those characters shown as TOFU symbols.

A Real world dealing with those small boxes/little squares/tofu symbols (middle solution)
Choose a 3rd party font that includes enough scripts (or glyphs)
<!--more-->


Google's <a href="https://en.wikipedia.org/wiki/Noto_fonts" target="_blank">Noto</a> <sup><a href="https://github.com/googlei18n/noto-fonts" target="_blank">github.com/googlei18n/noto-fonts</a> <a href="https://www.google.com/get/noto/" target="_blank">google.com/get/noto/</a> </sup> (short for No-TOFU) tries to answer this problem by filling the font with ALL THE SCRIPS/GLYPHS possible,
(mostly by deriving from many already existing fonts, such as Droid fonts).


<blockquote>Noto-font, has quite a wide support (including Chinese (simplified and traditional), Japanese, Korean, Thai and Hindi) a font that is also known for wide usage (especially in Android devices, and which is forked by many vendors such as Samsung and even Microsoft) is <a href="https://en.wikipedia.org/wiki/Roboto" target="_blank">Roboto</a> especially for it's clearity on mobile-device's screens.</blockquote>

The complete Noto-family is quite a big download for a website that shown a, usually, mostly, US-ASCII content (and some Hebrew from time to time..)

Noto-font family is still under active development, but you can download and use it,
it works quite well, although it is still in its early access (alpha) phase.

as for support, although the current, most recent, Unicode version is ver9 (from 2016), The Noto-font will only support up until version 6.2 (Unicode 6.2.0 from September 26, 2012)