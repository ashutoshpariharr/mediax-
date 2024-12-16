import React, { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    images: [
      {
        src: "https://s3-alpha-sig.figma.com/img/84cb/3fee/457822da4cb0d4913febdb87bb4deed7?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BwjYp7DkJu9fcw1AP2mQtmmFxcnK29uR9E9jAsrx2-MWnztQLiR322izMm6t185bmW-EHPYnCPCN0O8sDFEK09KYPSJRjUmzgOpZZaWY8aDTdvoW-prftLYQEUlit5qAjWAN-AskODm5qIcdHBJapum88-O-98Sh8K6lWqG~fhQzE3oHAQunbpv9UV5rzVpAUY6Y6ErlpY62LLDKkiyRYktSLWMjfEKd-xCYI5E8I7Sjire00Qm4R629kBSBjIOm0h-hMj~58HQ8a8vDtjUjg8smUSneIGfkRb3NcqysR3JQtKcRVEhK8Z~Fy0uHB8Lo7nzIjXN7VfbYIE2UC5KNzQ__",
        className: "col-span-2 row-span-2",
        alt: "Concert performance"
      },
      {
        src: "https://s3-alpha-sig.figma.com/img/95e1/9882/ebbffe0c6825c20d03dc9c540a1cd9b2?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RIkRoCcylVktTmlbVprLuO8-hTF1q4501GQ75PvX1eEjLKYxL3PmrKNA7vik5s5ZJYwH1sttp756nwqisSxJmhEKK3YXgCbasXPcHWR4HVjQY1iR37Cg8LNanXuB489HsD-2IiSlBgUAd2pjIpgx8BVHH42TcvsEcANrXQuRaVAKWehVRsFoNKmKwOA8hauHt6v8JnRRhExwtwGnoUQLMxHaXUAWrvUPXdalEymSU5zUcbPDgI1imq40Ot0-hAxJYw4DZLvEqySqE9w84t2Zy9jwu7gVr3Vue6gSePLMN3qB8q6BeOQquUZ6TEUO2M8D3BSsAfrNEqAhhq~b-J~nsA__",
        className: "col-span-1",
        alt: "Study area"
      },
      {
        src: "https://s3-alpha-sig.figma.com/img/6a25/e0bd/ac44cd31d041df63936d867f4e4384e0?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BKZB0mK5dMtBafaHTIahtOLVYXPxalqETnuIem8P~FmWGig8mNeASoRz7KrobAxkQPpsxZgdE5VgaLLZ4SKZZXfO17HEiTw9Bbr62YBsT8B0blkMoeELa0rtiHvZV3QQmyol~OP3m~slYEXq3jOe3BRM3haQse9I8wtJVDU9xYSUf~dpmArvE0d~jv1bpoDuUqzN2pOhTgqxtNUT5waF9z1EhK4~1LRGHAJM-xOGfl0Lddjvlf8MaHgU5nrLn263jjbbBRYBeIMhWbWf-Zy3kJKu3fzBL0D5A3Fmeep9~ARBi-k6haa03U5-8UZ7TbsYl2QgzkV18WlFA9OZar~lRg__",
        className: "col-span-1",
        alt: "Students talking"
      },
      {
        src: "https://s3-alpha-sig.figma.com/img/431c/4a22/e367eae509701e789a6bf166a389757c?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CqEm9FbMR86N0NKbyPd8QkO19b7vE5d3WYO8Hwbi4hlsW9BGG4F44GOE1X3JIB03IvkCHAEnvebumyZpsWQ1J8lJL8r4qVK6icWn-AuMnUdImMs1xutuerJI-ZCJwodFKcNkzzUuCO2rBngGHjkmhaSaLFf3dlsyjfLX886K1PEKZamB7ndotRiGqM5FcK3rvTVg5sXJZDGDuaKiGtlSFPLt9Qviti8KS3bu3teiqgEbqtnot4tlBzEOqJ3qq5oaTO7nWLhLEl3VSDiDAf4sKayNDmqrPyN5AdJxMqKCMa5UsOeQClF8XQBzHeGVi8PTzvUxVECcC8pJHi7AXXFymw__",
        className: "col-span-1",
        alt: "Graduate"
      },
      {
        src: "https://s3-alpha-sig.figma.com/img/a9b9/49f6/987d5e8cc358725ad4a72302faf0497c?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JKjeojBorUdP16gruUy6MTh9D-db0rhFDpbX7LgqAhdMMdgeyEE9oJiP5XLEcOiIPo9M5TLnd8Expkl4hL-fwR8QjrUs78TqufyoJQSYMwGDm7QbKfAORiV9xigmVXjhijWyUYqpZpWSgQGdUqCACp3wCzTAGbejaosHJM~abWJqVZpqVu4ZU~0Tx~KOzlTwxPeTJxQ4ZPhvkBoIc30gC4lMrjpOJi3ZUfMG3CCsECj708fzcevu~Xjq1cEMx4HM9iFn4rIijNOkAB2bLVfEdSct0IrKinX6aJgX4dSHJk3P7pc-GuLcCTeSAkCXXjSc~KYWSupP6CTTLMkKhUOEFw__",
        className: "col-span-1",
        alt: "Students walking"
      },
      {
        src: "https://s3-alpha-sig.figma.com/img/6131/adc4/c3f4d5eeeeddcd53f68971462f2d47f2?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KnDj56Xgd0-24Md07qMNA0d5T0gdG045ws44TGxWWn0axUPHi6qOqNv2D1Cr1e1~q3nceERPxSlhqSyCAXixzGloFmzUa~JQq5bnjdg9Lu49Kmy8Q3izWIZ22pmRkWePVxSYUk2b5im5Q5dRRcEoOTGt-KGsjb9zN-CbWX5urfwpfoW0IdsCvlrN0EAShVjE776SIo~-~fqE4Qs20Ufu0MJ27rXAwkT~RDb3mQnVp9WwT82mjFqZjlkZztKSC4MmDqNYSm98zceR811c7QvFWD-sZ~~Q3vNzvLBTCJcAmJHydkQeyZ9QRYWrBtG0L3gt52bje7S84e1fTyAU1QU4kg__",
        className: "col-span-2",
        alt: "Campus building"
      },
      {
        src: "https://s3-alpha-sig.figma.com/img/95e1/9882/ebbffe0c6825c20d03dc9c540a1cd9b2?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RIkRoCcylVktTmlbVprLuO8-hTF1q4501GQ75PvX1eEjLKYxL3PmrKNA7vik5s5ZJYwH1sttp756nwqisSxJmhEKK3YXgCbasXPcHWR4HVjQY1iR37Cg8LNanXuB489HsD-2IiSlBgUAd2pjIpgx8BVHH42TcvsEcANrXQuRaVAKWehVRsFoNKmKwOA8hauHt6v8JnRRhExwtwGnoUQLMxHaXUAWrvUPXdalEymSU5zUcbPDgI1imq40Ot0-hAxJYw4DZLvEqySqE9w84t2Zy9jwu7gVr3Vue6gSePLMN3qB8q6BeOQquUZ6TEUO2M8D3BSsAfrNEqAhhq~b-J~nsA__",
        className: "col-span-1",
        alt: "Study area"
      },
      {
        src: "https://s3-alpha-sig.figma.com/img/431c/4a22/e367eae509701e789a6bf166a389757c?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CqEm9FbMR86N0NKbyPd8QkO19b7vE5d3WYO8Hwbi4hlsW9BGG4F44GOE1X3JIB03IvkCHAEnvebumyZpsWQ1J8lJL8r4qVK6icWn-AuMnUdImMs1xutuerJI-ZCJwodFKcNkzzUuCO2rBngGHjkmhaSaLFf3dlsyjfLX886K1PEKZamB7ndotRiGqM5FcK3rvTVg5sXJZDGDuaKiGtlSFPLt9Qviti8KS3bu3teiqgEbqtnot4tlBzEOqJ3qq5oaTO7nWLhLEl3VSDiDAf4sKayNDmqrPyN5AdJxMqKCMa5UsOeQClF8XQBzHeGVi8PTzvUxVECcC8pJHi7AXXFymw__",
        className: "col-span-1",
        alt: "Graduate"
      },
    ],
  },
];

const CampusSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 2000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-[4rem] flex justify-center items-center">
        <div className="w-2 h-8 bg-orange-500 mr-3"></div>
        <h2 className="text-4xl font-bold text-blue-900">LIFE AT CAMPUS</h2>
      </div>

      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div key={slide.id} className="w-full flex-shrink-0">
              <div className="grid grid-cols-4 gap-4">
                {slide.images.map((image, imgIndex) => (
                  <div
                    key={imgIndex}
                    className={`relative overflow-hidden ${image.className}`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${currentSlide === index ? 'bg-red-500' : 'bg-gray-300'
                }`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CampusSlider;
