import React, { useState } from 'react'

import SearchBar from '../CommonComponents/SearchBar';
import ResultsPage from '../CommonComponents/SearchPage/ResultsPage';

function PreviewSearchContainer(props) {

    const [previewSearchQuery, setPreviewSearchQuery] = useState('');

    return (
        <div className='PreviewSearchContainer'>
            <SearchBar setPreviewSearchQuery={setPreviewSearchQuery} />
            <div id='SearchResults'>
                <ResultsPage searchQuery={previewSearchQuery} searchType='preview' />
            </div>
        </div>
    )
}

export default PreviewSearchContainer;