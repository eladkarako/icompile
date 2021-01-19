here is a really nice way to skip all those custom-made functions that divides again and again the file size from bytes to get the human-readable file sizes:

<em>C# example</em>
<pre>[DllImport("Shlwapi.dll", CharSet = CharSet.Auto)]
public static extern long StrFormatByteSize( long fileSize, [MarshalAs(UnmanagedType.LPTStr)] StringBuilder buffer, int bufferSize );

public static string getPrettyFileSize (long lSize){
	StringBuilder sb = new StringBuilder( 12 );
	StrFormatByteSize( lSize, sb, sb.Capacity );
	return sb.ToString();
}</pre>
calling it will result with something like this: