download a full-length file from archive.org, trimming it (with any method you'll like to) to about 300kb gzip file, which are about 2.5mb txt file which are about 2570 requests (line separated), you can open it with a notepad2/editplus/notepad++ editor that can handle those sort-of-file-sizes,
and remove the last line, which is usually partial due to the trimming (..the step before).

parsing is quite easy, perl/python and even bash has a sample on extracting tsv/csv data,
you can download here an easy to use (fully working) example (that would probably will also work for the untrimmed file): <a href="https://github.com/eladkarako/icompile/releases/download/latest/http_archive_parse.rar">https://github.com/eladkarako/icompile/releases/download/latest/http_archive_parse.rar</a>

<a href="https://icompile.eladkarako.com/_uploads/2013/11/2013-11-26_135041.jpg"><img class="alignnone size-full wp-image-848" alt="2013-11-26_135041" src="https://icompile.eladkarako.com/_uploads/2013/11/2013-11-26_135041.jpg" width="189" height="182" /></a> 

<a href="https://icompile.eladkarako.com/_uploads/2013/11/2013-11-26_135023.jpg"><img class="alignnone size-full wp-image-849" alt="2013-11-26_135023" src="https://icompile.eladkarako.com/_uploads/2013/11/2013-11-26_135023.jpg" width="220" height="97" /></a> 

this includes automated download, and parsing. use the cmd file for windows (you should modify it a bit to be used in linux, but it can be done easily). the sh file is a "line-parser" by field to the CSV. note #1: the last line in requests.txt is removed since it will be corrupted (the gzip file, line based compressed, so we just removing the last line to make it valid even though the file is trunked) 

note #2: see http://httparchive.org/downloads.php for more details.

note #3: the CSV does not includes header, so I've added it taking it from the MYSQL scheme available here:
http://httparchive.org/downloads/httparchive_schema.sql
(db-table name: "requests")

----

how to download
<pre>
::@echo off

set sURL=http://www.archive.org/download/httparchive_downloads_Nov_15_2013/httparchive_Nov_15_2013_requests.csv.gz

::----------------------------------------------------------------------------------------------
set exePath=.\
esource
set csvHeader=requestid,pageid,startedDateTime,time,method,url,urlShort,redirectUrl,firstReq,firstHtml,reqHttpVersion,reqHeadersSize,reqBodySize,reqCookieLen,reqOtherHeaders,status,respHttpVersion,respHeadersSize,respBodySize,respSize,respCookieLen,expAge,mimeType,respOtherHeaders,req_accept,req_accept_charset,req_accept_encoding,req_accept_language,req_connection,req_host,req_if_modified_since,req_if_none_match,req_referer,req_user_agent,resp_accept_ranges,resp_age,resp_cache_control,resp_connection,resp_content_encoding,resp_content_language,resp_content_length,resp_content_location,resp_content_type,resp_date,resp_etag,resp_expires,resp_keep_alive,resp_last_modified,resp_location,resp_pragma,resp_server,resp_transfer_encoding,resp_vary,resp_via,resp_x_powered_by
::----------------------------------------------------------------------------------------------

::cleanup
del /f /q requests.gz
del /f /q requests.txt
del /f /q requests_fixed.txt


::download 300kb ~~ 2.5mb txt file ~~ 2570 requests (line separated)
%exePath%\\curl.exe --location-trusted --output requests.gz --range 0-307200 "%sURL%"

::un-gz
%exePath%\\7z.exe x requests.gz >nul

::cleanup
del /f /q requests.gz

::fix - remove last line since it will be corrupted 
%exePath%\\head.exe -n -1 requests.txt > requests_fixed.txt

::cleanup
del /f /q requests.txt

echo %csvHeader% >requests.txt
%exePath%\\cat.exe requests_fixed.txt >>requests.txt

::cleanup
del /f /q requests_fixed.txt
</pre>


how to parse
<pre>
#!/bin/bash
INPUT=requests.txt
OLDIFS=$IFS
IFS=,
[ ! -f $INPUT ] && { echo "$INPUT file not found"; exit 99; }
while read method url redirectUrl
do
        echo "method : $method"
        echo "url : $url"
        echo "redirectUrl : $redirectUrl"
done < $INPUT
IFS=$OLDIFS
</pre>






y2013m12d10 update:
download schema from http://httparchive.org/downloads/httparchive_schema.sql
extract requests table creation script:

<pre>
CREATE TABLE `requests` (
  `requestid` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `pageid` INT(10) UNSIGNED NOT NULL,
  `startedDateTime` INT(10) UNSIGNED DEFAULT NULL,
  `time` INT(10) UNSIGNED DEFAULT NULL,
  `method` VARCHAR(32) DEFAULT NULL,
  `url` TEXT,
  `urlShort` VARCHAR(255) DEFAULT NULL,
  `redirectUrl` TEXT,
  `firstReq` TINYINT(1) NOT NULL,
  `firstHtml` TINYINT(1) NOT NULL,
  `reqHttpVersion` VARCHAR(32) DEFAULT NULL,
  `reqHeadersSize` INT(10) UNSIGNED DEFAULT NULL,
  `reqBodySize` INT(10) UNSIGNED DEFAULT NULL,
  `reqCookieLen` INT(10) UNSIGNED NOT NULL,
  `reqOtherHeaders` TEXT,
  `status` INT(10) UNSIGNED DEFAULT NULL,
  `respHttpVersion` VARCHAR(32) DEFAULT NULL,
  `respHeadersSize` INT(10) UNSIGNED DEFAULT NULL,
  `respBodySize` INT(10) UNSIGNED DEFAULT NULL,
  `respSize` INT(10) UNSIGNED DEFAULT NULL,
  `respCookieLen` INT(10) UNSIGNED NOT NULL,
  `expAge` INT(10) UNSIGNED NOT NULL,
  `mimeType` VARCHAR(255) DEFAULT NULL,
  `respOtherHeaders` TEXT,
  `req_accept` VARCHAR(255) DEFAULT NULL,
  `req_accept_charset` VARCHAR(255) DEFAULT NULL,
  `req_accept_encoding` VARCHAR(255) DEFAULT NULL,
  `req_accept_language` VARCHAR(255) DEFAULT NULL,
  `req_connection` VARCHAR(255) DEFAULT NULL,
  `req_host` VARCHAR(255) DEFAULT NULL,
  `req_if_modified_since` VARCHAR(255) DEFAULT NULL,
  `req_if_none_match` VARCHAR(255) DEFAULT NULL,
  `req_referer` VARCHAR(255) DEFAULT NULL,
  `req_user_agent` VARCHAR(255) DEFAULT NULL,
  `resp_accept_ranges` VARCHAR(255) DEFAULT NULL,
  `resp_age` VARCHAR(255) DEFAULT NULL,
  `resp_cache_control` VARCHAR(255) DEFAULT NULL,
  `resp_connection` VARCHAR(255) DEFAULT NULL,
  `resp_content_encoding` VARCHAR(255) DEFAULT NULL,
  `resp_content_language` VARCHAR(255) DEFAULT NULL,
  `resp_content_length` VARCHAR(255) DEFAULT NULL,
  `resp_content_location` VARCHAR(255) DEFAULT NULL,
  `resp_content_type` VARCHAR(255) DEFAULT NULL,
  `resp_date` VARCHAR(255) DEFAULT NULL,
  `resp_etag` VARCHAR(255) DEFAULT NULL,
  `resp_expires` VARCHAR(255) DEFAULT NULL,
  `resp_keep_alive` VARCHAR(255) DEFAULT NULL,
  `resp_last_modified` VARCHAR(255) DEFAULT NULL,
  `resp_location` VARCHAR(255) DEFAULT NULL,
  `resp_pragma` VARCHAR(255) DEFAULT NULL,
  `resp_server` VARCHAR(255) DEFAULT NULL,
  `resp_transfer_encoding` VARCHAR(255) DEFAULT NULL,
  `resp_vary` VARCHAR(255) DEFAULT NULL,
  `resp_via` VARCHAR(255) DEFAULT NULL,
  `resp_x_powered_by` VARCHAR(255) DEFAULT NULL,
  PRIMARY KEY (`requestid`),
  UNIQUE KEY `startedDateTime` (`startedDateTime`,`pageid`,`urlShort`),
  KEY `pageid` (`pageid`)
) ENGINE=MYISAM AUTO_INCREMENT=1070623634 DEFAULT CHARSET=latin1;
</pre>

run query to create table and then export it to CSV (table is empty..) to get all the headers in easy copy&&paste format.
<pre>
requestid,pageid,startedDateTime,time,method,url,urlShort,redirectUrl,firstReq,firstHtml,reqHttpVersion,reqHeadersSize,reqBodySize,reqCookieLen,reqOtherHeaders,status,respHttpVersion,respHeadersSize,respBodySize,respSize,respCookieLen,expAge,mimeType,respOtherHeaders,req_accept,req_accept_charset,req_accept_encoding,req_accept_language,req_connection,req_host,req_if_modified_since,req_if_none_match,req_referer,req_user_agent,resp_accept_ranges,resp_age,resp_cache_control,resp_connection,resp_content_encoding,resp_content_language,resp_content_length,resp_content_location,resp_content_type,resp_date,resp_etag,resp_expires,resp_keep_alive,resp_last_modified,resp_location,resp_pragma,resp_server,resp_transfer_encoding,resp_vary,resp_via,resp_x_powered_by
</pre>

download to desktop and extract the entire archive of requests for December
http://www.archive.org/download/httparchive_downloads_Dec_1_2013/httparchive_Dec_1_2013_requests.csv.gz
rename requests.txt to httparchive_Dec_1_2013_requests.csv

(download of 2.23GB, at rate of about 1.5MB, will take about 33 minutes).

use cygwin (or win32 compiled fgrep, by cygwin is better here..)
and run the following command to extract only the lines (this file is line based) of the hosts we are interested in:
**note the "DESKTOP" location
<pre>
LC_ALL=C fgrep 'tuoitre.vn' "c:/users/karako/Desktop/httparchive_Dec_1_2013_requests.csv" >c:/users/karako/Desktop/httparchive_Dec_1_2013_requests__tuoitrevn.csv
</pre>

now you'll have smaller CSV, note that the original csv file nor this will not have headers in it.
you might want to copy and paste it to the first line (for any reason)..

this is the result CSV contains only the host 'tuoitre.vn', with headers..
<a href="https://github.com/eladkarako/icompile/releases/download/latest/httparchive_Dec_1_2013_requests__tuoitrevn.csv.7z">https://github.com/eladkarako/icompile/releases/download/latest/httparchive_Dec_1_2013_requests__tuoitrevn.csv.7z</a>




now you can run the shell script to map it to a cURL request, 
(assumes the CSV file is on your desktop)

(parse.sh content:)
<pre>
#!/bin/bash
INPUT=c:/users/karako/Desktop/httparchive_Dec_1_2013_requests.csv
OLDIFS=$IFS
IFS=,
[ ! -f $INPUT ] && { echo "$INPUT file not found"; exit 99; }
while read method url redirectUrl
do
    echo "method : $method"
    echo "url : $url"
    echo "redirectUrl : $redirectUrl"
    echo "reqOtherHeaders : $reqOtherHeaders"
    echo "req_user_agent : $req_user_agent"
    echo "---------------------------------------------------"
done < $INPUT
IFS=$OLDIFS
</pre>


*don't forget..
<pre>
chmod u+x parse.sh
./parse.sh
</pre>


*** update 
output example:
<pre>
---------------------------------------------------
method : "1045176502"
url : "12623315"
redirectUrl : "1385861436","191","GET","https://yolacom.yolacdn.net/assets/img/slider/07_blueprintforjonas_tn.jpg","https://yolacom.yolacdn.net/assets/img/slider/07_blueprintforjonas_tn.jpg",N,"0","0","1.1",N,N,"0","X-Download-Initiator = image="doc F300 win 1458; image; src; enter tree"","200","1.1",N,"23961","23961","0","1","image/jpeg","Yola-ID = web1 D=199 t=1385159099295583","image/png, image/svg+xml, image/*;q=0.8, */*;q=0.5",N,"gzip, deflate","en-US","Keep-Alive","yolacom.yolacdn.net",N,N,"https://www.yola.com/","Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0; PTST 2.361)","bytes",N,"max-age=1","keep-alive",N,N,"23961",N,"image/jpeg","Sun, 01 Dec 2013 09:30:37 GMT",""6a7d71-5d99-4ebc7b1028f80"","Sun, 01 Dec 2013 09:30:38 GMT",N,"Fri, 22 Nov 2013 17:53:27 GMT",N,N,"Apache",N,N,N,N
reqOtherHeaders :
req_user_agent :
---------------------------------------------------
method : "1045176504"
url : "12623315"
redirectUrl : "1385861436","338","GET","https://yolacom.yolacdn.net/assets/img/slider/08_bodybar_tn.jpg","https://yolacom.yolacdn.net/assets/img/slider/08_bodybar_tn.jpg",N,"0","0","1.1",N,N,"0","X-Download-Initiator = image="doc F300 win 1458; image; src; enter tree"","200","1.1",N,"22489","22489","0","1","image/jpeg","Yola-ID = web2 D=271 t=1385685922213243","image/png, image/svg+xml, image/*;q=0.8, */*;q=0.5",N,"gzip, deflate","en-US","Keep-Alive","yolacom.yolacdn.net",N,N,"https://www.yola.com/","Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0; PTST 2.361)","bytes",N,"max-age=1","keep-alive",N,N,"22489",N,"image/jpeg","Sun, 01 Dec 2013 09:30:37 GMT",""ae7ce9-57d9-4ec37cb0da71e"","Sun, 01 Dec 2013 09:30:38 GMT",N,"Thu, 28 Nov 2013 07:38:00 GMT",N,N,"Apache",N,N,N,N
reqOtherHeaders :
req_user_agent :
---------------------------------------------------
method : "1045176506"
url : "12623315"
redirectUrl : "1385861436","336","GET","https://yolacom.yolacdn.net/assets/img/slider/09_channysphotography_tn.jpg","https://yolacom.yolacdn.net/assets/img/slider/09_channysphotography_tn.jpg",N,"0","0","1.1",N,N,"0","X-Download-Initiator = image="doc F300 win 1458; image; src; enter tree"","200","1.1",N,"30751","30751","0","1","image/jpeg","Yola-ID = web1 D=297 t=1384009469773430","image/png, image/svg+xml, image/*;q=0.8, */*;q=0.5",N,"gzip, deflate","en-US","Keep-Alive","yolacom.yolacdn.net",N,N,"https://www.yola.com/","Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0; PTST 2.361)","bytes",N,"max-age=1","keep-alive",N,N,"30751",N,"image/jpeg","Sun, 01 Dec 2013 09:30:37 GMT",""54ef65-781f-4eab2bf29513e"","Sun, 01 Dec 2013 09:30:38 GMT",N,"Fri, 08 Nov 2013 23:28:59 GMT",N,N,"Apache",N,N,N,N
reqOtherHeaders :
req_user_agent :
---------------------------------------------------
</pre>

<strong>as you can see it seems to be a little shift (>>>>?) from the schema, to the actual CSV export data, 
but thats not too bad, feel free to comment on the change needed..
</strong>





y2013m12d11 update:
--------------------

place all of the gzip files in a folder ("res")
<pre>
cd ./res/
zcat *.gz | LC_ALL=C fgrep --fixed-strings 'tuoitre.vn' >requests_with_tuoitrevn.csv
</pre>

this one gave me an idea!
http://drjohnstechtalk.com/blog/2011/06/gnu-parallel-really-helps-with-zcat/

<pre>
cd ./res/
ls *gz | parallel -k "zcat {} | LC_ALL=C fgrep --fixed-strings 'tuoitre.vn'" >requests_with_tuoitrevn.csv
</pre>



time it!!
see how much cpu is used
on a dummy (for testing) content
zcat *.gz | <strong>time</strong> LC_ALL=C fgrep --fixed-strings 'tuoitre.vn' >requests_with_tuoitrevn.csv
--->0.00user 0.00system 0:00.01elapsed 0%CPU (0avgtext+0avgdata 194560maxresident)k 0inputs+0outputs (782major+0minor)pagefaults 0swaps

ls *gz | <strong>time</strong> parallel -k "zcat {} | LC_ALL=C fgrep --fixed-strings 'tuoitre.vn'" >requests_with_tuoitrevn.csv
----> 0.20user 0.13system 0:00.41elapsed 80%CPU (0avgtext+0avgdata 7208960maxresident)k 0inputs+0outputs (28944major+0minor)pagefaults 0swaps



hmmm... maybe just using months first (multi cygwin shell for each month):
zcat httparchive_Dec_1_2013_requests.csv.gz | grep '.tase.co.il' >2013_Dec__requests_with_tasecoil.csv








<strong>update y2013m12d11:</strong>

----------------------------------------------------------------------------------------------------------------------------------
0.1 download csv.gz archive for example:
http://ia601504.us.archive.org/14/items/httparchive_downloads/httparchive_Apr_1_2013_requests.csv.gz

0.2 rename it from:
<pre>
httparchive_Apr_1_2013_requests.csv.gz
</pre>
to:
<pre>
y2013_m04_d01.csv.gz
</pre>

0.3 do it for as much archives as possible.

0.4 create c:/work/trunk/massRequest
0.5 create c:/work/trunk/massRequest/res
0.6 create c:/work/trunk/massRequest/1

0.7 place all csv.gz files in c:/work/trunk/massRequest/1

--------------------------

1. place just 1 file in the c:/work/trunk/massRequest/res
for example:
<pre>
y2012_m12_d01.csv.gz
</pre>

2. open five cygwin shell window since we are going to run multi process for each host.
the hosts we are looking for:
<pre>
vmware.com
cars.com
.rbs.com
tuoitre.vn
tase.co.il
</pre>

3. on each cygwin window run:
<pre>
cd c:/work/trunk/massRequest/res
</pre>

4. one one command on each window:
<pre>
ls *gz | time parallel -k "zcat {} | LC_ALL=C fgrep 'vmware.com'" >requests_with_vmwarecom.csv
ls *gz | time parallel -k "zcat {} | LC_ALL=C fgrep 'cars.com'" >requests_with_carscom.csv
ls *gz | time parallel -k "zcat {} | LC_ALL=C fgrep '.rbs.com'" >requests_with_rbscom.csv
ls *gz | time parallel -k "zcat {} | LC_ALL=C fgrep 'tuoitre.vn'" >requests_with_tuoitrevn.csv
ls *gz | time parallel -k "zcat {} | LC_ALL=C fgrep 'tase.co.il'" >requests_with_tasecoil.csv
</pre>

5. when done, add prefix to each result csv file:
for example:
    you run this command:
<pre>
        ls *gz | time parallel -k "zcat {} | LC_ALL=C fgrep 'vmware.com'" >requests_with_vmwarecom.csv
</pre>

    the file in the folder was:
        y2013_m01_d01.csv.gz

    ---> rename 
<pre>
            requests_with_vmwarecom.csv
</pre>
         to
<pre>
            y2013_m01_d01__requests_with_vmwarecom.csv
</pre>


6. move all files to ./done/ folder, marking all this month done.
<pre>
y2013_m01_d01.csv.gz
y2013_m01_d01__requests_with_carscom.csv
y2013_m01_d01__requests_with_rbscom.csv
y2013_m01_d01__requests_with_tasecoil.csv
y2013_m01_d01__requests_with_tuoitrevn.csv
y2013_m01_d01__requests_with_vmwarecom.csv
</pre>

7. move a new gz file from folder ./1/ into the res folder.
8. on each cygwin window, press {UP} key and enter to run the command again,
9. keep downloading new csv.gz files on 1st and 15th on each month.






<pre>
-------------------------------------------------------------------------------------------
since this process is massive on the CPU
and the download of all the archives takes a long time,
we only filter out lines that does not have our host name in it,

a secondary filter (on the smaller output files) is needed,
there we should check that the *request* (url of the site)- is the one in that line.
-------------------------------------------------------------------------------------------
</pre>

-----------------------------------------------------------------------------------------------------------------------------