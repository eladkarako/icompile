<blockquote>Some time ago I've wrote a way to increase the amount of UNDOs in Jetbrain's editors, using some hidden-switches editor located under help menu (<a href="https://icompile.eladkarako.com/increase-undo-jetbrains-webstorm-intellij/" target="_blank" title="Increase Undo - Jetbrains WebStorm IntelliJ">here it is..</a> 
</blockquote>

this is how to access it:

<img src="https://icompile.eladkarako.com/_uploads/2014/03/1.jpg" alt="_1" rem-width="411" rem-height="121" class="alignnone size-full wp-image-1029" />

<img src="https://icompile.eladkarako.com/_uploads/2014/03/2.jpg" alt="_2" rem-width="721" rem-height="165" class="alignnone size-full wp-image-1030" />

Apparently you can disable so much check-boxes there that it must have some helpful effect <em>(spoiler: it does)</em> here is a list of what I've disabled/enabled:
<pre>
uncheck
  actionSystem.assertFocusAccessFromEdt
  actionSystem.enableAbbreviations
  actionSystem.mouseGesturesEnabled
  actionSystem.win.suppressAlt
  actionSystem.win.suppressAlt.new
  actionSystem.xWindow.remove.focus.from.nonFocusable.popups
  compiler.process.32bit.vm.on.mac
  debugger.compiling.evaluator
  diagrams.rendering.no.cache
  editor.allow.multiple.carets
  editor.dumb.mode.available
  editor.injected.highlighting.enabled
  editor.richcopy.enable
  editor.smarterSelectionQuoting
  editor.use.new.tabs
  editor.use.scrollable.tabs
  enable.animation.on.dialogs
  enable.groovy.hotswap
  fix.jdk.alt.shortcuts
  focus.fix.lost.cursor
  GRADLE.system.in.process
  ide.appIcon.requestAttention
  ide.balloon.shadowEnabled
  ide.completion.autopopup.select.live.templates
  ide.consumeKnownToolkitBugs
  ide.expansion.hints.enabled
  ide.mac.disableMacScrollbars
  ide.new.welcom.screen
  ide.register.bundled.fonts
  ide.scratch.enabled
  ide.smart.horizontal.scrolling
  ide.x11.override.wm
  idea.fix.mac.env
  projectView.showHierarchyErrors
  psi.track.invalidation
  svn.use.svnkit.for.https.server.certificate.check
  vcs.show.colored.annotations
  vcs.showConsole
  window.jumplist
  wolf.the.problem.solver

check
  editor.disable.rtl
  editor.distraction.free.mode
  projectView.hide.dot.idea
  
</pre>
