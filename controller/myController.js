
const myController = (req, res) => {
    res.render("index",{title: "Restaurant Page Home | Swigo - Empowering Your Food Business | DexignZone | Tailwind"})
}

const myService = (req, res) => {
    res.render("pages/services",{title: "Restaurant Page services | Swigo - Empowering Your Food Business | DexignZone | Tailwind"})
}

const myAboutCon = (req, res) => {
    res.render("pages/about",{title: "Restaurant Page about | Swigo - Empowering Your Food Business | DexignZone | Tailwind"})
}

const myBlogCon = (req, res) => {
    res.render("pages/blog-list",{title: "Restaurant Page Templates | Swigo - Empowering Your Food Business | DexignZone | Tailwind"})
}

const mybloglistCon = (req, res) => {
    res.render("pages/bloglist",{title: "Restaurant Page bloglist | Swigo - Empowering Your Food Business | DexignZone | Tailwind"})
}

const myContactCon = (req, res) => {
    res.render("pages/contact",{title:  "Restaurant Page contact | Swigo - Empowering Your Food Business | DexignZone | Tailwind"})
}

module.exports = {myController, myService, myAboutCon, myBlogCon, mybloglistCon, myContactCon}