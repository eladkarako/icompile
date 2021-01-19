here is a small nifty code to generate a bunch of random github-user images (its part of a project..)
<!--more-->


<hr />

<pre>
<span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>function</span> <span style='color:#808030; '>(</span>n<span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span>
  <span style='color:#800000; '>"</span><span style='color:#0000e6; '>use strict</span><span style='color:#800000; '>"</span><span style='color:#800080; '>;</span>

  <span style='color:#800000; font-weight:bold; '>var</span> html <span style='color:#808030; '>=</span> <span style='color:#800000; '>"</span><span style='color:#800000; '>"</span><span style='color:#800080; '>;</span>

  <span style='color:#696969; '>/* styles */</span>
  html <span style='color:#808030; '>+=</span> <span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>function</span> <span style='color:#808030; '>(</span><span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span>
    <span style='color:#800000; font-weight:bold; '>var</span> template <span style='color:#808030; '>=</span> <span style='color:#0000e6; '>'#img##ID##{background-image:url(</span><span style='color:#0f69ff; '>\\'</span><span style='color:#0000e6; '>https://avatars.githubusercontent.com/u/##RANDOM##?v=3</span><span style='color:#0f69ff; '>\\'</span><span style='color:#0000e6; '>)}'</span><span style='color:#800080; '>;</span>

    template <span style='color:#808030; '>=</span> <span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>new</span> <span style='color:#797997; '>Array</span><span style='color:#808030; '>(</span>n<span style='color:#808030; '>)</span><span style='color:#808030; '>)</span><span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>join</span><span style='color:#808030; '>(</span><span style='color:#0000e6; '>','</span><span style='color:#808030; '>)</span><span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>split</span><span style='color:#808030; '>(</span><span style='color:#0000e6; '>','</span><span style='color:#808030; '>)</span><span style='color:#808030; '>.</span>map<span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>function</span> <span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>item</span><span style='color:#808030; '>,</span> <span style='color:#797997; '>index</span><span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span>
      <span style='color:#800000; font-weight:bold; '>return</span> template
        <span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>replace</span><span style='color:#808030; '>(</span><span style='color:#0000e6; '>'##ID##'</span><span style='color:#808030; '>,</span> String<span style='color:#808030; '>(</span><span style='color:#797997; '>index</span><span style='color:#808030; '>)</span><span style='color:#808030; '>)</span>
        <span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>replace</span><span style='color:#808030; '>(</span><span style='color:#0000e6; '>'##RANDOM##'</span><span style='color:#808030; '>,</span> String<span style='color:#808030; '>(</span><span style='color:#797997; '>Math</span><span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>floor</span><span style='color:#808030; '>(</span><span style='color:#008c00; '>2000</span> <span style='color:#808030; '>+</span> <span style='color:#797997; '>Math</span><span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>random</span><span style='color:#808030; '>(</span><span style='color:#808030; '>)</span> <span style='color:#808030; '>*</span> <span style='color:#008c00; '>4000</span><span style='color:#808030; '>)</span><span style='color:#808030; '>)</span><span style='color:#808030; '>)</span>
        <span style='color:#800080; '>;</span>
    <span style='color:#800080; '>}</span><span style='color:#808030; '>)</span><span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>join</span><span style='color:#808030; '>(</span><span style='color:#800000; '>"</span><span style='color:#0f69ff; '>\
</span><span style='color:#800000; '>"</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>

    <span style='color:#800000; font-weight:bold; '>return</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>&lt;style></span><span style='color:#0f69ff; '>\
</span><span style='color:#0000e6; '>div[id^=img]{display:inline-block;width:100px; height:100px; background-color:rgba(170,204,247,.7); background-repeat:no-repeat; background-position:center center; background-attachment:local; background-size:contain; padding:0; margin:0;}</span><span style='color:#0f69ff; '>\
</span><span style='color:#800000; '>"</span> <span style='color:#808030; '>+</span> template <span style='color:#808030; '>+</span> <span style='color:#800000; '>"</span><span style='color:#0f69ff; '>\
</span><span style='color:#0000e6; '>&lt;/style></span><span style='color:#800000; '>"</span><span style='color:#800080; '>;</span>
  <span style='color:#800080; '>}</span><span style='color:#808030; '>(</span><span style='color:#808030; '>)</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>

  <span style='color:#696969; '>/* containers */</span>
  html <span style='color:#808030; '>+=</span> <span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>function</span> <span style='color:#808030; '>(</span><span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span>
    <span style='color:#800000; font-weight:bold; '>var</span> template <span style='color:#808030; '>=</span> <span style='color:#0000e6; '>'&lt;div id=</span><span style='color:#0f69ff; '>\\'</span><span style='color:#0000e6; '>img##ID##</span><span style='color:#0f69ff; '>\\'</span><span style='color:#0000e6; '>>&lt;/div>'</span><span style='color:#800080; '>;</span>

    template <span style='color:#808030; '>=</span> <span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>new</span> <span style='color:#797997; '>Array</span><span style='color:#808030; '>(</span>n<span style='color:#808030; '>)</span><span style='color:#808030; '>)</span><span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>join</span><span style='color:#808030; '>(</span><span style='color:#0000e6; '>','</span><span style='color:#808030; '>)</span><span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>split</span><span style='color:#808030; '>(</span><span style='color:#0000e6; '>','</span><span style='color:#808030; '>)</span><span style='color:#808030; '>.</span>map<span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>function</span> <span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>item</span><span style='color:#808030; '>,</span> <span style='color:#797997; '>index</span><span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span>
      <span style='color:#800000; font-weight:bold; '>return</span> template<span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>replace</span><span style='color:#808030; '>(</span><span style='color:#0000e6; '>'##ID##'</span><span style='color:#808030; '>,</span> String<span style='color:#808030; '>(</span><span style='color:#797997; '>index</span><span style='color:#808030; '>)</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
    <span style='color:#800080; '>}</span><span style='color:#808030; '>)</span><span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>join</span><span style='color:#808030; '>(</span><span style='color:#800000; '>"</span><span style='color:#0f69ff; '>\
</span><span style='color:#800000; '>"</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>

    <span style='color:#800000; font-weight:bold; '>return</span> <span style='color:#0000e6; '>'&lt;div id="container-imgs">'</span> <span style='color:#808030; '>+</span> <span style='color:#800000; '>"</span><span style='color:#0f69ff; '>\
</span><span style='color:#800000; '>"</span> <span style='color:#808030; '>+</span> template <span style='color:#808030; '>+</span> <span style='color:#800000; '>"</span><span style='color:#0f69ff; '>\
</span><span style='color:#800000; '>"</span> <span style='color:#808030; '>+</span> <span style='color:#0000e6; '>'&lt;/div>'</span><span style='color:#800080; '>;</span>
  <span style='color:#800080; '>}</span><span style='color:#808030; '>(</span><span style='color:#808030; '>)</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>

  <span style='color:#800000; font-weight:bold; '>return</span> html<span style='color:#800080; '>;</span>
