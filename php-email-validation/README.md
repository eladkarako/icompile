<ul>
<li>
Uses the same RFC5322 regex on which FILTER_VALIDATE_EMAIL is based, but allows dotless domains
<a href="http://squiloople.com/2009/12/20/email-address-validation/">http://squiloople.com/2009/12/20/email-address-validation/</a>.
<pre><span style="color:#808030;">(</span><span style="color:#bb7977;">boolean</span><span style="color:#808030;">)</span><span style="color:#400000;">preg_match</span><span style="color:#808030;">(</span>
<span style="color:#000000;">&nbsp;&nbsp;</span><span style="color:#0000e6;">'/^(?!(?&gt;(?1)"?(?&gt;</span><span style="color:#0f69ff;">\\\\\\</span><span style="color:#0000e6;">[ -~]|[^"])"?(?1)){255,})(?!(?&gt;(?1)"?(?&gt;</span><span style="color:#0f69ff;">\\\\\\</span><span style="color:#0000e6;">[ -~]|[^"])"?(?1)){65,}@)'</span><span style="color:#000000;">      </span><span style="color:#808030;">.</span>
<span style="color:#000000;">&nbsp;&nbsp;</span><span style="color:#0000e6;">'((?&gt;(?&gt;(?&gt;((?&gt;(?&gt;(?&gt;\\x0D\\x0A)?[\\t ])+|(?&gt;[\\t ]*\\x0D\\x0A)?[\\t ]+)?)(\\((?&gt;(?2)'             </span><span style="color:#000000;">     </span><span style="color:#808030;">.</span>
<span style="color:#000000;">&nbsp;&nbsp;</span><span style="color:#0000e6;">'(?&gt;[\\x01-\\x08\\x0B\\x0C\\x0E-</span><span style="color:#0f69ff;">\\'</span><span style="color:#0000e6;">*-\\[\\]-\\x7F]|</span><span style="color:#0f69ff;">\\\\\\</span><span style="color:#0000e6;">[\\x00-\\x7F]|(?3)))*(?2)\\)))+(?2))|(?2))?)'</span><span style="color:#000000;">         </span><span style="color:#808030;">.</span>
<span style="color:#000000;">&nbsp;&nbsp;</span><span style="color:#0000e6;">'([!#-</span><span style="color:#0f69ff;">\\'</span><span style="color:#0000e6;">*+\\/-9=?^-~-]+|"(?&gt;(?2)(?&gt;[\\x01-\\x08\\x0B\\x0C\\x0E-!#-\\[\\]-\\x7F]|</span><span style="color:#0f69ff;">\\\\\\</span><span style="color:#0000e6;">[\\x00-\\x7F]))*'</span><span style="color:#000000;">       </span><span style="color:#808030;">.</span>
<span style="color:#000000;">&nbsp;&nbsp;</span><span style="color:#0000e6;">'(?2)")(?&gt;(?1)\\.(?1)(?4))*(?1)@(?!(?1)[a-z0-9-]{64,})(?1)(?&gt;([a-z0-9](?&gt;[a-z0-9-]*[a-z0-9])?)'</span><span style="color:#000000;">  </span><span style="color:#808030;">.</span>
<span style="color:#000000;">&nbsp;&nbsp;</span><span style="color:#0000e6;">'(?&gt;(?1)\\.(?!(?1)[a-z0-9-]{64,})(?1)(?5)){0,126}|\\[(?:(?&gt;IPv6:(?&gt;([a-f0-9]{1,4})(?&gt;:(?6)){7}'</span><span style="color:#000000;">   </span><span style="color:#808030;">.</span>
<span style="color:#000000;">&nbsp;&nbsp;</span><span style="color:#0000e6;">'|(?!(?:.*[a-f0-9][:\\]]){8,})((?6)(?&gt;:(?6)){0,6})?::(?7)?))|(?&gt;(?&gt;IPv6:(?&gt;(?6)(?&gt;:(?6)){5}:'</span><span style="color:#000000;">    </span><span style="color:#808030;">.</span>
<span style="color:#000000;">&nbsp;&nbsp;</span><span style="color:#0000e6;">'|(?!(?:.*[a-f0-9]:){6,})(?8)?::(?&gt;((?6)(?&gt;:(?6)){0,4}):)?))?(25[0-5]|2[0-4][0-9]|1[0-9]{2}'</span><span style="color:#000000;">    </span><span style="color:#808030;">.</span>
<span style="color:#000000;">&nbsp;&nbsp;</span><span style="color:#0000e6;">'|[1-9]?[0-9])(?&gt;\\.(?9)){3}))\\])(?1)$/isD'</span>
<span style="color:#000000;">&nbsp;&nbsp;</span><span style="color:#808030;">,</span>
<span style="color:#000000;">&nbsp;&nbsp;</span><span style="color:#797997;">$address</span>
<span style="color:#808030;">)</span><span style="color:#800080;">;</span>
</pre>
</li>
<li>
An older regex that doesn't need a recent PCRE
<pre><span style="color:#808030;">(</span><span style="color:#bb7977;">boolean</span><span style="color:#808030;">)</span><span style="color:#400000;">preg_match</span><span style="color:#808030;">(</span>
<span style="color:#000000;">&nbsp;&nbsp;</span><span style="color:#0000e6;">'/^(?!(?&gt;"?(?&gt;</span><span style="color:#0f69ff;">\\\\\\</span><span style="color:#0000e6;">[ -~]|[^"])"?){255,})(?!(?&gt;"?(?&gt;</span><span style="color:#0f69ff;">\\\\\\</span><span style="color:#0000e6;">[ -~]|[^"])"?){65,}@)(?&gt;'</span><span style="color:#000000;">                     </span><span style="color:#808030;">.</span>
<span style="color:#000000;">&nbsp;&nbsp;</span><span style="color:#0000e6;">'[!#-</span><span style="color:#0f69ff;">\\'</span><span style="color:#0000e6;">*+\\/-9=?^-~-]+|"(?&gt;(?&gt;[\\x01-\\x08\\x0B\\x0C\\x0E-!#-\\[\\]-\\x7F]|</span><span style="color:#0f69ff;">\\\\\\</span><span style="color:#0000e6;">[\\x00-\\xFF]))*")'</span><span style="color:#000000;">            </span><span style="color:#808030;">.</span>
<span style="color:#000000;">&nbsp;&nbsp;</span><span style="color:#0000e6;">'(?&gt;\\.(?&gt;[!#-</span><span style="color:#0f69ff;">\\'</span><span style="color:#0000e6;">*+\\/-9=?^-~-]+|"(?&gt;(?&gt;[\\x01-\\x08\\x0B\\x0C\\x0E-!#-\\[\\]-\\x7F]|</span><span style="color:#0f69ff;">\\\\\\</span><span style="color:#0000e6;">[\\x00-\\xFF]))*"))*'</span><span style="color:#000000;">  </span><span style="color:#808030;">.</span>
<span style="color:#000000;">&nbsp;&nbsp;</span><span style="color:#0000e6;">'@(?&gt;(?![a-z0-9-]{64,})(?&gt;[a-z0-9](?&gt;[a-z0-9-]*[a-z0-9])?)(?&gt;\\.(?![a-z0-9-]{64,})'</span><span style="color:#000000;">                </span><span style="color:#808030;">.</span>
<span style="color:#000000;">&nbsp;&nbsp;</span><span style="color:#0000e6;">'(?&gt;[a-z0-9](?&gt;[a-z0-9-]*[a-z0-9])?)){0,126}|\\[(?:(?&gt;IPv6:(?&gt;(?&gt;[a-f0-9]{1,4})(?&gt;:'</span><span style="color:#000000;">               </span><span style="color:#808030;">.</span>
<span style="color:#000000;">&nbsp;&nbsp;</span><span style="color:#0000e6;">'[a-f0-9]{1,4}){7}|(?!(?:.*[a-f0-9][:\\]]){8,})(?&gt;[a-f0-9]{1,4}(?&gt;:[a-f0-9]{1,4}){0,6})?'</span><span style="color:#000000;">          </span><span style="color:#808030;">.</span>
<span style="color:#000000;">&nbsp;&nbsp;</span><span style="color:#0000e6;">'::(?&gt;[a-f0-9]{1,4}(?&gt;:[a-f0-9]{1,4}){0,6})?))|(?&gt;(?&gt;IPv6:(?&gt;[a-f0-9]{1,4}(?&gt;:'</span><span style="color:#000000;">                   </span><span style="color:#808030;">.</span>
<span style="color:#000000;">&nbsp;&nbsp;</span><span style="color:#0000e6;">'[a-f0-9]{1,4}){5}:|(?!(?:.*[a-f0-9]:){6,})(?&gt;[a-f0-9]{1,4}(?&gt;:[a-f0-9]{1,4}){0,4})?'</span><span style="color:#000000;">             </span><span style="color:#808030;">.</span>
<span style="color:#000000;">&nbsp;&nbsp;</span><span style="color:#0000e6;">'::(?&gt;(?:[a-f0-9]{1,4}(?&gt;:[a-f0-9]{1,4}){0,4}):)?))?(?&gt;25[0-5]|2[0-4][0-9]|1[0-9]{2}'</span><span style="color:#000000;">             </span><span style="color:#808030;">.</span>
<span style="color:#000000;">&nbsp;&nbsp;</span><span style="color:#0000e6;">'|[1-9]?[0-9])(?&gt;\\.(?&gt;25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}))\\])$/isD'</span>
<span style="color:#000000;">&nbsp;&nbsp;</span><span style="color:#808030;">,</span>
<span style="color:#000000;">&nbsp;&nbsp;</span><span style="color:#797997;">$address</span>
<span style="color:#808030;">)</span><span style="color:#800080;">;</span>
</pre>
</li>
<li>
This is the pattern used in the HTML5 spec for validation of 'email' type form input elements.
<a href="http://www.whatwg.org/specs/web-apps/current-work/#e-mail-state-(type=email)">http://www.whatwg.org/specs/web-apps/current-work/#e-mail-state-(type=email)</a>
<pre>
<span style='color:#808030;'>(</span><span style='color:#bb7977;'>boolean</span><span style='color:#808030;'>)</span><span style='color:#400000;'>preg_match</span><span style='color:#808030;'>(</span>
<span style='color:#000000;'>&#xa0;&#xa0;</span><span style='color:#0000e6;'>'/^[a-zA-Z0-9.!#$%&amp;</span><span style='color:#0f69ff;'>\\'</span><span style='color:#0000e6;'>*+\\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}'</span><span style='color:#000000;'> </span><span style='color:#808030;'>.</span>
<span style='color:#000000;'>&#xa0;&#xa0;</span><span style='color:#0000e6;'>'[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/sD'</span>
<span style='color:#000000;'>&#xa0;&#xa0;</span><span style='color:#808030;'>,</span>
<span style='color:#000000;'>&#xa0;&#xa0;</span><span style='color:#797997;'>$address</span>
<span style='color:#808030;'>)</span><span style='color:#800080;'>;</span>
</pre>
</li>
<li>
No PCRE! Do something _very_ approximate!
Check the address is 3 chars or longer and contains an @ that's not the first or last char.
<pre><span style='color:#400000;'>strlen</span><span style='color:#808030;'>(</span><span style='color:#797997;'>$address</span><span style='color:#808030;'>)</span><span style='color:#000000;'>       </span><span style='color:#808030;'>&gt;</span><span style='color:#808030;'>=</span><span style='color:#000000;'>   </span><span style='color:#008c00;'>3</span><span style='color:#000000;'>                       </span><span style='color:#808030;'>&amp;</span><span style='color:#808030;'>&amp;</span>
<span style='color:#400000;'>strpos</span><span style='color:#808030;'>(</span><span style='color:#797997;'>$address</span><span style='color:#808030;'>,</span><span style='color:#000000;'> </span><span style='color:#0000e6;'>'@'</span><span style='color:#808030;'>)</span><span style='color:#000000;'>  </span><span style='color:#808030;'>&gt;</span><span style='color:#808030;'>=</span><span style='color:#000000;'>   </span><span style='color:#008c00;'>1</span><span style='color:#000000;'>                       </span><span style='color:#808030;'>&amp;</span><span style='color:#808030;'>&amp;</span>
<span style='color:#400000;'>strpos</span><span style='color:#808030;'>(</span><span style='color:#797997;'>$address</span><span style='color:#808030;'>,</span><span style='color:#000000;'> </span><span style='color:#0000e6;'>'@'</span><span style='color:#808030;'>)</span><span style='color:#000000;'>  </span><span style='color:#808030;'>!</span><span style='color:#808030;'>=</span><span style='color:#808030;'>=</span><span style='color:#000000;'>  </span><span style='color:#808030;'>(</span><span style='color:#400000;'>strlen</span><span style='color:#808030;'>(</span><span style='color:#797997;'>$address</span><span style='color:#808030;'>)</span><span style='color:#000000;'> </span><span style='color:#808030;'>-</span><span style='color:#000000;'> </span><span style='color:#008c00;'>1</span><span style='color:#808030;'>)</span>
</pre>
</li>
<li>
And, good old email validation (which gets updated every PHP version, so it is not "so bad")
<pre><span style='color:#808030;'>(</span><span style='color:#bb7977;'>boolean</span><span style='color:#808030;'>)</span><span style='color:#000000;'>filter_var</span><span style='color:#808030;'>(</span><span style='color:#797997;'>$address</span><span style='color:#808030;'>,</span><span style='color:#000000;'> FILTER_VALIDATE_EMAIL</span><span style='color:#808030;'>)</span><span style='color:#800080;'>;</span>
</pre>
</li>
</ul>