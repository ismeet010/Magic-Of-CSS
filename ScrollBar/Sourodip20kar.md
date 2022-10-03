# Scroll Bar Animation Using HTML,CSS & JS

### HTML & JS
#### Code
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="ScrollBar1.css">
    <title>ScrollBar</title>
</head>
<body>
    <div id="scrollbar"></div>
    <section>
        <h2>Scrollbar</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, sed non. Dignissimos, enim facilis tempora, dolor placeat quos explicabo, at totam expedita nihil consequuntur ipsum dolorum distinctio accusamus. Vero, doloremque!
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quas necessitatibus laborum quam quisquam nulla illo, voluptas maiores quos temporibus quae dolorum sint architecto, itaque fugiat delectus natus cupiditate nihil.
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, magni! Deserunt expedita sapiente maxime nam dicta neque, eos architecto! Nesciunt quia ipsum nemo quibusdam. Est et explicabo porro atque expedita.
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem ad quasi pariatur inventore mollitia quis, nihil rerum exercitationem iste cupiditate. Maiores aut amet sunt natus rerum mollitia, sapiente officiis ut.
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates cumque deleniti nesciunt nisi animi, eius tenetur reprehenderit expedita fuga officia adipisci velit debitis voluptate error sed vitae consectetur distinctio inventore!</p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, sed non. Dignissimos, enim facilis tempora, dolor placeat quos explicabo, at totam expedita nihil consequuntur ipsum dolorum distinctio accusamus. Vero, doloremque!
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quas necessitatibus laborum quam quisquam nulla illo, voluptas maiores quos temporibus quae dolorum sint architecto, itaque fugiat delectus natus cupiditate nihil.
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, magni! Deserunt expedita sapiente maxime nam dicta neque, eos architecto! Nesciunt quia ipsum nemo quibusdam. Est et explicabo porro atque expedita.
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem ad quasi pariatur inventore mollitia quis, nihil rerum exercitationem iste cupiditate. Maiores aut amet sunt natus rerum mollitia, sapiente officiis ut.
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates cumque deleniti nesciunt nisi animi, eius tenetur reprehenderit expedita fuga officia adipisci velit debitis voluptate error sed vitae consectetur distinctio inventore!</p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, sed non. Dignissimos, enim facilis tempora, dolor placeat quos explicabo, at totam expedita nihil consequuntur ipsum dolorum distinctio accusamus. Vero, doloremque!
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quas necessitatibus laborum quam quisquam nulla illo, voluptas maiores quos temporibus quae dolorum sint architecto, itaque fugiat delectus natus cupiditate nihil.
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, magni! Deserunt expedita sapiente maxime nam dicta neque, eos architecto! Nesciunt quia ipsum nemo quibusdam. Est et explicabo porro atque expedita.
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem ad quasi pariatur inventore mollitia quis, nihil rerum exercitationem iste cupiditate. Maiores aut amet sunt natus rerum mollitia, sapiente officiis ut.
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates cumque deleniti nesciunt nisi animi, eius tenetur reprehenderit expedita fuga officia adipisci velit debitis voluptate error sed vitae consectetur distinctio inventore!</p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, sed non. Dignissimos, enim facilis tempora, dolor placeat quos explicabo, at totam expedita nihil consequuntur ipsum dolorum distinctio accusamus. Vero, doloremque!
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quas necessitatibus laborum quam quisquam nulla illo, voluptas maiores quos temporibus quae dolorum sint architecto, itaque fugiat delectus natus cupiditate nihil.
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, magni! Deserunt expedita sapiente maxime nam dicta neque, eos architecto! Nesciunt quia ipsum nemo quibusdam. Est et explicabo porro atque expedita.
                                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem ad quasi pariatur inventore mollitia quis, nihil rerum exercitationem iste cupiditate. Maiores aut amet sunt natus rerum mollitia, sapiente officiis ut.
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates cumque deleniti nesciunt nisi animi, eius tenetur reprehenderit expedita fuga officia adipisci velit debitis voluptate error sed vitae consectetur distinctio inventore!</p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, sed non. Dignissimos, enim facilis tempora, dolor placeat quos explicabo, at totam expedita nihil consequuntur ipsum dolorum distinctio accusamus. Vero, doloremque!
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quas necessitatibus laborum quam quisquam nulla illo, voluptas maiores quos temporibus quae dolorum sint architecto, itaque fugiat delectus natus cupiditate nihil.
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, magni! Deserunt expedita sapiente maxime nam dicta neque, eos architecto! Nesciunt quia ipsum nemo quibusdam. Est et explicabo porro atque expedita.
                                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem ad quasi pariatur inventore mollitia quis, nihil rerum exercitationem iste cupiditate. Maiores aut amet sunt natus rerum mollitia, sapiente officiis ut.
                                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates cumque deleniti nesciunt nisi animi, eius tenetur reprehenderit expedita fuga officia adipisci velit debitis voluptate error sed vitae consectetur distinctio inventore!</p>
                    </p>
                </p>
            </p>
        </p>
    </section>
    <!--***************************** JS *************************-->
    <script src="https://code.jquery.com/jquery-3.4.1.js"></script>
    <script type="text/javascript">
        $(window).scroll(function(){
            var scroll = $(window).scrollTop(),
            a = $(document).height(),
            b= $(window).height();
            scrollPercent = (scroll / (a-b))*100;
            $('#scrollbar').css('height',scrollPercent + '%')
        }
        )
    </script>
</body>
</html>

```
### CSS
#### Code
```
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
}
section{
    width: 100%;
    min-height: 100vh;
    padding: 100px;
    background: #000;
}
h2{
    color: antiquewhite;
    margin-bottom: 20px;
}
p{
    color: #fff;
    font-size: 0.9em;
}
::-webkit-scrollbar{
    width: 0px;
}
#scrollbar{
    position: fixed;
    top: 0;
    right: 0;
    width: 7px;
    border-radius: 10px;
    background: linear-gradient(to top, #f3f3f3,#e3afaf,#cfa1ed);
}

```

