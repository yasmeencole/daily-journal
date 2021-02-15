// JournalEntryList is responsible for rendering a list of journal entry components

import { useJournalEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

// DOM reference to where all entries will be rendered
export const EntryListComponent = () => {
    
    const contentElement = document.querySelector(".journalEntryContainer")
    const entriesArray = useJournalEntries()

    let entriesHTMLRepresentation = ""

    for (const entryObj of entriesArray) {
        entriesHTMLRepresentation += JournalEntryComponent(entryObj)
    
    }

    contentElement.innerHTML += `
        <h2>Yasmeen's Journal Entries</h2>
        <div class="entryList">
            ${entriesHTMLRepresentation}
        </div>
        `
}