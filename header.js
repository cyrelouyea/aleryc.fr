import van from "./van-1.5.2.min.js"

const { ul, li, a } = van.tags

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/gallery.html", label: "Gallery" },
  { href: "/games.html", label: "Games" },
  { href: "https://vs.aleryc.fr/brand-builder/?q=o.n..l.yam...emo....ryr...ema.i..n.s", label: "VS Brand Builder ⤴" },
  { href: "https://vs.aleryc.fr/level-editor", label: "VS Level Editor ⤴" },
]

const Header = () => ul(
  LINKS.map(({ href, label }) =>
    li({ class: "border" }, a({ class: "link", href }, label))
  )
)


van.add(document.querySelector('nav'), Header())