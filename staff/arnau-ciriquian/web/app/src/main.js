import { loginPage } from './pages/login-page.js'
import { homePage, homePageMain, renderUser } from './pages/home-page.js'
import showPostFeed from './logic/show-post-feed'
import { context, showHideContainer } from './ui.js'
if (context.userID === undefined) {
        showHideContainer(loginPage)
} else {
        if (renderUser()) {
                if (showPostFeed()){
                        showHideContainer(homePage, homePageMain)
                }
        } else {
                showHideContainer(loginPage)
        }
}

/*  TODO Web/App - objectiu de la app: xarxa social:
        - ig de stickers?
        - estil twitter?
        - likes, post, comments?:   
        - rollo ig?
                - canviar alerts per missatges en pantalla?o un toast?
                - tancar ulls de les contrasenyes amb el canvi de pagina. Un if? si type text fer un toggle de fa-eye-slash i canvi de tipus
                - passar for basics a for of?
                - mirar cause pels errors??
                - passar la funcio showPostFeed cada vegada que alguna pagina porti a home main
                - refactor de la home-page - dividir en pagines per a cada funcionalitat? avatar, name, password, email i posts
                - cancel post button 20230410 2045
                - poder editar el text d'un post (boto directament al mateix feed en funcio del loged user)
                - sessionStorage, arreglar el userID i autologin en fer refresh
                - localStorage
                - avatar juntament amb el nom a cada post
                - like / dislike a cada post

                
                
    TODO Arrays:
                - metodes amb callback:
                - seguir amb splice, rersoldre afegir X i  als months

    PREGUNTES:
            - 
*/              