# GLA 6: Theme Park Database - CRUD Operations

## Assignment Overview
Implement Create, Read, Update, and Delete (CRUD) operations on a SQLite database containing theme park ride information.

## Errors Fixed

### 1. Database Connection
- **Error**: `./themepark.sqllite` (misspelled)
- **Fix**: `./themepark.sqlite`

### 2. READ Operation
- **Error**: `SELECT * FORM rides` (wrong keyword)
- **Fix**: `SELECT * FROM rides`

### 3. CREATE Operation
- **Error**: `INSERT rides` (missing keyword)
- **Fix**: `INSERT INTO rides`

### 4. UPDATE Operation
- **Error**: `UPDATE ride` (wrong table name - singular)
- **Fix**: `UPDATE rides` (plural)

### 5. DELETE Operation
- **Error**: `DELETE rides` (missing keyword)
- **Fix**: `DELETE FROM rides`

## Setup & Installation

```bash
npm install sqlite3
```

## Running the Application

```bash
node app.js
```

## CRUD Operations Implemented

- **CREATE**: Insert "Galaxy Spinner" ride (Family Ride, 5 Minutes, 100 cm height)
- **READ**: Display all rides from database
- **UPDATE**: Change "Thunder Coaster" duration to "3 Minutes"
- **DELETE**: Remove "Haunted Mansion" from database

## Technical Details

- **Database**: SQLite3
- **Language**: Node.js (JavaScript)
- **Table**: rides
- **Columns**: ride_name, description, duration, min_height

## Author
Jordan Champagne - TECH1101 GLA 6 Assignment
