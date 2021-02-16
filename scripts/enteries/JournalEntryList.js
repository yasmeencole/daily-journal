// JournalEntryList is responsible for rendering a list of journal entry components

import { useJournal, getEntries  } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

const contentElement = document.querySelector(".journalEntryContainer")

export const entryList = () => {
    getEntries()
    .then(() => {
        const entriesArray = useJournal()
        render(entriesArray)
    })
}


// DOM reference to where all entries will be rendered
const render = (entriesCollection) => {
    let entriesHTMLRepresentation = ""

    for (const entryObj of entriesCollection) {
        entriesHTMLRepresentation += JournalEntryComponent(entryObj)
    }

    contentElement.innerHTML += `
        <h2>Yasmeen's Journal Entries</h2>
        <div class="entryList">
            ${entriesHTMLRepresentation}
        </div>
        `
}