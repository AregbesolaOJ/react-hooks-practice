import React, { useState } from 'react';

const Form = props => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [type, setType] = useState('');
    const [url, setUrl] = useState('');
    const handleClick = e => {
        e.preventDefault();
        props.handleClick(title, author, type, url);
        setTitle('')
        setAuthor('')
        setType('')
        setUrl('')
    };

    const handleTitleChange = e => {
        const { value } = e.target;
        setTitle(value.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ' '));
    };

    return (
        <div className="my-form">
            <h2 className="my-header" >Hacker News Headline</h2>
            <form>
                <input 
                    type="text" 
                    placeholder="Add Headline Title" 
                    value={title} 
                    onChange={handleTitleChange} 
                />
                <input 
                    type="text" 
                    placeholder="Author" 
                    value={author} 
                    onChange={e => setAuthor(e.target.value)} 
                />
                <select
                    type="text" 
                    placeholder="Add Todo" 
                    value={type}
                    onChange={e => setType(e.target.value)}                 
                >
                    <option value=''>---Select Type---</option>
                    <option value='story'>Story</option>
                    <option value='comment'>Comment</option>
                </select> 
                {type && 
                    <input 
                        type="text" 
                        placeholder="URL" 
                        value={url} 
                        onChange={e => setUrl(e.target.value)} 
                    />
                }
                <button onClick={e => handleClick(e)}>Add</button>
            </form>            
        </div>
    );
};
export default Form;