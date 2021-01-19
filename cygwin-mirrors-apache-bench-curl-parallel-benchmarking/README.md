cat urls | parallel --jobs 4 --load 6 'curl -s -w "%{time_total}\
" -o /dev/null {}'

https://cygwin.com/mirrors.lst


https://www.gnu.org/software/parallel/man.html


------------------
list unique:
3 127.0.0.1
2 192.168.1.1
1 192.168.1.2 

cat ips.txt | sort | uniq -c | sort -rn | parallel --colsep ' +' echo {2} {1}
', 'Cygwin Mirrors, Apache Bench, cURL