<span style='color:#800080; '>}</span><span style='color:#808030; '>(</span><span style='color:#008c00; '>10</span><span style='color:#808030; '>)</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
</pre>

<hr />
Here it is *in action* (every page-refresh you'll get new-ones)
<pre>
<div id="github_random_user_images_container"></div>
<script>
(function(container, number){
container.innerHTML = "";
container.innerHTML = (function (n) {
  "use strict";

  var html = "";

  /* styles */
  html += (function () {
    var template = '#img##ID##{background-image:url(\\'https://avatars.githubusercontent.com/u/##RANDOM##?v=3\\')}';

    template = (new Array(n)).join(',').split(',').map(function (item, index) {
      return template
        .replace('##ID##', String(index))
        .replace('##RANDOM##', String(Math.floor(2000 + Math.random() * 4000)))
        ;
    }).join("\
");

    return "<style>\
div[id^=img]{display:inline-block;width:100px; height:100px; background-color:rgba(170,204,247,.7); background-repeat:no-repeat; background-position:center center; background-attachment:local; background-size:contain; padding:0; margin:0;}\
" + template + "\
</style>";
  }());

  /* containers */
  html += (function () {
    var template = '<div id=\\'img##ID##\\'></div>';

    template = (new Array(n)).join(',').split(',').map(function (item, index) {
      return template.replace('##ID##', String(index));
    }).join("\
");

    return '<div id="container-imgs">' + "\
" + template + "\
" + '</div>';
  }());

  return html;
}(number));

}(
document.querySelector('#github_random_user_images_container')
, 10
));
</script>
</pre>

<hr />

I would had want to link the user-id to actual user-name, but apparently,
this is the whole API, that currently available:
<pre>
<span style='color:#800080; '>{</span>
  <span style='color:#800000; '>"</span><span style='color:#0000e6; '>current_user_url</span><span style='color:#800000; '>"</span><span style='color:#800080; '>:</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>https://api.github.com/user</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span>
  <span style='color:#800000; '>"</span><span style='color:#0000e6; '>current_user_authorizations_html_url</span><span style='color:#800000; '>"</span><span style='color:#800080; '>:</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>https://github.com/settings/connections/applications{/client_id}</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span>
  <span style='color:#800000; '>"</span><span style='color:#0000e6; '>authorizations_url</span><span style='color:#800000; '>"</span><span style='color:#800080; '>:</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>https://api.github.com/authorizations</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span>
  <span style='color:#800000; '>"</span><span style='color:#0000e6; '>code_search_url</span><span style='color:#800000; '>"</span><span style='color:#800080; '>:</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>https://api.github.com/search/code?q={query}{&amp;page,per_page,sort,order}</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span>
  <span style='color:#800000; '>"</span><span style='color:#0000e6; '>emails_url</span><span style='color:#800000; '>"</span><span style='color:#800080; '>:</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>https://api.github.com/user/emails</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span>
  <span style='color:#800000; '>"</span><span style='color:#0000e6; '>emojis_url</span><span style='color:#800000; '>"</span><span style='color:#800080; '>:</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>https://api.github.com/emojis</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span>
  <span style='color:#800000; '>"</span><span style='color:#0000e6; '>events_url</span><span style='color:#800000; '>"</span><span style='color:#800080; '>:</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>https://api.github.com/events</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span>
  <span style='color:#800000; '>"</span><span style='color:#0000e6; '>feeds_url</span><span style='color:#800000; '>"</span><span style='color:#800080; '>:</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>https://api.github.com/feeds</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span>
  <span style='color:#800000; '>"</span><span style='color:#0000e6; '>following_url</span><span style='color:#800000; '>"</span><span style='color:#800080; '>:</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>https://api.github.com/user/following{/target}</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span>
  <span style='color:#800000; '>"</span><span style='color:#0000e6; '>gists_url</span><span style='color:#800000; '>"</span><span style='color:#800080; '>:</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>https://api.github.com/gists{/gist_id}</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span>
  <span style='color:#800000; '>"</span><span style='color:#0000e6; '>hub_url</span><span style='color:#800000; '>"</span><span style='color:#800080; '>:</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>https://api.github.com/hub</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span>
  <span style='color:#800000; '>"</span><span style='color:#0000e6; '>issue_search_url</span><span style='color:#800000; '>"</span><span style='color:#800080; '>:</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>https://api.github.com/search/issues?q={query}{&amp;page,per_page,sort,order}</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span>
  <span style='color:#800000; '>"</span><span style='color:#0000e6; '>issues_url</span><span style='color:#800000; '>"</span><span style='color:#800080; '>:</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>https://api.github.com/issues</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span>
  <span style='color:#800000; '>"</span><span style='color:#0000e6; '>keys_url</span><span style='color:#800000; '>"</span><span style='color:#800080; '>:</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>https://api.github.com/user/keys</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span>
  <span style='color:#800000; '>"</span><span style='color:#0000e6; '>notifications_url</span><span style='color:#800000; '>"</span><span style='color:#800080; '>:</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>https://api.github.com/notifications</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span>
  <span style='color:#800000; '>"</span><span style='color:#0000e6; '>organization_repositories_url</span><span style='color:#800000; '>"</span><span style='color:#800080; '>:</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>https://api.github.com/orgs/{org}/repos{?type,page,per_page,sort}</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span>
  <span style='color:#800000; '>"</span><span style='color:#0000e6; '>organization_url</span><span style='color:#800000; '>"</span><span style='color:#800080; '>:</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>https://api.github.com/orgs/{org}</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span>
  <span style='color:#800000; '>"</span><span style='color:#0000e6; '>public_gists_url</span><span style='color:#800000; '>"</span><span style='color:#800080; '>:</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>https://api.github.com/gists/public</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span>
  <span style='color:#800000; '>"</span><span style='color:#0000e6; '>rate_limit_url</span><span style='color:#800000; '>"</span><span style='color:#800080; '>:</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>https://api.github.com/rate_limit</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span>
  <span style='color:#800000; '>"</span><span style='color:#0000e6; '>repository_url</span><span style='color:#800000; '>"</span><span style='color:#800080; '>:</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>https://api.github.com/repos/{owner}/{repo}</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span>
  <span style='color:#800000; '>"</span><span style='color:#0000e6; '>repository_search_url</span><span style='color:#800000; '>"</span><span style='color:#800080; '>:</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>https://api.github.com/search/repositories?q={query}{&amp;page,per_page,sort,order}</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span>
  <span style='color:#800000; '>"</span><span style='color:#0000e6; '>current_user_repositories_url</span><span style='color:#800000; '>"</span><span style='color:#800080; '>:</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>https://api.github.com/user/repos{?type,page,per_page,sort}</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span>
  <span style='color:#800000; '>"</span><span style='color:#0000e6; '>starred_url</span><span style='color:#800000; '>"</span><span style='color:#800080; '>:</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>https://api.github.com/user/starred{/owner}{/repo}</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span>
  <span style='color:#800000; '>"</span><span style='color:#0000e6; '>starred_gists_url</span><span style='color:#800000; '>"</span><span style='color:#800080; '>:</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>https://api.github.com/gists/starred</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span>
  <span style='color:#800000; '>"</span><span style='color:#0000e6; '>team_url</span><span style='color:#800000; '>"</span><span style='color:#800080; '>:</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>https://api.github.com/teams</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span>
  <span style='color:#800000; '>"</span><span style='color:#0000e6; '>user_url</span><span style='color:#800000; '>"</span><span style='color:#800080; '>:</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>https://api.github.com/users/{user}</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span>
  <span style='color:#800000; '>"</span><span style='color:#0000e6; '>user_organizations_url</span><span style='color:#800000; '>"</span><span style='color:#800080; '>:</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>https://api.github.com/user/orgs</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span>
  <span style='color:#800000; '>"</span><span style='color:#0000e6; '>user_repositories_url</span><span style='color:#800000; '>"</span><span style='color:#800080; '>:</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>https://api.github.com/users/{user}/repos{?type,page,per_page,sort}</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span>
  <span style='color:#800000; '>"</span><span style='color:#0000e6; '>user_search_url</span><span style='color:#800000; '>"</span><span style='color:#800080; '>:</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>https://api.github.com/search/users?q={query}{&amp;page,per_page,sort,order}</span><span style='color:#800000; '>"</span>
<span style='color:#800080; '>}</span>
</pre>