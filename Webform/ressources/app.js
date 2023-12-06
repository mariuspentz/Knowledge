$(document).ready(function () {
  // Attach click event to the button
  $("#giveData").on("click", function () {
    // Get the value of the email input field and log it to the console
    var emailValue = $("#email").val();
    console.log("Email Value:", emailValue);
  });
});
