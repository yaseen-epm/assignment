import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { ShopAwsBeStack } from '../lib/shop-aws-be-stack';


test('API Gateway and Lambdas Created', () => {
	const app = new cdk.App();
	const stack = new ShopAwsBeStack(app, 'MyTestStack');
	const template = Template.fromStack(stack);

	// Check for API Gateway
	template.resourceCountIs('AWS::ApiGateway::RestApi', 1);

	// Check for Lambda Functions
	template.resourceCountIs('AWS::Lambda::Function', 3);
});
