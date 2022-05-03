# Currency Bird Front
The frontend of a platform that implements a referral system.

## **1) Requirements**
To run in a local environment, it only requires **Docker** and **Docker Compose**.

## **2) Installation**
After clonning the repository, make a copy of the ```.env.template``` file. Then, rename the copy to ```.env``` and add your environment variables.
> **_NOTE:_**  For local execution you can just leave everything as it is.

## **3) Execution**
With this command, the application will be executed, showing all the logs on the screen. It is recommended to run the backend first.
```
docker-compose up
```
## **4) Routes**
Considering that the port registered in the ```.env``` file is 3000, the routes are as follows.
1) Home page
> Path: ```localhost:3000/```
2) Get the referral link:
> Path: ```localhost:3000/referral```
3) Register without a referral link
> Path: ```localhost:3000/register```

> **_NOTE:_** referral links redirect to the same view, but with a path like this: ```localhost:3000/register/invite/{reference_link}```
4) Summary table view
> Path: ```localhost:3000/admin```

## **5) Posible Improvements**
1) Improvement of project organization for better scalability.
2) Data validation in text fields, for example, that they are not empty and have the correct maximum length.
3) Implementation of unit tests and integration tests.
4) Implementation of reactive pages.
5) Use of CSS files.
