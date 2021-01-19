<h3>Yes, GitHub Pages Are Static (But...)</h3>
Yes, GitHub pages <strong>are</strong> static, and served from a <a href="https://en.wikipedia.org/wiki/Content_delivery_network">CDN</a> (through <a href="https://en.wikipedia.org/wiki/Varnish_(software)">Varnish</a>). 

Slightly before the content of your website is copied to the CDN, 
GitHub pipes the content through Jekyll, which is a site-generator engine. 

<h3>Seriously! What Jekyll Is Good For?</h3>
The most common way Jekyll is used, is to customize the generic GitHub website-template to your repository name and description, but it is also used to change markdown to HTML.
Advance users which include/edit their <code>_config.yml</code> in the root of the project can specify instructions to the Jekyll-engine for page-redirections and error-pages.

There are few pages that explain more about Jekyll and GitHub-pages: <a href="https://help.github.com/en/github/working-with-github-pages/about-github-pages-and-jekyll">https://help.github.com/en/github/working-with-github-pages/about-github-pages-and-jekyll</a>, <a href="https://help.github.com/en/github/working-with-github-pages/creating-a-github-pages-site-with-jekyll">https://help.github.com/en/github/working-with-github-pages/creating-a-github-pages-site-with-jekyll</a>.

<h3>I Don't See Any Problem Here!</h3>
Well, it is true that mostly you won't have any issues with your content being piped through Jekyll before it gets copied to the GitHub's CDN servers.. 

..Unless you want to:
<ol>
<li>Publish folders named <code>node_modules</code> or <code>vendor</code> (under the project's root <code>/</code>).</li>
<li>Having folders with a name that <strong>starts with</strong> underscore <code><a href="https://en.wikipedia.org/wiki/Underscore">_</a></code>, full-stop <code><a href="https://en.wikipedia.org/wiki/Full_stop">.</a></code> or hashtag <code><a href="https://en.wikipedia.org/wiki/Number_sign">#</a></code>.</li>
<li>Having any file or folder with a name that <strong>ends with</strong> tilde <code><a href="https://en.wikipedia.org/wiki/Tilde">~</a></code></li>
</ol>

You can however "force-include" those, by adding and editing your configuration file. But who wants that?..

<h3>Do I Need Jekyll?</h3>
If you don't use the default template suggested by GitHub, 
and don't base your website on the <code>README.md</code> file, 
then you don't need Jekyll! 

Even if you're using the default template, 
but you don't update your website - you can download your website using <a href="https://www.httrack.com/">https://www.httrack.com/</a>, <a href="https://en.wikipedia.org/wiki/Wget">https://en.wikipedia.org/wiki/Wget</a>, or even with your browser's built-in "Save-As.." by pressing the <kbd>CTRL</kbd>+<kbd>S</kbd> key-combination. 
Then you can clear up the repository from the old-files and upload those instead. 
And again: You don't Need Jekyll! 

<h3>Alright, I Don't Need Jekyll!</h3>
Very well. Include a <code>.nojekyll</code> file in the root of your branch that is used for the website. 
Normally it's your <code>master</code> branch by default, although if you have an old website, you might be using the <code>gh-pages</code> branch, which you can also use for your website if you create it manually.
See in the <em>settings</em> section of your repository.

Commit. Push. That's it!


<em>Read More About It:</em>
<a href="https://github.blog/2009-12-29-bypassing-jekyll-on-github-pages/">https://github.blog/2009-12-29-bypassing-jekyll-on-github-pages/</a>
<a href="https://github.com/zeit/next.js/issues/2029">https://github.com/zeit/next.js/issues/2029</a>
