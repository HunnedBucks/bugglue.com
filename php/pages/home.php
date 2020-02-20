<div class='home-container'> 
    <form id='search-form'>
        <input type='search' name='seach' value='' placeholder='enter an address'> 
        <label for='search-type'>Search Area:</label>
        <select id='area-type'>
            <option value='address'>Address</option>
            <option value='city'>City</option>
            <option value='state'>State</option>
            <option value='date'>Date</option>
            <option value='zip'>Zip</option>
            <option value='all'>All Areas</option>
        </select>
        <label for='search-radius'>Search Radius</label>
        <select id='search-radius'>
            <option value='0 miles'>0 Miles<option>
            <option value='10 miles'>10 Miles<option>
            <pption value='50 miles'>50 Miles<option>
            <option value='100 miles'>100 Miles<option>
        </select>
        <label for='sort-type'>Sort By</label>
        <select id='sort-type'>
            <option value='date'>date<option>
            <option value='danger-level'>danger level<option>
            <pption value='distance'>distance<option>
        </select>
        <input type="reset">
        <input type='submit' name='search' value='SEARCH'>
    </form>
    <div id='search-results-wrapper'>
    <h1>Search Results</h1>
    <form id='search-display-options'>

        <input type="radio" id="map" name="display" value="map">
        <label for="map">Map</label><br>
        <input type="radio" id="list" name="display" value="list">
        <label for="female">List</label><br>
        <input type="radio" id="table" name="display" value="table">
        <label for="other">Table</label>

    </form>
    
    <div id='search-results-display'></div>
    
    <form id='search-results-options'>

    </form>
        <input type='button'>Save Results</input>
        <input type='button'>Send</input>
        <input type='button'>Download</input>
        <input type='button'>Create an Alert</input>
        <input type='button' id='clear-search-btn'>Clear</input>
    </div>

</div>

<p>
    