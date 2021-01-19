<pre>
var getProxyDocument = function () { //using it to send requests without redirecting the page
    var id, oldIframe, oldIframe, newIframe, h, idoc, writer;

    id = "proxyrequests";
    oldIframe = document.getElementById(id)

    if (oldIframe) {
      return oldIframe.contentWindow.document;
    }

    newIframe = document.createElement("iframe");
    newIframe.id = id;
    newIframe.frameborder = "0";
    newIframe.width = "1";
    newIframe.height = "1";
    newIframe.border = "0";
    if (newIframe.seamless) {
      newIframe.seamless = "seamless";
    }
    (newIframe["frameElement"] || newIframe).style.cssText = "width:0;height:0;border:0;";

    h = document.getElementsByTagName("script")[0];
    h.parentNode.insertBefore(newIframe, h);

    idoc = newIframe.contentWindow.document; //iframe's document.
    writer = idoc.open(); //iframe's document writer.
    writer.write("<html><head></head><body></body></html>");
    idoc.close();

    return idoc;
  };

//--------------------------------------------------------------------
var sendRequest1 = function (url) {
    var request = new XMLHttpRequest();
    request.open('GET', url, false); // `false` makes the request synchronous
    request.send(null);
  };
var sendRequest2 = function (url) {
    var request = new XMLHttpRequest();
    request.open('GET', url, true); // `true` makes the request asynchronous
    request.send(null);
  };
var sendRequest3 = function (url) {
    var request = new XMLHttpRequest();
    request.open('POST', url, false); // `false` makes the request synchronous
    request.send(null);
  };
var sendRequest4 = function (url) {
    var request = new XMLHttpRequest();
    request.open('POST', url, true); // `false` makes the request asynchronous
    request.send(null);
  };
var sendRequest5 = function (url) {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.async = false;
    s.src = url;
    var h = document.getElementsByTagName("script")[0];
    h.parentNode.insertBefore(s, h);
  };
var sendRequest6 = function (url) {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    s.src = url;
    var h = document.getElementsByTagName("script")[0];
    h.parentNode.insertBefore(s, h);
  };
var sendRequest7 = function (url) {
    var img = document.createElement("img");
    img.src = url;
    img.width = "1";
    img.height = "1";
    var spn = document.createElement("span");
    spn.style.cssText = "width:0;height:0;border:0;";
    spn.appendChild(img);
    var h = document.getElementsByTagName("script")[0];
    h.parentNode.insertBefore(spn, h);
  };
var sendRequest8 = function (url) {
    var worker = new Worker(url);
  };
var sendRequest9 = function (url) {
    var form = getProxyDocument.createElement("form");
    form.method = "get";
    form.action = url;
    form.submit();
  };
var sendRequest10 = function (url) {
    var form = getProxyDocument.createElement("form");
    form.method = "post";
    form.action = url;
    form.submit();
  };
//--------------------------------------------------------------------
</pre>