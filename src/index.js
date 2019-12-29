import React from 'react';
import ReactDOM from 'react-dom';
// reduxから提供されている、storeを作成するための関数
// applyMiddlewareは、redux-thunkのようなMiddlewareを適応するための関数
import { createStore, applyMiddleware } from 'redux';
// 作成したstoreを全コンポーネントにわたすための特殊なコンポーネント
import { Provider } from 'react-redux';
import reducer from './reducers'
import './index.css';
import EventsIndex from './components/events_index';
import EventsNew from './components/events_new';
import * as serviceWorker from './serviceWorker';

import thunk from 'redux-thunk'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// すべてのstateがこのstoreに集約される
const store = createStore(reducer, applyMiddleware(thunk))

// 全コンポーネントの元であるAppをProviderで包んで、store属性に、上で作成したstoreを渡すことで、
// 全コンポーネントでstoreを扱うことができる
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path='/events/new' component={EventsNew}/>
        <Route exact path='/' component={EventsIndex}/>
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
