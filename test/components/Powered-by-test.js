import test from 'ava';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Poweredby from '../../src/components/Powered-by';
import { dependencies, devDependencies } from '../../package.json';

const shallowRenderer = TestUtils.createRenderer();
shallowRenderer.render(<Poweredby />);
const poweredBy = shallowRenderer.getRenderOutput();

test('should have a div as container', t => {
  t.is(poweredBy.type, 'div');
});
