# Financial Cents Challenge

Welcome to the Financial Cents Challenge repository! This project was created using Vite, built with Vue 3, Tailwind CSS. 

### Project Setup


To get started, Make sure you have Node.js (version 16 and upwards) installed on your machine, then run the command below in the project root:


```sh
npm install
```

### Running the Project
Once you have installed the necessary dependencies, you can run the project from the root directory with the following command:

```sh
npm run dev
```

The project will be available at http://127.0.0.1:5173/ in your web browser.

### Running Unit Tests
Unit tests for this project are configured using Vitest. To run the unit tests, execute the following command:

```sh
npm run test:unit
```

### Running Storybook
To explore the design system of the UI components used in this project, you can run Storybook. Storybook is a powerful tool for visually showcasing and interacting with UI components in isolation.

Follow these steps to run Storybook:

* Make sure you have already installed the project dependencies using npm install.

* Run the following command:

```sh
npm run storybook
```
Open your web browser and navigate to http://localhost:6006.
You'll be able to browse and interact with the UI components used in this project using the Storybook interface. 

### Design Decisions & Thoughts
Here are some insights into the design decisions and thoughts that went into this project:

* __Technology Stack:__ The project was developed using Vue 3 and styled with Tailwind CSS, offering a modern and efficient development experience.
* __Design File:__ It's worth noting that having a design file, such as a Figma document, instead of just an image, would have allowed for a more precise translation of the design into the UI components. But I understand there might be valid reasons that necessitated the use of an image.
* __Testing:__ Unit tests have been incorporated to ensure the reliability and stability of the application.
* __Storybook__: I have integrated Storybook to facilitate the exploration and presentation of our UI components in isolation. It serves as a valuable resource for both developers and designers to understand, interact with, and maintain the design system consistently.

