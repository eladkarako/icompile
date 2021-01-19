<small><a href="https://blog.avast.com/2013/09/25/win3264napolar-new-trojan-shines-on-the-cyber-crime-scene/" title="https://blog.avast.com/2013/09/25/win3264napolar-new-trojan-shines-on-the-cyber-crime-scene/" target="_blank">Avast's report</a>.</small>

  
this will match the following variations

<strong>Sources</strong>
SHA256 hashes of some selected samples and how they are covered within the AVAST engine:
<table border="1" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td valign="top" width="109">Dropper 1</td>
<td valign="top" width="241">1f11b896cc641db605d70186be468a148a
64ea233a21d353e7483239e71e1516</td>
<td valign="top" width="204">Win32:Napolar-E [Cryp]</td>
</tr>
<tr>
<td valign="top" width="109">Dropper 2</td>
<td valign="top" width="241">f1a5707963a7e33a925111f09209a92b037
32fa9292697b37e528ad941076a8d</td>
<td valign="top" width="204">Win32:Napolar-E [Cryp]</td>
</tr>
<tr>
<td valign="top" width="109">Napolar Core Binary</td>
<td valign="top" width="241">463d39dcbf19b5c4c9e314e5ce77bf8a51
848b8c7d64e4f0a6656b9d28941e2e</td>
<td valign="top" width="204">Win32:Napolar-D [Trj]</td>
</tr>
<tr>
<td valign="top" width="109">WalletSteal Plugin Download</td>
<td valign="top" width="241">12ca161cd72873477906100f083e43dca9
36312ba44b691f5046f53b09e3b4f7</td>
<td valign="top" width="204">JS:NapolarPlugin-A [Trj]</td>
</tr>
<tr>
<td valign="top" width="109">WalletSteal Plugin x86</td>
<td valign="top" width="241">bb49fa791915bf49ceb2a0563c91d2acaed
6249438f349c6e75094f3924de64d</td>
<td valign="top" width="204">Win32:NapolarPlugin-B [Trj]</td>
</tr>
<tr>
<td valign="top" width="109">WalletSteal Plugin x64</td>
<td valign="top" width="241">ff92206215115c867789dbd5a95132a2bd1
53bb1e5a1ef66e539f382f2ce30dc</td>
<td valign="top" width="204">Win32:NapolarPlugin-B [Trj]</td>
</tr>
</tbody>
</table>
  


The structure of the core executable(s):

<a href="https://icompile.eladkarako.com/_uploads/2014/09/napolar_scheme_final.png"><img class="alignnone size-full wp-image-1808" src="https://icompile.eladkarako.com/_uploads/2014/09/napolar_scheme_final.png" alt="napolar_scheme_final" width="622" height="416" /></a>

When analyzing Win32/Napolar binaries, the first thing to notice is that there is no valid entry point in the PE header, as shown in the figure below.

<a href="https://icompile.eladkarako.com/_uploads/2014/09/01_original_entrypoint_to_0.png"><img class="alignnone size-full wp-image-1807" src="https://icompile.eladkarako.com/_uploads/2014/09/01_original_entrypoint_to_0.png" alt="01_original_entrypoint_to_0" width="671" height="364" /></a>

The first instructions that are executed when the binary is started are saved in the <a href="https://en.wikipedia.org/wiki/Thread-local_storage">Thread Local Storage </a>(TLS) functions. There are two TLS functions registered.  The first TLS function does not do anything. The second function decrypts more code using the RC4 encryption algorithm and the key 0xDEADBEEF. The decrypted code is registered as a third TLS function before the second function returns,

cool! right?

code extract:

<a href="https://icompile.eladkarako.com/_uploads/2014/09/02_inserting_third_tls.png"><img class="alignnone size-full wp-image-1806" src="https://icompile.eladkarako.com/_uploads/2014/09/02_inserting_third_tls.png" alt="02_inserting_third_tls" width="588" height="192" /></a>

The third TLS function decrypts the rest of the code before calling the main body of the malware.  The malware uses other tricks to make itself harder to analyze:
<ul>
	<li>All imports are resolved at runtime using hashes instead of the import names.</li>
	<li>Interactions with the operating system are mostly done by directly calling undocumented functions of the <a href="https://en.wikipedia.org/wiki/Microsoft_Windows_library_files#NTDLL.DLL">NTDLL</a> library instead of using the standard APIs.</li>
	<li>All the code is position-independent.</li>
