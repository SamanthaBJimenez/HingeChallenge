# HingeChallenge
(https://github.com/SamanthaBJimenez/HingeChallenge)

This is a full stack web application that will allow users to view profiles of other users including their bio, answer to prompts, and uploaded photos.

## Setup

* Fork this repo
* Clone the forked repository
* `cd` to the directory where you cloned it
* `npm install` to install dependencies
* `cd` to the backend folder and run `psql -f db/schema.sql` to get the database
* While in the backend, run `nodemon app.js`
* `cd` to the frontend folder and run `npm start`

## User Flow

This application will allow for users to sign up or log in. The `Demo Log In` button is hard-coded for ease. 

Once, logged in, the user will be able to see their `name`, `email`, and `bio`, along with any photos they may have uploaded. The database allows for only 6 photo uploads per user. 

The user is able to edit their profile through the `Edit Profile` button at the top of the page. A modal will pop up allowing the user to update their `name`, `email`, `bio`, and their answers to the prompts.

The user is also able to go to the `Feed` button at the top of the page where they can view potential matches photos, names, and bios. 

With the use of the `Profile` button at the top of the `Feed` page the user is able to return to their profile.

A `Log Out` button is available which will return the user to the `Log In` page.

## Future Implementation

* Photo upload through Firebase storage
* Allow posting of prompts and answers to `Users` table
* Create joined table for users matches
* Allow viewing of other users profiles in `Feed`
* Bootstrap - UI/UX
