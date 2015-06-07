# mailer
Simple web service to send emails through linked email account.


## Usage

Before using, you must install the package via `npm install` and then create a `config.json` file with the following format:

```javascript
{
  "service": "gmail",
  "auth": {
    "user": username // Your Gmail username,
    "pass": password //Your Application-Specific Gmail Password
  }
}
```
> `grunt` command allows you to start a server with watch-enabled which reloads after changes are made to it.  
> `grunt clean` command removes all logs

Start server with `node server.js`

Server accepts POST requests with `Content-Type` set to `application/json`
Body should be structured in this fashion:

```javascript
{
  "from": "from",
  "to": "to",
  "subject": "subject",
  "message": "message"
}
```

> **from**: Linked email address to send the email from  
> **to**: Email address to send the email to  
> **subject**: Subject line to be prepended with "AUTOMATED MESSAGE: "  
> **message**: Message content in a string  
