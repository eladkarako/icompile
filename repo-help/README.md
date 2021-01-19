<!--more-->
<a anchor name="anchor_top"></a>Jump Menu:
<ol>
<li><a target="_self" href="#anchor_minimal">minimal</a></li>
<li><a target="_self" href="#anchor_all">all</a></li>
<li><a target="_self" href="#anchor_sync">sync</a>
<ul><li>example:
<pre>repo sync --force-broken --force-sync --jobs=32 --fetch-submodules --no-repo-verify</pre>
</li></ul>
</li>
<li><a href="#anchor_init">init</a>
<ul><li>example:
<pre>
mkdir twrp6
cd twrp6/
repo init -u git://github.com/lj50036/platform_manifest_twrp_omni.git -b twrp-6.0
</pre>
</li></ul>
</li>
</ol>

<hr />

<a anchor target="_self" name="anchor_minimal"   href="#anchor_top" title="click to go up ⇧">minimal</a>:
<pre>
usage: repo COMMAND [ARGS]
The most commonly used repo commands are:
  abandon        Permanently abandon a development branch
  branch         View current topic branches
  branches       View current topic branches
  checkout       Checkout a branch for development
  cherry-pick    Cherry-pick a change.
  diff           Show changes between commit and working tree
  diffmanifests  Manifest diff utility
  download       Download and checkout a change
  grep           Print lines matching a pattern
  info           Get info on the manifest branch, current branch or unmerged bra
  init           Initialize repo in the current directory
  list           List projects and their associated directories
  overview       Display overview of unmerged project branches
  prune          Prune (delete) already merged topics
  rebase         Rebase local branches on upstream branch
  smartsync      Update working tree to the latest known good revision
  stage          Stage file(s) for commit
  start          Start a new branch for development
  status         Show the working tree status
  sync           Update working tree to the latest revision
  upload         Upload changes for code review
See 'repo help <command />' for more information on a specific command.
See 'repo help --all' for a complete list of recognized commands.
</pre>

<hr />

<a anchor target="_self" name="anchor_all"   href="#anchor_top" title="click to go up ⇧">all</a>:
<pre>
usage: repo COMMAND [ARGS]
The complete list of recognized repo commands are:
  abandon        Permanently abandon a development branch
  branch         View current topic branches
  branches       View current topic branches
  checkout       Checkout a branch for development
  cherry-pick    Cherry-pick a change.
  diff           Show changes between commit and working tree
  diffmanifests  Manifest diff utility
  download       Download and checkout a change
  forall         Run a shell command in each project
  gitc-delete    Delete a GITC Client.
  gitc-init      Initialize a GITC Client.
  grep           Print lines matching a pattern
  help           Display detailed help on a command
  info           Get info on the manifest branch, current branch or unmerged branches
  init           Initialize repo in the current directory
  list           List projects and their associated directories
  manifest       Manifest inspection utility
  overview       Display overview of unmerged project branches
  prune          Prune (delete) already merged topics
  rebase         Rebase local branches on upstream branch
  selfupdate     Update repo to the latest version
  smartsync      Update working tree to the latest known good revision
  stage          Stage file(s) for commit
  start          Start a new branch for development
  status         Show the working tree status
  sync           Update working tree to the latest revision
  upload         Upload changes for code review
  version        Display the version of repo
See 'repo help <command />' for more information on a specific command.
</pre>

<hr />

<a anchor target="_self" name="anchor_sync"   href="#anchor_top" title="click to go up ⇧">sync</a>:
<pre>
Summary
-------
Update working tree to the latest revision

Usage: repo sync [<project>...]

Options:
  -h, --help            show this help message and exit
  -f, --force-broken    continue sync even if a project fails to sync
  --force-sync          overwrite an existing git directory if it needs to
                        point to a different object directory. WARNING: this
                        may cause loss of data
  -l, --local-only      only update working tree, don't fetch
  -n, --network-only    fetch only, don't update working tree
  -d, --detach          detach projects back to manifest revision
  -c, --current-branch  fetch only current branch from server
  -q, --quiet           be more quiet
  -j JOBS, --jobs=JOBS  projects to fetch simultaneously (default 4)
  -m NAME.xml, --manifest-name=NAME.xml
                        temporary manifest to use for this sync
  --no-clone-bundle     disable use of /clone.bundle on HTTP/HTTPS
  -u MANIFEST_SERVER_USERNAME, --manifest-server-username=MANIFEST_SERVER_USERNAME
                        username to authenticate with the manifest server
  -p MANIFEST_SERVER_PASSWORD, --manifest-server-password=MANIFEST_SERVER_PASSWORD
                        password to authenticate with the manifest server
  --fetch-submodules    fetch submodules from server
  --no-tags             don't fetch tags
  --optimized-fetch     only fetch projects fixed to sha1 if revision does not
                        exist locally
  -s, --smart-sync      smart sync using manifest from a known good build
  -t SMART_TAG, --smart-tag=SMART_TAG
                        smart sync using manifest from a known tag

  repo Version options:
    --no-repo-verify    do not verify repo source code

