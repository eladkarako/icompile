<!--more-->
<a href="https://gist.github.com/NoelBaron" target="_blank">NoelBaron</a> <a href="https://gist.github.com/isaacs/357981#gistcomment-1848031" target="_blank">commented</a> "con" to the comma-first style brought by <a href="https://gist.github.com/isaacs/357981" target="_blank">this gist</a> some time ago.

<blockquote>For nearly 16 years of our lives, we write essay after essay using commas. On top of that, we write billions of emails. With all the variables and preferences in our shared environments, shouldn't we at least adhere to our life-long habit of left-to-right comma interpretation?

In my humble opinion, I prefer reading code that isn't totally opposite our natural tendencies.

This doesn't feel natural at all, although technically it is the same text:

<pre>
For nearly 16 years of our lives
, we write essay after essay using commas. On top of that
, we write billions of emails. With all the variables and preferences in our shared environments
, shouldn't we at least adhere to our life-long habit of left-to-right comma interpretation?
</pre></blockquote>

Although seems like a compelling argument, at first, 
- we must remember that the linguistics of a code-block hence readability does not always in parallel with natural-language processing, at least "human style" (since 100% of the time code-block should be consider compiler-friendly, first.

This how I've saw it in <a href="https://gist.github.com/isaacs/357981#gistcomment-1906169" target="_blank">my reply oh GitHub</a>:
<blockquote>
<a href="https://github.com/NoelBaron" target="_blank">@NoelBaron</a>, linguistically, a compound-sentence has a comma so you'll pretty much know when to halt for a breather, but on your sample text, inserting a line-break before the comma <em>(creating a comma-first look)</em> also implies a full-stop or a new paragraph, comma on code has no linguistics value, and one should not be looking for such. On inventing a new program-language, we might as well use pipeline, hash-tag or any other characters to separate code-blocks, which do not have analogous meaning <em>in English language-composition</em> thus, not creating this confusion.

Most of pro-comma-first developers usually mention their lack of forgotten commas at the end of a long line of code, or even the <em>OCD relief</em> of same-column-straightening of characters ;)

Anyway, the comma-first convention is gaining quite a lot of popularity among users lately, 
I can say that software-developers at Google (Israel) are using it on most of the new projects, due to its superb readability.
</blockquote>

