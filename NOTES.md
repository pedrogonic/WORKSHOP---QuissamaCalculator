# Lesson 2

## Deconstructing objects

~~~~Typescript
const obj = {
    firstName: "Jean-Luc",
    lastName: "Lemire"
}

const { firstName, lastName } = obj;

console.log( firstName ); // Jean-Luc
~~~~

## Componentizing

In the root of your project, create the file src/components/Button.js

It's a good practice to create separate files (classes in Typescript) for each part of your app that "makes sense on their own".

## Importing components

### Importing from default export

~~~~Typescript
import myDefaultExport from 'path/to/component'

...

myDefaultExport.method(); // executing method defined in another file;
~~~~

### Importing from other exports

~~~~Typescript
import { notDefaultExport1, notDefaultExport1 } from 'path/to/component' }

...

notDefaultExport1.method(); // executing method defined in another file;
~~~~

## Styling

### Creating shadows

#### Android

~~~~css
componentWithShadow: {
    elevation: 5,
}
~~~~

#### iOS

~~~~css
componentWithShadow: {
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84
}
~~~~

## TODO

- [] ?
