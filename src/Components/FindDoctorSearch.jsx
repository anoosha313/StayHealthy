import React, { useState } from 'react';

const FindDoctorSearch = () => {
  const [doctors] = useState([
    { name: 'Dr. John Doe', speciality: 'Dentist' },
    { name: 'Dr. Jiao Yang Li', speciality: 'Dentist' },
    { name: 'Dr. Denis Raj', speciality: 'Dentist' },
    { name: 'Dr. Kristin Weaver', speciality: 'Dentist' },
    { name: 'Dr. Rebecca Smith', speciality: 'Dentist' },
    { name: 'Dr. Alice Brown', speciality: 'Dentist' },
    { name: 'Dr. Mary Johnson', speciality: 'Dentist' },
    { name: 'Dr. David Lee', speciality: 'Dentist' },
  ]);

  const [searchDoctor, setSearchDoctor] = useState('');

  return (
    <div>
      <h1>Find a doctor at your own ease</h1>
      <input
        type="text"
        placeholder="Search doctors by specialty"
        onChange={(e) => setSearchDoctor(e.target.value)}
      />
      <p>8 doctors available in</p>
      <p>Book appointments with minimum wait-time & verified doctor details</p>

      <div>
        {doctors
         .filter(d => d.speciality.toLowerCase().includes(searchDoctor.toLowerCase()))
         .map((doctor, index) => (
            <div key={index}>
              <h3>{doctor.name}</h3>
              <p>{doctor.speciality}</p>
              <button>Book Appointment</button>
            </div>
        ))}
      </div>
    </div>
  );
};

export default FindDoctorSearch;
