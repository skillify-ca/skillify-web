# Skillify

## How to install


0. Give Vithushan your github username so he can invite you to the react repo and then clone the skillify-web repo to your desktop.

1. Open a new external terminal. Type `Command + SHIFT + P ` on Mac and `Control + SHIFT + `P on windows from inside <b>VSCODE</b>. 

2.  Next, you want to install **Node.js**, Download the correct version for your operating system(Windows,Mac,Linux). Download the MSI version at https://nodejs.org/en/download/. Now open the installer and make sure the installation has finished. In your terminal window, type the following: `node -v`
. If some sort of version shows up such as(v16.15.1) or something similar, it has installed.

3. Now on VSCODE, create a file called `.env.local`. Ask Vithushan what needs to go in this file.

4. Now, make sure you are in the <u>Skillify Folder</u>. On windows, type `cd`  and on mac type `pwd` in your terminal. It will tell you what folder you are in right now. Make sure you know where the Skillify folder is saved on your device. If you are in the Skillify folder, the terminal window will display something that ends with skillify-web after you type `cd` or `pwd`. If you are not in that directory, you want to get into it. Lets say the Skillify file on your computer is located here: `C:\Users\sutha\OneDrive\Documents\GitHub\skillify-web`.
You want to type cd/pwd User, then cd/pwd sutha and so on until you type cd/pwd skillify-web. Then you are in the correct directory !

5. Now type `npm install` in the terminal window. If a lot of `NPM ERR!` show up in red, type `npm install --legacy-peer-deps`.  It would be installing properly if at the bottom, there are no NPM ERR!’s showing up. The installation is complete when you are able to type again into the terminal and the cursor will reappear. 

6. Now, you want to type the following into your terminal: `npm run dev`. After it has installed. It may say (started a server at…) Go onto your browser and open http://localhost:3000/. If the skillify website shows up, you're good. If not, go to your terminal, press `control/command c`. After that, rerun `npm run dev` in the terminal. The skillify website should now show up.

7. Try going into VSCODE and locating the `Hero.tsx` file. Try removing and changing the code. If you go on the site, it should look different according to the changes you made. If that works, you are good !

## Storybook

Math Champ has a library of UI components that make up the website. They're categorized as a generic UI component or a question type component. To see the component library run this command in your Terminal:

`npm run storybook`

## Important libraries that we use

- [Tailwind + NextJS Starter](https://tailwindcss.com/docs/guides/nextjs)
- [Tailwind CSS](https://tailwindcss.com/) (v2)
- [Storybook](https://storybook.js.org/)
