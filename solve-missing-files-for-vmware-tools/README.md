install essentials:
Create a symbolic links for kernel headers.

The vmware tools installer is looking for the version.h file in under [kernelsource path]/include/linux/version.h,
it’s not there.
The location of version.h is [kernelsource path]include/generated/uapi/linux/version.h

<pre>sudo apt-get install --assume-yes build-essential</pre>
<pre>sudo apt-get install --assume-yes linux-headers-$(uname -r)</pre>

<pre>sudo ln -s /usr/src/linux-headers-$(uname -r)/include/generated/uapi/linux/version.h /usr/src/linux-headers-$(uname -r)/include/linux/version.h</pre>

