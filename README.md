# Hospital Management System

## Overview

The Hospital Management System is a full-stack web application developed using the MEAN Stack (MongoDB, Express.js, Angular, and Node.js). The system is designed to simplify hospital administration by managing doctors, patients, and appointments through a centralized platform.

The application provides an intuitive user interface for administrators to perform CRUD (Create, Read, Update, Delete) operations on doctor and patient records, as well as schedule and manage appointments efficiently.

---

## Features

### Doctor Management

* Add new doctors with specialization details.
* View all registered doctors.
* Update doctor information.
* Delete doctor records.

### Patient Management

* Register new patients.
* View patient details.
* Update patient information.
* Delete patient records.

### Appointment Management

* Schedule appointments between doctors and patients.
* View appointment history.
* Update appointment details.
* Cancel appointments.

### User Interface

* Responsive Angular-based frontend.
* Real-time data updates.
* Form validation and notification messages.
* Easy navigation between modules.

---

## Technology Stack

### Frontend

* Angular
* TypeScript
* HTML5
* CSS3
* Tailwind CSS
* DaisyUI
* ngx-toastr

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose ODM

### Tools

* MongoDB Compass
* Postman
* Git & GitHub

---

## System Architecture

The application follows a Three-Tier Architecture:

1. **Presentation Layer**

   * Angular Frontend
   * User Interface and Routing

2. **Application Layer**

   * Node.js and Express.js Backend
   * Business Logic and API Services

3. **Data Layer**

   * MongoDB Database
   * Data Storage and Retrieval

---

## Project Modules

### Doctor Module

Manages doctor information, including registration, updating, viewing, and deletion of doctor records.

### Patient Module

Handles patient registration, record maintenance, and patient information management.

### Appointment Module

Facilitates appointment scheduling between doctors and patients while maintaining appointment records.

---
## Screenshots

### Patients Section

![Patients Section](screenshots/Patients%20Section.png)

### Doctors Section

![Doctors Section](screenshots/Doctors%20Section.png)

### Add Appointment Section

![Add Appointment Section](screenshots/Add%20Appointment%20Section.png)

### Adding Patient Details

![Adding Patient Details](screenshots/Adding%20Patient's%20Details%20Section.png)

### Adding Doctor Details

![Adding Doctor Details](screenshots/Adding%20Doctor's%20Details.png)

### Adding Appointment - Select Patient

![Select Patient](screenshots/Adding%20An%20Appointment-choosing%20patients%20from%20patients%20lists.png)

### Adding Appointment - Select Doctor

![Select Doctor](screenshots/Adding%20An%20Appointment-choosing%20doctor%20from%20doctor's%20lists.png)

### Adding Appointment - Select Date

![Select Date](screenshots/Adding%20An%20Appointment-choosing%20date%20from%20calendar.png)

### Appointment Added Successfully

![Appointment Added](screenshots/After%20Adding%20An%20Appointment.png)

### Edit Appointment

![Edit Appointment](screenshots/Ater%20Editing%20The%20Appointment.png)

### Delete Functionality

![Delete Functionality](screenshots/Delete%20Button%20Functioning.png)

### Appointment Deleted Successfully

![Appointment Deleted](screenshots/After%20Deleting%20An%20Appointment.png)

### Doctors Database

![Doctors Database](screenshots/Doctor%20Database.png)

### Patients Database

![Patients Database](screenshots/Patients%20Database.png)

### Appointment Database

![Appointment Database](screenshots/Appointment%20Database.png)

---
## REST API Endpoints

### Doctor APIs

* GET `/api/doctor/get`
* POST `/api/doctor/add`
* PUT `/api/doctor/update/:id`
* DELETE `/api/doctor/delete/:id`

### Patient APIs

* GET `/api/patient/get`
* POST `/api/patient/add`
* PUT `/api/patient/update/:id`
* DELETE `/api/patient/delete/:id`

### Appointment APIs

* GET `/api/appointment/get`
* POST `/api/appointment/add`
* PUT `/api/appointment/update/:id`
* DELETE `/api/appointment/delete/:id`

---

## Installation and Setup

### Clone the Repository

```bash
git clone https://github.com/your-username/Hospital-Management-System.git
cd Hospital-Management-System
```

### Backend Setup

```bash
cd backend
npm install
node server.js
```

### Frontend Setup

```bash
cd frontend
npm install
ng serve
```

### Database Setup

1. Install MongoDB.
2. Start MongoDB service.
3. Configure MongoDB connection in `server.js`.
4. Open MongoDB Compass and create the required database.

---

## Future Enhancements

* User Authentication and Authorization
* Role-Based Access Control
* Online Appointment Booking
* Medical Record Management
* Billing and Payment Integration
* Doctor Availability Tracking
* Email and SMS Notifications
* Report Generation Dashboard

---

## Learning Outcomes

This project demonstrates:

* Full-stack web development using the MEAN Stack.
* RESTful API development.
* CRUD operations with MongoDB.
* Frontend-backend integration.
* Database design and management.
* Software engineering best practices.

---

## Author

**Sayan Mukherjee**

Hospital Management System – Academic Project
