let nextCompetitionBlock = new Block(
    blockchain,
    newBlock.hash,
    2,
    sha256((new Date().getTime() + 1).toString()).toString(),
  )