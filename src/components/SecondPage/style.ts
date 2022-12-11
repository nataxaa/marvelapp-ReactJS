import styled from "styled-components";
import img from '../../imagens/background.jpg'


export const Container = styled.div`

text-align:center ;
background-image: url(${img}) ;


img{
    width:30rem ;
    border-radius:5px ;
    border:1px solid #000 ;
    box-shadow:1px 1px 10px 1px #000 ;
}
img.imagem2{
    height:18rem ;
    
}
h1{
    padding-top:2rem ;
    font-size:50px ;
    -webkit-text-stroke: 0.1px #FFF;
    color:var(--color-red) ;
}

div.text-image{
    display:flex ;
    align-items:center ;
    justify-content:space-evenly ;
    margin-top:2rem ;
    p{
        width:30rem ;
        color:#FFF ;
    }
    padding-bottom:2rem ;
}

`