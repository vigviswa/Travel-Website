$(document).ready(function() {
  var d = document.createElement("div");
  $(d).attr("id", "preview");
  $(d).append("<img src = 'images/medium/" + "' alt = '" + "'>");
  $(d).append("<p style = 'font-style = italic'>" + "</p>");
  $.getJSON("data.json", function(data) {
    $.each(data, function(key, value) {
      var src = value.path;
      var take = value.taken;
      var cit = value.city;
      $(".gallery").append(
        "<img src = 'images/square/" +
          src +
          "' alt = '" +
          value.title +
          "' data-taken = ' " +
          take +
          "' data-city = '" +
          cit +
          "'" +
          ">"
      );
    });
    $("ul").on("mouseenter", "img", function() {
      $(this).addClass("gray");
      console.log($(this).attr("alt"));
      $(d).append(
        "<img src = 'images/medium/" +
          $(this)
            .attr("src")
            .split("/")[2] +
          "' alt = '" +
          $(this).attr("alt") +
          "'>"
      );
      $(d).append(
        "<p>" +
          $(this).attr("alt") +
          "</p>" +
          "<p style = 'font-style: italic;'>" +
          $(this).attr("data-city") +
          ", " +
          $(this).attr("data-taken") +
          "</p>"
      );

      $(d).css("display", "block");
      $(d).appendTo("body");
    });
    $("ul").on("mouseleave", "img", function() {
      $(this).removeClass("gray");
      $(d).css("display", "none");
      $(d).fadeOut("1000");

      $("#preview").empty();
    });
    $("ul").on("mousemove", "img", function(event) {
      $(d).css("left", 90 + event.pageX);
      $(d).css("top", event.pageY - 100);
    });
  });
});
