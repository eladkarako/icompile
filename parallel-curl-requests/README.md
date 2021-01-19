Multi-processing the cUrl execute (on windows) can enable a very easy and fast way to roll a small-scale load/traffic test on a resource,
Although there are probably better ways (multi curl lib-python, curl_multi-php), this kind of "all include" one nice solution.

as a bonus, there is some xff (X-Forward-For) header input from text file.

the sample project is attached as rar, its open, free to use (under GPL).

-pre:
-- get a compiled curl (w or w/o libssl32.dll, 32bit or 64bit, it really does not matter)

---request.cmd
-----------------------------
@echo off

set sUserAgent="Mozilla/5.0 (Windows NT 5.2; WOW64) AppleWebKit/537.1 (KHTML, like Gecko) Chrome/21.0.1180.89 Safari/537.1"
set sHOST=%1
set sIP=%2

::.\\curl.exe --header "X-Forwarded-For: %sIP%" --user-agent %sUserAgent% --referer %sHOST% --verbose %sHOST%
.\\curl.exe --header "X-Forwarded-For: %sIP%" --user-agent %sUserAgent% --referer %sHOST% --silent %sHOST%

exit

---run20.cmd
----------------------------
@echo off
echo I am the runner

set HOST=__host.txt
set IP=__country_Afghanistan_20.txt

for /f "tokens=* delims= " %%a in (%HOST%) do (
for /f "tokens=* delims= " %%b in (%IP%) do (
start /b /min /low "cmd /c "call request.cmd %%a %%b
)
)
exit

---__country_Afghanistan_20.txt
210.80.29.156
175.106.44.147
210.80.20.153
111.125.156.144
121.127.53.184
203.215.38.139
180.94.76.33
202.56.178.46
180.94.95.100
58.147.130.55
58.147.144.53
121.127.38.249
210.80.27.69
125.213.222.141
210.80.7.11
125.213.218.47
58.147.153.70
180.222.137.96
180.94.65.4
175.106.40.162

---__host.txt
http://172.29.42.113/blank2.html

&nbsp;

<a href="https://github.com/eladkarako/icompile/releases/download/latest/parallelRequester.rar">https://github.com/eladkarako/icompile/releases/download/latest/parallelRequester.rar</a>
