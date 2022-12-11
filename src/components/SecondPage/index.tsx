import { Container } from "./style";
import img1 from '../../imagens/second-page-1.jpg'
import img2 from '../../imagens/stan-lee.jpg'
import img3 from '../../imagens/marvel.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";





export function SecondPage(){

    useEffect(()=>{
        Aos.init({duration:1700})
    }, [])

    return(
        <Container id='1'>
            <h1 data-aos='fade-down'>Historia</h1>
            <div data-aos='fade-up' className="text-image">
                <img src={img1} alt="" />
                <p>
                Fundada no começo da década de 1930 por Martin Goodman,
                a Marvel Comics foi originalmente chamada de Timely Comics.
                Seu fundador era editor de revistas que faziam sucesso com
                histórias de faroeste. Visionário, Martin Goodman expandiu
                seu trabalho no sentido de um mercado muito promissor.
                </p>
            </div>
            <div data-aos='fade-up' className="text-image">
                <p>
                Entre as suas criações, que marcaram gerações, estão: o Homem-Aranha,
                o Quarteto Fantástico, os X-Men, o Incrível Hulk, o Homem de Ferro e o
                Capitão América. Mais conhecido como Stan Lee, o quadrinista faleceu no
                dia 12 de novembro de 2018, aos 95 anos, em Los Angeles, Califórnia.
                </p>
                <img className="imagem2" src={img2} alt="" />
            </div>
            <div data-aos='fade-up' className="text-image">
                <img src={img3} alt="" />
                <p>
                em 2009, a Marvel Entertainment foi comprada pela Walt Disney Company
                por quatro bilhões de dólares. O catálogo da Marvel possui cerca de cinco
                mil personagens, sendo que entre os mais famosos estão, Hulk, Homem-Aranha,
                Capitão América, O Justiceiro, Demolidor, Thor, Homem de Ferro, Blade,
                Motoqueiro Fantasma, o Quarteto Fantástico e os X-Men.
                </p>
            </div>
            
        </Container>
    )
}