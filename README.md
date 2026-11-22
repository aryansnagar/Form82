# Form 82

Collect unlimited form submissions from any HTML page and store them in a Google Sheet. No external portal, no monthly submission cap.

Sheet Forms is a simple setup made of two parts:
- **Frontend:** an `index.html` file with JavaScript that sends form data.
- **Backend:** a Google Apps Script bound to a Google Sheet that receives the data and writes it to a row.

The form owner manages every submission directly in Google Sheets, using filters, sorting, formulas, and sharing.

#### Intro

Services like Formspree collect form submissions on their servers and usually limit free plans to 50 to 100 submissions per month. Sheet Forms replaces that with a Google Sheet you already control. Your form works with plain HTML, and the data lives in a spreadsheet you can open, share, and export at any time.

#### Features

- Unlimited submissions, limited only by Google Sheets capacity
- Works with any static HTML page (GitHub Pages, Netlify, your own host)
- Submissions appear as new rows in a Google Sheet in real time
- The form owner works in Google Sheets: filter, sort, edit, add formulas, and share access
- No portal or extra login for the form owner
- No third-party server between your form and your data
- Custom fields: add or rename inputs in HTML and the matching column is created
- Free to run on a standard Google account

#### How It Works

1. The visitor fills in the form on `index.html`.
2. JavaScript sends the data to a Google Apps Script web app URL.
3. The script appends the submission as a new row in the linked Google Sheet.
4. The form owner sees the row in the sheet immediately.

#### Setup

1. Create a Google Sheet. Open **Extensions → Apps Script**.
2. Paste the backend script and save.
3. Click **Deploy → New deployment → Web app**. Set access to "Anyone" and copy the URL.
4. Paste that URL into the `SCRIPT_URL` constant in `index.html`.
5. Open `index.html` in a browser or host it on any static host.

#### Specs

| Item | Detail |
|---|---|
| Frontend | HTML, CSS, vanilla JavaScript |
| Backend | Google Apps Script (web app) |
| Database | Google Sheets |
| Submission limit | Unlimited (Google Sheets limit: 10 million cells per spreadsheet) |
| Hosting | Any static host, or open locally |
| Server to maintain | None |
| Cost | Free with a Google account |
| Data location | Your Google Drive |
| Login required for visitors | No |
| Login required for form owner | Google account |

#### Comparison: Form 82 vs Formspree

| Feature | Form 82 | Formspree |
|---|---|---|
| Free submissions | Unlimited | About 50 per month (varies by plan) |
| Where data is stored | Your Google Sheet | Formspree servers |
| How owner views data | Google Sheets | Formspree dashboard |
| Editing and filtering data | Full spreadsheet tools | Limited dashboard tools |
| Sharing access with team | Google Sheets sharing | Team plan required |
| Custom backend logic | Apps Script (JavaScript) | Limited to Formspree features |
| Email notifications | Via Apps Script (optional) | Built in |
| Spam protection | Basic (add your own, e.g. honeypot field) | Built in |
| Setup effort | Copy script, paste URL | Paste endpoint URL |
| Server to maintain | None | None |
| Cost | Free | Free tier, paid plans for more |
| Vendor lock-in | None; export sheet anytime | Data stays on their platform |

*Formspree limits and features change over time. Check their current pricing page before deciding.*

#### Limitations
- Google Sheets has a 10 million cell limit per spreadsheet. Very high volume needs a new sheet or a database.
- Apps Script has daily quotas for execution and email sending.
- No built-in spam filtering. Add a honeypot field or CAPTCHA if needed.
- Visitors submitting many times in a short period may hit Apps Script rate limits.
- Changes to the script require a new deployment to update the URL.

#### Contributing
Pull requests and issues are welcome. Keep changes simple and focused.

#### Contact
If you want a cutom form, you can just fork the repo or contact me on [aryannagarco@gmail.com](mailto:aryannagarco@gmail.com)

#### Images
![1](https://i.ibb.co/RGrHkd0c/Screenshot-2026-11-22-202451.png)
![2](https://i.ibb.co/rGBNJvcq/Screenshot-2026-11-22-202530.png)
![3](https://i.ibb.co/4nLmTVk6/Screenshot-2026-11-22-202407.png)