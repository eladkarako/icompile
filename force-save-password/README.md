Allowing the browser's password-manager to save the login data, meaning user-name and password, even if it is in a SSL (for example https secured websites).

it is done by setting the autocomplete attribute of forms and password field to "on".

put easily as a bookmark button (known as 'snippet').
<img src="https://icompile.eladkarako.com/_uploads/2010-07-28_082336.jpg" alt="" title="2010-07-28_082336" width="87" height="73" class="alignnone size-full wp-image-87" />
add this to your bookmark (or favorites) toolbar:
<pre>
javascript:(function (){var a,b,c,d,e,f,g,h,i;a=b=c=0;d=document.forms;for(f=0;f<d.length;++f){h=d[f];e=h.elements;if(h.onsubmit){h.onsubmit="";++c}if(h.attributes.autocomplete){h.attributes.autocomplete.value="on";++a}for(g=0;g<e.length;++g){i=e[g];if(i.attributes.autocomplete){i.attributes.autocomplete.value="on";++b}}}
alert("Auto-Complete Has Been Re-Applied To:\
-----------------------------------------------\
Forms: "+(a+" form"+(a==1?"":"s"))+" .\
Forms Elements: "+(b+" form element"+(b==1?"":"s"))+" .\
On-Submits: "+(c+" form"+(c==1?"":"s"))+" .");})();
</pre>

You can look at the formatted code for better understanding:
<em>(it is slightly different)</em>
<pre>
(function () {
    var ca, cea, cs, df, dfe, i, j, x, y;

    function n(i, what) {
        return i + " " + what + ((i == 1) ? "" : "s")
    }
    ca = cea = cs = 0;
    df = document.forms;
    for (i = 0; i < df.length; ++i) {
        x = df[i];
        dfe = x.elements;
        if (x.onsubmit) {
            x.onsubmit = "";
            ++cs;
        }
        if (x.attributes["autocomplete"]) {
            x.attributes["autocomplete"].value = "on";
            ++ca;
        }
        for (j = 0; j < dfe.length; ++j) {
            y = dfe[j];
            if (y.attributes["autocomplete"]) {
                y.attributes["autocomplete"].value = "on";
                ++cea;
            }
        }
    }
    alert("Auto-Complete Has Been Re-Applied To:\
-----------------------------------------------\
Forms: " + n(ca, "form") + " .\
Forms Elements: " + n(cea, "form element") + " .\
On-Submits: " + n(cs, "form") + " .");
})();
</pre>
Example Using PayPal
<a href="https://icompile.eladkarako.com/_uploads/2010-07-28_082554.jpg"><img src="https://icompile.eladkarako.com/_uploads/2010-07-28_082554.jpg" alt="" title="2010-07-28_082554" width="150" height="150" class="size-thumbnail wp-image-88" /></a>