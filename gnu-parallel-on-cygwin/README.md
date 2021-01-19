<code>wget http://mirror.rackdc.com/gnu/parallel/parallel-latest.tar.bz2
&& bzip2 -dc parallel-latest.tar.bz2 | tar xvf -
</code>

<code>cd ./parallel-20151022/</code>

<code>./configure && make && make install</code> (no need for <code>sudo</code> in cygwin)

<pre>
checking for a BSD-compatible install... /usr/bin/install -c
checking whether build environment is sane... yes
checking for a thread-safe mkdir -p... /usr/bin/mkdir -p
checking for gawk... gawk
checking whether make sets $(MAKE)... yes
checking whether make supports nested variables... yes
checking whether ln -s works... yes
checking that generated files are newer than configure... done
configure: creating ./config.status
config.status: creating Makefile
config.status: creating src/Makefile
config.status: creating config.h
make  all-recursive
make[1]: Entering directory '/home/Elad/parallel-20151022'
Making all in src
make[2]: Entering directory '/home/Elad/parallel-20151022/src'
make[2]: Nothing to be done for 'all'.
make[2]: Leaving directory '/home/Elad/parallel-20151022/src'
make[2]: Entering directory '/home/Elad/parallel-20151022'
make[2]: Leaving directory '/home/Elad/parallel-20151022'
make[1]: Leaving directory '/home/Elad/parallel-20151022'
Making install in src
make[1]: Entering directory '/home/Elad/parallel-20151022/src'
make[2]: Entering directory '/home/Elad/parallel-20151022/src'
 /usr/bin/mkdir -p '/usr/local/bin'
 /usr/bin/install -c parallel sql niceload '/usr/local/bin'
make  install-exec-hook
make[3]: Entering directory '/home/Elad/parallel-20151022/src'
rm /usr/local/bin/sem || true
rm: cannot remove ‘/usr/local/bin/sem’: No such file or directory
ln -s parallel /usr/local/bin/sem
make[3]: Leaving directory '/home/Elad/parallel-20151022/src'
 /usr/bin/mkdir -p '/usr/local/share/doc/parallel'
 /usr/bin/install -c -m 644 parallel.html sem.html sql.html niceload.html parallel_tutorial.html parallel_design.html parallel.texi sem.texi sql.texi niceload.texi parallel_tutorial.texi parallel_design.texi parallel.pdf sem.pdf sql.pdf niceload.pdf parallel_tutorial.pdf parallel_design.pdf '/usr/local/share/doc/parallel'
 /usr/bin/mkdir -p '/usr/local/share/man/man1'
 /usr/bin/install -c -m 644 parallel.1 sem.1 sql.1 niceload.1 '/usr/local/share/man/man1'
 /usr/bin/mkdir -p '/usr/local/share/man/man7'
 /usr/bin/install -c -m 644 parallel_tutorial.7 parallel_design.7 '/usr/local/share/man/man7'
make[2]: Leaving directory '/home/Elad/parallel-20151022/src'
make[1]: Leaving directory '/home/Elad/parallel-20151022/src'
make[1]: Entering directory '/home/Elad/parallel-20151022'
make[2]: Entering directory '/home/Elad/parallel-20151022'
make[2]: Nothing to be done for 'install-exec-am'.
make[2]: Nothing to be done for 'install-data-am'.
make[2]: Leaving directory '/home/Elad/parallel-20151022'
make[1]: Leaving directory '/home/Elad/parallel-20151022'

</pre>