might be usefulllllllllllll soooooonnnnnnn....
<pre>
/*
 * ipv4_to_bytearray()
 *	Converts an IPv4 address dotted string to a byte array.
 */
function ipv4_to_bytearray(ipaddr) {
  ipaddr += "";
  var ip = ipaddr.match(/^\\s*(\\d{1,3})\\s*[.]\\s*(\\d{1,3})\\s*[.]\\s*(\\d{1,3})\\s*[.]\\s*(\\d{1,3})\\s*$/);
  if (!ip) {
    return 0;
  }
  var a = [];
  for (var i = 1, q = 0; i < = 4; i++) {
    q = parseInt(ip[i], 10);
    if (q < 0 || q > 255) {
      return 0;
    }
    a[i - 1] = q;
  }
  return a;
}

/*
 * is_ipv4_valid()
 *	Checks is an IP address dotted string is valid.
 */
function is_ipv4_valid(ipaddr) {
  return ipv4_to_bytearray(ipaddr) !== 0;
}

/*
 * integer_to_ipv4()
 *	Converts an integer (signed or not) to an IPv4 address dotted string.
 */
function integer_to_ipv4(num) {
  var ip = "";
  for (var i = 3, q = 0, n = 0; i >= 0; i--) {
    n = i * 8;
    q = (num & (0xFF < < n)) >> n;
    if (q < 0) {
      q = q & 0xFF;
    }
    ip += q.toString(10);
    if (i > 0) {
      ip += ".";
    }
  }
  return ip;
}

/*
 * ipv4_to_unsigned_integer()
 *	Converts an IPv4 address dotted string to an unsigned integer.
 */
function ipv4_to_unsigned_integer(ipaddr) {
  var ip = ipv4_to_bytearray(ipaddr);
  if (!ip) {
    return null;
  }
  var uint = 0;
  for (var i = 0; i < 4; i++) {
    uint = uint * 256 + ip[i];
  }
  return uint;
}

/*
 * is_port_valid()
 *	Checks if a port is valid.
 */
function is_port_valid(port) {
  return (is_number(port) && port >= 0 && port < 65536);
}

/*
 * is_mac_valid()
 *	Checks if a MAC address is in a valid form.
 *	Allow 00:00:00:00:00:00 and FF:FF:FF:FF:FF:FF if optional argument full_range is true.
 */
function is_mac_valid(mac, full_range) {
  mac += "";
  if (!mac.match(/^([0-9a-fA-F]{2}[:-]?){5}[0-9a-fA-F]{2}$/)) {
    return false;
  }
  mac = mac.replace(/[:-]/g, '');
  if (!full_range && (mac.match(/^0{12}$/) || mac.match(/^[fF]{12}$/))) {
    return false;
  }
  return true;
}

</pre></pre>