<a href="https://icompile.eladkarako.com/_uploads/2014/12/geolocation.jpg"><img src="https://icompile.eladkarako.com/_uploads/2014/12/geolocation.jpg" alt="geolocation" width="272" height="185" class="alignright size-full wp-image-2186" /></a>


use either xml or json

<pre>
http://maps.googleapis.com/maps/api/elevation/json?locations=32.333493,34.854604&sensor=true
</pre>

<pre>
{
   "results" : [
      {
         "elevation" : 38.73394393920898,
         "location" : {
            "lat" : 32.333493,
            "lng" : 34.854604
         },
         "resolution" : 610.8129272460938
      }
   ],
   "status" : "OK"
}
</pre>

----------------------------

<pre>
http://maps.googleapis.com/maps/api/geocode/json?latlng=32.333493,34.854604&sensor=false
</pre>
<!--more-->
<pre>
{
   "results" : [
      {
         "address_components" : [
            {
               "long_name" : "32-40",
               "short_name" : "32-40",
               "types" : [ "street_number" ]
            },
            {
               "long_name" : "HaRav Kuk Street",
               "short_name" : "HaRav Kuk Street",
               "types" : [ "route" ]
            },
            {
               "long_name" : "Netanya",
               "short_name" : "Netanya",
               "types" : [ "locality", "political" ]
            },
            {
               "long_name" : "HaSharon",
               "short_name" : "HaSharon",
               "types" : [ "administrative_area_level_2", "political" ]
            },
            {
               "long_name" : "Center District",
               "short_name" : "Center District",
               "types" : [ "administrative_area_level_1", "political" ]
            },
            {
               "long_name" : "Israel",
               "short_name" : "IL",
               "types" : [ "country", "political" ]
            }
         ],
         "formatted_address" : "HaRav Kuk Street 32-40, Netanya, Israel",
         "geometry" : {
            "bounds" : {
               "northeast" : {
                  "lat" : 32.3343215,
                  "lng" : 34.85447
               },
               "southwest" : {
                  "lat" : 32.333231,
                  "lng" : 34.854272
               }
            },
            "location" : {
               "lat" : 32.3335267,
               "lng" : 34.8543443
            },
            "location_type" : "RANGE_INTERPOLATED",
            "viewport" : {
               "northeast" : {
                  "lat" : 32.3351252302915,
                  "lng" : 34.8557199802915
               },
               "southwest" : {
                  "lat" : 32.3324272697085,
                  "lng" : 34.8530220197085
               }
            }
         },
         "types" : [ "street_address" ]
      },
      {
         "address_components" : [
            {
               "long_name" : "Netanya",
               "short_name" : "Netanya",
               "types" : [ "locality", "political" ]
            },
            {
               "long_name" : "Israel",
               "short_name" : "IL",
               "types" : [ "country", "political" ]
            }
         ],
         "formatted_address" : "Netanya, Israel",
         "geometry" : {
            "bounds" : {
               "northeast" : {
                  "lat" : 32.3534569,
                  "lng" : 34.892539
               },
               "southwest" : {
                  "lat" : 32.256,
                  "lng" : 34.8285249
               }
            },
            "location" : {
               "lat" : 32.321458,
               "lng" : 34.853196
            },
            "location_type" : "APPROXIMATE",
            "viewport" : {
               "northeast" : {
                  "lat" : 32.3534569,
                  "lng" : 34.892539
               },
               "southwest" : {
                  "lat" : 32.256,
                  "lng" : 34.8285249
               }
            }
         },
         "types" : [ "locality", "political" ]
      },
      {
         "address_components" : [
            {
               "long_name" : "Maarav Hasharon",
               "short_name" : "Maarav Hasharon",
               "types" : [ "administrative_area_level_3", "political" ]
            },
            {
               "long_name" : "Israel",
               "short_name" : "IL",
               "types" : [ "country", "political" ]
            }
         ],
         "formatted_address" : "Maarav Hasharon, Israel",
         "geometry" : {
            "bounds" : {
               "northeast" : {
                  "lat" : 32.412602,
                  "lng" : 34.9827371
               },
               "southwest" : {
                  "lat" : 32.190986,
                  "lng" : 34.8091544
               }
            },
            "location" : {
               "lat" : 32.2976971,
               "lng" : 34.8844867
            },
            "location_type" : "APPROXIMATE",
            "viewport" : {
               "northeast" : {
                  "lat" : 32.412602,
                  "lng" : 34.9827371
               },
               "southwest" : {
                  "lat" : 32.190986,
                  "lng" : 34.8091544
               }
            }
         },
         "types" : [ "administrative_area_level_3", "political" ]
      },
      {
         "address_components" : [
            {
               "long_name" : "HaSharon",
               "short_name" : "HaSharon",
               "types" : [ "administrative_area_level_2", "political" ]
            },
            {
               "long_name" : "Center District",
               "short_name" : "Center District",
               "types" : [ "administrative_area_level_1", "political" ]
            },
            {
               "long_name" : "Israel",
               "short_name" : "IL",
               "types" : [ "country", "political" ]
            }
         ],
         "formatted_address" : "HaSharon, Israel",
         "geometry" : {
            "bounds" : {
               "northeast" : {
                  "lat" : 32.4126018,
                  "lng" : 35.051422
               },
               "southwest" : {
                  "lat" : 32.1909859,
                  "lng" : 34.8091543
               }
            },
            "location" : {
               "lat" : 32.3235643,
               "lng" : 34.9286096
            },
            "location_type" : "APPROXIMATE",
            "viewport" : {
               "northeast" : {
                  "lat" : 32.4126018,
                  "lng" : 35.051422
               },
               "southwest" : {
                  "lat" : 32.1909859,
                  "lng" : 34.8091543
               }
            }
         },
         "types" : [ "administrative_area_level_2", "political" ]
      },
      {
         "address_components" : [
            {
               "long_name" : "Center District",
               "short_name" : "Center District",
               "types" : [ "administrative_area_level_1", "political" ]
            },
            {
               "long_name" : "Israel",
               "short_name" : "IL",
               "types" : [ "country", "political" ]
            }
         ],
         "formatted_address" : "Center District, Israel",
         "geometry" : {
            "bounds" : {
               "northeast" : {
                  "lat" : 32.4126018,
                  "lng" : 35.051422
               },
               "southwest" : {
                  "lat" : 31.7571918,
                  "lng" : 34.66654279999999
               }
            },
            "location" : {
               "lat" : 31.9521108,
               "lng" : 34.906551
            },
            "location_type" : "APPROXIMATE",
            "viewport" : {
               "northeast" : {
                  "lat" : 32.4126018,
                  "lng" : 35.051422
               },
               "southwest" : {
                  "lat" : 31.7571918,
                  "lng" : 34.66654279999999
               }
            }
         },
         "types" : [ "administrative_area_level_1", "political" ]
      },
      {
         "address_components" : [
            {
               "long_name" : "Israel",
               "short_name" : "IL",
               "types" : [ "country", "political" ]
            }
         ],
         "formatted_address" : "Israel",
         "geometry" : {
            "bounds" : {
               "northeast" : {
                  "lat" : 33.33280500000001,
                  "lng" : 35.896244
               },
               "southwest" : {
                  "lat" : 29.4906463,
                  "lng" : 34.267387
               }
            },
            "location" : {
               "lat" : 31.046051,
               "lng" : 34.851612
            },
            "location_type" : "APPROXIMATE",
            "viewport" : {
               "northeast" : {
                  "lat" : 33.33280500000001,
                  "lng" : 35.896244
               },
               "southwest" : {
                  "lat" : 29.4906463,
                  "lng" : 34.267387
               }
            }
         },
         "types" : [ "country", "political" ]
      }
   ],
   "status" : "OK"
}
</pre>
