You should start with x64
and fallback from there...

<pre>
::good for AMD64 or IA64.
set NODE=.\\binary\\x64\
ode.exe

::fallback for old machines
if ["x86"] == ["%PROCESSOR_ARCHITECTURE%"] (
  set NODE=.\\binary\\x32\
ode.exe
)
</pre>
