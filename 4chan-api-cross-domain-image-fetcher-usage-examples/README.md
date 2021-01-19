The following example on <a href="https://github.com/eladkarako/4Chan-JavaScript-Image-Fetcher" title="4Chan-JavaScript-Image-Fetcher" target="_blank">my GitHub project-page</a>, shows, hopefully a clear way, on how to do some Ajax requests on client side, fetching each of the threads in a board, in which all the posts, and all the image links within, <img src="https://icompile.eladkarako.com/_uploads/2015/01/4chan_api.png" alt="4chan_api" width="223" height="210" class="alignright size-full wp-image-2323" />


after fetching the information, a Handlebars-Mustache logicless template is using the aggregated data (images) to build a simple gallery,
which uses jQuery's lazy-loading, so only images within the close-range of the browser's VIEWPORT will be fetched from 4Chan (saving their's data plan).

this is mainly academic, since the 4Chan-API documentation is quite poorly explained..
<br />