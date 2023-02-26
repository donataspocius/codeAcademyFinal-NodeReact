# MERN stack Travel app

You can check it deployed here:
https://donatas-travel-app.onrender.com/

PROJECT PLAN

3rd party API: roadgoat.com

BACKEND
-- connect MongoDB, database Users
-- USER collection:
--- userData
--- visitedCities
--- plannedVisists

-- create endpoints
--- GET /cities/:country --> all country cities data

--- GET user/:userId --> user's visited cities / plans to visit (iš mongoDB)
--- PUT /user/:userId --> update user data
--- GET /user/visitedCities/:userId --> get user visitied cities
--- GET /user/wishCities/:userId --> get user wish cities

--- POST auth/login --> twsToken
--- POST auth/signup --> create account

FRONTEND

"/" HOMEPAGE --> Hero banner (with button to create account or sign in) + po juo žemiau cities listed (iš API "content/:idOrName" paduosiu united-states miestus)
"/login" LOGIN/SIGNUP page --> FORM to login/create account
"/user" USER ACCOUNT PAGE (čia šitame page bus atvaizduota --> visit / plan to visit listai(iš API "user/:id"); search bar ir search results (iš API "content/:idOrName"))
