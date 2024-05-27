import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ComputerMarket from "@/components/computer_market";

export default function Home() {

  const lg = {
    name : "lg gram",
    memory: "16 gb",
    storage: "500 gb",
    screensize: 16
  };

  const macbook = {
    name : "macbook air",
    memory: "32 gb",
    storage: "512 gb",
    screensize: 13
  };

  const hp = {
    name : "hp pavillion",
    memory: "8 gb",
    storage: "256 gb",
    screensize: 16
  };

  const computerPart = [lg,macbook, hp];

  return (
    <main className="min-h-screen bg-teal-100 w-full flex flex-col justify-center items-center">
      <Header/> 
      <div className="bg-blue-200 w-4/5 flex flex-col justify-center items-center py-2 min-h-screen text-black">
        <h2>Welcome to the ComputerMarketplace</h2>
        <ComputerMarket computer={computerPart}/>
      </div>
    <Footer/>
    </main>
  );
}
