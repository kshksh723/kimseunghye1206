import React from 'react';

interface Props {
  fileUrl: string;   // 파일 경로 (예: '/files/portfolio.pdf')
  fileName: string;  // 다운로드될 때의 이름 (예: '홍길동_이력서.pdf')
  title: string;     // 버튼에 표시될 텍스트
}

const PdfDownload: React.FC<Props> = ({ fileUrl, fileName, title }) => {
  const handleDownload = async (e: React.MouseEvent) => {
    e.preventDefault();

    try {
      // 1. 파일을 가져옴
      const response = await fetch(fileUrl);
      if (!response.ok) throw new Error("파일을 찾을 수 없습니다.");

      // 2. 응답 데이터를 Blob으로 변환
      const blob = await response.blob();
      
      // 3. 브라우저 메모리에 임시 URL 생성
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName; // 다운로드 파일명 지정
      
      // 4. 가상 클릭 후 메모리 정리
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error(err);
      alert("다운로드에 실패했습니다. 경로를 확인해주세요.");
    }
  };

  return (
    <button 
      onClick={handleDownload}
      className="px-2 py-1 underline text-xs text-gray rounded hover:text-blue-700 transition"
    >
      {title}
    </button>
  );
};

export default PdfDownload;