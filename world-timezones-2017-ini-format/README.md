<!--more-->

<pre>
[TimeZone]
;
; Worldclock item format :
;
;    +09:30_b=Adelaide;0,50030300,60,50100200
;
; +  		polarity of time shift
; 09:30         timezone shift in format HH:MM
; _b 		(optional) there are not allowed more items with same name,
;		when there are more items with the same timezone shift use
;		some suffix like _a, _b ....
; Adelaide	list of cities belonging to this timezone divided by ","
;
; ;0,50030300,60,50100200	
;		optional timezone info, describes daylight saving time dates 
;		in the following format:
;
; 0,50030300	defines the time shift (0) and date region of normal time
; 60,50100200	defines the time shift (+1h) and date region of dayligt saving time
;
; structure date region number :
;  5 0 10 02 00
;  O D MM hh:mm
;
; Where D is the day of week (in this case 0 = sunday, 1 = monday...), O is the number
; of the occurence ( 1 = the first .. 5 = the last) of this day in month MM ( 10 = october ),
; and hh:mm is the time when standard time starts.
; Described number 50100200 points to a "last sunday of october, at 02:00"
;
;Kabul
+04:30=timezone.p0430

;Alaska
-09:00=timezone.m0900;0,10110200,60,20030200

;Kuwait, Riyadh
+03:00_a=timezone.p0300a

;Abu Dhabi, Muscat
+04:00_a=timezone.p0400a

;Baghdad
+03:00_b=timezone.p0300b;0,10100400,60,10040300

;Yerevan
+04:00_b=timezone.p0400b;0,50100300,60,50030200

;Atlantic Time (Canada)
-04:00_a=timezone.m0400a;0,10110200,60,20030200

;Darwin
+09:30_a=timezone.p0930a

;Canberra, Melbourne, Sydney
+10:00_a=timezone.p1000a;0,50030300,60,50100200

;Baku
+04:00_c=timezone.p0400c;0,50100500,60,50030400

;Azores
-01:00_a=timezone.m0100a;0,50100300,60,50030200

;Saskatchewan
-06:00_a=timezone.m0600a

;Cape Verde Is.
-01:00_b=timezone.m0100b

;Caucasus Standard Time
+04:00_d=timezone.p0400d

;Adelaide
+09:30_b=timezone.p0930b;0,50030300,60,50100200

;Central America
-06:00_b=timezone.m0600b

;Astana, Dhaka
+06:00_a=timezone.p0600a

;Manaus
-04:00_b=timezone.m0400b;0,50020000,60,10110000

;Belgrade, Bratislava, Budapest, Ljubljana, Prague
+01:00_a=timezone.p0100a;0,50100300,60,50030200

;Sarajevo, Skopje, Warsaw, Zagreb
+01:00_b=timezone.p0100b;0,50100300,60,50030200

;Magadan, Solomon Is., New Caledonia
+11:00=timezone.p1100

;Central Time (US & Canada)
-06:00_c=timezone.m0600c;0,10110200,60,20030200

;Guadalajara, Mexico City, Monterrey - New
-06:00_d=timezone.m0600d;0,50100200,60,10040200

;Beijing, Chongqing, Hong Kong, Urumqi
+08:00_a=timezone.p0800a

;International Date Line West
-12:00=timezone.m1200

;Nairobi
+03:00_c=timezone.p0300c

;Brisbane
+10:00_b=timezone.p1000b

;Minsk
+02:00_a=timezone.p0200a;0,50100300,60,50030200

;Brasilia
-03:00_a=timezone.m0300a;0,50020000,60,10110000

;Eastern Time (US & Canada)
-05:00_a=timezone.m0500a;0,10110200,60,20030200

;Cairo
+02:00_b=timezone.p0200b;0,54092359,60,54042359

;Ekaterinburg
+05:00_a=timezone.p0500a;0,50100300,60,50030200

;Fiji, Kamchatka, Marshall Is.
+12:00_a=timezone.p1200a

;Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius
+02:00_c=timezone.p0200c;0,50100400,60,50030300

;Tbilisi
+03:00_d=timezone.p0300d

;Dublin, Edinburgh, Lisbon, London
+00:00_a=timezone.p0000a;0,50100200,60,50030100

;Greenland
-03:00_b=timezone.m0300b;0,50100200,60,10040200

