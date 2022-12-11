import styled from "styled-components";
import img from '../../imagens/background-3.jpg'


export const Container = styled.div`

height:100vh ;
background-image: url(${img}) ;
h1{
    color:var(--color-red);
    -webkit-text-stroke: 0.1px #FFF;
    position:relative ;
    left:15rem ;
    top:2rem ;
    font-size:45px ;
    width:fit-content ;
}
h3{
    color:#FFF ;
    font-size:30px ;
}
p{
    color:#FFF ;
}
img{
    width:12rem ;
    border-radius:1000px ;
}
button{
    background-color:var(--color-red) ;
    padding:10px 20px ;
    color:#FFF ;
    width:10rem ;
    border-radius:5px ;
    border:1px solid #FFF ;
    opacity:1 ;
    transition:0.2s ;
    cursor: pointer;
    :hover{
        opacity: 0.8 ;
    }
}
input{
    width:20rem ;
    padding:10px 20px;
    border-radius:5px ;
}
div.heroi{
    display:flex ;
    flex-direction:column ;
    width:40rem ;
    margin-top: 4rem ;
    align-items:center ;
    margin-left: 6rem ;
    gap:1.5rem;
}
div.description{
    display:flex ;
    align-items:center ;
    margin-top:1rem ;
    gap:15px;
}


`