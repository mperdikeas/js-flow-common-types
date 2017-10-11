// @flow
require('source-map-support').install();
import 'babel-polyfill';
import {assert} from 'chai';
import AssertionError  from 'assertion-error';
assert.isOk(AssertionError);


import _ from 'lodash';

import type {Exact} from '../src/index.js'; // it is important that types are imported from ../src and not from ../lib if you want Flow to perform static type checking in your test code. Quite simply, the files in ../lib are stripped from type checking annotations. However, since this package is used as a library we also have to add 'test/' in the .npmignore file otherwise the importation from src fails when we try to use this module from npm.

describe('Types', function () {
    it('can\'t really be tested'
       , function () {
           const a : Exact<{}> = {}; // this is just to demonstrate that we do FlowType-based static type checking on test code, too.
           assert.isTrue(true);
       });     
});
