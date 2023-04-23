import { validateId, validateUrl, validateText } from "./helpers/validators.js"
import { findUserById } from "./helpers/data-managers.js"
import { posts, savePosts } from "../data.js"
import showPostFeed from "./show-post-feed.js"
import { homePageMain } from "../pages/home-page.js"

export function createNewPost(userId, image, text){
    validateId(userId)
    validateUrl(image)
    validateText(text)

    const foundUser = findUserById(userId)

    if (!foundUser) throw new Error(`user not found`)

    let id = 'post-1'

    const _posts = posts()

    const lastPost = _posts[_posts.length - 1]

    if (lastPost)
        id = 'post-' + (parseInt(lastPost.id.slice(5)) + 1)

    const post = {
        id,
        author: userId,
        image,
        text,
        date: (new Date).toLocaleDateString('en-UK')
    }

    _posts.push(post)

    savePosts(_posts)
    showPostFeed()
}