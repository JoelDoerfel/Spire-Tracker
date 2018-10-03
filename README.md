# Spire-Tracker

Here's a lightweight node.js application to download granular intraday breathing data from your Spire biometric device. It is based on Samuel Rinnetmäki's code (https://github.com/samuelmr/spire-tracker), to which I've added a save-to-csv function. It runs from the command line.

Install:
- npm install json2csv
- npm install spire-tracker
- npm install fs

Steps:

(1) Once you've installed your node.js dependencies, and copy the code from https://github.com/JoelDoerfel/Spire-Tracker/blob/master/spire-events.js and paste into notepad or your code editor of choice, and save as "spire-events.js" to the node.js directory. Leave the file open for the editing you'll need to do in step 3.

(2) From a browser, login into your Spire account and navigate to https://app.spire.io/my/portals and copy your Spire API Access token. You can email api@spire.io to troubleshoot any access issues.

(3) Once you've got your access token, you need to update the variable "token" in line 23 from 'YOUR_SPIRE_TOKEN' to your access token. The only other important edit you'll need to make to the code is the "date" variable in line 21. Without altering the format (yyyymmdd), set it to the date from which you'd like to pull data.

(4) From a Windows machine, the command line command is "node spire-events.js".
_____

Troubleshooting:

- If data is returning null or you're getting an error that reads "Error: Data should not be empty or the 'fields' option should be included", login to the Spire app on your phone and make sure that the data has synced. The icon on the top right that looks like a recycling icon should not be spinning. If it is, you've got an active sync going on, so wait until that's done.

- Otherwise, double-check to see if the date you've selected has any Spire data associated with it.
