import React from 'react'
import Head from 'next/head'
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Image from 'next/image'
import profilePic from "../../public/images/profile/developer-pic-2.jpg"
import { useRef } from 'react';
import { motion, useMotionValue ,useSpring ,useInView} from "framer-motion"
import{useEffect} from 'react';
import TransitionEffect from "@/components/TransitionEffect"


const AnimatedNumbers =({value}) =>{
    const ref= useRef(null);
    // console.log(ref)
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {duration:3000} )
    const isInView =useInView(ref);

    useEffect(()=>{
        if(isInView){
            motionValue.set(value)
        }
    },[isInView,value , motionValue])

    useEffect(()=>{
        springValue.on("change" , (latest)=>{
            if(ref.current && latest.toFixed(0) <= value){
                ref.current.textContent = latest.toFixed(0)
            }
        })
    },[springValue,value])
  
    return<span ref={ref}> </span>
}

const about = () => {
  return (
   <>
   <Head>
       
        <title>City Scooter | تعرف عنا</title>
        <meta name="description" content="h4of m3 ahmed" />
   </Head>
   <TransitionEffect/>
   <main 
   className='flex w-full flex-col items-center justify-center dark:text-light'
   dir='rtl'
   >
   <Layout className='pt-16'>
   <AnimatedText text="العاطفة وقود الغرض!" className='mb-16 lg:!text-7xl sm:!text-6xl xs:text-!4xl sm:mb-8'/>
   
   <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
    <div className='col-span-3 flex  flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8 '>
       <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>سيرة ذاتية</h2> 
    <p className='font-medium'>
    مرحبًا، أنا CodeBucks، مطور ويب ومصمم UI/UX ولدي شغف لإنشاء تصميمات جميلة وعملية 
والتجارب الرقمية التي تركز على المستخدم. مع خبرة 4 سنوات في المجال. أنا أبحث دائما عن 
طرق جديدة ومبتكرة لتحقيق رؤى عملائي على أرض الواقع.
    </p>
    <p className='my-4 font-medium'>
    أعتقد أن التصميم يدور حول أكثر من مجرد جعل الأشياء تبدو جميلة - فهو يدور حول حل المشكلات و 
    خلق تجارب بديهية وممتعة للمستخدمين.
    </p>
    <p className=' my-4 font-medium'>
    سواء كنت أعمل على موقع ويب أو تطبيق جوال أو 
المنتجات الرقمية الأخرى، أحمل التزامي بالتميز في التصميم والتفكير الذي يركز على المستخدم 
كل مشروع أعمل عليه. إنني أتطلع إلى الفرصة لجلب مهاراتي وشغفي إلى مشروعك القادم.
    </p>
    
    </div>


    <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 xl:col-span-4 md:order-1 md:col-span-8'>
        <div className='absolute top-0 -right-3 -z-10 w-[102%]  h-[103%] rounded-[2rem] bg-dark  '/>
        <Image src={profilePic} alt="about-img"
       className='w-full h-auto rounded-2xl'
       priority
       sizes="(max-width:768px) 100vw , (max-width:1200px)50vw , 33vw"
       />
    </div>
    <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
    <div className=' flex flex-col items-end justify-center xl:items-center'>
      <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
        <AnimatedNumbers value={50}/>+
        </span>  
        <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm
        '>  عملاء راضين</h2>
    </div>
    <div className=' flex flex-col items-end justify-center '>
      <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
      <AnimatedNumbers value={40}/>+
        </span>  
        <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>مشاريع مكتملة</h2>
    </div>
    <div className=' flex flex-col items-end justify-center'>
      <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
      <AnimatedNumbers value={4}/>+
        </span>  
        <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>  سنوات من الخبره </h2>
    </div>
    
    </div>
    </div>
   </Layout>
   </main>
   
   </>
  )
}

export default about