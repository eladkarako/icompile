Download:
<code>http://closure-linter.googlecode.com/files/closure_linter-latest.tar.gz</code>

Use WinRAR or <a href="http://legroom.net/software/uniextract" title="Universal Extractor -- I Really Like It!" target="_blank">Universal Extractor</a>

after extracting (twice),
you'll be left with the "installation":
<img src="https://icompile.eladkarako.com/_uploads/2013/03/2013-03-28_000728.jpg" alt="2013-03-28_000728" width="239" height="188" class="alignnone size-full wp-image-668" />

open CMD, and navigate to this folder (shortcut -- hold shift, click in the folder once removing selection from files, then right click on empty space and you'll have 'open command window here' in the context menu -- open CMD in this folder),

as explained in the README file,
run
<code>python ./setup.py install</code>
you will get a message
<code>Installing fixjsstyle.exe script to C:\\PYTHON27\\Scripts
Installing gjslint.exe script to C:\\PYTHON27\\Scripts</code>

now you can add the path
<code>C:\\Python27\\Scripts</code>
to your <strong>PATH</strong> Environment-variable, so you could use gjslint.exe from everywhere.



how to use:

run 
<code>gjslint.exe --strict file1.js</code>
to get all the Google-Closure-JSlinter messages.
you don't have to use the '--strict' but it is probably better if you'll do.
<code>gjslint.exe file1.js</code>

to skip checking the @param and other annotations in the JSDoc, you can add --nojsdoc
<code>gjslint.exe --strict --nojsdoc file1.js</code>

you can run recursively on a folder's content, parsing without changing, the files, and writing the result to output.
<code>gjslint.exe -r C:\\work\\trunk\\jsfolder</code>

<code>fixjsstyle.exe file1.js</code> 
to automatically preform style and code changes (make sure to backup first in case you won't like the result, it is not backing up by default, but changing the file directly).


the original document https://developers.google.com/closure/utilities/docs/linter_howto

the Google Closure page https://developers.google.com/closure/library/


Also check-out the "how to integrate with JetBrains WebStorm 6". (soon to come)



you can also run
<code>gjslint.exe --help</code> to get the following list of command line switches:
<code>
USAGE: C:\\Python27\\Scripts\\gjslint-script.py [flags]

flags:

closure_linter.checker:
  --closurized_namespaces: Namespace prefixes, used for testing
    ofgoog.provide/require
    (default: '')
    (a comma separated list)
  --ignored_extra_namespaces: Fully qualified namespaces that should be not be
    reported as extra by the linter.
    (default: '')
    (a comma separated list)

closure_linter.common.simplefileflags:
  -e,--exclude_directories: Exclude the specified directories (only applicable
    along with -r or --presubmit)
    (default: '_demos')
    (a comma separated list)
  -x,--exclude_files: Exclude the specified files
    (default: 'deps.js')
    (a comma separated list)
  -r,--recurse: Recurse in to the subdirectories of the given path;
    repeat this option to specify a list of values

closure_linter.ecmalintrules:
  --custom_jsdoc_tags: Extra jsdoc tags to allow
    (default: '')
    (a comma separated list)

closure_linter.error_check:
  --jslint_error: List of specific lint errors to check. Here is a list of
    accepted values:
    - all: enables all following errors.
    - blank_lines_at_top_level: validatesnumber of blank lines between blocks at
    top level.
    - indentation: checks correct indentation of code.
    - well_formed_author: validates the @author JsDoc tags.
    - no_braces_around_inherit_doc: forbids braces around @inheritdoc JsDoc
    tags.
    - braces_around_type: enforces braces around types in JsDoc tags.
    - optional_type_marker: checks correct use of optional marker = in param
    types.
    - unused_private_members: checks for unused private variables.
    ;
    repeat this option to specify a list of values
    (default: '[]')
  --[no]strict: Whether to validate against the stricter Closure style. This
    includes optional_type_marker, well_formed_author,
    no_braces_around_inherit_doc, indentation, braces_around_type,
    blank_lines_at_top_level.
    (default: 'false')

closure_linter.errorrules:
  --[no]jsdoc: Whether to report errors for missing JsDoc.
    (default: 'true')

closure_linter.gjslint:
  --additional_extensions: List of additional file extensions (not js) that
    should be treated as JavaScript files.
    (a comma separated list)
  --[no]beep: Whether to beep when errors are found.
    (default: 'true')
  --[no]check_html: Whether to check javascript in html files.
    (default: 'false')
  -?,--[no]help: show this help
  --[no]helpshort: show usage only for this module
  --[no]helpxml: like --help, but generates XML output
  --[no]multiprocess: Whether to attempt parallelized linting using the
    multiprocessing module. Enabled by default on Linux if the multiprocessing
    module is present (Python 2.6+). Otherwise disabled by default. Disabling
    may make debugging easier.
    (default: 'false')
  --[no]summary: Whether to show an error count summary.
    (default: 'false')
  --[no]time: Whether to emit timing statistics.
    (default: 'false')
  --[no]unix_mode: Whether to emit warnings in standard unix format.
    (default: 'false')

closure_linter.indentation:
  --[no]debug_indentation: Whether to print debugging information for
    indentation.
    (default: 'false')

closure_linter.runner:
  --[no]error_trace: Whether to show error exceptions.
    (default: 'false')
  --limited_doc_files: List of files with relaxed documentation checks. Will not
    report errors for missing documentation, some missing descriptions, or
    methods whose @return tags don't have a matching return statement.
    (default: 'dummy.js,externs.js')
    (a comma separated list)

gflags:
  --flagfile: Insert flag definitions from the given file into the command line.
    (default: '')
  --undefok: comma-separated list of flag names that it is okay to specify on
    the command line even if the program does not define a flag with that name.
    IMPORTANT: flags in this list that have arguments MUST use the --flag=value
    format.
    (default: '')
</code>


run <code>fixjsstyle.exe --help</code> to get the full command line switches or the "fix style" execute,

note that the HELP text is saying
<code>USAGE: C:\\Python27\\Scripts\\gjslint-script.py [flags]</code>
<code>USAGE: C:\\Python27\\Scripts\\fixjsstyle-script.py [flags]</code>

but for windows you can you the exe-files with the flags,

you can also use the python syntax,
assuming your python path has set, you can also enter
<code>python C:\\Python27\\Scripts\\gjslint-script.py [flags]</code>
or 
<code>python C:\\Python27\\Scripts\\fixjsstyle-script.py [flags]</code>

which is the equivalent of running gjslint.exe or fixjsstyle.exe