'use client';

import Header from '@/components/header';
import { useForm, ValidationError } from "@formspree/react";

export default function SupportPage() {
  // استبدل "YOUR_FORMSPREE_FORM_ID" بمعرف النموذج الخاص بك من Formspree
  const [state, handleSubmit] = useForm("mleyqqlg");
  
  if (state.succeeded) {
    return (
      <>
        <Header/>
        <div className="min-h-screen   bg-gradient-to-br from-orange-00 to-black">
          <div className="pt-40 flex flex-col items-center justify-center px-6">
            <div className="w-full max-w-4xl bg-black bg-opacity-90 p-8 rounded-lg shadow-lg mt-10">
              <div className="text-center py-20">
                <h2 className="text-3xl font-bold text-orange-400">شكراً لتواصلك معنا!</h2>
                <p className="text-lg text-gray-300 mt-4">سنقوم بالرد عليك في أقرب وقت ممكن.</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Header/>
      <div className="min-h-screen rounded-3xl my-20 bg-gradient-to-br from-orange-600 to-black">
        <div className="pt-20 flex flex-col items-center justify-center px-6">
          <div className="w-full max-w-4xl bg-black bg-opacity-90 p-8 rounded-lg shadow-lg mt-10">
            <h1 className="text-4xl font-bold text-orange-400 mb-6 text-center">الدعم الفني</h1>
            <p className="text-lg text-gray-300 mb-8 text-center">
              نحن هنا لمساعدتك. إذا كنت بحاجة إلى دعم، يرجى استخدام النموذج أدناه أو التواصل معنا مباشرة عبر طرق التواصل.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* إدخال الاسم */}
              <div>
                <label className="block text-lg font-medium text-orange-300 mb-1" htmlFor="name">الاسم:</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  className="mt-1 block w-full px-4 py-3 rounded-md bg-gray-800 text-white border-orange-500 shadow-sm focus:ring-orange-500 focus:border-orange-500"
                />
                <ValidationError 
                  prefix="الاسم" 
                  field="name" 
                  errors={state.errors}
                  className="text-red-500 mt-1"
                />
              </div>

              {/* إدخال البريد الإلكتروني */}
              <div>
                <label className="block text-lg font-medium text-orange-300 mb-1" htmlFor="email">البريد الإلكتروني:</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  className="mt-1 block w-full px-4 py-3 rounded-md bg-gray-800 text-white border-orange-500 shadow-sm focus:ring-orange-500 focus:border-orange-500"
                />
                <ValidationError 
                  prefix="البريد الإلكتروني" 
                  field="email" 
                  errors={state.errors}
                  className="text-red-500 mt-1"
                />
              </div>

              {/* إدخال الرسالة */}
              <div>
                <label className="block text-lg font-medium text-orange-300 mb-1" htmlFor="message">الرسالة:</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="mt-1 block w-full px-4 py-3 rounded-md bg-gray-800 text-white border-orange-500 shadow-sm focus:ring-orange-500 focus:border-orange-500"
                ></textarea>
                <ValidationError 
                  prefix="الرسالة" 
                  field="message" 
                  errors={state.errors}
                  className="text-red-500 mt-1"
                />
              </div>

              {/* زر الإرسال */}
              <button
                type="submit"
                disabled={state.submitting}
                className="w-full bg-orange-600 text-black py-3 px-6 rounded-md shadow-md hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-colors"
              >
                {state.submitting ? 'جارٍ الإرسال...' : 'إرسال الرسالة'}
              </button>
            </form>

            {/* طرق التواصل الأخرى */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-orange-400 mb-4">طرق التواصل الأخرى:</h3>
              <ul className="text-lg text-gray-300 space-y-2">
                <li><strong>البريد الإلكتروني:</strong> <a href="mailto:3zzoezzo@gmail.com" className="text-orange-300 hover:underline">3zzoezzo@gmail.com</a></li>
                <li dir='rtl'><strong>رقم الهاتف:</strong> +966503405496</li>
                <li><strong>أوقات العمل:</strong> الدعم الفني متاح طوال أيام الأسبوع من الساعة 9 صباحاً وحتى 5 مساءً.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
