1) Cargar GitHub en Docker:
git clone https://github.com/FreddyGM20/PO2
2) Dirigirse a la carpeta de trabajo:
cd PO2
3) Cargar la imagen de docker
docker-compose build 
docker-compose up -d

open de port given in the website, the ones which said 8080,
then copy the url.

after doing that the following is check the tasks proposses 

1 - for connecting to the database you must have to go
to the url path + /connect , THIS IS A GET METHOD

2- for create an user you must have to go to 
to the url path + /create , THIS IS A POST METHOD
which received a .JSON that has the info of the new user

3- for deleting the userDb collection in the database you must have to go
to the url path + /delete , THIS IS A GET METHOD

4- for Reading the csv you need to send the csv file through postman or insonmia
and it is received with a POST METHOD.





