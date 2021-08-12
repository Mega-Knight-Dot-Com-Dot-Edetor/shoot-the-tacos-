controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`taco shell bullet`, ship, 0, -140)
    projectile.startEffect(effects.coolRadial, 100)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy(effects.disintegrate)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    scene.cameraShake(4, 500)
    otherSprite.destroy(effects.disintegrate)
    sprite.startEffect(effects.fire, 200)
    info.changeLifeBy(-1)
})
let projectile: Sprite = null
let ship: Sprite = null
let tacos = [
sprites.food.smallTaco,
sprites.food.smallTaco,
sprites.food.bigTaco,
sprites.food.bigTaco,
sprites.food.bigTaco,
sprites.food.bigTaco
]
ship = sprites.create(assets.image`taco destroyer`, SpriteKind.Player)
ship.setStayInScreen(true)
ship.bottom = 120
controller.moveSprite(ship, 100, 100)
info.setLife(5)
effects.starField.startScreenEffect()
game.onUpdateInterval(500, function () {
    projectile = sprites.createProjectileFromSide(tacos[randint(0, tacos.length - 1)], 0, 75)
    projectile.setKind(SpriteKind.Enemy)
    projectile.x = randint(10, 150)
})
