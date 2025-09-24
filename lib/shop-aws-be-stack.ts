import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { ShopLambda } from "./lambdas/shop-lambda";
import { ProductsLambda } from "./lambdas/products-lambda";
import { ProductByIdLambda } from "./lambdas/productById-lambda";
import { ShopApi } from "./api/shop-api";

export class ShopAwsBeStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Instantiate Lambda constructs
    const shopLambda = new ShopLambda(this, "ShopLambda");
    const productsLambda = new ProductsLambda(this, "ProductsLambda");
    const productByIdLambda = new ProductByIdLambda(this, "ProductByIdLambda");

    // Instantiate API Gateway construct
    const shopApi = new ShopApi(this, "ShopApi", {
      shopLambda,
      productsLambda,
      productByIdLambda,
    });

    new cdk.CfnOutput(this, "ApiUrl", { value: shopApi.api.url });
  }
}
