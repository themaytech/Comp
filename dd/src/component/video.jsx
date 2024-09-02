import React, { useState, useEffect } from 'react';

function VideoUp() {
    return (
        <>
            <div className="flex flex-row justify-between px-5 mt-2">
                <div className="title">
                    <h4>Expalin.Mp4</h4>
                </div>
                <div className="dd md:flex md:flex-row inline-block">
                    <button className='px-3 py-1 border-1 border-zinc-100 rounded-md flex flex-row'><span><img src="https://cdn-icons-png.flaticon.com/128/2926/2926214.png" alt="" style={{width:'20px'}} /></span>Downloads</button>
                    <button className='px-3 py-1 border-1 border-zinc-100 rounded-md flex flex-row'><span><img src="https://cdn-icons-png.flaticon.com/128/484/484662.png" alt="" style={{width:'20px'}} /></span>Delete</button>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 px-5 py-2 rounded-md">
                <div className='vid flex flex-col justify-center  rounded-md'>
                <video className='w-full rounded-md' height="360" controls>
                    <source src="https://youtu.be/04yOOUwyyV0?si=QhMHyT-OTAailB27" type="video/mp4"></source>
                </video>
                    <div className="row flex justify-center justify-self-center px-2">
                        <ul className='flex flex-row justify-start mt-3 bg-zinc-800 h-10 py-4 items-center gap-2 rounded-md' style={{overflowY: 'hidden', // Disable vertical scrolling
                overflowX: 'scroll', // Enable horizontal scrolling
                msOverflowY: 'hidden', // Hide vertical scrollbar for IE/Edge
                scrollbarWidth: 'none'}}>
                            <li className='flex flex-row items-center py-3 text-white'>
                                <button className='bg-zinc-500 px-4 py-1 rounded-md'>Hello
                                </button>
                            </li>
                            <li className='flex flex-row items-center py-5 text-white'>
                                <button className='bg-zinc-500 px-4 py-1 rounded-md'>Hello
                                </button>
                            </li>
                            <li className='flex flex-row items-center py-5 text-white'>
                                <button className='bg-zinc-500 px-4 py-1 rounded-md'>Hello
                                </button>
                            </li>
                            <li className='flex flex-row items-center py-5 text-white'>
                                <button className='bg-zinc-500 px-4 py-1 rounded-md'>Hello
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="row flex flex-col">
                        <div className="dada mb-3.5">
                            <h5>Madata</h5>
                        </div>
                        <div className="desc mb-3.5">
                            <h6>Description</h6>
                        </div>
                        <div className="input mb-3.5">
                        <textarea
                            rows={3}
                            className="block w-full px-3 py-2 mt-1 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                            placeholder="Enter text here..."
                            style={{background:'transparent'}}
                        ></textarea>
                        <p className='mb-3.5'>
                        Enter the video meta description above. This will help search engines understand what the video is about.
                        </p>
                        </div>
                        <div className="save mb-3.5">
                            <button className='bg-amber-600 px-5 py-2 rounded-md'>
                                <b>Save Metadata</b>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='detail flex flex-col items-start mb-3.5'>
                    <div className="firstBlog flex flex-col w-full border-1 border-zinc-200 px-2 py-2 rounded-md mb-3.5">
                       <h4> <b>Video Info</b></h4>
                        <div className="title mb-3.5 w-full">
                            <h6>Video title</h6>
                            <input style={{background:'transparent'}} type="text"  className=" w-full px-2 py-1 rounded-md h-10 border-1 border-zinc-100"placeholder='Video Title' required/>
                        </div>
                        <div className="link mb-3.5 w-full">
                            <h6>Video ID</h6>
                            <input style={{background:'transparent'}} type="text" className=" w-full px-2 py-1 rounded-md h-10 border-1 border-zinc-100" placeholder='Video Link' required/>
                        </div>
                    </div>
                <div className="secondBlog flex flex-col w-full border-1 border-zinc-200 px-2 py-2 rounded-md">
                    <h4> <b>Link</b></h4>
                         <div className="title mb-3.5 w-full">
                            <h6>HLS PLayList Url</h6>
                            <input style={{background:'transparent'}} type="text"  className=" w-full px-2 py-1 rounded-md h-10 border-1 border-zinc-100"placeholder='Video Title' required/>
                        </div>
                        <div className="link mb-3.5 w-full">
                                <h6>Direct Play URL
                                </h6>
                                <input style={{background:'transparent'}} type="text" className=" w-full px-2 py-1 rounded-md h-10 border-1 border-zinc-100" placeholder='Video Link' required/>
                            </div>
                            <div className="link mb-3.5 w-full">
                                <h6>Preview Animation URL (WebP)
                                </h6>
                                <input style={{background:'transparent'}} type="text" className=" w-full px-2 py-1 rounded-md h-10 border-1 border-zinc-100" placeholder='Video Link' required/>
                            </div>
                        </div>
                    <div className="thirdBlog grid grid-cols-1 md:grid-cols-3">
                    </div>
                </div>
            </div>
        </>
    );
}

export default VideoUp