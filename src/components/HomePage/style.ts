import styled from "styled-components";
import img from '../../imagens/background-first-page.webp'

export const Container = styled.div`

background-image: url(${img}) ;
background-repeat:no-repeat ;
background-size:100%  100%;


height:100vh ;

div.color-design{
    background-color: var(--color-red) ;
    width:30rem ;
    height:100vh ;
   position:relative ;
    border-radius: 1000px 200px 1000px 200px  ;
    z-index:0 ;
margin-left:5rem ;
border: 1px solid #FFF ;
box-shadow: 0.5px 0.5px 6px 1px #FFF ;
    div.imagens{
        display:flex ;
        width:15rem ;
        height:35rem ;
        margin-left:4rem ;

        img.imagem1{
            margin-top:2rem ;
            margin-left:-7rem ;
            z-index:0 ;
        }
        img.imagem2{
            margin-top:2rem ;
            z-index:0 ;
            margin-right: -8rem ;
        }
        img.imagem3{
            margin-top:2rem ;
            z-index:1 ;
        }
    }

}

div.text{
    position:absolute ;
    z-index:1 ;
    width:30rem ;
    right: 7rem ;
    top:10rem ;
    color:#FFF ;
    
    span{
        color:var(--color-red) ;
        -webkit-text-stroke: 0.1px #FFF;
    }
    h1{
        font-size:4rem ;
        -webkit-text-stroke: 0.1px var(--color-red);
    }

    div.buttons{
        display:flex ;
        margin-top:20px ;
        gap:20px;
    }
    button{
        padding:10px 20px ;
        background-color:var(--color-red) ;
        border-radius:4px ;
        border:1px solid #FFF ;
        font-size:15px ;
        font-weight:bold ;
        cursor: pointer;
        :hover{
            opacity:0.9 ;
        }
        a{
            text-decoration:none ;
            color:#000 ;
            font-weight:bold ;
        }
    }
}


.link{
    position: relative;
    color: #FFF ;
    top:-8rem ;
    left:40rem ;
    font-size:3rem ;
}

`