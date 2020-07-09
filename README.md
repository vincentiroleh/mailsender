# Mail Sender Tutorial

How to build a mail sending mini app using:

- **Express (Node.js Web Framework)**
- **Nodemailer (A module for Node.js to send emails.)**

## Configuration and testing

***`Note:`*** To successfully test this with Google Gmail, you need to enable [Less secure app access](https://myaccount.google.com/lesssecureapps)

- clone this repo
- cd into this directory 
- run `npm install` to install all dependencies 
- create a file named `.env` in the root folder and paste the following:
  
  ```env
    user = yourEmail@gmail.com
    pass = yourEmailPassword
    app_name = NodeMailer
  ```
- Run `node app` from the terminal
- open `http://localhost:4000` on your browser 
- File the information's
- If everything went fine, you should receive a mail in the email address you provided while submitting the form

## Author

Vincent Iroleh