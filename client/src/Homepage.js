import { Link } from 'react-router-dom'

function Homepage({items, viewItemPage}){

    const reccomendedProducts = items.slice(0,5)
    function handleDisplayItem(id){
        viewItemPage(id)
    }
    return(
        <div className="bg-coffee7 bg-scroll h-screen overflow-auto" >
            <div className="flex">
                <div className=" container bg-amber-700/75 h-1/2 w/1/2 mt-20 mb-20 mx-8 rounded-md px-4 py-4">
                    <h1 className="justify-center flex text-3xl text-white font-lobster ">About Nick's</h1>
                    <p className="text-lg mt-4 text-white">
                        lorem ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        
                    </p>
                </div>  
                <div className=" container bg-amber-700/75 mt-20 mb-20 mx-8 rounded-md px-2 py-2">
                    <img className="rounded-md w-full h-full" alt="Espresso machine" src="https://images.pexels.com/photos/2775827/pexels-photo-2775827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
                </div>  
            </div>   
            <div className="">
                <div className="flex justify-center">
                    <h1 className="w-1/4 justify-center rounded-md flex text-white font-lobster text-3xl bg-amber-700/75 ">Recommended Products</h1>
                </div>
                <div className="flex justify-evenly mt-4">
        
                {reccomendedProducts.map( item => {
                    return (
                        <div className=" bg-amber-700/75 rounded-md mb-4 px-4 py-2 cursor-pointer" key={item.id} onClick={() => handleDisplayItem(item.id)}>
                            <Link to="/viewitem">    
                                <img className="h-32 w-42 rounded-md mx-auto my-2"src={item.image_url} alt={item.name}/>
                                <h1 className="justify-center flex text-white text-xl">{item.name}</h1>
                            </Link>
                        </div>
                        )})}
                </div>
            </div>
            <footer className="bg-amber-500 mt-10 text-center lg:text-left">
                <div className="text-gray-700 text-center p-4">
                    © 2022 Copyright:
                    <a className="text-white ml-2 hover:text-amber-700" href="https://nicks-coffee-shop.herokuapp.com/">Nick's Coffee Supply</a>
                    <span className='ml-10'> Developed by Nicholas Fagner</span>
                    <a className="text-white ml-2 hover:text-amber-700" href="https://www.linkedin.com/in/nicholas-fagner/">Linkedin</a>
                    <a className="text-white ml-2 hover:text-amber-700" href="https://github.com/geosynchro">Github</a>
                </div>

            </footer>
        </div>
    )
}

export default Homepage