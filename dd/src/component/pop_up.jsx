import './style.css';
import React, { useState } from 'react';

function Pop() {
    const [modal, setModal] = useState(false);

    const toggle = () => {
        setModal(!modal);
    }

    const handleClick =(event)=>{
        let name = event.target.className;
        if(modal && name=='main'){
            toggle();
        }
    }

    return (
        <>
            <div className="main" onClick={handleClick}>
                {!modal && <button onClick={toggle} className='rounded-md border:1'>
                    <h1>
                        OPEN
                    </h1>
                </button>}
                {modal && <div className='main'>
                    <div className="rounded-md overlay w-9/12 md:w-4/12 h-1/3 px-2 py-2" onClick={handleClick}>
                        <div className="logo w-full flex justify-center mb-1">
                            <img src="https://cdn-icons-png.flaticon.com/128/7931/7931221.png" alt="" style={{width:'10%',height:'auto'}}/>
                        </div>
                        <h3><b>Video</b></h3>
                        <h6 className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius asperiores dignissimos ullam vel exercitationem, dolores quibusdam fugiat similique minus nihil labore eum.</h6>
                        <div className="inp w-full">
                            <input type="text" className='w-full rounded-md text-black-900 placeholder-gray-900' placeholder='video describtion ....' style={{background:'transparent'}}/>
                        </div>
                        <div className="flex w-full justify-around mt-4">
                            <button class="bg-stone-500 shadow-lg shadow-cyan-500/50 px-4 py-1 w-2/5 rounded-md">Subscribe</button>
                            <button class="bg-stone-500 shadow-lg shadow-cyan-500/50 px-4 py-1 w-2/5 rounded-md">Subscribe</button>
                        </div>
                    </div>
                    </div>}
            </div>
        </>
    )
}

export default Pop;