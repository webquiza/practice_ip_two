$(document).ready(function() {
  // $("#answers").hide();

  $("form#survey").submit(function(event) {
    event.preventDefault();
    const hours = $("#hours").val();
    const months = $("#months").val();
    const experience = $("#experience").val();
    const reason = $("#reason").val();
    const pets = $("#pets").val();

    // declaring my score

    let javascriptScore = 0;
    let pythonScore = 0;
    let sharpScore = 0;
    
    // Hours Branch

    if (hours === "javascript") {
      javascriptScore += 1;
    } else if (hours === "python") {
      pythonScore += 1;
    } else if (hours === "sharp") {
      sharpScore += 1;
    } else {
      alert("You didn't answer you fuck!");
    }

    // Months Branch

    if (months === "javascript") {
      javascriptScore += 1;
    } else if (months === "python") {
      pythonScore += 1;
    } else if (months === "sharp") {
      sharpScore += 1;
    } else {
      alert("You didn't answer you fuck!");
    }

    // Experience Branch

    if (experience === "javascript") {
      javascriptScore += 1;
    } else if (experience === "python") {
      pythonScore += 1;
    } else if (experience === "sharp") {
      sharpScore += 1;
    } else {
      alert("You didn't answer you fuck!");
    }

    // Reason Branch

    if (reason === "javascript") {
      javascriptScore += 1;
    } else if (reason === "python") {
      pythonScore += 1;
    } else if (reason === "sharp") {
      sharpScore += 1;
    } else {
      alert("You didn't answer you fuck!");
    }

    // Pets Branch

    if (pets === "javascript") {
      javascriptScore += 1;
    } else if (pets === "python") {
      pythonScore += 1;
    } else if (pets === "sharp") {
      sharpScore += 1;
    } else {
      alert("You didn't answer you fuck!");
    }

    // Score Branch

    if (javascriptScore > pythonScore && javascriptScore > sharpScore) {
      $("#suggested-language").text("JavaScript");
    } else if (pythonScore > javascriptScore && pythonScore > sharpScore) {
      $("#suggested-language").text("Python");
    } else if (sharpScore > javascriptScore && sharpScore > pythonScore) {
      $("#suggested-language").text("C#");
    } else {
      $("#suggested-language").text("Hmm... could not process. Take again, you piece of shit.");
    }

    $("#answers").show();

  });
});