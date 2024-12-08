import React, { useState } from 'react';


function LayoutExample() {

    const [isVisible, setIsVisible] = useState(false);

    const slideToMessage = () => {
      setIsVisible(true);
    };

    const slideToMatching = () => {
        setIsVisible(false);
      };

    return(
        <div className="flex max-w-screen max-h-screen">
            <div className="flex p-2 gap-2 border-4 border-black grow min-h-full m-2">
                <div className="flex flex-col border w-[400px] rounded-md p-2">
                    <div className="flex p-2 border w-full h-20 m-0.5"></div>
                    <div className="flex p-2 border w-full h-12 gap-4 m-0.5">
                        <button 
                            type="button" 
                            onClick={slideToMatching} 
                            className="bg-sky-500 hover:bg-sky-700 rounded-md"
                        >
                        新飯友
                        </button>
                        <button 
                            type="button" 
                            onClick={slideToMessage} 
                            className="bg-sky-500 hover:bg-sky-700 rounded-md">
                        訊息
                        </button>
                    </div>
                    <div className="relative overflow-hidden border w-full h-full m-0.5">
                        <div
                            className="flex absolute w-full h-full bg-gradient-to-b from-ao to-cha transition-all duration-200"
                            style={{ right: isVisible? "0" : "-400px"}} // Use inline style for sliding from the right
                        >
                            {/* Content of the sliding div */}
                            {isVisible && 
                            <div className="w-full overflow-x-hidden overflow-y-scroll no-scrollbar m-0.5">
                                <div className="flex p-2 border w-full h-[1500px]"></div>
                            </div>
                            }
                        </div>
                    </div>
                </div>
                <div className="flex flex-col border grow min-h-max rounded-md p-2">
                    <div className="flex p-2 border w-full h-40 m-0.5"></div>
                    <div className="w-full overflow-y-scroll no-scrollbar m-0.5">
                        <div className="flex p-2 grow h-[1500px] bg-gradient-to-b from-ao to-cha"></div>
                    </div>
                    <div className="flex p-2 border w-full h-32 m-0.5"></div>
                </div>
            </div>
        </div>
    );
}

export default LayoutExample;

{/* <div className="flex p-2 grow h-[1500px] bg-gradient-to-b from-ao to-cha">
<div className="fixed p-2 h-16 bg-white m-0.5"></div>
</div> */}