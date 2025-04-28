
## Deploy on Vercel

#www.theartofciciwoolf.com

This app is deployed using Vercel.


To create the app from scratch:

npx create-next-app@latest

1. Structure
  app - folders containing pages which are the routes
  app > digital > page.js  - this is the routing system
  app > gallery > page.js

  page.js at the top level of the app directory is the home / default page

  components > components file not routable

2. Some configuration is needed for using Nextjs image - I had some from s3 bucket in AWS previously 


3. 'use client' - client vs server components. Some components will require this line 'use client' in order to render at the client side. NextJs renders serverside by default. 
  --React Hooks like useState, useEffect, and useMemo change the component into a client side component. 
  --Browser specific features like rendering videos and images, dynamic features from Cloudinary SDK that operate in the browser

Ex: Digital Art page, comment out the 'use client' piece  
