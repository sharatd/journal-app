import React, { useState } from 'react';

const JournalEntryForm = ({ addEntry }) => {
    const [entryText, setEntryText] = useState('')
    const [checkbox, setCheckbox] = useState(false)
    const [hashtags, setHashtags] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (entryText.trim()) {
            addEntry({ text: entryText, checkbox, hashtags: hashtags.split(',').map(tag => tag.trim()) })
            setEntryText('')
            setHashtags('')
            setCheckbox(false)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <textarea
                    value={entryText}
                    onChange={(e) => setEntryText(e.target.value)}
                    placeholder="Write your journal entry..."
                    rows="4"
                    style={{ width: '100%' }}
                />
            </div>
            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={checkbox}
                        onChange={(e) => setCheckbox(e.target.checked)}
                    />
                    Check this box if needed
                </label>
            </div>
            <div>
                <input
                    type="text"
                    value={hashtags}
                    onChange={(e) => setHashtags(e.target.value)}
                    placeholder="Add hashtags (comma separated)"
                    style={{ width: '100%' }}
                />
            </div>
            <button type="submit">Add Entry</button>
        </form>
    )
}

export default JournalEntryForm