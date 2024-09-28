import React, { useEffect, useState } from 'react';
import Loading from '../../Components/Loading';
import axios from 'axios';
import HomePageApiService from '../../Services/HomePage';
import CardNote from '../../Components/CardNote.jsx';
import { Link } from 'react-router-dom';

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        HomePageApiService()
            .then((response) => {
                setCourses(response?.data?.courseDetails);
                setLoading(false);
            })
            .catch(() => "Data Not Found");
    }, []);

    if (loading) {
        return <Loading />;
    }

    return (
        <div>
            <div className='w-100 mx-2 my-3 d-flex justify-content-around gap-3 flex-wrap'>
                {courses.map((ele) => (
                    <Link className='link' key={ele._id} to={`/branch/${ele._id}`}>
                        <CardNote name={ele.courseName}  />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Home;
