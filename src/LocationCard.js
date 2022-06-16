import React from "react";
import pin from './pin.png'


export default function LocationCard(props) {
    return (
        <div>
            <div className="card">
                <img className="card-img" src={props.imageUrl} alt="a location"></img>
                <div class="card-info">
                    <h4 className="card-country"><img src={pin} alt="pin"></img> {props.location} <a href={props.googleMapsUrl} target="blank"> view on google maps</a> </h4>
                    <h2 className="card-place">{props.title}</h2>
                    <h5 className="card-date">{props.startDate} - {props.endDate}</h5>
                    <p className="card-content">{props.description}</p>
                    <p className="card-description">{props.descriptionLong}</p>
                </div>
            </div>
            <hr />
        </div>
    )
}