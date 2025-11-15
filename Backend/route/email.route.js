import express from 'express';
import { sendPremiumEmail } from '../controller/email.controller.js';

const router = express.Router();

router.post('/send-email', sendPremiumEmail);

export default router;
