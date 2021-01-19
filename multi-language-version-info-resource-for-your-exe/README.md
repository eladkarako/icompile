Default is usually marked as 1033 (English language code),
Hebrew, for example is 1037.

<pre>
Value	Language
1025	Arabic (Saudi Arabia)
1026	Bulgarian
1027	Catalan
1028	Chinese (Taiwan)
1029	Czech
1030	Danish
1031	German (Standard)
1032	Greek
1033	English (United States)
1034	Spanish (Spain)
1035	Finnish
1036	French (Standard)
1037	Hebrew
1038	Hungarian
1039	Icelandic
1040	Italian (Standard)
1041	Japanese
1042	Korean
1043	Dutch
1044	Norwegian (Bokmål)
1045	Polish
1046	Portuguese (Brazil)
1047	Raeto (Romance)
1048	Romanian
1049	Russian
1050	Croatian
1051	Slovak
1052	Albanian
1053	Swedish
1054	Thai
1055	Turkish
1056	Urdu (Pakistan)
1057	Indonesian
1058	Ukranian
1059	Belarusian
1060	Slovenian
1061	Estonian
1062	Latvian
1063	Lithuanian
1065	Farsi
1066	Vietnamese
1069	Basque
1070	Sorbian
1071	Macedonian (FYROM)
1072	Sutu
1073	Tsonga
1074	Setsuana
1076	Xhosa
1077	Zulu
1078	Afrikaans
1080	Faeroese
1081	Hindi
1082	Maltese
1084	Gaelic (Scotland)
1085	Yiddish
1086	Malay (Malaysia)
2049	Arabic (Iraq)
2052	Chinese (PRC)
2055	German (Switzerland)
2057	English (United Kingdom)
2058	Spanish (Mexico)
2060	French (Belgium)
2064	Italian (Switzerland)
2067	Dutch (Belgium)
2070	Portuguese (Portugal)
2072	Romanian (Moldova)
2073	Russian (Moldova)
2077	Swedish (Finland)
3073	Arabic (Egypt)
3076	Chinese (Hong Kong SAR)
3079	German (Austrian)
3081	English (Australia)
3084	French (Canada)
3098	Serbian (Cyrillic)
4097	Arabic (Libya)
4100	Chinese (Singapore)
4103	German (Luxembourg)
4105	English (Canada)
4106	Spanish (Guatemala)
4108	French (Switzerland)
5121	Arabic (Algeria)
5127	German (Liechtenstein)
5129	English (New Zealand)
5130	Spanish (Costa Rica)
5132	French (Luxembourg)
6145	Arabic (Morocco)
6153	English (Ireland)
6154	Spanish (Panama)
7169	Arabic (Tunisia)
7177	English (South Africa)
7178	Spanish (Dominican Republic)
8193	Arabic (Oman)
8201	English (Jamaica)
8202	Spanish (Venezuela)
9217	Arabic (Yemen)
9226	Spanish (Columbia)
10241	Arabic (Syria)
10249	English (Belize)
10250	Spanish (Peru)
11265	Arabic (Jordan)
11273	English (Trinidad)
11274	Spanish (Argentina)
12289	Arabic (Lebanon)
12298	Spanish (Ecuador)
13313	Arabic (Kuwait)
13322	Spanish (Chile)
14337	Arabic (U.A.E.)
14346	Spanish (Uruguay)
15361	Arabic (Bahrain)
15370	Spanish (Paraguay)
16385	Arabic (Qatar)
16394	Spanish (Bolivia)
17418	Spanish (El Salvador)
18442	Spanish (Honduras)
19466	Spanish (Nicaragua)
20490	Spanish (Puerto Rico)
</pre>

Here is an example of the infamous Google-Update "service" (it really is just a piece of $hit!)

English
<pre>
1 VERSIONINFO
FILEVERSION 1,3,31,5
PRODUCTVERSION 1,3,31,5
FILEOS 0x40004
FILETYPE 0x1
{
BLOCK "StringFileInfo"
{
	BLOCK "040904b0"
	{
		VALUE "CompanyName", "Google Inc."
		VALUE "FileDescription", "Google Installer"
		VALUE "FileVersion", "1.3.31.5"
		VALUE "InternalName", "Google Update"
		VALUE "LegalCopyright", "Copyright 2007-2010 Google Inc."
		VALUE "OriginalFilename", "GoogleUpdate.exe"
		VALUE "ProductName", "Google Update"
		VALUE "ProductVersion", "1.3.31.5"
	}
}

BLOCK "VarFileInfo"
{
	VALUE "Translation", 0x0409 0x04B0
}
}

</pre>

Hebrew
<pre>
1 VERSIONINFO
FILEVERSION 1,3,31,5
PRODUCTVERSION 1,3,31,5
FILEOS 0x40004
FILETYPE 0x1
{
BLOCK "StringFileInfo"
{
	BLOCK "040d04e7"
	{
		VALUE "CompanyName", "Google Inc."
		VALUE "FileDescription", "Google Installer"
		VALUE "FileVersion", "1.3.31.5"
		VALUE "InternalName", "Google Update"
		VALUE "LegalCopyright", "Copyright 2007-2010 Google Inc.‎"
		VALUE "OriginalFilename", "GoogleUpdate.exe"
		VALUE "ProductName", "עדכון Google"
		VALUE "ProductVersion", "1.3.31.5"
	}
}

BLOCK "VarFileInfo"
{
	VALUE "Translation", 0x040D 0x04E7
}
}

</pre>

The entire resource collection as an .rc file: <a href="https://github.com/eladkarako/icompile/releases/download/latest/icompile.eladkarako.com_multi_language_example_of_version_info_resource_all_languages.rar">https://github.com/eladkarako/icompile/releases/download/latest/icompile.eladkarako.com_multi_language_example_of_version_info_resource_all_languages.rar</a>

<img src="https://icompile.eladkarako.com/_uploads/2016/11/icompile.eladkarako.com_multi_language_example_of_version_info_resource_from_reshack.png" alt="reshack multi-language resource (image)" width="882" height="565" />