<!--more-->
<h2></h2>
<style type="text/css"> .info1{ background-color:#E8F7FF; } </style>
<div id="tools-that-work-with-graphite">
<div id="backstop">
<h2>Backstop</h2>
<span class="info1">
<a href="https://github.com/obfuscurity/backstop">Backstop</a> is a simple endpoint for submitting metrics to Graphite. It accepts JSON data via HTTP POST and proxies the data to one or more Carbon/Graphite listeners.
</span>
</div>
<div id="bucky">
<h2>Bucky</h2>
<span class="info1">
<a href="http://pypi.python.org/pypi/bucky">Bucky</a> is a small service implemented in Python for collecting and translating metrics for Graphite. It can current collect metric data from CollectD daemons and from StatsD clients.
</span>
</div>

<div id="collectd">
<h2>collectd</h2>
<span class="info1">
<a href="http://collectd.org/">collectd</a> is a daemon which collects system performance statistics periodically and provides mechanisms to store the values in a variety of ways, including RRD. To send collectd metrics into carbon/graphite, use collectd’s <a href="http://collectd.org/wiki/index.php/Plugin:Write_Graphite">write-graphite</a> plugin (available as of 5.1). Other options include:
<ul>
	<li>Jordan Sissel’s node <a href="https://github.com/loggly/collectd-to-graphite">collectd-to-graphite</a> proxy</li>
	<li>Joe Miller’s perl <a href="https://github.com/joemiller/collectd-graphite">collectd-graphite</a> plugin</li>
	<li>Gregory Szorc’s python <a href="https://github.com/indygreg/collectd-carbon">collectd-carbon</a> plugin</li>
	<li>Paul J. Davis’s <a href="http://pypi.python.org/pypi/bucky">Bucky</a> service</li>
</ul>
Graphite can also read directly from <a href="http://collectd.org/">collectd</a>‘s RRD files. RRD files can simply be added to <tt>STORAGE_DIR/rrd</tt> (as long as directory names and files do not contain any <tt>.</tt> characters). For example, collectd’s <tt>host.name/load/load.rrd</tt> can be symlinked to <tt>rrd/collectd/host_name/load/load.rrd</tt> to graph <tt>collectd.host_name.load.load.{short,mid,long}term</tt>.
</span>
</div>

<div id="collectl">
<h2>Collectl</h2>
<span class="info1">
<a href="http://collectl.sourceforge.net/">Collectl</a> is a collection tool for system metrics that can be run both interactively and as a daemon and has support for collecting from a broad set of subsystems. Collectl includes a Graphite interface which allows data to easily be fed to Graphite for storage.
</span>
</div>

<div id="charcoal">
<h2>Charcoal</h2>
<span class="info1">
<a href="https://github.com/cebailey59/charcoal">Charcoal</a> is a simple Sinatra dashboarding frontend for Graphite or any other system status service which can generate images directly from a URL. Charcoal configuration is driven by a YAML config file.
</span>
</div>

<div id="cubism-js">
<h2>Cubism.js</h2>
<span class="info1">
<a href="http://square.github.io/cubism/">Cubism.js</a> is a D3 plugin for visualizing time series data in real time, and can pull data from Graphite.
</span>
</div>

<div id="descartes">
<h2>Descartes</h2>
<span class="info1">
<a href="https://github.com/obfuscurity/descartes">Descartes</a> is a Sinatra-based dashboard that allows users to correlate multiple metrics in a single chart, review long-term trends across one or more charts, and to collaborate with other users through a combination of shared dashboards and rich layouts.
</span>
</div>

<div id="diamond">
<h2>Diamond</h2>
<span class="info1">
<a href="http://opensource.brightcove.com/project/Diamond/">Diamond</a> is a Python daemon that collects system metrics and publishes them to Graphite. It is capable of collecting cpu, memory, network, I/O, load and disk metrics. Additionally, it features an API for implementing custom collectors for gathering metrics from almost any source.
</span>
</div>

<div id="dusk">
<h2>Dusk</h2>
<span class="info1">
<a href="https://github.com/obfuscurity/dusk">Dusk</a> is a simple dashboard for isolating “hotspots” across a fleet of systems. It incorporates horizon charts using Cubism.js to maximize data visualization in a constrained space.
</span>
</div>

<div id="evenflow">
<h2>Evenflow</h2>
<span class="info1">
<a href="https://github.com/github/evenflow">Evenflow</a> is a simple service for submitting sFlow datagrams to Graphite. It accepts sFlow datagrams from multiple network devices and proxies the data to a Carbon listener. Currently only Generic Interface Counters are supported. All other message types are discarded.
</span>
</div>

<div id="ganglia">
<h2>Ganglia</h2>
<span class="info1">
<a href="http://ganglia.info/">Ganglia</a> is a scalable distributed monitoring system for high-performance computing systems such as clusters and Grids. It collects system performance metrics and stores them in RRD, but now there is an <a href="https://github.com/ganglia/ganglia_contrib/tree/master/graphite_integration/">add-on</a> that allows Ganglia to send metrics directly to Graphite. Further integration work is underway.
</span>
</div>

<div id="gdash">
<h2>GDash</h2>
<span class="info1">
<a href="https://github.com/ripienaar/gdash.git">Gdash</a> is a simple Graphite dashboard built using Twitters Bootstrap driven by a small DSL.
</span>
</div>

<div id="giraffe">
<h2>Giraffe</h2>
<span class="info1">
<a href="http://kenhub.github.com/giraffe/">Giraffe</a> is a Graphite real-time dashboard based on <a href="http://code.shutterstock.com/rickshaw/">Rickshaw</a> and requires no server backend. Inspired by <a href="https://github.com/ripienaar/gdash.git">Gdash</a>, <a href="https://github.com/obfuscurity/tasseo">Tasseo</a> and <a href="http://jondot.github.com/graphene/">Graphene</a> it mixes features from all three into a slightly different animal.
</span>
</div>

<div id="graphitus">
<h2>Graphitus</h2>
<span class="info1">
<a href="http://graphite.readthedocs.org/en/latest/tools.html#graphitus">graphitus</a> is a client side dashboard for graphite built using bootstrap and underscore.js.
</span>
</div>

<div id="graph-explorer">
<h2>Graph-Explorer</h2>
<span class="info1">
<a href="http://vimeo.github.io/graph-explorer">Graph-Explorer</a> is a graphite dashboard which uses plugins to add tags and metadata to metrics and a query language with lets you filter through them and compose/manipulate graphs on the fly. Also aims for high interactivity using <a href="https://github.com/Dieterbe/timeserieswidget">TimeseriesWidget</a> and minimal hassle to set up and get running.
</span>
</div>

<div id="graph-index">
<h2>Graph-Index</h2>
<span class="info1">
<a href="https://github.com/huoxy/graph-index">Graph-Index</a> is index of graphs for <a href="http://opensource.brightcove.com/project/Diamond/">Diamond</a>
</span>
</div>

<div id="graphene">
<h2>Graphene</h2>
<span class="info1">
<a href="http://jondot.github.com/graphene/">Graphene</a> is a Graphite dashboard toolkit based on <a href="http://mbostock.github.com/d3/">D3.js</a> and <a href="http://backbonejs.org/">Backbone.js</a> which was made to offer a very aesthetic realtime dashboard. Graphene provides a solution capable of displaying thousands upon thousands of datapoints all updated in realtime.
</span>
</div>

<div id="graphite-newrelic">
<h2>Graphite-Newrelic</h2>
<span class="info1">
<a href="https://github.com/gingerlime/graphite-newrelic">Graphite-Newrelic</a> - Get your graphite data into <a href="https://newrelic.com/platform">New Relic</a> via a New Relic Platform plugin.
</span>
</div>

<div id="graphite-observer">
<h2>Graphite-Observer</h2>
<span class="info1">
<a href="https://github.com/huoxy/graphite-observer">Graphite-Observer</a> is a real-time monitor dashboard for Graphite.
</span>
</div>

<div id="graphite-relay">
<h2>Graphite-relay</h2>
<span class="info1">
<a href="https://github.com/markchadwick/graphite-relay">Graphite-relay</a> is a fast Graphite relay written in Scala with the Netty framework.
</span>
</div>

<div id="graphite-tattle">
<h2>Graphite-Tattle</h2>
<span class="info1">
<a href="https://github.com/wayfair/Graphite-Tattle">Graphite-Tattle</a> is a self-service dashboard frontend for Graphite and <a href="http://ganglia.info/">Ganglia</a>.
</span>
</div>

<div id="graphiti">
<h2>Graphiti</h2>
<span class="info1">
<a href="https://github.com/paperlesspost/graphiti">Graphiti</a> is a powerful dashboard front end with a focus on ease of access, ease of recovery and ease of tweaking and manipulation.
</span>
</div>

<div id="graphitoid">
<h2>Graphitoid</h2>
<span class="info1">
<a href="https://market.android.com/details?id=com.tnc.android.graphite">Graphitoid</a> is an Android app which allows one to browse and display Graphite graphs on an Android device.
</span>
</div>

<div id="graphios">
<h2>Graphios</h2>
<span class="info1">
<a href="https://github.com/shawn-sterling/graphios">Graphios</a> is a small Python daemon to send Nagios performance data (perfdata) to Graphite.
</span>
</div>

<div id="graphitejs">
<h2>Graphitejs</h2>
<span class="info1">
<a href="https://github.com/prestontimmons/graphitejs">Graphitejs</a> is a jQuery plugin for easily making and displaying graphs and updating them on the fly using the Graphite URL api.
</span>
</div>

<div id="graphsky">
<h2>Graphsky</h2>
<span class="info1">
<a href="https://github.com/hyves-org/graphsky">Graphsky</a> is flexible and easy to configure PHP based dashboard. It uses JSON template files to build graphs and specify which graphs need to be displayed when, similar to Ganglia-web. Just like Ganglia, it uses a hierarchial structure: Environment/Cluster/Host/Metric to be able to display overview graphs and host-specific metrics. It communicates directly to the Graphite API to determine which Environments, Clusters, Hosts and Metrics are currently stored in Graphite.
</span>
</div>

<div id="grockets">
<h2>Grockets</h2>
<span class="info1">
<a href="https://github.com/disqus/grockets">Grockets</a> is a node.js application which provides streaming JSON data over HTTP from Graphite.
</span>
</div>

<div id="hoardd">
<h2>HoardD</h2>
<span class="info1">
<a href="https://github.com/coredump/hoardd">HoardD</a> is a Node.js app written in CoffeeScript to send data from servers to Graphite, much like collectd does, but aimed at being easier to expand and with less footprint. It comes by default with basic collectors plus Redis and MySQL metrics, and can be expanded with Javascript or CoffeeScript.
</span>
</div>

<div id="host-sflow">
<h2>Host sFlow</h2>
<span class="info1">
<a href="http://host-sflow.sourceforge.net/">Host sFlow</a> is an open source implementation of the sFlow protocol (<a href="http://www.sflow.org">http://www.sflow.org</a>), exporting a standard set of host cpu, memory, disk and network I/O metrics. The sflow2graphite utility converts sFlow to Graphite’s plaintext protocol, allowing Graphite to receive sFlow metrics.
</span>
</div>

<div id="hubot-scripts">
<h2>hubot-scripts</h2>
<span class="info1">
<a href="https://github.com/github/hubot">Hubot</a> is a Campfire bot written in Node.js and CoffeeScript. The related <a href="https://github.com/github/hubot-scripts">hubot-scripts</a> project includes a Graphite script which supports searching and displaying saved graphs from the Composer directory in your Campfire rooms.
</span>
</div>

<div id="jmxtrans">
<h2>jmxtrans</h2>
<span class="info1">
<a href="http://code.google.com/p/jmxtrans/">jmxtrans</a> is a powerful tool that performs JMX queries to collect metrics from Java applications. It is requires very little configuration and is capable of sending metric data to several backend applications, including Graphite.
</span>
</div>

<div id="ledbetter">
<h2>Ledbetter</h2>
<span class="info1">
<a href="https://github.com/github/ledbetter">Ledbetter</a> is a simple script for gathering Nagios problem statistics and submitting them to Graphite. It focuses on summary (overall, servicegroup and hostgroup) statistics and writes them to the nagios.problems metrics namespace within Graphite.
</span>
</div>

<div id="logster">
<h2>Logster</h2>
<span class="info1">
<a href="https://github.com/etsy/logster">Logster</a> is a utility for reading log files and generating metrics in Graphite or Ganglia. It is ideal for visualizing trends of events that are occurring in your application/system/error logs. For example, you might use logster to graph the number of occurrences of HTTP response code that appears in your web server logs.
</span>
</div>

<div id="orion">
<h2>Orion</h2>
<span class="info1">
<a href="https://github.com/gree/Orion">Orion</a> is powerful tool to create, view and manage dashboards for your Graphite data. It allows easy implementation of custom authentication to manage access to the dashboard.
</span>
</div>
<div id="metrics-sampler">
<h2>metrics-sampler</h2>
<span class="info1">
<a href="https://github.com/dimovelev/metrics-sampler">metrics-sampler</a> is a java program which regularly queries metrics from a configured set of inputs, selects and renames them using regular expressions and sends them to a configured set of outputs. It supports JMX and JDBC as inputs and Graphite as output out of the box.
</span>
</div>
<div id="pencil">
<h2>Pencil</h2>
<span class="info1">
<a href="https://github.com/fetep/pencil">Pencil</a> is a monitoring frontend for graphite. It runs a webserver that dishes out pretty Graphite URLs in interesting and intuitive layouts.
</span>
</div>
<div id="pipe-to-graphite">
<h2>pipe-to-graphite</h2>
<span class="info1">
<a href="https://github.com/iFixit/pipe-to-graphite">pipe-to-graphite</a> is a small shell script that makes it easy to report the output of any other cli program to Graphite.
</span>
</div>
<div id="rocksteady">
<h2>Rocksteady</h2>
<span class="info1">
<a href="http://code.google.com/p/rocksteady/">Rocksteady</a> is a system that ties together Graphite, <a href="http://www.rabbitmq.com/">RabbitMQ</a>, and <a href="http://esper.codehaus.org/">Esper</a>. Developed by AdMob (who was then bought by Google), this was released by Google as open source (<a href="http://google-opensource.blogspot.com/2010/09/get-ready-to-rocksteady.html">http://google-opensource.blogspot.com/2010/09/get-ready-to-rocksteady.html</a>).
</span>
</div>
<div id="scales">
<h2>Scales</h2>
<span class="info1">
<a href="http://graphite.readthedocs.org/en/latest/tools.html#scales">Scales</a> is a Python server state and statistics library that can output its data to Graphite.
</span>
</div>
<div id="sensu">
<h2>Sensu</h2>
<span class="info1">
<a href="http://sensuapp.org/">Sensu</a> is a monitoring framework that can route metrics to Graphite. Servers subscribe to sets of checks, so getting metrics from a new server to Graphite is as simple as installing the Sensu client and subscribing.
</span>
</div>
<div id="seyren">
<h2>Seyren</h2>
<span class="info1">
<a href="https://github.com/scobal/seyren">Seyren</a> is an alerting dashboard for Graphite.
</span>
</div>
<div id="shinken">
<h2>Shinken</h2>
<span class="info1">
<a href="http://www.shinken-monitoring.org/">Shinken</a> is a system monitoring solution compatible with Nagios which emphasizes scalability, flexibility, and ease of setup. Shinken provides complete integration with Graphite for processing and display of performance data.
</span>
</div>
<div id="sqltographite">
<h2>SqlToGraphite</h2>
<span class="info1">
<a href="https://github.com/perryofpeek/SqlToGraphite/">SqlToGraphite</a> is an agent for windows written in .net to collect metrics using plugins (WMI, SQL Server, Oracle) by polling an endpoint with a SQL query and pushing the results into graphite. It uses either a local or a centralised configuration over HTTP.
</span>
</div>
<div id="statsd">
<h2>statsd</h2>
<span class="info1">
<a href="https://github.com/etsy/statsd">statsd</a> is a simple daemon for easy stats aggregation, developed by the folks at Etsy. A list of forks and alternative implementations can be found at &lt;<a href="http://joemiller.me/2011/09/21/list-of-statsd-server-implementations/">http://joemiller.me/2011/09/21/list-of-statsd-server-implementations/</a>&gt;
</span>
</div>
<div id="structured-metrics">
<h2>Structured Metrics</h2>
<span class="info1">
<a href="https://github.com/vimeo/graph-explorer/tree/master/structured_metrics">structured_metrics</a> is a lightweight python library that uses plugins to read in Graphite’s list of metric names and convert it into a multi-dimensional tag space of clear, sanitized targets.
</span>
</div>
<div id="tasseo">
<h2>Tasseo</h2>
<span class="info1">
<a href="https://github.com/obfuscurity/tasseo">Tasseo</a> is a lightweight, easily configurable, real-time dashboard for Graphite metrics.
</span>
</div>
<div id="therry">
<h2>Therry</h2>
<span class="info1">
<a href="https://github.com/obfuscurity/therry">Therry</a> ia s simple web service that caches Graphite metrics and exposes an endpoint for dumping or searching against them by substring.
</span>
</div>

<div id="timeserieswidget">
<h2>TimeseriesWidget</h2>
<span class="info1">
<a href="https://github.com/Dieterbe/timeserieswidget">TimeseriesWidget</a> adds timeseries graphs to your webpages/dashboards using a simple api, focuses on high interactivity and modern features (realtime zooming, datapoint inspection, annotated events, etc). Supports Graphite, flot, rickshaw and anthracite.
</span>
</div>

<div id="team_dashboard">
<h2>team_dashboard</h2>
<span class="info1">
<a href="http://fdietz.github.io/team_dashboard/">team_dashboard</a> Team Dashboard lets you visualize your team's metrics all in one place. It is build to be shown on a big screen in your team's space.. <a href="http://team-dashboard.herokuapp.com/">demo</a>.
</span>
</div>


</div>