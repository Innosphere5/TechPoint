// certificateData.js
// Certificate database mapping registration numbers to PDF files

export const certificateDatabase = {

  '597': {
    name: 'Prabhdeep Singh',
    pdfPath: '/certificates/prabhdeep singh.pdf',
    course: 'Digital Computer Application (1 year)',
    issueDate: '10-7-2025'
  },
  '661': {
    name: 'Nagma Salmani',
    pdfPath: '/certificates/NAGMA CERTIFICATE N.pdf',
    course: 'Digital Computer Application (1 year)',
    issueDate: '15-6-2025'
  },
  '646': {
    name: 'Mohit kumar',
    pdfPath: '/certificates/MOHIT BROTHER N.pdf',
    course: 'Digital Computer Application',
    issueDate: '15-8-2023'
  },
  '650': {
    name: 'Tarun Vaid',
    pdfPath: '/certificates/TARUN VAID.pdf',
    course: 'Digital Computer Application',
    issueDate: '15-1-2025'
  },
  
  '671': {
    name: 'Manju',
    pdfPath: '/certificates/MANJU CERT 1.pdf',
    course: 'Digital Computer Application',
    issueDate: '15-6-2024'
  },
  '659': {
    name: 'Simran Sharma',
    pdfPath: '/certificates/simran.pdf',
    course: 'Digital Computer Application ',
    issueDate: '15-1-2022'
  },
  '660': {
    name: 'Manjot Singh',
    pdfPath: '/certificates/MANJOT SINGH.pdf',
    course: 'Digital Computer Application ',
    issueDate: '10-7-2025'
  },
  '694': {
    name: 'Amandeep Singh',
    pdfPath: '/certificates/AMANDEEP SINGH123.pdf',
    course: 'Digital Computer Application (6 months)',
    issueDate: '15-6-2023'
  },
  '691': {
    name: 'Jaspreet Singh',
    pdfPath: '/certificates/jass CERT.pdf',
    course: 'Digital Computer Application',
    issueDate: '15-08-2025'
  },
  '690': {
    name: 'GURWINDER',
    pdfPath: '/certificates/GURWINDER.pdf',
    course: 'Digital Computer Application',
    issueDate: '15-06-2025'
  },
  '649': {
    name: 'Sukhjinder Singh',
    pdfPath: '/certificates/SUKHJINDER SINGH.pdf',
    course: 'Digital Computer Application (1 year)',
    issueDate: '15-08-2024'
  },
  '651': {
    name: 'JASPREET KAUR',
    pdfPath: '/certificates/JASPREET KAUR.pdf',
    course: 'Digital Computer Application',
    issueDate: '10-01-2025'
  },
  '655': {
    name: 'Kiranjot Kaur',
    pdfPath: '/certificates/KIRANJOT.pdf',
    course: 'Digital Computer Application',
    issueDate: '05-01-2024'
  },
  '658': {
    name: 'Maninder Kaur',
    pdfPath: '/certificates/maninder kaur.pdf',
    course: 'Digital Computer Application',
    issueDate: '05-04-2025'
  },
  '656': {
    name: 'Navdeep Singh',
    pdfPath: '/certificates/NAVDEEP SINGH.pdf',
    course: 'Digital Computer Application',
    issueDate: '15-11-2024'
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