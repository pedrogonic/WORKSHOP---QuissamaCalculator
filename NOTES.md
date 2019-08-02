# Lesson 8

## Adding pagination

Very few apps consist of only one screen.

The calculator works well as a "single page app", but imagine it makes sense to add a welcome page that lets you select if you want to go to the calculator or to the operations history.

In order to "paginate" your app, you must import the following lib:

~~~~bash
npm i --save react-native--router-flux
~~~~

This library act as its web counterpart, being responsible for changing the screen in display.

The library doesn't instantiate all the routes at once. It only maps then and creates on demand.

## Creating the first page

Add src/pages/Selecion.js to your project.

~~~Typescript
<View style={ styles.container }>
    <TouchableOpacity style={ styles.button } onPress={ this.openHistory }>
        <Text style={ styles.text }>Histórico</Text>
    </TouchableOpacity>
    <TouchableOpacity style={ styles.button } onPress={ this.openCalculator }>
        <Text style={ styles.text }>Calculadora</Text>
    </TouchableOpacity>
</View>
~~~

Then modify your Calculator component like so:

~~~Typescript
<Router cardStyle={{ backgroundColor: "#FFF" }}>
    <Scene key="root" hideNavBar hideTabBar>
        <Scene key="selection" component={ Selection } initial/>
        <Scene key="calculator" component={ Home }/>
        <Scene key="history" component={ History }/>
    </Scene>
</Router>
~~~

### Actions import

In every component where you'll want permit navigation, you will need to:

~~~~Typescript
import { Actions } from "react-native-router-flux";
~~~~

then:

~~~~Typescript
openCalculator = () => Actions.calculator();
~~~~

## TODO

- [] review
