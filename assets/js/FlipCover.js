function flipCover(css, options) {
    var options = options || {};
  
    if (typeof css === "object") {
      options = css;
    } else {
      options.css = css;
    }
  
    var css = options.css;
    var url = options.url;
    var text = options.text || css;
    var width = options.width;
    var height = options.height;
  
    var $section = $(".flip-cover-" + css).addClass(css + "-section");
    var $button = $("<div>").addClass(css + "-button");
    var $cover = $("<div>").addClass(css + "-cover");
    var $outer = $("<div>").addClass(css + "-outer");
    var $inner = $("<div>").addClass(css + "-inner");
  
    if (width) {
      $section.css("width", width);
    }
  
    if (height) {
      $section.css("height", height);
  
      var lineHeight = ":after{ line-height: " + height + ";}";
      var $outerStyle = $("<style>").text("." + css + "-outer" + lineHeight);
      var $innerStyle = $("<style>").text("." + css + "-inner" + lineHeight);
      $outerStyle.appendTo($outer);
      $innerStyle.appendTo($inner);
    }
  
    $cover.html($outer);
    $inner.insertAfter($outer);
  
    $button.html($("<a>").text(text).attr("href", url));
  
    $section.html($button);
    $cover.insertAfter($button);
  }
  
  $(function () {
    flipCover({
      css: "dribbble",
      text: "vveleva",
      width: "80px",
    });
  
    flipCover("twiter", {
      text: "軟性電子是指不同於過去以矽為主的電路製作方式，而是改以薄膜型式或直噴式金屬列印打造電子迴路。這項技術可以製造出能彎曲的電路、直噴式的電路或是以有機體為原料的製作，甚至已經可以做到折疊及防水的需求。\n軟性混合電子結合半導體元件的效能及印刷電子的輕薄、大面積及柔軟可撓特性，將顛覆電子裝置外觀造型規格，也將為醫療產業帶來更多創新應用商品。",
      width: "100%",
    });
  
    flipCover("linkedin", {
      text: "vveleva",
      width: "80px"
    });
  
    flipCover("email", {
      width: "80px",
      height: "50px"
    });
  });