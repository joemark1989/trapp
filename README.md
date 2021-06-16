# Hello, folks! <img src="https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif" width="30px">

I will have a troubleshooting section below the steps.

Here are the steps for launching the application.

1. download the zip or pull it down to your local.
2. cd into server run yarn to install the dependencies.
3. There is a .env.example file, you will need to create a .env file and fill it out with the same variables from the .env.example file.
4. Here is an example of what the database_url could look like in the .env file, postgresql://postgres:password@localhost:5432/products
5. Once that is done, please run the database of your choosing, I used PostgreSQL.
6. Once this is configured correctly run yarn dev.
7. cd into web run yarn to install and then run yarn dev.
8. Winner winner chicken dinner, you see it :D.


TROUBLSHOOTING SECTION


There could be some error messages along the way. If you get this error: ![DB isnt running](https://user-images.githubusercontent.com/48049149/122286900-5d56a680-cebe-11eb-8821-178a2d5b415d.JPG)

You simply need to just start your database server, this will resolve this problem.

When you open the project for the first time all data should be seeded automatically via typeorm running the migrations automatically.
However, if this isn't the case please run this command to seed the database: npx typeorm migration:run
