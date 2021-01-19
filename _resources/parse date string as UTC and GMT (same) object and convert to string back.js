new Date(
  Date.UTC.apply(null,
    '2008-08-14 03:13:29'.replace(/[\s\-\:\.]+/g, "_").split("_")
  )
).toUTCString()
//"Sun, 14 Sep 2008 03:13:29 GMT"



//xxxxxxxxxxxxxxxxxxxxxxx another easier (but not advisable due to Mozilla) way is to parse:

new Date(
  Date.parse(
    '2008-08-14 03:13:29 GMT'
  )
).toUTCString()

//"Thu, 14 Aug 2008 03:13:29 GMT"

//xxxxxxxxxxxxx do not use it since the month and the day are often switched so you get wrong date, Date.UTC uses explicitly a place in the array for day and month so it won't happen there...