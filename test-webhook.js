import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

const testWebhook = async () => {
  try {
    const webhookUrl = 'https://skylandai.app.n8n.cloud/webhook/395ed9c4-a6dd-4428-91da-73e50b089783';
    console.log('Using webhook URL:', webhookUrl);
    
    const payload = {
      name: "Erik Svensson",
      email: "erik.svensson@techcompany.se",
      phone: "+46 70 123 4567",
      website: "https://techcompany.se",
      message: "Hej! Vi behöver hjälp med att modernisera vår e-handelsplattform. Kan ni hjälpa oss med design och implementation?",
      timestamp: new Date().toISOString(),
      source: 'website_contact_form'
    };
    
    console.log('Sending payload:', JSON.stringify(payload, null, 2));
    
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    console.log('Response status:', response.status);
    const data = await response.json();
    console.log('Response data:', JSON.stringify(data, null, 2));

  } catch (error) {
    console.error('Error details:', {
      message: error.message,
      stack: error.stack
    });
  }
};

testWebhook();

// Test script to send sample form data to the webhook
async function sendFormSubmissionTest() {
  const webhookUrl = 'https://skylandai.app.n8n.cloud/webhook/914fbbce-c3d8-4760-bbce-fe5f6376700b';
  
  const formSubmissionData = {
    "Full Name": "Test User",
    "Conversation Id": "form-" + Date.now(),
    "Date Submitted": new Date().toISOString().split('.')[0]+"Z",
    "Email": "test@example.com",
    "Phone Number": "+46 70 123 4567",
    "Companies": "Test Company AB",
    "User Intent": "Contact form submission",
    "Message": "This is a test message to verify webhook integration",
    "Transcript": "", // Empty for form submissions
    "Summary": "", // Empty for form submissions
    "Sentiment": "neutral",
    "Source": "website_contact_form"
  };

  console.log('Sending test data to webhook:', JSON.stringify(formSubmissionData, null, 2));
  
  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(formSubmissionData)
    });

    console.log('Response status:', response.status);
    let responseData;
    
    try {
      responseData = await response.json();
      console.log('Response data (JSON):', responseData);
    } catch (e) {
      responseData = await response.text();
      console.log('Response data (Text):', responseData);
    }

    console.log('Test completed successfully');
  } catch (error) {
    console.error('Error sending test data:', error);
  }
}

// Run the test
sendFormSubmissionTest(); 