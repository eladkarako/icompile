<img src="https://icompile.eladkarako.com/_uploads/2017/03/icon.png" alt="" width="500" height="256"/>

<blockquote>
Getting the most updated command-line switches for Chromium (Google-Chrome base code) is always a work in progress,
since this is a `live code` you can never say "Ok, I'm Done", there will always be a new one, or old one retired from being actively used in the, well.., actual code.
So if you're relaying on command-line switches in your scripts, or just want to try out new features before the `bleed into` the actual Google-Chrome main version, you probably want to bookmark this article :]]
</blockquote>

<!--more-->
<hr/>

<span style="font-size:20pt;">Get The Ready To Use Script From The GitHub Repository At: <a href="https://github.com/eladkarako/Chrome-Command-Line-Switches/" target="_blank">https://github.com/eladkarako/Chrome-Command-Line-Switches/</a>, it has already having the notepad++, aria2c (and wget) binaries ready without the need of an additional download..</span>

<hr/>

First of all: <strong>How Do You Even Browse Chromium Code?</strong>
luckily, lately the chromium project has been re-organised so browsing the code and viewing (or downloading) the raw source-files, is a lot easier than few few years ago, 
If you'll browse <a href="https://cs.chromium.org/search/?q=switches*.cc&p=1&m=100&det=none&type=cs" target="_blank">https://cs.chromium.org/search/?q=switches*.cc&p=1&m=100&det=none&type=cs</a> you could get a list of all the files that has the switch keyword in it, as in name, or content,
<img src="https://icompile.eladkarako.com/_uploads/2017/03/icompile.eladkarako.com_chromium_command_line_switches.png" alt="" width="1243" height="477"/>

There is a small issue of filtering out and keeping only the useful ones, and creating some sort of downloading method and easy viewing.

...I've done that already:


<code>switches updater.cmd</code>:
<pre>
<span style='color:#808030; '>@</span><span style='color:#800000; font-weight:bold; '>echo off</span>
<span style='color:#696969; '>::cleanup</span>
<span style='color:#800000; font-weight:bold; '>if</span> <span style='color:#800000; font-weight:bold; '>exist</span> .<span style='color:#808030; '>\\</span><span style='color:#800000; font-weight:bold; '>switches</span><span style='color:#808030; '>\\</span>       <span style='color:#800000; font-weight:bold; '>del</span>    <span style='color:#808030; '>/</span>s <span style='color:#808030; '>/</span>q <span style='color:#808030; '>/</span>f .<span style='color:#808030; '>\\</span><span style='color:#800000; font-weight:bold; '>switches</span><span style='color:#808030; '>\\</span>        <span style='color:#808030; '>></span><span style='color:#800000; font-weight:bold; '>nul</span>
<span style='color:#800000; font-weight:bold; '>if</span> <span style='color:#800000; font-weight:bold; '>exist</span> .<span style='color:#808030; '>\\</span><span style='color:#800000; font-weight:bold; '>switches</span><span style='color:#808030; '>\\</span>       <span style='color:#800000; font-weight:bold; '>rmdir</span>  <span style='color:#808030; '>/</span>s <span style='color:#808030; '>/</span>q    .<span style='color:#808030; '>\\</span><span style='color:#800000; font-weight:bold; '>switches</span><span style='color:#808030; '>\\</span>        <span style='color:#808030; '>></span><span style='color:#800000; font-weight:bold; '>nul</span>
<span style='color:#800000; font-weight:bold; '>if</span> <span style='color:#800000; font-weight:bold; '>exist</span> switches_old.cc   <span style='color:#800000; font-weight:bold; '>del</span> <span style='color:#808030; '>/</span>f <span style='color:#808030; '>/</span>q switches_old.cc          <span style='color:#808030; '>></span><span style='color:#800000; font-weight:bold; '>nul</span>
<span style='color:#800000; font-weight:bold; '>if</span> <span style='color:#800000; font-weight:bold; '>exist</span> <span style='color:#800000; font-weight:bold; '>switches</span>.cc       <span style='color:#800000; font-weight:bold; '>ren</span>  <span style='color:#800000; font-weight:bold; '>switches</span>.cc switches_old.cc   <span style='color:#808030; '>></span><span style='color:#800000; font-weight:bold; '>nul</span>

