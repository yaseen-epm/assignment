# 🎯 Project: Product Service & Frontend Integration

This repository demonstrates a simple serverless product service (AWS Lambda + API Gateway) and its integration with a frontend.

---

## 📂 Table of Contents

- [Overview](#overview)  
- [API Endpoints](#api-endpoints)  
  - [Get Products List (Task 3.1)]  
  - [Get Product by ID (Task 3.2)]  
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

### Get Products List (Task 3.1)
  lambda function URL for getProductsList : https://y1n1p58vl4.execute-api.us-east-1.amazonaws.com/dev/products/

### Get Product by ID (Task 3.2)
  lambda function URL for getProductsById : https://y1n1p58vl4.execute-api.us-east-1.amazonaws.com/dev/products/2
### FE URL (Task 3.2)
  URL(Product list API integrated): https://dxgbn3tm2xu3v.cloudfront.net/

- **Purpose**: Retrieve a list (array) of products  
- **URL**:  
