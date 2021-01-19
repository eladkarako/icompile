<code>PortFinder.java</code>

<!--more-->
<pre>
<span style='color:#800000; font-weight:bold; '>import</span><span style='color:#004a43; '> java</span><span style='color:#808030; '>.</span><span style='color:#004a43; '>io</span><span style='color:#808030; '>.</span><span style='color:#004a43; '>IOException</span><span style='color:#800080; '>;</span>
<span style='color:#800000; font-weight:bold; '>import</span><span style='color:#004a43; '> java</span><span style='color:#808030; '>.</span><span style='color:#004a43; '>net</span><span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>*</span><span style='color:#800080; '>;</span>

<span style='color:#800000; font-weight:bold; '>public</span> <span style='color:#800000; font-weight:bold; '>class</span> PortFinder
<span style='color:#800080; '>{</span>

    <span style='color:#800000; font-weight:bold; '>public</span> PortFinder<span style='color:#808030; '>(</span><span style='color:#808030; '>)</span>
    <span style='color:#800080; '>{</span>
    <span style='color:#800080; '>}</span>

    <span style='color:#800000; font-weight:bold; '>public</span> <span style='color:#800000; font-weight:bold; '>static</span> <span style='color:#800000; font-weight:bold; '>synchronized</span> <span style='color:#bb7977; '>int</span> findUnusedPort<span style='color:#808030; '>(</span><span style='color:#808030; '>)</span>
    <span style='color:#800080; '>{</span>
        <span style='color:#800000; font-weight:bold; '>return</span> findUnusedPort<span style='color:#808030; '>(</span><span style='color:#008c00; '>0</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
    <span style='color:#800080; '>}</span>

    <span style='color:#800000; font-weight:bold; '>public</span> <span style='color:#800000; font-weight:bold; '>static</span> <span style='color:#bb7977; '>boolean</span> isPortUnused<span style='color:#808030; '>(</span><span style='color:#bb7977; '>int</span> port<span style='color:#808030; '>)</span>
    <span style='color:#800080; '>{</span>
        <span style='color:#800000; font-weight:bold; '>return</span> findUnusedPort<span style='color:#808030; '>(</span>port<span style='color:#808030; '>)</span> <span style='color:#808030; '>!</span><span style='color:#808030; '>=</span> <span style='color:#808030; '>-</span><span style='color:#008c00; '>1</span><span style='color:#800080; '>;</span>
    <span style='color:#800080; '>}</span>

    <span style='color:#800000; font-weight:bold; '>private</span> <span style='color:#800000; font-weight:bold; '>static</span> <span style='color:#bb7977; '>int</span> findUnusedPort<span style='color:#808030; '>(</span><span style='color:#bb7977; '>int</span> port<span style='color:#808030; '>)</span>
    <span style='color:#800080; '>{</span>
        <span style='color:#bb7977; font-weight:bold; '>ServerSocket</span> ss <span style='color:#808030; '>=</span> <span style='color:#800000; font-weight:bold; '>null</span><span style='color:#800080; '>;</span>
        <span style='color:#bb7977; '>int</span> j<span style='color:#800080; '>;</span>
        <span style='color:#800000; font-weight:bold; '>if</span><span style='color:#808030; '>(</span><span style='color:#808030; '>!</span>isWindows<span style='color:#808030; '>(</span><span style='color:#808030; '>)</span> <span style='color:#808030; '>&amp;</span><span style='color:#808030; '>&amp;</span> <span style='color:#808030; '>!</span>isMacos<span style='color:#808030; '>(</span><span style='color:#808030; '>)</span><span style='color:#808030; '>)</span>
            <span style='color:#800000; font-weight:bold; '>break</span> MISSING_BLOCK_LABEL_63<span style='color:#800080; '>;</span>
        ss <span style='color:#808030; '>=</span> <span style='color:#800000; font-weight:bold; '>new</span> <span style='color:#bb7977; font-weight:bold; '>ServerSocket</span><span style='color:#808030; '>(</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
        SocketAddress sa <span style='color:#808030; '>=</span> <span style='color:#800000; font-weight:bold; '>new</span> InetSocketAddress<span style='color:#808030; '>(</span><span style='color:#0000e6; '>"127.0.0.1"</span><span style='color:#808030; '>,</span> port<span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
        ss<span style='color:#808030; '>.</span>bind<span style='color:#808030; '>(</span>sa<span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
        ss<span style='color:#808030; '>.</span>setReuseAddress<span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>true</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
        j <span style='color:#808030; '>=</span> ss<span style='color:#808030; '>.</span>getLocalPort<span style='color:#808030; '>(</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
        <span style='color:#800000; font-weight:bold; '>if</span><span style='color:#808030; '>(</span>ss <span style='color:#808030; '>!</span><span style='color:#808030; '>=</span> <span style='color:#800000; font-weight:bold; '>null</span><span style='color:#808030; '>)</span>
            <span style='color:#800000; font-weight:bold; '>try</span>
            <span style='color:#800080; '>{</span>
                ss<span style='color:#808030; '>.</span>close<span style='color:#808030; '>(</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
            <span style='color:#800080; '>}</span>
            <span style='color:#800000; font-weight:bold; '>catch</span><span style='color:#808030; '>(</span><span style='color:#bb7977; font-weight:bold; '>IOException</span> ioexception3<span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span> <span style='color:#800080; '>}</span>
        <span style='color:#800000; font-weight:bold; '>return</span> j<span style='color:#800080; '>;</span>
        <span style='color:#bb7977; '>int</span> i<span style='color:#800080; '>;</span>
        <span style='color:#800000; font-weight:bold; '>try</span>
        <span style='color:#800080; '>{</span>
            ss <span style='color:#808030; '>=</span> <span style='color:#800000; font-weight:bold; '>new</span> <span style='color:#bb7977; font-weight:bold; '>ServerSocket</span><span style='color:#808030; '>(</span>port<span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
            ss<span style='color:#808030; '>.</span>setReuseAddress<span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>true</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
            i <span style='color:#808030; '>=</span> ss<span style='color:#808030; '>.</span>getLocalPort<span style='color:#808030; '>(</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
        <span style='color:#800080; '>}</span>
        <span style='color:#800000; font-weight:bold; '>catch</span><span style='color:#808030; '>(</span><span style='color:#bb7977; font-weight:bold; '>IOException</span> ioexception<span style='color:#808030; '>)</span>
        <span style='color:#800080; '>{</span>
            <span style='color:#800000; font-weight:bold; '>if</span><span style='color:#808030; '>(</span>ss <span style='color:#808030; '>!</span><span style='color:#808030; '>=</span> <span style='color:#800000; font-weight:bold; '>null</span><span style='color:#808030; '>)</span>
                <span style='color:#800000; font-weight:bold; '>try</span>
                <span style='color:#800080; '>{</span>
                    ss<span style='color:#808030; '>.</span>close<span style='color:#808030; '>(</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
                <span style='color:#800080; '>}</span>
                <span style='color:#800000; font-weight:bold; '>catch</span><span style='color:#808030; '>(</span><span style='color:#bb7977; font-weight:bold; '>IOException</span> ioexception1<span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span> <span style='color:#800080; '>}</span>
            <span style='color:#800000; font-weight:bold; '>break</span> MISSING_BLOCK_LABEL_130<span style='color:#800080; '>;</span>
        <span style='color:#800080; '>}</span>
        <span style='color:#800000; font-weight:bold; '>if</span><span style='color:#808030; '>(</span>ss <span style='color:#808030; '>!</span><span style='color:#808030; '>=</span> <span style='color:#800000; font-weight:bold; '>null</span><span style='color:#808030; '>)</span>
            <span style='color:#800000; font-weight:bold; '>try</span>
            <span style='color:#800080; '>{</span>
                ss<span style='color:#808030; '>.</span>close<span style='color:#808030; '>(</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
            <span style='color:#800080; '>}</span>
            <span style='color:#800000; font-weight:bold; '>catch</span><span style='color:#808030; '>(</span><span style='color:#bb7977; font-weight:bold; '>IOException</span> ioexception2<span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span> <span style='color:#800080; '>}</span>
        <span style='color:#800000; font-weight:bold; '>return</span> i<span style='color:#800080; '>;</span>
        <span style='color:#bb7977; font-weight:bold; '>Exception</span> exception<span style='color:#800080; '>;</span>
        exception<span style='color:#800080; '>;</span>
        <span style='color:#800000; font-weight:bold; '>if</span><span style='color:#808030; '>(</span>ss <span style='color:#808030; '>!</span><span style='color:#808030; '>=</span> <span style='color:#800000; font-weight:bold; '>null</span><span style='color:#808030; '>)</span>
            <span style='color:#800000; font-weight:bold; '>try</span>
            <span style='color:#800080; '>{</span>
                ss<span style='color:#808030; '>.</span>close<span style='color:#808030; '>(</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
            <span style='color:#800080; '>}</span>
            <span style='color:#800000; font-weight:bold; '>catch</span><span style='color:#808030; '>(</span><span style='color:#bb7977; font-weight:bold; '>IOException</span> ioexception4<span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span> <span style='color:#800080; '>}</span>
        <span style='color:#800000; font-weight:bold; '>throw</span> exception<span style='color:#800080; '>;</span>
        <span style='color:#800000; font-weight:bold; '>return</span> <span style='color:#808030; '>-</span><span style='color:#008c00; '>1</span><span style='color:#800080; '>;</span>
    <span style='color:#800080; '>}</span>

    <span style='color:#800000; font-weight:bold; '>private</span> <span style='color:#800000; font-weight:bold; '>static</span> <span style='color:#bb7977; '>boolean</span> isMacos<span style='color:#808030; '>(</span><span style='color:#808030; '>)</span>
    <span style='color:#800080; '>{</span>
        <span style='color:#800000; font-weight:bold; '>return</span> OS_NAME<span style='color:#808030; '>.</span>toLowerCase<span style='color:#808030; '>(</span><span style='color:#808030; '>)</span><span style='color:#808030; '>.</span>startsWith<span style='color:#808030; '>(</span><span style='color:#0000e6; '>"mac"</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
    <span style='color:#800080; '>}</span>

    <span style='color:#800000; font-weight:bold; '>private</span> <span style='color:#800000; font-weight:bold; '>static</span> <span style='color:#bb7977; '>boolean</span> isWindows<span style='color:#808030; '>(</span><span style='color:#808030; '>)</span>
    <span style='color:#800080; '>{</span>
        <span style='color:#800000; font-weight:bold; '>return</span> OS_NAME<span style='color:#808030; '>.</span>toLowerCase<span style='color:#808030; '>(</span><span style='color:#808030; '>)</span><span style='color:#808030; '>.</span>startsWith<span style='color:#808030; '>(</span><span style='color:#0000e6; '>"win"</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
    <span style='color:#800080; '>}</span>

    <span style='color:#800000; font-weight:bold; '>private</span> <span style='color:#800000; font-weight:bold; '>static</span> <span style='color:#800000; font-weight:bold; '>final</span> <span style='color:#bb7977; font-weight:bold; '>String</span> OS_NAME <span style='color:#808030; '>=</span> <span style='color:#bb7977; font-weight:bold; '>System</span><span style='color:#808030; '>.</span>getProperty<span style='color:#808030; '>(</span><span style='color:#0000e6; '>"os.name"</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>

<span style='color:#800080; '>}</span>
</pre>