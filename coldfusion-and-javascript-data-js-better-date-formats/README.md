ColdFusion isDate, DateFormat, LSDateFormat & <a href="http://www.datejs.com/" title="http://www.datejs.com/" target="_blank">Date.JS</a> Test - Comparing server-side ColdFusion isDate(), DateFormat() and LSDateFormat() to determine which dates can be parsed. (Added an open-source JavaScript Date Library, <a href="http://www.datejs.com/" title="http://www.datejs.com/" target="_blank">Date.JS</a>, from 2007 to determine if it was actually possible to parse strings as dates.)

<pre>
<!DOCTYPE html>
<html lang="en">
<head>
<script src="//cdnjs.cloudflare.com/ajax/libs/datejs/1.0/date.min.js" type="text/javascript"></script>
<title>ColdFusion isDate, DateFormat, LSDateFormat & Date.JS Test</title>
</head>
<body>
 
<h1>ColdFusion isDate, DateFormat, LSDateFormat & Date.JS Test</h1>
 
<p>Comparing server-side ColdFusion isDate(), DateFormat() and LSDateFormat() to determine which dates can be parsed. (Added an open-source JavaScript Date Library, <a href="http://www.datejs.com/" target="_blank">Date.JS</a>, from 2007 to determine if it was actually possible to parse strings as dates.)</p>
 
<p>Using RSS Dates from <a href="http://rssdateformats.tumblr.com/" target="_blank">http://rssdateformats.tumblr.com/</a> and <a href="https://github.com/mjibson/goread/blob/0387db10bd9fd9ccd90d557fa30b6e494efa577a/goapp/utils.go#L129" target="_blank">https://github.com/mjibson/goread/blob/0387db10bd9fd9ccd90d557fa30b6e494efa577a/goapp/utils.go#L129</a>.</p>
 
<CFSET Dates = ["01-02-2006",
"01.02.06",
"01/02/2006",
"02 Jan 2006 15:04:05 -0700",
"02 Jan 2006 15:04:05 MST",
"02 Jan 2006 15:04:05 UT",
"02 Jan 2006",
"1/2/2006 3:04:05 PM",
"2 Jan 2006 15:04:05 MST",
"2 January 2006",
"2006-01-02 15:04",
"2006-01-02 15:04:05 -0700",
"2006-01-02 15:04:05 MST",
"2006-01-02",
"2006-01-02T15:04-07:00",
"2006-01-02T15:04:05 -0700",
"2006-01-02T15:04:05",
"2006-01-02T15:04:05-0700",
"2006-01-02T15:04:05-07:00",
"2006-01-02T15:04:05-07:00:00",
"2006-01-02T15:04:05Z",
"2006-1-2 15:04:05",
"2006-1-2",
"Jan 2, 2006 15:04:05 MST",
"Jan 2, 2006 3:04:05 PM MST",
"January 02, 2006 15:04:05 MST",
"January 2, 2006 15:04:05 MST",
"Mon, 02 Jan 06 15:04:05 MST",
"Mon, 02 Jan 2006 15:04 MST",
"Mon, 02 Jan 2006 15:04:05 -0700",
"Mon, 02 Jan 2006 15:04:05 -07:00",
"Mon, 02 Jan 2006 15:04:05 MST",
"Mon, 02 Jan 2006 15:04:05 UT",
"Mon, 02 Jan 2006 15:04:05 Z",
"Mon, 02 Jan 2006 15:04:05",
"Mon, 02 Jan 2006 15:04:05MST",
"Mon, 02 Jan 2006 3:04:05 PM MST",
"Mon, 02 Jan 2006",
"Mon, 02 January 2006",
"Mon, 2 Jan 06 15:04:05 -0700",
"Mon, 2 Jan 2006 15:04:05 -0700",
"Mon, 2 Jan 2006 15:04:05 MST",
"Mon, 2 Jan 2006 15:04:05 UT",
"Mon, 2 Jan 2006",
"Mon, 2 Jan 2006, 15:04 -0700",
"Mon, 2 January 2006 15:04:05 -0700",
"Mon, 2 January 2006 15:04:05 MST",
"Mon, 2 January 2006, 15:04 -0700",
"Mon, 2 January 2006, 15:04:05 MST",
"Mon, Jan 2 2006 15:04:05 -0700",
"Mon, Jan 2 2006 15:04:05 -700",
"Mon, January 2 2006 15:04:05 -0700",
"Monday, 02 January 2006 15:04:05 -0700",
"Monday, 02 January 2006 15:04:05 MST",
"Monday, 2 Jan 2006 15:04:05 -0700",
"Monday, 2 Jan 2006 15:04:05 MST",
"Monday, 2 January 2006 15:04:05 -0700",
"Monday, January 02, 2006"]>
 
<!--- Added these dates because they can be parsed by Date.js --->
<CFSET ArrayAppend(Dates, "today")>
<CFSET ArrayAppend(Dates, "tomorrow")>
<CFSET ArrayAppend(Dates, "July 2008")>
<CFSET ArrayAppend(Dates, "next friday")>
<CFSET ArrayAppend(Dates, "last April")>
<CFSET ArrayAppend(Dates, "2004.08.07")>
<CFSET ArrayAppend(Dates, "8:15 PM")>
<CFSET ArrayAppend(Dates, "22:30:45")>
<CFSET ArrayAppend(Dates, "+5years")>
 
<CFOUTPUT>
<table>
<thead><th>Row</th><th>DateFormat</th><th>isDate</th><th>ParseDateTime</th><th>LSParseDateTime</th><th>Date.JS</th></thead>
<tfoot><th>Row</th><th>DateFormat</th><th>isDate</th><th>ParseDateTime</th><th>LSParseDateTime</th><th>Date.JS</th></tfoot>
<tbody><CFSET CR=0><CFLOOP ARRAY="#Dates#" INDEX="ThisDate"><CFSET CR=CR+1>
<tr><td>#CR#</td><td>#ThisDate#</td>
<td>#isDate(ThisDate)#</td>
<td><cftry>#ParseDateTime(ThisDate)#<CFCATCH>---</CFCATCH></cftry></td>
<td><cftry>#LSParseDateTime(ThisDate)#<CFCATCH>---</CFCATCH></cftry></td>
<td><script>document.write(Date.parse("#ThisDate#").toString("yyyy-MM-dd HH:mm:ss"));</script></td>
</tr></CFLOOP>
</tbody>
</table>
</CFOUTPUT>
</body></html>
</pre>