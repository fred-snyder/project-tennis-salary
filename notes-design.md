# Notes design

`localhost:8080/salary/player/1`

```
    {
      "playerId": 1,
      "opponentId": 2,
      "result": [[6,2],[4,6],[7,5],[5,7],[6,1]],
      "aces": [6,15],
      "smashedRackets":[2,1],
      "doubleFaults": [3,4]
    },
    {
      "playerId": 1,
      "opponentId": 3,
      "result": [[6,2],[4,6],[3,6],[2,6]],
      "aces": [6,15],
      "smashedRackets":[4,1],
      "doubleFaults": [4,4]
    },
    {
      "playerId": 1,
      "opponentId": 4,
      "result": [[6,2],[6,4],[6,0]],
      "aces": [6,15],
      "smashedRackets":[0,4],
      "doubleFaults": [8,4]
    },
```

```
500e        for every match played
200e        per game won
750e        per set won
2500e       per match won
100e        for every ace
-500e       for every smashed racket
-100e       for every double fault
```

## Example calculations

```
playerId: 1

analyse all JSON matches
select matches where playerId or opponentId === 1
- count number of matches
    - and for every match:
        - check the games > and calculate the match winner, number of sets won, the number of games won
    - and sum all the aces, smashedRackets, and doubleFaults

    {
      "playerId": 1,
      "opponentId": 3,
      "result": [[6,2],[4,6],[3,6],[2,6]],
      "aces": [6,15],
      "smashedRackets":[4,1],
      "doubleFaults": [4,4]
    },

4 sets played
loop over all sets
for each set
- check which player wins that set, store in playerSet and opponentSet
- sum the games, store in playerGames and opponentGames
- sum the rackets, store in playerRackets and opponentRackets
- sum the doubleFaults, store in playerFaults and opponentDoubleFaults??

match lost: for every set, if set[0] < set[1]
```
