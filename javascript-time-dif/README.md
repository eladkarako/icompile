<pre>
var time_diff = (function(MINUTE_IN_SECONDS, HOUR_IN_SECONDS, DAY_IN_SECONDS, WEEK_IN_SECONDS, YEAR_IN_SECONDS){
  'use strict';

  function _n(single, plural, number) {
    return 1 === number ? single : plural;
  }

  function time_diff(from, to) {
    var  diff, since, minutes, hours, days, weeks, months, years;

    to = "number" === typeof to ? to : Number(new Date());

    diff = Math.floor(to - from);
    since = '';

    if(diff < HOUR_IN_SECONDS){
      minutes = Math.round(diff / MINUTE_IN_SECONDS);
      if(minutes <= 1) minutes = 1;
      since = minutes + _n(" minute", " minutes", minutes);
    }
    else if(diff < DAY_IN_SECONDS && diff >= HOUR_IN_SECONDS) {
      hours = Math.round(diff / HOUR_IN_SECONDS);
      if(hours < = 1) hours = 1;
      since = hours + _n(" hour", " hours", hours);
    }
    else if(diff < WEEK_IN_SECONDS && diff >= DAY_IN_SECONDS) {
      days = Math.round(diff / DAY_IN_SECONDS);
      if(days < = 1)days = 1;
      since = days + _n(" day", " days", days);
    }
    else if (diff < 30 * DAY_IN_SECONDS && diff >= WEEK_IN_SECONDS) {
      weeks = Math.round(diff / WEEK_IN_SECONDS);
      if (weeks < = 1) weeks = 1;
      since = weeks + _n(' week', ' weeks', weeks);
    }
    else if (diff < YEAR_IN_SECONDS && diff >= 30 * DAY_IN_SECONDS) {
      months = Math.round(diff / (30 * DAY_IN_SECONDS));
      if (months < = 1) months = 1;
      since = months + _n(' month', ' months', months);
    }
    else if (diff >= YEAR_IN_SECONDS) {
      years = Math.round(diff / YEAR_IN_SECONDS);
      if (years < = 1) years = 1;
      since = years + _n(' year', ' years', years);
    }

    // -- --- ---- -----

    if (to - from > 0) {
      since = since + ' ago';
    }
    else if (to - from < 0) {
      since = 'will be in ' + since;
    }

    return since;
  }
  
  return time_diff;
  
}(
  /* MINUTE_IN_SECONDS = */  60
, /* HOUR_IN_SECONDS   = */  60 * /* MINUTE_IN_SECONDS */     60     /* ==      3600 */
, /* DAY_IN_SECONDS    = */  24 * /* HOUR_IN_SECONDS   */   3600     /* ==     86400 */
, /* WEEK_IN_SECONDS   = */   7 * /* DAY_IN_SECONDS    */  86400     /* ==    604800 */
, /* YEAR_IN_SECONDS   = */ 365 * /* DAY_IN_SECONDS    */ 604800     /* == 220752000 */
));
</pre></pre>', 'JavaScript - Quick And Dirty Time-Diff Method