(function (a) {
  "use strict";

  var $ = a;
  $('.post-block p img').each(function () {
    $(this).wrap('<a data-fancybox="images" href="' + this.src + '" data-caption=" ' + this.alt + '" class="fancybox"></a>');
    $(this).attr('src', this.src);
    $(this).attr('width', 500);
  });

  if ($.fancybox) {
    $('.fancybox').fancybox({
      thumbs: {
        // showOnStart: true
      },
      caption: function (instance, item) {
        var caption;
        if (item.type === 'image') {
          caption = $(this).data('caption');
          return (caption ? caption : '');
        }
      },
    });
  }

  function b(a) {
    var c, d, b = [];
    if ("number" == typeof a) b.push(a);
    else {
      d = a.split(",");
      for (var e = 0; e < d.length; e++)
        if (c = d[e].split("-"), 2 === c.length)
          for (var f = parseInt(c[0], 10); f <= c[1]; f++) b.push(f);
        else 1 === c.length && b.push(parseInt(c[0], 10))
    }
    return b
  }
  a.fn.gist = function (c) {
    return this.each(function () {
      var e, f, g, h, i, j, k, l, m, n, d = a(this),
        o = {};
      return d.css("display", "block"), e = d.data("gist-id") || "", g = d.data("gist-file"), k = d.data("gist-hide-footer") === !0, l = d.data("gist-hide-line-numbers") === !0, h = d.data("gist-line"), j = d.data("gist-highlight-line"), n = d.data("gist-show-spinner") === !0, m = n ? !1 : void 0 !== d.data("gist-show-loading") ? d.data("gist-show-loading") : !0, g && (o.file = g), e ? (f = "https://gist.github.com/" + e + ".json", i = "Loading gist " + f + (o.file ? ", file: " + o.file : "") + "...", m && d.html(i), n && d.html('<img style="display:block;margin-left:auto;margin-right:auto"  alt="' + i + '" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif">'), void a.ajax({
        url: f,
        data: o,
        dataType: "jsonp",
        timeout: 2e4,
        success: function (c) {
          var e, g, i, m, n;
          c && c.div ? (c.stylesheet && (0 === c.stylesheet.indexOf("<link") ? c.stylesheet = c.stylesheet.replace(/\\/g, "").match(/href=\"([^\s]*)\"/)[1] : 0 !== c.stylesheet.indexOf("http") && (0 !== c.stylesheet.indexOf("/") && (c.stylesheet = "/" + c.stylesheet), c.stylesheet = "https://gist.github.com" + c.stylesheet)), c.stylesheet && 0 === a('link[href="' + c.stylesheet + '"]').length && (e = document.createElement("link"), g = document.getElementsByTagName("head")[0], e.type = "text/css", e.rel = "stylesheet", e.href = c.stylesheet, g.insertBefore(e, g.firstChild)), n = a(c.div), n.removeAttr("id"), d.html("").append(n), j && (m = b(j), n.find("td.line-data").css({
            width: "100%"
          }), n.find(".js-file-line").each(function (b) {
            -1 !== a.inArray(b + 1, m) && a(this).css({
              "background-color": "rgb(255, 255, 204)"
            })
          })), h && (i = b(h), n.find(".js-file-line").each(function (b) {
            -1 === a.inArray(b + 1, i) && a(this).parent().remove()
          })), k && (n.find(".gist-meta").remove(), n.find(".gist-data").css("border-bottom", "0px"), n.find(".gist-file").css("border-bottom", "1px solid #ddd")), l && n.find(".js-line-number").remove()) : d.html("Failed loading gist " + f)
        },
        error: function (a, b) {
          d.html("Failed loading gist " + f + ": " + b)
        },
        complete: function () {
          "function" == typeof c && c()
        }
      })) : !1
    })
  }, a(function () {
    a("[data-gist-id]").gist()
  })
})(jQuery);