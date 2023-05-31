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
            <div className='create-post-Page'>
                <div className='container'>
                    <div className='create-Post-Header'>
                        <div className='create-post-title'>CreatePost</div>
                    </div>
                    <div className='create-Post-Body'>
                        <div className='form'>
                            <div className='form-group'>
                                <div className="username-input">
                                    <input
                                        type="text"
                                        placeholder='title'
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)} />
                                </div>
                                <div className="username-input">
                                    <input
                                        type="text"
                                        placeholder='Summary'
                                        value={summary}
                                        onChange={(e) => setSummary(e.target.value)} />
                                </div>
                                <div className="username-input">
                                    <input
                                        type="file"
                                        placeholder='Image'
                                        value={image}
                                        onChange={(e) => setImage(e.target.value)} />
                                </div>
                                <div className="username-input">
                                    <input
                                        type="number"
                                        placeholder='Price...'
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)} />
                                </div>
                                <button className="register-btn" onClick={handleAddItem}>Add Item </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default CreatePost