;Casablanca, Monrovia, Reykjavik
+00:00_b=timezone.p0000b

;Athens, Bucharest, Istanbul
+02:00_d=timezone.p0200d;0,50100400,60,50030300

;Hawaii
-10:00=timezone.m1000

;Chennai, Kolkata, Mumbai, New Delhi
+05:30_a=timezone.p0530a

;Tehran
+03:30=timezone.p0330

;Jerusalem
+02:00_e=timezone.p0200e;0,30090200,60,50030200

;Amman
+02:00_f=timezone.p0200f;0,55100100,60,55032359

;Seoul
+09:00_a=timezone.p0900a

;Guadalajara, Mexico City, Monterrey - Old
-06:00_e=timezone.m0600e;0,50100200,60,10040200

;Chihuahua, La Paz, Mazatlan - Old
-07:00_a=timezone.m0700a;0,50100200,60,10040200

;Mid-Atlantic
-02:00=timezone.m0200;0,50090200,60,50030200

;Beirut
+02:00_g=timezone.p0200g;0,56102359,60,56030000

;Montevideo
-03:00_c=timezone.m0300c;0,20030200,60,10100200

;Mountain Time (US & Canada)
-07:00_b=timezone.m0700b;0,10110200,60,20030200

;Chihuahua, La Paz, Mazatlan - New
-07:00_c=timezone.m0700c;0,50100200,60,10040200

;Yangon (Rangoon)
+06:30=timezone.p0630

;Almaty, Novosibirsk
+06:00_b=timezone.p0600b;0,50100300,60,50030200

;Windhoek
+02:00_h=timezone.p0200h;0,10090200,-60,10040200

;Kathmandu
+05:45=timezone.p0545

;Auckland, Wellington
+12:00_b=timezone.p1200b;0,10040300,60,50090200

;Newfoundland
-03:30=timezone.m0330;0,10110001,60,20030001

;Irkutsk, Ulaan Bataar
+08:00_b=timezone.p0800b;0,50100300,60,50030200

;Krasnoyarsk
+07:00_a=timezone.p0700a;0,50100300,60,50030200

;Santiago
-04:00_c=timezone.m0400c;0,26032359,60,26102359

;Pacific Time (US & Canada)
-08:00_a=timezone.m0800a;0,10110200,60,20030200

;Tijuana, Baja California
-08:00_b=timezone.m0800b;0,50100200,60,10040200

;Brussels, Copenhagen, Madrid, Paris
+01:00_c=timezone.p0100c;0,50100300,60,50030200

;Moscow, St. Petersburg, Volgograd
+03:00_e=timezone.p0300e;0,50100300,60,50030200

;Buenos Aires, Georgetown
-03:00_d=timezone.m0300d

;Bogota, Lima, Quito, Rio Branco
-05:00_b=timezone.m0500b

;Caracas, La Paz
-04:00_d=timezone.m0400d

;Midway Island, Samoa
-11:00=timezone.m1100

;Bangkok, Hanoi, Jakarta
+07:00_b=timezone.p0700b

;Kuala Lumpur, Singapore
+08:00_c=timezone.p0800c

;Harare, Pretoria
+02:00_i=timezone.p0200i

;Sri Jayawardenepura
+05:30_b=timezone.p0530b

;Taipei
+08:00_d=timezone.p0800d

;Hobart
+10:00_c=timezone.p1000c;0,50030300,60,10100200

;Osaka, Sapporo, Tokyo
+09:00_b=timezone.p0900b

;Nuku'alofa
+13:00=timezone.p1300

;Indiana (East)
-05:00_c=timezone.m0500c

;Arizona
-07:00_d=timezone.m0700d

;Vladivostok
+10:00_d=timezone.p1000d;0,50100300,60,50030200

;Perth
+08:00_e=timezone.p0800e;0,50030300,60,50100200

;West Central Africa
+01:00_d=timezone.p0100d

;Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna
+01:00_e=timezone.p0100e;0,50100300,60,50030200

;Islamabad, Karachi, Tashkent
+05:00_b=timezone.p0500b

;Guam, Port Moresby
+10:00_e=timezone.p1000e

;Yakutsk
+09:00_c=timezone.p0900c;0,50100300,60,50030200

</pre>