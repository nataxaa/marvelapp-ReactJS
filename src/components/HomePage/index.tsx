import { Container } from "./style";
import img from '../../imagens/1.png'
import img2 from '../../imagens/2.png'
import img3 from '../../imagens/3.png'
import {RxDoubleArrowDown} from 'react-icons/rx'


export function HomePage(){
    return(
        <Container>
            <div className="text">
                <h1>Marvel <span>API</span></h1>
                <p>
                    Projeto realizado em ReactJS usando a API da marvel 
                    que fornece acesso a informações dos heróis e imagens.
                    Nesse projeto voce poderá buscar seu herói predileto e 
                    saber mais sobre ele.
                 </p>
                 <div className="buttons"> 
                        <a href="#2">
                             <button>
                                Buscar seu Heroi.
                            </button>
                        </a>
                        <a href="#1">
                            <button>
                                Ver Historia.
                            </button>
                        </a>
                 </div>
            </div>
            <div className="color-design">
                <div className="imagens">
                    <img className="imagem2" src={img2} alt="" /> 
                    <img className="imagem3" src={img3} alt="" />
                    <img className="imagem1" src={img} alt="" />   
                </div>
            </div> 
            <RxDoubleArrowDown className="link"/>
        </Container>
    )
}