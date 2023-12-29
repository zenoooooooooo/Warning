const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log("App is running on port " + port);
});

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send(`
  <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Urgent Security Alert</title>
        <style>
            body {
                font-family: 'Arial', sans-serif;
                background-color: #f5f5f5;
                color: #333;
                margin: 20px;
            }
    
            div {
                max-width: 600px;
                margin: 0 auto;
                background-color: #fff;
                padding: 20px;
                border-radius: 10px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
    
            h2 {
                color: #d9534f;
            }
    
            ol {
                margin-top: 10px;
            }
    
            li {
                margin-bottom: 10px;
            }
    
            a {
                color: #337ab7;
                text-decoration: none;
                font-weight: bold;
            }
    
            a:hover {
                text-decoration: underline;
            }
        </style>
    </head>
    
    <body>
        <div>
            <h2>Urgent Security Alert - Immediate Action Required</h2>
            <p>
                Dear User,
            </p>
            <p>
                We regret to inform you that our security systems have detected unusual activity on your computer, suggesting a potential malware infection. Our top priority is to ensure the safety and privacy of your personal information.
            </p>
            <p>
                To safeguard your data and prevent any further compromise, we strongly recommend taking the following actions immediately:
            </p>
            <ol>
                <li>Log out of all accounts: To minimize the risk of unauthorized access, please log out of all your accounts, including email, social media, and online banking.</li>
                <li>Shut down your PC: To isolate the potential threat and protect your system, it is crucial to shut down your computer without delay.</li>
            </ol>
            <p>
                We understand the importance of your digital security and appreciate your prompt attention to this matter. If you require further assistance or have any concerns, please do not hesitate to contact our dedicated support team at <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" target="_blank">[Support Contact Information]</a>.
            </p>
            <p>
                Thank you for your cooperation in maintaining a secure computing environment.
            </p>
            <p>
                Sincerely,<br>
                 Microsoft System Security Group 
            </p>
        </div>
    </body>
</html>`);
});

app.get("/securityGroup", (req, res) => {
  console.log(req);
  return res.status(234).send("");
});
