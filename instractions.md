
        Ecrire ici le code permettant
            1 - de récupérer tous les Posts, Users et Comments
            2 - de convertir les trois réponses en tableaux :
                * users
                * posts
                * comments
            3 - de créer un nouveau tableau nommé allPosts sous la forme :
                [
                    {
                        id : 1,
                        userName : 'toto',
                        title : 'un article',
                        body : 'le corps de l\'article',
                        published : true,
                        comments : [{...}, ...]
                    },
                    ...
                ]
            4 - Créer les fonctions utilitaires suivantes :
                    4-1 sortByUserName() qui permet de trier par utilsateur
                    4-2 sortByPostTitle() qui permet de trier par le titre du Post
                    4-3 getPagePosts(offset, size = 10) qui retourne un nouveau tableau extrait du tableau allPosts à partir de offset et contenant size éléments
            5 - Ecrire la fonction showPosts() qui permettra d'afficher les 10 premiers posts
            6 - Ecrire la fonction showComments(postId) qui permet d'afficher les commentaires
            de le Post ayant l'id postId
            7 - (facultatif) Ajouter une pagination
            8 - ...
            9 - ....
            10 - .....
