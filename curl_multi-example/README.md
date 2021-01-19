A curl_multi Working Example - That Actually Works!!!
Both StackOverflow and PHP.net are filled with half-a$$ examples from more than 5 years ago, some result with a long CPU hang-time, some simply do not work.. due to "reasons"...

<a title="https://github.com/eladkarako/a-curl_multi-working-example---that-actually-works" href="https://github.com/eladkarako/a-curl_multi-working-example---that-actually-works" target="_blank">THIS ONE WORKS</a>

provide an end result of an array,
filled with all of the headers (in the orders appeared, including 30x redirections, broken down to key and value),
the content of the page or resource (raw) - double as much urls you would like to use,
resources are cleaned properly and handlers are closed when possible to save memory.