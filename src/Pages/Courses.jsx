import React, { useEffect, useState } from "react";

const Courses = () => {
  const courses = [
    { id: 1, name: "B.Sc BIOTECHNOLOGY" },
    { id: 2, name: "MBA (Master Of Business Administration)" },
    { id: 3, name: "M.Sc BIOTECHNOLOGY" },
    { id: 4, name: "BBA (Bachelor Of Business Administration)" },
    { id: 5, name: "PGDMA/GDMA" },
    { id: 6, name: "B.COM (Bachelor Of Commerce)" },
    { id: 7, name: "BCA (Bachelor Of Computer Application)" },
    { id: 8, name: "BBA (Business Administration In Logistics)" },
    { id: 9, name: "B.Sc (In Tourism & Hospitality Operations)" },
    { id: 10, name: "BIOTECHNOLOGY" },
  ];

  const [visibleCourses, setVisibleCourses] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".course-item");
      const windowHeight = window.innerHeight;

      elements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < windowHeight - 50) {
          setVisibleCourses((prev) =>
            prev.includes(index) ? prev : [...prev, index]
          );
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="courses" className="py-16 bg-gray-100 relative">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            'url("https://s3-alpha-sig.figma.com/img/69e8/eeae/a0545f6f7265d739a154d533909eccca?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pTsL19YWJ0ywIBjFnwqbdZ4up6gQrwqxZ-dBYSV4pIpjIO8j0bqdV~A-wcWN1WXRb46TUuW5jTKukqLK4x6e108PkbuwC7q6iRBCd4JpLJPkt7CDS0fDJM0hB2ypk0zG9zZ5eey9fTKjhYW25rI-YbMW6JxMy7bcAW6RSkTzdXwt2PKpckcC-I40q4h9dSWyCTi4Av2vjvYugoqa5uWwZVc9Ez9xG7xpaI533Vu81Mf8beTOgd2lubSzWSQMplFcjKtbc9Iu0t8pFsv3PDXNTAeF4st7X4NjqwkYLd-Pk7lm0KFCFe-OT7vCy0w5yP2wPK59yi1X-cz1rnoG0ijZCg__")',
        }}
      ></div>
      <div className="absolute inset-0 bg-blue-900 bg-opacity-70 z-10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">COURSES OFFERED</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <div
              key={course.id}
              className={`course-item p-4 rounded-lg shadow-lg flex items-center justify-between opacity-0 transform translate-y-5 transition-all duration-500 ${visibleCourses.includes(index) ? "opacity-100 translate-y-0" : ""
                } ${course.id % 2 === 0
                  ? "bg-gray-800 text-white"
                  : "bg-orange-500 text-white"
                }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="flex-1 font-medium text-sm md:text-base">
                {course.name}
              </span>
              <span className="w-10 h-10 bg-white text-gray-800 rounded-full flex items-center justify-center font-bold">
                {String(course.id).padStart(2, "0")}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
