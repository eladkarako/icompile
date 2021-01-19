<pre>
#case:     dynamic-ip websites (cause varies: haproxy, geolocation, CDNs, load-balancing, generic rule of thumb, etc..)
#solution: resolve once (keep it static)

when RULE_INIT {
   set static::mydns 192.168.184.180
}
when HTTP_REQUEST {
   #--------------------------------------take host from http header
   set myhost [HTTP::header "Host"]

   #--------------------------------------resolve using DNS (and keep it)
   set allips [RESOLV::lookup @$static::mydns -a $myhost]

   #--------------------------------------handle error
   if {$allips eq ""}{
     log local0. "revlook-irule-log -*-*- error: could not resolve host: $myhost"
     return
   }

   set myip [lindex $allips 0]
   log local0.   "revlook-irule-log -*-*- success: resolve host: $myhost --- to ip: $myip"

   #-------------------------select the ip 
   node $myip
}
 
 
      
</pre>
