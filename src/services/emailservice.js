const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

const sendEmail = async (emailid) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: emailid,
        subject: 'Data Uploaded successfully',
        text: 'Data Uploaded successfully.',
        html: `
            <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Data Upload Notification</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background: #ffffff;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        h1 {
            color: #333333;
        }
        p {
            color: #555555;
            line-height: 1.5;
        }
        .footer {
            margin-top: 20px;
            text-align: center;
            font-size: 0.8em;
            color: #999999;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Data Upload Successful</h1>
        <p>Dear User,</p>
        <p>We are pleased to inform you that your data has been successfully uploaded.</p>
        <p>If you have any questions or need further assistance, please do not hesitate to reach out to us.</p>
        <br>
        <p>Best regards,<br><br>Piyush Joshi<br>piyushjoshi81204@gmail.com</p>
    </div>
</body>
</html>
        `,
    };

    await transporter.sendMail(mailOptions);
};



const sendDataDeleteEmail = async (emailid) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: emailid,
        subject: 'Data Deleted successfully',
        text: 'Data has been Deleted.',
        html: `
            <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Data Upload Notification</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background: #ffffff;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        h1 {
            color: #333333;
        }
        p {
            color: #555555;
            line-height: 1.5;
        }
        .footer {
            margin-top: 20px;
            text-align: center;
            font-size: 0.8em;
            color: #999999;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Data Delete Successful</h1>
        <p>Dear User,</p>
        <p>We are pleased to inform you that your data has been successfully deleted.</p>
        <p>If you have any questions or need further assistance, please do not hesitate to reach out to us.</p>
        <br>
        <p>Best regards,<br><br>Piyush Joshi<br>piyushjoshi81204@gmail.com</p>
    </div>
</body>
</html>
        `,
    };

    await transporter.sendMail(mailOptions);
};



module.exports = { sendEmail, sendDataDeleteEmail };





