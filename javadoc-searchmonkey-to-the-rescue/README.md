When you are searching for things like <a title="Search for java.util.HashMap" href="http://search.yahoo.com/search?p=java.util.HashMap">java.util.HashMap</a> one of the issues that you run into is that it will give you the result with the highest rank which more often than not is the 1.4.2 version of the documentation.  I’ve moved on from that version of Java and would much rather see results for version 6.  I actually did this plugin back in December for the first <a href="http://developer.yahoo.com/searchmonkey/">SearchMonkey</a> hackday and won “most useful” as it could be extended to any type of versioned documentation you might find on the web.  Today I’ll also include my plugin for MySQL but I’ll use Java as the example.
<span id="more-874"></span>
Here is the normal search result that you get on Yahoo:

<img src="http://buildandtest.com/files/javautilhashmapnormal.png" alt="Normal search result" width="592" height="76" />

What I would like to do is give some more options for the user.  Eventually I expect that SearchMonkey might allow per user preferences, but in the interim, I’ll produce links for 1.4.2, 1.5, 1.6 and a link to the entries package page:

<img src="http://buildandtest.com/files/javautilhashmapenhanced.png" alt="Enhanced search result" width="560" height="117" />

This gives you direct access to other versions of the classes documentation from the search result page without having to qualify your search terms or scroll through pages of results looking for the one most relevant to you as a developer.  To create this enhanced result go to the <a title="SearchMonkey Developer Tool" href="http://developer.search.yahoo.com/wizard/index">SearchMonkey Developer Tool</a> and create a new application.  Choose Enhanced Result rather than Infobar.  The URL pattern that I used was “*.java.sun.com/*”.  Obviously the real work is done in the PHP code for the appearance of the enhanced result:
<pre>public static function getOutput() {
    $ret = array();   

$classname = Data::get('yahoo:index/dc:identifier');
    $pattern = "/.*\\/docs\\/api\\/(.*\\/[A-Z].*).html/";
    if (preg_match($pattern, $classname, $matches)) {
        $classname = $matches[1];
        $link = $classname;
        $classname = str_replace("/", ".", $classname);
    } else {
        return $ret;
    }

/* pull the package reference out */
    if (preg_match("/(.*)\\.([^.]+)/", $classname, $matches)) {
        $packagename = $matches[1];
    }

/* change the title to the name of the class */
    $ret['title'] = $classname;

// Deep links - up to 4
    $ret['links'][0]['text'] = "1.6.0";
    $ret['links'][0]['href'] = "http://java.sun.com/javase/6/docs/api/" . $link . ".html";
    $ret['links'][1]['text'] = "1.5.0";
    $ret['links'][1]['href'] = "http://java.sun.com/j2se/1.5.0/docs/api/" . $link . ".html";;
    $ret['links'][2]['text'] = "1.4.2";
    $ret['links'][2]['href'] = "http://java.sun.com/j2se/1.4.2/docs/api/" . $link . ".html";
    $ret['links'][3]['text'] = $packagename;
    $ret['links'][3]['href'] = "http://java.sun.com/javase/6/docs/api/" . str_replace(".", "/", $packagename) . "/package-summary.html";

return $ret;
}</pre>
Once that is done you confirm that you are finished and you will then see these enhanced result when you use <a title="Alpha Search" href="http://alpha.search.yahoo.com/">alpha.search.yahoo.com</a>.