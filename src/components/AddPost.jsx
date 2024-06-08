import React, { useState } from 'react'
import NavBar from './NavBar'

const AddPost = () => {
    const[data,changeData]=useState(
        {
            "Postid":"",
            "Postname":"",
            "Description":"",
            "Postcomment":"",
            "Choosenfile":""
        }
    )
    const inputHandler=(event)=>{
        changeData({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(data)
    }
  return (
    <div>
        <NavBar/>
        <h1 align="center"><u>POST DETAILS</u></h1>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Post id</label>
                            <input type="text" className="form-control" name='Postid'value={data.Postid} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">post name</label>
                            <input type="text" className="form-control" name='Postname' value={data.Postname} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Description</label>
                            <textarea  className="form-control" name='Description' value={data.Description} onChange={inputHandler}></textarea>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">post comment</label>
                            <input type="text" className="form-control" name='Postcomment' value={data.Postcomment} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">choosen file</label>
                           <input type="file" className="form-control" name='Choosenfile' value={data.Choosenfile} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                           <button className="btn btn-success" onClick={readValue}>SUBMIT</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddPost