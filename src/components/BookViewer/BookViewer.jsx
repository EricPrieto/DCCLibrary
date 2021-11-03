import React from "react";

const BookViewer = (props) => {
    return(
        <div className="row row.spacer">
        <div className="col-md-4">
            {/*Button here to move the previous book viewed*/}
            <button onClick={props.previousBook}>Previous</button>
        </div>
        <div className="col-md-4">
             {/*Display book wtih cover here*/}
             <h1>{props.book.title}</h1>
             <h4>{props.book.author}</h4>
        </div>
        <div className="col-md-4">
            {/*Button here to move the previous book viewer*/}
            <button onClick={props.nextBook}>Next Book</button>
        </div>         
    </div>
    );
}

export default BookViewer;