<span style='color:#696969; '>::download using wGet</span>
<span style='color:#696969; '>::call d:\\DOS\\wGet\\wget.exe         ^</span>
<span style='color:#696969; '>::--input-file="switches_urls.txt"  --user-agent="Mozilla/5" --no-check-certificate            ^</span>
<span style='color:#696969; '>::--secure-protocol="auto"          --auth-no-challenge      --no-directories                  ^</span>
<span style='color:#696969; '>::--directory-prefix=.              --output-document="switches.cc"</span>


<span style='color:#696969; '>::download using aria2c</span>
aria2c.exe  <span style='color:#808030; '>-</span><span style='color:#808030; '>-</span>allow<span style='color:#808030; '>-</span>overwrite<span style='color:#808030; '>=</span>true          <span style='color:#808030; '>-</span><span style='color:#808030; '>-</span><span style='color:#800000; font-weight:bold; '>auto</span><span style='color:#808030; '>-</span><span style='color:#800000; font-weight:bold; '>file</span><span style='color:#808030; '>-</span>renaming<span style='color:#808030; '>=</span>false          <span style='color:#808030; '>-</span><span style='color:#808030; '>-</span>check<span style='color:#808030; '>-</span>certificate<span style='color:#808030; '>=</span>false          <span style='color:#808030; '>^</span>
            <span style='color:#808030; '>-</span><span style='color:#808030; '>-</span>check<span style='color:#808030; '>-</span>integrity<span style='color:#808030; '>=</span>false         <span style='color:#808030; '>-</span><span style='color:#808030; '>-</span>console<span style='color:#808030; '>-</span>log<span style='color:#808030; '>-</span>level<span style='color:#808030; '>=</span>notice          <span style='color:#808030; '>-</span><span style='color:#808030; '>-</span><span style='color:#800000; font-weight:bold; '>continue</span><span style='color:#808030; '>=</span>true                    <span style='color:#808030; '>^</span>
            <span style='color:#808030; '>-</span><span style='color:#808030; '>-</span><span style='color:#800000; font-weight:bold; '>dir</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"./switches/"</span>             <span style='color:#808030; '>-</span><span style='color:#808030; '>-</span>disable<span style='color:#808030; '>-</span>ipv6<span style='color:#808030; '>=</span>true                 <span style='color:#808030; '>-</span><span style='color:#808030; '>-</span>enable<span style='color:#808030; '>-</span>http<span style='color:#808030; '>-</span>keep<span style='color:#808030; '>-</span>alive<span style='color:#808030; '>=</span>true      <span style='color:#808030; '>^</span>
            <span style='color:#808030; '>-</span><span style='color:#808030; '>-</span>enable<span style='color:#808030; '>-</span>http<span style='color:#808030; '>-</span>pipelining<span style='color:#808030; '>=</span>true   <span style='color:#808030; '>-</span><span style='color:#808030; '>-</span><span style='color:#800000; font-weight:bold; '>file</span><span style='color:#808030; '>-</span>allocation<span style='color:#808030; '>=</span>prealloc          <span style='color:#808030; '>-</span><span style='color:#808030; '>-</span>http<span style='color:#808030; '>-</span>auth<span style='color:#808030; '>-</span>challenge<span style='color:#808030; '>=</span>false        <span style='color:#808030; '>^</span>
            <span style='color:#808030; '>-</span><span style='color:#808030; '>-</span>human<span style='color:#808030; '>-</span>readable<span style='color:#808030; '>=</span>true           <span style='color:#808030; '>-</span><span style='color:#808030; '>-</span>max<span style='color:#808030; '>-</span>concurrent<span style='color:#808030; '>-</span>downloads<span style='color:#808030; '>=</span><span style='color:#008c00; '>10</span>       <span style='color:#808030; '>-</span><span style='color:#808030; '>-</span>max<span style='color:#808030; '>-</span>connection<span style='color:#808030; '>-</span>per<span style='color:#808030; '>-</span>server<span style='color:#808030; '>=</span><span style='color:#008c00; '>16</span>     <span style='color:#808030; '>^</span>
            <span style='color:#808030; '>-</span><span style='color:#808030; '>-</span>min<span style='color:#808030; '>-</span>split<span style='color:#808030; '>-</span>size<span style='color:#808030; '>=</span>1M             <span style='color:#808030; '>-</span><span style='color:#808030; '>-</span>rpc<span style='color:#808030; '>-</span>secure<span style='color:#808030; '>=</span>false                  <span style='color:#808030; '>-</span><span style='color:#808030; '>-</span><span style='color:#800000; font-weight:bold; '>user</span><span style='color:#808030; '>-</span>agent<span style='color:#808030; '>=</span><span style='color:#0000e6; '>"Mozilla/5.0 Chrome"</span>  <span style='color:#808030; '>^</span>
            <span style='color:#808030; '>-</span><span style='color:#808030; '>-</span>split<span style='color:#808030; '>=</span><span style='color:#008c00; '>3</span>                       <span style='color:#808030; '>-</span><span style='color:#808030; '>-</span>timeout<span style='color:#808030; '>=</span><span style='color:#008c00; '>120</span>                       <span style='color:#808030; '>-</span><span style='color:#808030; '>-</span>connect<span style='color:#808030; '>-</span>timeout<span style='color:#808030; '>=</span><span style='color:#008c00; '>120</span>              <span style='color:#808030; '>^</span>
            <span style='color:#808030; '>-</span><span style='color:#808030; '>-</span>max<span style='color:#808030; '>-</span>tries<span style='color:#808030; '>=</span><span style='color:#008c00; '>3</span>                   <span style='color:#808030; '>-</span><span style='color:#808030; '>-</span>referer<span style='color:#808030; '>=</span><span style='color:#0000e6; '>"https://eladkarako.com/"</span>  <span style='color:#808030; '>-</span><span style='color:#808030; '>-</span>force<span style='color:#808030; '>-</span>sequential<span style='color:#808030; '>=</span>true            <span style='color:#808030; '>^</span>
            <span style='color:#808030; '>-</span><span style='color:#808030; '>-</span>input<span style='color:#808030; '>-</span><span style='color:#800000; font-weight:bold; '>file</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"switches_urls.txt"</span>   
