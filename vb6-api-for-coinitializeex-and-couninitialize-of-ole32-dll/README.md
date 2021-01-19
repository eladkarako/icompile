<pre><span style='color:#800000; font-weight:bold; '>Option Explicit</span>
<span style='color:#696969; '>'Satisfying API For CoInitializeEx and CoUninitialize of ole32.dll</span>
<span style='color:#696969; '>'Explained and MSDN referenced.</span>
<span style='color:#696969; '>' Elad Karako</span>

<span style='color:#800000; font-weight:bold; '>Private</span> Enum COINIT_HRESULT
    S_OK <span style='color:#808030; '>=</span> <span style='color:#008c00; '>&amp;H0</span><span style='color:#808030; '>&amp;</span>  <span style='color:#696969; '>'The COM library was initialized successfully on this thread.</span>
    S_FALSE <span style='color:#808030; '>=</span> <span style='color:#008c00; '>&amp;H1</span><span style='color:#808030; '>&amp;</span> <span style='color:#696969; '>'The COM library is already initialized on this thread.</span>
    RPC_E_CHANGED_MODE <span style='color:#808030; '>=</span> <span style='color:#008c00; '>&amp;H80010106</span>   <span style='color:#696969; '>'A previous call to CoInitializeEx specified the concurrency model for this thread as multithread apartment (MTA). This could also indicate that a change from neutral-threaded apartment to single-threaded apartment has occurred.</span>
    E_INVALIDARG <span style='color:#808030; '>=</span> <span style='color:#008c00; '>&amp;H80070057</span> <span style='color:#696969; '>'One or more arguments are invalid.</span>
    E_OUTOFMEMORY <span style='color:#808030; '>=</span> <span style='color:#008c00; '>&amp;H80000002</span> <span style='color:#696969; '>'Ran out of memory.</span>
    E_UNEXPECTED <span style='color:#808030; '>=</span> <span style='color:#008c00; '>&amp;H80041316</span> <span style='color:#696969; '>'The task XML contains an unexpected node.</span>
<span style='color:#800000; font-weight:bold; '>End</span> Enum

<span style='color:#696969; '>'COINIT Enumeration</span>
<span style='color:#696969; '>'Determines the concurrency model used for incoming calls to objects created by this thread. This concurrency model can be either apartment-threaded or multi-threaded.</span>
<span style='color:#696969; '>'see http://msdn.microsoft.com/en-us/library/ms678505(v=VS.85).aspx</span>
<span style='color:#696969; '>'</span>
<span style='color:#696969; '>'YOU SHOULD ONLY USE COINIT_APARTMENTTHREADED or COINIT_MULTITHREADED.</span>
<span style='color:#800000; font-weight:bold; '>Private</span> Enum COINIT
  COINIT_APARTMENTTHREADED <span style='color:#808030; '>=</span> <span style='color:#008c00; '>&amp;H2</span> <span style='color:#696969; '>'Initializes the thread for apartment-threaded object concurrency.</span>
  COINIT_MULTITHREADED <span style='color:#808030; '>=</span> <span style='color:#008c00; '>&amp;H0</span> <span style='color:#696969; '>'Initializes the thread for multi-threaded object concurrency.</span>
  COINIT_DISABLE_OLE1DDE <span style='color:#808030; '>=</span> <span style='color:#008c00; '>&amp;H4</span> <span style='color:#696969; '>'Disables DDE for OLE1 support.</span>
  COINIT_SPEED_OVER_MEMORY <span style='color:#808030; '>=</span> <span style='color:#008c00; '>&amp;H8</span> <span style='color:#696969; '>'Trade memory for speed.</span>
<span style='color:#800000; font-weight:bold; '>End</span> Enum

<span style='color:#696969; '>'CoInitializeEx Function</span>
<span style='color:#696969; '>'Initializes the COM library for use by the calling thread, sets the thread's concurrency model, and creates a new apartment for the thread if one is required.</span>
<span style='color:#696969; '>'see http://msdn.microsoft.com/en-us/library/ms695279(v=VS.85).aspx</span>
<span style='color:#800000; font-weight:bold; '>Private</span> Declare <span style='color:#800000; font-weight:bold; '>Function</span> CoInitializeEx Lib <span style='color:#0000e6; '>"ole32.dll"</span> <span style='color:#808030; '>(</span> <span style='color:#800000; font-weight:bold; '>_</span>
    <span style='color:#800000; font-weight:bold; '>ByVal</span> pvReserved <span style='color:#800000; font-weight:bold; '>As</span> <span style='color:#800000; font-weight:bold; '>Long</span><span style='color:#808030; '>,</span> <span style='color:#800000; font-weight:bold; '>_</span>
    <span style='color:#800000; font-weight:bold; '>ByVal</span> dwCoInit <span style='color:#800000; font-weight:bold; '>As</span> <span style='color:#800000; font-weight:bold; '>Long</span><span style='color:#808030; '>)</span> <span style='color:#800000; font-weight:bold; '>As</span> COINIT_HRESULT

