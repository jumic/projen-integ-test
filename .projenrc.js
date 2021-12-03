const { AwsCdkConstructLibrary } = require('projen');
const project = new AwsCdkConstructLibrary({
  author: 'Julian Michel',
  authorAddress: 'mail@julianmichel.de',
  cdkVersion: '1.134.0',
  defaultReleaseBranch: 'main',
  name: 'projen-integ-test',
  repositoryUrl: 'https://github.com/mail/projen-integ-test.git',

  cdkDependencies: [
    '@aws-cdk/core',
    '@aws-cdk/aws-s3',
  ], /* Which AWS CDK modules (those that start with "@aws-cdk/") does this library require when consumed? */
  // cdkTestDependencies: undefined,  /* AWS CDK modules required for testing. */
  // deps: [],                        /* Runtime dependencies of this module. */
  // description: undefined,          /* The description is just a string that helps people understand the purpose of the package. */
  devDeps: [
    'aws-cdk',
  ], /* Build dependencies for this module. */
  // packageName: undefined,          /* The "name" in package.json. */
  // release: undefined,              /* Add release management to this project. */
  bundledDeps: ['ts-node'],
});
project.synth();