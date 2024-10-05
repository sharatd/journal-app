import React from 'react'

const JournalEntries = ({ entries }) => {
    return (
        <div>
            <h3>Journal Entries</h3>
            {entries.map((entry, index) => (
                <div key={index} style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ccc'}}>
                    <p>{entry.text}</p>
                    <p><strong>Checked:</strong>{entry.checkbox.checked ? 'Yes' : 'No'}</p>
                    <p><strong>Hashtags:</strong>{entry.hashtags.join(', ')}</p>
                </div>  
            ))}
        </div>
    )
}

export default JournalEntries