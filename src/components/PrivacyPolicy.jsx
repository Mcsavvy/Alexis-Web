function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto p-5">
      <h1 className="text-3xl font-bold text-center mb-4">
        Privacy Policy for the ALEXIS Extension
      </h1>
      <p className="mb-2">Effective Date: 9th March 2024</p>
      <p className="mb-4">
        Welcome to the ALEXIS Extension. Your privacy is crucial to us, and this
        Privacy Policy outlines how we collect, use, and protect your
        information while you use our extension. By installing and using the
        ALEXIS Extension, you agree to the collection and use of information in
        accordance with this policy.
      </p>
      <h2 className="text-2xl font-semibold mb-3">
        Information Collection and Use
      </h2>
      <h3 className="text-xl font-semibold mb-2">Data We Collect:</h3>
      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>Usage Data:</strong> We collect data on how you interact with
          the ALEXIS Extension, such as features used and frequency of use. This
          data helps us improve your experience.
        </li>
        <li>
          <strong>Project and Task Information:</strong> The extension may
          request access to project names, IDs, and related task information
          from your browser to provide relevant assistance. This information is
          used solely within the context of the extension’s functionality.
        </li>
      </ul>
      <h3 className="text-xl font-semibold mb-2">Data We Do Not Collect:</h3>
      <ul className="list-disc list-inside mb-4">
        <li>
          We do <strong>not</strong> collect any personal identifying
          information (PII) such as names, email addresses, or location data.
        </li>
        <li>
          We do <strong>not</strong> store or have access to your ALX account
          credentials or any other sensitive personal information.
        </li>
      </ul>
      {/* Continue with the rest of the content following the structure above */}
      <p className="mb-4">
        If you have any questions or concerns about this Privacy Policy, please
        contact us at{" "}
        <a
          href="mailto:futurdevsalexis@gmail.com"
          className="text-blue-600 underline"
        >
          futurdevsalexis@gmail.com
        </a>
        .
      </p>
    </div>
  );
}

export default PrivacyPolicy;
