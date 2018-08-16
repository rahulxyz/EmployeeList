# EmployeeList
Web app developed using mean stack to implement the CRUD operations.

## Setup
1. Import Data
mongoimport --db company --collection empList --headerline --type csv --file "<path>/All_Samp_Data.csv"
2. Install node_modules: npm install
3. Start mongo database: mongod
4. Start Script: node empList.js
5. Start Angular Server: ng serve

## Features
You can view, add, update and delete records.