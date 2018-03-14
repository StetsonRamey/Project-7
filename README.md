# Project 1 (Codename = Project7) - Real Name = Travel`<list>`
We set out to create a web application that allows you to easily search a location with specific categories (Restaurants, Bars, Shopping, Museums, Stadiums) and populate the results in a To-Do list. The To-Do list allows you to cross off, delete, and add items, and the corresponding map places markers with information related to each returned place.

See it in action:


[Travel`<list>`][1]


[1]: https://stetsonramey.github.io/Project-7/

Table of Contents
=================
<!--ts-->
  * [Table of Contents](#table-of-contents)
  * [Philosophy](#philosophy)
  * [Struggles](#struggles)
  * [Ideas for Improvement](#ideas-for-improvement)
  * [Styling](#styling)
<!--te-->

  Philosophy
  ==========
  The concept is simple:
  * utilize Google Geocode API, Google Places API, and Google Maps API
  * allow user to input destination and category (validation to allow letters only or empty field)
  * return the destination with markers, info, To-Do list populated with selected category
  * allow user to cross off, delete, and add items to the To-Do list
  * user can start a new search with category and destination input field from the results page
  * allow user to right click inside map to return different places within the same category

  Struggles
  =========
  Some of the challenges we encountered:
  * getting the latitude/longtitude to a different HTML page to use with Google Maps
  * getting the Google Places API to return the data object
  * first time using GitHub in a collaborative coding environment (branches, merging, etc.)
  * getting the returned places to dynamically populate our To-Do list
  * adding the right-click function for a new location to repopulate the map and To-Do list

  Ideas for Improvement
  =====================
  Some of the features we'd like to add:
  * add Firebase so users can see their search histories, progress, and finished To-Do lists
  * add more data to the map and To-Do list (reviews, photos, website, open hours, directions)
  * allow the users current location as a way to search
  * link a users To-Do list to social media, email, or text

  Styling
  =======
  We wanted a clean, simple layout to allow users to quickly see the To-Do list items and map on the same screen. Since it's built using Bootstrap, it allows our web application to be fully responsive and mobile friendly.
