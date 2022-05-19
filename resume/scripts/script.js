var elements = document.getElementsByClassName("column");
var i;

function addRandomFact() {
  const emojis = {
    mountain: String.fromCodePoint(0x26F0),
    laptop: String.fromCodePoint(0x1F4BB),
    dog: String.fromCodePoint(0x1F436),
    sparkle: String.fromCodePoint(0x2728),
    sneezing: String.fromCodePoint(0x1F927),
    musicnotes: String.fromCodePoint(0x1F3B6)
  }

  const facts =
      [`is based in Markham, ON ${emojis.musicnotes}`,
       `enjoys hiking, running and netflix! ${emojis.mountain}`,
       `is a software engineer at StackAdapt ${emojis.laptop}`, 
       `loves dogs but is allergic to them! ${emojis.dog}${emojis.sneezing}`,
       `is passionate about empowering girls in tech ${emojis.sparkle}`];

  // Pick a random fact.
  const fact = facts[Math.floor(Math.random() * facts.length)];
}