function StatusMessage({statusMessage}){
    if(statusMessage){
        return(<div className="error-message" aria-label="error">{statusMessage}</div>);
    };
};

export default StatusMessage;