</ul>
To find the offset of its own code that will be decrypted, Win32/Napolar searches through its memory for the opcode <em>0x55</em>. This opcode represents “<em>push ebp</em>”, the first instruction of the current function in assembly language. If this instruction is replaced by <em>0xCC</em>, the opcode for a software breakpoint, the decryption of the code will not work. This is a clever way of altering the behavior of the malware if it is being analyzed with a debugger and if a software breakpoint is put on the first instruction of the TLS.

Win32/Napolar has more anti-debugging tricks. To make dynamic analysis harder, Win32/Napolar will create a sub process of itself and will debug this new instance. The screenshot below shows the call to <em>CreateProcess:</em>

<img class="alignnone size-full wp-image-1805" src="https://icompile.eladkarako.com/_uploads/2014/09/05_create_process_debug_only.png" alt="05_create_process_debug_only" width="882" height="132" />

The software protection technique of self-debugging has <a href="https://blog.avast.com/2013/05/29/analysis-of-a-self-debugging-sirefef-cryptor/">been seen before</a> but in the case of Win32/Napolar, the trick happens in the main body of the malware, not in the packer.

Once the debugged process is started, Win32/Napolar will enter a loop that handles debugging events returned by the function <em>WaitForDebugEvent</em>. Pseudocode for the loop handling debugging events (high level.. to simple things up..)

<a href="https://icompile.eladkarako.com/_uploads/2014/09/04_pseudo_code_debug_loop.png"><img class="alignnone wp-image-1804 size-full" src="https://icompile.eladkarako.com/_uploads/2014/09/04_pseudo_code_debug_loop.png" alt="" width="722" height="563" /></a>

The first event handled by this code is CREATE_PROCESS_DEBUG_EVENT. This event takes place when the debugged process is started. In this case, the main process will parse the MZ and PE header of the debugged process in order to retrieve the offset and size of the position-independent code. It will then allocate another area of memory in the debugged process in which to inject the code. This creates two copies of the same code in the same process.

The next event is EXCEPTION_DEBUG_EVENT. In this second event, the main process overwrites the first TLS function of the binary so as to redirect execution at the beginning of the executable, using a push – ret instruction. This, once again, decrypts the main body of the malware and lets it execute within the child process. It is the code of the child process that then proceeds to inject itself into all the processes running sub-processes and hooking various functions to hide its presence on the system and capture desired information.

Finally, the main process receives the EXIT_PROCESS_DEBUG_EVENT event; it stops debugging by calling the function <em>DebugActiveProcessStop</em> and terminates its own process using<em>NtTerminateProcess.</em>

One of the main characteristics of Win32/Napolar is its ability to steal information when a user fills a web form in a web browser. Trusteer’s browser protection probably stops the malware from capturing this information. This is why the malware has specific checks for Trusteer products. It will iterate through all the running processes and specifically kill any process that has the string “<em>trusteer</em>” in it. We did not perform any test to confirm whether or not this attempt at disabling Trusteer’s product is successful or not.
<h1>Network behavior</h1>
When communicating with its command and control server, Win32/Napolar uses the HTTP protocol. The first query sent by the bot to the command and control server contains the following information:
<ul>
	<li>Version of the bot</li>
	<li>Current windows username of the infected user</li>
	<li>Computer name</li>
	<li>A unique bot identifier</li>
	<li>Version of the operating system</li>
	<li>System type, which can be 32 or 64 bit.  Indeed, this bot supports both types of architecture.</li>
</ul>
The server then responds with commands the bot needs to execute. These commands are encrypted using RC4, The bot unique identifier is used as the encryption key. The bot supports a variety of commands, from information stealing and SOCKS proxying, to denial of service, download, execution and update. Each command has a unique identifier stored as a single byte and the information following this byte contains the command parameters. The following figure shows a traffic dump of the communication between a host infected by Win32/Napolar and its command and control server.

<a href="https://icompile.eladkarako.com/_uploads/2014/09/06_napolar_POST.png"><img class="alignnone size-full wp-image-1802" src="https://icompile.eladkarako.com/_uploads/2014/09/06_napolar_POST.png" alt="06_napolar_POST" width="593" height="263" /></a>

The following figure shows the decryption of this command using the proper key. The first byte of the received content is <em>0xC</em>, and this instructs the bot to sleep. The parameter is a string, “600”, which represents the number of seconds that the bot needs to sleep.

<a href="https://icompile.eladkarako.com/_uploads/2014/09/07_decrypted_cnc_nop.png"><img class="alignnone wp-image-1801 size-full" src="https://icompile.eladkarako.com/_uploads/2014/09/07_decrypted_cnc_nop.png" alt="07_decrypted_cnc_nop" width="562" height="126" /></a>