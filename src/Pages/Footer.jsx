import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, Youtube, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <div>
              <img src="https://s3-alpha-sig.figma.com/img/82e8/4eb8/edb88ebc1b6b172d212a0041231bd78a?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i~E3pptIpwAgRRn4JPF-GGT-AiwXX0bWHw1AS3xe1xEt-GlcEm4kGNzdz5G8Yhq0Mr4TBFT7pxc1oXaPi9MlMnHFN7NGm5ZsAS1fabsQaXW9-moqYVPXLG18sA4Q1WoNHkwoR~cHoEuVQPnYYjRITKJsIIoTNIQavF51yr6MWdIIo0Tpc8jZGCIYsM3242plDWy6S4CcyUnJbojsc--IqZqt1AqSeNKfa4~eCsvTSRcZ9uDQ2MigzTU1yG4eyHDZzr3xwLuEmFmJrBsCXFblbQfT76UMYTLMKjb-SLB1AR4WFwopJ6PC9hwafSsy65E7afUXAMXfpdtPM0pL4K1YNg__" width={200} alt="logo" />
            </div>
          </div>
          <div className="mt-4">
            <div className="flex mt-[3rem]">
              <input
                type="email"
                placeholder="Enter Email"
                className="px-4 py-2 rounded-l text-slate-800 flex-1"
              />
              <button className="bg-orange-500 text-white px-4 py-2 rounded-r hover:bg-orange-600 transition">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-bold text-xl mb-4">CONTACT</h3>
          <div className="space-y-3 text-gray-400">
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5" />
              <span>(406) 555-0120</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-5 h-5" />
              <span>mangocoding123@gmail.com</span>
            </div>
            <div className="flex items-start space-x-2">
              <MapPin className="w-5 h-5 mt-1" />
              <span>Agra-Delhi Highway,<br />Sikandra Agra-282 007</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-bold text-xl mb-4">SOCIALS</h3>
          <div className="space-y-3 text-gray-400">
            <div className="flex items-center space-x-2 hover:text-orange-500 cursor-pointer">
              <Instagram className="w-5 h-5" />
              <span>INSTAGRAM</span>
            </div>
            <div className="flex items-center space-x-2 hover:text-orange-500 cursor-pointer">
              <Facebook className="w-5 h-5" />
              <span>FACEBOOK</span>
            </div>
            <div className="flex items-center space-x-2 hover:text-orange-500 cursor-pointer">
              <Twitter className="w-5 h-5" />
              <span>TWITTER</span>
            </div>
            <div className="flex items-center space-x-2 hover:text-orange-500 cursor-pointer">
              <Youtube className="w-5 h-5" />
              <span>YOUTUBE</span>
            </div>
            <div className="flex items-center space-x-2 hover:text-orange-500 cursor-pointer">
              <Linkedin className="w-5 h-5" />
              <span>LINKEDIN</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-bold text-xl mb-4">MAPS LOCATION</h3>
          <div className="w-full h-48 bg-gray-200 rounded overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3548.66370398453!2d78.0078851!3d27.1983046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397477bd7ab9d7cb%3A0x7d3a09f1400c3413!2sMediaX%20%7C%20Creative%20Growth%20Agency!5e0!3m2!1sen!2sin!4v1734367817883!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;