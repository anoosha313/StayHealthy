import React, { useState, useEffect } from 'react';

const DoctorCard = ({ name, speciality, experience, ratings }) => {
  const [appointments, setAppointments] = useState([]);
  const [isAppointmentBooked, setIsAppointmentBooked] = useState(false);

  useEffect(() => {
    const storedAppointments = JSON.parse(localStorage.getItem('appointments') || '[]');
    const doctorAppointments = storedAppointments.filter(app => app.doctorName === name);
    if (doctorAppointments.length > 0) {
      setAppointments(doctorAppointments);
      setIsAppointmentBooked(true);
    }
  }, [name]);

  const handleCancelAppointment = (appointmentToCancel) => {
    const storedAppointments = JSON.parse(localStorage.getItem('appointments') || '[]');
    const updatedAppointments = storedAppointments.filter(app =>
     !(app.doctorName === appointmentToCancel.doctorName &&
        app.date === appointmentToCancel.date &&
        app.time === appointmentToCancel.time)
    );
    localStorage.setItem('appointments', JSON.stringify(updatedAppointments));
    setAppointments(updatedAppointments.filter(app => app.doctorName === name));

    if (updatedAppointments.filter(app => app.doctorName === name).length === 0) {
      setIsAppointmentBooked(false);
    }
    alert('Appointment cancelled successfully!');
  };

  const handleBookAppointment = () => {
    window.location.href = `/appointment/${name}`;
  };

  return (
    <div className="doctor-card">
      <h3>{name}</h3>
      <p>Speciality: {speciality}</p>
      <p>Experience: {experience} years</p>
      <p>Ratings: {ratings}</p>

      {isAppointmentBooked? (
        <div>
          <h4>Your Appointments:</h4>
          {appointments.map((app, index) => (
            <div key={index} className="appointment-details">
              <p>Name: {app.name}</p>
              <p>Phone: {app.phoneNumber}</p>
              <p>Date: {app.date} Time: {app.time}</p>
              <button onClick={() => handleCancelAppointment(app)}>
                Cancel Appointment
              </button>
            </div>
          ))}
        </div>
      ) : (
        <button onClick={handleBookAppointment}>Book Appointment</button>
      )}
    </div>
  );
};

export default DoctorCard;
