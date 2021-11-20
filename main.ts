input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        ship.move(1)
        basic.pause(100)
        ship.ifOnEdgeBounce()
    }
})
input.onButtonPressed(Button.B, function () {
    ship.turn(Direction.Right, 45)
})
let ship: game.LedSprite = null
let star: game.LedSprite = null
let stars: game.LedSprite[] = []
for (let index = 0; index < 10; index++) {
    star = game.createSprite(2, 0)
    star.set(LedSpriteProperty.Direction, randint(90, 270))
    stars.push(star)
}
ship = game.createSprite(2, 2)
ship.set(LedSpriteProperty.Direction, 180)
basic.forever(function () {
    for (let value of stars) {
        basic.pause(500)
        value.move(1)
        if (value.isTouchingEdge()) {
            value.set(LedSpriteProperty.X, 2)
            value.set(LedSpriteProperty.Y, 2)
        }
    }
})
