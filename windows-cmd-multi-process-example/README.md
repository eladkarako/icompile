break a long, sequential task, into multi-process higher CPU-usage, quick solution.

example - download a long list of playlist very quick.

you are going to have 2 cmd files in the same folder.
make sure you have wget (either in the same folder or in your %path% environment variable).

file name: playlist__start_all.cmd
file content:
<pre>
::@echo off
echo I am the runner

set sURL=http://listen.di.fm/public3/ambient.pls              ^
         http://listen.di.fm/public3/breaks.pls               ^
         http://listen.di.fm/public3/chillout.pls             ^
         http://listen.di.fm/public3/chilloutdreams.pls       ^
         http://listen.di.fm/public3/chiptunes.pls            ^
         http://listen.di.fm/public3/classiceurodance.pls     ^
         http://listen.di.fm/public3/classictechno.pls        ^
         http://listen.di.fm/public3/classictrance.pls        ^
         http://listen.di.fm/public3/classicvocaltrance.pls   ^
         http://listen.di.fm/public3/club.pls                 ^
         http://listen.di.fm/public3/clubdubstep.pls          ^
         http://listen.di.fm/public3/cosmicdowntempo.pls      ^
         http://listen.di.fm/public3/deephouse.pls            ^
         http://listen.di.fm/public3/deepnudisco.pls          ^
         http://listen.di.fm/public3/discohouse.pls           ^
         http://listen.di.fm/public3/drumandbass.pls          ^
         http://listen.di.fm/public3/dubstep.pls              ^
         http://listen.di.fm/public3/electro.pls              ^
         http://listen.di.fm/public3/epictrance.pls           ^
         http://listen.di.fm/public3/eurodance.pls            ^
         http://listen.di.fm/public3/funkyhouse.pls           ^
         http://listen.di.fm/public3/futuresynthpop.pls       ^
         http://listen.di.fm/public3/goapsy.pls               ^
         http://listen.di.fm/public3/handsup.pls              ^
         http://listen.di.fm/public3/hardcore.pls             ^
         http://listen.di.fm/public3/harddance.pls            ^
         http://listen.di.fm/public3/hardstyle.pls            ^
         http://listen.di.fm/public3/house.pls                ^
         http://listen.di.fm/public3/latinhouse.pls           ^
         http://listen.di.fm/public3/liquiddnb.pls            ^
         http://listen.di.fm/public3/lounge.pls               ^
         http://listen.di.fm/public3/minimal.pls              ^
         http://listen.di.fm/public3/oldschoolacid.pls        ^
         http://listen.di.fm/public3/progressive.pls          ^
         http://listen.di.fm/public3/progressivepsy.pls       ^
         http://listen.di.fm/public3/psychill.pls             ^
         http://listen.di.fm/public3/soulfulhouse.pls         ^
         http://listen.di.fm/public3/spacemusic.pls           ^
         http://listen.di.fm/public3/techhouse.pls            ^
         http://listen.di.fm/public3/techno.pls               ^
         http://listen.di.fm/public3/trance.pls               ^
         http://listen.di.fm/public3/tribalhouse.pls          ^
         http://listen.di.fm/public3/ukgarage.pls             ^
         http://listen.di.fm/public3/vocalchillout.pls        ^
         http://listen.di.fm/public3/vocaltrance.pls          ^
         http://somafm.com/480min.pls                         ^
         http://somafm.com/beatblender.pls                    ^
         http://somafm.com/bootliquor.pls                     ^
         http://somafm.com/brfm.mp3                           ^
         http://somafm.com/cliqhop.pls                        ^
         http://somafm.com/covers.pls                         ^
         http://somafm.com/digitalis.pls                      ^
         http://somafm.com/dronezone.pls                      ^
         http://somafm.com/dubstep.pls                        ^
         http://somafm.com/groovesalad.pls                    ^
         http://somafm.com/illstreet.pls                      ^
         http://somafm.com/indiepop.pls                       ^
         http://somafm.com/lush.pls                           ^
         http://somafm.com/missioncontrol.pls                 ^
         http://somafm.com/poptron.pls                        ^
         http://somafm.com/sf1033.pls                         ^
         http://somafm.com/sonicuniverse.pls                  ^
         http://somafm.com/spacestation.pls                   ^
         http://somafm.com/suburbsofgoa.pls                   ^
         http://somafm.com/sxfm.pls                           ^
         http://somafm.com/tags.pls                           ^
         http://somafm.com/u80s.pls                           ^
         http://www.di.fm/mp3/djmixes.pls                     ^
         http://www.fresh.fm/media/audio/ListenHigh.pls       ^
         http://www.sky.fm/mp3/altrock.pls                    ^
         http://www.sky.fm/mp3/beatles.pls                    ^
         http://www.sky.fm/mp3/bossanova.pls                  ^
         http://www.sky.fm/mp3/christian.pls                  ^
         http://www.sky.fm/mp3/classical.pls                  ^
         http://www.sky.fm/mp3/classicrap.pls                 ^
         http://www.sky.fm/mp3/classicrock.pls                ^
         http://www.sky.fm/mp3/country.pls                    ^
         http://www.sky.fm/mp3/datempolounge.pls              ^
         http://www.sky.fm/mp3/guitar.pls                     ^
         http://www.sky.fm/mp3/hit70s.pls                     ^
         http://www.sky.fm/mp3/indierock.pls                  ^
         http://www.sky.fm/mp3/jazz.pls                       ^
         http://www.sky.fm/mp3/lovemusic.pls                  ^
         http://www.sky.fm/mp3/newage.pls                     ^
         http://www.sky.fm/mp3/oldies.pls                     ^
         http://www.sky.fm/mp3/pianojazz.pls                  ^
         http://www.sky.fm/mp3/rootsreggae.pls                ^
         http://www.sky.fm/mp3/salsa.pls                      ^
         http://www.sky.fm/mp3/smoothjazz.pls                 ^
         http://www.sky.fm/mp3/solopiano.pls                  ^
         http://www.sky.fm/mp3/soundtracks.pls                ^
         http://www.sky.fm/mp3/the80s.pls                     ^
         http://www.sky.fm/mp3/tophits.pls                    ^
         http://www.sky.fm/mp3/uptemposmoothjazz.pls          ^
         http://www.sky.fm/mp3/urbanjamz.pls                  ^
         http://www.sky.fm/mp3/world.pls                      ^
         http://www.sky.fm/wma/altrock.asx                    ^
         http://www.sky.fm/wma/classicrock.asx                ^
         http://www.sky.fm/wma/indierock.asx                  ^
         http://www.sky.fm/wma/salsa.asx                      ^
         http://www.somafm.com/secretagent.pls

