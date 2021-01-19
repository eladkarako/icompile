<a href="https://github.com/FFmpeg/FFmpeg/blob/master/fftools/cmdutils.c#L873-L882">https://github.com/FFmpeg/FFmpeg/blob/master/fftools/cmdutils.c#L873-L882</a> <br/>
<a href="https://github.com/FFmpeg/FFmpeg/blob/master/libavutil/log.h">https://github.com/FFmpeg/FFmpeg/blob/master/libavutil/log.h</a> <br/>

call it with <code>ffmpeg -hide_banner -y -loglevel _____</code> or with <code>ffmpeg -hide_banner -y -v _____</code>.

<table>
<thead>
<tr><td>name to use in command line</td><td>value</td><td>enum</td><td>meaning</td></tr>
</thead>
<tbody>
<tr><td><code>quiet</code></td>    <td><code>-8</code></td>  <td><code>AV_LOG_QUIET</code></td>    <td>Print no output.</td></tr>
<tr><td><code>panic</code></td>    <td><code>0</code></td>   <td><code>AV_LOG_PANIC</code></td>    <td>Something went really wrong and we will crash now.</td></tr>
<tr><td><code>fatal</code></td>    <td><code>8</code></td>   <td><code>AV_LOG_FATAL</code></td>    <td>Something went wrong and recovery is not possible. For example, no header was found for a format which depends on headers or an illegal combination of parameters is used.</td></tr>
<tr><td><code>error</code></td>    <td><code>16</code></td>  <td><code>AV_LOG_ERROR</code></td>    <td>Something went wrong and cannot losslessly be recovered. However, not all future data is affected.</td></tr>
<tr><td><code>warning</code></td>  <td><code>24</code></td>  <td><code>AV_LOG_WARNING</code></td>  <td>Something somehow does not look correct. This may or may not lead to problems. An example would be the use of '-vstrict -2'.</td></tr>
<tr><td><code>info</code></td>     <td><code>32</code></td>  <td><code>AV_LOG_INFO</code></td>     <td>Standard information.</td></tr>
<tr><td><code>verbose</code></td>  <td><code>40</code></td>  <td><code>AV_LOG_VERBOSE</code></td>  <td>Detailed information.</td></tr>
<tr><td><code>debug</code></td>    <td><code>48</code></td>  <td><code>AV_LOG_DEBUG</code></td>    <td>Stuff which is only useful for libav* developers.</td></tr>
<tr><td><code>trace</code></td>    <td><code>56</code></td>  <td><code>AV_LOG_TRACE</code></td>    <td>Extremely verbose debugging, useful for libav* development.</td></tr>
</tbody>
</table>

<code>AV_LOG_MAX_OFFSET (AV_LOG_TRACE - AV_LOG_QUIET)</code>
