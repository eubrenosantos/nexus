import { AiOutlineApple, AiOutlineAndroid, AiOutlineGlobal, AiOutlineShop } from "react-icons/ai"

const Feature = (props)=>{
    return (

            <>
            
                

            {props.index === 1 && 

                <div className="features">

                    <AiOutlineApple />
                    <h1>Aplicativos iOS</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>


                </div>
            
            }
            {props.index === 2 && 
                    
                    <div className="features">

                        <AiOutlineAndroid />
                    <h1>Aplicativos Android</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>

                        

                    </div>
                    
                    
            
            }
            {props.index === 3 && 
                    
                    <div className="features">

                    <AiOutlineGlobal />
                    <h1>Aplicativos Web</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>


                    </div>
                    
                    
            
            }
            {props.index === 4 && 
                    
                    <div className="features">

                    <AiOutlineShop />
                    <h1>Software Empresarial</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>

                        

                    </div>
                    
                    
            
            }

                
                
                    

               

            
            </>

    )
}
export default Feature