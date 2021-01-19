<blockquote>
<strong>Touch scrolling mode</strong> <em>
Change the touch event behavior while scrolling. "touchcancel" is what Chrome has historically used, and "async-touchmove" is the new preferred mode. &nbsp; <small><strong>#touch-scrolling-mode</strong></small>
</em></blockquote>

<!--more-->


<p style="margin: 0.4em 0px 0.8em; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 17px; line-height: 25.5px;"></p>
<p style="margin: 0.4em 0px 0.8em; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 17px; line-height: 25.5px;"></p>
<p style="margin: 0.4em 0px 0.8em; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 17px; line-height: 25.5px;">The new behavior is:</p>

<ul style="margin: 1em 0px; padding: 0px 0px 0px 40px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 17px; line-height: 25.5px;">
	<li>The <strong>first</strong> touchmove is sent <strong>synchronously</strong> to allow scroll to be <strong>canceled</strong></li>
	<li>During active scrolling
<ul style="margin: 1em 0px; padding: 0px 0px 0px 40px;">
	<li>touchmove events are sent <strong>asynchronously</strong></li>
	<li><strong>throttled</strong> to 1 event per <strong>200ms</strong>, or if a CSS <strong>15px</strong> slop region is exceeded</li>
	<li><strong>Event.cancelable</strong> is <strong>false</strong></li>
</ul>
</li>
	<li>Otherwise, touchmove events fire synchronously as normal when active scrolling terminates or isn’t possible because the scroll limit has been hit</li>
	<li>A touchend event <strong>always</strong> occurs when the user lifts their finger</li>
</ul>
<p style="margin: 0.4em 0px 0.8em; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 17px; line-height: 25.5px;">You can try this <a style="color: #508b88; text-decoration-line: underline;" href="http://www.rbyers.net/touchevent-scroll.html">demo</a> in Chrome for Android and toggle the chrome://flags#touch-scrolling-mode flag to see the difference.</p>