$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    const hours = $("#hours").val();
    const months = $("#months").val();
    const experience = $("#experience").val();
    const reason = $("#reason").val();
    const pets = $("#pets").val();
  
    $("#output1").text(hours);
    $("#output2").text(months);
    $("#output3").text(experience);
    $("#output4").text(reason);
    $("#output5").text(pets);

    $("#answers").show();

  });
});