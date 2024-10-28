// import React, { useEffect, useState } from 'react';

// const Loader = () => {
//     const [visible, setVisible] = useState(true);

//     useEffect(() => {
//         setTimeout(() => {
//             setVisible(false);
//         }, 3000);
//     }, []);

//     if (!visible) return null;

//     return (

//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-white gap-5">
//             <div className='bg-blue-500 h-[20px] w-[20px] rounded-full font-bold animate-bounce dot1'></div>
//             <div className='bg-orange-500 h-[20px] w-[20px] rounded-full font-bold animate-bounce dot2'></div>
//             <div className='bg-blue-500 h-[20px] w-[20px] rounded-full font-bold animate-bounce dot3'></div>
//         </div>

//     );
// };

// export default Loader;



import React, { useEffect, useState } from 'react';

const Loader = () => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
        }, 3000);

        return () => clearTimeout(timer); 
    }, []);

    if (!visible) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white gap-5">
            <div className="dot bg-blue-500 h-[20px] w-[20px] rounded-full animate-bounce1"></div>
            <div className="dot bg-orange-500 h-[20px] w-[20px] rounded-full animate-bounce2"></div>
            <div className="dot bg-blue-500 h-[20px] w-[20px] rounded-full animate-bounce3"></div>
        </div>
    );
};

export default Loader;
