import React, { useState } from 'react';


const Carousel = ({ columns, data, ElementType }) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const slides = Math.ceil(data.length / columns);
    let dGrid = `grid-cols-${columns}`;

    return (
        <div>
            <div className={`md:grid md:${dGrid} md:gap-5 py-4 md:my-6 h-auto overflow-hidden`}>
                {data.slice(currentIndex, currentIndex + columns).map(element => {
                    return (
                        <ElementType key={element.id} data={element} />
                    )
                })}
            </div>
            {
                slides > 1 && (
                    <div className='flex flex-row gap-5 justify-center'>
                        {
                            Array(slides).fill(0).map((val, idx) => (
                                <div
                                    key={idx}
                                    className={`
                                        w-[30px] 
                                        border-[3px] 
                                        rounded-sm 
                                        cursor-pointer 
                                        ${currentIndex / columns === idx ? 'border-th-title-10' : 'border-th-bg-30'}`}
                                    onClick={() => {
                                        setCurrentIndex(idx * columns)
                                    }}
                                />
                            ))
                        }
                    </div>
                )
            }
        </div>
    );
};

export default Carousel;
