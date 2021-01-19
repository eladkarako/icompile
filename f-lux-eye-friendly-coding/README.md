<img title="f.lux" src="https://icompile.eladkarako.com/_uploads/flux.jpg" alt="" width="365" height="76" /> <br/>
F.lux is a <em>Blue Light Filter</em>.
<br/>
<a href="https://en.wikipedia.org/wiki/Effects_of_blue_light_technology">wikipedia.org/wiki/Effects_of_blue_light_technology</a> <br/>
<br/>
I like their old-version, which is almost 10 years old and works fine on Windows7.<br/>
I've slightly modified its embedded-manifest<sup><a href="https://en.wikipedia.org/wiki/Manifest_file">#1</a>&nbsp;<a href="https://github.com/eladkarako/manifest">#2</a></sup> to work well on Windows-10, <br/>
and I've extracted the required settings to a registry-file so there is no installation process by importing the settings-in.<br/>
<br/>
F.lux between two color-themes on sunset <sup><a href="https://en.wikipedia.org/wiki/Sunrise_equation">#1</a>&nbsp;<a href="https://justgetflux.com/map.html">#2</a></sup>, 
by default, the UI only allows the color-filter to go-down to 3400Kelvin, 
but I edited the registry-file and re-applied it to set the 
day-time theme to 3400Kelvin and night-time to 2400Kelvin, <br/>
I've put the different values in the registry file with some helpful comments...<br/>
<br/>
There is a need to apply a Windows-registry modification to allow a screen-color to go lower than 3400Kelvin, I've already included the "patch" in the program registry-file (first time applying might require a reboot to allow changes).
<br/>
My modified version: <a href="https://github.com/eladkarako/mods/tree/store/F.lux">github.com/eladkarako/mods/tree/store/F.lux</a>.
<br/>
If you need to assign a different longitude/latitude visit <a href="https://stereopsis.com/map.html">https://stereopsis.com/map.html</a> and enter your location, copy&amp;paste the result to the program.
<br/>
This program does not requires internet-access, I personally don't want it to look for updates or to be collecting any statistics, so I've blocked the following domain in my HOSTS file:
<pre>
#-----------------------------F.lux
0.0.0.0 forum.stereopsis.com
0.0.0.0 www.stereopsis.com
0.0.0.0 stereopsis.com
0.0.0.0 update.stereopsis.com
0.0.0.0 fluxupdate.stereopsis.com
0.0.0.0 fluxupdate.justgetflux.com
0.0.0.0 justgetflux.com
0.0.0.0 forum.justgetflux.com
0.0.0.0 update.justgetflux.com
0.0.0.0 www.justgetflux.com
</pre>
<br/>
<br/>
Here are some color-filter related graphics:<br/>
<img src="https://icompile.eladkarako.com/_uploads/flux_black_body_visible_spectrum.gif" /> <br/>
<img src="https://icompile.eladkarako.com/_uploads/flux_color_table.png" /> <br/>
<img src="https://icompile.eladkarako.com/_uploads/flux_color_table2.png" /> <br/>
<img src="https://icompile.eladkarako.com/_uploads/flux_color_temperature_chart.jpg" /> <br/>
