# Romanus Numerus

Romanus Numerus is a small Roman numerals converter with simple UI built in React. It features converting in both directions.

It's aimed to help kids in learning Roman numerals so strict rules are imposed - meaning only simple Roman numerals are supported and it's not able to support conversion from large integers (actually largest integer that can be represented in simple Roman numerals is 3999 :) But hey, it's a learning tool - not a NASA calculator.)

## Installation

Clone the repository and run this to install dependencies:

```javascript
cd romanus-numerus

npm install
```

Since there are two packages - React based client and a convertor library combined in monorepo organized with Lerna, after installing dependencies, you should bootstrap it with:

```javascript
lerna bootstrap
```

## Usage

Voila, you're ready to go! Just run this from the root:

```javascript
npm run start
```

Your client app will run on the http://localhost:3000 (or some other port if this is taken). From there you can start playing with the app :)

Happy Romanus experience!

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. And after all, this is a take-home assignment project, not a world breaking tool buy hey, I am here to accept any input :)

Please make sure to update any tests as appropriate (and to add new ones)

## Licence

[MIT](https://choosealicense.com/licenses/mit/)
