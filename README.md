# Bowling Reloaded

I got this excercise originally from a job application. This is the second time I have rewritten it - applying and practicing some of my new knowledge. This time I practiced TDD and I used typescript for the first time.

## Task

Write a function that calculates the total score of a bowling game. It has one parameter, a string that represents the frames and balls of the game. It returns the total score.

### Relevant bowling rules

- Each frame consists of throwing the ball - at maximum - twice to knock down all the pins.
- If you knock down all the pins with the first ball, it's called a "strike".
- If you knock down all the pins with the second ball, it's called a "spare".
- Each games consists of ten frames. If you bowl a strike in the tenth frame, you get two more balls. If you throw a spare, you get one more ball.
- Open frames are frames without a strike or spare.
- Scoring is based on the number of pins you knock down. However, if you bowl a spare, you get to add the pins in your next ball to that frame. For strikes, you get the next two balls.

### Parameter string

- Frames are separated with one - and only one - space, there are no leading or trailing spaces.
- A strike is represented by an "x".
- A miss - when no pins were knocked down - is represented by a "-".
- If both balls miss in a frame, the frame is represented by only one "-".
- Spares end with "/".
- The number of pins knocked down are represented by numbers.

#### Examples

| Input                              | Score |
| ---------------------------------- |:-----:|
| "x x x x x x x x x x x x"          | 300   |
| "x 35 9/ -7 -/ x 12 51 - 4/ x"     | 105   |

## Getting started

### Install dependencies

```shell
npm i
```

### Running tests

```shell
npm run test
```

### Building project

```shell
npm run build
```

### Start

```shell
npm run start
```