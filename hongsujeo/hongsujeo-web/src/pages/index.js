import React from "react"
import {Slide} from '../components/slide';

export default function Home() {
  const thirdSlideTitle="오늘의 학식";
  return (
    <div>
      <h1>홍수저</h1>
      <Slide title="검색창">검색 내용을 보여줍니다.</Slide>
    
      <Slide title="에타 크롤링 자료">에타에서 크롤링한 식당 후기를 보여줍니다.</Slide>  
    
      <Slide title = {thirdSlideTitle}>오늘의 학식 정보를 보여줍니다.</Slide>
    </div>
  );
}
