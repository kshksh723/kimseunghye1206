/* Devleoper's Portfolio 창 */
import profileImg from '../img/profilePhoto.jpg';
import projectLink from "../img/link.png";
import smallObject from "../img/smallObjectProject.png";
import PdfDownload from './PdfDownload';
import pdf from "../img/pdf.png";
function Windowsboxwhite () {

  function handleOnclick1() {
    alert("© 2026 Kim Seung Hye :) \n" + 
    "Last updated : January 2026\n" + 
    "Dev Stack : REACT, TYPESCRIPT, TAILWIND CSS"
    );
  }
  

return (
<div className="w-full max-w-[1000px] h-[90dvh] md:h-[85vh] flex flex-col bg-[#c0c0c0] shadow-[2px_2px_0px_rgba(0,0,0,1),inset_2px_2px_0px_rgba(255,255,255,1)] p-1 border-r-2 border-b-2 border-gray-800">
  <div className="flex-none bg-[#000080] text-white flex justify-between items-center px-2 py-1 mb-1">
    <div className="flex items-center gap-2">   
        <span className="text-xs">💻</span>
        <span className="text-sm font-bold tracking-tight">Developer's Portfolio</span>
    </div>
            <div className="flex gap-1">
                <button className="bg-[#c0c0c0] text-black px-1 border border-white border-r-black border-b-black text-xs">_</button>
                <button className="bg-[#c0c0c0] text-black px-1 border border-white border-r-black border-b-black text-xs">x</button>
            </div>
        </div>
        
  <div className="flex-1 bg-white border-t-2 border-l-2 border-gray-800 border-r-white border-b-white p-10 overflow-y-auto scrollbar-custom p-6 md:p-10 
        overflow-y-auto custom-scrollbar">
          <div className='flex items-center justify-start md:justify-end'>
  <img 
              src={pdf} 
              alt="PDF Icon" 
              className="w-5 h-5 object-contain shrink-0"

            />
          <PdfDownload
            fileUrl='files/portfolio.pdf'
            fileName='김승혜_포트폴리오.pdf'
            title="Portfolio PDF DownLoad"
            />
</div>
        <h2 className="text-black text-3xl font-extrabold">Kim Seung Hye</h2>
                        <p className="text-gray-500/68  font-light">꾸준히 성장하는 개발자</p>
                        
    <div>
    
    <div className="w-48 h-60 overflow-hidden rounded-lg ml-auto">
      <img 
        src={profileImg} className="w-full h-full object-cover select-none" alt="profile" draggable="false" 
        onContextMenu={(e) => e.preventDefault()} />
    </div>

    <div className="mt-4 bg-white border-2 border-gray-500 p-4 h-full text-black font-mono overflow-y-auto">
  <h2 className="text-lg font-bold mb-3">👋 안녕하세요!</h2>
  <p className="leading-relaxed mb-4">
    기획부터 구현까지, 프로젝트의 <span className="bg-yellow-200 px-1">A to Z를 경험하며 성장</span>해온 개발자입니다.
    <br/>배움을 나누며 함께 성장하는 것을 좋아합니다.
  </p>
  <ul className="list-disc ml-5 space-y-2 text-sm">
    <li><strong>React-Native:</strong> 교환일기 앱 기획/개발 (교내 공모전 <strong>우수상</strong> && 지역 공모전 <strong>인기상</strong>)</li>
    <li><strong>Professionalism:</strong> SI 근무 당시 산출물 작성 'A+' 등급 평가</li>
  </ul>
</div>
    <h1 className="text-xl font-bold mb-4 pb-1 mt-6  border-b border-gray-200">Contact.</h1>
   <div className="p-1 flex flex-col md:flex-row text-gray-700 text-sm mb-6 leading-relaxed">
    <span className="font-bold w-20 shrink-0">Email :</span>
    
    <a 
      href="mailto:kimsh33971190@gmail.com" 
      className="md:ml-2 underline decoration-1 underline-offset-4 hover:text-blue-600 transition-colors break-all"
    >
      kimsh33971190@gmail.com
    </a>
</div>
 <div className="mt-8">
  <h3 className="text-xl font-bold mb-4 pb-1 border-b border-gray-200">
    Education.
  </h3>
<div className="space-y-6">
  {/* 대학교 (순천대) */}
  <div className="px-2">
    <div className="flex flex-col md:flex-row md:justify-between md:items-baseline">
      <div className="flex items-baseline gap-2">
        <span className="font-bold text-gray-900 text-base md:text-lg">순천대학교</span>
        <span className="text-[10px] md:text-xs font-normal text-gray-500">(편입)</span>
      </div>
      <span className="text-[11px] md:text-sm text-gray-500 font-mono mt-1 md:mt-0">2021.03. ~ 2023.02.</span>
    </div>
    <p className="text-xs md:text-sm font-medium text-gray-800 leading-relaxed">컴퓨터공학과 졸업</p>
  </div>

  {/* 대학교 (전주비전대) */}
  <div className="px-2">
    <div className="flex flex-col md:flex-row md:justify-between md:items-baseline">
      <span className="font-bold text-gray-900 text-base md:text-lg">전주비전대학교</span>
      <span className="text-[11px] md:text-sm text-gray-500 font-mono mt-1 md:mt-0">2018.03. ~ 2021.02.</span>
    </div>
    <p className="text-xs md:text-sm font-medium text-gray-800 leading-relaxed">컴퓨터정보과 졸업</p>
  </div>

  {/* 교육 센터 */}
  <div className="px-2">
    <div className="flex flex-col md:flex-row md:justify-between md:items-baseline">
      <span className="font-bold text-gray-900 text-base md:text-lg">쌍용 강북 교육센터</span>
      <span className="text-[11px] md:text-sm text-gray-500 font-mono mt-1 md:mt-0">2024.01. ~ 2024.08.</span>
    </div>
    <div className="mt-1">
      <p className="text-xs md:text-sm font-medium text-gray-800 leading-relaxed">
        실무 프로젝트 기반 빅데이터 서비스 솔루션 개발자 양성과정 8기
      </p>
    </div>
  </div>
</div>
</div>
 <section>
  <h3 className="text-lg md:text-xl mt-6 font-bold mb-4 pb-1 border-b border-gray-200">Career.</h3>
  {/* 비브이에스 */}
  <div className="mb-8 px-1 md:px-2">
    <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
              <div className="flex flex-col md:flex-row md:items-baseline md:gap-4">
        <span className="font-bold text-gray-900 text-base md:text-lg">비브이에스</span>
        <span className="text-sm text-gray-600 font-medium">기획실</span>
      </div>
      <span className="text-sm text-gray-500 tabular-nums">2025.07. ~ 2025.09.  (3개월)</span>
    </div>
    
    <ul className="ml-8 list-disc text-gray-800 space-y-1.5">
      <p className="text-sm font-mono text-blue-600 mt-1">
        Stack:  Java, eGovFrame, MyBatis, Oracle, JavaScript, CSS, HTML
      </p>
      <ul className="list-disc text-gray-800 space-y-2 text-sm leading-relaxed">
        <li>PMS 및 유선 요청을 통한 홈페이지 콘텐츠 유지보수 반영 업무 담당</li>
        <li>
          CMS(콘텐츠 관리 시스템)을 활용한 콘텐츠 수정 및 요청사항 반영
        </li>
        <li>
          서비스 고도화를 목표로 <strong>앱 분석</strong>을 통해 UX 개선 방안 도출
        </li>
        <li>
          개선된 서비스 구조 및 사용자 흐름을 반영한 <strong>홈페이지 스토리보드 기획 및 작성</strong>
        </li>
      </ul>
    </ul>
  </div>  

  {/* 디와이정보기술 */}
  <div className="mb-8 px-1 md:px-2">
    <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
      <div className="flex flex-col md:flex-row md:items-baseline md:gap-4">
        <span className="font-bold text-gray-900 text-base md:text-lg">디와이정보기술</span>
        <span className="text-sm text-gray-600 font-medium">SI 공공사업팀</span>
      </div>
          <span className="text-sm text-gray-500 tabular-nums">2024.10. ~ 2025.06. (8개월)</span>
    </div>

    <ul className="ml-8 list-disc text-gray-800 space-y-1.5">
      <p className="text-sm font-mono text-blue-600 mt-1">
        Stack:  Java, Spring Framework, MyBatis, Oracle, WebSquare, C#, Tomcat
      </p>
      <ul className="list-disc text-gray-800 space-y-2 text-sm leading-relaxed">
      <li><strong>종합정비창 스마트팩토리 구축사업 참여</strong></li>
      <li>
        <strong>UI/UX 및 데이터 연동 설계:</strong> WebSquare5를 활용한 UI 구조 설계 및 Submission 객체를 통한 Spring Framework 비즈니스 로직 연동
      </li>
      <li>
        <strong>시스템 분석 및 문서화:</strong> C# 기반 WMS의 소스코드 및 데이터 연동 구조를 분석하여 레거시 시스템의 가시성 확보
      </li>
      <li>
        <strong>로직 분석 및 산출물 작성:</strong> 작업지시·실적 등록 등 핵심 화면과 PL/SQL 프로시저 간의 연계 로직 분석 및 기술 산출물 작성
      </li>
      <li>
        <strong>데이터 정합성 검증:</strong> Oracle DB 프로시저를 통해 입·출고 내역 및 상태값 변경 흐름을 추적
      </li>
    </ul>
    </ul>
  </div>
</section>
  <h1 className="text-xl font-bold mb-4 pb-1 mt-6 border-b border-gray-200">Channel.</h1>

<div className="space-y-4 p-2">
  <div className="flex flex-col md:flex-row text-sm text-gray-700">
    <span className="font-bold w-20 shrink-0">GITHUB :</span>
    <a href="https://github.com/kshksh723" target="_blank" className="break-all underline decoration-1 underline-offset-4 hover:text-blue-600 transition-colors">
      https://github.com/kshksh723
    </a>
  </div>

  <div className="flex flex-col md:flex-row text-sm text-gray-700">
    <span className="font-bold w-20 shrink-0">TISTORY :</span>
    <a href="https://it-xxsh.tistory.com/" target="_blank" className="break-all underline decoration-1 underline-offset-4 hover:text-blue-600 transition-colors">
      https://it-xxsh.tistory.com/
    </a>
  </div>

  <div className="flex flex-col md:flex-row text-sm text-gray-700">
    <span className="font-bold w-20 shrink-0">VELOG :</span>
    <a href="https://velog.io/@kshksh723/posts" target="_blank" className="break-all underline decoration-1 underline-offset-4 hover:text-blue-600 transition-colors">
      https://velog.io/@kshksh723/posts
    </a>
  </div>
</div>
  <div className="mt-8 mb-6 leading-relaxed text-black ">
  <p className="text-xl font-bold  pb-1  border-b border-gray-200"> Tech Stacks. </p>
  <div className="p-4 text-sm">
    <div className="mb-2">
      <span className="text-blue-700">[Front-end]</span>
      <p>React(Vite), TypeScript, WebSquare, JSP</p>
    </div>

    <div className="mb-3">
      <span className="text-green-700">[Back-end]</span>
      <p>Java(Spring Boot), JPA, Tomcat</p>
    </div>

    <div className="mb-3">
      <span className="text-purple-700">[Database]</span>
      <p>MySQL, Oracle, MariaDB</p>
    </div>

    <div>
      <span className="text-red-700">[Tools]</span>
      <p>Figma, Git, SVN</p>
    </div>
  </div>
</div>
  <div className="mt-8 mb-6 leading-relaxed text-black ">
  <p className="text-xl font-bold  pb-1  border-b border-gray-200"> Experiences. </p>
 <p className="text-[11px] text-gray-400 italic mb-2">
    * 아래 프로젝트명을 클릭하면 관련 링크(GitHub, 기사, 문서 등)로 연결됩니다.
  </p>
<div className="mb-8 mt-3 px-1 md:px-2">
  <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
  <div className="flex flex-col md:flex-row md:items-baseline md:gap-4">
    <a 
      href="https://github.com/kshksh723/University-Student-Mentoring-Page.git"
      target='_blank'
      className="group relative flex items-center w-fit cursor-pointer"
    >
      <span className="underline font-bold text-gray-900 text-base md:text-lg group-hover:underline decoration-1 underline-offset-4">
        대학생 멘토링 페이지
      </span>

      <img 
        src={projectLink} 
        alt="link" 
        className="ml-2 w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-200 transform group-hover:translate-x-1"
      />
    </a>

    <span className="text-sm text-gray-600 font-medium">개인 프로젝트</span>
  </div>
  <span className="text-sm text-gray-500 tabular-nums">2026.01. ~ 진행중</span>
</div>
    
    <ul className="ml-8 list-disc text-gray-800 space-y-1.5">
      <p className="text-sm font-mono text-blue-600 mt-1">
        Stack: React, TypeScript, TAILWIND CSS, Spring Boot, JPA, SPRING AI, MariaDB
      </p>
      <ul className="list-disc text-gray-800 space-y-2 text-sm leading-relaxed">
        <li>2022년 멋쟁이사자처럼 아이디어톤에서 기획했던 페이지 리팩토링 <small><a href='https://www.figma.com/proto/oY469eP1SagPnU0ciUV37g/Untitled?node-id=4-3&p=f&t=IIMMv3Jht1nzq09o-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1' target='_blank' className='underline'>(리팩토링 전 기획(SRS))</a></small> </li>
        <li>
          AI 매칭을 활용한 멘토 추천, 멘토가 멘티에게 정보를 공유하고 개인별 학습 역량을 성장 시킬 수 있도록 관리 해주는 페이지
        </li>
      </ul>
    </ul>
  
  <div className="mt-6 flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
  <div className="flex flex-col md:flex-row md:items-baseline md:gap-4">
    <a 
      href="https://github.com/kshksh723/Medinfora.git"
      target='_blank'
      className="group relative flex items-center w-fit cursor-pointer"
    >
      <span className="underline font-bold text-gray-900 text-base md:text-lg group-hover:underline decoration-1 underline-offset-4">
        의료 정보 사이트
      </span>

      <img 
        src={projectLink} 
        alt="link" 
        className="ml-2 w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-200 transform group-hover:translate-x-1"
      />
    </a>

    <span className="text-sm text-gray-600 font-medium">팀 프로젝트(5명)</span>
  </div>
  <span className="text-sm text-gray-500 tabular-nums">2024.06. ~ 2024.08.</span>
</div>
    
    <ul className="ml-8 list-disc text-gray-800 space-y-1.5">
            <p className="text-sm font-mono text-blue-600 mt-1">
              Stack:  HTML, CSS, JAVASCRIPT, JQUERY, JSP, JAVA, SPRING BOOT, 공공데이터 API, ORACLE, EXERD, APACHE TOMCAT, AWS(EC2), GITHUB
            </p>
          <ul className="list-disc ml-5 text-gray-800 space-y-2 text-sm leading-relaxed">
          <li>
          <strong>역할 :</strong> 회원/관리자 기능(공지사항, 회원관리) 구현 및 공공데이터 연동 담당
        </li>
        <li>
          공공데이터 API를 활용한 <strong>의료 시설 현황 및 통계 시각화</strong> 서비스
        </li>
        <li>
          <strong>회원 및 권한 관리 :</strong> 로그인/로그아웃 및 세션 기반의 권한별(일반/의료진/관리자) 접근 제어 구현
        </li>
        <li>
          <strong>기획 배경 :</strong> 
          <ul className="ml-4 list-[circle] space-y-1 mt-1 text-gray-700">
            <li>의료 서비스 접근성과 환자 경험을 혁신적으로 개선 필요</li>
            <li>환자들이 병의원과 약국을 손쉽게 찾고, 진료 예약을 간편하게 하며, 의료서비스 이용 데이터를 분석하여 효율적인 자원 배분과 정책 수립을 지원</li>
          </ul>
        </li>
        <li>
          <strong>게시판 엔진 설계 :</strong> 
          <ul className="ml-4 list-[circle] space-y-1 mt-1 text-gray-700">
            <li>MyBatis와 SQL <code>BETWEEN</code> 연산을 활용한 커스텀 <strong>페이징 처리</strong> 및 검색 로직 구축</li>
            <li>SmartEditor2 연동 및 파일 업로드/원본명 유지 다운로드 시스템 구현</li>
            <li>관리자 예외 처리가 포함된 중복 조회수 방지 로직 적용</li>
          </ul>
        </li>
        <li>
          <strong>관리자 전역 기능 :</strong> 전체 회원 정보 상세 조회, 엑셀 다운로드, SMS API 연동 고객 알림 서비스 구축
        </li>
        <li>
          <strong>통계 시각화 :</strong> 사용자 주소지 API 연동을 통한 지역별 입원실 및 보건 의료 현황 맞춤형 데이터 표시
        </li>
        <li><a href='https://github.com/kshksh723/Medinfora?tab=readme-ov-file#-%EA%B5%AC%ED%98%84-%ED%99%94%EB%A9%B4' target='_blank' className='underline'>구현 화면</a></li>
      </ul>
    </ul>
  </div>  
</div>


<div className="mt-6 flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
  <div className="flex flex-col md:flex-row md:items-baseline md:gap-4">
    <a 
        href="https://github.com/kshksh723/GoGoDak.git"
        target='_blank'
        className="group relative flex items-center w-fit cursor-pointer"
    >
    <span className="underline font-bold text-gray-900 text-base md:text-lg group-hover:underline decoration-1 underline-offset-4">
      닭가슴살 구매 사이트
    </span>
    <img 
      src={projectLink} 
      alt="link" 
      className="ml-2 w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-200 transform group-hover:translate-x-1"
    />
    </a>

    <span className="text-sm text-gray-600 font-medium">팀 프로젝트(5명)</span>
  </div>
  <span className="text-sm text-gray-500 tabular-nums">2024.05. ~ 2024.06.</span>
</div>
    <ul className="ml-8 list-disc text-gray-800 space-y-1.5">
      <p className="text-sm font-mono text-blue-600 mt-1">
        Stack: HTML, CSS, JAVASCRIPT, JQUERY, JSP, JAVA, APACHE TOMCAT, ORACLE, EXERD, GITHUB
      </p>
        <ul className="list-disc ml-5 text-gray-800 space-y-2 text-sm leading-relaxed">
            <li>
              <strong>역할 :</strong> 로그인, 회원정보 수정, 주문 내역 조회, 주문확인(관리자), 회원정보 상세
            </li>
            <li>
              <strong>회원 및 보안 :</strong> 유효성 검사를 적용한 회원가입/수정 및 아이디·비밀번호 찾기 로직 구현
            </li>
            <li>
              <strong>주문 시스템 :</strong> 사용자 주문 내역 조회 및 상태 흐름 관리 기능 구현
            </li>
            <li>
              <strong>관리자 버전의 회원 관리 :</strong> 주문 현황 관리(배송 상태 변경) 및 전체 회원 정보 상세 조회 시스템 구축
            </li>
            <li>
              <strong>DB 설계 및 연동 :</strong> EXERD를 활용한 10여 개 테이블 물리 모델링 및 MyBatis/JDBC 연동
            </li>
            <li>
              <strong>외부 API 활용 :</strong> 카카오 주소 찾기 API 및 SMS(문자) 발송 API 연동을 통한 서비스 편의성 강화
            </li>
            <li>
              <a href='https://github.com/kshksh723/GoGoDak?tab=readme-ov-file#-%EA%B5%AC%ED%98%84-%ED%99%94%EB%A9%B4-key-screens' target='_blank' className='underline'>구현 화면</a>
            </li>
          </ul>
    </ul>
<div className="mt-6 flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
  <div className="flex flex-col md:flex-row md:items-baseline md:gap-4">
    <a 
        href="https://drive.google.com/file/d/1FQepf-M2bTvFk_peU4eLv1ts1Jgj7YrX/view"
        target='_blank'
        className="group relative flex items-center w-fit cursor-pointer"
    >
    <span className="underline font-bold text-gray-900 text-base md:text-lg group-hover:underline decoration-1 underline-offset-4">
      기억조각
    </span>
    <img 
      src={projectLink} 
      alt="link" 
      className="ml-2 w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-200 transform group-hover:translate-x-1"
    />
    </a>

    <span className="text-sm text-gray-600 font-medium">팀 프로젝트(7명)</span><span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded border border-green-100 italic">
      🦁 멋쟁이사자처럼 10기 해커톤 참여작
    </span>
  </div>
  <span className="text-sm text-gray-500 tabular-nums">2022.08. ~ 2022.08.</span>
</div>
    <ul className="ml-8 list-disc text-gray-800 space-y-1.5">
      <p className="text-sm font-mono text-blue-600 mt-1">
        Stack: React, JavaScript, CSS, Django, Python, REST API, MySQL, GitHUB
      </p>
        <ul className="list-disc ml-5 text-gray-800 space-y-2 text-sm leading-relaxed">
          
            <li>
              <strong>역할 :</strong> 사용자 인증 시스템(로그인, 회원가입, ID/PW 찾기) 전반의 프론트엔드 로직 설계 및 구현
            </li>
            <li>
              멋쟁이 사자처럼 10기 Fronte-End 운영진으로 활동할 때 해커톤에 참여하여 '기억조각'이라는 소중한 추억을 조각처럼 저장하고 공유하는 커뮤니티형 웹 서비스를 구현
            </li>
            <li>
              <strong>리팩토링 :</strong> 코드 퀄리티 향상 및 컴포넌트 최적화를 위한 <a href='https://github.com/kshksh723/fragment_of_memory.git' className='underline' target='_blank'>'기억조각 리팩토링'</a>을 진행할 예정
            </li>
          </ul>
    </ul>

<div className="mt-6 flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
  <div className="flex flex-col md:flex-row md:items-baseline md:gap-4">
    <span className="font-bold text-gray-900 text-base md:text-lg">친구들과 함께 쓰는 추억의 교환일기 APP</span>
       <span className="text-sm text-gray-600 font-medium">팀 프로젝트(3명)</span>
    <span className="text-[10px] md:text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded border border-green-200">
      🏆 공모전 2관왕 (우수상 & 인기상)
    </span>
  </div>
  <span className="text-sm text-gray-500 tabular-nums">2023.09. ~ 2023.12.</span>
</div>

<ul className="list-disc ml-13 text-gray-800 space-y-2 text-sm leading-relaxed">
  <p className="text-sm font-mono text-blue-600 mt-1">
        Stack: React-Native, Firebase(FireStore, Auth), GitHub, Figma
      </p>
  <li>
    <strong>성과 :</strong> 
    <ul className="ml-4 list-[circle] space-y-1 mt-1 text-gray-700">
      <li><strong>[기술력]</strong> (교내 공모전) 화려한 창업 아이디어 공모전 <strong>우수상</strong> 수상</li>
      <li><strong>[대중성]</strong> (지역 공모전) 광주전남혁신플랫폼 지역 혁신본부 동아리 성과 보고 전시 발표회 <strong>인기상</strong> 수상</li>
      <li>
        <a href="http://www.ihopenews.com/news/articleView.html?idxno=215994" target='_blank' className="group inline-flex items-center gap-1 text-black-600 font-bold underline decoration-1 underline-offset-4">
          관련 뉴스 기사 확인
          <img src={projectLink} className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" />
        </a>
      </li>
       <li>
<div className="flex flex-col md:flex-row md:justify-between md:items-start mb-1 gap-1 md:gap-4">
         <a 
        href="https://drive.google.com/file/d/1lbTYsUiU9t8Nt7GGc0qoo2AJzX9DIbva/view?usp=sharing"
        target='_blank'
        className="group relative flex items-center w-fit cursor-pointer"
    >
    <span className="underline font-bold text-gray-900 text-sm md:text-base group-hover:underline decoration-1 underline-offset-4">
     🏆 (교내 공모전) 화려한 창업 아이디어 공모전
    </span>
    <img 
      src={projectLink} 
      alt="link" 
      className="ml-2 w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-200 transform group-hover:translate-x-1"
    />
    </a>
        <strong className="text-gray-900"></strong>
        <div className="flex flex-col items-start md:items-end shrink-0">
        <span className="text-xs text-gray-500 tabular-nums ">2021.11. ~ 2021.11.</span>
        </div>
      </div>
    <ul className="ml-4 list-[circle] space-y-1 mt-1 text-gray-700">
      <li><strong>역할 및 구현 :</strong>
        <ul className="ml-4 list-[circle] space-y-1 mt-1 text-gray-700">
          <li><strong>팀 리더(PM):</strong> 아이디어 기획 및 프로젝트 전체 일정/리소스 관리 주도</li>
          <li><strong>공모전 포스터 : </strong> <a href='https://drive.google.com/file/d/1MD2XGg2q5OluT8CKTCFnl3TAHv2vGURW/view?usp=sharing' className='underline' target='_blank'>공모전 포스터</a></li>
          <li><strong>프론트엔드 개발:</strong> React-Native 기반 UI 구현 및 데이터 실시간 동기화 로직 구축</li>
          <li><strong>검색 시스템:</strong> Firebase 연동을 통한 실시간 다이어리 검색 및 필터링 기능 구현</li>
        </ul>
      </li>
    </ul>
   <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-1 gap-1 md:gap-4">
             <a 
        href="https://drive.google.com/file/d/1F_0H1vUhtcqDUHkyipHETiozWT7E58JD/view?usp=sharing"
        target='_blank'
        className="group relative flex items-center w-fit cursor-pointer"
    >
      <span className="underline font-bold text-gray-900 text-sm md:text-base group-hover:underline decoration-1 underline-offset-4">
      🏆 (지역 공모전) 광주전남혁신플랫폼 지역 혁신본부 동아리 성과 보고 전시 발표회
      </span>
    <img 
      src={projectLink} 
      alt="link" 
      className="ml-1 w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-200 transform group-hover:translate-x-1"
    />
    </a>
    <div className="flex flex-col items-start md:items-end shrink-0">
        <span className="text-xs text-gray-500 tabular-nums "> 2021.10. ~ 2022.04.</span>
        </div>
      </div>
        <ul className="ml-4 list-[circle] space-y-1 mt-1 text-gray-700">
          <li><strong>역할 및 구현 :</strong>
            <ul className="ml-4 list-[circle] space-y-1 mt-1 text-gray-700">
              <li><strong>화려한 창업 아이디어 공모전 리팩토링 UI :</strong> <a href='https://drive.google.com/file/d/1Qr_nJMoZoeZpsKcXwK6saLnU_OTl_V5U/view?usp=sharing' className='underline' target='_blank'>FIGMA</a>로 교환 다이어리 앱 디자인 수정하여 구현</li>
              <li><strong>공모전 포스터 : </strong> <a href='https://drive.google.com/file/d/1MD2XGg2q5OluT8CKTCFnl3TAHv2vGURW/view?usp=sharing' className='underline' target='_blank'>공모전 포스터</a></li>
              <li><strong>프론트엔드 개발:</strong> React-Native 기반 UI 구현 및 데이터 실시간 동기화 로직 구축</li>
              <li><strong>검색 시스템:</strong> Firebase 연동을 통한 실시간 다이어리 검색 및 필터링 기능 구현</li>
            </ul>
          </li>
        </ul>
      </li> 
    </ul>
  </li>
</ul>

<div className="mt-6 flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
  <div className="flex flex-col md:flex-row md:items-baseline md:gap-4">
    <a 
        href="https://drive.google.com/file/d/1wr9f0GLMj_O79CN59osjOEY4aV3o9rcx/view?usp=sharing"
        target='_blank'
        className="group relative flex items-center w-fit cursor-pointer"
    >
    <span className="underline font-bold text-gray-900 text-base md:text-lg group-hover:underline decoration-1 underline-offset-4">
      4대 항만공사 창업 아이디어 발굴 해커톤
    </span>
    <img 
      src={projectLink} 
      alt="link" 
      className="ml-2 w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-200 transform group-hover:translate-x-1"
    />
    </a>

    <span className="text-sm text-gray-600 font-medium">팀 프로젝트(4명)</span>
  </div>
  <span className="text-sm text-gray-500 tabular-nums">2021.08. ~ 2021.09.</span>
</div>
    <ul className="ml-8 list-disc text-gray-800 space-y-1.5">
      <p className="text-sm font-mono text-blue-600 mt-1">
        Stack: Arduino, php, mysql
      </p>
        <ul className="list-disc ml-5 text-gray-800 space-y-2 text-sm leading-relaxed">
            <li>
              <strong>역할 :</strong> 발주처와 연락 및 PPT 제작, 자료 조사
            </li>
            <li>
              자율주행 보트에 각종 센서를 부착하여 항만 내 수질측정 및 각종 쓰레기 자율 수집하는 해상 수질 자율 측정 시스템
            </li>
            <li>
              <strong>기술 제안서 :</strong> <a href='https://drive.google.com/file/d/1BUZxA8aDs9adfFtU5gb2Y1YrZF8FF7pB/view?usp=sharing' target='_blank' className='underline'>4대 항만공사</a>
            </li>
            <li>
              항만의 환경 오염 수집 및 G.BOAT라는 창업 아이템을 선보여 비록 수상은 못했지만 본선 심사 8팀 중 5등을 하게 되어 본선 진출함
            </li>
        </ul>
    </ul>
 <div className="mt-8 mb-6 leading-relaxed text-black ">
  <p className="text-xl font-bold  pb-1  border-b border-gray-200"> Activity. </p>
  <p className="text-[11px] text-gray-400 italic mb-2">
    * 아래 활동명을 클릭하면 관련 링크(GitHub, 기사, 문서 등)로 연결됩니다.
  </p>
  <div className="mb-8 mt-3 px-1 md:px-2">
      <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
      <div className="flex flex-col md:flex-row md:items-baseline md:gap-4">
            <span className="font-bold text-gray-900 text-base md:text-lg group-hover:underline decoration-1 underline-offset-4">
              순천시 대학졸업생 행정인턴
            </span>
          <span className="text-sm text-gray-600 font-medium">기적의도서관 사서</span>
      </div>
        <span className="text-sm text-gray-500 tabular-nums">2023.07. ~ 2023.12.</span>
    </div>
      <ul className="ml-8 list-disc text-gray-800 space-y-1.5">
        <ul className="list-disc ml-5 text-gray-800 space-y-2 text-sm leading-relaxed">
          <li><strong>도서관 운영 지원, 프로그램 및 행사 운영 보조, 자원봉사자 관리 및 교육, 도서 관리 및 환경 개선</strong>
            <ul className="ml-4 list-[circle] space-y-1 mt-1 text-gray-700">
              <li><strong>운영 관리 :</strong> 도서관 회원 관리 시스템 보조, 도서 대출 및 반납 업무 수행, 상호 대차 시스템을 통한 순천시 내 공공 도서관의 도서 분류 및 상호 대차 배송 관리</li>
              <li><strong>프로그램 및 행사 운영 보조 :</strong> 어린이집 도서관 견학 프로그램 지원 업무, 도서관 행사 진행 시 담당 교사 보조 역할 수행, 원할한 행사 진행을 위한 지원 업무 담당</li>
              <li><strong>자원봉사자 관리 및 교육:</strong> 도서관 봉사 활동에 대한 상세 안내 제공 및 효율적인 도서 정리 방법 교육 실시</li>
              <li><strong>도서 관리 및 환경 개선:</strong> 도서 청구기호에 따라 도서 정리 및 서가 환경 조성</li>
            </ul>
          </li>
        </ul>
      </ul>
  </div>
</div>
 <div className="mb-8 mt-3 px-1 md:px-2">
      <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
      <div className="flex flex-col md:flex-row md:items-baseline md:gap-4">
    <a 
        href="https://github.com/kshksh723/codelion.git"
        target='_blank'
        className="group relative flex items-center w-fit cursor-pointer"
    >
    <span className="underline font-bold text-gray-900 text-base md:text-lg group-hover:underline decoration-1 underline-offset-4">
      멋쟁이사자처럼 대학 10기
    </span>
    <img 
      src={projectLink} 
      alt="link" 
      className="ml-2 w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-200 transform group-hover:translate-x-1"
    />
    </a>
          <span className="text-sm text-gray-600 font-medium">프론트엔드 운영진</span>
      </div>
        <span className="text-sm text-gray-500 tabular-nums"> 2022.01. ~ 2022.12.</span>
    </div>
      <ul className="ml-8 list-disc text-gray-800 space-y-1.5">
        <ul className="list-disc ml-5 text-gray-800 space-y-2 text-sm leading-relaxed">
            <ul className="ml-4 list-[circle] space-y-1 mt-1 text-gray-700">
              <li>멋쟁이사자처럼을 참여하고 HTML, CSS, JAVASRIPT 그리고 REACT를 제대로 공부할 수 있었던 순간이었습니다.</li>
              <li>활동에는 강의, FIGMA를 사용하여 팀원들과 함께 기획&디자인을 하는 메이커톤, 팀원들과 같이 이틀 간 진행하는 해커톤을 참여했습니다.</li>
              <li><strong>메이커톤 :</strong> <a href='https://www.figma.com/proto/oY469eP1SagPnU0ciUV37g/Untitled?node-id=4-3&p=f&t=IIMMv3Jht1nzq09o-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1' target='_blank' className='underline'>대학생 멘토링 페이지 기획</a></li>
              <li><strong>해커톤 :</strong> <a href='https://drive.google.com/file/d/1FQepf-M2bTvFk_peU4eLv1ts1Jgj7YrX/view' target='_blank' className='underline'>해커톤 PPT</a></li>
            </ul>
        </ul>
      </ul>
  </div>

<div className="mb-10 px-1 md:px-2">
  <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-4 gap-1">
    <div className="flex flex-wrap items-center gap-2">
      <span className="font-bold text-gray-900 text-base md:text-lg break-keep">
        학습 동아리 '컴공진단' & '판교가자'
      </span>
       <span className="text-sm text-gray-600 font-medium">팀 프로젝트</span>
    </div>
    <span className="text-xs md:text-sm text-gray-500 tabular-nums whitespace-nowrap self-start md:self-auto">
      2021.06. ~ 2022.02.
    </span>
  </div>

  <ul className="ml-8 list-disc text-gray-800 space-y-2 text-sm leading-relaxed">
    <li>
      <strong>교내 서점 홈페이지 '사고파' 제작 (팀명 : 판교가자)</strong>
       <p className="text-sm font-mono text-blue-600 mt-1">
        Stack:  React, Firebase, Spring Framework
      </p>
      <ul className="ml-5 list-[circle] space-y-1.5 mt-1 text-gray-700">
        <li><strong>역할 :</strong> 프론트엔드 개발</li>
        <li><strong>주요 구현 :</strong> 전문 서적 및 공식 문서를 참고하여 환경 설정부터 UI 컴포넌트 설계, 기능 구현</li>
        <li><strong>협업 방식 :</strong> 엑셀을 활용한 구현 기능 명세화 및 실험실 소속 팀원 간의 일정 공유로 협업 효율 증대</li>
        <li>
          <a href="https://github.com/lse0522/sagopa_" target="_blank" className="text-black-600 font-bold underline decoration-1 underline-offset-4 hover:text-black-800">
            GitHub 저장소 바로가기
          </a>
        </li>
      </ul>
    </li>
    <li>
      <strong>학습 활동 (팀명 : 컴공진단)</strong> 
      <ul className="ml-5 list-[circle] space-y-1 mt-1 text-gray-700">
        <li>비대면(Zoom) 화상 스터디를 통한 정보처리기사 등 전공 자격증 취득 및 알고리즘 문제 풀이</li>
      </ul>
    </li>
  </ul>
</div>
<div className="mb-10 px-1 md:px-2">
  <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-4 gap-1">
    <div className="flex flex-wrap items-center gap-2">
      <span className="font-bold text-gray-900 text-base md:text-lg break-keep">
        취업 동아리 'Hello World'
      </span>
       <span className="text-sm text-gray-600 font-medium">팀 프로젝트</span>
    </div>
    <span className="text-xs md:text-sm text-gray-500 tabular-nums whitespace-nowrap self-start md:self-auto">
       2021.05. ~ 2022.01.
    </span>
  </div>
<ul className="ml-8 list-disc text-gray-800 space-y-2 text-sm leading-relaxed">
    <li>
      <strong>한경 앱 아이디어 챌린지 참여 :</strong> 
      <ul className="ml-5 list-[circle] space-y-1.5 mt-1 text-gray-700">
        <li>Kakao Oven을 활용한 사용자 인터페이스 설계 및 인터렉티브 프로토타이핑 수행</li>
        <li><a href='https://drive.google.com/file/d/17qc36OBbswVrRsRAok_p54TCw11DKseN/view?usp=sharing' target='_blank' className='underline'>소상공인 재고 서비스(식자재 거래 애플리케이션) 제안서</a></li>
      </ul>
    </li>
    <li>
      <strong>기술 공모전 참여 : </strong> 
      <ul className="ml-5 list-[circle] space-y-1.5 mt-1 text-gray-700">
        <li>Python 기반 소형 객체 인지 AI 공모전 참여 및 데이터 그리드 레이블링 시각화</li>
        <li>이미지 내 노이즈(낙서) 제거를 통한 텍스트 인지 모델 연구로 데이터 처리 프로세스 이해</li>
        <li>여러 DNN 모델을 파이썬을 이용하여 구현해 본 경험과 CNN 모델 중 숫자를 인식하는 모델을 만들어 구현</li>
      <img 
        src={smallObject} className="object-cover select-none" alt="소형객체" draggable="false" 
        onContextMenu={(e) => e.preventDefault()} />
      </ul>
    </li>
  </ul>
</div>

        <div className="flex justify-end gap-4">
          <button onClick={handleOnclick1} className="px-6 py-1 bg-[#c0c0c0] border-t-white border-l-white border-r-black border-b-black border-2 active:border-t-black active:border-l-black active:border-r-white active:border-b-white text-sm">
            확인
          </button>
          <button className="px-6 py-1 bg-[#c0c0c0] border-t-white border-l-white border-r-black border-b-black border-2 text-sm">
            취소
          </button>
        </div>
    </div>
  </div>
</div>
    );   
}
export default Windowsboxwhite;