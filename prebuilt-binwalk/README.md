linux based,
was installed on cygwin, 
you can run in on Windows, but better add <code>[drive]:\\cygwin\\bin</code> to your path
so the binary dependencies (gzip, arj,...) will be taken from cygwin too.

it has actually really easy to install the new version,
since the c dependencies are no-more :)
<a href="https://eladkarako.github.io/prebuilt-binwalk-binary/" target="_blank">but here is a pre-built one</a>

<pre>
binwalk

Binwalk v2.1.1
Craig Heffner, http://www.binwalk.org

Usage: binwalk [OPTIONS] [FILE1] [FILE2] [FILE3] ...

Signature Scan Options:
    -B, --signature              Scan target file(s) for common file signatures
    -R, --raw=<str>              Scan target file(s) for the specified sequence of bytes
    -A, --opcodes                Scan target file(s) for common executable opcode signatures
    -m, --magic=<file>           Specify a custom magic file to use
    -b, --dumb                   Disable smart signature keywords
    -I, --invalid                Show results marked as invalid
    -x, --exclude=<str>          Exclude results that match </str><str>
    -y, --include=</str><str>          Only show results that match </str><str>

Extraction Options:
    -e, --extract                Automatically extract known file types
    -D, --dd=<type:ext:cmd>      Extract <type> signatures, give the files an extension of <ext>, and execute <cmd>
    -M, --matryoshka             Recursively scan extracted files
    -d, --depth=<int>            Limit matryoshka recursion depth (default: 8 levels deep)
    -C, --directory=<str>        Extract files/folders to a custom directory (default: current working directory)
    -j, --size=<int>             Limit the size of each extracted file
    -n, --count=</int><int>            Limit the number of extracted files
    -r, --rm                     Delete carved files after extraction
    -z, --carve                  Carve data from files, but don't execute extraction utilities

Entropy Analysis Options:
    -E, --entropy                Calculate file entropy
    -F, --fast                   Use faster, but less detailed, entropy analysis
    -J, --save                   Save plot as a PNG
    -Q, --nlegend                Omit the legend from the entropy plot graph
    -N, --nplot                  Do not generate an entropy plot graph
    -H, --high=<float>           Set the rising edge entropy trigger threshold (default: 0.95)
    -L, --low=</float><float>            Set the falling edge entropy trigger threshold (default: 0.85)

Binary Diffing Options:
    -W, --hexdump                Perform a hexdump / diff of a file or files
    -G, --green                  Only show lines containing bytes that are the same among all files
    -i, --red                    Only show lines containing bytes that are different among all files
    -U, --blue                   Only show lines containing bytes that are different among some files
    -w, --terse                  Diff all files, but only display a hex dump of the first file

General Options:
    -l, --length=<int>           Number of bytes to scan
    -o, --offset=</int><int>           Start scan at this file offset
    -O, --base=</int><int>             Add a base address to all printed offsets
    -K, --block=</int><int>            Set file block size
    -g, --swap=</int><int>             Reverse every n bytes before scanning
    -f, --log=<file>             Log results to file
    -c, --csv                    Log results to file in CSV format
    -t, --term                   Format output to fit the terminal window
    -q, --quiet                  Suppress output to stdout
    -v, --verbose                Enable verbose output
    -h, --help                   Show help output
    -a, --finclude=<str>         Only scan files whose names match this regex
    -p, --fexclude=</str><str>         Do not scan files whose names match this regex
    -s, --status=<int>           Enable the status server on the specified port
</int></str></file></int></float></int></str></int></cmd></ext></type></type:ext:cmd></str></file></str></pre>