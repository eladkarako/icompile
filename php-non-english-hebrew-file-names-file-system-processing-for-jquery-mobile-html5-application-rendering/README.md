<!--more-->


<pre>
<?php 
  mb_internal_encoding('UTF-8');
  //setlocale(LC_CTYPE, 'en_US.UTF-8');
  setlocale(LC_ALL, 'he_IL.UTF-8');
/*
  setlocale(LC_TIME, 'he_IL');
  setlocale(LC_CTYPE, 'he_IL');
  setlocale(LC_ALL, 'he_IL');
*/
//  header('Content-Type: text/plain; charset=UTF-8');
//header('Content-Type: text/plain; charset=windows-1255');  

$iterator = new FilesystemIterator("./music/.");
$filter = new RegexIterator($iterator, '/.(mp3|mp4)$/');
$files = array();
foreach($filter as $entry) {
    $files[] = $entry->getFilename();
}

 
  $numOfFiles = count($files);

  //function human_filesize($bytes, $decimals = 2) { $size = array('B','kB','MB','GB','TB','PB','EB','ZB','YB'); $factor = floor((strlen($bytes) - 1) / 3);  return sprintf("%.{$decimals}f", $bytes / pow(1024, $factor)) . @$size[$factor]; }
  //include_once('mp3file.php');
?>
<!DOCTYPE html>
<html lang="en-US">
<head>
  <!-- <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /> -->
  <meta http-equiv="Content-Type" content="text/html; charset=windows-1255" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
  <meta name="robots" content="noodp,noydir,noindex,nofollow,noarchive"/>
  <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
  <link rel="icon" href="favicon.ico" type="image/x-icon">
  <link rel="canonical" href="http://music.eladkarako.com"/>
  <link rel="publisher" href="http://music.eladkarako.com"/>
  <link rel="shortlink" href="http://music.eladkarako.com"/>
  <meta name="description" content="Music Library"/>
  <meta property="og:url" content="http://music.eladkarako.com"/>
  <meta property="og:locale" content="en_US"/>
  <meta property="og:image" content="http://serversideup.net/_uploads/2011/11/545-header.jpg"/>
  <meta property="og:site_name" content="music.eladkarako.com"/>
  <meta property="article:publisher" content="http://music.eladkarako.com"/>
  <meta property="article:tag" content="audio"/>
  <meta property="article:tag" content="music"/>
  <meta property="article:section" content="music"/>
  <meta property="article:published_time" content="2014-06-05T03:50:00+00:00"/>
  <meta property="article:modified_time" content="2014-06-05T03:50:00+00:00"/>
  <meta property="og:updated_time" content="2014-06-05T03:50:00+00:00"/>
  <title>music.eladkarako.com</title>

  <link rel="stylesheet" href="http://code.jquery.com/mobile/1.4.2/jquery.mobile-1.4.2.min.css">
  <script src="http://code.jquery.com/jquery-1.10.2.min.js"></script>
  <script src="http://code.jquery.com/mobile/1.4.2/jquery.mobile-1.4.2.min.js"></script>
  <style type="text/css">
  * {
  -moz-osx-font-smoothing:grayscale;
  -webkit-font-smoothing:antialiased;
  text-shadow:0 0 1px rgba(0, 0, 0, 0.2);
  }
  </style>
</head>

<body>

  <div data-role="page" id="pageone">
    <div data-role="panel" id="myPanelDefault">
      <h2>Panel Header</h2>
      <p>You can close the panel by clicking outside the panel, pressing the Esc key, by swiping, or by clicking the button below:</p>
      <a href="#pageone" data-rel="close" class="ui-btn ui-btn-inline ui-shadow ui-corner-all ui-btn-a ui-icon-delete ui-btn-icon-left">Close panel</a>
    </div>

    <div data-role="panel" id="myPanelFixed" data-position-fixed="true">
      <h2>Panel Header</h2>
      <p>You can close the panel by clicking outside the panel, pressing the Esc key, by swiping, or by clicking the button below:</p>
      <a href="#pageone" data-rel="close" class="ui-btn ui-btn-inline ui-shadow ui-corner-all ui-btn-a ui-icon-delete ui-btn-icon-left">Close panel</a>
    </div>

    <div data-role="header" data-position="fixed" data-fullscreen="true">
      <h1>Page Header</h1>
    </div>

    <div data-role="main" class="ui-content"><br><br>
      <p>Click on both buttons and start to scroll the page.</p>
      <a href="#myPanelDefault" class="ui-btn ui-btn-inline ui-corner-all ui-shadow">Open Default Panel</a>
      <a href="#myPanelFixed" class="ui-btn ui-btn-inline ui-corner-all ui-shadow">Open Panel with data-position-fixed="true"</a>

      <p><b>Tip:</b> Quickly search for a song by any letters appearing in the title. give it a try.</p>

    <form class="ui-filterable">
      <input id="myFilter" data-type="search">
    </form>
    <ul data-role="listview" data-filter="true" data-input="#myFilter" data-autodividers="true" data-inset="true">
<?php
    foreach ($files as $index => $filename){
      print('<li><a href="#">' . $filename . '</a></li>');
    }
?>
    </ul>


      <br>
    </div>

    <div data-role="footer" data-position="fixed" data-fullscreen="true">
      <h1>Page Footer</h1>
    </div>
  </div>

</body>

</html>
</pre>', '(*private notes*) PHP Non-English (Hebrew) File-Names File-System Processing