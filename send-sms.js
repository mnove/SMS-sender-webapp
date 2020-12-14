// send SMS via Twilio

function sendSmsViaTwilio(to, body) {
  var messages_url =
    "https://api.twilio.com/2010-04-01/Accounts/{YOUR ACCOUNT ID}/Messages.json";

  var payload = {
    To: to,
    Body: body,
    From: "YOUR TWILIO NUMBER",
  };

  var options = {
    method: "post",
    payload: payload,
  };

  options.headers = {
    Authorization:
      "Basic " + Utilities.base64Encode("YOUR ACCOUNT ID: YOUR SECRET KEY"),
  };

  UrlFetchApp.fetch(messages_url, options);
}

function sendSms(smsData) {
  // Send SMS to Twilio API

  var to = smsData.phoneNumber;
  var body = smsData.smsMessage;

  try {
    sendSmsViaTwilio(to, body);
    var successStatus = true;
    var message = "Successful";

    // create and keep a record in a sheet of the sms sent
    var ss = SpreadsheetApp.openByUrl("YOUR SPREADSHEET URL");
    var targetSheet = ss.getSheetByName("logs");
    var timeStamp = new Date();
    targetSheet.appendRow([to, body, timeStamp, message]);

    // show successMessage on client
    return successStatus;
  } catch (err) {
    var successStatus = false;
    var message = "Not successful";

    // create and keep a record in a sheet of the sms sent
    var ss = SpreadsheetApp.openByUrl("YOUR SPREADSHEET URL");
    var targetSheet = ss.getSheetByName("logs");
    var timeStamp = new Date();
    targetSheet.appendRow([to, body, timeStamp, message, err]);

    // show successMessage on client
    return successStatus;
  }
}