::-----------------------------------------------
:: init stage.
:: remove old files
    attrib -H .\\*.pls                              >nul
    attrib -H .\\*.asx                              >nul

    if exist .\\*.pls  del /f /q .\\*.pls            >nul
    if exist .\\*.asx  del /f /q .\\*.asx            >nul




for %%e in (%sURL%) do (
    ::parallel diffrent process. and continue.
    start /min /low "cmd /c "call playlist__file_downloader.cmd %%e""
)
</pre>


file name: playlist__file_downloader.cmd
file content:
<pre>
@echo off

set sUserAgent="Mozilla/5.0 (Windows NT 5.2; WOW64) AppleWebKit/537.1 (KHTML, like Gecko) Chrome/21.0.1180.89 Safari/537.1"

wget --directory-prefix=. --debug --user-agent=%sUserAgent% %1



::-------------------------------------------
:: file name fix
if exist "dubstep.pls.1"   ren "dubstep.pls.1"   "dubstep2.pls"   >nul
if exist "the80s.pls"      ren "the80s.pls"      "80s.pls"        >nul
if exist "hit70s.pls"      ren "hit70s.pls"      "70s.pls"        >nul
if exist "mpg128.pls"      ren "mpg128.pls"      "woxy.pls"       >nul
if exist "ListenHigh.pls"  ren "ListenHigh.pls"  "freshfm.pls"    >nul

:: set file-attribute hidden.
:::::: attrib +H .\\*.pls
:::::: attrib +H .\\*.asx

exit
</pre>

now you execute "playlist__start_all.cmd" and the long list of files will be break (space separated)
and for each file there will be a secondary batch execution of "playlist__file_downloader.cmd" with the file name as argument.
