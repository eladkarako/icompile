Closure-Linter was deprecated some time around February 2017,  
the links to download it from the Google-code website (and Google-code itself) were long gone,  

Both https://developers.google.com/closure/utilities  
and https://github.com/google/closure-compiler/wiki/Lint-checks  
both tells you about the sad story of the the project, and under-staffed team.  

...but it wasn't really gone,  
just embedded into the closure-compiler project,  
and if you read-through the pages - there is also a way to generate just the linter jar again.  

=-=-=-=-=-=-=  

First,  
if you want to relay on maven, for the builds,  
just go ahead to https://repo1.maven.org/maven2/com/google/javascript/closure-compiler-linter/  
where you can downloaded a jar for the linter ("officially" it is a mini-build of just the linter-option from the closure-compiler project, but it is, effectivly, what we are looking for).  

For example: https://repo1.maven.org/maven2/com/google/javascript/closure-compiler-linter/v20200830/closure-compiler-linter-v20200830.jar  

=-=-=-=-=-=-=  

https://code.google.com/p/closure-linter  will just redirect you to https://github.com/google/closure-linter  
which is where the OLD project is stored (not maintained, stored. for good couple of years..).  

=-=-=-=-=-=-=  

https://github.com/google/closure-compiler/wiki/Lint-checks suggests you either use the closure-compiler jar with <code>--jscomp_warning=lintChecks</code> (which is a pretty fair option!),  
or build a standalone jar.  

It also notify you that the checks are more generic,  
less formatting and more syntax. Which actually will suit most users pretty well!  

I myself was patching the linter code (Python) several times in several variation,  
to introduce a way to disable some of the formatting rules, I've mostly cared about the code to be parsed correctly and that's it... So to me, the "new" linter having most of the styling "tips" scraped away is a good thing.  

( https://clang.llvm.org/docs/ClangFormat.html is suggested for enforcing stylings ).  

=-=-=-=-=-=-=  

If you look for the old (but usable) linter you can still find it in:  
https://github.com/eladkarako/icompile/releases/download/latest/latest_linter_with_wget_and_tar.rar  
and  
https://github.com/eladkarako/icompile/releases/download/latest/closure_linter_2_3_9_with_patch.rar  
  
But browser around https://repo1.maven.org/maven2/com/google/javascript/  
to get the newly (already compiled) jar from the closure-compiler-linter folder,  
try it. It might suit you.

=-=-=-=-=-=-=  

Note I was downloading <code>closure-compiler-linter-v20200830.jar</code> but it didn't render any console viable output nor did it present anything similar to a "help" in the console.  
I've jumped backward few versions to <code>closure-compiler-linter-v20190325.jar</code>, and the same thing.  

Keep cool,  
just pass-along the argument the path the javascript file you would like to check.  

You can inspect (the code) for both:  
/com/google/javascript/jscomp/AbstractCommandLineRunner.java
and /com/google/javascript/jscomp/CommandLineRunner.java  
to get some insights.  

The arguments are very similar to the closure-compiler itself.  

<pre>
It still got <code>--dependency_mode=[NONE|SORT_ONLY|PRUNE_LEGACY|PRUNE|LOOSE|STRICT]</code> (for now),  
<code>--help</code> (which does not seems to work or output anything),  
<code>--print_tree</code> (Prints out the parse tree and exits),  
<code>--print_ast</code> (Prints a dot file describing the internal abstract syntax tree and exits),  
<code>--print_pass_graph</code> (Prints a dot file describing the passes that will get run and exits),  
<code>--emit_use_strict</code> (Start output with "'use strict';"),  
<code>--strict_mode_input</code> (Assume input sources are to run in strict mode),  
<code>--jscomp_dev_mode</code> alias <code>--dev_mode</code> (Turn on (very slow) extra validity checks for use when modifying the compiler.  
<code>--logging_level</code> (The logging level (standard java.util.logging.Level values) for Compiler progress. Does not control errors or warnings for the JavaScript code under compilation),  
<code>--externs</code> (The file containing JavaScript externs. You may specify multiple),  
<code>--js</code> (The JavaScript filename. You may specify multiple. The flag name is optional, because args are interpreted as files by default. You may also use minimatch-style glob patterns. For example, use "--js='**.js' --js='!**_test.js' to recursively include all js files that do not end in _test.js)
<code>--jszip</code> (The JavaScript zip filename. You may specify multiple),  
<code>--js_output_file</code> (Primary output filename. If not specified, output is written to stdout),  
<code>--chunk</code> alias <code>--module</code> (A JavaScript chunk specification. The format is <name>:<num-js-files>[:[<dep>,...][:]]]. Chunk names must be unique. Each dep is the name of a chunk that this chunk depends on. Chunks must be listed in dependency order, and JS source files must be listed in the corresponding order. Where --chunk flags occur in relation to --js flags is unimportant. <num-js-files> may be set to 'auto' for the first chunk if it has no dependencies. Provide the value 'auto' to trigger chunk creation from CommonJS modules),  
<code>--continue-saved-compilation</code> (Filename where the intermediate compilation state was previously saved),  

<code>--save-after-checks</code> (Filename to save phase 1 intermediate state so that the compilation can be resumed later),  
<code>--variable_renaming_report</code> (File where the serialized version of the variable renaming map produced should be saved),  
<code>--create_renaming_reports</code> (If true, variable renaming and property renaming report files will be produced as {binary name}_vars_renaming_report.out and {binary name}_props_renaming_report.out. Note that this flag cannot be used in conjunction with either variable_renaming_report or property_renaming_report),  
<code>--source_map_include_content</code> (Includes sources content into source map. Greatly increases the size of source maps but offers greater portability),  
<code>--property_renaming_report</code> (File where the serialized version of the property renaming map produced should be saved),  
<code>--third_party</code> (Check source validity but do not enforce Closure style rules and conventions),  
<code>--summary_detail_level</code> (Controls how detailed the compilation summary is. Values: 0 (never print summary), 1 (print summary only if there are errors or warnings), 2 (print summary if the 'checkTypes' diagnostic  group is enabled, see --jscomp_warning), 3 (always print summary). The default level is 1),  
<code>--isolation_mode</code> (If set to IIFE the compiler output will follow the form:  (function(){%output%}).call(this);    Options: [NONE|IIFE]),  
<code>--output_wrapper</code>  (Interpolate output into this string at the place denoted by the marker token %output%. Use marker token %output|jsstring% to do js string escaping on the output. Consider using the --isolation_mode flag instead),  
...
.....
<code>--jscomp_off</code> (Turn off the named class of warnings. Must be one of the error group items. '*' adds all supported)
........
..........
....and more.....
</pre>

You may quickly download the (recent!) source from https://repo1.maven.org/maven2/com/google/javascript/closure-compiler-linter/v20200830/closure-compiler-linter-v20200830-sources.jar (for example),  
and unzip it.

=-=-=-=-=-=-=  

https://github.com/google/closure-compiler/wiki  
