By Running From Command-Line:
<pre><span style="color: #333399;">gjslint.exe --strict C:\\work\\trunk\\someJSFile.js</span></pre>
I'm getting some important notes like:
<pre><span style="color: #ff6600;">:: Line 9, E:0010: Missing semicolon at end of line</span></pre>
some less interesting but still important to keep the GClosure parser happy
<pre><span style="color: #ff6600;">:: Line 6, E:0220: No docs found for member '........'</span>
<span style="color: #ff6600;">:: Line 44, E:0240: @param descriptions must end with valid punctuation such as a period.</span></pre>
some are just for conventions, but still important to keep our code unified in format:
<pre><span style="color: #ff6600;">:: Line 7, E:0131: Single-quoted string preferred over double-quoted string.</span></pre>
<pre><span style="color: #ff6600;">:: Line 10, E:0001: Extra space after "......"</span></pre>
but some are completely rubbish like:
<pre><span style="color: #ff6600;">:: Line 17, E:0006: Wrong indentation: expected any of {2, 14} but got 4</span></pre>
<pre><span style="color: #ff6600;">:: Line 73, E:0110: Line too long (89 characters).</span></pre>
<pre><span style="color: #ff6600;">:: Line 142, E:0233: Optional parameter name ..... must be prefixed with opt_.</span></pre>
I especially dislike the long-line notice and the opt_ prefix needed,
since I work in <a title="why-use-camelcase-in-javascript" href="http://stackoverflow.com/questions/8789656/why-use-camelcase-in-javascript" target="_blank">camelCase</a>, I keep underscore to very few and specific cases.

and as long I am using "=" suffix in the annotation to mark the parameter optional
<pre>---&gt;   *   <span style="color: #333399;">@param {number<strong>=</strong>} myNumber</span></pre>
<h2><span style="font-size: 1.5em;">its ok!</span></h2>
&nbsp;
<h3>Python Patch:</h3>
<p style="padding-left: 30px;">well, Python files are text based-on, but the Windows-Installation of <strong>GJSLinter
</strong>is compiling an executable file named <strong>gjslint.exe</strong></p>
<p style="padding-left: 30px;">1. download the latest version of the <strong>GJSLinter</strong>.</p>
<p style="padding-left: 30px;">2. apply the following patch</p>
Left file: \\closure_linter\\errorrules_original.py
Right file: \\closure_linter\\errorrules_patched.py
<table cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td>22</td>
<td>from closure_linter import errors</td>
<td>=</td>
<td>22</td>
<td>from closure_linter import errors</td>
</tr>
<tr>
<td>23</td>
<td></td>
<td></td>
<td>23</td>
<td></td>
</tr>
<tr>
<td>24</td>
<td></td>
<td></td>
<td>24</td>
<td></td>
</tr>
<tr>
<td>25</td>
<td>FLAGS = flags.FLAGS</td>
<td></td>
<td>25</td>
<td>FLAGS = flags.FLAGS</td>
</tr>
<tr>
<td>26</td>
<td>flags.DEFINE_boolean('jsdoc', True,</td>
<td></td>
<td>26</td>
<td>flags.DEFINE_boolean('jsdoc', True,</td>
</tr>
<tr>
<td>27</td>
<td>                     'Whether to report errors for missing JsDoc.')</td>
<td></td>
<td>27</td>
<td>                     'Whether to report errors for missing JsDoc.')</td>
</tr>
<tr>
<td>28</td>
<td></td>
<td>&lt;&gt;</td>
<td>28</td>
<td><strong><span style="color: #ff0000;">flags.DEFINE_list('ignore_errors', [], 'List of error codes to ignore.')</span></strong></td>
</tr>
<tr>
<td>29</td>
<td></td>
<td>=</td>
<td>29</td>
<td></td>
</tr>
<tr>
<td>30</td>
<td>def ShouldReportError(error):</td>
<td></td>
<td>30</td>
<td>def ShouldReportError(error):</td>
</tr>
<tr>
<td>31</td>
<td>  """Whether the given error should be reported.</td>
<td></td>
<td>31</td>
<td>  """Whether the given error should be reported.</td>
</tr>
<tr>
<td>32</td>
<td></td>
<td></td>
<td>32</td>
<td></td>
</tr>
<tr>
<td>33</td>
<td>  Returns:</td>
<td></td>
<td>33</td>
<td>  Returns:</td>
</tr>
<tr>
<td>34</td>
<td>    True for all errors except missing documentation errors.  For these,</td>
<td></td>
<td>34</td>
<td>    True for all errors except missing documentation errors.  For these,</td>
</tr>
<tr>
<td>35</td>
<td>    it returns the value of the jsdoc flag.</td>
<td></td>
<td>35</td>
<td>    it returns the value of the jsdoc flag.</td>
</tr>
<tr>
<td>36</td>
<td>  """</td>
<td></td>
<td>36</td>
<td>  """</td>
</tr>
<tr>
<td>37</td>
<td>  return FLAGS.jsdoc or error not in (</td>
<td>&lt;&gt;</td>
<td>37</td>
<td>  return <strong><span style="color: #ff0000;">(</span></strong>FLAGS.jsdoc or error not in (</td>
</tr>
<tr>
<td>38</td>
<td>      errors.MISSING_PARAMETER_DOCUMENTATION,</td>
<td>=</td>
<td>38</td>
<td>      errors.MISSING_PARAMETER_DOCUMENTATION,</td>
</tr>
<tr>
<td>39</td>
<td>      errors.MISSING_RETURN_DOCUMENTATION,</td>
<td></td>
<td>39</td>
<td>      errors.MISSING_RETURN_DOCUMENTATION,</td>
</tr>
<tr>
<td>40</td>
<td>      errors.MISSING_MEMBER_DOCUMENTATION,</td>
<td></td>
<td>40</td>
<td>      errors.MISSING_MEMBER_DOCUMENTATION,</td>
</tr>
<tr>
<td>41</td>
<td>      errors.MISSING_PRIVATE,</td>
<td></td>
<td>41</td>
<td>      errors.MISSING_PRIVATE,</td>
</tr>
<tr>
<td>42</td>
<td>      errors.MISSING_JSDOC_TAG_THIS)</td>
<td>&lt;&gt;</td>
<td>42</td>
<td>      errors.MISSING_JSDOC_TAG_THIS)<span style="color: #ff0000;"><strong>) and str(error) not in FLAGS.ignore_errors</strong></span></td>
</tr>
</tbody>
</table>
&nbsp;

