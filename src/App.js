import "./App.css";

import LinkCard from "./LinkCard/LinkCard";

function App() {
  const data = [
    {
      title: "linkedin",
      username: "LINKEDIN",
      url: "https://linkedin.com/in/achaltelmasre"
    },
    {
      title: "facebook",
      username: "FACEBOOK",
      url: "https://www.facebook.com/achal.telmasre/"
    },
    {
      title: "instagram",
      username: "INSTAGRAM",
      url: "https://www.instagram.com/achaltelmasre/7"
    },
    {
      title: "github",
      username: "GITHUB",
      url: "https://github.com/achaltelmasre"
    }
  ];

  return (
    <div className="container">
      <h3 className="app-title">Linktree-Alt</h3>

      {
        data.map((cardinfo) => {
          return (
            <LinkCard
              title={cardinfo.title}
              tagline={cardinfo.tagline}
              username={cardinfo.username}
              link={cardinfo.link}
            />
          );
        })
      }
    </div>
  );
}

export default App;