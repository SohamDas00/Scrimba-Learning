import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { CiBookmark } from "react-icons/ci";
import { FaBookmark } from "react-icons/fa";


const Box = (props) => {
    const alertMess=()=>{
        alert("successfully applied!!");
    }
    const [isSaved,setIsSaved] =useState(false);
    const saved=()=>{
        setIsSaved(!isSaved);
    }
    return (
        <>
            <Card className='border' style={{ width: '20rem', height: '360px', borderRadius: "10px" }}>
                <Card.Body className='box'>
                    <div className="picture">
                        <img src={props.image} alt="" className='logo' />
                        <button className={`logo2 ${isSaved ? "saved" : ""}`}onClick={saved}>
                            <p className='save'>{isSaved?"saved":"save"}</p>
                            {isSaved ? <FaBookmark />:<CiBookmark />}
                        </button>
                    </div>
                    <div className='sub'>
                        <p className='sub1'>{props.company}</p>
                        <p className='sub2'>{props.day+" days ago"}</p>
                    </div>
                    <div className='title'>{props.role}</div>
                    <div className='tag-main'>
                        <p className='tag'>{props.tag1}</p>
                        <p className='tag'>{props.tag2}</p>
                    </div>
                    <hr />
                    <div className="buttom">
                        <div className="price">
                            <p className='dollar'>{"$ "+props.cost}</p>
                            <p className='adress'>{props.adress}</p>
                        </div>
                        <button type="button" className="btn btn-dark" onClick={alertMess}>Apply now</button>
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}

export default Box