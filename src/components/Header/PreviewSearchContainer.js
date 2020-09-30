import React, { useState } from 'react'

import SearchBar from '../CommonComponents/SearchBar';
import SearchPage from '../SearchPage/SearchPage';

function PreviewSearchContainer(props) {

    const [previewSearchQuery, setPreviewSearchQuery] = useState('');

    return (
        <div className='PreviewSearchContainer'>
            <SearchBar setPreviewSearchQuery={setPreviewSearchQuery} />
            <div id='SearchResults'>
                <SearchPage searchQuery={previewSearchQuery} searchType='preview' />
            </div>
        </div>
    )
}

export default PreviewSearchContainer;