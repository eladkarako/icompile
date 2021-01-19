easy!

<a href="https://icompile.eladkarako.com/_uploads/2012/12/2012-12-26_225409.jpg"><img class="alignnone size-medium wp-image-577" title="2012-12-26_225409" src="https://icompile.eladkarako.com/_uploads/2012/12/2012-12-26_225409.jpg" alt="" width="300" height="137" /></a>

by default, you will have a limitaion on access to the server, allowing only connections from 127.0.0.1 (your own localhost, also known as "your PC"),
it  can be modified turning your computer or any machine into a server, use your ip or dns (if you are in another network that gave your computer a nice nick-name)

<!--more--><!--more-->

click wamp icon,

under sub-menu "apache" select httpd.conf

(you can can open it in an editor of your choice, its on the latest wamp version it is in <em>C:\\wamp\\bin\\apache\\apache2.2.22\\conf\\httpd.conf </em>)

scroll or search <em><strong>allow</strong></em>

when you will get a block saying:

<span style="color: #ff0000;"><em><strong>Order Deny,Allow</strong></em></span>
<span style="color: #ff0000;"><em><strong> Deny from all</strong></em></span>
<span style="color: #ff0000;"><em><strong> Allow from 127.0.0.1</strong></em></span>

replace it with:

<span style="color: #008000;"><em><strong>Order Allow,Deny</strong></em></span>
<span style="color: #008000;"><em><strong> Allow from all</strong></em></span>

&nbsp;

and restart all your WAMP services.

&nbsp;

here is the complete block of configuration:

<span style="color: #008080;">&lt;Directory "c:/wamp/www/"&gt;</span>

<span style="color: #008080;">#</span>

<span style="color: #008080;"># Possible values for the Options directive are "None", "All",</span>

<span style="color: #008080;"># or any combination of:</span>

<span style="color: #008080;"># Indexes Includes FollowSymLinks SymLinksifOwnerMatch ExecCGI MultiViews</span>

<span style="color: #008080;">#</span>

<span style="color: #008080;"># Note that "MultiViews" must be named *explicitly* --- "Options All"</span>

<span style="color: #008080;"># doesn't give it to you.</span>

<span style="color: #008080;">#</span>

<span style="color: #008080;"># The Options directive is both complicated and important. Please see</span>

<span style="color: #008080;"># http://httpd.apache.org/docs/2.2/mod/core.html#options</span>

<span style="color: #008080;"># for more information.</span>

<span style="color: #008080;">#</span>

<span style="color: #008080;">Options Indexes FollowSymLinks</span>

<span style="color: #008080;"> </span>

<span style="color: #008080;">#</span>

<span style="color: #008080;"># AllowOverride controls what directives may be placed in .htaccess files.</span>

<span style="color: #008080;"># It can be "All", "None", or any combination of the keywords:</span>

<span style="color: #008080;"># Options FileInfo AuthConfig Limit</span>

<span style="color: #008080;">#</span>

<span style="color: #008080;">AllowOverride all</span>

<span style="color: #008080;"> </span>

<span style="color: #008080;">#</span>

<span style="color: #008080;"># Controls who can get stuff from this server.</span>

<span style="color: #008080;">#</span>

<span style="color: #008080;"> </span>

<span style="color: #008080;"># onlineoffline tag - don't remove</span>

<span style="color: #008080;">Order Allow,Deny</span>

<span style="color: #008080;">#Allow from 127.0.0.1</span>

<span style="color: #008080;">Allow from all</span>

<span style="color: #008080;"> </span>

<span style="color: #008080;">&lt;/Directory&gt;</span>

<span style="color: #008080;"> </span>