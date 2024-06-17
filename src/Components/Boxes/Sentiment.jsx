import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import storeContext from '../../Auth/Store';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const Sentiment = () => {
    const [num, setNum] = useState(0);
    const [data, setData] = useState([]);
    const key = useContext(storeContext);

    useEffect(() => {
    const interval = setInterval(() => {
      setNum(prevNum => {
        if (prevNum === 40) {
          return 0; 
        } else {
          return prevNum + 1; 
        }
      });
    }, 10000);

    return () => clearInterval(interval);
  }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://www.alphavantage.co/query?function=NEWS_SENTIMENT&apikey=${key}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                if (response.ok) {
                    const responseData = await response.json();
                    setData(responseData);

                    // Store data in localStorage
                    localStorage.setItem('sentimentData', JSON.stringify(responseData));
                } else {
                    toast.error('Failed to fetch data');
                }
            } catch (error) {
                toast.error('Failed to fetch data');
            }
        };

        // Check if data exists in localStorage
        const storedData = localStorage.getItem('sentimentData');
        if (!storedData) {
            fetchData(); // Fetch data only if not in localStorage
        } else {
            setData(JSON.parse(storedData)); // Use data from localStorage
        }
    }, [key]); // Include key in dependency array if it affects the API call

    return (
        <>
            <Toaster />
            <div className='rounded-[8px] h-auto w-[600px] bg-[#262424] p-[20px] flex flex-col gap-[150px] max-ld-[600px]'>
                <div>
                    <p className='text-[12px] p-[8px] bg-black w-max rounded-xl transition'>
                        The Markets are {data && data.feed && data.feed.length > 0 ? data?.feed[num]?.overall_sentiment_label : 'Loading...'}
                    </p>
                </div>
                <div className='flex flex-col gap-[10px]'>
                    <p className='text-[14px]'>What you need to know today</p>
                    <Link to={data && data.feed && data.feed.length > 0 ? data.feed[num].url : null}>
                        <p className='text-[16px]'>{data && data.feed && data.feed.length > 0 ? data.feed[num].title : 'Loading...'}</p>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Sentiment;
