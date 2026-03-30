import Typewriter from './Typewriter';

function Windowsbox () {
    function handleOnclick() {
        alert("안녕하세요! 김승혜입니다.");
    }
    return (
        <div className="bg-[#c0c0c0] border-t-2 border-l-2 border-white border-r-2 border-b-2 border-gray-800 p-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] w-[300px]">
            <div className="bg-blue-900 text-white flex justify-between items-center px-2 py-1 select-none">
                <span className="text-sm font-bold mr-12">User Information</span>
                <div className="flex gap-1">
                    <button className="bg-[#c0c0c0] text-black px-1 border border-white border-r-black border-b-black text-xs">_</button>
                    <button className="bg-[#c0c0c0] text-black px-1 border border-white border-r-black border-b-black text-xs">x</button>
                </div>
            </div>
            <div className="p-7 flex flex-col items-center justify-center text-center gap-6">
                <div className="text-black whitespace-nowrap">
                    <Typewriter text="Hello, Kim Seung Hye!" speed={150} />
                </div>
               
                <button 
                    onClick={handleOnclick} 
                    className="bg-[#c0c0c0] px-6 py-1 border-t-2 border-l-2 border-white border-r-2 border-b-2 border-gray-800 active:border-t-gray-800 active:border-l-gray-800 active:border-r-white active:border-b-white"
                >
                    OK
                </button>
            </div>
        </div>
    )
}

export default Windowsbox;