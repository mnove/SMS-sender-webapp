<script>


// event listeners when DOM loaded

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("btn-send").addEventListener("click", getSMSData);
  google.script.run.withSuccessHandler(getBudget).getTwilioRemainingBudget();
});

// create smsData object and adding properties from frontend form
function getSMSData() {
  var smsData = {};

  smsData.phoneNumber = document.getElementById("phone-number").value;
  smsData.smsMessage = document.getElementById("sms-message").value;

  //console.log(smsData);
  
  google.script.run.withSuccessHandler(showStatus).sendSms(smsData);
}

// display success/failure message with toast notification
function showStatus(successStatus) {
  if (successStatus) {
    var successMessage = "Message Sent";
    document.getElementById("status").innerHTML = successMessage;
    M.toast({ html: successMessage, classes: "success-toast" });
  } else {
    var successMessage = "Message not sent - try again or contact support";
    document.getElementById("status").innerHTML = successMessage;
    M.toast({ html: successMessage, classes: "failed-toast" });
  }
}

// display remaining budget 
function getBudget(balance) {
  document.getElementById("balance").innerHTML = balance;
}

</script>
