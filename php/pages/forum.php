<div id='forum-content-wrapper'>
    <form>
        <input type='button'>Highlights</input>
        <input type='button'>Feed</input>
        <input type='button'>Discussions</input>
    </form>
    <table>

    </table>
</div>

<form id='create-message'>
    <label>Send

        <label for="description">Description:</label>
        <textarea id="description" rows="4" cols="50"></textarea>

        <input type='submit' name='send-message' value='send'>
        
    </label>
</form>

<form id='create-report'>
    
    <div id='type-container'>

        <input type="checkbox" id="active-threat" name="active-threat" value="active">
        <label for="active-threat">This is an active threat</label>

        <label for="report-date">Date</label>
        <input type="date" id="report-date" name="report-date">
    </div>
    <div id='comments'>
        <input type="checkbox" id="allow-comments" name="allow-comments" value="allow-comments">
        <label for="allow-comments">Allow Comments</label>
        
        </label for='explain-comments'>explain this</label>
        <input type='button' name='explain-comments'>
    </div>

    <div id='descriptions'>
        <label>Subject
            <input type='text' name='subject' placeholder='subject of report'>
        <label>

        <label for="description">Description:</label>
        <textarea id="description" rows="4" cols="50"></textarea>
    </div>

    <div id='report-options'>
        <input type="checkbox" id="anonymous-submission" name="anonymous-submission" value="active">
        <label for="anonymous-submission">Submit Anonymously</label>

        <input type="checkbox" id="contacts-included" name="contacts-include" value="active">
        <label for="anonymous-submission">Contacts Included</label>
    </div>

    <label for='submit-report'>Submit
        <input type='submit' name='submit-report' value='submit-report'>
    </label>         
    
</form>