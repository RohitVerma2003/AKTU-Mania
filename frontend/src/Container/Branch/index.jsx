import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import BranchPageApiService from '../../Services/BranchPage';
import Loading from '../../Components/Loading';
import CardNote from '../../Components/CardNote.jsx';

const Branch = () => {
    const params = useParams();
    const { courseId } = params;

    const [loading, setLoading] = useState(true);
    const [branch, setBranch] = useState([]);

    useEffect(() => {
        BranchPageApiService(courseId)
            .then((response) => {
                setBranch(response?.data?.branchDetails);
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
                {branch.map((ele) => (
                    <Link className='link' key={ele._id} to={`/year/${courseId}/${ele._id}`}>
                        <CardNote name={ele.name} />
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Branch
