-- Create a database
CREATE DATABASE ExcellenceTracker;

-- Use the created database
USE ExcellenceTracker;

-- Create a users table
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  -- role ENUM('admin', 'faculty', 'student') NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE achievements (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255),
  department VARCHAR(100),
  type VARCHAR(50), -- e.g., 'Research', 'Entrepreneurship', 'Placement'
  description TEXT,
  date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample data
INSERT INTO achievements (title, department, type, description) VALUES
('Design Research 1', 'Design', 'Research', 'Details about design research'),
('Design Entrepreneurship 1', 'Design', 'Entrepreneurship', 'Details about entrepreneurship'),
('Design Placement 1', 'Design', 'Placement', 'Details about placement');
INSERT INTO users (email, password, role) VALUES
('admin@example.com', 'hashedPasswordHere', 'admin'),
('faculty@example.com', 'hashedPasswordHere', 'faculty'),
('student@example.com', 'hashedPasswordHere', 'student');
	
CREATE TABLE faculty_achievements (
  id INT AUTO_INCREMENT PRIMARY KEY,
  facultyId VARCHAR(10) NOT NULL,
  name VARCHAR(255) NOT NULL,
  title VARCHAR(255) NOT NULL,
  date DATE NOT NULL,
  description TEXT
);

INSERT INTO achievements (title, department, type, description) VALUES
('Design Research 1', 'Design', 'Research', 'Details about design research'),
('Design Entrepreneurship 1', 'Design', 'Entrepreneurship', 'Details about entrepreneurship'),
('Design Placement 1', 'Design', 'Placement', 'Details about placement'),
('Engineering Research 1', 'Institute of Engineering Technology', 'Research', 'Engineering research details');

ALTER TABLE achievements ADD COLUMN category ENUM('Research', 'Entrepreneurship', 'Placements') NOT NULL;
	
