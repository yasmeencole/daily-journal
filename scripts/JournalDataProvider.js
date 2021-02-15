/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.
const journal = [
    {
        id: 1,
        date: "07/24/2025",
        concept: "HTML & CSS",
        entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
        mood: "Ok"
    },
    {
        id: 2,
        date: "02/15/2021",
        concept: "practicing things that have been covered",
        entry: "Today is a lab day because there is a snow storm moving across the US. Today I will be working on glassdale and daily journal.",
        mood: "hopeful"
    },
    {
        id: 3,
        date: "02/15/2021",
        concept: "practicing things that have been covered",
        entry: "Today I also would like to practice CSS.",
        mood: "happy"
    },
    {
        id: 3,
        date: "02/15/2021",
        concept: "practicing things that have been covered",
        entry: "I also would like to find better ways to work.",
        mood: "happy"
    }
]

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}