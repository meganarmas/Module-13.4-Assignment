import React from "react";

interface SessionStorageManagerProps{
    token: string | null;
}

const SessionStorageManager: React.FC<SessionStorageManagerProps> = ({ token }) => {
    React.useEffect(() => {
        if (token) {
            sessionStorage.setItem('jwtToken_key', token);
        } else {
            sessionStorage.removeItem('jwtToken_key');
        }
    }, [token]);

    return null;
};

export default SessionStorageManager