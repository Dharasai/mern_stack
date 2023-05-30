import React, { useState } from 'react'

const CreatePost = () => {

    const [title, setTitle] = useState();
    const [summary, setSummary] = useState();
    const [price, setPrice] = useState();
    const [image, setImage] = useState();

    const handleAddItem = () => {
        console.log('title', title);
        console.log('summary', summary);
        console.log('price', price);
        console.log('image', image);
    };

    return (
        <React.Fragment>
            {/* main div */}
            <div className='create-post-Page'>
                {/*  section div*/}
                <div className='create-Post-Section'>
                    {/* cointainer */}
                    <div className='container'>
                        {/* If we need any card like structure you must need to use one more div for better sizes */}
                        <div className='create-Post-Card'>
                            <div className='create-post-title'>CreatePost</div>
                            <div className='create-Post-Body'>
                                {/*  */}
                                <div className='form'>
                                 {/* form div is a main parent div for grouping all the input */}
                                    <div className="username-input">
                                        {/* Here we need the  side by side first name and last name  */}
                                        {/* So we created one more div for the better adjustments */}
                                        <input
                                            type="text"
                                            placeholder='first name'
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)} />
                                        <input
                                            type="text"
                                            placeholder='last name'
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)} />
                                    </div>
                                    <input
                                        type="text"
                                        placeholder='title'
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)} />
                                        <input
                                            type="text"
                                            placeholder='Summary'
                                            value={summary}
                                            onChange={(e) => setSummary(e.target.value)} />
                                  
                                        <input
                                            type="file"
                                            placeholder='Image'
                                            value={image}
                                            onChange={(e) => setImage(e.target.value)} />
                               
                                        <input
                                            type="number"
                                            placeholder='Price...'
                                            value={price}
                                            onChange={(e) => setPrice(e.target.value)} />
                                    <button className="register-btn" onClick={handleAddItem}>Add Item </button>
                                </div>
                                {/* footer */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment >
    )
}

export default CreatePost