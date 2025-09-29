#!/usr/bin/env node
const cdk = require('aws-cdk-lib');
const { ShopApiLambdaStack } = require('../lib/ShopApiLambdaStack');

// Ensure DynamoDB tables exist before deploying the stack
require('../lib/product-service/ensureTables');

const app = new cdk.App();
new ShopApiLambdaStack(app, 'ShopApiLambdaStack', {});