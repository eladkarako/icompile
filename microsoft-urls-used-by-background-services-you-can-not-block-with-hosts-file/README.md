Blocking or routing URL-addresses using the HOSTS-file is quite and easy practice to master,
Here are few of Microsoft's URL-addresses, used by background-services,
That would not "pass-through" the standard-HOSTS file DNS resolution, which means, that
trying to "block" (<code>127.0.0.*</code> with no internal-server running, or <code>0.0.0.0</code>) or redirect those will do little to none..

<ol>
<li>www.msdn.com</li>
<li>msdn.com</li>
<li>www.msn.com</li>
<li>msn.com</li>
<li>go.microsoft.com</li>
<li>msdn.microsoft.com</li>
<li>office.microsoft.com</li>
<li>microsoftupdate.microsoft.com</li>
<li>wustats.microsoft.com</li>
<li>support.microsoft.com</li>
<li>www.microsoft.com</li>
<li>microsoft.com</li>
<li>update.microsoft.com</li>
<li>download.microsoft.com</li>
<li>microsoftupdate.com</li>
<li>windowsupdate.com</li>
<li>windowsupdate.microsoft.com</li>
</ol>

You can find the <code>dnsapi.dll</code> under this path: <code>C:\\Windows\\System32\\dnsapi.dll</code>

<img src="https://icompile.eladkarako.com/_uploads/2016/08/icompile.eladkarako.com_microsoft_urls_used_by_background_services_you_can_not_block_with_hosts_file.gif" alt="icompile.eladkarako.com_microsoft_urls_used_by_background_services_you_can_not_block_with_hosts_file" width="561" height="401" class="alignnone size-full wp-image-6027" />

You can still block those using <strong>this router trick: <a href="https://icompile.eladkarako.com/easy-router-ad-block/" target="_blank">iCompile - Easy Router Ad-Block</a></strong>

Since it still uses the DNS-engine, just ignores any redirects from HOSTS.