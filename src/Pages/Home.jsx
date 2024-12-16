const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gray-900 flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#17344a] via-transparent animate-gradient-move"
        ></div>
        <img
          src="https://s3-alpha-sig.figma.com/img/7879/d859/19be8d7d1978abbc14909fb7e90d6c50?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cspLEf~kKSMLRx7YDPgvrBPwbYWAW7Yhxnruh7XHF9ULn3Kq8KX~WwyM~v1ob9iwpZyIWzupbPQ~oXS0K88Bm8tbYRbCM5SxmFgsx1QgC~Q6fQOv5NdAI9eW-oZvBrsWWaoyGtdidnZYwQq6-bH3etjBsJtrneTHVbhUJ-~ybnY4QAPdy76FE8KFyL4iT3D1~3WViVFE-XT8FsEflJhczqcA6Rn1YRK3GcVNIZv6OOphwBe0BAyhyqTNgN9IfRqxapm5Cg3KnFHsEddXmTMRnKqfQ6FJhpspRHfzO9evNLKqMP-JBVvYUnG8TESTP~Op5QYvoDV9QwcipXbCPLbZLA__"
          alt="Background"
          className="w-full h-full object-cover opacity-40 animate-fade-in"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        <div className="text-white mb-8 md:mb-0 md:w-1/2 font-sans animate-slide-in-left">
          <h1 className="text-4xl md:text-6xl mb-4 font-normal leading-tight animate-fade-in">
            Shape your future at
            <span className="block text-orange-500 font-extrabold text-[55px] leading-none">
              {/* <span className="block font-extrabold text-[55px] leading-none"> */}
              Dr. MPS Group of Institutions
            </span>
          </h1>
          <hr className="text-orange-500 py-3" />
          <p className="text-xl mb-8 font-light animate-fade-in delay-200">
            ADMISSIONS OPEN - Start Your Journey Today!
          </p>
          <a href="#recruiters">
            <button className="bg-orange-500 text-white px-8 py-3 rounded-md hover:bg-orange-600 transition duration-300 animate-fade-in delay-300">
              RESERVE YOUR SEAT
            </button>
          </a>
        </div>

        <div className="w-full md:w-1/2 max-w-md animate-slide-in-right">
          <div className="bg-orange-500 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl text-white font-bold mb-4 text-center animate-fade-in">
              ENQUIRY FORM
            </h2>
            <p className="text-white mb-6 text-center animate-fade-in delay-100">
              Admissions are open for this year. If you would like to get a callback from our counsellor, then please fill your details below.
            </p>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 rounded"
              />
              <input
                type="email"
                placeholder="Email ID"
                className="w-full p-3 rounded"
              />
              <input
                type="tel"
                placeholder="Mobile No."
                className="w-full p-3 rounded"
              />
              <select className="w-full p-3 rounded">
                <option>Select course you are interested in</option>
              </select>
              <input
                type="text"
                placeholder="Year of Passing"
                className="w-full p-3 rounded"
              />
              <div className="flex gap-4">
                <a href="#recruiters">

                  <button className="bg-gray-900 text-white px-6 py-3 rounded hover:bg-gray-800 flex-1 transition duration-300">
                    Get a call back
                  </button>
                </a>
                <button
                  className="text-white px-6 py-3 rounded flex-1 border border-white hover:bg-white hover:text-black transition duration-300"
                >
                  Download brochure
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
