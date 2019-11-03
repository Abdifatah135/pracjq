$(document).ready(function() {
  $(".para001").hide();
  $(".para002").hide();
  $(".para003").hide();

  $(".image001").click(function() {
    $(".image001").hide(1200);
    $(".para001").toggle(1200);
    $(".para001").show(1200);
  });
  $(".para001").click(function() {
    $(".para001").hide(1200);
    $(".image001").toggle(1200);
    $(".image001").show(1200);
  });

  $(".image002").click(function() {
    $(".image002").hide(1200);
    $(".para002").toggle(1200);
    $(".para002").show(1200);
  });
  $(".para002").click(function() {
    $(".para002").hide(1200);
    $(".image002").toggle(1200);
    $(".image002").show(1200);
  });
  $(".image003").click(function() {
    $(".image003").hide(1200);
    $(".para003").toggle(1200);
    $(".para003").show(1200);
  });
  $(".para003").click(function() {
    $(".para003").hide(1200);
    $(".image003").toggle(1200);
    $(".image003").show(1200);
  });
});
$(document).ready(function() {
  $(".road").hide();
  $(".croseover").hover(function() {
    $(this)
      .find(".road")
      .toggle(400);
  });
  $("#contactUs").submit(function(event) {
    var myName = $("#name").val();
    var myEmail = $("#email").val();
    var comment = $("#textarea").val();

    if (myName === "" || myEmail === "" || comment === "") {
      alert("Please fill in the required data");
    } else {
      alert(
        myName +
          " ,we have received your message.Thank you for reaching out to us."
      );
    }
    event.preventDefault();
    $("#name").val("");
    $("#email").val("");
    $("#textarea").val("");
  });
});
