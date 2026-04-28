import React, { useState, useContext, useEffect } from 'react';
import { ThemeContext } from '../components/ThemeContext'; 

const Contact: React.FC = () => {
  const { theme } = useContext(ThemeContext); 


  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', subject: 'ზოგადი კითხვა', date: '', guests: '', message: '' });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const scriptSrc = "https://cdn.jsdelivr.net/gh/noumanqamar450/alertbox@main/version/1.0.2/alertbox.min.js";
    if (document.querySelector(`script[src="${scriptSrc}"]`)) {
      return;
    }
    const loadScript = () => {
      const script = document.createElement('script');
      script.src = scriptSrc;
      script.async = true;
      document.body.appendChild(script);
    };

    if ('requestIdleCallback' in window) {
      (window as any).requestIdleCallback(loadScript);
    } else {
      setTimeout(loadScript, 200);
    }
  }, []);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.firstName) newErrors.firstName = "სახელის მითითება სავალდებულოა!";
    else if (formData.firstName.length < 2) newErrors.firstName = "სახელი უნდა შეიცავდეს მინიმუმ 2 სიმბოლოს";
    else if (formData.firstName.length > 15) newErrors.firstName = "სახელი ძალიან გრძელია";

    if (!formData.lastName) newErrors.lastName = "გვარის მითითება სავალდებულოა!";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) newErrors.email = "ელ-ფოსტის მითითება სავალდებულოა!";
    else if (!emailRegex.test(formData.email)) newErrors.email = "ელ-ფოსტის ფორმატი არასწორია (აკლია @)";

    if (formData.subject === 'მაგიდის დაჯავშნა') {
      if (!formData.date) newErrors.date = "მიუთითეთ თარიღი და დრო!";
      if (!formData.guests) newErrors.guests = "მიუთითეთ სტუმრების რაოდენობა!";
    }

    if (!formData.message) newErrors.message = "შეტყობინების ველის შევსება სავალდებულოა!";
    else if (formData.message.length < 10) newErrors.message = "შეტყობინება უნდა შეიცავდეს მინიმუმ 10 სიმბოლოს";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      if ((window as any).alertbox) {
        (window as any).alertbox.render({
          alertIcon: 'success',
          title: 'მადლობა!',
          message: formData.subject === 'მაგიდის დაჯავშნა' ? 'მაგიდა წარმატებით დაიჯავშნა! ჩვენი გუნდი მალე დაგიკავშირდებათ.' : 'თქვენი შეტყობინება წარმატებით გაიგზავნა.',
          btnTitle: 'ოკ',
          themeColor: '#86459e'
        });
      } else {
        alert('მადლობა! შეტყობინება წარმატებით გაიგზავნა.');
      }

      setFormData({ firstName: '', lastName: '', email: '', subject: 'ზოგადი კითხვა', date: '', guests: '', message: '' });
    }
  };

  return (
    <section className={`py-12 md:py-20 px-4 min-h-screen flex flex-col items-center justify-center transition-colors duration-500 animate-fade-in ${
      theme === 'light' ? 'bg-[#F9F6FC]' : 'bg-[#252836]'
    }`}>
      
      <div className={`container mx-auto max-w-5xl flex flex-col lg:flex-row rounded-2xl overflow-hidden shadow-2xl transition-colors duration-500 ${
        theme === 'light' ? 'bg-white border border-[#C3B1E1]/30' : 'bg-[#1F1D2B] border border-gray-800'
      }`}>
        <div className={`w-full lg:w-5/12 p-8 md:p-10 flex flex-col justify-between gap-8 border-b lg:border-b-0 lg:border-r ${
          theme === 'light' ? 'border-gray-100' : 'border-gray-800/50'
        }`}>
          <div>
            <h2 className={`text-4xl font-black mb-4 tracking-tighter italic ${
              theme === 'light' ? 'text-[#4A0E4E]' : 'text-white'
            }`}>
              MOUVELINE
            </h2>
            <p className={`mb-8 leading-relaxed text-sm font-medium ${
              theme === 'light' ? 'text-gray-600' : 'text-[#ABBBC2]'
            }`}>
              დაგვიტოვეთ თქვენი მონაცემები და ჩვენი გუნდი უმოკლეს დროში დაგიკავშირდებათ.
            </p>
            
            <div className="space-y-6">
              
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 shrink-0 rounded-full bg-purple-600 flex items-center justify-center text-white shadow-lg shadow-purple-600/20 group-hover:scale-105 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" width="24" height="24" className="shrink-0">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className={`text-xs font-semibold mb-1 tracking-wider uppercase ${theme === 'light' ? 'text-gray-500' : 'text-[#ABBBC2]'}`}>მისამართი</span>
                  <span className={`font-bold ${theme === 'light' ? 'text-[#4A0E4E]' : 'text-white'}`}>ქუთაისი, საქართველო</span>
                </div>
              </div>

              
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 shrink-0 rounded-full bg-purple-600 flex items-center justify-center text-white shadow-lg shadow-purple-600/20 group-hover:scale-105 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" width="24" height="24" className="shrink-0">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className={`text-xs font-semibold mb-1 tracking-wider uppercase ${theme === 'light' ? 'text-gray-500' : 'text-[#ABBBC2]'}`}>ელ-ფოსტა</span>
                  <span className={`font-bold ${theme === 'light' ? 'text-[#4A0E4E]' : 'text-white'}`}>mouveline@gmail.com</span>
                </div>
              </div>

              
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 shrink-0 rounded-full bg-purple-600 flex items-center justify-center text-white shadow-lg shadow-purple-600/20 group-hover:scale-105 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" width="24" height="24" className="shrink-0">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.89-1.46-5.366-3.936-6.826-6.826l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className={`text-xs font-semibold mb-1 tracking-wider uppercase ${theme === 'light' ? 'text-gray-500' : 'text-[#ABBBC2]'}`}>ტელეფონი</span>
                  <span className={`font-bold ${theme === 'light' ? 'text-[#4A0E4E]' : 'text-white'}`}>+995 555 12 34 56</span>
                </div>
              </div>

            </div>
          </div>

          <div className="w-full h-[220px] rounded-xl overflow-hidden shadow-inner mt-4 bg-gray-800 border-none">
            <iframe
              title="Kutaisi Map"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              src="https://www.openstreetmap.org/export/embed.html?bbox=42.55%2C42.22%2C42.80%2C42.33&layer=mapnik&marker=42.2667%2C42.6944"
            ></iframe>
          </div>
        </div>
        <div className={`w-full lg:w-7/12 p-8 md:p-12 flex flex-col justify-center ${
          theme === 'light' ? 'bg-[#F9F6FC]/50' : 'bg-[#1F1D2B]'
        }`}>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            
            <h3 className={`text-2xl font-bold mb-2 ${theme === 'light' ? 'text-[#4A0E4E]' : 'text-white'}`}>
              მოგვწერეთ
            </h3>

            <div className="flex flex-col gap-5">
              {[
                { label: 'სახელი', name: 'firstName', type: 'text', placeholder: 'თქვენი სახელი' },
                { label: 'გვარი', name: 'lastName', type: 'text', placeholder: 'თქვენი გვარი' },
                { label: 'ელ-ფოსტა', name: 'email', type: 'email', placeholder: 'example@mail.com' }
              ].map((field) => (
                <div key={field.name} className="flex flex-col gap-2">
                  <label className={`text-sm font-semibold ml-1 ${
                    theme === 'light' ? 'text-[#4A0E4E]' : 'text-[#ABBBC2]'
                  }`}>{field.label}</label>
                  
                  <input
                    type={field.type}
                    name={field.name}
                    value={(formData as any)[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    className={`w-full px-4 py-3.5 rounded-lg border outline-none font-medium transition-all duration-300 ${
                      theme === 'light' 
                        ? "bg-white text-gray-800 border-gray-200 focus:border-purple-600 focus:ring-4 focus:ring-purple-600/10" 
                        : "bg-[#2D303E] text-white border-[#393C49] focus:border-purple-600 focus:ring-4 focus:ring-purple-600/20 placeholder-[#ABBBC2]"
                    } ${
                      errors[field.name] ? "!border-red-500 focus:!ring-red-500/20" : ""
                    }`}
                  />
                  {errors[field.name] && (
                    <span className="text-red-500 text-xs ml-1 font-bold animate-pulse">{errors[field.name]}</span>
                  )}
                </div>
              ))}

              <div className="flex flex-col gap-2">
                <label className={`text-sm font-semibold ml-1 ${
                  theme === 'light' ? 'text-[#4A0E4E]' : 'text-[#ABBBC2]'
                }`}>თემა</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3.5 rounded-lg border outline-none font-medium transition-all duration-300 ${
                      theme === 'light' 
                        ? "bg-white text-gray-800 border-gray-200 focus:border-purple-600 focus:ring-4 focus:ring-purple-600/10" 
                        : "bg-[#2D303E] text-white border-[#393C49] focus:border-purple-600 focus:ring-4 focus:ring-purple-600/20"
                    }`}
                >
                  <option value="ზოგადი კითხვა">ზოგადი კითხვა</option>
                  <option value="მაგიდის დაჯავშნა">მაგიდის დაჯავშნა</option>
                  <option value="კორპორატიული შეკვეთა">კორპორატიული შეკვეთა</option>
                </select>
              </div>

              {formData.subject === 'მაგიდის დაჯავშნა' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className={`text-sm font-semibold ml-1 ${theme === 'light' ? 'text-[#4A0E4E]' : 'text-[#ABBBC2]'}`}>თარიღი და დრო</label>
                    <input 
                      type="datetime-local" 
                      name="date" 
                      value={formData.date} 
                      onChange={handleChange} 
                      className={`w-full px-4 py-3.5 rounded-lg border outline-none font-medium transition-all duration-300 ${
                        theme === 'light' 
                          ? "bg-white text-gray-800 border-gray-200 focus:border-purple-600 focus:ring-4 focus:ring-purple-600/10" 
                          : "bg-[#2D303E] text-white border-[#393C49] focus:border-purple-600 focus:ring-4 focus:ring-purple-600/20 placeholder-[#ABBBC2]"
                      } ${errors.date ? "!border-red-500 focus:!ring-red-500/20" : ""}`}
                    />
                    {errors.date && <span className="text-red-500 text-xs ml-1 font-bold animate-pulse">{errors.date}</span>}
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className={`text-sm font-semibold ml-1 ${theme === 'light' ? 'text-[#4A0E4E]' : 'text-[#ABBBC2]'}`}>სტუმრების რაოდენობა</label>
                    <input 
                      type="number" 
                      name="guests" 
                      min="1" 
                      value={formData.guests} 
                      onChange={handleChange} 
                      placeholder="მაგ. 4" 
                      className={`w-full px-4 py-3.5 rounded-lg border outline-none font-medium transition-all duration-300 ${
                        theme === 'light' 
                          ? "bg-white text-gray-800 border-gray-200 focus:border-purple-600 focus:ring-4 focus:ring-purple-600/10" 
                          : "bg-[#2D303E] text-white border-[#393C49] focus:border-purple-600 focus:ring-4 focus:ring-purple-600/20 placeholder-[#ABBBC2]"
                      } ${errors.guests ? "!border-red-500 focus:!ring-red-500/20" : ""}`}
                    />
                    {errors.guests && <span className="text-red-500 text-xs ml-1 font-bold animate-pulse">{errors.guests}</span>}
                  </div>
                </div>
              )}
              <div className="flex flex-col gap-2">
                <label className={`text-sm font-semibold ml-1 ${
                  theme === 'light' ? 'text-[#4A0E4E]' : 'text-[#ABBBC2]'
                }`}>შეტყობინება</label>
                
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="დაწერეთ თქვენი შეტყობინება აქ..."
                  rows={4}
                  className={`w-full px-4 py-3.5 rounded-lg border outline-none font-medium transition-all duration-300 resize-none ${
                    theme === 'light' 
                      ? "bg-white text-gray-800 border-gray-200 focus:border-purple-600 focus:ring-4 focus:ring-purple-600/10" 
                      : "bg-[#2D303E] text-white border-[#393C49] focus:border-purple-600 focus:ring-4 focus:ring-purple-600/20 placeholder-[#ABBBC2]"
                  } ${
                    errors.message ? "!border-red-500 focus:!ring-red-500/20" : ""
                  }`}
                />
                {errors.message && (
                  <span className="text-red-500 text-xs ml-1 font-bold animate-pulse">{errors.message}</span>
                )}
              </div>

            </div>

            <button 
              type="submit" 
              className="mt-4 w-full bg-purple-600 text-white py-4 rounded-lg font-bold text-base hover:bg-purple-700 active:scale-95 transition-all duration-300 shadow-lg shadow-purple-600/30 tracking-wide"
            >
              გაგზავნა
            </button>

          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;