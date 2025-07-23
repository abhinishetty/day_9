function FirstList(){
    const city=["mangalore","Mysore","Bangalore","Mumbai","Delhi"]
    return (
        <div>
            <h2>City List: </h2>
            {
                city.map((c_name,c_index)=>   //not good practice to give index number for key 
                <p key={c_index}>{c_name}</p>)
            }
        </div>
    )
}

export default FirstList