import SimpleImageSlider from "react-simple-image-slider";

function Homepage(){

    const images = [
        { url: "./assets/coffee4sm.jpeg" },
        { url: "./assets/coffeebg3.jpeg" }
      ]
    

    return(
        <div className="bg-coffee2 bg-fixed h-full" >
            <div className="flex">
                <div className=" container bg-amber-700/75 border-1 border-amber-500 h-1/2 w/1/2 mt-24 mb-20 mx-8 rounded-md px-4 py-4">
                    <h1 className="justify-center flex text-5xl text-white font-lobster ">About Nick's</h1>
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
                <div className=" container bg-amber-700/75 mt-24 mb-20 mx-8 rounded-md px-4 py-4">
                    <img className=" rounded-md" src="https://images.pexels.com/photos/2775827/pexels-photo-2775827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
                    {/* <h1>about us</h1>
                    <p className="text-lg mt-4 text-white">
                        lorem ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p> */}
                </div>  
            </div>   
        </div>
    )
}

export default Homepage