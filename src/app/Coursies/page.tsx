import Header from "@/components/header";
import Image from "next/image";
import Link from "next/link";

const courses = [
  {
    id: 1,
    name: 'دورة الشموع اليابانية',
    category: 'تحليل فني',
    href: '/courses/candle',
    price: '',
    imageSrc: '/img/candle.webp',
    imageAlt: 'دورة الشموع اليابانية',
    comingSoon: true,
  },
  {
    id: 2,
    name: 'دورة البرايس أكشن',
    category: 'تحليل فني',
    href: '/courses/priceaction',
    price: '',
    imageSrc: '/img/priceaction.webp',
    imageAlt: 'دورة البرايس أكشن',
    comingSoon: true,
  },
  {
    id: 3,
    name: 'الدورة الرقمية',
    category: 'تحليل رقمي',
    href: '/courses/number',
    price: '',
    imageSrc: '/img/number.webp',
    imageAlt: 'الدورة الرقمية',
    comingSoon: true,
  },
];

export default function CourseList() {
  return (
    <>
    
  
    <Header />
    <div className="bg-black">
  
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
  
        <div className="flex items-center justify-between space-x-4">
          <h2 className="text-lg font-medium text-orange-500">دورات التحليل الفني</h2>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-3">
          {courses.map((course) => (
            <div key={course.id} className="group relative">
              <div className="relative">
                <Image
                  loading="lazy"
                  alt={course.imageAlt}
                  src={course.imageSrc}
                  width={400}
                  height={300}
                  className="aspect-[4/3] w-full rounded-lg bg-gray-100 object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100"
                >
                  <div className="w-full rounded-md bg-black/75 px-4 py-2 text-center text-sm font-medium text-orange-400 backdrop-blur backdrop-filter">
                    عرض الدورة
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between space-x-8 text-base font-medium text-white">
                <h3>
                  <Link href={course.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {course.name} {course.comingSoon && <span className="text-sm text-orange-500"> (قريبًا)</span>}
                  </Link>
                </h3>
                <p className="text-orange-400">{course.price}</p>
              </div>
              <p className="mt-1 text-sm text-gray-400">{course.category}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}
