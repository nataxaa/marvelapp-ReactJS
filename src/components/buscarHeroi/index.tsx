import { useEffect, useState } from "react";
import { api } from "../../service/api";
import { Container } from "./style";
import Aos from 'aos'
import 'aos/dist/aos.css'



export function BuscarHeroi(){

    const [obg, setObg] = useState<any>()
    const [input, setInput] = useState<string>()

     useEffect(()=>{
        Aos.init({duration:2000})
    }, [])


    async function handleSearch(){
        if(input == ''){
            alert("Digite o CEP");
            return;
        }
        try{
            
            const response = await api.get(`characters?name=${input}&ts=1670102102&apikey=c0a2cec8ca8d9ec388d4becb1a105323&hash=0204fd9c9f2919fa3675fda353364f6b`);
            setObg(response.data.data.results[0]);
            setInput("");
            console.log(obg)
            
        }catch{
            alert("ops Erro");
            setInput("");
        }
    }


    return(
        <Container id="2">
            <h1 data-aos='fade-up' >Buscar Seu Heroi</h1>
            <div data-aos='fade-up' className="heroi">
            <input 
            type="text" 
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            placeholder="Digite seu Heroi..."
            />
            <button onClick={handleSearch}> Buscar </button>
            
           
            {obg && (
                <div data-aos='flip-left'>
                    <h3>{obg.name}</h3>
                    <div className="description">
                        <img src= {`${obg.thumbnail.path}.jpg`}  alt="" />
                        <p>{obg.description}</p>
                    </div>
                </div>
            )}
           
            </div>
        </Container>
    )
}