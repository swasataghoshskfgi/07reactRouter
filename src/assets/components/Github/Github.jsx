import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState([]);
    useEffect(() => {
         fetch('https://api.github.com/users/swasataghoshskfgi')
            .then(response => response.json())
            .then(data => {
                console.log(data.followers);
                setData(data)
            })
    }, []);


    return (
        <>

            <div className='bg-gray-800 text-white text-3xl px-6 py-10 p-8  justify-center flex '>
                <img className='rounded-full ml-10 ' src={data.avatar_url} alt="" width={300} />
                <div className='py-10 pl-20 pr-10 text-start'>
                    Github followers : <span className='text-blue-500 '> {data.followers}</span> <br />
                    Github Bio : <span className='text-blue-500 '>{data.bio}</span> <br />
                    {/* Github Blog : <span className='text-blue-500 '>{data.blog}</span>  <br /> */}
                </div> 
            </div>

        </>

    )
}

export default Github