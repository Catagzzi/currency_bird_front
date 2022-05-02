# currency_bird_front
Currency Bird entry test frontend repository.

## **1) Requirements**
To run in a local environment, it only requires **Docker** and **Docker Compose**.

## **2) Installation**
After clonning the repository, make a copy of the ```.env.template``` file. Then, rename the copy to ```.env``` and add your environment variables.
> **_NOTE:_**  For local execution you can just leave everything as it is.

## **3) Execution**
With this command, the application will be raised, showing all the logs on the screen.
```
docker-compose up
```
## **4) URLs**
1) Get the referral link:
> Path: ```localhost:3000/referral```
2) Register without a referral link
> Path: ```localhost:3000/register```

> **_NOTE:_** referral links redirect to the same view, but with a path like this: ```localhost:3000/register/invite/{reference_link}```
3) Summary table view
> Path: ```localhost:3000/admin```

## **5) Improvement**
1) Improve project organization for greater scalability.
2) Data validation in text fields, for example, that they are not empty and that they have the correct maximum length.
3) Implementation of unit tests and integration tests.
4) Implement reactive page.
5) Use of CSS files.
