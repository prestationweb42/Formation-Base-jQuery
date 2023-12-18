<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- <script src="../jquery/jquery-371.js" defer></script> -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js" defer></script>
    <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.js" defer></script> -->
    <script src="ajax.js" defer></script>
    <!-- <link rel="stylesheet" href="../style.css" /> -->
    <link rel="stylesheet" href="style.css" />
    <!-- <link rel="stylesheet" href="../responsive.css" /> -->
    <title>Requete AJAX</title>
</head>

<body>
    <main class="main__container">
        <section class="section__container">
            <header class="header__container">
                <h1>Formation jQuery</h1>
                <h2>Requête AJAX</h2>
            </header>
            <ul class="list__container">
                <li class="list__item">
                    <a href="../index.html" class="list__link">Retour</a>
                </li>
                <li class="list__item">
                    <a href="get_user.php" class="list__link">Voir BDD</a>
                </li>
                <li class="list__item">
                    <a href="ajax.js" class="list__link">Voir le code jQuery</a>
                </li>
            </ul>
            <div class="container">
                <div class="content">
                    <h2>Requête AJAX</h2>
                    <label for="email">Email</label>
                    <input type="text" id="email">
                    <label for="email">Modele PC</label>
                    <input type="text" id="computer">
                    <button type="submit" id="validate" class="btn">Envoyez</button>
                </div>
            </div>
        </section>
    </main>
</body>

</html>