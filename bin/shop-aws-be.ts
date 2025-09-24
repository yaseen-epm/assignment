#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { ShopAwsBeStack } from '../lib/shop-aws-be-stack';

const app = new cdk.App();
new ShopAwsBeStack(app, 'ShopAwsBeStack', {
  // Optionally specify env here
});