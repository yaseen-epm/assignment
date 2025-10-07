# 🎯 Project: Product Service & Frontend Integration

This repository demonstrates a simple serverless product service (AWS Lambda + API Gateway) and its integration with a frontend.

---
## Task 4
## 📂 Table of Contents

- [Overview](#overview)  
- [API Endpoints](#api-endpoints)  
  - [Get Products List ]  
  - [Get Product by ID ]
  - [Create Product]  
- [Frontend Integration](#frontend-integration)  


---

## 📝 Overview

This small project includes:

- A **backend service** exposing two Lambda/API endpoints:  
  1. List all products  
  2. Get a single product by its ID  
- A **frontend application** that consumes those endpoints and displays product data.

The endpoints are live and can be accessed publicly (no authentication). These are useful for testing, demos, or integration purposes.

---

## 🔗 API Endpoints

### Get Products List (Task 4)
  lambda function URL for getProductsList :https://boaefrida8.execute-api.us-east-1.amazonaws.com/dev/products
- **Purpose**: Retrieve a list (array) of products  

### Get Product by ID (Task 4)
  lambda function URL for getProductsById : https://boaefrida8.execute-api.us-east-1.amazonaws.com/dev/products/{$PRODUCTID}
### POST Product (Task 4)
   lambda function URL for getProductsList :https://boaefrida8.execute-api.us-east-1.amazonaws.com/dev/products
  
   sample payload
   {"description":"POST Skinny fit, stretch denim","price":45,"title":"Women's Jeans","count":75}
   
### FE URL (Task 4)
  URL(Product list API integrated): https://dxgbn3tm2xu3v.cloudfront.net/

 
