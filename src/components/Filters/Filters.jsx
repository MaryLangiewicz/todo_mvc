import "./filters.scss";

export function Filters({setFilter}) {
    return <div className='container'>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter(false)}>Active</button>
        <button onClick={() => setFilter(true)}>Completed</button>
    </div>;
}