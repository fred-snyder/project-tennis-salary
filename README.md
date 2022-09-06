# project-tennis-salary

An API that returns a tennis player's salary based on a set of match data.

```sh
# run eslint
npm eslint .
pnpm exec eslint .

# run Typescript in watch mode
tsc --watch

# then run node to watch for node changes
nodemon ./dist/app.js
```

# Tennis player salary API

- calculate salary of a player
    - based on games/matches/sets/aces/faults/etc played

# Tennis rules

- win a match: player wins 3 sets
    - a winning set: player wins 6 games, with at least 2 games difference

- ace: a serve where the opponent does not touch the ball
    - the player wins the turn
- double fault: 2 serves where the ball does not cross the net
    - the opponent wins the turn

# Money calculation

```
500e        for every match played
200e        per game won
750e        per set won
2500e       per match won
100e        for every ace
-500e       for every smashed racket
-100e       for every double fault
```

# JSON data

Explanation:

```json
{
    // The id of the player.
    "playerId": 1,

    // The id of the opponent.
    "opponentId": 2,

    // [games won player, games won opponent], [etc.], [etc.]
    "result": [[6,2],[4,6],[7,5],[5,7],[6,1]], // 3 sets won by player

    // [player aces, opponent aces]
    "aces": [6,15],

    // [player smashed rackets, opponent smashed rackets]
    "smashedRackets":[2,1],

    // [player double faults, opponent double faults]
    "doubleFaults": [3,4]
}
```


# API spec

```
localhost:8080/salary/player/{id}

JSON response
http status code: 200
{
    id
    name
    totalSalary // total salary after all games played
}
```
