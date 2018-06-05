import Model from './Model';
import View from './View';
import Controller from './Controller';
import Data from './Data'

const data = new Data()
const state = data.loadData();

const model = new Model(state);
const view = new View();
const controller = new Controller(view,model);