or:

Before
<pre>#!/usr/bin/env python
#
# Copyright 2010 The Closure Linter Authors. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS-IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

"""Linter error rules class for Closure Linter."""

__author__ = 'robbyw@google.com (Robert Walker)'

import gflags as flags
from closure_linter import errors

FLAGS = flags.FLAGS
flags.DEFINE_boolean('jsdoc', True,
                     'Whether to report errors for missing JsDoc.')

def ShouldReportError(error):
  """Whether the given error should be reported.

  Returns:
    True for all errors except missing documentation errors.  For these,
    it returns the value of the jsdoc flag.
  """
  return FLAGS.jsdoc or error not in (
      errors.MISSING_PARAMETER_DOCUMENTATION,
      errors.MISSING_RETURN_DOCUMENTATION,
      errors.MISSING_MEMBER_DOCUMENTATION,
      errors.MISSING_PRIVATE,
      errors.MISSING_JSDOC_TAG_THIS)</pre>
and
after:
<pre>#!/usr/bin/env python
#
# Copyright 2010 The Closure Linter Authors. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS-IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

"""Linter error rules class for Closure Linter."""

__author__ = 'robbyw@google.com (Robert Walker)'

import gflags as flags
from closure_linter import errors

FLAGS = flags.FLAGS
flags.DEFINE_boolean('jsdoc', True,
                     'Whether to report errors for missing JsDoc.')
flags.DEFINE_list('ignore_errors', [], 'List of error codes to ignore.')

def ShouldReportError(error):
  """Whether the given error should be reported.

  Returns:
    True for all errors except missing documentation errors.  For these,
    it returns the value of the jsdoc flag.
  """
  return (FLAGS.jsdoc or error not in (
      errors.MISSING_PARAMETER_DOCUMENTATION,
      errors.MISSING_RETURN_DOCUMENTATION,
      errors.MISSING_MEMBER_DOCUMENTATION,
      errors.MISSING_PRIVATE,
      errors.MISSING_JSDOC_TAG_THIS)) and str(error) not in FLAGS.ignore_errors</pre>
<h2></h2>
<h3><a href="https://codereview.appspot.com/4291044/diff/1/errorrules.py" target="_blank">View Changes Side-By-Side in Google-Code (By Great <strong></strong></a><strong><a href="https://codereview.appspot.com/user/Ilia%20Mirkin">Ilia Mirkin</a></strong>)</h3>
Use it:
without:
<pre>gjslint.exe --strict C:\\work\\trunk\\myFile.js</pre>
with:
<pre>gjslint.exe --strict --ignore_errors 6,110,233 C:\\work\\trunk\\myFile.js

:: disable:
::         6:    Wrong indentation
::         110:  Line too long (the max is 80chars).
::         233:  Optional parameter name ..... must be prefixed with opt_.</pre>
Note:
it takes comma-separated list of the integer error numbers
for example "line too long" is marked as "E0110" so you should use integer value of: 110.

also!
put the --ignore_errors switch before the files path,
just as the example, you can combine all switches you would like to, even ones you'll ignore,
it works nicely... :)

This will also works with JetBrains WebStorm IDE,
here is my CONFIG FILE:
<pre>--strict
--jslint_error=braces_around_type 
--jslint_error=unused_private_members
--jslint_error=optional_type_marker
--jslint_error=well_formed_author
--jsdoc
--summary
--beep
--check_html
--multiprocess
--debug_indentation
--time</pre>
you should add the switch to it
<pre>--strict
--ignore_errors=6
--ignore_errors=110
--ignore_errors=233
--jslint_error=braces_around_type 
--jslint_error=unused_private_members
--jslint_error=optional_type_marker
--jslint_error=well_formed_author
--jsdoc
--nosummary
--nobeep
--nocheck_html
--multiprocess
--nodebug_indentation
--notime</pre>
&nbsp;
<h2>Download a Ready To Use Patched Version</h2>

<a href="https://github.com/eladkarako/icompile/releases/download/latest/closure_linter_2_3_9_with_patch.rar">https://github.com/eladkarako/icompile/releases/download/latest/closure_linter_2_3_9_with_patch.rar</a>