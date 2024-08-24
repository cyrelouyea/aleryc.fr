import van from "./van-1.5.2.min.js"

const {button, div, img} = van.tags


const IMAGES = [
  { src: "public/img/landscape/beach.jpg" },
  { src: "public/img/landscape/chrono_trigger_zhyle.jpg" },
  { src: "public/img/landscape/feltiliminal.jpg" },
  { src: "public/img/landscape/makai.jpg" },
  { src: "public/img/landscape/papillon.jpg" },
  { src: "public/img/landscape/reimu.jpg" },
  { src: "public/img/landscape/test.jpg" },
  { src: "public/img/mono/doremi_color.jpg" },
  { src: "public/img/mono/doremy.jpg" },
  { src: "public/img/mono/izuku_mono.jpg" },
  { src: "public/img/mono/pumpiino_blender.jpg" },
  { src: "public/img/mono/sakuya.jpg" },
  { src: "public/img/mono/seija.jpg" },
  { src: "public/img/mono/wriggle_mono.jpg" },
  { src: "public/img/pixelart/follow_me_unafraid.png" },
  { src: "public/img/pixelart/mysterious_snake_show.png" },
  { src: "public/img/pixelart/sea.png" },
  { src: "public/img/pixelart/takane.png" },
  { src: "public/img/portrait/birthday.jpg" },
  { src: "public/img/portrait/felti_sus.png" },
  { src: "public/img/portrait/felti.jpg" },
  { src: "public/img/portrait/ghost_trick.jpg" },
  { src: "public/img/portrait/kua.jpg" },
  { src: "public/img/portrait/muse.jpg" },
  { src: "public/img/portrait/muse2.jpg" },
  { src: "public/img/portrait/muse3.jpg" },
  { src: "public/img/portrait/muse7.jpg" },
  { src: "public/img/portrait/pumpiino.jpg" },
  { src: "public/img/portrait/rosalind.jpg" },
  { src: "public/img/portrait/sophie.jpg" },
  { src: "public/img/portrait/sumireko.jpg" },
  { src: "public/img/quick/hibari_quick.jpg" },
  { src: "public/img/rough/heroines.jpg" },
  { src: "public/img/rough/sumireko.jpg" },
]

/**
 * Returns a new shuffled array
 * 
 * @template T
 * @param {T[]} array 
 * @returns {T[]}
 */
function shuffle(array) {
  /** @type {T[]} */
  const shuffled = array.slice();
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return shuffled;
}

const Card = ({ src, onclick }) => div(
  { class: "card", onclick },
  img({ src, class: "back" }),
  img({ src, class: "fore" })
)

const Gallery = () => {
  const isOpen = van.state(false);
  const shuffledImages = van.state(shuffle(IMAGES));
  const selectedImage = van.state(null);
  const selectedImageSrc = van.derive(() => selectedImage.val?.src);


  const toggle = () => {
    isOpen.val = false;
  }

  const nextImage = () => {
    const index = shuffledImages.val.indexOf(selectedImage.val)
    selectedImage.val = shuffledImages.val[index + 1];
  }

  return div(
    { class: "gallery" },
    shuffledImages.val.map(image => 
      Card({ class: `plausible-event-name=gallery+image+view plausible-event-filename=${image.src}` , src: image.src, onclick: () => { 
        isOpen.val = true;
        selectedImage.val = image;
      }})
    ),
    Modal(
      { isOpen: isOpen, toggle },
      div(
        { class: "viewer" },
        img({ src: selectedImageSrc, onclick: nextImage })
      )
    )
  )
}

const Modal = ({ isOpen, toggle }, ...children) => {
  const display = van.derive(() => isOpen.val ? 'flex' : 'none');

  const onclick = (ev) => {
    if (ev.target === ev.currentTarget) {
      toggle();
    }
  }

  return div(
    { class: "modal", style: () => `display: ${display.val}`, onclick },
    div(
      { class: "modal-content",  },
      button(
        { class: "modal-close", onclick: toggle  },
        "✖"
      ),
      ...children
    ),
    
  )
}

van.add(document.body, Gallery())
