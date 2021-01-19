part #1. create a nice fat crt. 
(pre: download openssl, install, add to bin/ folder to path, create new folder c:\\tmp, cd c:\\tmp, exe. commands)

<strong>
openssl req -new > webserver.csr
openssl rsa -in privkey.pem -out webserver.key
openssl x509 -in webserver.csr -out webserver.cert -req -signkey webserver.key -days 99999


<del datetime="2013-01-11T23:57:49+00:00">
openssl genrsa -out webserver.csr 4096
openssl req -nodes -newkey rsa:4096 -keyout privkey.pem -out webserver.cert
openssl rsa -in privkey.pem -out webserver.key</del>
</strong>

result is: .rnd, privkey.pem, webserver.cert, webserver.csr, webserver.key



part #2:
new folder C:\\wamp\\OpenSSL\\
inside: new folders: certs, crl, newcerts, private

copy:
<strong>
c:\\tmp\\webserver.cert -> C:\\wamp\\OpenSSL\\certs\\
c:\\tmp\\webserver.csr  -> C:\\wamp\\OpenSSL\\certs\\
c:\\tmp\\webserver.key  -> C:\\wamp\\OpenSSL\\certs\\

c:\\tmp\\.rnd           -> C:\\wamp\\OpenSSL\\private\\
c:\\tmp\\privkey.pem    -> C:\\wamp\\OpenSSL\\private\\
</strong>