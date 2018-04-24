function loadCSS(e, t, n) { "use strict"; var i = window.document.createElement("link"); var o = t || window.document.getElementsByTagName("script")[0]; i.rel = "stylesheet"; i.href = e; i.media = "only x"; o.parentNode.insertBefore(i, o); setTimeout(function () { i.media = n || "all" }) }
loadCSS("//fonts.googleapis.com/css?family=Roboto+Slab:400,700|Roboto:400,500");
loadCSS("//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
loadCSS("https://netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.css"); 