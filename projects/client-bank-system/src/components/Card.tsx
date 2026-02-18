import ICard from "../utils/utils";

export const Card = ({id, paragraph, details} : ICard) => {
    return (
        <>
            <div>
                <h1>Card {id}</h1>
                <p>{paragraph}</p>
                <p>{details}</p>
            </div>
        </>
    );
};