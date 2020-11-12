import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import HookApp from './HookApp';
// import CounterApp from './components/useState/CounterApp';
// import CounterWithCustomHook from './components/useState/CounterWithCustomHook';
// import SimpleForm from './components/useEffect/SimpleForm'
// import FormWithCustomHook from './components/useEffect/FormWithCustomHook'
// import MultipleCustomHooks from './components/examples/MultipleCustomHooks';
// import FocusScreen from './components/useRef/FocusScreen';
// import RealExampleUseRef from './components/useRef/RealExampleUseRef';
// import Layout from './components/useLayoutEffect/Layout';
// import Memorize from './components/useMemo/Memorize'
// import MemoHook from './components/useMemo/MemoHook';
// import CallbackHook from './components/useMemo/CallbackHook';
// import { Padre } from './components/useMemoHW/Padre';
// import TodoApp from './components/useReducer/TodoApp';

import MainApp from './components/useContext/MainApp';
ReactDOM.render(
  <MainApp />,
  document.getElementById('root')
);