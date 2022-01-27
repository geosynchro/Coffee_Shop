
import ItemCard from "./ItemCard"

function ProductContainer({addCartItem ,items, setItems, search, setSearch, viewItemPage, setCategory, user}){

 

    const productsDisplay = items.map(item => <ItemCard key={item.id} id={item.id} name={item.name} price={item.price} category={item.category} image={item.image_url} description={item.description} user={user} addCartItem={addCartItem} viewItemPage={viewItemPage}/>)

    return(
        <div className="">

        
        <div className="bg-coffee7 bg-auto h-screen overflow-auto">
        
        {/* <div className="h-screen"> */}
        <div className=" mx-auto py-8 px-4  lg:max-w-7xl lg:px-8 ">
            <div className=" flex  rounded-md px-2 mb-3 justify-between ">
                <div>
                <h1 className="text-3xl font-lobster"> Current Products</h1>
                </div>
                    <div className="flex">
                    <select className="appearance-none ml-2 block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-amber-500 focus:border-amber-500 focus:z-10 sm:text-sm" onChange={(e)=>setCategory(e.target.value)}>
                        <option value="all">Select a Category...</option>
                        <option value="all">All</option>
                        <option value="Pourover">Pourover</option>
                        <option value="Beans">Beans</option>
                        <option value="Utensils">Utensils</option>
                        <option value="Grinders">Grinders</option>
                        <option value="Mugs">Mugs</option>
                    </select>
                    <input type="text" placeholder="Search..." className="appearance-none ml-2 block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-amber-500 focus:border-amber-500 focus:z-10 sm:text-sm" value={search} onChange={(e)=>setSearch(e.target.value)} ></input>
                    </div>
            </div>
            <h2 className="sr-only">Products</h2>
            

            <div className=" rounded-md  grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {productsDisplay}
            </div>
        </div>
        </div>
        </div>
        
  )
}

export default ProductContainer