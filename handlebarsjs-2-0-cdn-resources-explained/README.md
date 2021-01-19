<em>First Off..</em>
what is <strong>runtime?</strong>

according to http://handlebarsjs.com/precompilation.html
you may pre-compile all your designated templates (- say you'll have dynamic data set but constant website structure).

so essentially you do not need any of the engines used by Handlebars to compile templates.
this is where you grab your "SLIM" version of the Handlebars, named "runtime".


AMD are modules used by RequireJS, used as a <strong>SHIM</strong> its essentially a file-loader + callback when its done.
Handlebars have an amd version of both the regular (a.k.a FULL) and the runtime (a.k.a NO COMPILER), 
follow example <a href="http://stackoverflow.com/a/21366495/257319" title="how-to-load-handlebars-runtime-with-requirejs" target="_blank">here...</a>.

CLOUDFLARE has it all...

<blockquote>
<a href="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/2.0.0/handlebars.amd.js" target="_blank">https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/2.0.0/handlebars.amd.js</a>

<a href="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/2.0.0/handlebars.amd.min.js" target="_blank">https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/2.0.0/handlebars.amd.min.js</a>

<a href="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/2.0.0/handlebars.js" target="_blank">https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/2.0.0/handlebars.js</a>

<a href="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/2.0.0/handlebars.min.js" target="_blank">https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/2.0.0/handlebars.min.js</a>

<a href="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/2.0.0/handlebars.runtime.amd.js" target="_blank">https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/2.0.0/handlebars.runtime.amd.js</a>

<a href="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/2.0.0/handlebars.runtime.amd.min.js" target="_blank">https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/2.0.0/handlebars.runtime.amd.min.js</a>

<a href="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/2.0.0/handlebars.runtime.js" target="_blank">https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/2.0.0/handlebars.runtime.js</a>

<a href="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/2.0.0/handlebars.runtime.min.js" target="_blank">https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/2.0.0/handlebars.runtime.min.js</a>

</blockquote>

