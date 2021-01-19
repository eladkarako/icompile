Code Ripped From WordPress Trunk And Modified To Not Requiring Translator Objects (Use Plain en_US Default).

<pre>

  // Constants for expressing human-readable intervals
  // in their respective number of seconds.
  define('MINUTE_IN_SECONDS', 60);
  define('HOUR_IN_SECONDS', 60 * MINUTE_IN_SECONDS);
  define('DAY_IN_SECONDS', 24 * HOUR_IN_SECONDS);
  define('WEEK_IN_SECONDS', 7 * DAY_IN_SECONDS);
  define('YEAR_IN_SECONDS', 365 * DAY_IN_SECONDS);


  /**
   * Retrieve the plural or single form based on the supplied amount.
   *
   * @param string $single The text that will be used if $number is 1.
   * @param string $plural The text that will be used if $number is not 1.
   * @param int    $number The number to compare against to use either $single or $plural.
   *
   * @return string Either $single or $plural translated text.
   */
  function _n($single, $plural, $number) {
    return 1 === $number ? $single : $plural;
  }

  /**
   * Determines the difference between two timestamps.
   *
   * The difference is returned in a human readable format such as "1 hour",
   * "5 mins", "2 days".
   *
   * @param int|string $from Unix timestamp from which the difference begins.
   * @param int|string $to   Optional. Unix timestamp to end the time difference. Default becomes time() if not set.
   *
   * @return string Human readable time difference.
   */
  function human_time_diff($from, $to = '') {
    if (empty($to)) {
      $to = time();
    }


    $diff = (int)abs($to - $from);

    if ($diff < HOUR_IN_SECONDS) {
      $mins = round($diff / MINUTE_IN_SECONDS);
      if ($mins <= 1)
        $mins = 1;
      /* translators: min=minute */
      $since = sprintf(_n('%s min', '%s mins', $mins), $mins);
    }
    elseif ($diff < DAY_IN_SECONDS && $diff >= HOUR_IN_SECONDS) {
      $hours = round($diff / HOUR_IN_SECONDS);
      if ($hours <= 1)
        $hours = 1;
      $since = sprintf(_n('%s hour', '%s hours', $hours), $hours);
    }
    elseif ($diff < WEEK_IN_SECONDS && $diff >= DAY_IN_SECONDS) {
      $days = round($diff / DAY_IN_SECONDS);
      if ($days <= 1)
        $days = 1;
      $since = sprintf(_n('%s day', '%s days', $days), $days);
    }
    elseif ($diff < 30 * DAY_IN_SECONDS && $diff >= WEEK_IN_SECONDS) {
      $weeks = round($diff / WEEK_IN_SECONDS);
      if ($weeks <= 1)
        $weeks = 1;
      $since = sprintf(_n('%s week', '%s weeks', $weeks), $weeks);
    }
    elseif ($diff < YEAR_IN_SECONDS && $diff >= 30 * DAY_IN_SECONDS) {
      $months = round($diff / (30 * DAY_IN_SECONDS));
      if ($months <= 1)
        $months = 1;
      $since = sprintf(_n('%s month', '%s months', $months), $months);
    }
    elseif ($diff >= YEAR_IN_SECONDS) {
      $years = round($diff / YEAR_IN_SECONDS);
      if ($years <= 1)
        $years = 1;
      $since = sprintf(_n('%s year', '%s years', $years), $years);
    }

    if ($to - $from > 0) {
      $since = 'was ' . $since . ' ago';
    }
    elseif ($to - $from < 0) {
      $since = 'will be in ' . $since;
    }

    return $since;

  }
</pre>

Try it using the output of <code style="display:inline !important;">time()-9000</code> for "was 3 hours ago", or <code style="display:inline !important;">time()+9000</code> for "will be in 3 hours".', 'PHP Human-Readable Time Diff ("5 Hours Ago"