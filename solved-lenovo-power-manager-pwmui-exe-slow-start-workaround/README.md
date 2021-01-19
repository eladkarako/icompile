<img src="https://icompile.eladkarako.com/_uploads/2017/07/icompile.eladkarako.com_lenovo_power_manager_slow_start_workaround.png" alt="" width="128" height="128" />

<em>Owning a Lenovo/IBM computer, meaning usually having to deal with Lenovo's quirky products,
and badly-designed/badly-programmed UI/core components. It's a fact, so don't bitch about it!</em>

<img src="https://icompile.eladkarako.com/_uploads/2017/07/icompile.eladkarako.com_lenovo_ibm_slow_start_power_manager_workaround_solution_logo_title.png" alt="" width="582" height="445" />

The semi-working workaround is to do a "warm-up",
i. e. - starting <code>"C:\\Program Files (x86)\\ThinkPad\\Utilities\\PWMUI.EXE"</code> (as admin..)
and quickly force-closing it using task-manager, followed by quickly (needs to be less than 20 seconds later) restarting the <code>PWMUI.EXE</code> application <strong>again</strong>, and <strong>this time</strong> it will load-up in few seconds.

The cause is (...probably) for the shittiness of Lenovo's <em>power manager</em> (<code>PWMUI.exe</code>) UI is that it was written using a very old .Net framework some of the shittiest code-library known to human race called <em>Presentation Foundation</em>, this code swap so many hands that older versions (2.0/3.0 -which PWMUI uses), got broken by newer versions, specifically - the resource-loading management, essentially switching from a proactive attitude to a "on-demand/on-the-fly" way, that requires getting an event signaling *stuff*... old code is getting into a "blocking mode", and waits (A LOT!) before falling back to legacy back-end which load the resources the way versions 2.0/3.0 used to..
Also, when closed, the application <sup>*Presentation Foundation</sup> will unload the resources, so you'll need to repeat the workaround each time you'll want to run the power-manager application.

<hr/>
I've reversed-engineered the source of the power-manager application
<sub>which is quite and easy feat, due to the fact was written practically with minimal code, using the <em>Presentation Foundation</em> template of .Net</sub>.
It was probably written as a Visual-Basic.Net, I've converted it to C# which is nicer ;)
and the source (if you wish to help debug it, or even compile it using a more recent version of .Net, which will surely clear some issues) is available here: <a href="https://github.com/eladkarako/lenovo-pm-ui/">https://github.com/eladkarako/lenovo-pm-ui/</a>.

Enjoy!