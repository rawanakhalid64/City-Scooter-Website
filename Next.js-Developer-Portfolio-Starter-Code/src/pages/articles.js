import React from "react";
import Head from "next/head";
import TransitionEffect from "@/components/TransitionEffect";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import article1 from "../../public/images/articles/pagination component in reactjs.jpg"
import article2 from "../../public/images/articles/create loading screen in react js.jpg"
import article3 from "../../public/images/articles/create modal component in react using react portals.png"
import { motion, useMotionValue } from "framer-motion";
import {useRef} from 'react'

const FramerImage = motion(Image);

const MovingImage =({title,img,link})=>{
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const imgRef = useRef(null);

function handleMouse(event){
    imgRef.current.style.display = "inline-block"
    x.set(event.clientX);
    y.set(event.clientY - 10);
}
function handleMouseLeave(event){
    imgRef.current.style.display = "none"
    x.set(0)
    y.set(0)

}


    return(
        <Link href={link} target="_blank"
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
        >
        <h2 className="capitalize text-xl font-semibold hover:underline relative"> {title} </h2>
        <FramerImage 
        style={{x:x ,y:y}}
        ref={imgRef} src={img} alt={title}  className="z-10 w-96 h-auto hidden absolute rounded-lg" />
        </Link>
    )
}

const Article = ({img , title , date , link})=>{

        return(
            <li className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark 
            first:mt-0 border border-solid border-dark dark:border-light border-r-4 border-b-4 dark:bg-dark dark:text-light            ">
               <MovingImage title={title} image={img} link={link} />
                <span className="text-primary dark:text-primaryDark font-semibold pl-4">{date}</span>
            </li>
        )
}

const FeaturedArticle = ({ img, title, summary, link, time }) => {
  return (
    <li className=" relative col-span-1 w-full p-4 bg-light dark:bg-dark border border-solid border-dark dark:border-light rounded-2xl">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light"/>
      <Link
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage src={img} alt={title} className="w-full h-auto hover:underline"
        whileHover={{scale:1.05}}
        transition={{duration:0.2}}
        
        />
      </Link>

      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold  dark:text-light my-2 mt-4">{title}</h2>
      </Link>
      <p className="text-sm mb-2 dark:text-light">{summary}</p>
      <span className="text-primary  dark:text-primaryDark font-semibold">{time}</span>
    </li>
  );
};

const articles = () => {
  return (
    <>
      <Head>
        <title>City Scooter | المقلات</title>
        <meta name="description" content="h4of m3 ahmed" />
      </Head>
      <TransitionEffect />

      <main
        className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden"
        dir="rtl"
      >
        <Layout className="pt-16">
          <AnimatedText text="الكلمات يمكن أن تغير العالم!" className="mb-16" />

          <ul className="grid grid-cols-2 gap-16">
            <FeaturedArticle 
              title="قم ببناء مكون ترقيم صفحات مخصص في Reactjs من الصفر"
              summary="تعرف على كيفية إنشاء مكون ترقيم صفحات مخصص في ReactJS من البداية. 
اتبع هذا الدليل خطوة بخطوة لدمج مكون ترقيم الصفحات في مشروع ReactJS الخاص بك.
9 دقائق قراءة
"
            time="9 min read"
            link="/"
            img={article1}
            />

<FeaturedArticle 
              title="قم ببناء مكون ترقيم صفحات مخصص في Reactjs من الصفر"
              summary="تعرف على كيفية إنشاء مكون ترقيم صفحات مخصص في ReactJS من البداية. 
اتبع هذا الدليل خطوة بخطوة لدمج مكون ترقيم الصفحات في مشروع ReactJS الخاص بك.
9 دقائق قراءة
"
            time="9 min read"
            link="/"
            img={article2}
            />
          </ul>
          
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32 dark:text-light">كل المقلات </h2>
            <ul>
                <Article
                title="إنشاء شاشات تحميل مذهلة في React: إنشاء 3 أنواع من شاشات التحميل"
                date="August 18 ,2024"
                link="/"
                img={article3}
                />
                <Article
                title="إنشاء شاشات تحميل مذهلة في React: إنشاء 3 أنواع من شاشات التحميل"
                date="August 18 ,2024"
                link="/"
                img={article3}
                />
                <Article
                title="إنشاء شاشات تحميل مذهلة في React: إنشاء 3 أنواع من شاشات التحميل"
                date="August 18 ,2024"
                link="/"
                img={article3}
                />
                <Article
                title="إنشاء شاشات تحميل مذهلة في React: إنشاء 3 أنواع من شاشات التحميل"
                date="August 18 ,2024"
                link="/"
                img={article3}
                />
                <Article
                title="إنشاء شاشات تحميل مذهلة في React: إنشاء 3 أنواع من شاشات التحميل"
                date="August 18 ,2024"
                link="/"
                img={article3}
                />
            </ul>
        </Layout>
      </main>
    </>
  );
};

export default articles;
