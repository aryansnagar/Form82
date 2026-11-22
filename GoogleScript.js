const SHEET_NAME = "ContactFormSubmission";
const PUBLISHER_EMAIL = "aryannagarco@gmail.com";
const SEND_EMAIL_NOTIFICATION = true;

function doPost(e) {
    const sheet = getOrCreateSheet();

    const name = e.parameter.name || "";
    const email = e.parameter.email || "";
    const message = e.parameter.message || "";
    const time = new Date();

    sheet.appendRow([time, name, email, message]);

    if (SEND_EMAIL_NOTIFICATION) {
        sendNotification(time, name, email, message);
    }

    return ContentService.createTextOutput(JSON.stringify({ result: "success" }))
        .setMimeType(ContentService.MimeType.JSON);
}

function getOrCreateSheet() {
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = spreadsheet.getSheetByName(SHEET_NAME);

    if (!sheet) {
        sheet = spreadsheet.insertSheet(SHEET_NAME);
        sheet.appendRow(["Time", "Name", "Email", "Message"]);
        sheet.setFrozenRows(1);
    }

    return sheet;
}

function sendNotification(time, name, email, message) {
    const body =
        "New form submission\n\n" +
        "Time: " + time + "\n" +
        "Name: " + name + "\n" +
        "Email: " + email + "\n" +
        "Message:\n" + message;

    MailApp.sendEmail(PUBLISHER_EMAIL, "Contact Form Submission", body);
}