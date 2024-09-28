import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Loading from '../../Components/Loading';
import YearPageApiService from '../../Services/YearPage';
import YearNote from '../../Components/YearNote';

const Year = () => {
    const params = useParams();
    const { courseId, branchId } = params;

    const [loading, setLoading] = useState(true);
    const [years, setYears] = useState([]);

    useEffect(() => {
        YearPageApiService(courseId)
            .then((response) => {
                setYears(response?.data?.yearDetails);
                setLoading(false);
            })
            .catch((error) => console.log(error));
    }, []);

    if (loading) {
        return <Loading />;
    }
    
    return (
        <div>
            <div className='w-100 mx-2 my-3 d-flex justify-content-around gap-3 flex-wrap'>
                {years.map((ele) => (
                    <Link className='link' key={ele._id} to={`/data/${courseId}/${branchId}/${ele._id}`}>
                        <YearNote name={ele.yearNumber} />
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Year
