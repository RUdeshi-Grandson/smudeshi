const apps = [
  {
    name: "RU Games: Word & Brain Puzzles",
    description: "A collection of puzzles designed to improve memory and vocabulary.",
    platform: "iOS",
    store: "https://apps.apple.com/app/idXXXXXXXX",
    status: "live"
  },
  {
    name: "VartaFM",
    description: "Audio stories and immersive storytelling experience.",
    platform: "iOS",
    store: "#",
    status: "coming soon"
  },
  {
    name: "KidNova",
    description: "Interactive learning platform for children.",
    platform: "iPad + iPhone",
    store: "#",
    status: "coming soon"
  }
]

const container = document.getElementById("apps-container")

apps.forEach(app => {

  const isLive = app.status === "live"

  const card = document.createElement("div")
  card.className = "app-card"

  card.innerHTML = `
    <div class="app-card-header">
      <h3>${app.name}</h3>
      <span class="badge ${isLive ? "badge-live" : "badge-soon"}">${isLive ? "Live" : "Soon"}</span>
    </div>
    <p>${app.description}</p>
    <span class="platform-tag">${app.platform}</span>
    <a class="store-btn${isLive ? "" : " disabled"}" href="${isLive ? app.store : "#"}">${isLive ? "Download on App Store" : "Coming Soon"}</a>
  `

  container.appendChild(card)

})
