create an array fill with ANYTHING!!!
it can be strings, numbers, DOM Nodes, whatever you'll like.
this will sort it and kick out the duplicates, and it is done quite efficient.

<pre>
function getUniqueArray(oldArray) {
        if(!oldArray)
            return( new Array() );

        var resultArr = new Array();
        var oldArrayLength = oldArray.length;
        var bakara = {};

        try{
            for (var i = 0; i < oldArrayLength; ++i)
                oldArray[i] in bakara || (resultArr.push(oldArray[i]), bakara[oldArray[i]] = 1);
        }catch(e){ alert(e + "\
\
" + "getUniqueArray(oldArray):main looop had problems!"); }
        return (resultArr);
}
</pre>