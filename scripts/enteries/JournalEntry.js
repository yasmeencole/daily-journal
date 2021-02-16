// JournalEntry is responsible for rendering a single journal entry.

/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
        <h3>Today's Journal Entry</h3>   
        <p class="journalDate">${entry.date}</p>
        <p class="journalEntryText">${entry.entry}</p>
        </section>
    `
}
