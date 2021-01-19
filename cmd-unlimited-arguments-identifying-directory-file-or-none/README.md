<pre>
@echo off

:loop
      ::-------------------------- has argument ?
      if ["%~1"]==[""] (
        echo done.
        goto end
      )
      ::-------------------------- argument exist ?
      if not exist %~s1 (
        echo not exist
      ) else (
        echo exist
        if exist %~s1\\NUL (
          echo is a directory
        ) else (
          echo is a file
        )
      )
      ::--------------------------
      shift
      goto loop
      
      
:end

pause
</pre>

save it as <code>identifier.cmd</code>
it can identify an unlimited arguments (normally you are limited to <code>%1</code>-<code>%9</code>), just remember to wrap the arguments with inverted-commas, or use 8.3 naming, or drag&drop them over (it automatically  does either of above).

this allows you to run the following commands:
<code>identifier.cmd c:\\windows</code>
and to get
<pre>
exist
is a directory
done
</pre>

<code>identifier.cmd "c:\\Program Files (x86)\\Microsoft Office\\OFFICE11\\WINWORD.EXE"</code>
and to get
<pre>
exist
is a file
done
</pre>

and multiple arguments (of course this is the whole-deal..)
<code>identifier.cmd c:\\windows\\system32 c:\\hiberfil.sys "c:\\pagefile.sys" hello-world</code>
and to get
<pre>
exist
is a directory
exist
is a file
exist
is a file
not exist
done.
</pre>

naturally it can be a lot more complex,
but nice examples should be simple and minimal.


also posted at <a href="http://stackoverflow.com/questions/830565/how-do-i-check-that-a-parameter-is-defined-when-calling-a-batch-file/34552964#34552964" target="_blank">StackOverflow</a>:
', 'CMD Ninja - Unlimited Arguments Processing, Identifying If Exist In File-System