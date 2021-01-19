this will enable:
- Enable Copy &amp; Paste (Ctrl+C / Ctrl + V, and Ins..)
- Enable Right-Click Menu.

<!--more-->
<pre>
(function (window, document) {
    var arr = document.querySelectorAll('input[name*="pass"]'),
        len = arr.length,
        i = 0;

    for (; i < len; i += 1) {
        (arr[i].parentNode) && (arr[i].parentNode.replaceChild(arr[i].cloneNode(true), arr[i]));
    }

}(window, document));
 

</pre>



edit: 201407200514AM:
4Neal:
applying javascript code is quite easy, while browsing Chrome,
hit [F12], and switch to "console" tab, which will allow you to
inject your code into the page (copy & paste it, and hit [Enter]),
there are alternatives, such as putting all the content into one long line,
adding the "javascript:" prefix (w/o the inverted commas) and adding 
this line to a newly created "bookmarklet" (new bookmark which its 
source is not a url, but a javascript code), the first way is the 
easiest one. it might even work..  :) 