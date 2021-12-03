import { App, Stack } from '@aws-cdk/core';
import { Example } from '../src';


const app = new App();
const stack = new Stack(app, 'Example');

new Example(stack, 'Example');

app.synth();
