import React from 'react';

const List = (props) => {
    return (
        <div className="list">
            {props.items.map(item => (
                <ListItem key={item.id} {...item} hide={item.hide} handleDelete={() => props.handleDelete(item.id)}/>
            ))}
        </div>
    );
};

const ListItem = (props) => {
    const timeDifference = (current, previous) => {
        const msPerMinute = 60 * 1000;
        const msPerHour = msPerMinute * 60;
        const msPerDay = msPerHour * 24;
        const msPerMonth = msPerDay * 30;
        const msPerYear = msPerDay * 365;
    
        const elapsed = current - previous;

        if (elapsed < msPerMinute) {
             return Math.round(elapsed/1000) + ' seconds ago';   
        }    
        else if (elapsed < msPerHour) {
             return Math.round(elapsed/msPerMinute) + ' minutes ago';   
        }
        else if (elapsed < msPerDay ) {
             return Math.round(elapsed/msPerHour ) + ' hours ago';   
        }    
        else if (elapsed < msPerMonth) {
            return Math.round(elapsed/msPerDay) + ' days ago';   
        }
        else if (elapsed < msPerYear) {
            return 'About' + Math.round(elapsed/msPerMonth) + ' months ago';   
        }    
        else {
            return 'About ' + Math.round(elapsed/msPerYear ) + ' years ago';   
        }
    }
    const { time, title, type, by, score, url } = props;

    const hiddenStyle = { opacity: '0.1' };
    return (
        <div style={ props.hide ? hiddenStyle : null} className="list__item">
            <h2>{title}</h2>
            {/* <h3>{phrase.length > 20 ? (phrase.substring(0, 20) + '...') : phrase}</h3> */}
            {/* <h3>{phrase.length > 20 ? (phrase.substring(0, 20) + '...') : phrase}</h3> */}
            <p><a href={url} target="_blank" rel="noopener noreferrer"> Read {type}</a> by {by}</p>
            <div>Updated: {timeDifference(Date.now(), time)}{' || '} {score} points</div>
            <button onClick={props.handleDelete}>Delete</button>
        </div>
    );
};

export default List;