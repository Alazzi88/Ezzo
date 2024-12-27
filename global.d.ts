// global.d.ts

// نجعل الملف Module بإضافة export فارغ
export {};

declare global {
  // هنا تعريف Window.adsbygoogle (اختياري إذا كنت تستخدمه)
  interface Window {
    adsbygoogle: any[];
  }

  // واجهة مخصّصة للخصائص الإضافية
  interface AmpAutoAdsProps extends React.HTMLAttributes<HTMLElement> {
    type?: string;
    "data-ad-client"?: string;
  }

  // نحدّث تعريف JSX بحيث يتعرّف على amp-auto-ads مع الخصائص المخصّصة
  namespace JSX {
    interface IntrinsicElements {
      "amp-auto-ads": React.DetailedHTMLProps<AmpAutoAdsProps, HTMLElement>;
    }
  }
}
