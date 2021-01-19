<img src="https://icompile.eladkarako.com/_uploads/2016/03/icompile.eladkarako.com_2016-03-06_021628.jpg" alt="icompile.eladkarako.com_2016-03-06_021628" rem-width="401" rem-height="426" class="alignnone size-full wp-image-4864" />

Enterprise / Knox / Folder Isolation Related-Packages
That You Should Disable After Choosing "Disable Knox" From Synapse's Security-Menu.

successfully disabled by Synapse (<a href="https://play.google.com/store/apps/details?id=com.af.synapse" target="_blank">om.af.synapse</a>)
<pre>
com.google.android.talk
com.policydm
com.samsung.android.app.watchmanager
com.samsung.android.dlp.service
com.samsung.android.securitylogagent
com.samsung.klmsagent
com.samsung.knox.appsupdateagent
com.samsung.knox.rcp.components
com.sec.android.emergencylauncher
com.sec.enterprise.knox.attestation
com.sec.enterprise.knox.cloudmdm.smdms
com.sec.enterprise.knox.myknoxsetupwizard
com.sec.knox.foldercontainer
com.sec.knox.knoxsetupwizardclient
com.sec.knox.switcher
</pre>

need to do it manually
<pre>
com.samsung.aasaservice
com.samsung.android.bbc.bbcagent
com.samsung.android.dlp.service
com.samsung.knox.knoxtrustagent
com.samsung.knox.kss
com.sds.emm.dmmonitor
com.sec.enterprise.app.knoxvpn
com.sec.enterprise.mdm.services.simpin
com.sec.enterprise.mdm.vpn
com.sec.esdk.elm
com.sec.knox.app.container
com.sec.knox.bridge
com.sec.knox.containeragent
com.sec.knox.containeragent2
com.sec.knox.eventsmanager
com.sec.knox.knoxsetupwizardclient
com.sec.knox.packageverifier
com.sec.knox.seandroid
com.sec.knox.setupwizardstub
com.sec.knox.shortcutsms
com.sec.knox.store
com.sec.knox.switchknox
com.sec.knox.switchknoxI
com.sec.knox.switchknoxII
com.sec.knox.switchknoxIII
com.sec.knox.switchknoxIIV
com.sec.knox.switchknoxIV
com.sec.knox.switchknoxV
com.sec.knox.switchknoxVI
com.sec.knox.switchknoxVII
com.skms.android.agent
com.samsung.android.irm.service
</pre>

- activate USB debugging.
- connect your phone using USB (or network..) run <code>adb devices</code>
- run <code>adb shell</code>
-  -  run <code>su</code> [ENTER]
-  -  run <code>pm disable ___package name____</code>
      (replace "___package name____" with the package-names above)
-  -  run <code>exit</code> and again <code>exit</code> until you'll be back to your Windows's CMD (or if you're using *nix -- the terminal..).
-  -  - if you are using TWRP you can use its terminal for an extra clean results (before first-boot!)

- reboot your device.