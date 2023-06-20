import { AiOutlineApple, AiOutlineAndroid, AiOutlineGlobal, AiOutlineShop } from "react-icons/ai"

const Feature = (props)=>{
    return (

            <>
            
                

            {props.index === 1 && 

                <div className="features">

                    <AiOutlineApple />
                    <h1>Aplicativos iOS</h1>
                    <p>Desenvolva apps iOS inovadores e cativantes com nossa expertise em programação, design e integração de recursos.</p>


                </div>
            
            }
            {props.index === 2 && 
                    
                    <div className="features">

                        <AiOutlineAndroid />
                    <h1>Aplicativos Android</h1>
                    <p>Crie apps Android poderosos e intuitivos com nossa especialização em desenvolvimento e design de interfaces.</p>

                        

                    </div>
                    
                    
            
            }
            {props.index === 3 && 
                    
                    <div className="features">

                    <AiOutlineGlobal />
                    <h1>Aplicativos Web</h1>
                    <p>Transforme suas ideias em realidade com aplicativos web modernos e personalizados para impulsionar seu negócio.</p>


                    </div>
                    
                    
            
            }
            {props.index === 4 && 
                    
                    <div className="features">

                    <AiOutlineShop />
                    <h1>Software Empresarial</h1>
                    <p>Potencialize sua empresa com software empresarial personalizado, eficiente e escalável.</p>

                        

                    </div>
                    
                    
            
            }

                
                
                    

               

            
            </>

    )
}
export default Feature