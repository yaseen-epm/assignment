import * as apigateway from "aws-cdk-lib/aws-apigateway";
import { Construct } from "constructs";
import { ShopLambda } from "../lambdas/shop-lambda";
import { ProductsLambda } from "../lambdas/products-lambda";
import { ProductByIdLambda } from "../lambdas/productById-lambda";

export interface ShopApiProps {
  shopLambda: ShopLambda;
  productsLambda: ProductsLambda;
  productByIdLambda: ProductByIdLambda;
}

export class ShopApi extends Construct {
  public readonly api: apigateway.RestApi;

  constructor(scope: Construct, id: string, props: ShopApiProps) {
    super(scope, id);

    this.api = new apigateway.RestApi(this, "shop-aws-be-api", {
      restApiName: "Shop API Gateway",
      description: "This API serves the Lambda functions.",
      defaultCorsPreflightOptions: {
        allowOrigins: [
          "*",
        ],
        allowMethods: apigateway.Cors.ALL_METHODS,
      },
      deployOptions: {
        stageName: "dev",
      },
    });

    const lambdaIntegration = new apigateway.LambdaIntegration(props.shopLambda.lambdaFunction, {
      proxy: true,
    });


    const shopResource = this.api.root.addResource("shop");
    shopResource.addMethod("GET", lambdaIntegration);
  

    // /products route
    const productsResource = this.api.root.addResource("products");

    productsResource.addMethod(
      "GET",
      new apigateway.LambdaIntegration(props.productsLambda.lambdaFunction)
    );
   

    // /products/{productId} route
    const productByIdResource = productsResource.addResource("{productId}");

    productByIdResource.addMethod(
      "GET",
      new apigateway.LambdaIntegration(props.productByIdLambda.lambdaFunction)
    );

  }
}
