import express from 'express';
import cors from 'cors';
import { Resend } from 'resend';
import multer from 'multer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;
const RESEND_API_KEY = process.env.RESEND_API_KEY || 're_V66AW3m8_JYgQuuxcGcw2tBhr5RcvijZ7';

const resend = new Resend(RESEND_API_KEY);

// Configure multer for file uploads (in memory) - multiple files
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB limit per file
  },
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Multer processes files AND form fields
// The fields middleware will handle both text fields and files

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Email sending endpoint - handles multiple photos
app.post('/api/send-email', upload.array('photos', 10), async (req, res) => {
  try {
    console.log('Received request body:', req.body);
    console.log('Received files:', req.files?.length || 0);

    const {
      firstName,
      lastName,
      phoneNumber,
      emailAddress,
      projectType,
      projectAddress,
      projectCity,
      projectState,
      projectZipCode,
      preferredStartDate,
      preferredContactMethod,
      projectDetails,
    } = req.body;

    // Get typeOfService as array (sent as JSON string from FormData)
    let typeOfServiceArray: string[] = [];
    if (req.body.typeOfService) {
      try {
        // Try to parse as JSON first (if sent as stringified JSON)
        typeOfServiceArray = typeof req.body.typeOfService === 'string' 
          ? JSON.parse(req.body.typeOfService)
          : Array.isArray(req.body.typeOfService)
          ? req.body.typeOfService
          : [req.body.typeOfService];
      } catch (e) {
        console.error('Error parsing typeOfService:', e);
        // If not JSON, treat as single value or array
        typeOfServiceArray = Array.isArray(req.body.typeOfService)
          ? req.body.typeOfService
          : [req.body.typeOfService];
      }
    }

    const fullName = `${firstName || ''} ${lastName || ''}`.trim();
    const projectLocation = `${projectAddress || ''}, ${projectCity || ''}, ${projectState || ''} ${projectZipCode || ''}`.trim();

    // Validate required fields (projectDetails is now optional)
    if (!firstName || !lastName || !phoneNumber || !typeOfServiceArray || typeOfServiceArray.length === 0 || !projectType || !projectAddress || !projectCity || !projectState || !projectZipCode) {
      console.error('Missing required fields:', {
        firstName: !!firstName,
        lastName: !!lastName,
        phoneNumber: !!phoneNumber,
        typeOfService: typeOfServiceArray.length > 0,
        projectType: !!projectType,
        projectAddress: !!projectAddress,
        projectCity: !!projectCity,
        projectState: !!projectState,
        projectZipCode: !!projectZipCode,
      });
      return res.status(400).json({
        success: false,
        error: 'Missing required fields',
      });
    }

    // Service options mapping for display
    const serviceLabels: { [key: string]: string } = {
      interiorPainting: 'Interior Painting',
      exteriorPainting: 'Exterior Painting',
      wallpaperInstallation: 'Wallpaper Installation',
      deckOrFenceRenovation: 'Deck or Fence Renovation',
      kitchenRemodeling: 'Kitchen Remodeling',
      bathroomRemodeling: 'Bathroom Remodeling',
      flooringInstallation: 'Flooring Installation',
      cabinetInstallation: 'Cabinet Installation',
      resurfacing: 'Resurfacing (Floor, Countertop, or Concrete)',
      other: 'Other',
    };

    const servicesList = typeOfServiceArray.map((s: string) => serviceLabels[s] || s).join(', ');

    // Build email HTML content
    let emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #ea580c;">New Contact Form Submission</h2>
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Phone Number:</strong> ${phoneNumber}</p>
        ${emailAddress ? `<p><strong>Email Address:</strong> ${emailAddress}</p>` : ''}
        <p><strong>Project Type:</strong> ${projectType === 'residential' ? 'Residential' : 'Commercial'}</p>
        <p><strong>Type of Service:</strong> ${servicesList}</p>
        <p><strong>Project Address:</strong> ${projectAddress}</p>
        <p><strong>City:</strong> ${projectCity}</p>
        <p><strong>State:</strong> ${projectState}</p>
        <p><strong>Zip Code:</strong> ${projectZipCode}</p>
        ${preferredStartDate ? `<p><strong>Preferred Start Date:</strong> ${preferredStartDate}</p>` : ''}
        ${preferredContactMethod ? `<p><strong>Preferred Contact Method:</strong> ${preferredContactMethod}</p>` : ''}
        ${projectDetails ? `<p><strong>Project Details:</strong></p><p style="white-space: pre-wrap;">${projectDetails}</p>` : ''}
      </div>
    `;

    // Prepare email data
    const emailData: any = {
      from: 'noreply@updates.edercontractor.com',
      to: ['edercontractorusa@gmail.com'],
      subject: `New Quote Request: ${servicesList} - ${fullName}`,
      html: emailHtml,
    };

    // Add attachments if photos were uploaded
    if (req.files && Array.isArray(req.files) && req.files.length > 0) {
      emailData.attachments = req.files.map((file: Express.Multer.File) => ({
        filename: file.originalname,
        content: file.buffer,
      }));
    }

    // Send email via Resend
    const data = await resend.emails.send(emailData);

    console.log('Email sent successfully:', data);

    res.json({
      success: true,
      message: 'Email sent successfully',
      data,
    });
  } catch (error: any) {
    console.error('Error sending email:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to send email',
      message: error.message || 'Unknown error',
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
