<template>
<div class="container-bulletin">
<div data-aos="zoom-in-left" data-aos-duration="1250">
    <div class="wrapper">
        <header>Bulletin</header>
         <table class="table table-hover table-borderless ">
            <tbody>
                <tr>                  
                    <td><a href="path_to_file" class="bulletin" download="bulletin1">Bulletin_Noel_Jonathan_David_2020.pdf</a></td>
                </tr>
                 <tr>                  
                    <td><a href="path_to_file" class="bulletin" download="bulletin1">Bulletin_Juin_Jonathan_David_2021.pdf</a></td>
                </tr>
               <tr>                  
                    <td><a href="path_to_file" class="bulletin" download="bulletin1">Bulletin_Noel_Jonathan_David_2021.pdf</a></td>
                </tr>
                 <tr>                  
                    <td><a href="path_to_file" class="bulletin" download="bulletin1">Bulletin_Juin_Jonathan_David_2022.pdf</a></td>
                </tr>
                <tr>                  
                    <td><a href="path_to_file" class="bulletin" download="bulletin1">Bulletin_Noel_Jonathan_David_2022.pdf</a></td>
                </tr>
                 <tr>                  
                    <td><a href="path_to_file" class="bulletin" download="bulletin1">Bulletin_Juin_Jonathan_David_2023.pdf</a></td>
                </tr>
              
            </tbody>
        </table>
    </div>
    </div>
</div>
</template>
<style>
@font-face {
  font-family: 'magical_holidayregular';
  src:  url('../../public/fonts/MagicalHollyday/magical_holiday-webfont.woff2') format('woff2'),
        url('../../public/fonts/MagicalHollyday/magical_holiday-webfont.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins'
}

.container-bulletin {
    margin-top: 150px;
    padding-bottom: 10%;
}

.wrapper {
    width: 60%;
    margin-left: auto;
    margin-right: auto;
    background: #fff;
    border-radius: 20px;
    border: 3px solid #6dabe4;
    box-shadow: 10px 10px 10px rgba(0,0,0,0.05);
}

.wrapper header {
    font-size: 36px;
    text-align: center;
    font-weight: 300;
    padding: 20px 30px;
    border-bottom: 3px solid #6dabe4;
}

td{
    text-align: center; 
    vertical-align: middle;
    color: 6dabe4;
}

@media (max-width: 600px) {
    .wrapper header {
        text-align: center;
    }
    
    .wrapper {
        width: 90%;
    }
}
</style>