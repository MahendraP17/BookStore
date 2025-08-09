import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import Email from '../model/emai.model.js'; // ✅ NEW import

dotenv.config();

export const sendPremiumEmail = async (req, res) => {
    const { email } = req.body;

    if (!email) return res.status(400).json({ message: "Email is required" });

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Your Premium Plan Details - BookZudio 📚',
            html: `
                <h2>Welcome to BookZudio Premium!</h2>
                <p>Here are our premium plans:</p>
                <ul>
                    <li>📘 Monthly - ₹99</li>
                    <li>📗 Quarterly - ₹249</li>
                    <li>📙 Yearly - ₹799</li>
                </ul>
                <p>Enjoy ad-free access to our digital library and exclusive discounts!</p>
                <a href="http://localhost:5173/signup">Click here to Signup</a>
            `
        };

        await transporter.sendMail(mailOptions);

        const indianTime = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
    
        const existingEmail = await Email.findOne({ address: email });
    
        if (existingEmail) {
          existingEmail.count += 1;
          existingEmail.sentAt = indianTime;
          await existingEmail.save();
        } else {
          await Email.create({ address: email, sentAt: indianTime });
        }

        res.status(200).json({ message: 'Email sent successfully' });
    } catch (err) {
        console.error('Email send error:', err);
        res.status(500).json({ message: 'Failed to send email' });
    }
};
