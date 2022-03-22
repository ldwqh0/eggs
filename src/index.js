class Game {
  eggs = []
  holder

  constructor () {
    for (let i = 0; i < 3; i++) {
      this.eggs.push({
        id: i
      })
    }
  }

  play () {
    this.eggs[(Math.random() * 2).toFixed()].has = true
    this.holder = this.eggs.splice((Math.random() * 2).toFixed(), 1)[0]
    const rest = this.eggs[0]
    if (!rest.has) {
      this.holder = this.eggs[1]
    } else {
      this.holder = rest
    }
  }

  win () {
    return this.holder.has
  }
}

let win = 0

for (let i = 0; i < 1000000; i++) {
  const game = new Game()
  game.play()
  if (game.win()) {
    win++
  }
}
console.log(win)
