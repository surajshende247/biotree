# biotree
📃biotree is a social media reference landing page. An open-source alternative to [Linktree](https://linktr.ee/)

## Screenshot


## Quickstart

1. Fork the project
2. Clone the project
3. Navigate to the project directory `cd biotree`
4. Install dependencies with `npm install`
5. Run `npm start`



### How can I add my profile?

Create a file named `your-username.json` in the directory `src/users` with the following content:

Optional fields: `links` and `milestones`

```json
{
    "name": "Suraj Shende",
    "image": "http://github.com/surajshende247.png",
    "bio": "Founder of Road To Code",
    "links":[
      {
        "name": "GitHub",
        "url": "http://github.com/surajshende247",
        "icon": "github"
      },
      {
        "name": "LinkedIn",
        "url": "https://www.linkedin.com/in/surajshende247/",
        "icon": "linkedin"
      },
      {
        "name": "Twitter",
        "url": "https://twitter.com/surajshende247",
        "icon": "twitter"
      },
      {
        "name": "Instagram",
        "url": "https://www.instagram.com/surajshende_247/",
        "icon": "instagram"
      },
      {
        "name": "YouTube",
        "url": "https://www.youtube.com/channel/UC0eauXsOnwwkNTjppgk9-vw",
        "icon": "youtube"
      }
    ]
  }
```

Your URL will be `https://bio-tree.herokuapp.com/<yourusername>`. For example: <https://bio-tree.herokuapp.com/surajshende247>