import Image from "next/image";

const ComputerMarket = ({computer}) => {
    //console.log("Computer: ", computer);

    return (
        <div>
            {computer && computer.map ((comp) => (
            <div className="p-2 border border-gray-600 shadow-md my-2">
                <div>
                    <Image 
                    src="/lenovo.jpg" 
                    alt="computer" 
                    width={200} 
                    height = {200}
                    />
                </div>
                {comp.name}
            </div>
            ))}
        </div>
    );

    
};

export default ComputerMarket;