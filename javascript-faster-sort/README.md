for sort you would probably want to do something like that:

<pre>data.sort(function (a, b) { return b.key - a.key; });</pre>
this at complexity of \\[n \\cdot {\\log _{10}}n\\], since the sort method works on string only there is a constant overhead where javascript as a language pre-process the data elements into string.
came across a nice enhancement to speed sorting substantially (!).
1. override the toString prototype (backup 'pointer' first).
2. call the sort method.
3. bring the original toString back.


<pre>

var save = Object.prototype.toString;
Object.prototype.toString = function () {
    return this.key;
};

data.sort();

Object.prototype.toString = save;

</pre>


You have to make sure that the key variable is a string. In my application, the key range is [0, 100] so the it is written as String.fromCharCode(key). If you have to deal with larger key range, the best solution is to convert the number into base 256. Make sure the number is padded with 0 because of the string comparison.

It gives about a 5x increase of all the browsers I have tested with except in Chrome with a 3x decrease.
Since Chrome is already times faster than all the browsers, it doesn't look slowed by this feature. However it gives a real boost to all other browsers.


note: Chrome Array.sort() function is written directly in javascript and calls the ToString function everytime when a comparison is needed. Therefore, it is making 2 function calls (ToString(x), ToString(y) instead of one (compare(x, y)).
In order to check if that optimization will indeed give an actual boost, we can count the number of time the ToString method is being executed for 3 values. 3 times means that it is executed n time and more means that it is executed n log n times.


<pre>
var need_custom_sort = (function () {
    // Fill the array with 3 values
    var array = new Array(3);
    for (var i = 0; i < 3; ++i) {
        array[i] = new Object();
    }

    // Override the toString method that counts how many times it is being called
    var count = 0;
    var save = Object.prototype.toString;
    Object.prototype.toString = function () {
        count += 1;
        return "";
    };

    // Sort
    array.sort();
    Object.prototype.toString = save;

    // 3 times is good, more is bad!
    return (count === 3);
}());
</pre>