import React, { useState } from 'react';
import Button from '../components/Button';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    let newErrors: { [key: string]: string } = {};


    if (!formData.firstName) {
      newErrors.firstName = "სახელის მითითება სავალდებულოა!";
    } else if (formData.firstName.length < 2) {
      newErrors.firstName = "სახელი უნდა შეიცავდეს მინიმუმ 2 სიმბოლოს";
    } else if (formData.firstName.length > 15) {
      newErrors.firstName = "სახელი ძალიან გრძელია";
    }

    if (!formData.lastName) {
      newErrors.lastName = "გვარის მითითება სავალდებულოა!";
    }


    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = "ელ-ფოსტის მითითება სავალდებულოა!";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "ელ-ფოსტის ფორმატი არასწორია (აკლია @)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log("ფორმის მონაცემები გაიგზავნა სერვერზე:", formData);
      alert(`მოგესალმებით, ${formData.firstName}!`);
      setFormData({ firstName: '', lastName: '', email: '' });
    }
  };

  return (
    <section className="py-20 px-4 bg-[#F9F6FC] min-h-screen flex items-center justify-center">
      <div className="container mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-12 bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-[#C3B1E1]/30">

        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-black text-[#4A0E4E] mb-6 tracking-tighter italic">
            MOUVELINE
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            დაგვიტოვეთ თქვენი მონაცემები და ჩვენი გუნდი უმოკლეს დროში დაგიკავშირდებათ.
          </p>
          <div className="space-y-4 text-[#4A0E4E] font-medium">
            <p>📍 თბილისი, საქართველო</p>
            <p>📞 +995 555 12 34 56</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {[
            { label: 'სახელი', name: 'firstName', type: 'text', placeholder: 'თქვენი სახელი' },
            { label: 'გვარი', name: 'lastName', type: 'text', placeholder: 'თქვენი გვარი' },
            { label: 'ელ-ფოსტა', name: 'email', type: 'email', placeholder: 'example@mail.com' }
          ].map((field) => (
            <div key={field.name} className="flex flex-col gap-1">
              <label className="text-sm font-bold text-[#4A0E4E] ml-1">{field.label}</label>
              <input
                type={field.type}
                name={field.name}
                value={(formData as any)[field.name]}
                onChange={handleChange}
                placeholder={field.placeholder}
                className={`w-full px-5 py-3 rounded-xl border-2 transition-all outline-none ${
                  errors[field.name] 
                  ? "border-red-400 focus:border-red-500" 
                  : "border-[#F3E8FF] focus:border-[#C3B1E1]"
                }`}
              />
              {errors[field.name] && (
                <span className="text-red-500 text-xs mt-1 ml-1 font-medium">{errors[field.name]}</span>
              )}
            </div>
          ))}

          <Button type="submit" variant="primary" className="mt-4 py-4 rounded-xl shadow-purple-200">
            რეგისტრაცია
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;