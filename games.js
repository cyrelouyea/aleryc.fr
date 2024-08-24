import van from "./van-1.5.2.min.js"

const { a, img, div, iframe } = van.tags

const GAMES = [
  { 
    title: "Just Hide And Don't Die", 
    src: "public/svg/itchio-textless-white.svg", 
    href: "https://cyrelouyea.itch.io/just-hide-and-dont-die",
    embed: "https://itch.io/embed-upload/5093036?color=000f5f",
  },
  { 
    title: "Diamond", 
    src: "public/svg/itchio-textless-white.svg", 
    href: "https://cyrelouyea.itch.io/diamond",
    embed: "https://itch.io/embed-upload/4740156?color=3c0000",
  },
  { 
    title: "Don't Let Them Pass", 
    src: "public/svg/itchio-textless-white.svg", 
    href: "https://cyrelouyea.itch.io/dltp",
    embed: "https://itch.io/embed-upload/4712803?color=333333",
  },
  { 
    title: "A Silent Pumpkin", 
    src: "public/svg/itchio-textless-white.svg", 
    href: "https://cyrelouyea.itch.io/a-silent-pumpkin",
    embed: "https://itch.io/embed-upload/4686178?color=230404",
  },
]


const Card = ({ title, href, src, embed }) => {
  const show = van.state(false);

  const onclick = () => {
    show.val = !show.val;
  }
  "".replace()
  return div(
    div(
      { class: "game-card" },
      div(
        { class: "game-card-border" },
        div(
          { class: "game-card-title" },
          title
        ),
        div(
          { style: "display: flex; gap: 1em" },
          a(
            { class: `plausible-event-name=game+play plausible-event-game=${title.replace(/\s+/g, '+')} game-card-button`, href: '#', onclick },
            img({ src }),
            "Play",
          ),
          a(
            { class: "game-card-button", href },
            img({ src }),
            "Page"
          )
        )
      )
    )
  )
}

const Cards = () => div(
  { class: "game-cards" },
  GAMES.map(Card)
)


van.add(document.body, Cards())