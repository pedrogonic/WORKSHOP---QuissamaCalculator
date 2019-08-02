# Lesson 6

## What is Redux

Redux is a central storage library to concentrate the state of your app in a single place.

This tool can be used with several frameworks like React, React-Native, Flutter, to name a few.

## Installing

~~~bash
npm -i TODO
~~~

## Reducers

Reducers purpose is to define how to treat the data when you try to persist them. TODO elaborate

When you try to persist data, redux will call all reducers, and each of them will "check" if there's a rule for the action you want to perform.

To do this:

Create src/reducers/general.js

~~~Typescript
TODO
~~~

### Combine all reducers

Create src/reducers/index.js

~~~Typescript
TODO
~~~

## TODO

- [] elaborate on reducers
- [] example on a reducer
- [] how to combine reducers
