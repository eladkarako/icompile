<a href="https://dns.google.com/resolve?name=example.com" target="_blank">https://dns.google.com/resolve?name=example.com</a>

Will give you:
<pre>
{"Status": 0,"TC": false,"RD": true,"RA": true,"AD": true,"CD": false,"Question":[ {"name": "example.com.","type": 1}],"Answer":[ {"name": "example.com.","type": 1,"TTL": 36524,"data": "93.184.216.34"}]}
</pre>

You can see more switches at this version:
<a href="https://dns.google.com/query?name=example&type=A&dnssec=true" target="_blank">https://dns.google.com/query?name=example&type=A&dnssec=true</a>

Read more:
<a href="https://developers.google.com/speed/public-dns/docs/dns-over-https" target="_blank">https://developers.google.com/speed/public-dns/docs/dns-over-https</a>