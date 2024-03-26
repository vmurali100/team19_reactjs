import {createStore} from 'redux';
import { rootreducer } from './reducer';
export const store=createStore(rootreducer)