<pre>
http://gdata.youtube.com/feeds/api/videos?v=2&alt=jsonc&max-results=2&start-index=1&vq=elad+karako
</pre>

will render the JSON output
<pre>
{
  "apiVersion": "2.1",
  "data": {
    "updated": "2015-03-28T21:32:42.183Z",
    "totalItems": 10,
    "startIndex": 1,
    "itemsPerPage": 2,
    "items": [{
      "id": "sBn2d-PN48k",
      "uploaded": "2015-03-22T05:02:58.000Z",
      "updated": "2015-03-22T05:02:58.000Z",
      "uploader": "karakoelad",
      "category": "Tech",
      "title": "LiteralJS by Eladkarako - A Free 1KB Cleverly Transform-Text Engine",
      "description": "a free of charge 1KB text-transforming JavaScript library, adds minimal markup to the page, and using CSS3 to set the textual content. this is the logo for the mini-project.",
      "thumbnail": {
        "sqDefault": "http://i.ytimg.com/vi/sBn2d-PN48k/default.jpg",
        "hqDefault": "http://i.ytimg.com/vi/sBn2d-PN48k/hqdefault.jpg"
      },
      "player": {
        "default": "http://www.youtube.com/watch?v=sBn2d-PN48k&feature=youtube_gdata_player",
        "mobile": "http://m.youtube.com/details?v=sBn2d-PN48k"
      },
      "content": {
        "5": "http://www.youtube.com/v/sBn2d-PN48k?version=3&f=videos&app=youtube_gdata",
        "1": "rtsp://r4---sn-cg07luez.c.youtube.com/CiILENy73wIaGQnJ483jd_YZsBMYDSANFEgGUgZ2aWRlb3MM/0/0/0/video.3gp",
        "6": "rtsp://r4---sn-cg07luez.c.youtube.com/CiILENy73wIaGQnJ483jd_YZsBMYESARFEgGUgZ2aWRlb3MM/0/0/0/video.3gp"
      },
      "duration": 12,
      "aspectRatio": "widescreen",
      "recorded": "2015-03-22",
      "commentCount": 0,
      "accessControl": {
        "comment": "allowed",
        "commentVote": "allowed",
        "videoRespond": "moderated",
        "rate": "allowed",
        "embed": "allowed",
        "list": "allowed",
        "autoPlay": "allowed",
        "syndicate": "allowed"
      }
    }, {
      "id": "pdYPJfW7Ov4",
      "uploaded": "2014-06-08T01:08:24.000Z",
      "updated": "2015-03-02T20:04:55.000Z",
      "uploader": "karakoelad",
      "category": "People",
      "title": "Outbrain Touch",
      "description": "our new generation of friendly widgets for mobile. alpha phase ver3. Karako/Outbrain Client Application Team.",
      "thumbnail": {
        "sqDefault": "http://i.ytimg.com/vi/pdYPJfW7Ov4/default.jpg",
        "hqDefault": "http://i.ytimg.com/vi/pdYPJfW7Ov4/hqdefault.jpg"
      },
      "player": {
        "default": "http://www.youtube.com/watch?v=pdYPJfW7Ov4&feature=youtube_gdata_player",
        "mobile": "http://m.youtube.com/details?v=pdYPJfW7Ov4"
      },
      "content": {
        "5": "http://www.youtube.com/v/pdYPJfW7Ov4?version=3&f=videos&app=youtube_gdata",
        "1": "rtsp://r1---sn-cg07luel.c.youtube.com/CiILENy73wIaGQn-Orv1JQ_WpRMYDSANFEgGUgZ2aWRlb3MM/0/0/0/video.3gp",
        "6": "rtsp://r1---sn-cg07luel.c.youtube.com/CiILENy73wIaGQn-Orv1JQ_WpRMYESARFEgGUgZ2aWRlb3MM/0/0/0/video.3gp"
      },
      "duration": 77,
      "aspectRatio": "widescreen",
      "rating": 5.0,
      "likeCount": "1",
      "ratingCount": 1,
      "viewCount": 10,
      "favoriteCount": 0,
      "commentCount": 0,
      "accessControl": {
        "comment": "allowed",
        "commentVote": "allowed",
        "videoRespond": "moderated",
        "rate": "allowed",
        "embed": "allowed",
        "list": "allowed",
        "autoPlay": "allowed",
        "syndicate": "allowed"
      }
    }]
  }
}
</pre>

<pre>
http://suggestqueries.google.com/complete/search?output=firefox&client=firefox&ds=yt&hl=en-US&q=elad
</pre>
will render a text file (<code>f.txt</code>) with the array of possible matches:
<pre>
["elad",["elad","elad peretz","elad levy","elad zabinsky","elad buzaglo","elad vaknin","elad david","elad shaer","elad naim","elad emek"]]
</pre>