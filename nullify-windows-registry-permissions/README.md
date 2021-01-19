While <a href="https://icompile.eladkarako.com/nullify-windows-ownership-and-permissions/">https://icompile.eladkarako.com/nullify-windows-ownership-and-permissions/</a> deals with changing the permissions and ownership of the Windows file-system, 

You might want to null'ify the security of the Window registry as well, 
for the same reason to change the permissions of the file-system to be more permissive, 
if you're a admin-single-user, you might as well make sure you have full-control over
all the data in the registry.

Open your registry-editor, either <code>registry</code> or <a href="http://www.torchsoft.com">Registry-Workshop</a> as admin.

right click <code>HKEY_CLASSES_ROOT</code>, select permissions, advanced, 
go to <strong>Owner</strong> tab, click the button "Other users or groups", 
write <strong><code>Everyone</code></strong> and click OK.
Check ON the checkbox that is saing <strong>Replace owner on subcontainers and objects</strong>.
Click OK, and then OK again, right-click again and enter permissions, 
again - advanced, add those groups and users, with full control, to "this key and subkeys":
System, Restricted, Users, Everyone, Administrators, <em>Elad</em> (change it to <strong>your</strong> personal user on the machine).

Uncheck the checkbox "Include inheritable permissions from this object's parents" (click <strong>Add</strong> when a dialong will popup, if any)

Check ON the "Replace all child objects permissions with inheritable permissions from this object".

Click OK, wait, OK again to close the permission dialong and do the same for HKEY_CURRENT_USER, HKEY_LOCAL_MACHINE and HKEY_USERS. you can skip HKEY_CURRENT_CONFIG since it's a shortcut.

You now need to restart your computer and you might have issues with some services not running properly, 
for example <code>Base Filtering Engine</code>, if it happens you need to go back to your registry editor and do that again (first taking ownership with "Everyone" again!). restart the computer again.

Here are some screenshots that can help.

<img src="https://icompile.eladkarako.com/_uploads/nullify_registry_permissions_1_registry.png" /> <br/>
<img src="https://icompile.eladkarako.com/_uploads/nullify_registry_permissions_2_right_click_permissions.png" /> <br/>
<img src="https://icompile.eladkarako.com/_uploads/nullify_registry_permissions_3_no_inherit_apply_all.png" /> <br/>
<img src="https://icompile.eladkarako.com/_uploads/nullify_registry_permissions_4_new_user_full_control_this_key_and_subkeys.png" /> <br/>
<img src="https://icompile.eladkarako.com/_uploads/nullify_registry_permissions_5_fix_existing_entries.png" /> <br/>
<img src="https://icompile.eladkarako.com/_uploads/nullify_registry_permissions_6_best_with_registryworkshop.png" /> <br/>
