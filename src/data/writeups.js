export const writeups = [
    {
        id: "knight-shop-again",
        title: "Knight Shop Again",
        category: "Web",
        description: `A modern e-commerce platform for medieval equipment. I know you'll figure it out.

Flag Format:- KCTF{Fl4g_heR3}

**URL**
http://23.239.26.112:8087/`,
        solution: [
            {
                type: "text",
                content: "website had a register page, so I registered a account."
            },
            {
                type: "image",
                src: "/images/KnightShopAgain/dashboard.png",
                alt: "dashboard"
            },
            {
                type: "text",
                content: "now i saw a list of itmes being listed but i had only $50 so all items costs $50+, so now I tried adding an item to the card but changed the quantity to `-1` in burpsuite."
            },
            {
                type: "image",
                src: "/images/KnightShopAgain/addcart.png",
                alt: "addcart"
            },
            {
                type: "image",
                src: "/images/KnightShopAgain/cart.png",
                alt: "cart"
            },
            {
                type: "text",
                content: "now i was able to make a purchase, i tried to buy it and then saw the response which had the flag."
            },
            {
                type: "image",
                src: "/images/KnightShopAgain/flag.png",
                alt: "flag"
            }
        ],
        flag: "KCTF{REDACTED}"
    },
    {
        id: "knightcloud",
        title: "KnightCloud",
        category: "Web",
        description: `Your startup just signed up for KnightCloud's enterprise SaaS platform, but the premium features are locked behind a paywall. As a security researcher, you've been tasked to test their platform's security. Can you find a way to access the premium analytics dashboard without paying?

**URL**
http://23.239.26.112:8091/`,
        solution: [
            {
                type: "text",
                content: "created an account, which landed me on a dashboard with user `Free tier`"
            },
            {
                type: "image",
                src: "/images/cloud/free.png",
                alt: "free"
            },
            {
                type: "text",
                content: "i than started going through all the requests and found the jwt and base64 encoded user in localStorage. but that was not working."
            },
            {
                type: "text",
                content: "i than started going through the js files on the source code and found a js file with exposed api requests to upgrade an user from `free` to `premium`"
            },
            {
                type: "code",
                lang: "javascript",
                content: `examples: {
  upgradeUserExample: {
    endpoint: "/api/internal/v1/migrate/user-tier",
    method: "POST",
    body: {
      u: "user-uid-here",
      t: "premium"
    },
    validTiers: ["free", "premium", "enterprise"]
  }
}`
            },
            {
                type: "image",
                src: "/images/cloud/req.png",
                alt: "req"
            },
            {
                type: "text",
                content: "i crafted a burpsuite request and sent to my uid, and then I refreshed my dashboard, i had got premium user, so got the flag."
            },
            {
                type: "code",
                lang: "http",
                content: `POST /api/internal/v1/migrate/user-tier HTTP/1.1
Host: 23.239.26.112:8091
Authorization: Bearer YOUR_JWT_TOKEN
Content-Type: application/json

{
  "u": "7adb76f6-ff4b-4cf0-b48c-de502e297a08",
  "t": "premium"
}`
            },
            {
                type: "image",
                src: "/images/cloud/falg.png",
                alt: "flag2"
            }
        ],
        flag: "KCTF{REDACTED}"
    }
];

export const teamInfo = {
    name: "TrickedMyAunty",
    event: "Knight CTF 2026",
    socials: [
        { name: "LinkedIn", url: "https://www.linkedin.com/in/swarnimbandekar" },
        { name: "Medium", url: "https://medium.com/@swarnimbandekar" },
        { name: "folio", url: "https://swarnimbandekar.github.io/" }
    ]
};
