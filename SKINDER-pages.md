# 🏂 SKINDER Pages

This document provides an overview and detailed description of the various pages within the SKINDER application. Each section will cover the purposefunctionality, and key elements of the respective page.

## ❓ Main idea of the app

SKINDER platform is a social app that is going to serve ski & snowboard instructors and clients. The platform is going to simplify the process of finding and booking ski & snowboard instructors on different ski resorts.

The platform is separated into two main parts:

1. **🖥️ Web Application** - SKINDER is going to be managed by Admins and Moderators through a web application that will allow this operators to make changes and manage data inside the app. for example; tracking active/non-active orders, tracking daily/weekly transactions and statistics, managing users, managing ski resorts and locations etc.

2. **📱 Mobile Application** - SKINDER is going to be used by clients and instructors through a mobile application that will allow them to search, book, and manage their ski & snowboard lessons. The app will also include a chat system that will allow clients and instructors to communicate with each other.

## 📱 Mobile Application Pages

The mobile application is going to have the following pages:

---

### 🏷️ Tabs

1. **🏠 Home Page** - The home page is the first page that the user will see when opens the app. The home page will include sections of information that is the most relevant for the current logged in user.

   - **In case of no-user is logged in**:

     - **🏔️ Resorts list** - on the top of the page, there will be a horizontal list with cards of images, names, and country flag of all the resorts, the user could pick a resort to browse instructors on the exact resort.

     - **⭐️ Vertical or Horizontal scrollable list of popular instructors** - the list will include cards of instructors with their profile image, name, and rating. The user could click on an instructor to view his profile.

     - **🗒️ Vertical list of recent reviews** - the list will include cards of reviews with the reviewer's profile image, name, rating and country flag. The user could click on a review to view the full review.

   - > **ℹ️ In any case of some user logged in**:
     > On the top of the page, there will be displayed the user's profile image, name. The user could click on his profile to view his profile page.

   - **In case of a user is logged in**:

     - **📅 Upcoming most closest lesson** - the card will be as minimal as possible and will include the instructor's profile image, name, and the date of the lesson. The user could click on the card to view the full lesson details (the card will be expandable and have a unique look)

     - **🟡 All the other sections will be the same as the no-user logged in case.**

   - **In case of an instructor is logged in**:

     - **📅 Upcoming most closest lesson** - the card will be as minimal as possible and will include the client's profile image, name, and the date of the lesson. The instructor could click on the card to view the full lesson details (the card will be expandable and have a unique look)

     - **📋 Summerize of all the recent data** - A section (no card) that will include recent statistics, like today's scheduled meetings, this week's earnings, next upcoming meeting, rating status.

     - **🟡 All the other sections will be the same as the no-user logged in case.**

---

2. **🔍 Search Page** - The search page will allow the user to search for instructors by different filters like resort, price, rating, etc. The search results will be displayed in a list of cards with the instructor's profile image, name, rating and description. The user could click on an instructor to view his profile page. (The placement of the filters, search and all the search functionality depends on the designer)

---

3. **🗺️ Map** - The user could see instructors by their location (if they have location), he will have a vaul that display a list of the instructors that is on focus on the current map view. (like airbnb)

---

1. **👤 Profile Page** - The profile page will display the user's profile information, like profile image, name, location, country flag, rating, description and reviews. The user could edit his profile information and view his reviews.

---

---

### 🔓 Login / Sign up Pages

The login/sign-up functionality will be simple, the user can browse the app without logging in, but he will not be able to book a lesson or chat with an instructor. The user could log in with his email and password or with his google account. The login/sign-up page will be kind of a modal that pops up when the user clicks on the profile icon or when he tries to book a lesson. (By modal I mean a page that is appears from the bottom of the screen and covers the whole screen)

### 📄 General Pages

1. **🏢 Business/School Page (Appear when pressing on a school item from home page or search page)** - The business/school page will display the business/school information, unlike "Profile Page" this page will display the business/school information, like business services, most popular services, team members, reviews, and location. The user could book a lesson, view the business/school reviews, and view the business/school location on the map.

2. **🏔️ Schools by resort** - A page that appears when choosing a resort from the list on the home page, this page will display schools in the resort area, popular instructors and schools. (instructor is a team member of a school)

3. **📋 Schedule a meeting page (Appear when clicking on check availability on school page)** - This page will be a stepper that asks the user questions about he's prerequisities and let him select the right service from the school services. finally, he chooses a date and time from the available schedule.

### 🏢 Business Pages

1. **📋 Business Dashboard** - The business dashboard will display the business statistics, like today's scheduled meetings, this week's earnings, next upcoming meeting, rating status, and the business/school reviews. The business could manage his team members, services, and schedule meetings.

2. **👤Team Members Page** - The team members page will display the business team members, like profile image, name, location, country flag, rating, description and reviews. The business could add, edit, and remove team members.

3. **📅Schedule Meetings Page** - The schedule meetings page will display the business scheduled meetings, like the client's profile image, name, location, country flag, rating and description. The business could edit and remove scheduled meetings. Each scheduled meting will be related to one of the business/school team members (unless the school have only one team member). This page will display a calendar view to easily manage all the meetings.

4. **📋Services Page** - The services page will display the business services, like service name, description, price, and duration. The business could add, edit, and remove services.

5. **🏂 Clients Page (Not sure if necessary)** - The clients page will display the business clients, like profile image, name, location, country flag, rating, description and reviews. The business could view the client's profile and reviews.
