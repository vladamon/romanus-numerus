# Romanus Numerus App

This is a small web app aimed to help children learn Roman numerals. It's supports simple functionality of converting Roman numerals to Integer numbers and vice-versa through a simple GUI

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Problem statement and the Project proposal

This project is structured in a way that represents overengineering when compared to the Problem statement (small Roman numerals convertor)

The structure of this project is more aimed to showcase how one mid-sized project could look like in terms of patterns, technologies and project organization.

### Folder structure

Folder structure is relatively simple, with dedicated folders for pages/view, layouts, components, api and store(state).

Views contain only entry component, all other components are in respective folder in the components folder.

There are layouts, integrated with routing but for this project it hasn't been utilized.

Store contains all the logic related to managing state with all the libs and middllewares, boilerplate and initialization code etc.

Folders with tests are kept close to their respective logic/components.

### Design

For the GUI part, Material UI is utilized. It's responsive out of the box. Nothing fancy here.

### App logic and state management

Function components are used, with hooks. For the state management, there is a Redux, along with Redux Saga

You've probably wondering why the hell Redux/Sagas. Well this could be easily written in one html file, with all the logic and styles in it (in the end it ends like this). But I wanted to showcase relatively simple yet meaningful project, with structure, patterns and technologies that can serve as a good starting point.

For the conversion logic, the internal package is used. The packages are maintained with Lerna.

There is some validation on the front-end side which should ensure smooth and safe user experience. If that fails (and it's not going to :) ), there is a strong validation on the lib side as well (actually validating logic is the same - it's using lib on the front side)

## Other points worth mentioning

There are some tests, mostly for the Redux where most of the logic is contained (testing actions and reducers).

## Missing parts - things I would like to add or improve

I would like to add tests for sagas. It kind of fell outside of the scope of this project because it involves more setup and mocking - meaning more time.

I would like to test components with Jest and Enzyme. But there are just a couple of them.

The project structure can be devised even further to support bigger projects and enable scaling.

I would add error handling on the front-end side when lib throws an exception. For now, user is safe, the app won't break but the user won't see anything meaningful, what the hell just happened.
