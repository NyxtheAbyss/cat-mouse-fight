controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . f f f f f f f f f . . . . . 
        . f . f f f f f f f f . f . . . 
        . f . f e e e e e f f f f . . . 
        . f e e f f e 4 4 4 4 f f . . . 
        . f e 5 f 4 4 d d 3 5 f f . . . 
        . 4 e 4 4 e d 4 f 3 5 5 . . . . 
        . . 4 5 e d 5 4 e d f 5 . . . . 
        . 4 4 4 4 2 4 f 3 e f 5 d d . . 
        . 2 e d 2 4 4 3 3 e 5 f d d . . 
        . 2 e 2 2 2 4 5 3 e 5 d f . . . 
        . 2 e f d 4 e 4 e . . . f . . . 
        . . e f 3 4 e e 4 4 4 4 f . . . 
        . . e e e 4 e f 3 3 f f . . . . 
        . . . . f 4 . f f f 3 . . . . . 
        . . . . 4 f f . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, Cat, 100, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.confetti, 500)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    scene.cameraShake(4, 500)
    info.changeLifeBy(-1)
})
let Mouse: Sprite = null
let projectile: Sprite = null
let Cat: Sprite = null
Cat = sprites.create(img`
    . . 1 3 . . . . . . . 3 1 . . . 
    . . 1 1 d d 1 d 1 d d 1 1 . . . 
    . . . 1 d 1 1 d 1 1 d 1 . . . . 
    . . . 1 d d d d d d d 1 . . . . 
    . . . 1 d 1 a d a 1 d 1 . . . . 
    . . . 1 d d d d d d d 1 . . . . 
    . . . 1 d d 1 1 1 d d 1 . . . . 
    . . . . 1 d 1 d 1 d 1 . . . . . 
    . . . . . 1 d 1 d 1 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Cat, 100, 100)
Cat.setStayInScreen(true)
info.setLife(100)
game.onUpdateInterval(1000, function () {
    Mouse = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . b d d . . . . . . . . . . 
        . . b b d d d . . . . . . . . . 
        . . d d d d d d . . . . . . . . 
        . f d d d d d d c c c c c c c c 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    Mouse.setVelocity(-100, 0)
    Mouse.setPosition(160, randint(5, 115))
    Mouse.setFlag(SpriteFlag.AutoDestroy, true)
})