<span style='color:#696969; '>'CoUninitialize Function</span>
<span style='color:#696969; '>'Closes the COM library on the current thread, unloads all DLLs loaded by the thread, frees any other resources that the thread maintains, and forces all RPC connections on the thread to close.</span>
<span style='color:#696969; '>'see http://msdn.microsoft.com/en-us/library/ms688715(v=VS.85).aspx</span>
<span style='color:#800000; font-weight:bold; '>Private</span> Declare <span style='color:#800000; font-weight:bold; '>Function</span> CoUninitialize Lib <span style='color:#0000e6; '>"ole32.dll"</span> <span style='color:#808030; '>(</span><span style='color:#808030; '>)</span>


<span style='color:#696969; '>''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''</span>
<span style='color:#696969; '>''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''</span>


<span style='color:#696969; '>'CoInitializeEx Function</span>
<span style='color:#696969; '>'Initializes the COM library for use by the calling thread, sets the thread's concurrency model, and creates a new apartment for the thread if one is required.</span>
<span style='color:#696969; '>'see http://msdn.microsoft.com/en-us/library/ms695279(v=VS.85).aspx</span>
<span style='color:#800000; font-weight:bold; '>Public</span> <span style='color:#800000; font-weight:bold; '>Sub</span> do_CoInitializeEx<span style='color:#808030; '>(</span>Optional c <span style='color:#800000; font-weight:bold; '>As</span> COINIT <span style='color:#808030; '>=</span> COINIT_APARTMENTTHREADED<span style='color:#808030; '>,</span> Optional bDebugResult <span style='color:#800000; font-weight:bold; '>As</span> <span style='color:#800000; font-weight:bold; '>Boolean</span> <span style='color:#808030; '>=</span> <span style='color:#0f4d75; '>False</span><span style='color:#808030; '>)</span>
    <span style='color:#800000; font-weight:bold; '>Dim</span> coihr <span style='color:#800000; font-weight:bold; '>As</span> COINIT_HRESULT
    coihr <span style='color:#808030; '>=</span> CoInitializeEx<span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>ByVal</span> <span style='color:#008c00; '>0</span><span style='color:#808030; '>&amp;</span><span style='color:#808030; '>,</span> c<span style='color:#808030; '>)</span>
    <span style='color:#800000; font-weight:bold; '>If</span> <span style='color:#808030; '>(</span>bDebugResult<span style='color:#808030; '>)</span> <span style='color:#800000; font-weight:bold; '>Then</span> <span style='color:#800000; font-weight:bold; '>MsgBox</span> toString<span style='color:#808030; '>(</span>coihr<span style='color:#808030; '>)</span>
    <span style='color:#800000; font-weight:bold; '>DoEvents</span>
<span style='color:#800000; font-weight:bold; '>End</span> <span style='color:#800000; font-weight:bold; '>Sub</span>

<span style='color:#696969; '>'CoUninitialize Function</span>
<span style='color:#696969; '>'Closes the COM library on the current thread, unloads all DLLs loaded by the thread, frees any other resources that the thread maintains, and forces all RPC connections on the thread to close.</span>
<span style='color:#696969; '>'see http://msdn.microsoft.com/en-us/library/ms688715(v=VS.85).aspx</span>
<span style='color:#800000; font-weight:bold; '>Public</span> <span style='color:#800000; font-weight:bold; '>Sub</span> do_CoUninitialize<span style='color:#808030; '>(</span><span style='color:#808030; '>)</span>
    CoUninitialize
    <span style='color:#800000; font-weight:bold; '>DoEvents</span>
<span style='color:#800000; font-weight:bold; '>End</span> <span style='color:#800000; font-weight:bold; '>Sub</span>

