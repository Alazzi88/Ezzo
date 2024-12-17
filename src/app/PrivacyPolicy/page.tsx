import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="p-8 bg-white text-gray-800 rounded-lg shadow-md max-w-4xl mx-auto my-10">
      <h1 className="text-3xl font-bold mb-6 text-center">سياسة الخصوصية</h1>
      <p className="mb-4">
        نقدر اهتمامك واهتمامك بخصوصية بياناتك. توضح سياسة الخصوصية هذه كيف نقوم بجمع بياناتك واستخدامها ومشاركتها عند استخدامك لموقعنا.
      </p>

      <h2 className="text-2xl font-semibold mb-3">المعلومات التي نجمعها</h2>
      <p className="mb-4">
        نقوم بجمع بعض المعلومات الشخصية مثل اسمك، وبريدك الإلكتروني، ومعلومات التواصل عندما تقدمها طوعًا عند التسجيل أو الاشتراك في خدماتنا.
      </p>

      <h2 className="text-2xl font-semibold mb-3">كيفية استخدام المعلومات</h2>
      <p className="mb-4">
        نستخدم المعلومات التي نجمعها لأغراض مثل:
        <ul className="list-disc pl-5 mt-2">
          <li>تقديم الخدمات وتحسين تجربة المستخدم.</li>
          <li>التواصل معك بشأن التحديثات والعروض.</li>
          <li>الرد على استفساراتك ودعمك.</li>
        </ul>
      </p>

      <h2 className="text-2xl font-semibold mb-3">مشاركة البيانات</h2>
      <p className="mb-4">
        نحن لا نبيع أو نؤجر بياناتك الشخصية لطرف ثالث. قد نشارك المعلومات مع مزودي الخدمات المعتمدين لأغراض تشغيل موقعنا.
      </p>

      <h2 className="text-2xl font-semibold mb-3">أمان المعلومات</h2>
      <p className="mb-4">
        نتخذ تدابير أمان مناسبة لحماية بياناتك من الوصول غير المصرح به أو التغيير أو الكشف.
      </p>

      <h2 className="text-2xl font-semibold mb-3">التغييرات على سياسة الخصوصية</h2>
      <p className="mb-4">
        قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سيتم نشر التحديثات على هذه الصفحة.
      </p>

      <p className="mt-6 text-sm text-center">
        إذا كان لديك أي أسئلة حول سياسة الخصوصية، يمكنك التواصل معنا عبر البريد الإلكتروني.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
