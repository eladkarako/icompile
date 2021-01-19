This solves it in-case you do not want to wait..
<!--more-->

Go Into SQL-Admin
- table: <code>wp_options</code>
- change the value of <code>core_updater.lock</code> to something in the far past (<code>1468200000</code> will do).
- do the same for <code>auto_updater.lock</code>

<img src="https://icompile.eladkarako.com/_uploads/2016/07/icompile.eladkarako.com_wordpress_updates_unlock.gif" alt="icompile.eladkarako.com_wordpress_updates_unlock" width="1172" height="528" />

