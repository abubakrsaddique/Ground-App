# Grounds

I have cloned this Web-App Dashboard and make clone of this App for my practice.
I have created this project Using Vite React and Tailwind CSS for efficient UI development

## Overview

 The repo provide a complete detail about this project. I have created this project through Vite React.js , Tailwind CSS for efficient UI development and Firebase for hosting, database, authentication, file storage

## Preview

https://github.com/abubakrsaddique/Ground-App/assets/141554894/d5743946-390d-4a21-9a21-71f1b4ac7a77

## Features

* Setting up a Firebase
* Creating Authentication Component
* Handling User Sign-up & Login
* Protecting Routes
* Updating User Profile

## Installation
1. Clone the repository:

   ```shell
   git clone https://github.com/abubakrsaddique/Ground-App.git

2. Navigate to the project directory:

   ```shell
    cd my-project

3. Install Tailwind CSS

   ```shell
   npm create vite@latest my-project -- --template react
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
  

4. Install the dependencies:
  
   ```shell
    npm install

5. Configure your template paths

   ```shell
   /** @type {import('tailwindcss').Config} */

6. Add the Tailwind directives to your CSS

   ```shell
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
 
7. Configure Firebase:
- Create a Firebase project in the Firebase Console.
- Go to the project settings and copy the Firebase configuration.
- Paste the Firebase configuration into src/firebase.js.
```
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};
```
8. Start the development server:
 
   ```shell
   npm run dev
   
## Author

* [@abubakrsaddique](https://github.com/abubakrsaddique)
