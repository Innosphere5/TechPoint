// certificateData.js
// Certificate database mapping registration numbers to PDF files

export const certificateDatabase = {

  '751': {
    name: 'Manpreet kaur',
    pdfPath: '/certificates/MANPREET KAUR CERT.pdf'
  },
  '750': {
    name: 'Uday Kumar',
    pdfPath: '/certificates/UDAY KUMAR.pdf'
  },
  '715': {
    name: 'Nikhil Singh',
    pdfPath: '/certificates/nikhil.pdf'
  },
  '713': {
    name: 'Sandeep kaur',
    pdfPath: '/certificates/sandeep.pdf'
  },
  '530': {
    name: 'Naina Rani',
    pdfPath: '/certificates/NAINA RANI.pdf'
  },
  '712': {
    name: 'Praneet kaur',
    pdfPath: '/certificates/praneet.pdf'
  },
  '711': {
    name: 'Harpreet kaur',
    pdfPath: '/certificates/harpreet.pdf'
  },
  '705': {
    name: 'Nirmal Singh',
    pdfPath: '/certificates/nirmal.pdf'
  },
  '704': {
    name: 'Amritpal Singh',
    pdfPath: '/certificates/amritpal.pdf'
  },
  '706': {
    name: 'Manpreet kaur',
    pdfPath: '/certificates/MANPREET KAUR1 (1).pdf'
  },
  '648': {
    name: 'Mehak kaur',
    pdfPath: '/certificates/MEHAK KAUR.pdf'
  },
  '708': {
    name: 'Simarjit kaur',
    pdfPath: '/certificates/SIMARJIT KAUR1.pdf'
  },
  '707': {
    name: 'Manjot kaur',
    pdfPath: '/certificates/MANJOT KAUR.pdf'
  },
  '695': {
    name: 'Simranjeet kaur',
    pdfPath: '/certificates/simranjeet.pdf'
  },
  '710': {
    name: 'Anureet kaur',
    pdfPath: '/certificates/Anureet kaur certificate.pdf'
  },
  '597': {
    name: 'Prabhdeep Singh',
    pdfPath: '/certificates/prabhdeep singh.pdf'
  },
  '599': {
    name: 'Navjot Singh',
    pdfPath: '/certificates/navjot singh.pdf'
  },
  '687': {
    name: 'Rupanshi ',
    pdfPath: '/certificates/RUPANSI CERT.pdf'
  },
  '688': {
    name: 'Jashanpreet kaur ',
    pdfPath: '/certificates/jashan.pdf'
  },
  '689': {
    name: 'Diksha Rani',
    pdfPath: '/certificates/DIKSHA11.pdf'
  },
  '654': {
    name: 'Raman malhotra',
    pdfPath: '/certificates/Raman.pdf'
  },
  '692': {
    name: 'Manpreet kaur',
    pdfPath: '/certificates/MANPREET KAUR.pdf'
  },
  '682': {
    name: 'Bhavar dhiman',
    pdfPath: '/certificates/bhavar.pdf'
  },
  '680': {
    name: 'Samneet Garg',
    pdfPath: '/certificates/SAMNEET GARG.pdf'
  },
  '661': {
    name: 'Nagma Salmani',
    pdfPath: '/certificates/NAGMA CERTIFICATE N.pdf'
  },
  '646': {
    name: 'Mohit kumar',
    pdfPath: '/certificates/MOHIT BROTHER N.pdf'
  },
  '650': {
    name: 'Tarun Vaid',
    pdfPath: '/certificates/TARUN VAID.pdf'
  },
  '678': {
    name: 'Mehak',
    pdfPath: '/certificates/MEHAK.pdf'
  },
  '671': {
    name: 'Manju',
    pdfPath: '/certificates/MANJU CERT 1.pdf'
  },
  '659': {
    name: 'Simran Sharma',
    pdfPath: '/certificates/simran.pdf'
  },
  '660': {
    name: 'Manjot Singh',
    pdfPath: '/certificates/MANJOT SINGH.pdf'
  },
  '694': {
    name: 'Amandeep Singh',
    pdfPath: '/certificates/AMANDEEP SINGH123.pdf'
  },
  '691': {
    name: 'Jaspreet Singh',
    pdfPath: '/certificates/jass CERT.pdf'
  },
  '690': {
    name: 'GURWINDER',
    pdfPath: '/certificates/GURWINDER.pdf'
  },
  '649': {
    name: 'Sukhjinder Singh',
    pdfPath: '/certificates/SUKHJINDER SINGH.pdf'
  },
  '651': {
    name: 'JASPREET KAUR',
    pdfPath: '/certificates/JASPREET KAUR.pdf'
  },
  '655': {
    name: 'Kiranjot Kaur',
    pdfPath: '/certificates/KIRANJOT.pdf'
  },
  '658': {
    name: 'Maninder Kaur',
    pdfPath: '/certificates/maninder kaur.pdf'
  },
  '656': {
    name: 'Navdeep Singh',
    pdfPath: '/certificates/NAVDEEP SINGH.pdf'
  },
  '400': {
    name: 'KAJALPREET KAUR',
    pdfPath: '/certificates/KAJALPREET KAUR DCA.pdf'
  },
  '652': {
    name: 'KARMANJOT',
    pdfPath: '/certificates/KARMANJOT.pdf'
  },
  '401': {
    name: 'SPOKEN ENGLISH STUDENT',
    pdfPath: '/certificates/SPOKEN.pdf'
  },
  '653': {
    name: 'YASHKARAN',
    pdfPath: '/certificates/YASHKARAN1.pdf'
  },
  '13': {
    name: 'TEACHING EXPERIENCE',
    pdfPath: '/certificates/teaching experience cert - Copy.pdf'
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