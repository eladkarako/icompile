This is the way to provide an explicit UTF-8 support in Application, Forms and Console (STDIN,STDERR,STDOUT).

For the application: open <code>Program.cs</code>, 
add on top: <code>using System.Text;</code>, 
inside the <code>Main</code>-method, on the very top (before creating any form), add:
<pre>
Process.GetCurrentProcess().StartInfo.StandardErrorEncoding  = Encoding.UTF8;
Process.GetCurrentProcess().StartInfo.StandardOutputEncoding = Encoding.UTF8;
</pre>

As an alternative, you can explicitly set that the <a href="https://en.wikipedia.org/wiki/Byte_order_mark"><code>BOM</code></a> will not be included, 
by creating a custom <code>UTF8Encoding</code> with the argument set explicitly to <code>false</code>.
The code would look like this:
<pre>
Encoding utf8_no_bom = new System.Text.UTF8Encoding(false);
Process.GetCurrentProcess().StartInfo.StandardErrorEncoding = utf8_no_bom;
Process.GetCurrentProcess().StartInfo.StandardOutputEncoding =utf8_no_bom;
</pre>

<hr/>

Now, <strong>for console</strong>, 
remember - if you've started a "form application" to need to make a small modification, 
open-up the project's <strong>properties</strong>, on the <strong>application</strong>-tab, 
change the output-type from <strong>Windows application</strong> to <strong>Console application</strong>, 
keep in-mind that the form will open up with a console window in its back, 
but you won't notice it if you are starting the application from console anyway.

The above is the easiest way, 
but you can also allocate the console dynamically before the form loads.
add an event-action to handle the form-load.

on the <code>Form1.cs</code> (or <code>MainForm.cs</code>), 
add <code>using System.Runtime.InteropServices;</code> on the top of the page, 
and make the load method look something like this:
<pre>
private void Form1_Load(object sender, EventArgs e)
{
    AllocConsole();
}

[DllImport("kernel32.dll", SetLastError = true)]
[return: MarshalAs(UnmanagedType.Bool)]
static extern bool AllocConsole();
</pre>

The result is the same, the application will be opened with a console at its back, 
or use the existing console if it was starting from CMD for example.


Now it is best to go to <code>Program.cs</code>, 
and at <code>Main</code>-method, add the following lines after that last <code>Process.GetCurrentProcess().StartInfo.....</code>, 
(before starting the first form):
<pre>
Console.InputEncoding = Encoding.UTF8;
Console.OutputEncoding = Encoding.UTF8;
</pre>
you can not do that unless you set project properties first to output-type "console application",
Or you'll get IO-error/invalid-stream.
   
There is a ALSO way here to explicitly make sure the encoding is UTF-8 without BOM, 
for this we'll create "new" console out/in/err stream-writers:

<pre>
Encoding utf8_no_bom     = new System.Text.UTF8Encoding(false);
StreamWriter writer_out  = new StreamWriter(Console.OpenStandardOutput(),utf8_no_bom);
StreamWriter writer_in   = new StreamWriter(Console.OpenStandardInput(),utf8_no_bom);
StreamWriter writer_err  = new StreamWriter(Console.OpenStandardError(),utf8_no_bom);

writer_out.Write("aaaaaa");
//writer_out.Flush();  //optional.
//writer_out.Close();  //optional.
</pre>

this is good for a single method, but you may be able to put it on top of the class, 
to use the writer several times (although <code>utf8_no_bom</code> might be having issues required to be static..?)
If you have several forms, you need something like a global variable put in <code>Program.cs</code>, 
you might have a luck with the getter/setter way as explain in-here: <a href="https://stackoverflow.com/questions/1293926/c-sharp-winforms-global-variables">https://stackoverflow.com/questions/1293926/c-sharp-winforms-global-variables</a>.


some more resources:

<a href="https://stackoverflow.com/questions/5266069/streamwriter-and-utf-8-byte-order-marks">https://stackoverflow.com/questions/5266069/streamwriter-and-utf-8-byte-order-marks</a>. 
<a href="https://codyclaborn.me/tutorials/handling-utf8-encoding-with-csharp-process/">https://codyclaborn.me/tutorials/handling-utf8-encoding-with-csharp-process/</a>. 
<a href="https://docs.microsoft.com/en-us/dotnet/api/system.diagnostics.process.getcurrentprocess?view=netcore-3.1">https://docs.microsoft.com/en-us/dotnet/api/system.diagnostics.process.getcurrentprocess?view=netcore-3.1</a>. 
      