# Lesson 3

## Componentizing the app

[image of the calculator]

How to componentize this screen?

It makes sense to separate it in:

A component for the display area of the calculator.

An area for the buttons.

In this area, it makes sense to treat the buttons as a single component in which you can pass different things as Props (more on that on the next lesson).

### Which pre-made components should I use

<https://facebook.github.io/react-native/docs/flatlist#docsNav>

### Components

#### View

This will be the area for showing the calculations and results .

#### Card

This will be the area for the buttons

~~~~Typescript
<View>
    { children }
</View>
~~~~

TODO: explain children

#### Button

~~~~Typescript
<View>
    TODO
</View>
~~~~

#### Creating buttons

All buttons will be defined in an array of objects, each containing fields for their respective props.

~~~~Typescript
TODO
~~~~

In typescript, you could iterate this array with several tools: .map(), .foreach(), etc.

In React Native it's better to use the native component FlatList.

This component renders only the items displayed in a given moment, leading to an improvement in performance in mobile devices.

~~~~Typescript
<FlatList>
    <Button />
</FlatList>
~~~~

### Tip: Spread Operator (...)

Typescript (is it really?) let's you "concatenate" objects very easily:

~~~~Typescript
const obj1 = { a: 1 };
const obj2 = { b: 2 };

const obj3 = { ...a, ...b };
console.log(obj3); // { a: 1, b: 2}
~~~~

## Styling tips

### Colorpicker

Depending on the IDE you're using, there are plugins to help you select colors for your components.

You could also go to a online colorpicker to help you (Eg: <https://htmlcolors.com/google-color-picker>).

## TODO

- [] explain children
- [] confirm spread
- [] components
