<img class="alignright wp-image-2621" src="https://icompile.eladkarako.com/_uploads/2015/02/icompile.eladkarako.com_events.jpg" alt="icompile.eladkarako.com_events" width="200" height="169" />When one of the specified events occurs on the specified object, the Event object is logged to the console. You can specify a single event to monitor, an array of events, or one of the generic events "types" that are mapped to a predefined collection of events. See examples below.

The following monitors all <code>resize</code> events on the <code>window</code> object.
<code><span class="pln">monitorEvents</span><span class="pun">(</span><span class="pln">window</span><span class="pun">,</span> <span class="str">"resize"</span><span class="pun">);</span></code>
<img src="https://developer.chrome.com/devtools/docs/commandline-api-files/monitor-resize.png" alt="Monitoring window resize events" />

<!--more-->

The following defines an array to monitor both "resize" and "scroll" events on the <code>window</code> object:
<code><span class="pln">monitorEvents</span><span class="pun">(</span><span class="pln">window</span><span class="pun">,</span> <span class="pun">[</span><span class="str">"resize"</span><span class="pun">,</span> <span class="str">"scroll"</span><span class="pun">])</span></code>
You can also specify one of the available event "types", strings that map to predefined sets of events. The table below lists the available event types and their associated event mappings:
<table>
<thead>
<tr>
<th>Event type</th>
<th>Corresponding mapped events</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>mouse</strong></td>
<td>"<code>mousedown</code>", "<code>mouseup</code>", "<code>click</code>", "<code>dblclick</code>", "<code>mousemove</code>", "<code>mouseover</code>", "<code>mouseout</code>", "<code>mousewheel</code>"</td>
</tr>
<tr>
<td><strong>key</strong></td>
<td>"<code>keydown</code>", "<code>keyup</code>", "<code>keypress</code>", "<code>textInput</code>"</td>
</tr>
<tr>
<td><strong>touch</strong></td>
<td>"<code>touchstart</code>", "<code>touchmove</code>", "<code>touchend</code>", "<code>touchcancel</code>"</td>
</tr>
<tr>
<td><strong>control</strong></td>
<td>"<code>resize</code>", "<code>scroll</code>", "<code>zoom</code>", "<code>focus</code>", "<code>blur</code>", "<code>select</code>", "<code>change</code>", "<code>submit</code>", "<code>reset</code>"</td>
</tr>
</tbody>
</table>
For example, the following uses the "key" event type all corresponding key events on an input text field ("<code>#msg</code>").
<code><span class="pln">monitorEvents</span><span class="pun">(</span><span class="pln">$</span><span class="pun">(</span><span class="str">"#msg"</span><span class="pun">),</span> <span class="str">"key"</span><span class="pun">);</span></code>
Below is sample output after typing two characters in the text field:

<img src="https://developer.chrome.com/devtools/docs/commandline-api-files/monitor-key-events.png" alt="Monitoring key events" />

<img class="screenshot" src="https://developer.chrome.com/devtools/docs/commandline-api-files/monitor-key-events.png" alt="" />

&nbsp;', 'JavaScript - monitorEvents(object[