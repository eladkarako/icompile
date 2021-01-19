get the git-repository's content: <code>http://anongit.freedesktop.org/git/fontconfig</code>,
run: <code>./autogen.sh --sysconfdir=/etc --prefix=/usr --mandir=/usr/share/man</code>
<pre>
Unescaped left brace in regex is deprecated, passed through in regex; marked by                                          < -- HERE in m/\\${ <-- HERE ([^ \\t=:+{}]+)}/ at /usr/bin/automake-1.14 line 3930.
Running aclocal -I m4
Running autoheader
Running libtoolize --copy --force
libtoolize: putting auxiliary files in '.'.
libtoolize: copying file './ltmain.sh'
libtoolize: putting macros in AC_CONFIG_MACRO_DIRS, 'm4'.
libtoolize: copying file 'm4/libtool.m4'
libtoolize: copying file 'm4/ltoptions.m4'
libtoolize: copying file 'm4/ltsugar.m4'
libtoolize: copying file 'm4/ltversion.m4'
libtoolize: copying file 'm4/lt~obsolete.m4'
Running automake -a
Unescaped left brace in regex is deprecated, passed through in regex; marked by                                          <-- HERE in m/\\${ <-- HERE ([^ \\t=:+{}]+)}/ at /usr/bin/automake-1.14 line 3930.
configure.ac:45: installing './compile'
configure.ac:70: installing './config.guess'
configure.ac:70: installing './config.sub'
configure.ac:37: installing './install-sh'
configure.ac:37: installing './missing'
Makefile.am:93: warning: subst $(BASECONFIGDIR: non-POSIX variable name
Makefile.am:93: (probably a GNU make extension)
doc/Makefile.am: installing './depcomp'
parallel-tests: installing './test-driver'
Running autoconf
Running ./configure --sysconfdir=/etc --prefix=/usr --mandir=/usr/share/man
configure: loading site script /usr/share/config.site
checking for a BSD-compatible install... /usr/bin/install -c
checking whether build environment is sane... yes
checking for a thread-safe mkdir -p... /usr/bin/mkdir -p
checking for gawk... gawk
checking whether make sets $(MAKE)... yes
checking whether make supports nested variables... yes
checking whether make supports nested variables... (cached) yes
checking for gcc... gcc
checking whether the C compiler works... yes
checking for C compiler default output file name... a.exe
checking for suffix of executables... .exe
checking whether we are cross compiling... no
checking for suffix of object files... o
checking whether we are using the GNU C compiler... yes
checking whether gcc accepts -g... yes
checking for gcc option to accept ISO C89... none needed
checking whether gcc understands -c and -o together... yes
checking for style of include used by make... GNU
checking dependency style of gcc... gcc3
checking how to run the C preprocessor... gcc -E
checking for grep that handles long lines and -e... /usr/bin/grep
checking for egrep... /usr/bin/grep -E
checking for ANSI C header files... yes
checking for sys/types.h... yes
checking for sys/stat.h... yes
checking for stdlib.h... yes
checking for string.h... yes
checking for memory.h... yes
checking for strings.h... yes
checking for inttypes.h... yes
checking for stdint.h... yes
checking for unistd.h... yes
checking minix/config.h usability... no
checking minix/config.h presence... no
checking for minix/config.h... no
checking whether it is safe to define __EXTENSIONS__... yes
checking for special C compiler options needed for large files... no
checking for _FILE_OFFSET_BITS value needed for large files... no
checking whether ln -s works... yes
checking whether make sets $(MAKE)... (cached) yes
checking for pkg-config... /usr/bin/pkg-config
checking pkg-config is at least version 0.9.0... yes
checking for python... /usr/bin/python
checking for python version... 2.7
checking for python platform... cygwin
checking for python script directory... ${prefix}/lib/python2.7/site-packages
checking for python extension module directory... ${exec_prefix}/lib/python2.7/site-packages
checking for RM macro... rm -f
checking build system type... i686-pc-cygwin
checking host system type... i686-pc-cygwin
checking how to print strings... printf
checking for a sed that does not truncate output... /usr/bin/sed
checking for fgrep... /usr/bin/grep -F
checking for ld used by gcc... /usr/i686-pc-cygwin/bin/ld.exe
checking if the linker (/usr/i686-pc-cygwin/bin/ld.exe) is GNU ld... yes
checking for BSD- or MS-compatible name lister (nm)... /usr/bin/nm -B
checking the name lister (/usr/bin/nm -B) interface... BSD nm
checking the maximum length of command line arguments... 8192
checking how to convert i686-pc-cygwin file names to i686-pc-cygwin format... func_convert_file_noop
checking how to convert i686-pc-cygwin file names to toolchain format... func_convert_file_noop
checking for /usr/i686-pc-cygwin/bin/ld.exe option to reload object files... -r
checking for objdump... objdump
checking how to recognize dependent libraries... file_magic ^x86 archive import|^x86 DLL
checking for dlltool... dlltool
checking how to associate runtime and link libraries... func_cygming_dll_for_implib
checking for ar... ar
checking for archiver @FILE support... @
checking for strip... strip
checking for ranlib... ranlib
checking command to parse /usr/bin/nm -B output from gcc object... ok
checking for sysroot... no
checking for a working dd... /usr/bin/dd
checking how to truncate binary pipes... /usr/bin/dd bs=4096 count=1
checking for mt... mt
checking if mt is a manifest tool... no
checking for dlfcn.h... yes
checking for as... as
checking for dlltool... (cached) dlltool
checking for objdump... (cached) objdump
checking for objdir... .libs
checking if gcc supports -fno-rtti -fno-exceptions... no
checking for gcc option to produce PIC... -DDLL_EXPORT -DPIC
checking if gcc PIC flag -DDLL_EXPORT -DPIC works... yes
checking if gcc static flag -static works... yes
checking if gcc supports -c -o file.o... yes
checking if gcc supports -c -o file.o... (cached) yes
checking whether the gcc linker (/usr/i686-pc-cygwin/bin/ld.exe) supports shared libraries... yes
checking whether -lc should be explicitly linked in... yes
checking dynamic linker characteristics... Win32 ld.exe
checking how to hardcode library paths into programs... immediate
checking whether stripping libraries is possible... yes
checking if libtool supports shared libraries... yes
checking whether to build shared libraries... yes
checking whether to build static libraries... no
checking whether __SUNPRO_C is declared... no
checking for dirent.h that defines DIR... yes
checking for library containing opendir... none required
checking for ANSI C header files... (cached) yes
checking fcntl.h usability... yes
checking fcntl.h presence... yes
checking for fcntl.h... yes
checking for stdlib.h... (cached) yes
checking for string.h... (cached) yes
checking for unistd.h... (cached) yes
checking sys/statvfs.h usability... yes
checking sys/statvfs.h presence... yes
checking for sys/statvfs.h... yes
checking sys/vfs.h usability... yes
checking sys/vfs.h presence... yes
checking for sys/vfs.h... yes
checking sys/statfs.h usability... yes
checking sys/statfs.h presence... yes
checking for sys/statfs.h... yes
checking sys/param.h usability... yes
checking sys/param.h presence... yes
checking for sys/param.h... yes
checking sys/mount.h usability... yes
checking sys/mount.h presence... yes
checking for sys/mount.h... yes
checking for stdint types... stdint.h (shortcircuit)
make use of stdint.h in src/fcstdint.h (assuming C99 compatible system)
checking for an ANSI C-conforming const... yes
checking for inline... inline
checking for flexible array members... yes
checking for pid_t... yes
checking for vprintf... yes
checking for _doprnt... no
checking for stdlib.h... (cached) yes
checking for unistd.h... (cached) yes
checking for sys/param.h... (cached) yes
checking for getpagesize... yes
checking for working mmap... yes
checking for link... yes
checking for mkstemp... yes
checking for mkostemp... yes
checking for _mktemp_s... no
checking for mkdtemp... yes
checking for getopt... yes
checking for getopt_long... yes
checking for getprogname... yes
checking for getexecname... no
checking for rand... yes
checking for random... yes
checking for lrand48... yes
checking for random_r... no
checking for rand_r... yes
checking for readlink... yes
checking for fstatvfs... yes
checking for fstatfs... yes
checking for lstat... yes
checking for posix_fadvise in fcntl.h... fcntl.h
checking for struct stat.st_mtim... yes
checking for struct statvfs.f_basetype... no
checking for struct statvfs.f_fstypename... no
checking for struct statfs.f_flags... no
checking for struct statfs.f_fstypename... no
checking for struct dirent.d_type... yes
checking for FREETYPE... yes
checking for FT_Get_Next_Char... yes
checking for FT_Get_BDF_Property... yes
checking for FT_Get_PS_Font_Info... yes
checking for FT_Has_PS_Glyph_Names... yes
checking for FT_Get_X11_Font_Format... yes
checking for FT_Select_Size... yes
checking for FT_Bitmap_Size.y_ppem... yes
checking for TT_OS2.usLowerOpticalPointSize... yes
checking for TT_OS2.usUpperOpticalPointSize... yes
checking for EXPAT... yes
checking expat.h usability... yes
checking expat.h presence... yes
checking for expat.h... yes
checking for XML_SetDoctypeDeclHandler... yes
checking for Intel atomic primitives... true
checking for Solaris atomic operations... false
checking if compiler needs -Werror to reject unknown flags... no
checking for the pthreads library -lpthreads... no
checking whether pthreads work without any flags... yes
checking for joinable pthread attribute... PTHREAD_CREATE_JOINABLE
checking if more special flags are required for pthreads... no
checking for PTHREAD_PRIO_INHERIT... no
checking for docbook2html... no
checking whether byte ordering is bigendian... no
checking size of void *... 4
checking alignment of double... 8
checking alignment of void *... 4
checking that generated files are newer than configure... done
configure: creating ./config.status
config.status: creating Makefile
config.status: creating fontconfig/Makefile
config.status: creating fc-lang/Makefile
config.status: creating fc-glyphname/Makefile
config.status: creating fc-blanks/Makefile
config.status: creating fc-case/Makefile
config.status: creating src/Makefile
config.status: creating conf.d/Makefile
config.status: creating fc-cache/Makefile
config.status: creating fc-cat/Makefile
config.status: creating fc-list/Makefile
config.status: creating fc-match/Makefile
config.status: creating fc-pattern/Makefile
config.status: creating fc-query/Makefile
config.status: creating fc-scan/Makefile
config.status: creating fc-validate/Makefile
config.status: creating doc/Makefile
config.status: creating doc/version.sgml
config.status: creating test/Makefile
config.status: creating fontconfig.spec
config.status: creating fontconfig.pc
config.status: creating fontconfig-zip
config.status: creating config.h
config.status: executing depfiles commands
config.status: executing libtool commands
config.status: executing src/fcstdint.h commands
config.status: creating src/fcstdint.h : _FONTCONFIG_SRC_FCSTDINT_H

Now type 'make' to compile Fontconfig.
</pre>



<blockquote>you can download the pre-configured (ready for make and make install) archive from here:
<pre>
<a mirror href="http://www118.zippyshare.com/v/DbnuJ34V/file.html" title="http://www118.zippyshare.com/v/DbnuJ34V/file.html" rel="nofollow target="_blank">http://www118.zippyshare.com/v/DbnuJ34V/file.html</a>
<a mirror href="http://turbobit.net/utrjeezovd98.html" title="http://turbobit.net/utrjeezovd98.html" rel="nofollow target="_blank">http://turbobit.net/utrjeezovd98.html</a>
<a mirror href="http://www.solidfiles.com/d/d7853a10ef" title="http://www.solidfiles.com/d/d7853a10ef" rel="nofollow target="_blank">http://www.solidfiles.com/d/d7853a10ef</a>
<a mirror href="http://hugefiles.net/rhgizjcaz7ea" title="http://hugefiles.net/rhgizjcaz7ea" rel="nofollow target="_blank">http://hugefiles.net/rhgizjcaz7ea</a>
<a mirror href="https://www.sendmyway.com/rhcu39hcwjll" title="https://www.sendmyway.com/rhcu39hcwjll" rel="nofollow target="_blank">https://www.sendmyway.com/rhcu39hcwjll</a>
<a mirror href="http://pion.rghost.net/" title="http://pion.rghost.net/" rel="nofollow target="_blank">http://pion.rghost.net/</a>
<a mirror href="http://www.gamefront.com/files/25464306/cygwin_pre_configured__ready_to_make__fontconfig.7z" title="http://www.gamefront.com/files/25464306/cygwin_pre_configured__ready_to_make__fontconfig.7z" rel="nofollow target="_blank">http://www.gamefront.com/files/25464306/cygwin_pre_configured__ready_to_make__fontconfig.7z</a>
<a mirror href="https://tusfiles.net/z3z02ciqhb6q" title="https://tusfiles.net/z3z02ciqhb6q" rel="nofollow target="_blank">https://tusfiles.net/z3z02ciqhb6q</a>
<a mirror href="http://www.speedyshare.com/file/R9B7H/cygwin_pre_configured__ready_to_make__fontconfig.7z" title="http://www.speedyshare.com/file/R9B7H/cygwin_pre_configured__ready_to_make__fontconfig.7z" rel="nofollow target="_blank">http://www.speedyshare.com/file/R9B7H/cygwin_pre_configured__ready_to_make__fontconfig.7z</a>
<a mirror href="https://files.fm/u/aumzszcj" title="https://files.fm/u/aumzszcj" rel="nofollow target="_blank">https://files.fm/u/aumzszcj</a>
<a mirror href="https://userscloud.com/8rqwkq9hobz6" title="https://userscloud.com/8rqwkq9hobz6" rel="nofollow target="_blank">https://userscloud.com/8rqwkq9hobz6</a></pre></blockquote>
</pre>

next: run <code>make</code>
<pre>
  GEN      .gitignore
make[1]: Entering directory '/cygdrive/C/www/fontconfig/doc'
  GEN      .gitignore
make[1]: Leaving directory '/cygdrive/C/www/fontconfig/doc'
make  all-recursive
make[1]: Entering directory '/cygdrive/C/www/fontconfig'
Making all in fontconfig
make[2]: Entering directory '/cygdrive/C/www/fontconfig/fontconfig'
  GEN      .gitignore
make[2]: Leaving directory '/cygdrive/C/www/fontconfig/fontconfig'
Making all in fc-blanks
make[2]: Entering directory '/cygdrive/C/www/fontconfig/fc-blanks'
  GEN      fcblanks.h
  GEN      .gitignore
make[2]: Leaving directory '/cygdrive/C/www/fontconfig/fc-blanks'
Making all in fc-case
make[2]: Entering directory '/cygdrive/C/www/fontconfig/fc-case'
  GEN      fcalias.h
  GEN      fcaliastail.h
  GEN      .gitignore
make  all-am
make[3]: Entering directory '/cygdrive/C/www/fontconfig/fc-case'
  GEN      fccase.h
make[4]: Entering directory '/cygdrive/C/www/fontconfig/fc-case'
  GEN      fc-case.exe
make[4]: Leaving directory '/cygdrive/C/www/fontconfig/fc-case'
make[3]: Leaving directory '/cygdrive/C/www/fontconfig/fc-case'
make[2]: Leaving directory '/cygdrive/C/www/fontconfig/fc-case'
Making all in fc-lang
make[2]: Entering directory '/cygdrive/C/www/fontconfig/fc-lang'
  GEN      fcalias.h
  GEN      fcaliastail.h
  GEN      .gitignore
make  all-am
make[3]: Entering directory '/cygdrive/C/www/fontconfig/fc-lang'
  GEN      fclang.h
make[4]: Entering directory '/cygdrive/C/www/fontconfig/fc-lang'
  GEN      fc-lang.exe
make[4]: Leaving directory '/cygdrive/C/www/fontconfig/fc-lang'
make[3]: Leaving directory '/cygdrive/C/www/fontconfig/fc-lang'
make[2]: Leaving directory '/cygdrive/C/www/fontconfig/fc-lang'
Making all in fc-glyphname
make[2]: Entering directory '/cygdrive/C/www/fontconfig/fc-glyphname'
  GEN      fcalias.h
  GEN      fcaliastail.h
  GEN      .gitignore
make  all-am
make[3]: Entering directory '/cygdrive/C/www/fontconfig/fc-glyphname'
  GEN      fcglyphname.h
make[4]: Entering directory '/cygdrive/C/www/fontconfig/fc-glyphname'
  GEN      fc-glyphname.exe
make[4]: Leaving directory '/cygdrive/C/www/fontconfig/fc-glyphname'
make[3]: Leaving directory '/cygdrive/C/www/fontconfig/fc-glyphname'
make[2]: Leaving directory '/cygdrive/C/www/fontconfig/fc-glyphname'
Making all in src
make[2]: Entering directory '/cygdrive/C/www/fontconfig/src'
  GEN      fcalias.h
  GEN      fcftalias.h
  GEN      stamp-fcstdint
config.status: executing src/fcstdint.h commands
config.status: creating src/fcstdint.h : _FONTCONFIG_SRC_FCSTDINT_H
config.status: src/fcstdint.h is unchanged
  GEN      fcobjshash.gperf
  GEN      fcobjshash.h
  GEN      .gitignore
make  all-am
make[3]: Entering directory '/cygdrive/C/www/fontconfig/src'
  CC       fcatomic.lo
  CC       fcblanks.lo
  CC       fccache.lo
  CC       fccfg.lo
  CC       fccharset.lo
  CC       fccompat.lo
  CC       fcdbg.lo
  CC       fcdefault.lo
  CC       fcdir.lo
  CC       fcformat.lo
  CC       fcfreetype.lo
  CC       fcfs.lo
  CC       fcinit.lo
  CC       fclang.lo
  CC       fclist.lo
  CC       fcmatch.lo
  CC       fcmatrix.lo
  CC       fcname.lo
  CC       fcobjs.lo
  CC       fcpat.lo
  CC       fcrange.lo
  CC       fcserialize.lo
  CC       fcstat.lo
  CC       fcstr.lo
  CC       fcweight.lo
  CC       fcxml.lo
  CC       ftglue.lo
  CCLD     libfontconfig.la
  CC       fcarch.o
  CCLD     fcarch.exe
make[3]: Leaving directory '/cygdrive/C/www/fontconfig/src'
make[2]: Leaving directory '/cygdrive/C/www/fontconfig/src'
Making all in fc-cache
make[2]: Entering directory '/cygdrive/C/www/fontconfig/fc-cache'
  CC       fc-cache.o
  CCLD     fc-cache.exe
  GEN      .gitignore
make[2]: Leaving directory '/cygdrive/C/www/fontconfig/fc-cache'
Making all in fc-cat
make[2]: Entering directory '/cygdrive/C/www/fontconfig/fc-cat'
  CC       fc-cat.o
  CCLD     fc-cat.exe
  GEN      .gitignore
make[2]: Leaving directory '/cygdrive/C/www/fontconfig/fc-cat'
Making all in fc-list
make[2]: Entering directory '/cygdrive/C/www/fontconfig/fc-list'
  CC       fc-list.o
  CCLD     fc-list.exe
  GEN      .gitignore
make[2]: Leaving directory '/cygdrive/C/www/fontconfig/fc-list'
Making all in fc-match
make[2]: Entering directory '/cygdrive/C/www/fontconfig/fc-match'
  CC       fc-match.o
  CCLD     fc-match.exe
  GEN      .gitignore
make[2]: Leaving directory '/cygdrive/C/www/fontconfig/fc-match'
Making all in fc-pattern
make[2]: Entering directory '/cygdrive/C/www/fontconfig/fc-pattern'
  CC       fc-pattern.o
  CCLD     fc-pattern.exe
  GEN      .gitignore
make[2]: Leaving directory '/cygdrive/C/www/fontconfig/fc-pattern'
Making all in fc-query
make[2]: Entering directory '/cygdrive/C/www/fontconfig/fc-query'
  CC       fc-query.o
  CCLD     fc-query.exe
  GEN      .gitignore
make[2]: Leaving directory '/cygdrive/C/www/fontconfig/fc-query'
Making all in fc-scan
make[2]: Entering directory '/cygdrive/C/www/fontconfig/fc-scan'
  CC       fc-scan.o
  CCLD     fc-scan.exe
  GEN      .gitignore
make[2]: Leaving directory '/cygdrive/C/www/fontconfig/fc-scan'
Making all in fc-validate
make[2]: Entering directory '/cygdrive/C/www/fontconfig/fc-validate'
  CC       fc-validate.o
  CCLD     fc-validate.exe
  GEN      .gitignore
make[2]: Leaving directory '/cygdrive/C/www/fontconfig/fc-validate'
Making all in conf.d
make[2]: Entering directory '/cygdrive/C/www/fontconfig/conf.d'
sed "s|\\@TEMPLATEDIR\\@|/usr/share/fontconfig/conf.avail|" README.in > README
  GEN      .gitignore
make  all-am
make[3]: Entering directory '/cygdrive/C/www/fontconfig/conf.d'
make[3]: Nothing to be done for 'all-am'.
make[3]: Leaving directory '/cygdrive/C/www/fontconfig/conf.d'
make[2]: Leaving directory '/cygdrive/C/www/fontconfig/conf.d'
Making all in test
make[2]: Entering directory '/cygdrive/C/www/fontconfig/test'
  CC       test-pthread.o
  CCLD     test-pthread.exe
  CC       test_bz89617-test-bz89617.o
  CCLD     test-bz89617.exe
  CC       test-migration.o
test-migration.c: In function ‘fc_mkdtemp’:
test-migration.c:44:5: warning: ‘mktemp’ is deprecated: the use of `mktemp' is dangerous; use `mkstemp' instead [-Wdeprecated-declarations]
     if (!mktemp (template) || mkdir (template, 0700))
     ^
In file included from /usr/include/stdio.h:29:0,
                 from test-migration.c:25:
/usr/include/sys/unistd.h:251:8: note: declared here
 char * _EXFUN(mktemp, (char *));
        ^
  CCLD     test-migration.exe
  GEN      .gitignore
make[2]: Leaving directory '/cygdrive/C/www/fontconfig/test'
make[2]: Entering directory '/cygdrive/C/www/fontconfig'
make[2]: Leaving directory '/cygdrive/C/www/fontconfig'
make[1]: Leaving directory '/cygdrive/C/www/fontconfig'
</pre>

and if you want to copy the executables under usr, bin etc.. you can also use <code>make install</code> (I'll skip that)

you can download the ready-to use exe, libs and dependencies from here:
<pre>
<a mirror href="http://www21.zippyshare.com/v/5yUrb14Y/file.html" title="http://www21.zippyshare.com/v/5yUrb14Y/file.html" rel="nofollow target="_blank">http://www21.zippyshare.com/v/5yUrb14Y/file.html</a>
<a mirror href="http://hugefiles.net/thwf3sa2oxgy" title="http://hugefiles.net/thwf3sa2oxgy" rel="nofollow target="_blank">http://hugefiles.net/thwf3sa2oxgy</a>
<a mirror href="http://www.solidfiles.com/d/bbfc6b6e29" title="http://www.solidfiles.com/d/bbfc6b6e29" rel="nofollow target="_blank">http://www.solidfiles.com/d/bbfc6b6e29</a>
<a mirror href="http://turbobit.net/emfr81m7ux2r.html" title="http://turbobit.net/emfr81m7ux2r.html" rel="nofollow target="_blank">http://turbobit.net/emfr81m7ux2r.html</a>
<a mirror href="https://www.sendmyway.com/yvjggi76mh98" title="https://www.sendmyway.com/yvjggi76mh98" rel="nofollow target="_blank">https://www.sendmyway.com/yvjggi76mh98</a>
<a mirror href="http://pion.rghost.net/" title="http://pion.rghost.net/" rel="nofollow target="_blank">http://pion.rghost.net/</a>
<a mirror href="http://ge.tt/9M1x6VX2" title="http://ge.tt/9M1x6VX2" rel="nofollow target="_blank">http://ge.tt/9M1x6VX2</a>
<a mirror href="http://www.gamefront.com/files/25464315/prebuilt_with_cygwin_binary_exe_and_libs_full_fontconfig.7z" title="http://www.gamefront.com/files/25464315/prebuilt_with_cygwin_binary_exe_and_libs_full_fontconfig.7z" rel="nofollow target="_blank">http://www.gamefront.com/files/25464315/prebuilt_with_cygwin_binary_exe_and_libs_full_fontconfig.7z</a>
<a mirror href="http://www.speedyshare.com/file/jWufd/prebuilt_with_cygwin_binary_exe_and_libs_full_fontconfig.7z" title="http://www.speedyshare.com/file/jWufd/prebuilt_with_cygwin_binary_exe_and_libs_full_fontconfig.7z" rel="nofollow target="_blank">http://www.speedyshare.com/file/jWufd/prebuilt_with_cygwin_binary_exe_and_libs_full_fontconfig.7z</a>
<a mirror href="https://tusfiles.net/b9r9auowtq5d" title="https://tusfiles.net/b9r9auowtq5d" rel="nofollow target="_blank">https://tusfiles.net/b9r9auowtq5d</a>
<a mirror href="https://files.fm/u/b5j3xb7f" title="https://files.fm/u/b5j3xb7f" rel="nofollow target="_blank">https://files.fm/u/b5j3xb7f</a>
<a mirror href="https://userscloud.com/losp2537r0pe" title="https://userscloud.com/losp2537r0pe" rel="nofollow target="_blank">https://userscloud.com/losp2537r0pe</a>
</pre>


also the following GitHub repository is a mirror for the entire repository (pre-configured, pre-build binaries).
<a href="https://github.com/eladkarako/prebuilt-FontConfig-binary" target="_blank">https://github.com/eladkarako/prebuilt-FontConfig-binary</a>


the following CMD script make use of the built exe above to extract the PostScript-name of the font-file,
and rename the file to it, which makes a lot more meaningful name than what files name are usually named.

<pre>
@echo off

:loop
      ::-------------------------- has argument ?
      if ["%~1"]==[""] (
        echo done.
        goto end
      )
      ::-------------------------- argument exist ?
      if not exist %~s1 (
        echo error "%~1" does not exist in file-system.
      ) else (
        echo "%~1" exist
        if exist %~s1\\NUL (
          echo "%~1" is a directory
        ) else (
          for /f "tokens=*" %%a in ('call c:\\cygwin\\bin\\fc-query.exe %~s1 "--format=%%{postscriptname}" 2^>^&1') do ( 
            mv "%~s1" "%~dp1%^%%%a%~x1%"
          )
        )
      )
      ::--------------------------
      shift
      goto loop
      
      
:end

pause

::: ###########################################################################
::: ##                                                                       ##
::: ##  1. drag&drop ANY amount of font-files (TTF,..) over this batch file, ##
::: ##                                                                       ##
::: ##       - it will rename each one to a more meaningful name.            ##
::: ##       - currently using the "PostScriptName", it can be customised.   ##
::: ##       - drag&drop instead of directory - safe (inf. loops- never!)    ##
::: ##                                                                       ##
::: ##                                   Elad Karako [Feb 3, 2016]           ##
::: ##                                   https://icompile.eladkarako.com      ##
::: ###########################################################################

</pre>