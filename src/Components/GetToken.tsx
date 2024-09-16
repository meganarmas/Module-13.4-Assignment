import React from "react";

const TokenDisplay: React.FC = () => {
    const token = sessionStorage.getItem('jwtToken_key');

    return(
        <div>
            <h5>Token Information:</h5>
            {token ? <p>Token: {token}</p> : <p>No token found</p>}
        </div>
    );
};

export default TokenDisplay;