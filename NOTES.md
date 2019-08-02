# Lesson 1

## Different files by platform

index.android.js
index.ios.js

## Difference from React web

Instead of \<div>, \<span> and other html based tags, we use \<Text>, \<View>, etc

## Styles and component props

camel case for style prop

~~~~React
<View style={ styles.container }>
~~~~

## Creating files, functions, methods

### File with functions

### Arrow functions

Don't have acces to components lifecycle.

### Classes (Typescript)

~~~~React
class App extends Component {}
~~~~

classes have lifecycles.

## Lifecycles

<https://>

### Contructor

Define state inside contructor.

### ComponentDidMount

Chamado após o componente ser montado

### ComponentWillmount

Chamado antes de ele ser motnado

### ComponentWillUnmount

Antes de ser desmontado

### ComponentWillUpdate(nextProps, nextState)

Antes dele ser atualizado vc consegue comparar as infopramacoes e tratar de alguma forma

### ComponentWillReceiveProps(nextProps)

Quando recebe nova props de fora.


## TODO

- [] Touchable opacity
