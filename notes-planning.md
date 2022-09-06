# Notes planning

focus:
- technical abilities
- approach
- working habits

stack:
- node/express
- js/ts


## Planning

- [x] start with a simplified problem
- [x] setup express
- [x] create API endpoint
- [ ] start with the API design (succesfull ID match, ID not found, etc)


```plain
localhost:8080/salary/
Tennis API player salary

localhost:8080/salary/player/{id}

id=1
Statuscode 200 OK
{
	id: 0,
	name: 'Fred',
	totalSalary: 20000,
}
id=5
Statuscode 404 OK
{
	id: 5,
	msg: "Id not found"
};
```

- [ ] add typescript
- [ ] convert everything to `.ts`


## Simplified problem

- [x] do a sort of napkin/test salary calculation (Djokovic === 21250)
- [x] create the calculation
    - [x] start with just Javscript
    - [x] start with .json data containing just 1 match
    - [x] the basic calculation for 1 player
    - [x] setup node project
    - [x] create app.js with tests
    - [x] move the matches data to a seperate json
    - [x] import the json data
    - [x] test the logic again
