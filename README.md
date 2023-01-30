# codeAcademyFinal-NodeReact

PROJECT PLAN

BACKEND
-- connect MongoDB, database Users
-- USER collection:
--- userData
--- visitedCities
--- plannedVisists

-- create endpoints
--- GET content/:idOrName --> requested country CITIES data OR requested city DETAILED data (čia tas pats endpoint roadgoat API kuriuo naudojuos - arba paduodi country name ir gauni city list arba paduodi city ID ir gauni detailed data)
--- GET user/:id --> user's visited cities / plans to visit (šitą paduosiu iš mongoDB)
--- POST auth/login --> twsToken
--- POST auth/signup --> create account
--- POST auth/logout ?? nežinau, ar šito reikia?

FRONTEND

"/" HOMEPAGE --> Hero banner (with button to create account or sign in) + po juo žemiau cities listed (iš API "content/:idOrName" paduosiu united-states miestus)
"/login" LOGIN/SIGNUP page --> FORM to login/create account
"/user" USER ACCOUNT PAGE (čia šitame page bus atvaizduota --> visit / plan to visit listai(iš API "user/:id"); search bar ir search results (iš API "content/:idOrName"))
