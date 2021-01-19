<!--more-->
(Edit..)

first:
about:config -> add/modify

<strong>Disable DNS Cache</strong>
network.dnsCacheExpiration integer 0
network.dnsCacheExpirationGracePeriod integer 0
network.dnsCacheEntries integer 0
network.http.use-cache boolean false
network.dns.disablePrefetch boolean true

<strong>Disable Disk and Memory Cache</strong>
browser.cache.disk.enable boolean false
browser.cache.memory.enable boolean false
browser.cache.disk.enable boolean false
browser.cache.disc.max_entry_size integer 0
browser.cache.disc.smart_size.enabled boolean false
browser.cache.disc.smart_size.first_run boolean false
browser.cache.disc.smart_size.use_old boolean false
browser.cache.disc_cache_ssl boolean false
browser.cache.memory.max_entry_size integer 0
browser.cache.disk.capacity integer 0
browser.cache.disk.max_entry_size integer 0
browser.cache.disk.smart_size.enabled boolean false
browser.cache.disk.smart_size_cached_value integer 0
browser.cache.disk_cache_ssl boolean false
browser.cache.offline.capacity integer 0
image.cache.size integer 0
media.cache_size integer 0


<strong>Disable HTML5 Offline Cache</strong>
browser.cache.offline.enable boolean false

<strong>Documents Are Always Fresh</strong>
browser.cache.check_doc_frequency integer 1 (Check for a new version every time a page is loaded).

<strong>Force Browser to Use Single-Peer Connection</strong>