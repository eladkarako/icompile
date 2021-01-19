Used for Chrome/Chromium <code>--precache-config-settings-url</code>

or <strong><em><a href="https://github.com/GoogleChrome/sw-precache" title="https://github.com/GoogleChrome/sw-precache" target="_blank">sw-precache</a></em></strong>'s <code>--config=path/to/sw-precache-config.js</code> switch,

it may also work with Polymer-framework, since Polymer <em><a href="https://www.polymer-project.org/1.0/toolbox/service-worker" title="https://www.polymer-project.org/1.0/toolbox/service-worker" target="_blank">is also using the same format</a></em>.

It is basically a JSON.

<!--more-->


Example #1:
<pre>
{
  staticFileGlobs: [
    'app/css/**.css',
    'app/**.html',
    'app/images/**.*',
    'app/js/**.js'
  ],
  stripPrefix: 'app/',
  runtimeCaching: [{
    urlPattern: /this\\\\.is\\\\.a\\\\.regex/,
    handler: 'networkFirst'
  }]
}
</pre>


Example #2:
<pre>
{
  "staticFileGlobs": [
    "app/css/**.css",
    "app/**.html",
    "app/images/**.*",
    "app/js/**.js"
  ],
  "stripPrefix": "app/"
}
</pre>
