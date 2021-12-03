import * as s3 from '@aws-cdk/aws-s3';
import * as cdk from '@aws-cdk/core';

export class Example extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string) {
    super(scope, id);

    new s3.Bucket(this, 'Resource', {
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });

  }
}