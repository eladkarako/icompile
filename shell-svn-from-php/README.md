install TortoiseSVN (in setup stage #2, activate "command-line tools").
checkout/update stuff in Windows, and first time you'll enter your auth-credentials and will save the certificate.

now:
in php run simple something like that:
<pre>
<?php
header('Content-Type: text/plain; charset=UTF-8');

print( shell_exec('svn log --limit 4 c:/work/mySVN/trunk  2>&1') );
</pre>

and you will probably get a 
<pre>
Updating 'C:\\work\\mySVN\\trunk':
Error validating server certificate for 'https://some.domain.com:8443':
...
Certificate information:
...
(R)eject, accept (t)emporarily or accept (p)ermanently? p
Authentication realm: <https://some.domain.com:8443> Subversion repositories
</pre>
after the error you'll get nothing to do but Google things up and probably make 
tens of thousands of combinations between batch files/wrap exe file you'll build in c++ around "svn up" in hope it will solve it, and also the native svn switches "--username" "--password" "--trust-server-cert" and "--non-interactive" will not work, this is since you can only "trust" a valid certificate, and most of the times,
you won't self-generate and ca sign a certificate for your own, there is no point in that,

remember when you have "accepted the certificate" in your Windows-GUI SVN-Playing?
you might be familiar with the command line version of it, and pressed "p" to accept permanently the certificate,

how could you do it in php?

like this (in this example I want to see last 4 logs in my project)

<pre>
<?php
header('Content-Type: text/plain; charset=UTF-8');

print( shell_exec('echo p | svn log --limit 4 c:/work/mySVN/trunk  2>&1') );

?>
</pre>


you can run this command ONCE!
and the site certificate has been saved (in another location),
so now you can remove the "echo p |"
and run the command as usual, like you'll run them from windows CMD like any batch file!


I have found the answer in this blog, to whom I am very grateful:

<a href="http://drealmer.tumblr.com/post/3405009903/subversion-when-trust-server-cert-isnt-enough" title="subversion-when-trust-server-cert-isnt-enough" target="_blank">http://drealmer.tumblr.com/post/3405009903/subversion-when-trust-server-cert-isnt-enough</a>