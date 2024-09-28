import React from 'react'
import { Link, useParams } from 'react-router-dom'
import CardNote from '../../Components/CardNote.jsx';

const Data = () => {
    const params = useParams();
    const {courseId , branchId , yearId} = params;

    return (
        <div>
            {/* FOR CARD NOTES */}
            <div className='w-100 mx-2 my-3 d-flex justify-content-around gap-3 flex-wrap'>
                <Link className='link' to={`/quantums/${courseId}/${branchId}/${yearId}`}>
                    <CardNote name={"quantums"}/>
                </Link>
                <Link className='link' to={`/notes/${courseId}/${branchId}/${yearId}`}>
                    <CardNote name={"notes"}/>
                </Link>
                <Link className='link' to={`/pyqs/${courseId}/${branchId}/${yearId}`}>
                    <CardNote name={"pyqs"}/>
                </Link>
            </div>
        </div>
    )
}

export default Data
