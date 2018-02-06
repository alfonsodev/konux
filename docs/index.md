# Application structure
This documents explain the elements and concepts  
that conforms this app.

- Redux connect and containers
- Action creators are pure functions
- HOC
- Navigation
- Material ui
- Redux Saga
- Code Quality and style
- Testing

## Redux connect and containers
I'm using `connect` only with **containers** `containers/`,  
and therefore containers are the only react `class components`.  

The rest of components under `components/` are all **functional stateless components**.
Only containers are `dispatching` actions, sometimes you have to pass down 3 levels a method,
if this happens very often then you could add a Containers or connect where needed for more complex componentes,
but if possible I like to keep it like this, is simpler to have just one level to find all dispatched actions.  
Although `connect` with `mapStateToProps` and `mapDispatchToProps` works with stateless components too, and in bigger
applications I do use it within nested components.  

## Actions creators and pure functions  
I'm using always actions creators instead of dispatching object directly,  
to avoid having constants action names spread around the app,  
Also by using `redux-saga` I can keep action creators free of logic and stateless.  

## Redux Saga
I have used `redux-thunk` in the past, but I didn't like it for complex apps.  
With `redux-saga` there is a learning curve mainly to understanding generators and the concept of side effects,  
but I think is totally worth it. The flow for external calls becomes much more declarative and less prone to errors.
When using `reduz-saga` I only do api calls from within saga workers, therefore it becomes also the right place handle network/service related errors.  
Usually I'd split sagas by services they are calling/connecting, but for this exercies I kept the two only sagas under rootSaga.  

## HOC
A number of HOC are used  
- `withStyle`: provideded by material-ui framework, it helps decoupling css from components,
although I'm not taking full advante of **themes** but in a real app I'd use it.
- `connect` : Only used in Container components as mentioned in the above section.
- `recompose`: I've discover this package called recompose from the `react-google-maps`'s examples,
I think it helps to write cleaner combinatios of HOC's, with more time I could have tried to use it
with connect + withStyles.  

## Navigation  
Because the specs are saying that the app should be ready to handle a complex app, with more than one page,  
I did include `react-router` itegrated with redux. You can see in the redux logger the first action is 
navigating to home screen.  
# Material UI
I choose [Material UI (Next)](material-ui-next.com) because I like how is it desiged in terms of modularity,
it comes with very useful HOC (`withStyles`) and Theme system. And is add a nice style out of the box.  

## Code Quality and style
- editorconfig: Easy way to share editor basic configuration [to avoid spaces vs tabs issues](https://www.youtube.com/watch?v=SsoOG6ZeyUI)
- eslint:  I'm using [eslint](https://eslint.org/) [airbnb setup](https://github.com/airbnb/javascript) with some custom rules
- Flow Type:  
I like to use `flow type` at least for the **data entities** of the app and functions that manipulate this data.  
I think flow type can be helpful without being as demanding as TypeScript.  
The main advantage can be when matching the data entities with the ones provided by an api.  
In this exercise I run out of time to verify that I had all data typed.  


- no relative imports:  
I like to use the resolve webpack feature  
```
    resolve: {
      alias: {
        app: path.resolve(__dirname, 'src/'),
      },
    },
```
Which makes easier refactor and also moving around import statements, 
```
import { Asset } from '../../app/flow'
vs
import { Asset } from 'app/flow'
```
- babel-plugin-transform-object-rest-spread
It allows to use `{ ...spreadOperator }` for objects.  
- Autobinding  
In Containers I like to use Fat Arrow Functions `() =>` for class methods like `handleSomeAction` that need `this` 
so they get Autobinded.  

## Test
As proof of concept I include a test file for testing sagas, `src/saga/__test__` I didn't have time to mock the api,
so things like `new Header` that don't work in node are breaking these test.  

