

export function TaskCounter({tasks, predicate}) {
    return <span className='container'>{tasks.filter(predicate).length} items left</span>;
}