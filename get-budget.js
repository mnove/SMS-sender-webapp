// get Twilio budget for your project

function getTwilioRemainingBudget() {
  balance = 0;
  var messages_url =
    "https://api.twilio.com/2010-04-01/Accounts/{YOUR ACCOUNT ID}/Balance.json";
  var options = {
    method: "GET",
  };

  options.headers = {
    Authorization:
      "Basic " + Utilities.base64Encode("YOUR ACCOUNT ID: YOUR SECRET KEY"),
  };

  var response = UrlFetchApp.fetch(messages_url, options);
  var content = response.getContentText();
  jsonParse = JSON.parse(content);

  //Logger.log(content);
  var balance = jsonParse.balance;
  var currency = jsonParse.currency;

  Logger.log(balance);

  return balance;
}
