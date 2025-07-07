// certificateData.js
// Certificate database mapping registration numbers to PDF files

export const certificateDatabase = {
  '690': {
    name: 'GURWINDER',
    pdfPath: '/certificates/GURWINDER.pdf',
    course: 'Digital Computer Application',
    issueDate: '15-06-2025'
  },
  '651': {
    name: 'JASPREET KAUR',
    pdfPath: '/certificates/JASPREET KAUR.pdf',
    course: 'Digital Computer Application',
    issueDate: '10-01-2025'
  },
  '400': {
    name: 'KAJALPREET KAUR',
    pdfPath: '/certificates/KAJALPREET KAUR DCA.pdf',
    course: 'Digital Computer Application',
    issueDate: '10-01-2020'
  },
  '652': {
    name: 'KARMANJOT',
    pdfPath: '/certificates/KARMANJOT.pdf',
    course: 'Digital Computer Application',
    issueDate: '10-01-2023'
  },
  '401': {
    name: 'SPOKEN ENGLISH STUDENT',
    pdfPath: '/certificates/SPOKEN.pdf',
    course: 'Spoken English',
    issueDate: '10-01-2021'
  },
  '653': {
    name: 'YASHKARAN',
    pdfPath: '/certificates/YASHKARAN1.pdf',
    course: 'Digital Computer Application',
    issueDate: '10-01-2023'
  },
  '13': {
    name: 'TEACHING EXPERIENCE',
    pdfPath: '/certificates/teaching experience cert - Copy.pdf',
    course: 'Teaching Experience Certificate',
    issueDate: '10-01-2022'
  }
};

// Helper function to verify certificate
export const verifyCertificate = (registrationNumber) => {
  return certificateDatabase[registrationNumber.toUpperCase()] || null;
};

// Helper function to get all registration numbers
export const getAllRegistrationNumbers = () => {
  return Object.keys(certificateDatabase);
};

// Helper function to download certificate
export const downloadCertificate = async (certificateData) => {
  if (!certificateData) {
    throw new Error('Certificate data is required');
  }

  try {
    // First check if the file exists
    const response = await fetch(certificateData.pdfPath);
    if (!response.ok) {
      throw new Error('Certificate file not found');
    }

    // Create download link
    const link = document.createElement('a');
    link.href = certificateData.pdfPath;
    link.download = `${certificateData.name.replace(/\s+/g, '_')}_Certificate.pdf`;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error('Download failed:', error);
    throw new Error('Failed to download certificate. Please try again.');
  }
};