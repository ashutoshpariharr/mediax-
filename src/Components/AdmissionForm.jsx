import React from 'react';

const AdmissionForm = () => {
    return (
        <div className="min-h-screen relative bg-gradient-to-r from-rose-100 to-rose-200">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url('https://s3-alpha-sig.figma.com/img/faee/ee90/41efa3094534d21a10ee007b0e9dda8a?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DzJvadSTFH9Pfs1cc8oCROngQhxUhNFelx0O0MJAGoQjTehqy32gD-vstE2K91Wu9-3MUYxhYXqf4jLrGKsyDEoWbu99-DB0e-LaIVU1GJX6dbJwXYAwOvn-Rt~Lpb-Suy4clIvuCFKiT0Mww690AxbXf42CLVJpgtvgBl9OCo9UfO-2UiwKd7vEb6xroqklATkggtuwFA5Vd1VFQR0E6WG7yd-8oQmAjFcEvncbxuc-NVpVE9a9nvg0BqI~gAsd4otdtj15KVZDXj7QAwNie-UrJKZvvqo-0XPTKWAnMbg6cH8xTJ5OVlIvOxy5tY-UGgwjbojfuxdD5qNW6jg2bA__')`,
                    filter: 'blur(4px)'
                }}
            />

            <div className="relative min-h-screen flex items-center justify-center p-4">
                <div className="bg-white rounded-lg shadow-xl w-full max-w-xl overflow-hidden">
                    <div className="h-2 bg-red-500" />

                    <div className="p-8">
                        <h1 className="text-3xl font-bold text-center text-slate-800 mb-4">
                            RESERVE YOUR SEAT
                        </h1>

                        <p className="text-center text-gray-600 mb-2">
                            Admissions are open for 2024-25 session.
                        </p>
                        <p className="text-center text-gray-600 mb-8">
                            If you would like an MPS Counsellor to contact you,
                            <br />please fill in your details below.
                        </p>

                        <form className="space-y-4">
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                            />

                            <input
                                type="email"
                                placeholder="Email ID"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                            />

                            <input
                                type="tel"
                                placeholder="Mobile No."
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                            />

                            <select
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-600"
                                defaultValue=""
                            >
                                <option value="" disabled>Select course you are interested in</option>
                                <option value="course1">Course 1</option>
                                <option value="course2">Course 2</option>
                            </select>

                            <input
                                type="text"
                                placeholder="Year of Passing"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                            />

                            <div className="flex gap-4 pt-4">
                                <button
                                    type="submit"
                                    className="flex-1 bg-red-500 text-white py-3 px-6 rounded-lg hover:bg-red-600 transition-colors"
                                >
                                    Get a call back
                                </button>

                                <a href="#campus">
                                    <button
                                        type="button"
                                        className="flex-1 border border-slate-800 text-slate-800 py-3 px-6 rounded-lg hover:bg-slate-50 transition-colors"
                                    >
                                        Download brochure
                                    </button>
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdmissionForm;