<h4>VirusTotal On The Web Became So $hitty!!!</h4>
I've used to grab information from VirusTotal a lot for my anti-ads HOSTS project <sup><a href="https://hosts.eladkarako.com/">#1</a></sup>, 
but since they've changed the design of the website, 
to a more dynamic-structure with an extensive use of ShadowDom <sup><a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM">#1</a></sup>
even a copy&amp;paste action became too much to handle, 
every action or click "took away" from a limited set of the daily API-calls allowed, 
navigating throught the UI became almost impossible, and by the time I got the the sub-domain/sibling-domain section most of the amount of the API-calls allows were gone.

<h4>Simple API client</h4>
Once you've generated your API-key, 
all you need to do is some-sort of a request/response handler
and you're good to go!

<h4>Easy Copy&amp;Paste!</h4>
I first set the program to recive input from an external-inputbox-program, 
which allowd me to use copy&amp;paste into it, and hit <kbd>ENTER</kbd>, 
and the result from VirusTotal I sorted and <em>dumped</em> into a temp. text file in the computer temp. folder, 
opening it with a <a href="https://github.com/eladkarako/mods/tree/store/Notepad%202.0">modified version of Notepad2</a>, 
allowing me an easily way to copy the content.

<h4>How To Use</h4>
The project sits in GitHub: 
https://github.com/eladkarako/Domain-subdomains-With-VirusTotal-API-and-NodeJS 
you can use it, but first generate an API key and paste it into the <code>API.txt</code> file, 
more instructions are in the project-page.
