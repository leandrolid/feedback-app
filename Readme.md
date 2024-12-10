<p align="center">
    <img src=".github/app_image.png" align="center" width="30%">
</p>
<p align="center"><h1 align="center">FEEDBACK-APP</h1></p>
<p align="center">
	<em>🌐Empowering Feedback 💡</em>
  <br>
  <a title="Feedback App" href="https://leandrolid.github.io/feedback-app/">Preview</a>
</p>
<p align="center">
	<img src="https://img.shields.io/github/last-commit/leandrolid/feedback-app?style=default&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/leandrolid/feedback-app?style=default&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/leandrolid/feedback-app?style=default&color=0080ff" alt="repo-language-count">
</p>
<br>

##  Table of Contents

- [ Overview](#-overview)
- [ Features](#-features)
- [ Project Structure](#-project-structure)
  - [ Project Index](#-project-index)
- [ Getting Started](#-getting-started)
  - [ Prerequisites](#-prerequisites)
  - [ Installation](#-installation)
  - [ Usage](#-usage)
  - [ Testing](#-testing)
- [ Project Roadmap](#-project-roadmap)
- [ Contributing](#-contributing)
- [ License](#-license)
- [ Acknowledgments](#-acknowledgments)

---

##  Overview

This dynamic web application offers an intuitive platform for users to share their valuable feedback with developers. By seamlessly transitioning through different steps, users can easily select the type of feedback they wish to provide, attach relevant screenshots, and submit their thoughts. The application responds with a thank-you message and provides the option for users to continue sharing their insights.

The project's design is visually appealing, with interactive elements that ensure a smooth user experience. It employs modern libraries such as HeadlessUI and PhosphorReact to create an engaging interface that encourages communication between developers and users. The application's loading animation ensures a responsive user interface during data processing, while the close button allows users to easily dismiss forms when needed.

In essence, this project serves as a bridge between developers and users, fostering collaboration and continuous improvement in digital products. By making it easy for users to share their thoughts, developers can create better, more user-friendly applications that cater to the needs of their audience.

---

##  Project Structure

```sh
└── feedback-app/
    ├── .github
    │   └── app_image.png
    ├── Readme.md
    ├── back-end
    │   ├── .env.example
    │   ├── .gitignore
    │   ├── jest.config.ts
    │   ├── package-lock.json
    │   ├── package.json
    │   ├── prisma
    │   ├── src
    │   └── tsconfig.json
    ├── docs
    │   ├── assets
    │   └── index.html
    └── front-end
        ├── .eslintrc.js
        ├── .gitignore
        ├── .prettierrc.js
        ├── LICENSE
        ├── index.html
        ├── package-lock.json
        ├── package.json
        ├── postcss.config.js
        ├── src
        ├── tailwind.config.js
        ├── tsconfig.json
        ├── tsconfig.node.json
        └── vite.config.ts
```


###  Project Index
<details open>
	<summary><b><code>FEEDBACK-APP/</code></b></summary>
	<details> <!-- __root__ Submodule -->
		<summary><b>__root__</b></summary>
		<blockquote>
			<table>
			</table>
		</blockquote>
	</details>
	<details> <!-- back-end Submodule -->
		<summary><b>back-end</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/leandrolid/feedback-app/blob/master/back-end/jest.config.ts'>jest.config.ts</a></b></td>
				<td>- This Jest configuration file optimizes the back-end test environment by setting up coverage collection, clearing mocks after each test, and utilizing TypeScript for tests<br>- It also configures various options such as module directories, file extensions, and transformers to ensure seamless testing within the project structure.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/leandrolid/feedback-app/blob/master/back-end/.env.example'>.env.example</a></b></td>
				<td>Configures the development database connection within the project's back-end environment, enabling seamless interaction with the local SQLite database file during development phases.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/leandrolid/feedback-app/blob/master/back-end/package-lock.json'>package-lock.json</a></b></td>
				<td>- The provided `back-end/package-lock.json` file is a record of the dependencies and their versions used in this project, ensuring consistent and reproducible builds<br>- This particular project, named 'server', leverages several open-source libraries such as Prisma (for database management), Express (a web application framework for Node.js), CORS (to enable cross-origin requests), and Nodemailer (for sending emails)<br>- These tools help in creating a robust, scalable, and feature-rich backend infrastructure<br>- The project structure suggests that this is a full-stack application with both frontend and backend components.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/leandrolid/feedback-app/blob/master/back-end/package.json'>package.json</a></b></td>
				<td>- The back-end package.json file configures and manages dependencies for a server application<br>- It initializes testing with Jest, development using ts-node-dev, and employs TypeScript for type checking<br>- The project leverages Express for routing, Prisma for database management, CORS for handling cross-origin requests, and Nodemailer for email services<br>- This setup enables the creation of a scalable, secure, and feature-rich back-end server.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/leandrolid/feedback-app/blob/master/back-end/tsconfig.json'>tsconfig.json</a></b></td>
				<td>- This is a TypeScript configuration file (tsconfig.json)<br>- It sets up various options such as strict type checking, enabling esModuleInterop, and skipping lib checks<br>- The aim is to ensure code quality and compatibility with CommonJS modules.</td>
			</tr>
			</table>
			<details>
				<summary><b>prisma</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/leandrolid/feedback-app/blob/master/back-end/prisma/schema.prisma'>schema.prisma</a></b></td>
						<td>- In the provided back-end project structure, the `schema.prisma` file defines the data model using Prisma, a powerful database tool<br>- This schema maps out the Feedback model, which includes fields like id, type, comment, and screenshot<br>- The purpose of this schema is to manage and interact with feedback data in the SQLite database, facilitating efficient organization and retrieval of user feedback within the application.</td>
					</tr>
					</table>
					<details>
						<summary><b>migrations</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/leandrolid/feedback-app/blob/master/back-end/prisma/migrations/migration_lock.toml'>migration_lock.toml</a></b></td>
								<td>The `back-end/prisma/migrations/migration_lock.toml` file serves as a version control mechanism within the project structure, ensuring that only one migration can be applied at a time to maintain data consistency and prevent conflicts in the SQLite database.</td>
							</tr>
							</table>
							<details>
								<summary><b>20220503202332_create_feedbacks</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/leandrolid/feedback-app/blob/master/back-end/prisma/migrations/20220503202332_create_feedbacks/migration.sql'>migration.sql</a></b></td>
										<td>- In the provided project structure, this SQL migration script creates a 'feedbacks' table within the database<br>- This table stores user feedbacks, capturing their type, comment, and associated screenshot<br>- The purpose of this component is to facilitate user interaction and feedback collection in the application.</td>
									</tr>
									</table>
								</blockquote>
							</details>
						</blockquote>
					</details>
				</blockquote>
			</details>
			<details>
				<summary><b>src</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/leandrolid/feedback-app/blob/master/back-end/src/server.ts'>server.ts</a></b></td>
						<td>- The provided server.ts file initializes and configures an Express.js web server within the project structure<br>- It enables Cross-Origin Resource Sharing (CORS), parses JSON data, and integrates defined routes from a separate 'routes' module<br>- Upon successful setup on port 3333, it logs a message indicating the HTTP server is running<br>- This setup serves as the entry point for handling incoming requests and responses in this back-end application.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/leandrolid/feedback-app/blob/master/back-end/src/submit-feedback-use-case.spec.ts'>submit-feedback-use-case.spec.ts</a></b></td>
						<td>- This file, located within the back-end/src directory, contains a test suite (SubmitFeedbackUseCase.spec.ts) for a use case named 'Submit Feedback'<br>- The purpose of this use case is to handle user feedback submission in the application<br>- It validates the feedback data, creates a new feedback entry, and sends an email notification<br>- The test suite ensures that the use case can successfully submit feedback when provided with valid type, comment, and base64-encoded screenshot data, while rejecting submissions without required fields or invalid screenshots.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/leandrolid/feedback-app/blob/master/back-end/src/routes.ts'>routes.ts</a></b></td>
						<td>- This back-end route handles the submission of feedback from users<br>- It utilizes a Prisma database and Nodemailer for sending notifications, funneling requests through the SubmitFeedbackUseCase before returning a success status<br>- The overall architecture allows for efficient management and processing of user feedback within this project.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/leandrolid/feedback-app/blob/master/back-end/src/prisma.ts'>prisma.ts</a></b></td>
						<td>- The `back-end/src/prisma.ts` file initializes and configures a Prisma client, which is an object-relational mapping (ORM) tool used to interact with the project's database<br>- This enables seamless communication between the application and its underlying data storage, ensuring consistent and efficient data management across the entire codebase architecture.</td>
					</tr>
					</table>
					<details>
						<summary><b>adapters</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/leandrolid/feedback-app/blob/master/back-end/src/adapters/mail-adapter.ts'>mail-adapter.ts</a></b></td>
								<td>- The `mail-adapter.ts` file within the back-end project structure defines an interface for a mail adapter service<br>- This service, represented by the `MailAdapter` interface, accepts data containing subject and body details and sends emails asynchronously using the `sendMain()` method<br>- Essentially, it facilitates email communication within the application architecture.</td>
							</tr>
							</table>
							<details>
								<summary><b>nodemailer</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/leandrolid/feedback-app/blob/master/back-end/src/adapters/nodemailer/nodemailer-mail-adapter.ts'>nodemailer-mail-adapter.ts</a></b></td>
										<td>- The provided TypeScript file, located within the back-end's adapters/nodemailer directory, configures and implements a Nodemailer mail adapter<br>- This adapter serves as an interface to send emails using the specified SMTP server (mailtrap.io)<br>- It facilitates communication between our application and external email services, allowing us to send notifications or transactional emails as needed within our project architecture.</td>
									</tr>
									</table>
								</blockquote>
							</details>
						</blockquote>
					</details>
					<details>
						<summary><b>repositories</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/leandrolid/feedback-app/blob/master/back-end/src/repositories/feedbacks-repository.ts'>feedbacks-repository.ts</a></b></td>
								<td>- The `feedbacks-repository.ts` file within the back-end project structure defines an interface for managing feedback data<br>- It allows creating new feedback entries, which can include a type, comment, and optional screenshot, asynchronously<br>- This interface serves as a crucial component in handling user feedback within the application.</td>
							</tr>
							</table>
							<details>
								<summary><b>prisma</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/leandrolid/feedback-app/blob/master/back-end/src/repositories/prisma/prisma-feedbacks-repository.ts'>prisma-feedbacks-repository.ts</a></b></td>
										<td>- The `PrismaFeedbacksRepository` file within the project's back-end structure is responsible for managing feedback data persistence<br>- It utilizes Prisma, a database tool, to create new feedback entries with type, comment, and screenshot details in the application's database<br>- This repository facilitates the storage and retrieval of user feedback, enhancing the overall user experience by allowing for efficient interaction with the system.</td>
									</tr>
									</table>
								</blockquote>
							</details>
						</blockquote>
					</details>
					<details>
						<summary><b>use-cases</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/leandrolid/feedback-app/blob/master/back-end/src/use-cases/submit-feedback-use-case.ts'>submit-feedback-use-case.ts</a></b></td>
								<td>- The `submit-feedback-use-case.ts` file within the back-end project structure is responsible for handling user feedback submission<br>- It collects feedback details, validates them, and stores them in the FeedbacksRepository<br>- Additionally, it utilizes a MailAdapter to send an email notification about the new feedback received<br>- This use case ensures that user feedback is efficiently processed and communicated to relevant parties.</td>
							</tr>
							</table>
						</blockquote>
					</details>
				</blockquote>
			</details>
		</blockquote>
	</details>
	<details> <!-- front-end Submodule -->
		<summary><b>front-end</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/leandrolid/feedback-app/blob/master/front-end/.prettierrc.js'>.prettierrc.js</a></b></td>
				<td>- In the provided project structure, the front-end/.prettierrc.js file configures the code formatting style using Prettier<br>- This ensures consistent coding standards across the entire front-end codebase, enhancing readability and maintainability.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/leandrolid/feedback-app/blob/master/front-end/package-lock.json'>package-lock.json</a></b></td>
				<td>- The provided file, `front-end/package-lock.json`, is a generated artifact from the npm package manager in this project, named "feedback-nlw"<br>- This file serves to lock down the exact versions of all dependencies used within the project at the time of its creation or last update<br>- By doing so, it ensures consistency and stability across different development environments, preventing potential conflicts that may arise due to dependency version mismatches.

In the broader context of the project structure, this file is part of a front-end application, which relies on external libraries such as "@ampproject/remapping" for specific functionalities<br>- The presence of this library in the dependencies suggests that it plays a role in optimizing or transforming the codebase to meet AMP Project standards, enhancing performance and compatibility with various platforms.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/leandrolid/feedback-app/blob/master/front-end/index.html'>index.html</a></b></td>
				<td>- The provided HTML file (front-end/index.html) serves as the entry point for our Vite App, structuring its overall layout and defining key elements such as title, viewport settings, and favicon<br>- It also establishes a connection to the main TypeScript (.tsx) file located in src/main.tsx, which contains the primary application logic for our front-end development.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/leandrolid/feedback-app/blob/master/front-end/package.json'>package.json</a></b></td>
				<td>- The front-end package.json file configures and manages dependencies for a feedback project built with React, TypeScript, and Tailwind CSS<br>- It includes scripts for development, building, and previewing the application, as well as linters and pre-commit hooks to ensure code quality<br>- Additionally, it leverages various libraries such as @headlessui/react, html2canvas, and phosphor-react to enhance user interface functionality.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/leandrolid/feedback-app/blob/master/front-end/tailwind.config.js'>tailwind.config.js</a></b></td>
				<td>- Configures Tailwind CSS customizations and plugins within the front-end project architecture<br>- The tailwind.config.js file defines project-specific color palettes, grid structure, border radius, and enables additional functionalities like forms styling and custom scrollbars, enhancing UI consistency and user experience.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/leandrolid/feedback-app/blob/master/front-end/vite.config.ts'>vite.config.ts</a></b></td>
				<td>- Configures the front-end development environment using Vite, a modern build tool, optimizing it for a feedback application by integrating React and setting the base URL as '/feedback-app/'<br>- This streamlines the setup process, ensuring efficient and seamless front-end development within the project structure.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/leandrolid/feedback-app/blob/master/front-end/.eslintrc.js'>.eslintrc.js</a></b></td>
				<td>- This ESLint configuration file ensures consistent coding standards across the front-end TypeScript project by enforcing a set of rules and best practices, including those related to React, accessibility, and code organization<br>- It also integrates with Prettier for formatting consistency.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/leandrolid/feedback-app/blob/master/front-end/postcss.config.js'>postcss.config.js</a></b></td>
				<td>In the front-end directory of this project, the postcss.config.js file configures and integrates Tailwind CSS and Autoprefixer, ensuring consistent styling and cross-browser compatibility for the user interface.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/leandrolid/feedback-app/blob/master/front-end/tsconfig.json'>tsconfig.json</a></b></td>
				<td>- In the front-end section of our project, the `tsconfig.json` file configures TypeScript settings to ensure compatibility with modern JavaScript (ESNext) and ReactJSX syntax<br>- This setup promotes a robust, maintainable codebase by enforcing strict type checking, modularization, and proper handling of ES6 modules within the 'src' directory.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/leandrolid/feedback-app/blob/master/front-end/tsconfig.node.json'>tsconfig.node.json</a></b></td>
				<td>- In the front-end section of this project, the `tsconfig.node.json` file configures TypeScript to use a composite and ESNext module system with node-style resolution<br>- This setup ensures seamless integration between TypeScript and Node.js modules within the project, facilitating efficient development and execution of the application.</td>
			</tr>
			</table>
			<details>
				<summary><b>src</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/leandrolid/feedback-app/blob/master/front-end/src/App.tsx'>App.tsx</a></b></td>
						<td>- In the provided front-end code (App.tsx), a collection of reusable components - Card, Navbar, and Widget - are imported and utilized to structure the application's layout<br>- The main function, App(), renders these components in a grid format, creating an organized interface for displaying multiple instances of the Card component and a single instance of the Widget component<br>- This modular approach enhances maintainability and scalability within the project architecture.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/leandrolid/feedback-app/blob/master/front-end/src/main.tsx'>main.tsx</a></b></td>
						<td>- The provided file, `front-end/src/main.tsx`, serves as the entry point for the React application within this project structure<br>- It initializes and renders the main App component by importing necessary dependencies and utilizing ReactDOM's createRoot function to mount the app into the 'root' HTML element<br>- This action kickstarts the user interface of the entire application, providing a foundation for interactive experiences.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/leandrolid/feedback-app/blob/master/front-end/src/vite-env.d.ts'>vite-env.d.ts</a></b></td>
						<td>- The `vite-env.dts` file within the front-end source directory serves to define TypeScript interfaces for Vite's client-side APIs, ensuring type compatibility and enhancing code safety in the project<br>- This facilitates a smoother development experience by providing strong typing across the application.</td>
					</tr>
					</table>
					<details>
						<summary><b>styles</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/leandrolid/feedback-app/blob/master/front-end/src/styles/global.css'>global.css</a></b></td>
								<td>- In the front-end directory of the project, the 'global.css' file serves as a centralized styling hub, leveraging Tailwind CSS to establish consistent design patterns across all components<br>- It sets the base color scheme and typography, ensuring a unified visual experience throughout the application.</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>components</b></summary>
						<blockquote>
							<details>
								<summary><b>Card</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/leandrolid/feedback-app/blob/master/front-end/src/components/Card/index.tsx'>index.tsx</a></b></td>
										<td>In the provided front-end project structure, the `Card` component defined at `src/components/Card/index.tsx` serves as a basic building block, providing a black, rounded div of fixed dimensions to be utilized across various pages and views, thereby structuring and visually unifying the user interface.</td>
									</tr>
									</table>
								</blockquote>
							</details>
							<details>
								<summary><b>Widget</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/leandrolid/feedback-app/blob/master/front-end/src/components/Widget/index.tsx'>index.tsx</a></b></td>
										<td>- This front-end component, located within the Widget directory, serves as a user interface for providing feedback<br>- It utilizes a Popover interface from '@headlessui/react' and an icon from 'phosphor-react'<br>- Upon interaction with the icon, a form (WidgetForm) is displayed to facilitate user feedback submission<br>- This feature enhances user engagement and encourages communication within the application.</td>
									</tr>
									</table>
									<details>
										<summary><b>Button</b></summary>
										<blockquote>
											<table>
											<tr>
												<td><b><a href='https://github.com/leandrolid/feedback-app/blob/master/front-end/src/components/Widget/Button/ScreenShotButton.tsx'>ScreenShotButton.tsx</a></b></td>
												<td>- This front-end component, located within the Widget/Button directory, enables users to capture and view screenshots within the application<br>- Upon user interaction, it either initiates a screenshot capture process or removes an existing screenshot from display<br>- The captured image is displayed as a button with an embedded thumbnail, while the removal of the screenshot leaves behind a trash can icon for easy deletion.</td>
											</tr>
											<tr>
												<td><b><a href='https://github.com/leandrolid/feedback-app/blob/master/front-end/src/components/Widget/Button/WidgetCloseButton.tsx'>WidgetCloseButton.tsx</a></b></td>
												<td>- This front-end component, WidgetCloseButton.tsx, serves to provide a close button for feedback forms within the project's user interface<br>- Utilizing the HeadlessUI and PhosphorReact libraries, it offers an interactive experience with a stylized X icon, allowing users to easily dismiss the form.</td>
											</tr>
											</table>
										</blockquote>
									</details>
									<details>
										<summary><b>Form</b></summary>
										<blockquote>
											<table>
											<tr>
												<td><b><a href='https://github.com/leandrolid/feedback-app/blob/master/front-end/src/components/Widget/Form/index.tsx'>index.tsx</a></b></td>
												<td>- This React component, located within the front-end structure, manages a feedback form widget<br>- It dynamically displays different steps based on user interaction: first, users choose the type of feedback; second, they provide content for that specific type<br>- Upon submission, the form transitions to a success step, allowing users to reset and start over<br>- This modular design ensures a seamless and intuitive user experience in gathering feedback effectively.</td>
											</tr>
											</table>
											<details>
												<summary><b>Steps</b></summary>
												<blockquote>
													<table>
													<tr>
														<td><b><a href='https://github.com/leandrolid/feedback-app/blob/master/front-end/src/components/Widget/Form/Steps/FeedbackContentStep.tsx'>FeedbackContentStep.tsx</a></b></td>
														<td>- This React component, located within the FeedbackContentStep.tsx file of the front-end project, is responsible for displaying and handling user feedback submission forms<br>- It accepts different types of feedback, allows users to attach a screenshot, and enables them to submit their feedback<br>- Upon successful submission, it triggers an onFeedbackSent event<br>- The component's design follows the selected feedback type, providing a tailored experience for each feedback category.</td>
													</tr>
													<tr>
														<td><b><a href='https://github.com/leandrolid/feedback-app/blob/master/front-end/src/components/Widget/Form/Steps/FeedbackSuccessStep.tsx'>FeedbackSuccessStep.tsx</a></b></td>
														<td>- This component, located within the FeedbackSuccessStep.tsx file of the front-end project, presents a user feedback success screen<br>- It displays a customizable close button, an illustration, a thank-you message, and a reusable button to submit another feedback<br>- The purpose is to acknowledge the user's input and offer them the option to provide more feedback if desired.</td>
													</tr>
													<tr>
														<td><b><a href='https://github.com/leandrolid/feedback-app/blob/master/front-end/src/components/Widget/Form/Steps/FeedbackTypeStep.tsx'>FeedbackTypeStep.tsx</a></b></td>
														<td>- This TypeScript file within the front-end component structure defines a reusable step for users to select feedback types (bug, idea, or other) in a feedback form<br>- The feedbackTypes object provides visual representations and titles for each type, while the FeedbackTypeStep function renders interactive buttons for user selection<br>- This modular approach facilitates consistent and efficient feedback collection across various parts of the application.</td>
													</tr>
													</table>
												</blockquote>
											</details>
										</blockquote>
									</details>
								</blockquote>
							</details>
							<details>
								<summary><b>Navbar</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/leandrolid/feedback-app/blob/master/front-end/src/components/Navbar/index.tsx'>index.tsx</a></b></td>
										<td>In the provided front-end project structure, the `Navbar` component (`front-end/src/components/Navbar/index.tsx`) serves to create a visually appealing header section with a dark background color, enhancing the overall user interface and navigation experience across all pages.</td>
									</tr>
									</table>
								</blockquote>
							</details>
							<details>
								<summary><b>Loading</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/leandrolid/feedback-app/blob/master/front-end/src/components/Loading/index.tsx'>index.tsx</a></b></td>
										<td>- In the front-end project structure, the `Loading` component in `src/components/Loading/index.tsx` serves to display a loading animation when data is being fetched or processed asynchronously<br>- The Phosphor React library's CircleNotch icon is used for this purpose, ensuring a smooth and responsive user interface during such operations.</td>
									</tr>
									</table>
								</blockquote>
							</details>
						</blockquote>
					</details>
				</blockquote>
			</details>
		</blockquote>
	</details>
</details>

---
##  Getting Started

###  Prerequisites

Before getting started with feedback-app, ensure your runtime environment meets the following requirements:

- **Programming Language:** TypeScript
- **Package Manager:** Npm


###  Installation

Install feedback-app using one of the following methods:

**Build from source:**

1. Clone the feedback-app repository:
```sh
❯ git clone https://github.com/leandrolid/feedback-app
```

2. Navigate to the project directory:
```sh
❯ cd feedback-app
```

3. Install the project dependencies:


**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm install
```




###  Usage
Run feedback-app using the following command:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm start
```


###  Testing
Run the test suite using the following command:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm test
```