<span style='color:#696969; '>'ment for debuging the result of CoInitializeEx Function,</span>
<span style='color:#696969; '>'strings are from WinError.h and MSDN</span>
<span style='color:#800000; font-weight:bold; '>Private</span> <span style='color:#800000; font-weight:bold; '>Function</span> toString<span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>ByVal</span> coihr <span style='color:#800000; font-weight:bold; '>As</span> COINIT_HRESULT<span style='color:#808030; '>)</span> <span style='color:#800000; font-weight:bold; '>As</span> <span style='color:#800000; font-weight:bold; '>String</span>
    <span style='color:#800000; font-weight:bold; '>If</span> <span style='color:#808030; '>(</span>coihr <span style='color:#808030; '>=</span> HRESULT<span style='color:#008c00; '>.</span>S_OK<span style='color:#808030; '>)</span> <span style='color:#800000; font-weight:bold; '>Then</span>
        HRESULT_toString <span style='color:#808030; '>=</span> <span style='color:#0000e6; '>"S_OK: The COM library was initialized successfully on this thread."</span>
    <span style='color:#800000; font-weight:bold; '>ElseIf</span> <span style='color:#808030; '>(</span>coihr <span style='color:#808030; '>=</span> HRESULT<span style='color:#008c00; '>.</span>S_FALSE<span style='color:#808030; '>)</span> <span style='color:#800000; font-weight:bold; '>Then</span>
        HRESULT_toString <span style='color:#808030; '>=</span> <span style='color:#0000e6; '>"S_FALSE: The COM library is already initialized on this thread."</span>
    <span style='color:#800000; font-weight:bold; '>ElseIf</span> <span style='color:#808030; '>(</span>coihr <span style='color:#808030; '>=</span> HRESULT<span style='color:#008c00; '>.</span>RPC_E_CHANGED_MODE<span style='color:#808030; '>)</span> <span style='color:#800000; font-weight:bold; '>Then</span>
        HRESULT_toString <span style='color:#808030; '>=</span> <span style='color:#0000e6; '>"RPC_E_CHANGED_MODE: A previous call to CoInitializeEx specified the concurrency model for this thread as multithread apartment (MTA). This could also indicate that a change from neutral-threaded apartment to single-threaded apartment has occurred."</span>
    <span style='color:#800000; font-weight:bold; '>ElseIf</span> <span style='color:#808030; '>(</span>coihr <span style='color:#808030; '>=</span> HRESULT<span style='color:#008c00; '>.</span>E_INVALIDARG<span style='color:#808030; '>)</span> <span style='color:#800000; font-weight:bold; '>Then</span>
        HRESULT_toString <span style='color:#808030; '>=</span> <span style='color:#0000e6; '>"E_INVALIDARG: One or more arguments are invalid."</span>
    <span style='color:#800000; font-weight:bold; '>ElseIf</span> <span style='color:#808030; '>(</span>coihr <span style='color:#808030; '>=</span> HRESULT<span style='color:#008c00; '>.</span>E_OUTOFMEMORY<span style='color:#808030; '>)</span> <span style='color:#800000; font-weight:bold; '>Then</span>
        HRESULT_toString <span style='color:#808030; '>=</span> <span style='color:#0000e6; '>"E_OUTOFMEMORY: Ran out of memory."</span>
    <span style='color:#800000; font-weight:bold; '>ElseIf</span> <span style='color:#808030; '>(</span>coihr <span style='color:#808030; '>=</span> HRESULT<span style='color:#008c00; '>.</span>E_UNEXPECTED<span style='color:#808030; '>)</span> <span style='color:#800000; font-weight:bold; '>Then</span>
        HRESULT_toString <span style='color:#808030; '>=</span> <span style='color:#0000e6; '>"E_UNEXPECTED: The task XML contains an unexpected node."</span>
    <span style='color:#800000; font-weight:bold; '>Else</span>
        HRESULT_toString <span style='color:#808030; '>=</span> <span style='color:#800000; font-weight:bold; '>CStr</span><span style='color:#808030; '>(</span>coihr<span style='color:#808030; '>)</span> <span style='color:#808030; '>&amp;</span> <span style='color:#0000e6; '>"(?) Unknown."</span>
    <span style='color:#800000; font-weight:bold; '>End</span> <span style='color:#800000; font-weight:bold; '>If</span>
<span style='color:#800000; font-weight:bold; '>End</span> <span style='color:#800000; font-weight:bold; '>Function</span>
</pre>