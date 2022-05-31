1) Upload GitHub to Docker:
`git clone https://github.com/FreddyGM20/PO2`
2) Go to the working folder:
`cd PO2`
3) Upload the docker image:
`docker-compose build` 
`docker-compose up -d`

open de port given in the website, the ones which said 8080,
then copy the url.

after doing that the following is check the tasks proposses 

1 - for connecting to the database you must have to go
to the url path + /connect , THIS IS A GET METHOD

2- for create an user you must have to go to 
to the url path + /create , THIS IS A POST METHOD
which received a .JSON that has the info of the new user.
The JSON must have the following structure:

```
{
  "name": "xxxx",
  "password": "xxxx",
  "id_event": "xxxx"
}
```

3- to authenticate user, you need to go to URL path + /check/, THIS IS A GET METHOD that received a .JSON that authenticates.
where it should have the following structure:

```
URL path + /check/namme content/password content/id_event content/
```

4- for deleting the userDb collection in the database you must have to go
to the url path + /delete , THIS IS A GET METHOD

5- To read the csv, you need to send the csv file via postman or insomnia and it is received with a POST METHOD, you need to go to URL path + /csvFile.





