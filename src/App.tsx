import React from 'react';

interface Props {
    className?: string;
}

const App: React.FC<Props> = ({ className }) => {
    return (
        <div className={className}></div>
    );
};

export default App;