import React from 'react';


function PreviewPage(){
    return(
        <div className='previewPage'>
            <div className='firstCol'>
                <img className='img' src={'https://images.unsplash.com/photo-1590487988256-9ed24133863e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=728&q=80'} />
            </div>
            <div className='secondCol'>
                <h1>About <span>A.M.F.</span></h1>
                <p>
I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
            </div>
        </div>
    )
}

export default PreviewPage;