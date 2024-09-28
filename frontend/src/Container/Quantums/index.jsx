import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import QuantumsPageApiService from '../../Services/QuantumsPage';
import Loading from '../../Components/Loading';
import QuantumsCard from '../../Components/QuantumsCard.jsx';

const Quantums = () => {
    const params = useParams();
    const { courseId, branchId, yearId } = params;

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        QuantumsPageApiService(courseId, branchId, yearId)
            .then((response) => {
                setData(response?.data?.quantumsData?.data || []);
                setLoading(false);
                console.log(response);
            })
            .catch((error) => console.log(error));
    }, []);

    if (loading) {
        return <Loading />;
    }
    return (
        <div>
            <div className='w-100 mx-2 my-3 d-flex justify-content-around gap-3 flex-wrap'>
                {data.map((ele) => (
                    <Link className='link' key={ele._id} to={ele.pdfURL} target='_blank'>
                        <QuantumsCard name={ele.name} image={ele.image}/>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Quantums
