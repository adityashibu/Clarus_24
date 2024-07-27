# Clarus 24 Website

[![Netlify Status](https://api.netlify.com/api/v1/badges/80cf3c75-66be-4dbd-bdfc-9f35a1745758/deploy-status)](https://app.netlify.com/sites/adityashibu/deploys)

## How to run
- First make sure you have node installed (preferably 20.x or higher) [![Node Website](https://nodejs.org/static/images/logo.svg)](https://nodejs.org/en/download/package-manager/)

- To install the required packages, run 
    ```shell
    npm install
    ```
- To run the development server, run
    ```
    npm run dev
    ```

## File structure
```plaintext
Github
  ├─ dist/ (ignored)
  ├─ github/
  │  └─ workflows/
  │     └─ deploy.yml
  ├─ node_modules/ (ignored)
  ├─ public/
  │  ├─ desktop_pc/
  │  ├─ planet/
  │  ├─ _headers
  │  └─ logo.svg
  ├─ src/
  │  ├─ assets/
  │  │  ├─ fonts/
  │  │  ├─ lotties/
  │  │  ├─ partners/
  │  │  ├─ svg/
  │  │  ├─ tech/
  │  ├─ components/
  │  │  ├─ canvas/
  │  │  ├─ design/
  │  │  ├─ Navbar/
  │  ├─ constants/
  │  │  └─ index.js
  │  ├─ hoc/
  │  ├─ hooks/
  │  ├─ styles/
  │  ├─ subpages/
  │  │  ├─ Apple/
  │  │  ├─ CISO/
  │  │  ├─ digital-Workspace/
  │  │  └─ TemplateComponent.jsx
  │  ├─ utils/
  │  │  └─ motion.js
  │  ├─ App.css
  │  ├─ App.jsx
  │  ├─ index.css
  │  ├─ main.jsx
  │  └─ styles.js
  ├─ .eslintrc.cjs
  ├─ .gitignore
  ├─ index.html
  ├─ netlify.toml
  ├─ package-lock.json
  ├─ package.json
  ├─ postcss.config.js
  ├─ README.md
  ├─ tailwind.config.cjs
  ├─ vercel.json
  └─ vite.config.js
```
- **Dist**: Dist is the distribution folder that contains the build for the production deployment
- **Github Workflows**: This contains some checks to ensure everything is built correctly without any errors
- **Node Modules**: This contains all the installed packages required to run the app, if by mistake you delete this, just run ``npm install`` to get it back
- **Public**: This folder contains 3D models, although this can be deleted as it's not being used in the website currently, it also contains the [_headers](public/_headers) file to cache 3D models if deployed
- **Src**: This contains all the main components of the website
    - **Assets**: Contains the assets required for the website<br>
        ***All the files in this section is exported using the [index.js](src/assets/index.js) file***
        - **Fonts**: Contains all the required fonts for the website
        - **Lotties**: Contains all the required animations for the website stored as json files
        - **Partners**: Contains the logos of all the partners that are under the our associations section
        - **Svg**: Contains all the svg's required for the website
        - **Tech**: All the certification logos under the our teams certifications section
    - **components**: This contains all the required components for the main page<br>***All the files in this section is exported using the [index.js](src/components/index.js) file***
        - **canvas**: This folder contains the canvas component for the earth and stars, the stars canvas is responsible for the dynamic bg in all the pages, the earth canvas is not being used in the website at the moment.
        - **design**: This folder contains the required files to give style to the NavBar
        - **Navbar**: This folder contains all the required files for displaying the navbar, **for changing the navbar links, edit the [Mylinks.jsx](src/components/Navbar/Mylinks.jsx)**
    - **constants**: This contains all the constants in the website such as static content etc, **to edit most of the static content edit the [index.js](src/constants/index.js) file**
    - **hoc**: This folder contains all the files for the higher order components, which is a SectionWrapper to handle padding between components and ID distribution easier<br>***All the files in this section is exported using the [index.js](src/hoc/index.js) file***
    - **hooks**: Folder for handling all react hooks such as footerObserver etc to handle Navbar behavior when the footer comes into sight<br>***All the files in this section is exported using the [index.js](src/hooks/index.js) file***
    - **styles**: This folder contains all external styling sheets for custom styling in some elements such as the partners and certifications carousel
    - **subpages**: This folder contains all the required files for the subpages, Each sub folder bearing the name of the subpage it's assigned to, **The [digital-Workspace](src/subpages/digital-Workspace/) contains all the main pages that are rendered.**
    - **utils**: This folder contains the utility functions required for animations such as fadeIn, textVariant etc.
    - **App.jsx**: ***This is the main page for the whole website, all the routing etc is handled from here***
    - **index.css**: ***This is the main styling sheet for the whole website, all the styling written here can be accessed directly without any imports***
- **index.html**: The **only main html** file to handle page title, meta descriptions etc.
- **tailwind.config.cjs**: Tailwind configuration to handle custom colors, fonts etc to call in className.
- **netlify.toml and vercel.json**: Deployment files to handle actions when deployed to the respective sites ***(DO NOT TOUCH)***
    

## Some recommended hardware specs
- The website will run smoother if you've turned on hardware acceleration using GPU on browsers such as Chrome, Opera etc.
- It's recommended you run it on a laptop or PC that has an integrated or dedicated GPU, as the background of the pages are dynamically generated 3D objects.

- **My PC Specs:**
    - CPU: i7-13700H
    - GPU: RTX 4060 Laptop GPU
    - RAM: 16GB DDR5 5200 MT/s
    - Storage: 1TB Samsung 980 Pro NVMe Gen4 SSD