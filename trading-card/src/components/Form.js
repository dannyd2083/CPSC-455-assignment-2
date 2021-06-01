import React from 'react';

const Form = () => {
    return (
        <div className='addCard-div'>
            <h2>Add Card</h2>
            <form id="userInput" className="card-form">
                <label htmlFor="Name">Name:</label>
                <input type="text" id="Name" name="name" />
                    <label htmlFor="Traits">Traits:</label>
                    <input type="text" id="Traits" name="traits"/>
                        <label htmlFor="Price"> Price: </label>
                        <input type="number" id="Price" name="price" min="1" max="5"/>
                            <label htmlFor="URL"> Image URL: </label>
                            <input type="url" id="URL" name="url"/>
                                <input type="submit" value="Submit" id="submit"/>
                                    <input type="reset" id="reset-form"/>
                                        <label htmlFor="DeleteAll" id="DeleteAllLabel">Delete All Card:</label>
                                        <input type="button" value="delete" id="DeleteAll"/>
                                            <label htmlFor="Reload" id="ReloadInitial">Reload:</label>
                                            <input type="button" value="Reload" id="Reload"/>
            </form>
        </div>
    );
};

export default Form;
