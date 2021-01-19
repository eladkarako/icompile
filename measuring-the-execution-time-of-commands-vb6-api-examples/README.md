<img src="https://icompile.eladkarako.com/_uploads/ktimer.png" alt="" title="ktimer" width="63" height="63" class="alignnone size-full wp-image-283" /> 
The two APIs that are explained in this article are:
1. <a href="http://msdn.microsoft.com/en-us/library/dd757629(VS.85).aspx">timeGetTime</a> (winmm.dll).
2. <a href="http://msdn.microsoft.com/en-us/library/ms644904(v=VS.85).aspx">QueryPerformanceCounter</a> (kernel32.dll).

<!--more-->

example #1:
using <a href="http://msdn.microsoft.com/en-us/library/dd757629(VS.85).aspx">timeGetTime</a>, <a href="http://msdn.microsoft.com/en-us/library/dd757624(VS.85).aspx">timeBeginPeriod</a> and <a href="http://msdn.microsoft.com/en-us/library/dd757626(VS.85).aspx">timeEndPeriod</a>.
(API of winmm.dll)

<pre>
Private Declare Function timeGetTime Lib "winmm.dll" () As Long
Private Declare Function timeBeginPeriod Lib "winmm.dll" (ByVal uPeriod As Long) As Long
Private Declare Function timeEndPeriod Lib "winmm.dll" (ByVal uPeriod As Long) As Long
Private Declare Sub Sleep Lib "kernel32" (ByVal dwMilliseconds As Long)

Private Sub test_timeGetTime()
    Dim ltime As Long
    
    Dim api_overhead As Long
    Call timeBeginPeriod(1): ltime = timeGetTime
    Call timeEndPeriod(1): api_overhead = timeGetTime - ltime
    
    
    Call timeBeginPeriod(1): ltime = timeGetTime
    
    'work....start.\\
    Sleep 5313
    'work.... done./
    
    Call timeEndPeriod(1): ltime = timeGetTime - ltime
    
    MsgBox "benchmark = " & CStr((ltime - api_overhead)) & " milliseconds." & vbNewLine & _
           "(" & Format((ltime - api_overhead) / 1000, "00.00") & " seconds).", vbInformation Or vbOKOnly, "example #1: using timeGetTime"
End Sub
</pre>

example #2:
using <a href="http://msdn.microsoft.com/en-us/library/ms644904(v=VS.85).aspx">QueryPerformanceCounter</a> and <a href="http://msdn.microsoft.com/en-us/library/ms644905(v=VS.85).aspx">QueryPerformanceFrequency</a>.
(API of kernel32.dll)

<pre>
Private Declare Function QueryPerformanceCounter Lib "kernel32.dll" (lpPerformanceCount As Currency) As Boolean
Private Declare Function QueryPerformanceFrequency Lib "kernel32.dll" (lpFrequency As Currency) As Boolean

Private Sub test_QueryPerformanceFrequency()
    Dim timeStart As Currency
    Dim timeFinish As Currency
    Dim freq As Currency
    Dim overhead As Currency
    
    If (QueryPerformanceCounter(timeStart)) Then
        QueryPerformanceCounter timeFinish
        If (QueryPerformanceFrequency(freq)) Then
            overhead = timeFinish - timeStart ' determine API call overhead
            
            QueryPerformanceCounter timeStart     ' time loop
            
            'work....start.\\
            Dim i As Long
            Dim a As Long
            For i = 1 To 100
                a = a + i
                DoEvents
            Next i
            'work.... done./
    
            QueryPerformanceCounter timeFinish   ' time loop
            
            MsgBox "Takes " & Format(((timeFinish - timeStart - overhead) / freq), "000.00000000") & " seconds.", vbInformation Or vbOKOnly, "Timing using high-resolution performance counter"
        Else
            MsgBox "the installed hardware does not support a high-resolution performance counter, the function fails.", vbExclamation, "Error " & CStr(Err.LastDllError)
        End If
    Else
        MsgBox "the installed hardware does not support a high-resolution performance counter, the function fails.", vbExclamation, "Error " & CStr(Err.LastDllError)
    End If
End Sub
</pre>

Note: API calls made by timeGetTime and QueryPerformanceCounter takes some time to execute, so a rough estimate is calculated first and saved in a <strong>overhead</strong> variable, later to be subtracted from the total time. suggested by Microsoft's example (see MSDN links on top of the post).

Note: Sometimes QueryPerformanceCounter is overused, or misuse, the precision degree of QueryPerformanceCounter is undue, it is mostly used for graphics calculation. It is recommended to use timeGetTime with the minimal frame of timeBeginPeriod and timeEndPeriod as suggested in 
<a href="http://msdn.microsoft.com/en-us/library/dd757629(VS.85).aspx">http://msdn.microsoft.com/en-us/library/dd757629(VS.85).aspx</a>.
