# MSAL-nodejs-https
Here's a version of MSAL Node JS that uses https instead of http in the server.js file.

Documentation for HTTPS in Node is here:
https://nodejs.org/api/https.html

Documentation for the MSAL NodeJS Tutorial is here:
https://learn.microsoft.com/en-us/entra/identity-platform/tutorial-v2-javascript-auth-code#create-your-project

I have a short video copying and pasting these settings into the server.js file located here:
https://youtu.be/US3JFu4jlCg

In this file, the server.js file from the MSAL tutorial is modified to use an https object and alllow the use of an ssl cert with the 'web server'.

This will remove the limitation of using 'localhost' in the Redirect URI.
