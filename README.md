Food Application
/*
Header
- Logo
- Nav Item
Body/Main
- Search bar
- RestaurantContainer
- RestaurantCard
Footer
- Copyright
- Links
- Address
- Contact
*/

For production ready app:
1 - I have to build seprate component for each one of them.

visit : Go through the folder structure docs.
https://dev.to/itswillt/folder-structures-in-react-projects-3dp8

Two types of Export/Import

- Default Export/Import
export default component;
import component from "path";

- Namesd Export/Import
export const component;
import {component} from "path";










## Running React on Replit

[React](https://reactjs.org/) is a popular JavaScript library for building user interfaces.

[Vite](https://vitejs.dev/) is a blazing fast frontend build tool that includes features like Hot Module Reloading (HMR), optimized builds, and TypeScript support out of the box.

Using the two in conjunction is one of the fastest ways to build a web app.

### Getting Started
- Hit run
- Edit [App.jsx](#src/App.jsx) and watch it live update!

By default, Replit runs the `dev` script, but you can configure it by changing the `run` field in the [configuration file](#.replit). Here are the vite docs for [serving production websites](https://vitejs.dev/guide/build.html)

### Typescript

Just rename any file from `.jsx` to `.tsx`. You can also try our [TypeScript Template](https://replit.com/@replit/React-TypeScript)