import './App.css'

function App() {

  return (
    <>
    <div className="bg-[#008080] min-h-screen p-10 font-mono">
  {/* 윈도우 창 */}
  <div className="w-80 bg-[#c0c0c0] border-t-2 border-l-2 border-white border-r-2 border-b-2 border-gray-800 p-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
    
    {/* 제목 표시줄 */}
    <div className="bg-blue-900 text-white flex justify-between items-center px-2 py-1 select-none">
      <span className="text-sm font-bold">User Information</span>
      <div className="flex gap-1">
        <button className="bg-[#c0c0c0] text-black px-1 border border-white border-r-black border-b-black text-xs">_</button>
        <button className="bg-[#c0c0c0] text-black px-1 border border-white border-r-black border-b-black text-xs">X</button>
      </div>
    </div>

    {/* 내용 영역 */}
    <div className="p-4">
      <p className="text-black mb-4">Hello World!</p>
      
      {/* 윈도우 버튼 스타일 */}
      <button className="bg-[#c0c0c0] px-4 py-1 border-t-2 border-l-2 border-white border-r-2 border-b-2 border-gray-800 active:border-t-gray-800 active:border-l-gray-800 active:border-r-white active:border-b-white">
        OK
      </button>
    </div>
  </div>
  <div className="w-full max-w-md bg-[#c0c0c0] shadow-[2px_2px_0px_rgba(0,0,0,1),inset_2px_2px_0px_rgba(255,255,255,1)] p-1 border-r-2 border-b-2 border-gray-800">
  
  {/* 상단 파란색 바 (제목 표시줄) */}
  <div className="bg-[#000080] text-white flex justify-between items-center px-2 py-1 mb-1">
    <div className="flex items-center gap-2">
      <span className="text-xs">💻</span>
      <span className="text-sm font-bold tracking-tight">Developer's Portfolio</span>
    </div>
    <div className="flex gap-1">
      {/* 윈도우 버튼들 */}
      <div className="w-4 h-4 bg-[#c0c0c0] border-t-white border-l-white border-r-gray-800 border-b-gray-800 border flex items-center justify-center text-black text-[10px] shadow-sm">_</div>
      <div className="w-4 h-4 bg-[#c0c0c0] border-t-white border-l-white border-r-gray-800 border-b-gray-800 border flex items-center justify-center text-black text-[10px] shadow-sm">X</div>
    </div>
  </div>

  {/* 내부 흰색 영역 (실제 내용) */}
  <div className="bg-white border-t-2 border-l-2 border-gray-800 border-r-white border-b-white p-7">
    <h2 className="text-black text-xl font-bold mb-4">Welcome to My OS</h2>
    <p className="text-gray-700 text-sm mb-6 leading-relaxed">
      현재 시스템이 정상적으로 작동 중입니다. <br />
      기술 스택을 확인하려면 '확인' 버튼을 누르세요.
    </p>

    {/* 버튼 정렬 */}
    <div className="flex justify-end gap-4">
      <button className="px-6 py-1 bg-[#c0c0c0] border-t-white border-l-white border-r-black border-b-black border-2 active:border-t-black active:border-l-black active:border-r-white active:border-b-white text-sm shadow-md">
        확인
      </button>
      <button className="px-6 py-1 bg-[#c0c0c0] border-t-white border-l-white border-r-black border-b-black border-2 text-sm shadow-md">
        취소
      </button>
    </div>
  </div>
</div>

</div>
    </>
  )
}

export default App