<span style='color:#696969; '>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;::--console-log-level=notice      --log-level=info                    --log=log.txt</span>

<span style='color:#800000; font-weight:bold; '>echo</span><span style='color:#0000e6; '>. </span><span style='color:#808030; '>></span><span style='color:#800000; font-weight:bold; '>switches</span>.cc
<span style='color:#800000; font-weight:bold; '>for</span> <span style='color:#797997; '>%%</span>e <span style='color:#800000; font-weight:bold; '>in</span> <span style='color:#808030; '>(</span>.<span style='color:#808030; '>\\</span><span style='color:#800000; font-weight:bold; '>switches</span><span style='color:#808030; '>\\</span>*.*<span style='color:#808030; '>)</span> <span style='color:#800000; font-weight:bold; '>do</span> <span style='color:#808030; '>(</span>
  <span style='color:#800000; font-weight:bold; '>type</span> <span style='color:#0000e6; '>"%%e"</span> <span style='color:#808030; '>></span><span style='color:#808030; '>></span><span style='color:#800000; font-weight:bold; '>switches</span>.cc
<span style='color:#808030; '>)</span>
<span style='color:#800000; font-weight:bold; '>if</span> <span style='color:#800000; font-weight:bold; '>exist</span> .<span style='color:#808030; '>\\</span><span style='color:#800000; font-weight:bold; '>switches</span><span style='color:#808030; '>\\</span>       <span style='color:#800000; font-weight:bold; '>del</span>    <span style='color:#808030; '>/</span>s <span style='color:#808030; '>/</span>q <span style='color:#808030; '>/</span>f .<span style='color:#808030; '>\\</span><span style='color:#800000; font-weight:bold; '>switches</span><span style='color:#808030; '>\\</span>        <span style='color:#808030; '>></span><span style='color:#800000; font-weight:bold; '>nul</span>
<span style='color:#800000; font-weight:bold; '>if</span> <span style='color:#800000; font-weight:bold; '>exist</span> .<span style='color:#808030; '>\\</span><span style='color:#800000; font-weight:bold; '>switches</span><span style='color:#808030; '>\\</span>       <span style='color:#800000; font-weight:bold; '>rmdir</span>  <span style='color:#808030; '>/</span>s <span style='color:#808030; '>/</span>q    .<span style='color:#808030; '>\\</span><span style='color:#800000; font-weight:bold; '>switches</span><span style='color:#808030; '>\\</span>        <span style='color:#808030; '>></span><span style='color:#800000; font-weight:bold; '>nul</span>


