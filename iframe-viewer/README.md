This is a "transparent page" with no other reason to exist, other than showing another page.
May used instead of redirection to new page (301/302/location refreshing/etc..).
also, this trick is useful instead of maintaining a clone of the (same) resources on another domain.
<!--more-->
naturally the top window is isolated from the main content.

This example can be viewed by viewing umoji.eladkarako.com
<pre>
<span style="color: #557799">&lt;!doctype html&gt;</span>
<span style="color: #007700">&lt;html</span> <span style="color: #0000CC">itemscope=</span><span>""</span> <span style="color: #0000CC">itemtype=</span><span>"http://schema.org/WebPage"</span> <span style="color: #0000CC">dir=</span><span>"ltr"</span> <span style="color: #0000CC">lang=</span><span>"en-US"</span> <span style="color: #0000CC">language=</span><span>"English"</span> <span style="color: #0000CC">charset=</span><span>"UTF-8"</span> <span style="color: #0000CC">encoding=</span><span>"UTF-8"</span><span style="color: #007700">&gt;</span>
<span style="color: #007700">&lt;head&gt;</span>
  <span style="color: #007700">&lt;meta</span> <span style="color: #0000CC">http-equiv=</span><span>"X-UA-Compatible"</span> <span style="color: #0000CC">content=</span><span>"IE=edge,chrome=1"</span><span style="color: #007700">/&gt;</span>
  <span style="color: #007700">&lt;meta</span> <span style="color: #0000CC">charset=</span><span>"UTF-8"</span><span style="color: #007700">/&gt;</span>
  <span style="color: #007700">&lt;meta</span> <span style="color: #0000CC">http-equiv=</span><span>"Content-Type"</span>    <span style="color: #0000CC">content=</span><span>"text/html;charset=UTF-8"</span><span style="color: #007700">/&gt;</span>
  <span style="color: #007700">&lt;meta</span> <span style="color: #0000CC">name=</span><span>"viewport"</span>              <span style="color: #0000CC">content=</span><span>"height=device-height,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no,width=device-width,minimal-ui"</span><span style="color: #007700">/&gt;</span>
  <span style="color: #007700">&lt;meta</span> <span style="color: #0000CC">name=</span><span>"robots"</span>                <span style="color: #0000CC">content=</span><span>"index,follow,snippet,archive,odp,translate,imageindex"</span><span style="color: #007700">&gt;</span>
  <span style="color: #007700">&lt;link</span> <span style="color: #0000CC">rel=</span><span>"shortcut icon"</span>          <span style="color: #0000CC">href=</span><span>"favicon.ico"</span> <span style="color: #0000CC">type=</span><span>"image/x-icon"</span><span style="color: #007700">/&gt;</span>
  <span style="color: #007700">&lt;link</span> <span style="color: #0000CC">rel=</span><span>"icon"</span>                   <span style="color: #0000CC">href=</span><span>"favicon.ico"</span> <span style="color: #0000CC">type=</span><span>"image/x-icon"</span><span style="color: #007700">/&gt;</span>
  <span style="color: #007700">&lt;meta</span> <span style="color: #0000CC">name=</span><span>"description"</span>           <span style="color: #0000CC">content=</span><span>"Unicode Emoji - Easy Copy, No Squares (Only Valid Images for Courier New), No Bull$hit."</span><span style="color: #007700">&gt;</span>
  <span style="color: #007700">&lt;meta</span> <span style="color: #0000CC">name=</span><span>"keywords"</span>              <span style="color: #0000CC">content=</span><span>"Unicode,Emoji,https://eladkarako.github.io/umoji/,eladkarako.github.io/umoji"</span><span style="color: #007700">&gt;</span>
  <span style="color: #007700">&lt;title&gt;</span>U(nicode E)moji<span style="color: #007700">&lt;/title&gt;</span>
  <span style="color: #007700">&lt;style </span><span style="color: #0000CC">type=</span><span>"text/css"</span> <span style="color: #0000CC">media=</span><span>"all"</span><span style="color: #007700">&gt;</span>
    <span style="color: #888888">/*&lt;![CDATA[*/</span>
    <span style="color: #008800; font-weight: bold">@charset</span> <span>"UTF-8"</span>;
    <span style="color: #008800; font-weight: bold">@namespace</span> <span>"http://www.w3.org/1999/xhtml"</span>;
    <span style="color: #007700">html</span><span style="color: #333333">,</span><span style="color: #007700">body</span><span style="color: #333333">,</span><span style="color: #007700">iframe</span>{
      <span style="color: #008800; font-weight: bold">height</span><span style="color: #333333">:</span>                             <span style="color: #6600EE; font-weight: bold">100</span><span style="color: #333333">%</span>;
      <span style="color: #008800; font-weight: bold">width</span><span style="color: #333333">:</span>                              <span style="color: #6600EE; font-weight: bold">100</span><span style="color: #333333">%</span>;
      <span style="color: #008800; font-weight: bold">padding</span><span style="color: #333333">:</span>                               <span style="color: #6600EE; font-weight: bold">0</span>;
      <span style="color: #008800; font-weight: bold">margin</span><span style="color: #333333">:</span>                                <span style="color: #6600EE; font-weight: bold">0</span>;
      box<span style="color: #333333">-</span>sizing<span style="color: #333333">:</span>                   <span style="color: #008800; font-weight: bold">border</span><span style="color: #333333">-</span>box;
      <span style="color: #008800; font-weight: bold">text</span><span style="color: #333333">-</span><span style="color: #008800; font-weight: bold">size</span><span style="color: #333333">-</span>adjust<span style="color: #333333">:</span>                   <span style="color: #6600EE; font-weight: bold">100</span><span style="color: #333333">%</span>;
      <span style="color: #008800; font-weight: bold">overflow</span><span style="color: #333333">:</span>                         <span style="color: #008800; font-weight: bold">hidden</span>;
    }
    <span style="color: #888888">/*]]&gt;*/</span>
  <span style="color: #007700">&lt;/style&gt;</span>
<span style="color: #007700">&lt;/head&gt;</span>
<span style="color: #007700">&lt;body&gt;&lt;iframe</span> <span style="color: #0000CC">allowfullscreen=</span><span>"true"</span> <span style="color: #0000CC">frameborder=</span><span>"0"</span> <span style="color: #0000CC">marginheight=</span><span>"0"</span> <span style="color: #0000CC">marginwidth=</span><span>"0"</span> <span style="color: #0000CC">referrerpolicy=</span><span>"unsafe-url"</span> <span style="color: #0000CC">scrolling=</span><span>"yes"</span> <span style="color: #0000CC">sandbox=</span><span>"allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation"</span> <span style="color: #0000CC">seamless=</span><span>"false"</span> <span style="color: #0000CC">target=</span><span>""</span> <span style="color: #0000CC">src=</span><span>"https://eladkarako.github.io/umoji/"</span><span style="color: #007700">&gt;&lt;/iframe&gt;&lt;/body&gt;</span>
<span style="color: #007700">&lt;/html&gt;</span>
</pre>

notice that keywords, title and icon (and the favicon.ico itself in the same folder) resources are still required although the iframe includes same ones, due to the iframe isolation (only top window can control those resources..)

the real page available at eladkarako.github.io/umoji

optionally add <code>&lt;base&#32;target&equals;&quot;&lowbar;top&quot;&sol;&gt;</code> to the HEAD of the internal-page (click on a link will open it in the top window, replacing it all to another page), or 
set to to <code>_self</code> to keep the top most address the same (umoji.eladkarako.com) and the links will be opened in the iframe itself (sort of "hidden" address :] )