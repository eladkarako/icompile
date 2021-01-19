its a good practice to note the original value with your name, so later you'll be able to search it in the file (<a href="locate32.cogit.net" title="Locate32" target="_blank">Locate32</a>: search the root of the folder. <a href="notepad-plus-plus.org" title="Notepad++" target="_blank">Notepad++</a>: "Find All in All Opened Documents" + your name.)

apply those changes, and restart all wamp services.

<pre>
;;;;;;;;;;;;;;;;;;;
; Resource Limits ;
;;;;;;;;;;;;;;;;;;;

; Maximum execution time of each script, in seconds
; http://php.net/max-execution-time
; Note: This directive is hardcoded to 0 for the CLI SAPI
;original changed in 17:42 06/04/2013 by elad karako:  max_execution_time = 30     
;
max_execution_time = 300

; Maximum amount of time each script may spend parsing request data. It's a good
; idea to limit this time on productions servers in order to eliminate unexpectedly
; long running scripts. 
; Note: This directive is hardcoded to -1 for the CLI SAPI
; Default Value: -1 (Unlimited)
; Development Value: 60 (60 seconds)
; Production Value: 60 (60 seconds)
; http://php.net/max-input-time
;original changed in 17:42 06/04/2013 by elad karako:  max_input_time = 60
max_input_time = -1

; Maximum input variable nesting level
; http://php.net/max-input-nesting-level
;max_input_nesting_level = 64

; Maximum amount of memory a script may consume (128MB)
; http://php.net/memory-limit
;original changed in 17:42 06/04/2013 by elad karako:  memory_limit = 128M
memory_limit = 256M
</pre>