<span style='color:#696969; '>::open for viewing (optional)</span>
<span style='color:#800000; font-weight:bold; '>start</span> <span style='color:#808030; '>/</span><span style='color:#800000; font-weight:bold; '>low</span> <span style='color:#808030; '>/</span>max <span style='color:#0000e6; '>"cmd /c "</span><span style='color:#800000; font-weight:bold; '>call</span> D<span style='color:#808030; '>:</span><span style='color:#808030; '>\\</span>Software<span style='color:#808030; '>\\</span>Notepad++<span style='color:#808030; '>\\</span>Notepad++.exe <span style='color:#0000e6; '>"switches.cc"</span><span style='color:#0000e6; '>""</span>

<span style='color:#800000; font-weight:bold; '>pause</span>
<span style='color:#800000; font-weight:bold; '>pause</span>
</pre>
<hr/>

And the list of file-names:
<code>switches_urls.txt</code>:
<pre>
https://cs.chromium.org/codesearch/f/chromium/src/android_webview/common/aw_switches.cc
https://cs.chromium.org/codesearch/f/chromium/src/apps/switches.cc
https://cs.chromium.org/codesearch/f/chromium/src/ash/common/ash_switches.cc
https://cs.chromium.org/codesearch/f/chromium/src/base/base_switches.cc
https://cs.chromium.org/codesearch/f/chromium/src/base/i18n/base_i18n_switches.cc
https://cs.chromium.org/codesearch/f/chromium/src/base/task_scheduler/switches.cc
https://cs.chromium.org/codesearch/f/chromium/src/base/test/test_switches.cc
https://cs.chromium.org/codesearch/f/chromium/src/cc/base/switches.cc
https://cs.chromium.org/codesearch/f/chromium/src/chrome/app/chrome_exe_main_win.cc
https://cs.chromium.org/codesearch/f/chromium/src/chrome/browser/supervised_user/experimental/supervised_user_filtering_switches.cc
https://cs.chromium.org/codesearch/f/chromium/src/chrome/common/chrome_switches.cc
https://cs.chromium.org/codesearch/f/chromium/src/chrome/test/base/test_switches.cc
https://cs.chromium.org/codesearch/f/chromium/src/chromecast/base/chromecast_switches.cc
https://cs.chromium.org/codesearch/f/chromium/src/chromecast/net/net_switches.cc
https://cs.chromium.org/codesearch/f/chromium/src/chromeos/chromeos_switches.cc
https://cs.chromium.org/codesearch/f/chromium/src/components/autofill/core/common/autofill_switches.cc
https://cs.chromium.org/codesearch/f/chromium/src/components/browser_sync/browser_sync_switches.cc
https://cs.chromium.org/codesearch/f/chromium/src/components/cloud_devices/common/cloud_devices_switches.cc
https://cs.chromium.org/codesearch/f/chromium/src/components/component_updater/component_updater_switches.cc
https://cs.chromium.org/codesearch/f/chromium/src/components/crash/content/app/crash_switches.cc
https://cs.chromium.org/codesearch/f/chromium/src/components/crash/content/app/crashpad_win.cc
https://cs.chromium.org/codesearch/f/chromium/src/components/cryptauth/switches.cc
https://cs.chromium.org/codesearch/f/chromium/src/components/data_reduction_proxy/core/common/data_reduction_proxy_switches.cc
https://cs.chromium.org/codesearch/f/chromium/src/components/dom_distiller/core/dom_distiller_switches.cc
https://cs.chromium.org/codesearch/f/chromium/src/components/error_page/common/error_page_switches.cc
https://cs.chromium.org/codesearch/f/chromium/src/components/feedback/feedback_switches.cc
https://cs.chromium.org/codesearch/f/chromium/src/components/flags_ui/flags_ui_switches.cc
https://cs.chromium.org/codesearch/f/chromium/src/components/google/core/browser/google_switches.cc
https://cs.chromium.org/codesearch/f/chromium/src/components/infobars/core/infobars_switches.cc
https://cs.chromium.org/codesearch/f/chromium/src/components/invalidation/impl/invalidation_switches.cc
https://cs.chromium.org/codesearch/f/chromium/src/components/metrics/metrics_switches.cc
https://cs.chromium.org/codesearch/f/chromium/src/components/nacl/common/nacl_switches.cc
https://cs.chromium.org/codesearch/f/chromium/src/components/ntp_snippets/switches.cc
https://cs.chromium.org/codesearch/f/chromium/src/components/ntp_tiles/switches.cc
https://cs.chromium.org/codesearch/f/chromium/src/components/omnibox/browser/omnibox_switches.cc
https://cs.chromium.org/codesearch/f/chromium/src/components/os_crypt/os_crypt_switches.cc
https://cs.chromium.org/codesearch/f/chromium/src/components/policy/core/common/policy_switches.cc
https://cs.chromium.org/codesearch/f/chromium/src/components/precache/core/precache_switches.cc
https://cs.chromium.org/codesearch/f/chromium/src/components/proximity_auth/switches.cc
https://cs.chromium.org/codesearch/f/chromium/src/components/reading_list/core/reading_list_switches.cc
https://cs.chromium.org/codesearch/f/chromium/src/components/safe_browsing/common/safebrowsing_switches.cc
https://cs.chromium.org/codesearch/f/chromium/src/components/search_engines/search_engines_switches.cc
https://cs.chromium.org/codesearch/f/chromium/src/components/search_provider_logos/switches.cc
https://cs.chromium.org/codesearch/f/chromium/src/components/security_state/core/switches.cc
https://cs.chromium.org/codesearch/f/chromium/src/components/signin/core/common/profile_management_switches.cc
https://cs.chromium.org/codesearch/f/chromium/src/components/signin/core/common/signin_switches.cc
https://cs.chromium.org/codesearch/f/chromium/src/components/spellcheck/common/spellcheck_switches.cc
https://cs.chromium.org/codesearch/f/chromium/src/components/ssl_config/ssl_config_switches.cc
https://cs.chromium.org/codesearch/f/chromium/src/components/sync/driver/sync_driver_switches.cc
https://cs.chromium.org/codesearch/f/chromium/src/components/tracing/common/tracing_switches.cc
https://cs.chromium.org/codesearch/f/chromium/src/components/translate/core/common/translate_switches.cc
https://cs.chromium.org/codesearch/f/chromium/src/components/ui_devtools/switches.cc
https://cs.chromium.org/codesearch/f/chromium/src/components/variations/variations_switches.cc
https://cs.chromium.org/codesearch/f/chromium/src/content/public/common/content_switches.cc
https://cs.chromium.org/codesearch/f/chromium/src/content/public/common/mojo_channel_switches.cc
https://cs.chromium.org/codesearch/f/chromium/src/content/shell/common/layout_test/layout_test_switches.cc
https://cs.chromium.org/codesearch/f/chromium/src/content/shell/common/shell_switches.cc
https://cs.chromium.org/codesearch/f/chromium/src/extensions/common/feature_switch.cc
https://cs.chromium.org/codesearch/f/chromium/src/extensions/common/switches.cc
https://cs.chromium.org/codesearch/f/chromium/src/extensions/shell/common/switches.cc
https://cs.chromium.org/codesearch/f/chromium/src/google_apis/drive/drive_switches.cc
https://cs.chromium.org/codesearch/f/chromium/src/google_apis/gaia/gaia_switches.cc
https://cs.chromium.org/codesearch/f/chromium/src/google_apis/gcm/engine/gservices_switches.cc
https://cs.chromium.org/codesearch/f/chromium/src/gpu/command_buffer/client/gpu_switches.cc
https://cs.chromium.org/codesearch/f/chromium/src/gpu/command_buffer/service/gpu_switches.cc
https://cs.chromium.org/codesearch/f/chromium/src/gpu/config/gpu_switches.cc
https://cs.chromium.org/codesearch/f/chromium/src/gpu/ipc/host/gpu_switches.cc
https://cs.chromium.org/codesearch/f/chromium/src/gpu/ipc/service/switches.cc
https://cs.chromium.org/codesearch/f/chromium/src/headless/app/headless_shell_switches.cc
https://cs.chromium.org/codesearch/f/chromium/src/ios/chrome/browser/chrome_switches.cc
https://cs.chromium.org/codesearch/f/chromium/src/media/base/media_switches.cc
https://cs.chromium.org/codesearch/f/chromium/src/media/midi/midi_switches.cc
https://cs.chromium.org/codesearch/f/chromium/src/ppapi/shared_impl/ppapi_switches.cc
https://cs.chromium.org/codesearch/f/chromium/src/remoting/host/switches.cc
https://cs.chromium.org/codesearch/f/chromium/src/services/service_manager/embedder/switches.cc
https://cs.chromium.org/codesearch/f/chromium/src/services/service_manager/public/cpp/standalone_service/switches.cc
https://cs.chromium.org/codesearch/f/chromium/src/services/service_manager/runner/common/switches.cc
https://cs.chromium.org/codesearch/f/chromium/src/services/service_manager/switches.cc
https://cs.chromium.org/codesearch/f/chromium/src/services/tracing/public/cpp/switches.cc
https://cs.chromium.org/codesearch/f/chromium/src/services/ui/common/switches.cc
https://cs.chromium.org/codesearch/f/chromium/src/tools/gn/switches.cc
https://cs.chromium.org/codesearch/f/chromium/src/ui/app_list/app_list_switches.cc
https://cs.chromium.org/codesearch/f/chromium/src/ui/base/ui_base_switches.cc
https://cs.chromium.org/codesearch/f/chromium/src/ui/compositor/compositor_switches.cc
https://cs.chromium.org/codesearch/f/chromium/src/ui/display/display_switches.cc
https://cs.chromium.org/codesearch/f/chromium/src/ui/events/event_switches.cc
https://cs.chromium.org/codesearch/f/chromium/src/ui/gfx/switches.cc
https://cs.chromium.org/codesearch/f/chromium/src/ui/gfx/x/x11_switches.cc
https://cs.chromium.org/codesearch/f/chromium/src/ui/gl/gl_switches.cc
https://cs.chromium.org/codesearch/f/chromium/src/ui/keyboard/keyboard_switches.cc
https://cs.chromium.org/codesearch/f/chromium/src/ui/message_center/message_center_switches.cc
https://cs.chromium.org/codesearch/f/chromium/src/ui/native_theme/native_theme_switches.cc
https://cs.chromium.org/codesearch/f/chromium/src/ui/ozone/public/ozone_switches.cc
https://cs.chromium.org/codesearch/f/chromium/src/ui/views/views_switches.cc
https://cs.chromium.org/codesearch/f/chromium/src/ui/wm/core/wm_core_switches.cc
</pre>

at the end you'll see something like:
<img src="https://icompile.eladkarako.com/_uploads/2017/03/icompile.eladkarako.com_aria2c_download_result_script.png" alt="" width="709" height="487"/>

What you'll get eventually is nothing fancy but a bit of <code>C</code> source-code and some comments,
but it will gather all of the most relevant and updated information for you in one large file,
that will allow you to quickly search of any reference.

<img src="https://icompile.eladkarako.com/_uploads/2017/03/icompile.eladkarako.com_chromium_command_line_switches_selected_part.png" alt="" width="709" height="293"/>


note that You'll need <code><a href="https://github.com/aria2/aria2/tags" target="_blank">aria2c.exe</a></code> and <code><a href="https://notepad-plus-plus.org/download/" target="_blank">Notepad++</a></code>.
