import * as lambda from "aws-cdk-lib/aws-lambda";
import * as cdk from "aws-cdk-lib";
import * as path from "path";
import { Construct } from "constructs";

export class ProductByIdLambda extends Construct {
  public readonly lambdaFunction: lambda.Function;

  constructor(scope: Construct, id: string) {
    super(scope, id);
    this.lambdaFunction = new lambda.Function(this, "productById-lambda", {
      runtime: lambda.Runtime.NODEJS_20_X,
      memorySize: 1024,
      timeout: cdk.Duration.seconds(5),
      handler: "productById.main",
      code: lambda.Code.fromAsset(path.join(__dirname, "../../lambda")),
    });
  }
}
