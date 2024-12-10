# Retro CV Project

This project is a retro-styled CV (Curriculum Vitae) built with Next.js and styled using Tailwind CSS. It features a unique, retro-inspired design with custom components and styling.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- Node.js (version 14 or later)
- npm (usually comes with Node.js)
- Git

## Installation

Follow these steps to set up the project on your local machine:

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/retro-cv.git
   ```

2. Navigate to the project directory:
   ```
   cd retro-cv
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Running the Development Server

To start the development server, run the following command:

```
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customizing Your CV

To customize the CV with your own information:

1. Open the `app/page.tsx` file.
2. Modify the `personalInfo`, `skillBadges`, `skills`, `experience`, and `education` objects with your own data.
3. If you want to change the styling, you can modify the Tailwind classes in the JSX or update the global styles in `app/globals.css`.

## Adding Your Own Profile Picture

To add your own profile picture:

1. Place your image file in the `public/images/` directory.
2. Update the `photo` property in the `personalInfo` object in `app/page.tsx` to point to your new image.

## Deploying Your CV

You can deploy your CV to various platforms. One easy option is to use Vercel:

1. Push your changes to a GitHub repository.
2. Go to [Vercel](https://vercel.com) and sign up or log in.
3. Click "New Project" and select your GitHub repository.
4. Follow the prompts to deploy your project.

## Contributing

If you'd like to contribute to this project, please fork the repository and create a pull request with your changes.

## License

This project is open source and available under the [MIT License](LICENSE).
