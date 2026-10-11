import React, { useState } from 'react';

const AppointmentForm = ({ doctorName, doctorSpeciality, onSubmit }) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const appointmentData = {
      name: name,
      phoneNumber: phoneNumber,
      date: date,
      time: time,
      doctorName: doctorName,
      doctorSpeciality: doctorSpeciality
    };
    if (onSubmit) {
      onSubmit(appointmentData);
    }
    // Save to localStorage for demo
    const existingAppointments = JSON.parse(localStorage.getItem('appointments') || '[]');
    existingAppointments.push(appointmentData);
    localStorage.setItem('appointments', JSON.stringify(existingAppointments));
    alert('Appointment booked successfully!');
    
    // Reset form
    setName('');
    setPhoneNumber('');
    setDate('');
    setTime('');
  };

  return (
    <div className="appointment-form">
      <h3>Book Appointment with {doctorName}</h3>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input 
            type="text" 
            placeholder="Enter your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required 
          />
        </div>
        
        <div className="form-group">
          <label>Phone Number:</label>
          <input 
            type="tel" 
            placeholder="Enter your Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required 
          />
        </div>

        <div className="form-group">
          <label>Date:</label>
          <input 
            type="date" 
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required 
          />
        </div>

        <div className="form-group">
          <label>Time:</label>
          <input 
            type="time" 
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required 
          />
        </div>

        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default AppointmentForm;
