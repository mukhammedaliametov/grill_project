import React from 'react';
import ourWorksImg from '../assets/our_works_bg.png';

const OurWorks = () => {
    return (
        <div className='container mx-auto px-[16px] my-[110px]'>
            <h2 className='text-primary-black text-[36px] lg:text-[44px] font-bold text-center font-jost mt-[80px] mb-[40px]'>Наши работы</h2>
        <div style={{backgroundImage: `url(${ourWorksImg})`}} className='w-full h-[100vh] bg-center bg-cover flex items-center justify-center lg:pl-[500px] px-[20px]'>
            <div className='inline-block bg-[#373E4680] backdrop-blur-[4px] rounded-[20px] px-[30px] py-[20px] text-white'>
                <h3 className='font-jost text-[20px] lg:text-[28px]/[31px] py-[12px] font-semibold'>Гриль-кухня <br /> из композитного материала</h3>
                <div className='flex flex-col gap-[16px] font-montserrat text-[14px] lg:text-[16px] mt-[12px]'>
                    <div className='flex items-top lg:items-center justify-between w-full'><p>Материал:</p><p className='text-right'>композитный HPL</p></div>
                    <div className='flex items-top lg:items-center justify-between w-full'><p>Тип размещения:</p><p className='text-right'>закрытая терраса</p></div>
                    <div className='flex items-center justify-between w-full'><p>Конфигурация:</p><p>прямая</p></div>
                    <p>* Оборудование и столешницы не входят в стоимость кухни</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default OurWorks;