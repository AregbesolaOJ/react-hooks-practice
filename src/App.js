import React, 
{   
    useEffect,
    useReducer 
} 
from 'react';
import Form from './Form';
import List from './List';
import { data as DefaultData } from './Data';
import Loader  from './Loader';
import Banner from './Banner';
import { postReducer } from './reducer';
import './App.css';

const App = () => {
    let [state, dispatch] = useReducer(postReducer, {
        data: [],
        loading: false,
        fetched: false
    });    
    const { loading, fetched, data } = state;
    
    useEffect(() => {
        // initialize Loader;
        dispatch({
            type: 'START_POSTS_FETCH',
        });
        const fetchedData = setTimeout(() => {
            const getStoredItems = JSON.parse(localStorage.getItem('data'));
        // check if there's an existing list of posts in storage;
            if (getStoredItems) {
                dispatch({
                    type: 'POSTS_FETCHED',
                    payload: getStoredItems
                });
            } else {
        // if not, make API call, manually created posts in this case;
                dispatch({
                    type: 'POSTS_FETCHED',
                    payload: DefaultData
                });
            }}, 1000);
            dispatch({
                type: 'SHOW_POSTS_FETCHED',
            });
        // stop Loader and display posts;                    
        return () => clearTimeout(fetchedData);
            
    }, []);

    const onAddTodo = (title, by, type, url) => {

        const newData = {
            id: Math.round(Date.now() * Math.random()), 
            title, 
            by, 
            type, 
            url, 
            score: Math.ceil(Math.random() * 40),
            time: Date.now()
        };

        dispatch({
            type: 'ADD_POST',
            newData
        });
        
        localStorage.setItem('data', JSON.stringify(data));
    };
    
    const onDeleteTodo = id => {
        const confirmDelete = window.confirm('Are you sure you want to delete this item from the list?');
        if (confirmDelete) {
            dispatch({
                type: 'ANIMATE_BEFORE_DELETE_POST',
                id
            }); 
            setTimeout(() => {
                dispatch({
                    type: 'DELETE_POST',
                    id
                }); 
            }, 1500)
        }
        localStorage.setItem('data', JSON.stringify(data));

    };    
    
    return (
        <div>
            { loading ?
            <div className="loader">
                <Loader />                
            </div>
            : fetched && (
                <div className="app">
                    <Form handleClick={onAddTodo}/>
                    <List items={data} handleDelete={onDeleteTodo}/>
                    <Banner />
                </div>)
            }
        </div>
    );
};
export default App;