import React, { forwardRef } from 'react';

const DataRetentionPolicy = forwardRef((props,ref) => {
  return (
    <div className="container mx-auto px-4 py-8" ref={ref}>
      <h1 className="text-3xl font-bold mb-6">Data Retention Policy</h1>
      <p className="text-gray-700 mb-4">
        At Innomatrics Technologies, we are committed to protecting your privacy and ensuring the security of your personal data. This Data Retention Policy outlines how we manage and retain data collected through our website and services.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Data Collection</h2>
      <p className="text-gray-700 mb-4">
        We collect and process personal data for the purposes of providing our services and improving user experience. This may include information such as name, email address, phone number, and other contact details provided by users.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Data Retention Period</h2>
      <p className="text-gray-700 mb-4">
        We retain personal data only for as long as necessary to fulfill the purposes for which it was collected, including legal, accounting, or reporting requirements. The retention period may vary depending on the type of data and applicable laws and regulations.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
      <p className="text-gray-700 mb-4">
        We implement appropriate technical and organizational measures to protect personal data against unauthorized access, disclosure, alteration, or destruction. Access to personal data is restricted to authorized personnel who need to know the information for legitimate business purposes.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Data Deletion</h2>
      <p className="text-gray-700 mb-4">
        At the end of the retention period, or upon request, we will securely delete or anonymize personal data in our possession, unless we are required by law to retain it or have a legitimate business need to retain the data.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
      <p className="text-gray-700 mb-4">
        If you have any questions or concerns about our Data Retention Policy, please contact us at hello@innomatricstech.com.
      </p>
    </div>
  );
})

export default DataRetentionPolicy;
