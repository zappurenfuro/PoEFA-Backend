const axios = require('axios');

const visitWebsite = async () => {
  try {
    const response = await axios.get('https://poefa-cron-api.onrender.com/update-cron');
    console.log(`Visited website. Status Code: ${response.status}`);
  } catch (error) {
    console.error('Error visiting website:', error.message);
  }
};

// Schedule to run every 3 minutes
setInterval(visitWebsite, 180000);