Description
-----------
The 'repo sync' command synchronizes local project directories with the
remote repositories specified in the manifest. If a local project does
not yet exist, it will clone a new local directory from the remote
repository and set up tracking branches as specified in the manifest. If
the local project already exists, 'repo sync' will update the remote
branches and rebase any new local changes on top of the new remote
changes.

'repo sync' will synchronize all projects listed at the command line.
Projects can be specified either by name, or by a relative or absolute
path to the project's local directory. If no projects are specified,
'repo sync' will synchronize all projects listed in the manifest.

The -d/--detach option can be used to switch specified projects back to
the manifest revision. This option is especially helpful if the project
is currently on a topic branch, but the manifest revision is temporarily
needed.

The -s/--smart-sync option can be used to sync to a known good build as
specified by the manifest-server element in the current manifest. The
-t/--smart-tag option is similar and allows you to specify a custom
tag/label.

The -u/--manifest-server-username and -p/--manifest-server-password
options can be used to specify a username and password to authenticate
with the manifest server when using the -s or -t option.

If -u and -p are not specified when using the -s or -t option, 'repo
sync' will attempt to read authentication credentials for the manifest
server from the user's .netrc file.

'repo sync' will not use authentication credentials from -u/-p or .netrc
if the manifest server specified in the manifest file already includes
credentials.

The -f/--force-broken option can be used to proceed with syncing other
projects if a project sync fails.

The --force-sync option can be used to overwrite existing git
directories if they have previously been linked to a different object
direcotry. WARNING: This may cause data to be lost since refs may be
removed when overwriting.

The --no-clone-bundle option disables any attempt to use
$URL/clone.bundle to bootstrap a new Git repository from a resumeable
bundle file on a content delivery network. This may be necessary if
there are problems with the local Python HTTP client or proxy
configuration, but the Git binary works.

The --fetch-submodules option enables fetching Git submodules of a
project from server.

The -c/--current-branch option can be used to only fetch objects that
are on the branch specified by a project's revision.

The --optimized-fetch option can be used to only fetch projects that are
fixed to a sha1 revision if the sha1 revision does not already exist
locally.

SSH Connections
---------------
If at least one project remote URL uses an SSH connection (ssh://,
git+ssh://, or user@host:path syntax) repo will automatically enable the
SSH ControlMaster option when connecting to that host. This feature
permits other projects in the same 'repo sync' session to reuse the same
SSH tunnel, saving connection setup overheads.

To disable this behavior on UNIX platforms, set the GIT_SSH environment
variable to 'ssh'. For example:

  export GIT_SSH=ssh
  repo sync

  Compatibility
  ~~~~~~~~~~~~~
This feature is automatically disabled on Windows, due to the lack of
UNIX domain socket support.

This feature is not compatible with url.insteadof rewrites in the user's
~/.gitconfig. 'repo sync' is currently not able to perform the rewrite
early enough to establish the ControlMaster tunnel.

If the remote SSH daemon is Gerrit Code Review, version 2.0.10 or later
is required to fix a server side protocol bug.
</project></pre>

<hr />

<a anchor target="_self" name="anchor_init"   href="#anchor_top" title="click to go up ⇧">init</a>:
<pre>
Summary
-------
Initialize repo in the current directory

Usage: repo init [options]

Options:
  -h, --help            show this help message and exit

  Logging options:
    -q, --quiet         be quiet

  Manifest options:
    -u URL, --manifest-url=URL
                        manifest repository location
    -b REVISION, --manifest-branch=REVISION
                        manifest branch or revision
    -m NAME.xml, --manifest-name=NAME.xml
                        initial manifest file
    --mirror            create a replica of the remote repositories rather
                        than a client working directory
    --reference=DIR     location of mirror directory
    --depth=DEPTH       create a shallow clone with given depth; see git clone
    --archive           checkout an archive instead of a git repository for
                        each project. See git archive.
    -g GROUP, --groups=GROUP
                        restrict manifest projects to ones with specified
                        group(s) [default|all|G1,G2,G3|G4,-G5,-G6]
    -p PLATFORM, --platform=PLATFORM
                        restrict manifest projects to ones with a specified
                        platform group [auto|all|none|linux|darwin|...]

  repo Version options:
    --repo-url=URL      repo repository location
    --repo-branch=REVISION
                        repo branch or revision
    --no-repo-verify    do not verify repo source code

  Other options:
    --config-name       Always prompt for name/e-mail

Description
-----------
The 'repo init' command is run once to install and initialize repo. The
latest repo source code and manifest collection is downloaded from the
server and is installed in the .repo/ directory in the current working
directory.

The optional -b argument can be used to select the manifest branch to
checkout and use. If no branch is specified, master is assumed.

The optional -m argument can be used to specify an alternate manifest to
be used. If no manifest is specified, the manifest default.xml will be
used.

The --reference option can be used to point to a directory that has the
content of a --mirror sync. This will make the working directory use as
much data as possible from the local reference directory when fetching
from the server. This will make the sync go a lot faster by reducing
data traffic on the network.

Switching Manifest Branches
---------------------------
To switch to another manifest branch, `repo init -b otherbranch` may be
used in an existing client. However, as this only updates the manifest,
a subsequent `repo sync` (or `repo sync -d`) is necessary to update the
working directory files.
</pre>